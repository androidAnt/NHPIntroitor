<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="${root}/components/dateRange/dateRange.css"/>
<script type="text/javascript" src="${root}/components/dateRange/dateRange.js"></script>
<div class="row">
    <div class="col-lg-6" style="padding: 0;margin-bottom: 10px;">
        <div class="input-group">
        
            <input type="text" name="title" id="title" value="${advert.title}" class="form-control"
                   placeholder="广告标题或商家,支持模糊查找"
                   maxlength="20">
            <span class="input-group-btn">
                <button class="btn btn-sm btn-success" type="button" id="fa-search"><i
                        class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                </button>
                <button class="btn btn-sm btn-info" type="button" data-toggle="modal" data-target="#searchModal"><i
                        class="ace-icon fa fa-star icon-on-right bigger-110"></i>高级查找
                </button>
            </span>
        </div>
    </div>
</div>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>广告列表</b>
        <shiro:hasPermission name="admin_advert_save">
            <a class="btn btn-xs btn-success pull-right" title="新增广告" href="${root}/admin/advert/toadd">
                <i class="ace-icon fa fa-plus-square bigger-120"></i>新增广告
            </a>
        </shiro:hasPermission>
    </div>
    <c:if test="${empty page.data}">
        <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
    </c:if>
    <c:if test="${not empty page.data}">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th width="50">序号</th>
                <th class="sort-th">广告标题
                    <c:if test="${fn:contains(page.sort, 'title')}">
                        <c:if test="${page.sort=='a.title DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.title"></i>
                        </c:if>
                        <c:if test="${page.sort=='a.title ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.title"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'title')}">
                        <i class="fa fa-sort" data-orderBy="a.title"></i>
                    </c:if>
                </th>
                <th class="sort-th">广告位置
                    <c:if test="${fn:contains(page.sort, 'apId')}">
                        <c:if test="${page.sort=='a.apId DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.apId"></i>
                        </c:if>
                        <c:if test="${page.sort=='a.apId ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.apId"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'apId')}">
                        <i class="fa fa-sort" data-orderBy="a.apId"></i>
                    </c:if>
                </th>
                <th class="sort-th" style="width: 100px;text-align: center;">开始时间
                    <c:if test="${fn:contains(page.sort, 'start_date')}">
                        <c:if test="${page.sort=='a.start_date DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.start_date"></i>
                        </c:if>
                        <c:if test="${page.sort=='a.start_date ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.start_date"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'sortNO')}">
                        <i class="fa fa-sort" data-orderBy="a.start_date"></i>
                    </c:if>
                </th>
                <th class="sort-th" style="width: 100px;text-align: center;">结束时间
                    <c:if test="${fn:contains(page.sort, 'end_date')}">
                        <c:if test="${page.sort=='a.end_date DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.end_date"></i>
                        </c:if>
                        <c:if test="${page.sort=='a.sortNO ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.end_date"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'end_date')}">
                        <i class="fa fa-sort" data-orderBy="a.end_date"></i>
                    </c:if>
                </th>
                
                <th class="sort-th" style="text-align: center;">省市</th>
                
                <th style="width: 48px;">状态</th>
                <th style="width: 256px;text-align: center;">操作</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
                    <td>
                        <c:if test="${not empty list.title}">${list.title}</c:if>
                        <c:if test="${empty list.title}">- - - -</c:if>
                    </td>
                    <td>
                        <c:if test="${not empty list.positionTitle}">${list.positionTitle}</c:if>
                        <c:if test="${empty list.positionTitle}">- - - -</c:if>
                    </td>
                    <!-- <td>${list.sortNO}</td>
                    <td>${ fn:substring(list.opDate ,0,19)}</td> -->
                    <td>${ fn:substring(list.startDate ,0,10)}</td>
                    <td>${ fn:substring(list.endDate ,0,10)}</td>
                    
                    <td>${list.province}&nbsp;${list.city}${list.county}</td>
                    
                    <td>
                        <c:if test="${list.state==0}">隐藏</c:if>
                        <c:if test="${list.state==1}">显示</c:if>
                    </td>
                    <td style="text-align: center;">
                        <shiro:hasPermission name="admin_advert_edit">
                            <c:if test="${list.state==0}">
                                <button class="btn btn-xs btn-warning editState" title="显示"
                                        data-aId="${list.aId}_1">
                                    <i class="ace-icon fa fa-unlock-alt bigger-120"></i>显示
                                </button>
                            </c:if>
                            <c:if test="${list.state==1}">
                                <button class="btn btn-xs btn-warning editState" title="隐藏"
                                        data-aId="${list.aId }_0">
                                    <i class="ace-icon fa fa-lock bigger-120"></i>隐藏
                                </button>
                            </c:if>
                        </shiro:hasPermission>
                        <shiro:hasPermission name="admin_advert_details">
                            <button title="查看详情" class="btn btn-xs btn-purple advertDetails" data-aId="${list.aId}">
                                <i class="ace-icon fa fa-eye bigger-120"></i>查看
                            </button>
                        </shiro:hasPermission>
                        <shiro:hasPermission name="admin_advert_edit">
                            <button class="btn btn-xs btn-info editAdvert" title="修改" data-aId="${list.aId}">
                                <i class="ace-icon fa fa-edit bigger-120"></i>修改
                            </button>
                        </shiro:hasPermission>
                        <shiro:hasPermission name="admin_advert_delete">
                            <button class="btn btn-xs btn-danger deleteAdvert" data-toggle="modal" data-target="#delAdvert"
                                    title="删除" data-aId="${list.aId}">
                                <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
                            </button>
                        </shiro:hasPermission>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
            <c:if test="${page.totalPageNO>1}">
                <thead>
                <tr>
                    <th colspan="9">
                        <tags:pagination formID="form1"></tags:pagination>
                    </th>
                </tr>
                </thead>
            </c:if>
        </table>
    </c:if>
