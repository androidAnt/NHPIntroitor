<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="adminCode" value="<%=SystemConstant.SYS_SUPER_ADMINCODE%>"/>
<style type="text/css">
   th{
     text-align: center;
   }
</style>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>角色列表</b>
        <shiro:hasPermission name="system_role_add">
            <button class="btn btn-xs btn-add addRole pull-right" data-toggle="modal" data-target="#addRole" title="添加角色">
                <i class="ace-icon fa fa-plus-square bigger-120"></i>添加角色
            </button>
        </shiro:hasPermission>
    </div>
    <c:if test="${empty list}">
        <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
    </c:if>
    <c:if test="${not empty list}">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th width="44">序号</th>
                <th>名称</th>
                <th>编码</th>
                <th>是否授权</th>
                <th>状态</th>
                <th>创建日期</th>
                <th width="185px">操作</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${list}" var="list" varStatus="status">
                <tr <c:if test="${list.hasPmss==0}">class="warning"</c:if>>
                    <td class="Serial_number" align="center">${status.index+1}</td>
                    <td>${list.roleName}</td>
                    <td>${list.roleCode}</td>
                    <td class="hasPmss">
                        <c:if test="${list.hasPmss==0}">未授权</c:if>
                        <c:if test="${list.hasPmss!=0}">已授权</c:if>
                    </td>
                    <td>
                        <c:if test="${list.state==1}">正常</c:if>
                        <c:if test="${list.state!=1}">禁用</c:if>
                    </td>
                    <td>${ fn:substring(list.createDate ,0,19)}</td>
                    <td>
                    
                    <c:if test="${list.roleCode!=adminCode}">
                    <shiro:hasPermission name="system_role_update">
                                <button class="btn btn-xs btn-info updateRole" data-toggle="modal" data-target="#addRole"
                                        data-role="${list}" title="修改">
                                    <i class="ace-icon fa fa-edit bigger-120"></i>修改
                                </button>
                            </shiro:hasPermission>
                    </c:if>
                    
                        <shiro:hasPermission name="system_role_authorize">
                            <button class="btn btn-xs btn-purple roleAuthorize"  data-target="#roleAuthorize"
                                    data-role="${list}" title="角色授权">
                                <i class="ace-icon fa fa-key bigger-120"></i>授权
                            </button>
                        </shiro:hasPermission>
                        <c:if test="${list.roleCode!=adminCode}">
                            <shiro:hasPermission name="system_role_del">
                                <button class="btn btn-xs btn-danger delRole" data-toggle="modal" data-target="#delRole"
                                        data-roleId="${list.roleId}" title="删除">
                                    <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
                                </button>
                            </shiro:hasPermission>
                        </c:if>
                        <label class="hide"><img src="${root}/components/ztree/css/img/loading.gif"/></label>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </c:if>
</div>
<div id="addRole" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">添加角色</h4>
            </div>
            <form id="addRoleForm" class="form-horizontal" action="${root}/system/role/add" method="post">
                <input type="hidden" name="roleId" id="roleId">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="roleName" class="col-sm-2 control-label col-xs-3">角色名称<span style="color:red;">*</span></label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="roleName" id="roleName" class="form-control" required
                                   placeholder="角色名称,必填项 最大长度20" maxlength="20">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="roleCode" class="col-sm-2 control-label col-xs-3">角色编码<span style="color:red;">*</span></label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="roleCode" id="roleCode" class="form-control" required
                                   placeholder="角色编码,必填项 最大长度20" maxlength="20">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="state" class="col-sm-2 control-label col-xs-3">角色状态:</label>
                        <div class="col-sm-10 col-xs-9">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" id="state" value="1">启用
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" value="0" >禁用
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="remark" class="col-sm-2 control-label col-xs-3">角色备注:</label>
                        <div class="col-sm-10 col-xs-9">
                            <textarea name="remark" id="remark" class="form-control" rows="3"
                                      placeholder="角色备注,最多添加100个字" maxlength="100"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn btn-primary btn-sm" id="submit">添加</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="delRole" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">删除角色</h4>
            </div>
            <div class="modal-body">
                <input type="hidden" name="delRoleId" id="delRoleId" value="0">
                你确定要删除该角色吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doDelRole">确定</button>
            </div>
        </div>
    </div>
</div>
<div id="roleAuthorize" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">角色授权</h4>
            </div>
            <div class="modal-body" style="padding: 5px 0 0 10px;">
                <form id="roleAuthorizeForm" class="form-horizontal" method="post">
                    <input type="hidden" name="authorizeRoleId" id="authorizeRoleId">
                    <ul id="tree-rec" class="ztree" style="height:300px;overflow:auto;"></ul>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-purple btn-sm delAuthorize">删除授权</button>
                <button type="button" class="btn btn-primary btn-sm doAuthorize">授权</button>
            </div>
        </div>
    </div>
