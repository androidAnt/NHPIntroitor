<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="${root}/css/system/res/res.css"/>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>资源列表</b>
    </div>
    <div class="tree">
        <ul>
            <li class="parent_li">
                <span><i class="fa fa-home" id="rootRes"></i>资源模块</span>
                <button class="btn btn-xs btn-success" onclick="addRes(this);" style="margin-top: -3px;margin-left: 10px;" data-toggle="modal" data-target="#addRes"
                        data-res="0" title="添加资源模块">
                    <i class="ace-icon fa fa-plus-square bigger-120"></i>添加资源模块
                </button>
                <ul>
                    <c:forEach items="${list}" var="res">
                    <li class="parent_li">
                        <span data-res="${res}" class="hasChild"><i class="fa fa-th-large"></i>${res.resName}</span>
                        <button class="btn btn-xs btn-success" onclick="addRes(this);" style="margin-top: -3px;margin-left: 10px;" data-toggle="modal" data-target="#addRes"
                                data-res="${res}" title="添加一级菜单">
                            <i class="ace-icon fa fa-plus-square bigger-120"></i>一级菜单
                        </button>
                        <button class="btn btn-xs btn-purple" onclick="seeRes(this);" style="margin-top: -3px;" data-toggle="modal" data-target="#seeRes"
                                data-res="${res}" title="查看详情">
                            <i class="ace-icon fa fa-eye bigger-120"></i>查看
                        </button>
                        <button class="btn btn-xs btn-info" onclick="updateRes(this);" style="margin-top: -3px;" data-toggle="modal" data-target="#updateRes"
                                data-res="${res}" title="修改">
                            <i class="ace-icon fa fa-edit bigger-120"></i>修改
                        </button>
                        <button class="btn btn-xs btn-danger" onclick="delResFun(this);" style="margin-top: -3px;" data-res="${res}" title="删除" data-toggle="modal" data-target="#delRes">
                            <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
                        </button>
                        <ul></ul>
                    </li>
                    </c:forEach>
                </ul>
            </li>
        </ul>
    </div>
</div>
<div id="delRes" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">删除资源</h4>
            </div>
            <div class="modal-body">
                <input type="hidden" name="delResId" id="delResId" value="0">
                你确定要删除该资源吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm" onclick="doDelRes();">确定</button>
            </div>
        </div>
    </div>
