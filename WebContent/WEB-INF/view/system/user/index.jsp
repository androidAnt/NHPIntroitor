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
            </span>
        </div>
    </div>
</div>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>用户列表</b>
        <shiro:hasPermission name="system_user_add">
            <a class="btn btn-xs btn-add pull-right" title="添加用户" href="javascript:void(0);" id="toAdd">
                <i class="ace-icon fa fa-plus-square bigger-120"></i>添加用户
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
                <th>所属角色</th>
               <!--  <th>角色</th> -->
                <th>联系电话</th>
                <!-- <th>邮箱</th> -->
               <!--  <th style="width: 146px;" class="sort-th">创建时间
                    <c:if test="${fn:contains(page.sort, 'create_date')}">
                        <c:if test="${page.sort=='a.create_date DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.create_date"></i>
                        </c:if>
                        <c:if test="${page.sort=='a.create_date ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.create_date"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(page.sort, 'create_date')}">
                        <i class="fa fa-sort" data-orderBy="a.create_date"></i>
                    </c:if>
                </th> -->
               <!--  <th>用户类型</th> -->
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
                    <%-- <td>${list.orgName}</td> --%>
                    <td>
                        <c:if test="${not empty list.roleName}">${list.roleName}</c:if>
                        <c:if test="${empty list.roleName}">- - - -</c:if>
                    </td>
                    <td>
                        <c:if test="${not empty list.phone}">${list.phone}</c:if>
                        <c:if test="${empty list.phone}">- - - -</c:if>
                    </td>
                    <!-- <td>
                        <c:if test="${not empty list.email}">${list.email}</c:if>
                        <c:if test="${empty list.email}">- - - -</c:if>
                    </td> -->
                    <!-- <td>${ fn:substring(list.createDate ,0,19)}</td> -->
                  <%--   <td>
                        <c:if test="${list.type==1}">检验</c:if>
                        <c:if test="${list.type==2}">审核</c:if>
                        <c:if test="${list.type==3}">审批</c:if>
                    </td> --%>
                    <td <c:if test="${list.loginName==admin_loginName}">style="height: 40px;" </c:if>>
                        <c:if test="${list.loginName!=admin_loginName}">
                            <shiro:hasPermission name="system_user_role">
                                <button class="btn btn-xs btn-info btn-warning roleAuthorize" data-suId="${list.suId}"
                                        data-roleId="${list.roleId}"
                                        data-toggle="modal" data-target="#roleAuthorize" title="角色授权">
                                    <i class="ace-icon fa fa-key bigger-120"></i>授权
                                </button>
                            </shiro:hasPermission>
                            <button title="查看详情" class="btn btn-xs btn-purple details" data-suId="${list.suId}">
                                <i class="ace-icon fa fa-eye bigger-120"></i>查看
                            </button>
                            <shiro:hasPermission name="system_user_update">
                                <button class="btn btn-xs btn-info updateUser" title="修改" data-suId="${list.suId}">
                                    <i class="ace-icon fa fa-edit bigger-120"></i>修改
                                </button>
                            </shiro:hasPermission>
                            <shiro:hasPermission name="system_user_del">
                                <c:if test="${list.loginName!=platform_admins}">
                                    <button class="btn btn-xs btn-danger delUser" data-toggle="modal" data-target="#delUser"
                                            title="删除" data-suId="${list.suId}">
                                        <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
                                    </button>
                                </c:if>
                            </shiro:hasPermission>
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
<form action="${root}/system/user/details" method="post" id="detailsForm">
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
                <form action="${root}/system/user" method="post" class="form-horizontal" name="form1" id="pageForm">
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
                    <!-- <div class="form-group">
                        <label for="search_orgId" class="col-sm-2 control-label">所属部门:</label>
                        <div class="col-sm-10">
                            <input type="hidden" name="search_orgId" id="search_orgId" value="${user.orgId}">
                            <input type="hidden" name="search_orgName" id="search_orgName" value="${user.orgName}">
                            <div class="btn-group">
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                    <span id="orgNames">
                                        <c:if test="${empty user.orgName}">请选择所属部门</c:if>
                                        <c:if test="${not empty user.orgName}">${user.orgName}</c:if>
                                    </span><span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu" id="selOrgId" role="menu">
                                    <c:forEach items="${orgList}" var="org" varStatus="status">
                                        <li style="padding-left: ${org.levels*30}px;" id="${org.orgId}"><a href="#">${org.orgName}</a></li>
                                    </c:forEach>
                                </ul>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="form-group">
                        <label for="search_roleId" class="col-sm-2 control-label">角色:</label>
                        <div class="col-sm-10">
                            <select class="form-control" id="search_roleId" name="search_roleId">
                                <option value="">请选择</option>
                                <c:forEach items="${roleList}" var="role">
                                    <option value="${role.roleId}" ${role.roleId==user.roleId?'selected':''}>${role.roleName}</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div> -->
                    <div class="form-group">
                        <label for="search_startDate" class="col-sm-2 control-label">创建时间:</label>
                        <div class="col-sm-10">
                            <div class="ta_date" id="div_date1">
                                <span class="date_title" id="date"></span>
                                <a class="opt_sel" id="input_trigger" href="#">
                                    <i class="i_orderd"></i>
                                </a>
                            </div>
                            <input type="hidden" name="search_startDate" id="search_startDate" value="${ fn:substring(user.startDate ,0,10)}">
                            <input type="hidden" name="search_endDate" id="search_endDate" value="${ fn:substring(user.endDate ,0,10)}">
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
                                    $('.date_title').html('请选择时间段');
                                }
                            </script>
                        </div>
                    </div>
            <%--         <div class="form-group">
                        <label for="search_state" class="col-sm-2 control-label">用户状态:</label>
                        <div class="col-sm-10">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="search_state" id="search_state" value="1" <c:if test="${user.state=='1'}">checked</c:if>>启用
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="search_state" value="0" <c:if test="${user.state=='0'}">checked</c:if>>禁用
                            </label>
                        </div>
                    </div> --%>
                </form>
            </div>
            <div class="modal-footer no-margin-top">
                <button type="button" class="btn btn-primary btn-sm" id="search_ret">重置</button>
                <button type="button" class="btn btn-success btn-sm" id="search_btn">搜索</button>
            </div>
        </div>
    </div>
