<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="${root}/components/dateRange/dateRange.css"/>
<script type="text/javascript" src="${root}/components/dateRange/dateRange.js"></script>
<div class="row">
    <div class="col-lg-6" style="padding: 0;margin-bottom: 10px;">
        <div class="input-group">
            <input type="text" name="gDeviceName" id="gDeviceName" value="${device.gDeviceName}" class="form-control"
                   placeholder="检验设备名称,支持模糊查找,例：锅炉"
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
        <b>检验设备列表</b>
        <shiro:hasPermission name="admin_device_save">
            <a class="btn btn-xs btn-success pull-right" title="新增" href="${root}/admin/device/toAdd">
                <i class="ace-icon fa fa-plus-square bigger-120"></i>新增检验设备
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
	              <th width="50" style="text-align: center;white-space: nowrap;">序号</th>
	              <th class="sort-th" style="text-align: center;white-space: nowrap;">设备编号</th>  
	              <th class="sort-th" style="text-align: center;white-space: nowrap;">设备名称</th>
	              <th class="sort-th" style="text-align: center;white-space: nowrap;">使用单位名称</th>
	              <th class="sort-th" style="text-align: center;white-space: nowrap;">设备类型</th>
	              <th class="sort-th" style="text-align: center;white-space: nowrap;">质检等级</th>
	              <th class="sort-th" style="text-align: center;white-space: nowrap;">下次检验时间</th>
	              <th class="sort-th" style="text-align: center;white-space: nowrap; width:80px;">创建人</th>
	              <th class="sort-th" style="text-align: center;white-space: nowrap; width:85px;">创建时间</th>
	              <th style="width: 185px;text-align: center;">操作</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number" style="text-align: center;">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
                    <td>
                        <c:if test="${not empty list.gDeviceNo}">${list.gDeviceNo}</c:if>
                        <c:if test="${empty list.gDeviceNo}">- - - -</c:if>
                    </td>
                    <td>
                        <c:if test="${not empty list.gDeviceName}">${list.gDeviceName}</c:if>
                        <c:if test="${empty list.gDeviceName}">- - - -</c:if>
                    </td>
                     <td>
                        <c:if test="${not empty list.companyName}">${list.companyName}</c:if>
                        <c:if test="${empty list.companyName}">- - - -</c:if>
                    </td>
                    
                     <td>${list.gDeviceType==0?'锅炉':'压力容器'}</td>
                    <td>
                        <c:if test="${list.gQualityLevel=='0'}">1级</c:if>
                        <c:if test="${list.gQualityLevel=='1'}">2级</c:if>
                        <c:if test="${list.gQualityLevel=='2'}">3级</c:if>
                        <c:if test="${list.gQualityLevel=='3'}">4级</c:if>
                        <c:if test="${list.gQualityLevel=='4'}">5级</c:if>
                        
                        <c:if test="${empty list.gQualityLevel}">- - - -</c:if>
                    </td>
                     <td>
                        <c:if test="${not empty list.gInspectionDate}">${fn:substring(list.gInspectionDate,0,10)}</c:if>
                        <c:if test="${empty list.gInspectionDate}">- - - -</c:if>
                    </td>
                       <td>
                        <c:if test="${not empty list.createUser}">${list.createUser}</c:if>
                        <c:if test="${empty list.createUser}">- - - -</c:if>
                    </td>
                    <td>${ fn:substring(list.createDate ,0,10)}</td>
                    <td>
                        <shiro:hasPermission name="admin_device_edit">
                            <button class="btn btn-xs btn-info editDevice" title="修改" data-deviceId="${list.deviceId}">
                                <i class="ace-icon fa fa-edit bigger-120"></i>修改
                            </button>
                        </shiro:hasPermission>
                          <shiro:hasPermission name="admin_device_details">
                            <button title="查看详情" class="btn btn-xs btn-purple deviceDetails" data-deviceId="${list.deviceId}">
                                <i class="ace-icon fa fa-eye bigger-120"></i>详情
                            </button>
                        </shiro:hasPermission>
                        <shiro:hasPermission name="admin_device_delete">
                            <button class="btn btn-xs btn-danger deleteDevice" data-toggle="modal" data-target="#delDevice"
                                    title="删除" data-deviceId="${list.deviceId}">
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
                    <th colspan="10">
                        <tags:pagination formID="form1"></tags:pagination>
                    </th>
                </tr>
                </thead>
            </c:if>
        </table>
    </c:if>
