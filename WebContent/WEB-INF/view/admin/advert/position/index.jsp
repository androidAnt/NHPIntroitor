<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="${root}/components/dateRange/dateRange.css"/>
<script type="text/javascript" src="${root}/components/dateRange/dateRange.js"></script>
<div class="row">
    <div class="col-lg-6" style="padding: 0;margin-bottom: 10px;">
        <form method="post" action="${root}/admin/advert/position" id="form1">
            <input type="hidden" name="sort" id="sort" value="${sort}"/>
        <div class="input-group">
            <input type="text" name="search_title" value="${position.title}" class="form-control"
                   placeholder="位置标题,支持模糊查找" maxlength="11"/>
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
        <b>广告位置列表</b>
        <shiro:hasPermission name="admin_advert_position_save">
            <a class="btn btn-xs btn-success pull-right addPosition" title="新增" data-toggle="modal" data-target="#addPosition">
                <i class="ace-icon fa fa-plus-square bigger-120"></i>新增
            </a>
        </shiro:hasPermission>
    </div>
    <c:if test="${empty list}">
        <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
    </c:if>
    <c:if test="${not empty list}">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th width="50">序号</th>
                <th class="sort-th">标题
                    <c:if test="${fn:contains(sort, 'title')}">
                        <c:if test="${sort=='a.title DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.title"></i>
                        </c:if>
                        <c:if test="${sort=='a.title ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.title"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(sort, 'title')}">
                        <i class="fa fa-sort" data-orderBy="a.title"></i>
                    </c:if>
                </th>
                <th>父级位置</th>
                <th class="sort-th">宽度
                    <c:if test="${fn:contains(sort, 'width')}">
                        <c:if test="${sort=='a.width DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.width"></i>
                        </c:if>
                        <c:if test="${sort=='a.width ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.width"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(sort, 'width')}">
                        <i class="fa fa-sort" data-orderBy="a.width"></i>
                    </c:if>
                </th>
                <th class="sort-th">高度
                    <c:if test="${fn:contains(sort, 'height')}">
                        <c:if test="${sort=='a.height DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.height"></i>
                        </c:if>
                        <c:if test="${sort=='a.height ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.height"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(sort, 'height')}">
                        <i class="fa fa-sort" data-orderBy="a.height"></i>
                    </c:if>
                </th>
                <th style="width: 80px;">状态</th>
                <th style="width: 146px;" class="sort-th">操作时间
                    <c:if test="${fn:contains(sort, 'op_date')}">
                        <c:if test="${sort=='a.op_date DESC'}">
                            <i class="fa fa-caret-down" data-orderBy="a.op_date"></i>
                        </c:if>
                        <c:if test="${sort=='a.op_date ASC'}">
                            <i class="fa fa-caret-up" data-orderBy="a.op_date"></i>
                        </c:if>
                    </c:if>
                    <c:if test="${!fn:contains(sort, 'op_date')}">
                        <i class="fa fa-sort" data-orderBy="a.op_date"></i>
                    </c:if>
                </th>
                <th style="width: 150px;">操作</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${list}" var="list" varStatus="status">
                <tr <c:if test="${list.state==0}">class="warning"</c:if>>
                    <td class="Serial_number">${status.index+1}</td>
                    <td>${list.title}</td>
                    <td>
                        <c:if test="${not empty list.pTitle}">
                            ${list.pTitle}
                        </c:if>
                        <c:if test="${empty list.pTitle}">- - - -</c:if>
                    </td>
                    <td>
                        <c:if test="${not empty list.width}">
                            ${list.width}
                        </c:if>
                        <c:if test="${empty list.width}">- - - -</c:if>
                    </td>
                    <td>
                        <c:if test="${not empty list.height}">
                            ${list.height}
                        </c:if>
                        <c:if test="${empty list.height}">- - - -</c:if>
                    </td>
                    <td style="text-align: center;">
                        <c:if test="${list.state==0}">隐藏</c:if>
                        <c:if test="${list.state==1}">正常</c:if>
                    </td>
                    <td>
                        <c:if test="${not empty list.opDate}">
                            ${ fn:substring(list.opDate ,0,19)}
                        </c:if>
                        <c:if test="${empty list.opDate}">- - - -</c:if>
                    </td>
                    <td style="text-align: center;">
                        <shiro:hasPermission name="admin_advert_position_edit">
                            <c:if test="${list.state==0}">
                                <button class="btn btn-xs btn-warning editPositionState" title="显示"
                                        data-apId="${list.apId}_1">
                                    <i class="ace-icon fa fa-unlock-alt bigger-120"></i>显示
                                </button>
                            </c:if>
                            <c:if test="${list.state==1}">
                                <button class="btn btn-xs btn-warning editPositionState" title="隐藏"
                                        data-apId="${list.apId }_0">
                                    <i class="ace-icon fa fa-lock bigger-120"></i>隐藏
                                </button>
                            </c:if>
                            <button class="btn btn-xs btn-info editPosition" title="编辑" data-obj="${list}"
                                    data-toggle="modal" data-target="#editPosition">
                                <i class="ace-icon fa fa-edit bigger-120"></i>编辑
                            </button>
                        </shiro:hasPermission>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </c:if>