</div>
<div id="searchModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div class="table-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">高级查询</h4>
                </div>
            </div>
            <div class="modal-body table-responsive">
                <form action="${root}/admin/advert" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" value="${page.sort}" id="sort" name="sort">
                    <input type="hidden" name="search_title" id="search_title" value="${advert.title}">
                    <div class="form-group">
                        <label for="search_apId" class="col-sm-2 control-label">广告位置:</label>
                        <div class="col-sm-10">
                            <select name="search_apId" id="search_apId" class="form-control">
                                <option value="">请选择广告位置</option>
                                <c:forEach items="${positionList}" var="positionList">
                                    <option value="${positionList.apId}" <c:if test="${advert.apId==positionList.apId}">selected</c:if>>${positionList.title}</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search_sortNO" class="col-sm-2 control-label">广告序号:</label>
                        <div class="col-sm-10">
                            <input type="number" name="search_sortNO" id="search_sortNO" class="form-control" value="${advert.sortNO}"
                                   placeholder="广告序号" maxlength="5" min="1" step="1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search_startDate" class="col-sm-2 control-label">操作时间:</label>
                        <div class="col-sm-10">
                            <div class="ta_date" id="div_date1">
                                <span class="date_title" id="date"></span>
                                <a class="opt_sel" id="input_trigger" href="#">
                                    <i class="i_orderd"></i>
                                </a>
                            </div>
                            <input type="hidden" name="search_startDate" id="search_startDate"
                                   value="${ fn:substring(advert.startDate ,0,10)}">
                            <input type="hidden" name="search_endDate" id="search_endDate"
                                   value="${ fn:substring(advert.endDate ,0,10)}">
                            <script type="text/javascript">
                                var dataRange = new pickerDateRange('date', {
                                    isTodayValid: true,
                                    startDate: $('#search_startDate').val(),
                                    endDate: $('#search_endDate').val(),
                                    needCompare: false,
                                    defaultText: ' 至 ',
                                    autoSubmit: true,
                                    inputTrigger: 'input_trigger',
                                    theme: 'ta',
                                    success: function (obj) {
                                        $('#search_startDate').val(obj.startDate);
                                        $('#search_endDate').val(obj.endDate);
                                    }
                                });
                                if ($('#search_startDate').val() == '') {
                                    $('.date_title').html('请选择时间段');
                                }
                            </script>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search_state" class="col-sm-2 control-label">状态:</label>
                        <div class="col-sm-10">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="search_state" value="1"
                                       <c:if test="${advert.state=='1'}">checked</c:if>>显示
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="search_state" id="search_state" value="0"
                                       <c:if test="${advert.state=='0'}">checked</c:if>>隐藏
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer no-margin-top">
                <button type="button" class="btn btn-primary btn-sm" id="search_ret">重置</button>
                <button type="button" class="btn btn-success btn-sm" id="search_btn">搜索</button>
            </div>
        </div>
    </div>
