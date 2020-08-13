<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading"><span class="fa fa-plus" aria-hidden="true"></span><b>添加组织机构</b></div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/system/org/add" class="form-horizontal" method="post" id="addOrgForm" >
                <input type="hidden" name="backUrl" value="${backUrl}">
                <input type="hidden" name="pId" id="pId" value="${pOrg.pId }">
                <div class="col-lg-9" style="padding-left: 0px;">
                     <div class="form-group">  
                     	<label for="orgName" class="col-md-2 control-label col-xs-4">上级机构<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" disabled class="form-control"   placeholder="机构名称" value="${pOrg.orgName }" >
                        </div>
                    </div>
                    
                    
                    <div class="form-group">  
                    <label for="orgName" class="col-md-2 control-label col-xs-4">机构名称<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="orgName" id="orgName" maxlength="50" required placeholder="机构名称" >
                        </div>
                    </div>
                    
                    <div class="form-group">  
                    <label for="orgSort" class="col-md-2 control-label col-xs-4">排序<span style="color:red;">*</span></label>
                       <div class="col-md-4 col-xs-8">
                            <input required type="number" min="0" class="form-control" name="orgSort" id="orgSort"   maxlength="3"  step="1" placeholder="排序">
                        </div>
                    </div>
                    
                    <div class="form-group">  
                        <label for="menuId" class="col-md-2 control-label col-xs-4">机构编码<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <input type="text" class="form-control" name="orgCode" id="orgCode" maxlength="50" required placeholder="机构编码" >
                        </div>
                    </div>
                    
        			<div class="form-group">  
                        <label for="remark" class="col-md-2 control-label col-xs-4">备注</label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea name="remark" id="remark" class="form-control" rows="3"
                                      placeholder="备注,最多添加100个字" maxlength="100"></textarea>
                        </div>
                    </div>
                <div class="col-lg-12">
                    <button id="submit" class="btn btn-success btn-sm pull-right" type="submit" style="margin-left: 10px;">&nbsp;&nbsp;确&nbsp;&nbsp;定&nbsp;&nbsp;</button>
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