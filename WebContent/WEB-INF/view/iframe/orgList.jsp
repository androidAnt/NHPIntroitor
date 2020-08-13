<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="row panel panel-default table-responsive ">
        <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>组织机构列表</b>
        <shiro:hasPermission name="system_org_add">
            <a class="btn btn-xs btn-add pull-right" title="添加组织机构" href="javascript:void(0);" id="toAdd">
                <i class="ace-icon fa fa-plus-square bigger-120" ></i>添加组织机构
            </a>
        </shiro:hasPermission>
    </div>
  <c:if test="${empty page.data}">
        <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
    </c:if>
     <c:if test="${not empty page.data}">
        <table class="table table-bordered table-hover orgtable-class">
            <thead>
            <tr>
                <th width="44">序号</th>
                <th>机构名称</th>
                <th>机构编码</th>
                <th>状态</th>
                <th>创建日期</th>
                <th width="185px">操作</th>
            </tr>
            </thead>

            <tbody>            
            <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                <td class="Serial_number" style="text-align: center;">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
<%--                     <td class="Serial_number" align="center">${status.index+1}</td> --%>
                    <td>${list.orgName}</td>
                    <td>${list.orgCode}</td>
                    <td>
                        <c:if test="${list.state==1}">正常</c:if>
                        <c:if test="${list.state!=1}">禁用</c:if>
                    </td>
                    <td>${ fn:substring(list.createDate ,0,19)}</td>
                    <td>
                     <shiro:hasPermission name="system_org_edit">
                    	 <button class="btn btn-xs btn-info updateOrg" title="修改" data-orgId="${list.orgId}">
                                <i class="ace-icon fa fa-edit bigger-120"></i>修改
                            </button>
                            </shiro:hasPermission>
                             <shiro:hasPermission name="system_org_info">
                  		 <button class="btn btn-xs btn-purple infoOrg" title="详情" data-orgId="${list.orgId}">
                                <i class="ace-icon fa fa-edit bigger-120"></i>详情
                            </button>
                            </shiro:hasPermission>
                    <shiro:hasPermission name="system_org_del">
                    <button class="btn btn-xs btn-danger deleteOrg " data-toggle="modal" data-target="#delOrg"
                                    title="删除" data-orgId="${list.orgId}">
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
 <form action="${root}/system/org/toAddOrg" method="post" id="dealFrom">
 	<input type="hidden" name="pId" id="orgShowPid" value="">
    <input type="hidden" name="orgName" id="orgShowPname" value="">
</form>

<div id="searchModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body table-responsive">
                <form action="${root}/system/org/orgList" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" name="backUrl" value="${backUrl}">
                    <input type="hidden" name="search_contentTypeName" id="search_contentTypeName" value="${ghContentType.contentTypeName}">
                </form>
            </div>
        </div>
    </div>
</div>

<!-- 删除 -->
<div id="delOrg" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px;height:200px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <c:set var="listSize" value="${fn:length(page.data)}"></c:set>
                <h4 class="modal-title">删除组织机构</h4>
            </div>
            <div class="modal-body" style="height:200px">
                <form action="${root}/system/org/del" method="post" id="delForm">
                    <input type="hidden" name="orgId" id="delOrgId" value="0">
                    <c:if test="${page.totalPageNO==page.pageNO&&listSize==1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO-1}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                    <c:if test="${page.totalPageNO!=page.pageNO||listSize!=1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                </form>
                		你确定要删除该组织机构吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doDelOrg">确定</button>
            </div>
        </div>
    </div>
<script>

	/* window.onload =function(){
		var obj = parent.document.getElementById("orgContent"); //取得父页面IFrame对象 
		obj.height= this.document.body.scrollHeight; //调整父页面中IFrame的高度为此页面的高度 
	 }
	 */ 

 $("#toAdd").click(function () {
		var getParentVule = $("#pId",window.parent.document).val();
		var getParentNameVule = $("#pName",window.parent.document).val();
		
		$("#orgShowPid").val(getParentVule);
		$("#orgShowPname").val(getParentNameVule);
		
    	if(getParentVule.length>0){
    		$('#dealFrom').submit();
    	}else{
    		showMes("0", "请选择上级机构！");
    	}
    });
    
    $('.deleteOrg').click(function () {
        $('#delOrgId').val($(this).attr('data-orgId'));
    });
    
    //执行删除操作
    $(".doDelOrg").click(function () {
        $('#delOrg').modal('hide');
        $("#delForm").submit();
    });
    
    $('.updateOrg').click(function (){
        $('#orgShowPid').val($(this).attr('data-orgId'));
        $('#dealFrom').attr("action",root+"/system/org/toEditOrg")
        $('#dealFrom').submit();
    });
    
    $('.infoOrg').click(function (){
        $('#orgShowPid').val($(this).attr('data-orgId'));
        $('#dealFrom').attr("action",root+"/system/org/getInfo")
        $('#dealFrom').submit();
    });
</script>