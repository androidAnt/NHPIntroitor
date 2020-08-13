<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="${root}/components/dateRange/dateRange.css"/>
<script type="text/javascript" src="${root}/components/dateRange/dateRange.js"></script>
<div class="row">
    <div class="col-lg-6" style="padding: 0;margin-bottom: 10px;padding-right: 25px;">
        <div class="input-group">
            <input type="text" name="loginName" id="loginName" value="${operationLog.searchName}" class="form-control" placeholder="用户登录名称或真实姓名,支持模糊查找"
                   maxlength="20">
            <span class="input-group-btn">
                <button class="btn btn-sm btn-success" type="button" id="fa-search"><i
                        class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                </button>
                <button class="btn btn-sm btn-query marginLeft-5" type="button" data-toggle="modal" data-target="#searchModal"><i
                        class="ace-icon fa fa-star icon-on-right bigger-110"></i>高级查找
                </button>
            </span>
        </div>
    </div>
</div>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>操作日志列表</b>
    </div>
    <c:if test="${empty page.data}">
        <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
    </c:if>
    <c:if test="${not empty page.data}">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th width="50">序号</th>
                <th class="sort-th">操作
                    <c:if test="${fn:contains(page.sort, 'des')}">
                        <c:if test="${page.sort=='a.des DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.des"></i>
                        </c:if>
                        <c:if test="${page.sort=='a.des ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.des"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'des')}">
                        <i class="fa fa-sort" data-orderBy="a.des"></i>
                    </c:if>
                </th>
                <th class="sort-th" style="width: 150px;">操作状态
                    <c:if test="${fn:contains(page.sort, 'success')}">
                        <c:if test="${page.sort=='a.success DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.success"></i>
                        </c:if>
                        <c:if test="${page.sort=='a.success ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.success"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'success')}">
                        <i class="fa fa-sort" data-orderBy="a.success"></i>
                    </c:if>
                </th>
                <th class="sort-th" style="width: 150px;">操作人
                    <c:if test="${fn:contains(page.sort, 'real_name')}">
                        <c:if test="${page.sort=='b.real_name DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="b.real_name"></i>
                        </c:if>
                        <c:if test="${page.sort=='b.real_name ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="b.real_name"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'real_name')}">
                        <i class="fa fa-sort" data-orderBy="b.real_name"></i>
                    </c:if>
                </th>
                <th class="sort-th" style="width: 146px;">操作时间
                    <c:if test="${fn:contains(page.sort, 'operate_time')}">
                        <c:if test="${page.sort=='a.operate_time DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.operate_time"></i>
                        </c:if>
                        <c:if test="${page.sort=='a.operate_time ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.operate_time"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'operate_time')}">
                        <i class="fa fa-sort" data-orderBy="a.operate_time"></i>
                    </c:if>
                </th>
                <th style="width: 100px;">操作描述</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number">${(page.pageNO-1)*page.pageSize+status.index+1}</td>
                    <td>
                        <c:if test="${not empty list.des}">${list.des}</c:if>
                        <c:if test="${empty list.des}">- - - -</c:if>
                    </td>
                    <td>
                        <c:if test="${list.success==0}">失败</c:if>
                        <c:if test="${list.success==1}">成功</c:if>
                    </td>
                    <td>${list.realName}</td>
                    <td>${ fn:substring(list.operateTime ,0,19)}</td>
                    <td>
                        <button title="查看详情" class="btn btn-xs btn-purple details" data-opId="${list.opId}">
                            <i class="ace-icon fa fa-eye bigger-120"></i>详情
                        </button>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
            <c:if test="${page.totalPageNO>1}">
                <thead>
                <tr>
                    <th colspan="8">
                        <tags:pagination></tags:pagination>
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
                <form action="${root}/system/log/operation" method="post" class="form-horizontal" name="form1" id="pageForm">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" value="${page.sort}" id="sort" name="sort">
                    <input type="hidden" name="search_searchName" id="search_searchName" value="${operationLog.searchName}">

                    <div class="form-group">
                        <label for="search_loginName" class="col-sm-2 control-label">登录名称:</label>

                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="search_loginName" value="${operationLog.loginName}"
                                   name="search_loginName" placeholder="登录名称,支持模糊查找">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search_realName" class="col-sm-2 control-label">真实名称:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="search_realName" value="${operationLog.realName}"
                                   name="search_realName" placeholder="真实名称,支持模糊查找">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search_des" class="col-sm-2 control-label">操作描述:</label>

                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="search_des" value="${operationLog.des}"
                                   name="search_des" placeholder="操作描述,支持模糊查找">
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
                                   value="${ fn:substring(operationLog.startDate ,0,10)}">
                            <input type="hidden" name="search_endDate" id="search_endDate"
                                   value="${ fn:substring(operationLog.endDate ,0,10)}">
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
                                    $('.date_title').html('请选择操作时间段');
                                }
                            </script>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search_type" class="col-sm-2 control-label">操作状态:</label>

                        <div class="col-sm-10">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="search_success" id="search_type" value="1"
                                       <c:if test="${operationLog.success=='1'}">checked</c:if>>成功
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="search_success" value="0"
                                       <c:if test="${operationLog.success=='0'}">checked</c:if>>失败
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
<form action="${root}/system/log/operation/details" method="post" id="detailsForm">
    <input type="hidden" name="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&sort=${page.sort}&${searchParams}">
</form>
<script>
    //排序
    $(".sort-th i").click(function () {
        var orderType=" DESC";
        if($(this).hasClass('fa-caret-down')){
            orderType=" ASC";
        }
        $("#sort").val($(this).attr('data-orderBy')+orderType);
        $("#pageNO").val(1);
        $("#pageForm").submit();
    });
    //重置搜索条件
    $('#search_ret').click(function () {
        $("#loginName").val('');
        $('.form-group').find('input[type=hidden]').val('');
        $('.form-group').find('input[type=text]').val('');
        $('.form-group').find("input[name=search_success]").attr("checked",false);
        $('.date_title').html('请选择操作时间段');
    });
    //高级搜索
    $('#search_btn').click(function(){
        $("#pageNO").val(1);
        $("#search_searchName").val($('#loginName').val());
        if($('#search_startDate').val()!=''){
            $('#search_startDate').val($('#search_startDate').val()+' 00:00:00');
            $('#search_endDate').val($('#search_endDate').val()+' 23:59:59');
        }
        $('#pageForm').submit();
    });
    //查找
    $('#fa-search').click(function(){
        $("#pageNO").val(1);
        $('.form-group').find('input[type=hidden]').val('');
        $('.form-group').find('input[type=text]').val('');
        $('.form-group').find("input[name=search_success]").attr("checked",false);
        $("#search_searchName").val($('#loginName').val());
        $('#pageForm').submit();
    });
    //查看详情
    $('.details').click(function () {
        $("#detailsForm").attr('action',$("#detailsForm").attr('action')+"/"+$(this).attr('data-opId'));
        $("#detailsForm").submit();
    });
</script>

