<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="adminCode" value="<%=SystemConstant.SYS_SUPER_ADMINCODE%>"/>
<link rel="stylesheet" href="${root}/components/dateRange/dateRange.css"/>
<script type="text/javascript" src="${root}/components/dateRange/dateRange.js"></script>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
	   	 <span class="fa fa-edit" aria-hidden="true"></span>
    	<b>审核主席信箱</b>
    	</div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/admin/mailbox/doEdit" class="form-horizontal" method="post" id="addDataForm" >
                <div class="col-lg-12" style="padding-left: 0px;">
                  <input type="hidden" name="mailboxId" id="mailboxId" value="${tbMailbox.mailboxId}">
                  <input type="hidden" name="auditorType" id="auditorType" >
					<div class="form-group">
					 <label for="fileName" class="col-md-2 control-label col-xs-4">标题<span style="color:red;">*</span></label>
						<div class="col-lg-4 col-md-4 col-xs-8">
							<input type="text" class="form-control" name="title" id="title"
								disabled value="${tbMailbox.title}">
						</div>
						<label for="fileName" class="col-md-2 control-label col-xs-4">发布人<span style="color:red;">*</span></label>
						<div class="col-lg-4 col-md-4 col-xs-8">
							<input type="text" class="form-control" name="creatUser" id="creatUser"
								disabled value="${tbMailbox.creatUser}">
						</div>
					</div>
					<div class="form-group">
						<label for="content" class="col-md-2 control-label col-xs-4">发布内容<span
							style="color:red;">*</span></label>
						<div class=" col-lg-10 col-md-4 col-xs-8">
							<textarea name="content" id="content" class="form-control"
								rows="3" required disabled placeholder="" maxlength="100">${tbMailbox.content}</textarea>
						</div>
					</div>
					<div class="form-group">
						<label for="mailbox" class="col-md-2 control-label col-xs-4">审核<span
							style="color:red;">*</span></label>
							<div class=" col-lg-4 col-md-4 col-xs-8" style="top: 6px">
								<input type="radio" name="mailbox" value="1" id="type1" checked onclick="show()">通过&nbsp;&nbsp;
                                <input type="radio" name="mailbox" value="2" id="type2" onclick="hidd()">不通过
							</div>
						</div>
						<div class="form-group" id="dis">
						<label for="auditorContent" class="col-md-2 control-label col-xs-4">原因<span
							style="color:red;"></span></label>
						<div class=" col-lg-10 col-md-4 col-xs-8">
							<textarea name="auditorContent" id="auditorContent" class="form-control"
								rows="3"  placeholder="请输入不通过原因，最多100字" maxlength="100">${tbMailbox.auditorContent}</textarea>
						</div>
					</div>
					
					<div class="col-lg-12">
							<button id="submit" class="btn btn-success btn-sm pull-right"
								type="submit" style="margin-left: 10px;">&nbsp;&nbsp;确&nbsp;&nbsp;定&nbsp;&nbsp;</button>
						<button id="back" class="btn btn-info btn-sm pull-right"
							type="button">&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
					</div>
					<input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
            </div>
            </form>
        </div>
    </div>
</div>
<form action="${root}/admin/mailbox/mailboxAudit" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>
<script>
 $(document).ready(function (){
        if(${tbMailbox.auditorType}==0){
        $("#dis").css("display","none")
		$("#auditorType").val(1)
        }else if(${tbMailbox.auditorType}==1){
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