</div>
<div id="roleAuthorize" class="modal fade" tabindex="-1" >
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">用户角色授权</h4>
            </div>
            <div class="modal-body table-responsive">
                <c:if test="${empty roleList}">暂无角色,请与管理员联系</c:if>
                <c:if test="${not empty roleList}">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th width="50">选择</th>
                            <th>角色名称</th>
                        </tr>
                        </thead>
                        <tbody>
                        <form action="${root}/system/user/roleAuthorize" method="post" id="roleAuthorizeForm">
                            <input type="hidden" name="suId" id="suId">
                            <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&sort=${page.sort}&${searchParams}">
                            <c:forEach items="${roleList}" var="role">
                                <tr>
                                    <td>
                                        <input type="radio" name="roleId" value="${role.roleId}">
                                    </td>
                                    <td>${role.roleName}</td>
                                </tr>
                            </c:forEach>
                        </form>
                        </tbody>
                    </table>
                </c:if>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-purple btn-sm delAuthorize">取消授权</button>
                <c:if test="${not empty roleList}">
                    <button type="button" class="btn btn-primary btn-sm doRoleAuthorize">确定</button>
                </c:if>
            </div>
        </div>
    </div>
</div>
<div id="delUser" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <c:set var="listSize" value="${fn:length(page.data)}"></c:set>
                <h4 class="modal-title">删除用户</h4>
            </div>
            <div class="modal-body">
                <form action="${root}/system/user/delUser" method="post" id="delForm">
                    <input type="hidden" name="suId" id="delSuId" value="0">
                    <c:if test="${page.totalPageNO==page.pageNO&&listSize==1}">
                        <input type="hidden" name="backUrl" value="pageNO=${page.pageNO-1}&pageSize=${page.pageSize}&sort=${page.sort}&${searchParams}">
                    </c:if>
                    <c:if test="${page.totalPageNO!=page.pageNO||listSize!=1}">
                        <input type="hidden" name="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&sort=${page.sort}&${searchParams}">
                    </c:if>

                </form>
                你确定要删除该用户吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doDelUser">确定</button>
            </div>
        </div>
    </div>
</div>
<script>
    //授权准备
    $('.roleAuthorize').click(function () {
        $("#suId").val($(this).attr('data-suId'));
        $('input[name="roleId"]').prop("checked", false);
        var roleId = $(this).attr('data-roleId');
        if (roleId != "") {
            $(".delAuthorize").show();
            $('input[name="roleId"]').each(function () {
                if ($(this).val() == roleId) {
                    $(this).prop("checked", true);
                }
            });
        }else{
            $(".delAuthorize").hide();
        }
    });
    //用户角色授权
    $('.doRoleAuthorize').click(function () {
        if ($("input[name='roleId']:checked").length == 0) {
            showMes(0, "请选择授权的角色");
        } else {
            $('#roleAuthorizeForm').submit();
        }
    });
    //取消授权
    $('.delAuthorize').click(function(){
        $("#roleAuthorizeForm").attr('action',root+"/system/user/delAuthorize");
        $('#roleAuthorizeForm').submit();
    });
    //准备删除用户
    $('.delUser').click(function(){
        $('#delSuId').val($(this).attr('data-suId'));
    });
    //执行删除操作
    $(".doDelUser").click(function(){
        $('#delUser').modal('hide');
        $("#delForm").submit();
    });
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
    //选择归属部门
    $('#selOrgId li').click(function(){
        $("#search_orgId").val($(this).attr('id'));
        $("#search_orgName").val($(this).find('a').html());
        $("#orgNames").html($(this).find('a').html());
    });
    //重置搜索条件
    $('#search_ret').click(function () {
        $("#loginName").val('');
        $('.form-group').find('input[type=hidden]').val('');
        $('.form-group').find('input[type=text]').val('');
        $('.form-group').find('select').val('');
        $('.form-group').find("input[name=search_state]").attr("checked",false);
        $('.date_title').html('请选择时间段');
        $("#orgNames").html('请选择所属部门');
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
        $('.form-group').find('select').val('');
        $('.form-group').find("input[name=search_state]").attr("checked",false);
        $("#search_searchName").val($('#loginName').val());
        $('#pageForm').submit();
    });
    //查看详情
    $('.details').click(function () {
        $("#detailsForm").attr('action',$("#detailsForm").attr('action')+"/"+$(this).attr('data-suId')+"/");
        $("#detailsForm").submit();
    });
    //前往修改页面
    $('.updateUser').click(function () {
        $("#roleAuthorizeForm").attr('action',root+"/system/user/updateUser/"+$(this).attr('data-suId')+"/");
        $('#roleAuthorizeForm').submit();
    });

    //前往添加页面
    $("#toAdd").click(function () {
        $("#roleAuthorizeForm").attr('action',root+"/system/user/toadd");
        $('#roleAuthorizeForm').submit();
    });
</script>