</div>
<link rel="stylesheet" href="${root}/components/ztree/css/zTreeStyle.css"/>
<script src="${root}/components/ztree/js/jquery.ztree.all-3.5.min.js"></script>
<script>
    var tree;
    var setting = {
        check: {
            enable: true
        },
        view: {
            dblClickExpand: false,
            showLine: true,
            selectedMulti: false
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "pId",
                rootPId: ""
            }
        }
    };
    //角色授权
    $(".doAuthorize").click(function(){
        if(tree.getCheckedNodes().length==0){
            showMes("1", "请选择要授权的系统资源");
            return;
        }else{
            var resId = [];
            $.each(tree.getCheckedNodes(), function(i, n) {
                resId.push(n.id);
            });
            var resIds=resId.join(",");
            $.ajax({
                type: 'POST',
                url: root + '/system/role/roleAuthorize',
                data: {roleId:$("#authorizeRoleId").val(),resIds:resIds},
                success: function (data) {
                    var dataObj = data;
                    if (dataObj.status == 1) {
                        $(sleObj).parents('tr').removeClass('warning');
                        $(sleObj).parents('tr').find('.hasPmss').html("已授权");
                        $('#roleAuthorize').modal('hide');
                    }else{
                        $('#roleAuthorize').modal('hide');
                    }
                    showMes(dataObj.status, dataObj.msg);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $('#roleAuthorize').modal('hide');
                    showMes("0", "系统繁忙,请稍后再试");
                }
            });

        }
    });
    //取消所有授权
    $('.delAuthorize').click(function(){
        $.ajax({
            type: 'POST',
            url: root + '/system/role/delRoleAuthorize',
            data: {roleId:$("#authorizeRoleId").val()},
            success: function (data) {
                var dataObj = data;
                if (dataObj.status == 1) {
                    $(sleObj).parents('tr').addClass('warning');
                    $(sleObj).parents('tr').find('.hasPmss').html("未授权");
                    $('#roleAuthorize').modal('hide');
                }else{
                    $('#roleAuthorize').modal('hide');
                }
                showMes(dataObj.status, dataObj.msg);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('#roleAuthorize').modal('hide');
                showMes("0", "系统繁忙,请稍后再试");
            }
        });
    });
    //打开资源权限树
    $(".roleAuthorize").click(function(){
        sleObj = $(this);
        var obj=$(this)
        $(obj).parents('td').find('label').removeClass('hide');
        $("#tree-rec").html('');
        var role = eval("(" + $(this).attr('data-role') + ")");
        if($(this).parents('tr').hasClass('warning')||role.roleCode=='bluemobi'){
            $('.delAuthorize').hide();
        }else{
            $('.delAuthorize').show();
        }
        $("#roleAuthorize .table-header label").html("对"+role.roleName+"进行授权");
        $.ajax({
            type: 'POST',
            url: root + '/system/role/getResTree',
            data: {roleId:role.roleId},
            success: function (data) {
                var dataObj = data;
                if (dataObj.status == 1) {
                    $("#authorizeRoleId").val(role.roleId);
                    $(obj).parents('td').find('label').addClass('hide');
                    tree= $.fn.zTree.init($("#tree-rec"), setting,dataObj.data);
                    $('#roleAuthorize').modal('show');
                }else{
                    $(obj).parents('td').find('label').addClass('hide');
                    showMes(dataObj.status, dataObj.msg);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                showMes("0", "系统繁忙,请稍后再试");
            }
        });
    });
    var sleObj=null;
    //删除角色
    $('.delRole').click(function () {
        $("#delRoleId").val($(this).attr('data-roleId'))
        sleObj = $(this);

    });
    //执行删除角色
    $(".doDelRole").click(function(){
        $(sleObj).parents('td').find('label').removeClass('hide');
        $('#delRole').modal('hide');
        $.ajax({
            type: 'POST',
            url: root + '/system/role/del',
            data: {roleId: $("#delRoleId").val()},
            success: function (data) {
                var dataObj = data;
                if (dataObj.status == 1) {
                    $(sleObj).parents('tr').remove();
                }
                showMes(dataObj.status, dataObj.msg);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                showMes("0", "系统繁忙,请稍后再试");
            }
        });
    });
    //添加角色准备
    $('.addRole').click(function(){
        $("#addRole h4").html("添加角色");
        $("#submit").html("添加");
        $('#addRoleForm').find('input[type=hidden]').val('');
        $('#addRoleForm').find('input[type=text]').val('');
        $("#addRoleForm").find('textarea').val('');
        $('input:radio[name=state]')[0].checked = true;
        $("#addRoleForm").attr('action',root+'/system/role/add');
    });
    //修改角色准备
    $('.updateRole').click(function(){
        var role = eval("(" + $(this).attr('data-role') + ")");
        $("#addRole h4").html("修改角色");
        $("#submit").html("修改");
        $('#addRoleForm').find('input[type=hidden]').val('');
        $('#addRoleForm').find('input[type=text]').val('');
        $("#addRoleForm").find('textarea').val('');
        $("#addRoleForm").attr('action',root+'/system/role/update');
        $("#roleName").val(role.roleName);
        $("#roleCode").val(role.roleCode);
        $('input:radio[name=state]')[1].checked = true;
        if(role.state=="1"){
            $('input:radio[name=state]')[0].checked = true;
        }
        $("#remark").val(role.remark);
        $("#roleId").val(role.roleId);
    });
</script>