</div>
<div id="addPosition" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">新增广告位置</h4>
            </div>
            <form id="addPositionForm" class="form-horizontal" action="${root}/admin/advert/position/save" method="post">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="add_title" class="col-sm-2 control-label col-xs-3">位置标题:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="title" required id="add_title" class="form-control" required
                                   placeholder="位置标题,必填项 最大长度20" maxlength="20">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="pId" class="col-sm-2 control-label col-xs-3">父级位置:</label>
                        <div class="col-sm-10 col-xs-9">
                            <select name="pId" id="pId" class="form-control">
                                <option value="0">一级标题</option>
                                    <c:forEach items="${list}" var="list">
                                        <option value="${list.apId}">${list.title}</option>
                                    </c:forEach>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="width" class="col-sm-2 control-label col-xs-3">位置宽度:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="number" name="width" id="width" class="form-control" required
                                   placeholder="位置宽度(像素),必填项" maxlength="5" required min="0"  max="3000" step="1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="height" class="col-sm-2 control-label col-xs-3">位置高度:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="number" name="height" id="height" class="form-control" required
                                   placeholder="位置高度(像素),必填项" required min="0" max="3000" step="1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="state" class="col-sm-2 control-label col-xs-3">数据状态:</label>
                        <div class="col-sm-10 col-xs-9">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" value="1" checked>显示
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" id="state" value="0">隐藏
                            </label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn btn-primary btn-sm" id="submit">确定</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="editPosition" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">编辑广告位置</h4>
            </div>
            <form id="editForm" class="form-horizontal" action="${root}/admin/advert/position/edit" method="post" onsubmit="return doEdit();">
                <input type="hidden" name="apId" id="apId">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="edit_title" class="col-sm-2 control-label col-xs-3">位置标题:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="text" name="title" required id="edit_title" class="form-control" required
                                   placeholder="位置标题,必填项 最大长度20" maxlength="20">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit_pId" class="col-sm-2 control-label col-xs-3">父级位置:</label>
                        <div class="col-sm-10 col-xs-9">
                            <select name="pId" id="edit_pId" class="form-control">
                                <option value="0">一级标题</option>
                                <c:forEach items="${list}" var="list">
                                    <option value="${list.apId}">${list.title}</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit_width" class="col-sm-2 control-label col-xs-3">位置宽度:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="number" name="width" id="edit_width" class="form-control" required
                                   placeholder="位置宽度(像素),必填项"  max="3000" required min="1" step="1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit_height" class="col-sm-2 control-label col-xs-3">位置高度:</label>
                        <div class="col-sm-10 col-xs-9">
                            <input type="number" name="height" id="edit_height" class="form-control" required
                                   placeholder="位置高度(像素),必填项" required min="1" step="1"  max="3000">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit_state" class="col-sm-2 control-label col-xs-3">数据状态:</label>
                        <div class="col-sm-10 col-xs-9">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" value="1">显示
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" id="edit_state" value="0">隐藏
                            </label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn btn-primary btn-sm" id="edit_submit">确定</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
    //排序
    $(".sort-th i").click(function () {
        var orderType = " DESC";
        if ($(this).hasClass('fa-caret-down')) {
            orderType = " ASC";
        }
        $("#sort").val($(this).attr('data-orderBy') + orderType);
        $("#form1").submit();
    });
    //准备添加
    $('.addPosition').click(function () {
        $('#addPositionForm').find('input[type=hidden]').val('');
        $('#addPositionForm').find('input[type=text]').val('');
        $('#addPositionForm').find('input[type=number]').val('');
        $("#pId").val('0');
        $('#addPositionForm').find("input[name=state]:eq(0)").prop("checked",true);
    });

    //准备修改
    $('.editPosition').click(function () {
        $('#editPosition').find('input[type=hidden]').val('');
        $('#editPosition').find('input[type=text]').val('');
        $('#addPositionForm').find('input[type=number]').val('');
        $("#edit_pId").val('0');
        var obj = eval("(" + $(this).attr('data-obj') + ")");
        $("#apId").val(obj.apId);
        $("#edit_title").val(obj.title);
        $("#edit_width").val(obj.width);
        $("#edit_height").val(obj.height);
        $("#edit_pId").val(obj.pId);
        if (obj.state=="1") {
            $('#editForm').find("input[name=state]:eq(0)").prop("checked",true);
        }else{
            $('#editForm').find("input[name=state]:eq(1)").prop("checked",true);
        }
    });
    //修改
    function doEdit(){
        if($('#apId').val()==$('#edit_pId').val()){
            showMes("0",'不能选择自己为父级位置');
            return false;
        }
        return true;
    }
    $('.editPositionState').click(function () {
        $('#editForm').find("input[name=state]:eq(1)").prop("checked",true);
        if ($(this).attr('title') == '显示') {
            $('#editForm').find("input[name=state]:eq(0)").prop("checked",true);
        }
        $("#editForm").attr('action', root + "/admin/advert/position/editState/" + $(this).attr('data-apId').split("_")[0]+"/");
        $(this).hide();
        $('#editForm').submit();

    });
</script>