</div>
<div id="addRes" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">添加资源</h4>
            </div>
            <form id="addResForm" class="form-horizontal" onsubmit="return doAdd();" method="post" action="#">
                <div class="modal-body">
                    <input type="hidden" name="pId" id="pId" value="0">
                    <input type="hidden" name="type" id="type" value="0">
                    <div class="form-group">
                        <label for="resName" class="col-sm-2 control-label col-xs-3">资源名称:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="resName" id="resName" class="form-control" required placeholder="资源名称,必填项" maxlength="15">
                        </div>
                    </div>
                    <!-- <div class="form-group hide" id="moduleTypeDiv">
                        <label for="moduleType" class="col-sm-2 control-label col-xs-3">模块类型:</label>
                        <div class="col-sm-10 col-xs-9">
                            <select id="moduleType" name="moduleType" class="form-control">
                                <option value="PC">PC端模块</option>
                                <option value="APP">公众号端模块</option>
                            </select>
                        </div>
                    </div> -->
                    <div class="form-group">
                        <label for="resCode" class="col-sm-2 control-label col-xs-3">权限编码:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="resCode" id="resCode" class="form-control" required
                                   placeholder="权限编码,必填项且不能重复" maxlength="30">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="content" class="col-sm-2 control-label col-xs-3">资源地址:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="content" id="content" class="form-control"
                                   placeholder="资源地址,非必填项" maxlength="100">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="icon" class="col-sm-2 control-label col-xs-3">资源图标:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="icon" id="icon" class="form-control" placeholder="资源图标,非必填项" maxlength="30">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="sortOrder" class="col-sm-2 control-label col-xs-3">资源排序:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="number" min="0" name="sortOrder" id="sortOrder" class="form-control"
                                   placeholder="资源排序,必填项,类型为整形" required maxlength="3"  step="1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="state" class="col-sm-2 control-label col-xs-3">资源状态:</label>
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
                        <label for="remark" class="col-sm-2 control-label col-xs-3">资源备注:</label>
                        <div class="col-sm-10 col-xs-9">
                            <textarea name="remark" id="remark" class="form-control" rows="3"
                                      placeholder="模块备注,最多添加100个字" maxlength="100"></textarea>
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
<div id="updateRes" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">修改资源</h4>
            </div>
            <form id="updateResForm" class="form-horizontal" onsubmit="return doUpdate();" method="post" action="#">
                <div class="modal-body">
                    <input type="hidden" name="pId" id="updatePId" value="0">
                    <input type="hidden" name="resId" id="updateResId" value="0">
                    <input type="hidden" name="type" id="updateType" value="0">
                    <div class="form-group">
                        <label for="updateResName" class="col-sm-2 control-label col-xs-3">资源名称:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="resName" id="updateResName" class="form-control" required placeholder="资源名称,必填项" maxlength="15">
                        </div>
                    </div>
                    <!-- <div class="form-group">
                        <label for="updateModuleType" class="col-sm-2 control-label col-xs-3">模块类型:</label>
                        <div class="col-sm-10 col-xs-9">
                            <select id="updateModuleType" name="moduleType" class="form-control">
                                <option value="PC">PC端模块</option>
                                <option value="APP">公众号端模块</option>
                            </select>
                        </div>
                    </div> -->
                    <div class="form-group">
                        <label for="updateResCode" class="col-sm-2 control-label col-xs-3">权限编码:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="resCode" id="updateResCode" class="form-control" required
                                   placeholder="权限编码,必填项且不能重复" maxlength="30">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="updateContent" class="col-sm-2 control-label col-xs-3">资源地址:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="content" id="updateContent" class="form-control"
                                   placeholder="资源地址,非必填项" maxlength="100">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="updateIcon" class="col-sm-2 control-label col-xs-3">资源图标:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="icon" id="updateIcon" class="form-control" placeholder="资源图标,非必填项" maxlength="30">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="updateSortOrder" class="col-sm-2 control-label col-xs-3">资源排序:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="number" min="0" name="sortOrder" id="updateSortOrder" class="form-control"
                                   placeholder="资源排序,必填项,类型为整形" required maxlength="3"  step="1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="updateState" class="col-sm-2 control-label col-xs-3">资源状态:</label>
                        <div class="col-sm-10 col-xs-9">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" id="updateState" value="1">启用
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" value="0" >禁用
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="updateRemark" class="col-sm-2 control-label col-xs-3">资源备注:</label>
                        <div class="col-sm-10 col-xs-9">
                            <textarea name="remark" id="updateRemark" class="form-control" rows="3"
                                      placeholder="模块备注,最多添加100个字" maxlength="100"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn btn-primary btn-sm">修改</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="seeRes" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">查看资源</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" id="seeResForm">
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-xs-3">资源名称</label>
                        <div class="col-sm-10 col-xs-9">
                            <p class="form-control-static" id="seeResName"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-xs-3">模块类型</label>
                        <div class="col-sm-10 col-xs-9">
                            <p class="form-control-static" id="seemoduleType"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-xs-3">权限编码</label>
                        <div class="col-sm-10 col-xs-9">
                            <p class="form-control-static" id="seeResCode"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-xs-3">资源类型</label>
                        <div class="col-sm-10 col-xs-9">
                            <p class="form-control-static" id="seeTyte"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-xs-3">资源地址</label>
                        <div class="col-sm-10 col-xs-9">
                            <p class="form-control-static" id="seeContent"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-xs-3">资源图标</label>
                        <div class="col-sm-10 col-xs-9">
                            <p class="form-control-static" id="seeIcon"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-xs-3">资源排序</label>
                        <div class="col-sm-10 col-xs-9">
                            <p class="form-control-static" id="seeSortOrder"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-xs-3">资源状态</label>
                        <div class="col-sm-10 col-xs-9">
                            <p class="form-control-static" id="seeState"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-xs-3">创建时间</label>
                        <div class="col-sm-10 col-xs-9">
                            <p class="form-control-static" id="seeCreateDate"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-xs-3">资源备注</label>
                        <div class="col-sm-10 col-xs-9">
                            <p class="form-control-static" id="seeRemark"></p>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
            </div>
        </div>
    </div>
</div>
<div class="hide" id="template">
    <li class="parent_li">
        <span data-res="#res" class="hasChild" onclick="getChild(this);"><i class="#icon"></i>#Name</span>
        <button class="btn btn-xs btn-success" onclick="addRes(this);" style="margin-top: -3px;margin-left: 10px;" data-toggle="modal" data-target="#addRes"
                data-res="#res" title="添加#type">
            <i class="ace-icon fa fa-plus-square bigger-120"></i>#type
        </button>
        <button class="btn btn-xs btn-purple" onclick="seeRes(this);" style="margin-top: -3px;" data-toggle="modal" data-target="#seeRes"
                data-res="#res" title="查看详情">
            <i class="ace-icon fa fa-eye bigger-120"></i>查看
        </button>
        <button class="btn btn-xs btn-info" onclick="updateRes(this);" style="margin-top: -3px;" data-toggle="modal" data-target="#updateRes"
                data-res="#res" title="修改">
            <i class="ace-icon fa fa-edit bigger-120"></i>修改
        </button>
        <button class="btn btn-xs btn-danger" onclick="delResFun(this);" style="margin-top: -3px;" data-res="#res" title="删除" data-toggle="modal" data-target="#delRes">
            <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
        </button>
        <ul></ul>
    </li>
</div>
<div class="hide" id="template3">
    <li class="parent_li">
        <span><i class="fa fa-tag"></i>#Name</span>
        <button class="btn btn-xs btn-purple" onclick="seeRes(this);" style="margin-top: -3px;" data-toggle="modal" data-target="#seeRes"
                data-res="#res" title="查看详情">
            <i class="ace-icon fa fa-eye bigger-120"></i>查看
        </button>
        <button class="btn btn-xs btn-info" onclick="updateRes(this);" style="margin-top: -3px;" data-toggle="modal" data-target="#updateRes"
                data-res="#res" title="修改">
            <i class="ace-icon fa fa-edit bigger-120"></i>修改
        </button>
        <button class="btn btn-xs btn-danger" onclick="delResFun(this);" style="margin-top: -3px;" data-res="#res" title="删除" data-toggle="modal" data-target="#delRes">
            <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
        </button>
        <ul></ul>
    </li>
</div>
<script src="${root}/js/system/res/res.js"></script>