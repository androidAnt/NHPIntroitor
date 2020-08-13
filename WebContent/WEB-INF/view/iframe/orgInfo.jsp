<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
    <span class="fa fa-file-text-o" aria-hidden="true"></span><b>组织机构详情</b></div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/system/org/add" class="form-horizontal" method="post" id="addOrgForm" >
                <input type="hidden" name="backUrl" value="${backUrl}">
                <input type="hidden" name="orgId" id="pId" value="${sysOrg.orgId }">
                <div class="col-lg-12" style="padding-left: 0px;">
                     <div class="form-group">  
                     <label for="name" class="col-md-2 control-label col-xs-4">上级机构<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input disabled type="text" disabled class="form-control"  value="${sysOrg.name}" >
                        </div>
                    </div>
                     <div class="form-group">  
                    <label for="orgName" class="col-md-2 control-label col-xs-4">机构名称<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input disabled type="text" class="form-control" name="orgName" id="orgName" maxlength="50" required placeholder="机构名称"  value="${sysOrg.orgName}">
                        </div>
                        </div>
                        
                        <div class="form-group">  
                        <label for="orgSort" class="col-md-2 control-label col-xs-4">排序<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <input disabled type="text" class="form-control" name="orgSort" id="orgSort"  value="${sysOrg.orgSort }">
                        </div>
                    </div>
                        
                    <div class="form-group">  
                        <label for="menuId" class="col-md-2 control-label col-xs-4">机构编码<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <input disabled type="text" class="form-control" name="orgCode" id="orgCode"  value="${sysOrg.orgCode }">
                        </div>
                    </div>
                    
        			<div class="form-group">  
                        <label for="remark" class="col-md-2 control-label col-xs-4">备注</label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea disabled name="remark" id="remark" class="form-control" rows="3" 
                                       maxlength="100">${sysOrg.remark }</textarea>
                        </div>
                    </div>
                <div class="col-lg-12">
                    <button id="back" class="btn btn-info btn-sm pull-right" type="button" >&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
                </div>
                </div>
            </form>
        </div>
    </div>
</div>
<form action="${root}/system/org/orgList" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>

<script>
    //返回
    $("#back").click(function () {
        $("#backForm").submit();
    });
    
</script>