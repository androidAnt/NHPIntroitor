<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="${root}/components/dateRange/dateRange.css"/>
<script type="text/javascript" src="${root}/components/dateRange/dateRange.js"></script>
<div class="row">
    <div class="col-lg-6" style="padding: 0;margin-bottom: 10px;padding-right: 25px;">
        <div class="input-group">
            <input type="text" name="loginName" id="loginName" value="${loginLog.searchName}" class="form-control" placeholder="用户登录名称或真实姓名,支持模糊查找"
                   maxlength="20">
            <span class="input-group-btn">
                <button class="btn btn-sm btn-success" type="button" id="fa-search"><i
                        class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                </button>
                <button class="btn btn-sm btn-query marginLeft-5 " type="button" data-toggle="modal" data-target="#searchModal" ><i
                        class="ace-icon fa fa-star icon-on-right bigger-110"></i>高级查找
                </button>
            </span>
        </div>
    </div>
</div>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>登录日志列表</b>
    </div>
    <c:if test="${empty page.data}">
        <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
    </c:if>
    <c:if test="${not empty page.data}">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th width="50">序号</th>
                <th class="sort-th">姓名
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
                <th class="sort-th">账号
                    <c:if test="${fn:contains(page.sort, 'login_name')}">
                        <c:if test="${page.sort=='a.login_name DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.login_name"></i>
                        </c:if>
                        <c:if test="${page.sort=='a.login_name ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.login_name"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'login_name')}">
                        <i class="fa fa-sort" data-orderBy="a.login_name"></i>
                    </c:if>
                </th>
                <th class="sort-th">IP地址
                    <c:if test="${fn:contains(page.sort, 'ip')}">
                        <c:if test="${page.sort=='a.ip DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.ip"></i>
                        </c:if>
                        <c:if test="${page.sort=='a.ip ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.ip"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'ip')}">
                        <i class="fa fa-sort" data-orderBy="a.ip"></i>
                    </c:if>
                </th>
                <th style="width: 146px;" class="sort-th">执行时间
                    <c:if test="${fn:contains(page.sort, 'login_date')}">
                        <c:if test="${page.sort=='a.login_date DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.login_date"></i>
                        </c:if>
                        <c:if test="${page.sort=='a.login_date ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.login_date"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'login_date')}">
                        <i class="fa fa-sort" data-orderBy="a.login_date"></i>
                    </c:if>
                </th>
                <th style="width: 48px;">类型</th>
                <th>操作结果</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number">${(page.pageNO-1)*page.pageSize+status.index+1}</td>
                    <td>
                        <c:if test="${not empty list.realName}">${list.realName}</c:if>
                        <c:if test="${empty list.realName}">- - - -</c:if>
                    </td>
                    <td>${list.loginName}</td>
                    <td>${list.ip}</td>
                    <td>${ fn:substring(list.loginDate ,0,19)}</td>
                    <td>
                        <c:if test="${fn:contains(list.content, '登录')}">
                            登录
                        </c:if>
                        <c:if test="${fn:contains(list.content, '退出')}">
                            退出
                        </c:if>
                    </td>
                    <td>
                        ${list.content}
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
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">高级查询</h4>
                </div>
            </div>
            <div class="modal-body table-responsive">
                <form action="${root}/system/log/login" method="post" class="form-horizontal" name="form1" id="pageForm">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" value="${page.sort}" id="sort" name="sort">
                    <input type="hidden" name="search_searchName" id="search_searchName" value="${loginLog.searchName}">
                    <div class="form-group">
                        <label for="search_loginName" class="col-sm-2 control-label">登录名称:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="search_loginName" value="${loginLog.loginName}" name="search_loginName" placeholder="登录名称,支持模糊查找">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search_realName" class="col-sm-2 control-label">真实名称:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="search_realName" value="${loginLog.realName}" name="search_realName" placeholder="真实名称,支持模糊查找">
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
                            <input type="hidden" name="search_startDate" id="search_startDate" value="${ fn:substring(loginLog.startDate ,0,10)}">
                            <input type="hidden" name="search_endDate" id="search_endDate" value="${ fn:substring(loginLog.endDate ,0,10)}">
                            <script type="text/javascript">
                                var dataRange=new pickerDateRange('date', {
                                    isTodayValid : true,
                                    startDate : $('#search_startDate').val(),
                                    endDate : $('#search_endDate').val(),
                                    needCompare : false,
                                    defaultText : ' 至 ',
                                    autoSubmit : true,
                                    inputTrigger : 'input_trigger',
                                    theme : 'ta',
                                    success : function(obj) {
                                        $('#search_startDate').val(obj.startDate);
                                        $('#search_endDate').val(obj.endDate);
                                    }
                                });
                                if($('#search_startDate').val()==''){
                                    $('.date_title').html('请选择操作时间段');
                                }
                            </script>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search_type" class="col-sm-2 control-label">操作类型:</label>
                        <div class="col-sm-10">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="search_type" id="search_type" value="登录" <c:if test="${loginLog.type=='登录'}">checked</c:if>>登录
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="search_type" value="退出" <c:if test="${loginLog.type=='退出'}">checked</c:if>>退出
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search_success" class="col-sm-2 control-label">是否成功:</label>
                        <div class="col-sm-10">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="search_success" id="search_success" value="1" <c:if test="${loginLog.success=='1'}">checked</c:if>>成功
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="search_success" value="0" <c:if test="${loginLog.success=='0'}">checked</c:if>>失败
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
        $('.form-group').find("input[name=search_status]").attr("checked",false);
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
        $('.form-group').find("input[name=search_status]").attr("checked",false);
        $("#search_searchName").val($('#loginName').val());
        $('#pageForm').submit();
    });
</script>

