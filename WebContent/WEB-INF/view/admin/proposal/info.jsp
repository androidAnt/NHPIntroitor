<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="adminCode" value="<%=SystemConstant.SYS_SUPER_ADMINCODE%>"/>
<link rel="stylesheet" href="${root}/components/dateRange/dateRange.css"/>
<script type="text/javascript" src="${root}/components/dateRange/dateRange.js"></script>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading"><span class="fa fa-file-text-o" aria-hidden="true"></span><b>合理化建议详情</b></div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/admin/proposal/doEdit" class="form-horizontal" method="post" id="addDataForm" >
                <div class="col-lg-12" style="padding-left: 0px;">
                  <input type="hidden" name="proposalId" id="proposalId" value="${tbProposal.proposalId}">
                  <input type="hidden" name="auditorType" id="auditorType" >
					<div class="form-group">
					 <label for="fileName" class="col-md-2 control-label col-xs-4">标题<span style="color:red;">*</span></label>
						<div class="col-lg-4 col-md-4 col-xs-8">
							<input type="text" class="form-control" name="title" id="title"
								disabled value="${tbProposal.title}">
						</div>
						
						<label for="creatUser" class="col-md-2 control-label col-xs-4">发布人<span style="color:red;">*</span></label>
						<div class="col-lg-4 col-md-4 col-xs-8">
							<input type="text" class="form-control" name="creatUser" id="creatUser"
								disabled value="${tbProposal.creatUser}">
						</div>
						
					</div>
					<div class="form-group">
						<label for="content" class="col-md-2 control-label col-xs-4">发布内容<span
							style="color:red;">*</span></label>
						<div class=" col-lg-10 col-md-4 col-xs-8">
							<textarea name="content" id="content" class="form-control"
								rows="3"  disabled >${tbProposal.content}</textarea>
						</div>
					</div>
					
					<c:if test="${tbProposal.auditorType !=0}">
						<div class="form-group">
						<label for="proposal" class="col-md-2 control-label col-xs-4">审核状态<span
							style="color:red;">*</span></label>
							<div class=" col-lg-4 col-md-4 col-xs-8" style="top: 6px">
								<c:if test="${tbProposal.auditorType ==1}">
								<input type="text" class="form-control" disabled value="通过">
								</c:if>
								<c:if test="${tbProposal.auditorType ==2}">
								<input type="text" class="form-control" disabled value="不通过">
								</c:if>
							</div>
							
							<label for="auditorDate" class="col-md-2 control-label col-xs-4">审核时间<span
							style="color:red;">*</span></label>
							<div class=" col-lg-4 col-md-4 col-xs-8" >
								<input type="text" class="form-control" disabled value="${tbProposal.auditorDate}">
							</div>
						</div>
						<div class="form-group" id="dis">
						<label for="replierContent" class="col-md-2 control-label col-xs-4">原因<span
							style="color:red;"></span></label>
						<div class=" col-lg-10 col-md-4 col-xs-8">
							<textarea disabled name="auditorContent" id="auditorContent" class="form-control"
								rows="3" >${tbProposal.auditorContent}</textarea>
						</div>
					</div>
					</c:if>
					
					<c:if test="${tbProposal.replierType ==1}">
					<div class="form-group">
						<label for="replierUser" class="col-md-2 control-label col-xs-4">回复人<span
							style="color:red;">*</span></label>
								<div class="col-lg-4 col-md-4 col-xs-8">
							<input type="text" class="form-control" name="replierUser" id="replierUser"
								disabled value="${tbProposal.replierUser}">
						</div>
						
						<label for="replierDate" class="col-md-2 control-label col-xs-4">回复时间<span
							style="color:red;">*</span></label>
								<div class="col-lg-4 col-md-4 col-xs-8">
							<input type="text" class="form-control" name="replierDate" id="replierDate"
								disabled value="${tbProposal.replierDate}">
						</div>
					</div>
						
						<div class="form-group" >
						<label for="replierContent" class="col-md-2 control-label col-xs-4">回复内容<span
							style="color:red;"></span></label>
						<div class=" col-lg-10 col-md-4 col-xs-8">
							<textarea disabled name="replierContent" id="replierContent" class="form-control"
								rows="3" >${tbProposal.replierContent}</textarea>
						</div>
					</div>
					</c:if>
					
					<div class="col-lg-12">
						<button id="back" class="btn btn-info btn-sm pull-right"
							type="button">&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
					</div>
					<input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
            </form>
        </div>
    </div>
</div>
<form action="${root}/admin/proposal" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>
<script>
 $(document).ready(function (){
        if(${tbProposal.auditorType}==0){
        $("#dis").css("display","none")
		$("#auditorType").val(1)
        }else if(${tbProposal.auditorType}==1){
        $("#dis").css("display","none")
        }else{
         $("#dis").css("display","block");
         $("#type1").removeAttr("checked");
         $("#type2").attr({
                checked:"checked"
            });
        }
	}); 
	function show(){
	$("#dis").css("display","none")
	$("#auditorType").val(1)
	}
	function hidd(){
	  $("#dis").css("display","block");
	  $("#auditorType").val(2)
	}
    //返回
    $("#back").click(function () {
        $("#backForm").submit();
    });
   
</script>