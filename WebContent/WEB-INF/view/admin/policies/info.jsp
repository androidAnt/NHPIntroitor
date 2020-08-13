<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="adminCode" value="<%=SystemConstant.SYS_SUPER_ADMINCODE%>"/>
<link rel="stylesheet" href="${root}/components/dateRange/dateRange.css"/>
<script type="text/javascript" src="${root}/components/dateRange/dateRange.js"></script>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
     <c:if test="${!disabled}">
   	 <span class="fa fa-file-text-o" aria-hidden="true"></span>
    </c:if>
    <c:if test="${disabled}">
   	 <span class="fa fa-edit" aria-hidden="true"></span>
    </c:if>
    <b>${title}</b></div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/admin/policies/doEdit" class="form-horizontal" method="post" id="addDataForm" onsubmit="return doSubmit();">
                <input type="hidden" name="files" id="files" value="">
                <input type="hidden" name="fileUuid" id="fileUuid" value="${tbPolicies.fileUuid}">
                <div class="col-lg-12" style="padding-left: 0px;">
                  <input type="hidden" name="policiesId" id="policiesId" value="${tbPolicies.policiesId}">
                    <div class="form-group">  
                        <label class="col-md-2 control-label col-xs-4">所属菜单</label>
                        <div class="col-md-4 col-xs-8">
                        <select class="form-control" id="menuId" disabled name="menuId">
                                <option value="0" >请选择</option>
                                <c:forEach items="${menuList}" var="menu">
                                    <option value="${menu.menuId}" ${menu.menuId==tbPolicies.menuId?'selected':''}>${menu.menuName}</option>
                                </c:forEach>
                            </select>
                        </div>
                        
                          <label for="fileName" class="col-md-2 control-label col-xs-4">资料名称<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text"  class="form-control" name="policiesName" id="policiesName" disabled required maxlength="100"  placeholder="资料名称" value="${tbPolicies.policiesName}">
                        </div>
                    </div>
                    
                    <div class="form-group">
                     <label for="policiesType" class="col-md-2 control-label col-xs-4">法律分类<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <select class="form-control" id="policiesType" disabled name="policiesType">
                                <c:forEach items="${policiesType}" var="po">
                                    <option value="${po.dicCode}" ${po.dicCode==tbPolicies.policiesType?'selected':''}>${po.dicName}</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                    
                     <div class="form-group">  
                        <label for="policiesContent" class="col-md-2 control-label col-xs-4">资料内容<span style="color:red;">*</span></label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea name="policiesContent" id="policiesContent" class="form-control" style="height:400px;" 
                                      placeholder="">${tbPolicies.policiesContent}</textarea>
<!-- 							<p> -->
<!-- 								您当前输入了 <span class="word_count">0</span> 个文字 -->
<!-- 							</p> -->
						</div>
                    </div>
                    <c:if test="${disabled}">
                     <div class="form-group">  
                        <label class="col-md-2 control-label col-xs-4">附件上传<span style="color:red;">*</span></label>
							<iframe  id="uploadFrame" name="uploadFrame" width="800px" src="${root}/admin/fileupload/toUploadFile"  scrolling="no"  frameborder="no"></iframe>
           			 </div>
           			 </c:if>
           			 <c:if test="${fn:length(tbPolicies.fileList)>0}">
                    <div class="form-group" >  
                        <label  class="col-md-2 control-label col-xs-4">附件列表<span style="color:red;">*</span></label>
           			 	<div class="col-md-4 col-xs-8">
                         <table id="editFileList">
                         <c:forEach items="${tbPolicies.fileList}" var="list" varStatus="status">
                         	<tr id="${list.fileId}">
                         		<td style="width: 240px">${list.name }</td>
                         		<td><a href="${root}/admin/fileupload/downloadById?fileId=${list.fileId}" >下载</a></td>
                         		<c:if test="${disabled}">
                         			<td><a onclick="deleteFile('${list.fileId}')" style="margin-left: 10px;cursor: pointer;">删除</a></td>
                         	</c:if>
                         	</tr>
                        </c:forEach>
                        </table>
                         </div> 
           			 </div>
                    </c:if>
                    
                <div class="col-lg-12">
                <c:if test="${disabled}">
                 <button id="submit" class="btn btn-success btn-sm pull-right" type="submit" style="margin-left: 10px;">&nbsp;&nbsp;确&nbsp;&nbsp;定&nbsp;&nbsp;</button>
                </c:if>
                    <button id="back" class="btn btn-info btn-sm pull-right" type="button" >&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
                </div>
                <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
              </div>
            </form>
        </div>
    </div>
</div>
<form action="${root}/admin/policies" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>
<script charset="utf-8" src="${root}/components/kindeditor/kindeditor-all-min.js"></script>
<script>

 $(document).ready(function (){
		if(${disabled}){
		$("#menuId").removeAttr("disabled");
		$("#policiesName").removeAttr("disabled");
		$("#policiesType").removeAttr("disabled");
		}
	});
    //返回
    $("#back").click(function () {
        $("#backForm").submit();
    });
   //富文本
	var editor;
	KindEditor.ready(function(K) {
		editor = K.create('#policiesContent', {
			uploadJson : root + '/components/kindeditor/jsp/upload_json.jsp',
			fileManagerJson : root + '/components/kindeditor/jsp/file_manager_json.jsp',
			allowFileManager : true,
			resizeType : 0,
			width : parseInt($('#policiesContent').parents('div').css('width').replace("px", '')) - 20,
			minWidth : parseInt($('#policiesContent').parents('div').css('width').replace("px", '')) - 20,
			items : [
				'source', '|', 'undo', 'redo', '|', 'preview', 'template', 'cut', 'copy', 'paste',
				'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
				'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'clearhtml', 'quickformat', '|', '/',
				'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
				'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
				'insertfile', 'table', 'hr', 'emoticons', 'link', 'unlink', '|'
			],
// 			afterChange : function() {
// 				K('.word_count').html(this.count());
// 			}
		});
		if(!${disabled}){
		    //是否禁用
		    editor.readonly(true); 
		}
	}) ;
	
	function doSubmit() {
		 if (editor.text() =="") {
			showMes("0", "请填写法律法规内容!");
			return false;
		}
		var arr = new Array();
		var files = document.getElementById("uploadFrame").contentWindow.document.getElementsByTagName("a");
      	var oldFile = document.getElementById("editFileList").rows;
      	if(files.length==0 && oldFile.length==0 ){
      		showMes("0", "附件不能为空！");
      		return false;
      	}else{
      		for(var i=0;i<files.length;i++){
				var fileId = files[i].getAttribute('value');
				arr.push(fileId);
	 		} 
	 	var fileIds =arr.join(",");
	 	$("#files").attr("value", fileIds); 	
      }
	};
	  function deleteFile(fileId){
     	$.ajax({
	  	    url  : '${root}/admin/fileupload/deleteFile',
	  	    type : "post",
	  	    data : {
	  	         fileId : fileId
	  	    },
	  	    success : function(res) {
	  	       if (res.status == 1 || res.status== 'ok') {
		  	       var index = $("#" + fileId).index();
				   $("#editFileList tr:eq(" + index + ")").remove();
	  	       }
	  	     }
	  	  });
     }
</script>