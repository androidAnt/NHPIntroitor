<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="adminCode" value="<%=SystemConstant.SYS_SUPER_ADMINCODE%>"/>
<style type="text/css">
   th{
     text-align: center;
   }
</style>
<ul class="nav nav-tabs">
    <li role="presentation" class="${tabs=='list'?'active':''}"><a href="${root}/system/dic/list">数据字典维护</a></li>
    <li role="presentation" class="${tabs=='type'?'active':''}"><a href="${root}/system/dic/type">字典类型维护</a></li>
</ul>
<div id="tabsDiv" style="padding: 10px;">
    <div id="dicTypeDiv" class="${tabs=='list'?'hidden':''}">
        <div class="row panel panel-default table-responsive">
            <div class="panel-heading">
                <span class="fa fa-list-ul" aria-hidden="true"></span>
                <b>字典 类型列表</b>
                <shiro:hasPermission name="system_dicType_add">
                    <button class="btn btn-xs btn-success add_dicType pull-right" data-toggle="modal" data-target="#addDicType" title="添加字典类型">
                        <i class="ace-icon fa fa-plus-square bigger-120"></i>添加字典类型
                    </button>
                </shiro:hasPermission>
            </div>
            <c:if test="${empty typeList}">
                <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
            </c:if>
            <c:if test="${not empty typeList}">
                <table class="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th width="50">序号</th>
                        <th style="width: 150px;">类型编码</th>
                        <th style="width: 150px;">类型名称</th>
                        <th style="width: 50px;">状态</th>
                        <th style="width: 150px;">创建时间</th>
                        <th style="width: 100px;">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach items="${typeList}" var="typeList" varStatus="status">
                        <tr>
                            <td class="Serial_number" style="text-align: center;">
                                    ${status.index+1}
                            </td>
                            <td>${typeList.dicCode}</td>
                            <td>${typeList.dicName}</td>
                            <td>${typeList.state==1?'启用':'禁用'}</td>
                            <td>${ fn:substring(typeList.createDate ,0,19)}</td>
                            <td>
                                <c:if test="${typeList.level=='0'}">
                                    <shiro:hasRole name="${adminCode}">
                                        <c:if test="${typeList.state=='1'}">
                                            <a class="btn btn-xs btn-warning editDicState" title="禁用字典类型" href="javascript:void(0);" data-dicId="${typeList.dicId}_0">
                                                <i class="ace-icon fa fa-lock bigger-120"></i>禁用
                                            </a>
                                        </c:if>
                                        <c:if test="${typeList.state=='0'}">
                                            <a class="btn btn-xs btn-success editDicState" title="启用字典类型" href="javascript:void(0);" data-dicId="${typeList.dicId}_1">
                                                <i class="ace-icon fa fa-unlock-alt bigger-120"></i>启用
                                            </a>
                                        </c:if>
                                        <button class="btn btn-xs btn-info editDicType" data-toggle="modal" data-target="#editDicType"
                                                data-dicType="${typeList}" title="编辑字典类型">
                                            <i class="ace-icon fa fa-edit bigger-120"></i>编辑
                                        </button>
                                        <a class="btn btn-xs btn-danger delDicType" title="删除字典类型" href="javascript:void(0);" data-dicId="${typeList.dicId}" data-toggle="modal" data-target="#delDicType">
                                            <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
                                        </a>
                                    </shiro:hasRole>
                                </c:if>
                                <c:if test="${empty typeList.level or typeList.level!='0'}">
                                    <c:if test="${typeList.state=='1'}">
                                        <shiro:hasPermission name="system_dicType_edit">
                                            <a class="btn btn-xs btn-warning editDicState" title="禁用字典类型" href="javascript:void(0);" data-dicId="${typeList.dicId}_0">
                                                <i class="ace-icon fa fa-lock bigger-120"></i>禁用
                                            </a>
                                        </shiro:hasPermission>
                                    </c:if>
                                    <c:if test="${typeList.state=='0'}">
                                        <shiro:hasPermission name="system_dicType_edit">
                                            <a class="btn btn-xs btn-success editDicState" title="启用字典类型" href="javascript:void(0);" data-dicId="${typeList.dicId}_1">
                                                <i class="ace-icon fa fa-unlock-alt bigger-120"></i>启用
                                            </a>
                                        </shiro:hasPermission>
                                    </c:if>
                                    <shiro:hasPermission name="system_dicType_edit">
                                        <button class="btn btn-xs btn-info editDicType" data-toggle="modal" data-target="#editDicType"
                                                data-dicType="${typeList}" title="编辑字典类型">
                                            <i class="ace-icon fa fa-edit bigger-120"></i>编辑
                                        </button>
                                    </shiro:hasPermission>
                                    <shiro:hasPermission name="system_dicType_del">
                                        <a class="btn btn-xs btn-danger delDicType" title="删除字典类型" href="javascript:void(0);" data-dicId="${typeList.dicId}" data-toggle="modal" data-target="#delDicType">
                                            <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
                                        </a>
                                    </shiro:hasPermission>
                                </c:if>
                            </td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
            </c:if>
        </div>
    </div>
    <div id="dicDiv" class="${tabs=='type'?'hidden':''}">
        <div class="row">
            <div class="col-lg-6" style="padding: 0;margin-bottom: 5px;">
                <form action="${root}/system/dic/list" method="post" class="form-horizontal" name="form1" id="pageForm">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" value="${page.sort}" id="sort" name="sort">
                    <div class="input-group">
                        <select name="dicType" id="dicType" class="form-control">
                            <option value="">请选择类型</option>
                            <c:forEach items="${cacheTypeList}" var="keyValue">
                                <option value="${keyValue.dicId}" ${keyValue.dicId==dicType?'selected':''}>${keyValue.dicName}</option>
                            </c:forEach>
                        </select>
                        <span class="input-group-btn">
                            <button class="btn btn-sm btn-success" type="submit" id="fa-search"><i
                                    class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
        <div class="row panel panel-default table-responsive">
            <div class="panel-heading">
                <span class="fa fa-list-ul" aria-hidden="true"></span>
                <b>数据字典列表</b>
                <shiro:hasPermission name="system_dic_add">
                    <a class="btn btn-xs btn-success pull-right add_dic" title="添加字典" href="javascript:void(0);" data-toggle="modal" data-target="#addDic" >
                        <i class="ace-icon fa fa-plus-square bigger-120"></i>添加字典
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
                        <th>编码</th>
                        <th>名称</th>
                        <th>属性值</th>
                        <th>类型</th>
                        <th style="width: 50px;">状态</th>
                        <th style="width: 150px;">创建时间</th>
                        <th style="width: 180px;">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach items="${page.data}" var="list" varStatus="status">
                        <tr>
                            <td class="Serial_number" style="text-align: center;">
                                    ${(page.pageNO-1)*page.pageSize+status.index+1}
                            </td>
                            <td>${list.dicCode}</td>
                            <td>${list.dicName}</td>
                            <td>${empty list.dicValue?'- - - -':list.dicValue}</td>
                            <td>${list.dicTypeName}</td>
                            <td>${list.state==1?'启用':'禁用'}</td>
                            <td>${ fn:substring(list.createDate ,0,19)}</td>
                            <td>
                                <c:if test="${list.level==0}">
                                    <shiro:hasRole name="${adminCode}">
                                        <c:if test="${list.state=='1'}">
                                            <a class="btn btn-xs btn-warning editState" title="禁用字典" href="javascript:void(0);" data-dicId="${list.dicId}_0">
                                                <i class="ace-icon fa fa-lock bigger-120"></i>禁用
                                            </a>
                                        </c:if>
                                        <c:if test="${list.state=='0'}">
                                            <a class="btn btn-xs btn-success editState" title="启用字典" href="javascript:void(0);" data-dicId="${list.dicId}_1">
                                                <i class="ace-icon fa fa-unlock-alt bigger-120"></i>启用
                                            </a>
                                        </c:if>
                                        <button class="btn btn-xs btn-info editDic" data-toggle="modal" data-target="#editDic"
                                                data-dic="${list}" title="编辑字典">
                                            <i class="ace-icon fa fa-edit bigger-120"></i>编辑
                                        </button>
                                        <a class="btn btn-xs btn-danger delDic" title="删除字典" href="javascript:void(0);" data-dicId="${list.dicId}" data-toggle="modal" data-target="#delDic">
                                            <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
                                        </a>
                                    </shiro:hasRole>
                                </c:if>
                                <c:if test="${empty list.level or list.level!=0}">
                                    <c:if test="${list.state=='1'}">
                                        <shiro:hasPermission name="system_dic_edit">
                                            <a class="btn btn-xs btn-warning editState" title="禁用字典" href="javascript:void(0);" data-dicId="${list.dicId}_0">
                                                <i class="ace-icon fa fa-lock bigger-120"></i>禁用
                                            </a>
                                        </shiro:hasPermission>
                                    </c:if>
                                    <c:if test="${list.state=='0'}">
                                        <shiro:hasPermission name="system_dic_edit">
                                            <a class="btn btn-xs btn-success editState" title="启用字典" href="javascript:void(0);" data-dicId="${list.dicId}_1">
                                                <i class="ace-icon fa fa-unlock-alt bigger-120"></i>启用
                                            </a>
                                        </shiro:hasPermission>
                                    </c:if>
                                    <shiro:hasPermission name="system_dic_edit">
                                        <button class="btn btn-xs btn-info editDic" data-toggle="modal" data-target="#editDic"
                                                data-dic="${list}" title="编辑字典">
                                            <i class="ace-icon fa fa-edit bigger-120"></i>编辑
                                        </button>
                                    </shiro:hasPermission>
                                    <shiro:hasPermission name="system_dic_del">
                                        <a class="btn btn-xs btn-danger delDic" title="删除字典" href="javascript:void(0);" data-dicId="${list.dicId}" data-toggle="modal" data-target="#delDic">
                                            <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
                                        </a>
                                    </shiro:hasPermission>
                                </c:if>
                            </td>
                        </tr>
                    </c:forEach>
                    </tbody>
                    <c:if test="${page.totalPageNO>1}">
                        <thead>
                        <tr>
                            <th colspan="9">
                                <tags:pagination></tags:pagination>
                            </th>
                        </tr>
                        </thead>
                    </c:if>
                </table>
            </c:if>
        </div>
    </div>
