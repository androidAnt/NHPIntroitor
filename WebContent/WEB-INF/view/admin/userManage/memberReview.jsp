<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="admin_loginName" value="<%=SystemConstant.SYS_SUPER_LOGINNAME%>"/>
<c:set var="platform_admins" value="<%=SystemConstant.SYS_admin_LOGINNAME%>"/>
<link rel="stylesheet" href="${root}/components/dateRange/dateRange.css"/>
<script type="text/javascript" src="${root}/components/dateRange/dateRange.js"></script>
<style type="text/css">
   th{
     text-align: center;
   }
</style>
<div class="row">
    <div class="col-lg-6" style="padding: 0;margin-bottom: 10px;">
        <div class="input-group">
            <input type="text" name="loginName" id="loginName" value="${user.searchName}" class="form-control" placeholder="用户账号或真实姓名,支持模糊查找"
                   maxlength="20">
            <span class="input-group-btn">
                <button class="btn btn-sm btn-success" type="button" id="fa-search"><i
                        class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                </button>
                <button class="btn btn-sm btn-query marginLeft-5" type="button" data-toggle="modal" data-target="#searchModal" ><i
                        class="ace-icon fa fa-star icon-on-right bigger-110"></i>高级查找
                </button>
                 <button class="btn btn-sm btn-error marginLeft-5 btn-clear" type="button"  id="all-search"><i
                        class="ace-icon fa fa-remove icon-on-right bigger-110"></i>清空
                </button>
            </span>
        </div>
    </div>
</div>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>用户列表</b>
        <shiro:hasPermission name="system_user_add">
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
                <th class="sort-th">姓名
                    <c:if test="${fn:contains(page.sort, 'real_name')}">
                        <c:if test="${page.sort=='a.real_name DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.real_name"></i>
                        </c:if>
                        <c:if test="${page.sort=='a.real_name ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.real_name"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'real_name')}">
                        <i class="fa fa-sort" data-orderBy="a.real_name"></i>
                    </c:if>
                </th>
                <th>性别</th>
                <th>联系电话</th>
                <th>政治面貌</th>
                <th style="width: 246px; text-align: center;">操作</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number" style="text-align: center;">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
                    <td>${list.loginName}</td>
                    <td>
                        <c:if test="${not empty list.realName}">${list.realName}</c:if>
                        <c:if test="${empty list.realName}">- - - -</c:if>
                    </td>
                   <%--  <td>
                        <c:if test="${not empty list.roleName}">${list.roleName}</c:if>
                        <c:if test="${empty list.roleName}">- - - -</c:if>
                    </td> --%>
                    
                      <td>
                        <c:if test="${list.gender ==1}">女</c:if>
                        <c:if test="${list.gender ==0}">男</c:if>
                    </td>
                    
                    <td>
                        <c:if test="${not empty list.phone}">${list.phone}</c:if>
                        <c:if test="${empty list.phone}">- - - -</c:if>
                    </td>
                    
                    <td>
                        <c:if test="${list.politicalStatus=='0'}">党员</c:if>
                        <c:if test="${list.politicalStatus=='1'}">共青团员</c:if>
                        <c:if test="${list.politicalStatus=='2'}">群众</c:if>
                        <c:if test="${empty list.phone}">- - - -</c:if>
                    </td>
                    
                    <td>
                        <c:if test="${list.loginName!=admin_loginName}">
                            <button title="查看详情" class="btn btn-xs btn-purple memberReview" data-suId="${list.suId}">
                                <i class="ace-icon fa fa-eye bigger-120"></i>审核
                            </button>
                        </c:if>
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
<form action="${root}/system/user/reviewDetails" method="post" id="reviewForm">
    <input type="hidden" name="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&sort=${page.sort}&${searchParams}">
</form>

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
                <form action="${root}/system/user/memberQuery" method="post" class="form-horizontal" name="form1" id="pageForm">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" value="${page.sort}" id="sort" name="sort">
                    <input type="hidden" name="search_searchName" id="search_searchName" value="${user.searchName}">
                    <div class="form-group">
                        <label for="search_loginName" class="col-sm-2 control-label">账号:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="search_loginName" value="${user.searchName}" name="search_loginName" placeholder="账号,支持模糊查找">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search_realName" class="col-sm-2 control-label">真实名称:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="search_realName" value="${user.searchName}" name="search_realName" placeholder="真实姓名,支持模糊查找">
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
        $('.form-group').find('select').val('');
    });
    
      $('#all-search').click(function () {
        $("#loginName").val('');
        $('.form-group').find('input[type=hidden]').val('');
        $('.form-group').find('input[type=text]').val('');
        $('.form-group').find('select').val('');
        $("#pageNO").val(1);
	    $('.form-group').find("input[name=search_state]").attr("checked",false);
        $("#search_searchName").val($('#loginName').val());
        $('#pageForm').submit();
    });
    
    //高级搜索
    $('#search_btn').click(function(){
        $("#pageNO").val(1);
        $("#search_searchName").val($('#loginName').val());
        $('#pageForm').submit();
    });
    //查找
    $('#fa-search').click(function(){
        $("#pageNO").val(1);
        $('.form-group').find('input[type=hidden]').val('');
        $('.form-group').find('input[type=text]').val('');
        $('.form-group').find('select').val('');
        $('.form-group').find("input[name=search_state]").attr("checked",false);
        $("#search_searchName").val($('#loginName').val());
        $('#pageForm').submit();
    });
    //查看详情
    $('.memberReview').click(function () {
        $("#reviewForm").attr('action',$("#reviewForm").attr('action')+"/"+$(this).attr('data-suId')+"/");
        $("#reviewForm").submit();
    });
</script>