</div>
<!-- 高级查询 -->
<div id="searchModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog" >
        <div class="modal-content">
            <div class="modal-header">
                <div class="table-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">高级查询</h4>
                </div>
            </div>
            <div class="modal-body table-responsive">
                <form action="${root}/admin/device" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                     <input type="hidden" name="search_gDeviceName" id="search_gDeviceName" value="${device.gDeviceName}">
                     <div class="form-group">
                        <label for="search_companyName" class="col-sm-2 control-label">使用单位:</label>
                        <div class="col-sm-10">
                            <input type="text" name="search_companyName" id="search_companyName" class="form-control" value="${waitDevice.companyName}"
                                name="search_companyName"  placeholder="使用单位,支持模糊查询">
                        </div>
                    </div>
                        <div class="form-group">
                            <label for="search_gDeviceNo" class="col-sm-2 control-label">设备编号:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="search_gDeviceNo" value="${device.gDeviceNo}" 
                                  name="search_gDeviceNo" placeholder="检验设备编号,xxxx-xxxx-xxxx">
                            </div>
                        </div>
                         <div class="form-group">
                            <%-- <label for="search_gQualityLevel" class="col-sm-2 control-label">质检等级</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="search_gQualityLevel" value="${device.gQualityLevel}" name="search_gQualityLevel" placeholder="质检等级">
                            </div> --%>
                           <label for="search_gQualityLevel" class="col-sm-2 control-label">质检等级</label>
                         <div class="col-sm-10">
                        <select  class="form-control" id="search_gQualityLevel" name="search_gQualityLevel" >
                              <option value="" selected="selected" id="a">请选择</option>
                           	  <option value="0" <c:if test="${device.gQualityLevel=='0' }">selected="selected"</c:if>>1级</option>
                              <option value="1" <c:if test="${device.gQualityLevel=='1' }">selected="selected"</c:if>>2级</option>
                              <option value="2" <c:if test="${device.gQualityLevel=='2' }">selected="selected"</c:if>>3级</option>
                              <option value="3" <c:if test="${device.gQualityLevel=='3' }">selected="selected"</c:if>>4级</option>
                              <option value="4" <c:if test="${device.gQualityLevel=='4' }">selected="selected"</c:if>>5级</option>
                        </select>
                         </div> 
                        </div>
                         <div class="form-group">
                        <label for="search_gDeviceType" class="col-sm-2 control-label">设备类型:</label>
                        <div class="col-sm-10">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="search_gDeviceType" value="1"
                                       <c:if test="${device.gDeviceType=='1'}"></c:if>>压力容器
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="search_gDeviceType"  value="0"
                                       <c:if test="${device.gDeviceType=='0'}"></c:if>>锅炉
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

<!-- 删除 -->
 <div id="delDevice" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <c:set var="listSize" value="${fn:length(page.data)}"></c:set>
                <h4 class="modal-title">删除检验设备信息</h4>
            </div>
            <div class="modal-body">
                <form action="${root}/admin/device/delete" method="post" id="delForm">
                    <input type="hidden" name="deviceId" id="delDeviceId" value="0">
                    <c:if test="${page.totalPageNO==page.pageNO&&listSize==1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO-1}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                    <c:if test="${page.totalPageNO!=page.pageNO||listSize!=1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>


                </form>
                你确定要删除该检验设备吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doDelDevice">确定</button>
            </div>
        </div>
    </div>
</div> 
<form action="${root}/admin/device/editState" method="post" id="redirectForm">
    <input type="hidden" name="deviceId" id="deviceId">
    <input type="hidden" name="state" id="state">
    <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
</form>
<script>
    //准备删除用户
    $('.deleteDevice').click(function () {
        $('#delDeviceId').val($(this).attr('data-deviceId'));
    });
    //执行删除操作
    $(".doDelDevice").click(function () {
        $('#delDevice').modal('hide');
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
        $("#gDeviceName").val('');
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
       // $('#form1').find("input[name=search_state]").attr("checked", false);
       
    }); 
    //查找
    $('#fa-search').click(function () {
        $("#search_gDeviceName").val($('#gDeviceName').val());
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
    
     //高级搜索
    $('#search_btn').click(function () {
    	 $("#search_gDeviceName").val($('#gDeviceName').val());
         $("#pageNO").val(1);
 	     $('#form1').submit();
    });

     //前往修改页面
    $('.editDevice').click(function () {
        $("#deviceId").val($(this).attr('data-deviceId'));
        $("#redirectForm").attr('action', root + "/admin/device/toEdit");
        $('#redirectForm').submit();
    });
	//查看详情
	$('.deviceDetails').click(function () {
	    $("#deviceId").val($(this).attr('data-deviceId'));
	    $("#redirectForm").attr('action', root + "/admin/device/details");
	    $('#redirectForm').submit();
	});
	
     // 修改状态
	$('.editState').click(function(){
		 $("#deviceId").val($(this).attr('data-deviceId').split("_")[0]);
		 $("#state").val($(this).attr('data-deviceId').split("_")[1]);
		 $("#redirectForm").attr('action', root + "/admin/device/editState");
		 $('#redirectForm').submit();
	});
	
</script>