</div>
<div id="delAdvert" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <c:set var="listSize" value="${fn:length(page.data)}"></c:set>
                <h4 class="modal-title">删除广告</h4>
            </div>
            <div class="modal-body">
                <form action="${root}/admin/advert/delete" method="post" id="delForm">
                    <input type="hidden" name="aId" id="delAId" value="0">
                    <c:if test="${page.totalPageNO==page.pageNO&&listSize==1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO-1}&pageSize=${page.pageSize}&sort=${page.sort}&${searchParams}">
                    </c:if>
                    <c:if test="${page.totalPageNO!=page.pageNO||listSize!=1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&sort=${page.sort}&${searchParams}">
                    </c:if>

                </form>
                你确定要删除该广告吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doDelAdvert">确定</button>
            </div>
        </div>
    </div>
</div>
<form action="${root}/admin/advert/editState" method="post" id="redirectForm">
    <input type="hidden" name="aId" id="aId">
    <input type="hidden" name="state" id="state">
    <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&sort=${page.sort}&${searchParams}">
</form>
<script>
    //准备删除用户
    $('.deleteAdvert').click(function () {
        $('#delAId').val($(this).attr('data-aId'));
    });
    //执行删除操作
    $(".doDelAdvert").click(function () {
        $('#delAdvert').modal('hide');
        $("#delForm").submit();
    });
    //排序
    $(".sort-th i").click(function () {
        var orderType = " DESC";
        if ($(this).hasClass('fa-caret-down')) {
            orderType = " ASC";
        }
        $("#sort").val($(this).attr('data-orderBy') + orderType);
        $("#pageNO").val(1);
        $("#form1").submit();
    });
    //重置搜索条件
    $('#search_ret').click(function () {
        $("#title").val('');
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
        $('#form1').find('input[type=number]').val('');
        $("#search_apId").val('');
        $('#form1').find("input[name=search_state]").attr("checked", false);
        $('.date_title').html('请选择时间段');
    });
    //高级搜索
    $('#search_btn').click(function () {
    	 
        $("#pageNO").val(1);
        $("#search_title").val($('#title').val());
      
        if ($('#search_startDate').val() != '') {
            $('#search_startDate').val($('#search_startDate').val() + ' 00:00:00');
            $('#search_endDate').val($('#search_endDate').val() + ' 23:59:59');
        }
        $('#form1').submit();
    });
    //查找
    $('#fa-search').click(function () {
    	
        $('.form-group').find('input[type=hidden]').val('');
        $('.form-group').find('input[type=text]').val('');
        $('.form-group').find('input[type=number]').val('');
        $("#search_apId").val('');
        $('.form-group').find("input[name=search_state]").attr("checked", false);
        $('.date_title').html('请选择时间段');
        $("#search_title").val($('#title').val());
        $("#title").val('');
        $('#form1').submit();
    });
    //前往修改页面
    $('.editAdvert').click(function () {
        $("#aId").val($(this).attr('data-aId'));
        $("#redirectForm").attr('action', root + "/admin/advert/toEdit");
        $('#redirectForm').submit();
    });
    //修改状态
    $('.editState').click(function () {
        $("#aId").val($(this).attr('data-aId').split("_")[0]);
        $("#state").val($(this).attr('data-aId').split("_")[1])
        $("#redirectForm").attr('action', root + "/admin/advert/editState");
        $('#redirectForm').submit();
    });
    $('.advertDetails').click(function () {
        $("#aId").val($(this).attr('data-aId'));
        $("#redirectForm").attr('action', root + "/admin/advert/details");
        $('#redirectForm').submit();
    });
</script>