</div>
<div id="addDicType" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">添加字典类型</h4>
            </div>
            <form id="addDicTypeForm" class="form-horizontal" action="${root}/system/dic/saveDicType" method="post">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="dicCode" class="col-sm-2 control-label col-xs-3">类型编码<span style="color:red;">*</span></label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="dicCode" id="dicCode" class="form-control" required
                                   placeholder="类型编码,必填项 最大长度20" maxlength="20">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="dicName" class="col-sm-2 control-label col-xs-3">类型名称<span style="color:red;">*</span></label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="dicName" id="dicName" class="form-control" required
                                   placeholder="类型名称,必填项 最大长度20" maxlength="20">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="state" class="col-sm-2 control-label col-xs-3">类型状态:</label>
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
                        <label for="remark" class="col-sm-2 control-label col-xs-3">类型备注:</label>
                        <div class="col-sm-10 col-xs-9">
                            <textarea name="remark" id="remark" class="form-control" rows="3"
                                      placeholder="类型备注,最多添加100个字" maxlength="100"></textarea>
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
<div id="editDicType" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">修改字典类型</h4>
            </div>
            <form id="editDicTypeForm" class="form-horizontal" action="${root}/system/dic/editDicType" method="post">
                <input name="dicId" type="hidden" value="" id="editDicTypeDicId">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="dicCode" class="col-sm-2 control-label col-xs-3">类型编码<span style="color:red;">*</span></label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="dicCode" id="editDicTypeCode" class="form-control" required
                                   placeholder="类型编码,必填项 最大长度20" maxlength="20">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="dicName" class="col-sm-2 control-label col-xs-3">类型名称<span style="color:red;">*</span></label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="dicName" id="editDicTypeName" class="form-control" required
                                   placeholder="类型名称,必填项 最大长度20" maxlength="20">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="state" class="col-sm-2 control-label col-xs-3">类型状态:</label>
                        <div class="col-sm-10 col-xs-9">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" value="1">启用
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" value="0" >禁用
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="remark" class="col-sm-2 control-label col-xs-3">类型备注:</label>
                        <div class="col-sm-10 col-xs-9">
                            <textarea name="remark" id="editDicTyperemark" class="form-control" rows="3"
                                      placeholder="类型备注,最多添加100个字" maxlength="100"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn btn-primary btn-sm">确定</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="delDicType" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">删除字典类型</h4>
            </div>
            <form id="delDicTypeForm" class="form-horizontal" action="${root}/system/dic/delDicType" method="post">
                <input name="dicId" type="hidden" value="" id="delDicTypeDicId">
                <div class="modal-body">
                    你确定要删除该字典类型吗？
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                    <button type="submit" class="btn btn-primary btn-sm doDelRole">确定</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="addDic" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">添加字典类型</h4>
            </div>
            <form id="addDicForm" class="form-horizontal" action="${root}/system/dic/saveDic" method="post">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="dicCode" class="col-sm-2 control-label col-xs-3">字典类型<span style="color:red;">*</span></label>
                        <div class="col-sm-10 col-xs-9">
                            <select name="dicType" id="addDicTypes" required class="form-control">
                                <option value="">请选择类型</option>
                                <c:forEach items="${cacheTypeList}" var="keyValue">
                                    <option value="${keyValue.dicId}">${keyValue.dicName}</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="dicCode" class="col-sm-2 control-label col-xs-3">字典编码<span style="color:red;">*</span></label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="dicCode" id="code" class="form-control" required
                                   placeholder="类型编码,必填项 最大长度20" maxlength="20">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="dicName" class="col-sm-2 control-label col-xs-3">字典名称<span style="color:red;">*</span></label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="dicName" id="name" class="form-control" required
                                   placeholder="类型名称,必填项 最大长度20" maxlength="20">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="dicName" class="col-sm-2 control-label col-xs-3">属性值:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="dicValue" id="dicValue" class="form-control"
                                   placeholder="属性值,如有请用多个用英文逗号','隔开" maxlength="200">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="addstate" class="col-sm-2 control-label col-xs-3">字典状态:</label>
                        <div class="col-sm-10 col-xs-9">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" id="addstate" value="1">启用
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" value="0" >禁用
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="addRemark" class="col-sm-2 control-label col-xs-3">字典备注:</label>
                        <div class="col-sm-10 col-xs-9">
                            <textarea name="remark" id="addRemark" class="form-control" rows="3"
                                      placeholder="类型备注,最多添加100个字" maxlength="100"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn btn-primary btn-sm">添加</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="editDic" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">修改字典</h4>
            </div>
            <form id="editDicForm" class="form-horizontal" action="${root}/system/dic/editDic" method="post">
                <input name="dicId" type="hidden" value="" id="editDicId">
                <input type="hidden" name="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&sort=${page.sort}&dicType=${dicType}">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="dicCode" class="col-sm-2 control-label col-xs-3">字典类型<span style="color:red;">*</span></label>
                        <div class="col-sm-10 col-xs-9">
                            <select name="dicType" id="editDicTypes" required class="form-control">
                                <option value="">请选择类型</option>
                                <c:forEach items="${cacheTypeList}" var="keyValue">
                                    <option value="${keyValue.dicId}">${keyValue.dicName}</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="dicCode" class="col-sm-2 control-label col-xs-3">类型编码<span style="color:red;">*</span></label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="dicCode" id="editDicCode" class="form-control" required
                                   placeholder="类型编码,必填项 最大长度20" maxlength="20">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="dicName" class="col-sm-2 control-label col-xs-3">类型名称<span style="color:red;">*</span></label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="dicName" id="editDicName" class="form-control" required
                                   placeholder="类型名称,必填项 最大长度20" maxlength="20">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="dicName" class="col-sm-2 control-label col-xs-3">属性值:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="dicValue" id="editdicValue" class="form-control"
                                   placeholder="属性值,如有请用多个用英文逗号','隔开" maxlength="200">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="editState" class="col-sm-2 control-label col-xs-3">类型状态:</label>
                        <div class="col-sm-10 col-xs-9">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" id="editState" value="1">启用
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" value="0" >禁用
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="remark" class="col-sm-2 control-label col-xs-3">类型备注:</label>
                        <div class="col-sm-10 col-xs-9">
                            <textarea name="remark" id="editDicremark" class="form-control" rows="3"
                                      placeholder="类型备注,最多添加100个字" maxlength="100"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn btn-primary btn-sm">确定</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="delDic" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <c:set var="listSize" value="${fn:length(page.data)}"></c:set>
                <h4 class="modal-title">删除字典数据</h4>
            </div>
            <form id="delDicForm" class="form-horizontal" action="${root}/system/dic/delDic" method="post">
                <input name="dicId" type="hidden" value="" id="delDicId">
                <c:if test="${page.totalPageNO==page.pageNO&&listSize==1}">
                    <input name="pageChage" value="1">
                    <input type="hidden" name="backUrl" value="pageNO=${page.pageNO-1}&pageSize=${page.pageSize}&sort=${page.sort}&&dicType=${dicType}">
                </c:if>
                <c:if test="${page.totalPageNO!=page.pageNO||listSize!=1}">
                    <input type="hidden" name="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&sort=${page.sort}&&dicType=${dicType}">
                </c:if>
                <div class="modal-body">
                    你确定要删除该字典吗？
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                    <button type="submit" class="btn btn-primary btn-sm">确定</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
    /**字典类型相关js*/
    $('.add_dicType').click(function(){
        $('#addDicTypeForm').find('input[type=text]').val('');
        $("#editDicTypeForm").find('textarea').val('');
        $('#addDicTypeForm').find('input:radio[name=state]')[0].checked = true;
    });
    $('.editDicType').click(function () {
        $("#editDicTypeForm").find('input[type=text]').val('');
        $("#editDicTypeForm").find('textarea').val('');
        $('#editDicTypeForm').find('input:radio[name=state]')[0].checked = true;
        var dicType = eval("(" + $(this).attr('data-dicType') + ")");
        $("#editDicTypeDicId").val(dicType.dicId);
        $("#editDicTypeCode").val(dicType.dicCode);
        $("#editDicTypeName").val(dicType.dicName);
        $("#editDicTyperemark").val(dicType.remark);
        $('#editDicTypeForm').find('input:radio[name=state]')[1].checked = true;
        if(dicType.state=="1"){
            $('#editDicTypeForm').find('input:radio[name=state]')[0].checked = true;
        }
    });
    $('.editDicState').click(function () {
        $("#editDicTypeForm").attr('action',root+"/system/dic/updateDicTypeState")
        $("#editDicTypeForm").find('input[type=text]').val('');
        $("#editDicTypeForm").find('textarea').val('');
        $('#editDicTypeForm').find('input:radio[name=state]')[0].checked = true;
        var data = $(this).attr('data-dicId');
        $("#editDicTypeDicId").val(data.split('_')[0]);
        $('#editDicTypeForm').find('input:radio[name=state]')[1].checked = true;
        if(data.split('_')[1]=="1"){
            $('#editDicTypeForm').find('input:radio[name=state]')[0].checked = true;
        }
        $('#editDicTypeForm').submit();
    });
    $('.delDicType').click(function () {
        $("#delDicTypeDicId").val($(this).attr('data-dicId'));
    });

    /**字典相关js*/
    $('.add_dic').click(function(){
        $('#addDicForm').find('input[type=text]').val('');
        $("#addDicForm").find('textarea').val('');
        $("#addDicForm").find('select').val('');
        $('#addDicForm').find('input:radio[name=state]')[0].checked = true;
    });
    $('.editDic').click(function () {
        $("#editDicForm").find('input[type=text]').val('');
        $("#editDicForm").find('textarea').val('');
        $("#editDicForm").find('select').val('');
        $('#editDicForm').find('input:radio[name=state]')[0].checked = true;
        var dic = eval("(" + $(this).attr('data-dic') + ")");
        $("#editDicId").val(dic.dicId);
        $("#editDicTypes").val(dic.dicType);
        $("#editDicCode").val(dic.dicCode);
        $("#editDicName").val(dic.dicName);
        $("#editdicValue").val(dic.dicValue);
        $("#editDicremark").val(dic.remark);
        $('#editDicForm').find('input:radio[name=state]')[1].checked = true;
        if(dic.state=="1"){
            $('#editDicForm').find('input:radio[name=state]')[0].checked = true;
        }
    });
    $('.editState').click(function () {
        $("#editDicForm").attr('action',root+"/system/dic/updateDicState")
        $("#editDicForm").find('input[type=text]').val('');
        $("#editDicForm").find('textarea').val('');
        $("#editDicForm").find('select').val('');
        $('#editDicForm').find('input:radio[name=state]')[0].checked = true;
        var data = $(this).attr('data-dicId');
        $("#editDicId").val(data.split('_')[0]);
        $('#editDicForm').find('input:radio[name=state]')[1].checked = true;
        if(data.split('_')[1]=="1"){
            $('#editDicForm').find('input:radio[name=state]')[0].checked = true;
        }
        $('#editDicForm').submit();
    });
    $('.delDic').click(function () {
        $("#delDicId").val($(this).attr('data-dicId'));
    });
</script>

