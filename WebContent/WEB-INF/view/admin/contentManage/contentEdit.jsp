<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style>
.loadShow{
	display:none;
}
</style>
<div class="row panel panel-default table-responsive loadShow">
    <div class="panel-heading">
    <span class="fa fa-edit" aria-hidden="true"></span>
    <b>修改内容</b>
    </div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/admin/content/doEdit" class="form-horizontal"  method="post" id="editContentForm"  >
                <input type="hidden" name="backUrl" value="${backUrl}">
                <input type="hidden" name="files" id="files" value="">
                <input type="hidden" name="imgFiles" id="imgFiles" value="">
                <input type="hidden" name="fileUuid" id="fileUuid" value="${ghContent.fileUuid}">
                <input type="hidden" name="imgFileUuid" id="imgFileUuid" value="${ghContent.imgFileUuid}">
                <input type="hidden" name="contentId" id="contentId" value="${ghContent.contentId}">
                <div class="col-lg-12" style="padding-left: 0px;">
                     <div class="form-group">  
                    	 <label for="belongContentType" class="col-md-2 control-label col-xs-4">所属分类<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
	                        <input type="hidden" name="belongContentType" id="belongContentType" class="form-control" value="${ghContent.belongContentType}">
	                        <input type="text" class="form-control" readonly="" name="belongContentTypeName" id="belongContentTypeName" maxlength="25" placeholder="请选择我"  value="${ghContent.belongContentTypeName}" >
<!-- 	                        <button class="btn btn-xs btn-success pull-right " style="margin-top:-34px; height:33px;" type="button" data-toggle="modal" data-target="#selectContentTypeModal"><i class="ace-icon fa fa-plus-square bigger-120"></i>请选择 -->
<!-- 	                        </button> -->
                        </div>
                        <label for="articleType" class="col-md-2 control-label col-xs-4">类型<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" disabled class="form-control" name="articleType" id="articleType" maxlength="50"  placeholder="文章类型" value="${ghContent.articleType}">
                        </div>
                    </div>
                    
                    <div class="form-group">  
                     <label for="contentTitle" class="col-md-2 control-label col-xs-4">标题<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                          <input type="text" class="form-control"  name="contentTitle" id="contentTitle" maxlength="50"  placeholder="标题" value="${ghContent.contentTitle}">
                        </div>
                    
                        <label for="isRelease" class="col-md-2 control-label col-xs-4">是否发布<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="isRelease" id="isRelease" value="0" <c:if test="${ghContent.isRelease=='0'||empty ghContent.isRelease}">checked</c:if>>是</label>
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="isRelease" value="1" <c:if test="${ghContent.isRelease=='1'}">checked</c:if>>否</label>
                        </div>
                    </div>
                    <div class="form-group">  
                        <label for="summary" class="col-md-2 control-label col-xs-4">摘要<span style="color:red;">*</span></label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea style="resize:none;" name="summary" maxlength="200" placeholder="最多输入200字" id="summary" class="form-control" rows="2"
                                      >${ghContent.summary}</textarea>
                        </div>
                    </div>	 	
                    
                       <div class="form-group"> 
                       <div class="articleShow"> 
                    	 <label for="contentShow" class="col-md-2 control-label col-xs-4">文章是否发布首页<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="contentShow" id="contentShow" value="0" <c:if test="${ghContent.contentShow=='0'||empty ghContent.contentShow}">checked</c:if>>是</label>
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="contentShow" value="1" <c:if test="${ghContent.contentShow=='1'}">checked</c:if>>否</label>
                        </div>
                        </div>
                    <div class="imgShow">
                        <label for="imgShow" class="col-md-2 control-label col-xs-4">图片是否发布首页<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="imgShow" id="imgShow" value="0" <c:if test="${ghContent.imgShow=='0'||empty ghContent.imgShow}">checked</c:if>>是</label>
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="imgShow" value="1" <c:if test="${ghContent.imgShow=='1'}">checked</c:if>>否</label>
                        </div>
                        </div>
                    </div>
                    <div class="form-group imgUploadFilesShowFlag" style="display: none" >  
                       <label for="contentSource" class="col-md-2 control-label col-xs-4">图片上传<span style="color:red;">*</span></label>
                      		<iframe  id="imgUploadFilesShowFlag" name="imgUploadFilesShowFlag" width="800px" src="${root}/admin/fileupload/toUploadImgFiles"  scrolling="yes"  frameborder="no"></iframe>
                      </div>
                    <div class="form-group imgUploadShowFlag" >  
                       <label for="contentSource" class="col-md-2 control-label col-xs-4">图片上传<span style="color:red;">*</span></label>
                      <iframe  id="imgUploadFrame" name="imgUploadFrame" width="800px" src="${root}/admin/fileupload/toUploadImg"  scrolling="yes"  frameborder="no"></iframe>
                      </div>
                      
                    <c:if test="${fn:length(ghContent.imgFileList)>0}">
                     <div class="form-group" >  
                        <label for="imgFileList" class="col-md-2 control-label col-xs-4"></label>
           			 <div>
           			 <table id="editImgFileList">
                         <c:forEach items="${ghContent.imgFileList}" var="list" varStatus="status">
                         	<tr id="${list.fileId}">
                         		<td style="width: 240px">${list.name }</td>
                         		<td><a href="${root}/admin/fileupload/downloadById?fileId=${list.fileId}" >下载</a></td>
                         		<td><a onclick="deleteImgFile('${list.fileId}')" style="margin-left: 10px;cursor: pointer;">删除</a></td>
                         	</tr>
                        </c:forEach>
                        </table>
                         </div> 
           			 </div>
           			 </c:if>
                    <div class="contentInfo">
                     <div class="form-group contentSourceShowFlag" >  
                        <label for="contentSource" class="col-md-2 control-label col-xs-4">文章来源<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <select  onchange=contentSourceChange() class="form-control" id="contentSource" name="contentSource" >
                         <c:forEach items="${contentSourceList}" var="sysDic">
                                    <option value="${sysDic.dicCode}"}  ${sysDic.dicCode==ghContent.contentSource?'selected':''}>${sysDic.dicName}</option>
                                </c:forEach>
                        </select>
                        </div>
                        
                        <div class="urlShowFlag" style="display:none" >
                         <label for="urlPath" class="col-md-2 control-label col-xs-4">URL<span style="color:red;">*</span></label>
                         <div class="col-md-4 col-xs-8">
                        <input type="text" class="form-control" name="contentUrl"  id="contentUrl" maxlength="100"  placeholder="链接路径" value="${ghContent.contentUrl}">
                         </div> 
                        </div>
                    </div>
            
            		<div class="form-group uploadShow">  
                        <label for="uploadFrame" class="col-md-2 control-label col-xs-4">附件上传<span style="color:red;">*</span></label>
							<iframe  id="uploadFrame" name="uploadFrame" width="800px" src="${root}/admin/fileupload/toUploadFile"  scrolling="yes"  frameborder="no"></iframe>
           			 </div>
           			 
           			 <c:if test="${fn:length(ghContent.fileList)>0}">
           			 <div class="form-group uploadShow" >  
                        <label for="fileList" class="col-md-2 control-label col-xs-4"></label>
           			 <div class="col-md-4 col-xs-8">
           			 <table id="editFileList">
                         <c:forEach items="${ghContent.fileList}" var="list" varStatus="status">
                         	<tr id="${list.fileId}">
                         		<td style="width: 240px">${list.name }</td>
                         		<td><a href="${root}/admin/fileupload/downloadById?fileId=${list.fileId}" >下载</a></td>
                         		<td><a onclick="deleteFile('${list.fileId}')" style="margin-left: 10px;cursor: pointer;">删除</a></td>
                         	</tr>
                        </c:forEach>
                        </table>
                         </div> 
           			 </div>
           			</c:if> 
            	<div class="form-group contentShow">  
                        <label for="contentDetail" class="col-md-2 control-label col-xs-4">内容<span style="color:red;">*</span></label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea name="contentDetail"  id="contentDetail" class="form-control" rows="3"
                               >${ghContent.contentDetail}</textarea>
                        </div>
                    </div>
                    </div>
                <div class="col-lg-12">
                	<button id="submit_content" class="btn btn-success btn-sm pull-right" type="button" style="margin-left: 10px;">&nbsp;&nbsp;确&nbsp;&nbsp;定&nbsp;&nbsp;</button>
                    <button id="back" class="btn btn-info btn-sm pull-right" type="button" >&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
                </div>
                
                </div>
            </form>
        </div>
    </div>
</div>

<div id="selectContentTypeModal" class="modal fade" tabindex="-1" >
<div class="modal-dialog" style="width:800px">
<div class="modal-content">
            <div class="modal-header">
                <div class="table-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">选择所属分类</h4>
                </div>
            </div>
     <div class="modal-body table-responsive">
	<iframe id="orgContent" src="${root}/admin/content/selectContentTypeDialog" width="100%" height="90%" scrolling="no" frameborder="0" onload="this.height=500"></iframe>
	</div>
	<div class="modal-footer no-margin-top">
		<div class="full-left col-md-9" style="text-align: left;">
                    <p class="text-warning full-left col-md-2">已选择：</p>
                    <p class="text-muted full-left col-md-10" id="chooseDate" style="text-align: left;">
                </div>
                <div class="full-left col-md-3">
				<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary btn-sm" onclick="return updateForeignName();">确定</button>
            </div>
            </div>
            </div>
</div>
</div>

<form action="${root}/admin/content" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>


 <div id="confirmContent" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <c:set var="listSize" value="${fn:length(page.data)}"></c:set>
                <h4 class="modal-title">确认</h4>
            </div>
            <div class="modal-body">
                <form action="" method="post" id="delForm">
                    <input type="hidden" name="contentId" id="delContentId" value="0">
                    <c:if test="${page.totalPageNO==page.pageNO&&listSize==1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO-1}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                    <c:if test="${page.totalPageNO!=page.pageNO||listSize!=1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                </form>
                		请确认内容无误并发布（发布后不能编辑和删除）
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doConfirmContent">确定</button>
            </div>
        </div>
    </div>
</div>
<script charset="utf-8" src="${root}/components/kindeditor/kindeditor-all-min.js"></script>
<script>
//富文本
	var editor;
	KindEditor.ready(function(K) {
		editor = K.create('#contentDetail', {
			uploadJson : root + '/components/kindeditor/jsp/upload_json.jsp',
			fileManagerJson : root + '/components/kindeditor/jsp/file_manager_json.jsp',
			allowFileManager : true,
			resizeType : 0,
			width : parseInt($('#contentDetail').parents('div').css('width').replace("px", '')) - 20,
			minWidth : parseInt($('#contentDetail').parents('div').css('width').replace("px", '')) - 20,
			items : [
				'source', '|', 'undo', 'redo', '|', 'preview', 'template', 'cut', 'copy', 'paste',
				'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
				'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'clearhtml', 'quickformat', '|', '/',
				'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
				'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
				'insertfile', 'table', 'hr', 'emoticons', 'link', 'unlink', '|'
			],
			afterChange : function() {
				K('.word_count').html(this.count());
			},
		});
	}) ;

　window.onload = function(){ 
		$(".loadShow").show();
		//判断文章类型 如果是文章类不显示 图片是否发布首页 
		if($("#articleType").val()=='0'){
		//文章类
			$("#articleType").val("文章类");
			$(".imgShow").hide();
			$(".imgUploadShowFlag").hide();
			$(".imgUploadFilesShowFlag").hide();
		}else if($("#articleType").val()=='1'){
			//图文类
			$("#articleType").val("图文类");
			$(".imgUploadShowFlag").show();
			$(".imgUploadFilesShowFlag").hide();
		}else{
			$("#articleType").val("图片类");
			$(".contentInfo").hide();
			$(".articleShow").hide();
			$(".imgUploadShowFlag").hide();
			$(".imgUploadFilesShowFlag").show();
		}
		contentSourceChange();
	}
	
	$("#submit_content").click(function(){
   		//判断所属分类是否为空
  		 if($("#belongContentType").val().length<=0){
	      	showMes(0,"请选择所属分类");
	      	return false;
	     }
	     //判断标题是否为空
	     if($("#contentTitle").val().length<=0){
	      	showMes(0,"标题不能为空");
	      	return false;
	     }
	     //判断摘要是否为空
	      if($("#summary").val().length<=0){
	      	showMes(0,"摘要不能为空");
	      	return false;
	     }
	     
	     var file;
	     if($("#articleType").val()=="图片类"){
	      	files = document.getElementById("imgUploadFilesShowFlag").contentWindow.document.getElementsByTagName("a");
	     }else{
	      	files = document.getElementById("imgUploadFrame").contentWindow.document.getElementsByTagName("a");
	      }
	     
	     //判断类型
	     if($("#articleType").val()!="文章类"){
	     	//判断图片上传不能为空
	     	if(files.length<=0 && $("#editImgFileList").find("tr").length <=0 ){
		     	showMes(0,"图片不能为空");
		      	return false;
	     	}else{
	     		var arr = new Array();
	     		for(var i=0;i<files.length;i++){
					var fileId = files[i].getAttribute('value');
					arr.push(fileId);
		 			var fileIds =arr.join(",");
		 			$("#imgFiles").attr("value", fileIds);
	      		}
	     	}
	     	}
	     	/* 文章类以及图文类 */
			 if($("#articleType").val()!="图片类"){
				 var options=$("#contentSource option:selected").val();
				 if(options==0){
				 // Url
      				 if($("#contentUrl").val().length<=0){
	      				showMes(0,"链接不能为空");
				      	return false;
				     }
	      		}else if(options==1){
	      			//内容
	      			 editor.sync();
	      			 if (editor.text() =="") {
						showMes("0", "请填写内容!");
						return false;
					}
	      		}else{
	      			//附件
	      			var arr = new Array();
	      			var fjFiles = document.getElementById("uploadFrame").contentWindow.document.getElementsByTagName("a");
	      			if(fjFiles.length==0 && $("#editFileList").find("tr").length <=0){
	      				showMes("0", "附件不能为空！");
	      				return false;
	      			}else{
	      				for(var i=0;i<fjFiles.length;i++){
							var fileId = fjFiles[i].getAttribute('value');
							arr.push(fileId);
		 				} 
		 				var fileIds =arr.join(",");
		 				$("#files").attr("value", fileIds); 	
	      			}
	      		}
	     	}
	     
	     //判断是否发布  如果发布则体况提示，如果不发布则弹框
	     var isReleaseVal=$("input[name='isRelease']:checked").val();
	     if(isReleaseVal == "0"){
		     //是
		     $('#confirmContent').modal('show');
	     }else{
	     	//否
	     	$("#editContentForm").submit();
	     }
    })
    
     $(".doConfirmContent").click(function(){
    	$('#confirmContent').modal('hide');
    	$("#editContentForm").submit();
    })
	

/* 	$("#editContentForm").submit(function(){
		 if($("#articleType").val()!="文章类"){
	      	var arr = new Array();
	      	var files = document.getElementById("imgUploadFrame").contentWindow.document.getElementsByTagName("a");
      		for(var i=0;i<files.length;i++){
				var fileId = files[i].getAttribute('value');
				arr.push(fileId);
	 			var fileIds =arr.join(",");
	 			$("#imgFiles").attr("value", fileIds);
	      	}
	      }
	
      		//选择文件上传
      		var options=$("#contentSource option:selected").val();
      		 if(options == "2"){
      			var arr = new Array();
      			var files = document.getElementById("uploadFrame").contentWindow.document.getElementsByTagName("a");
      			if(files.length==0){
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
      		}
		 }); */

    //返回
    $("#back").click(function () {
        $("#backForm").submit();
    });
      
      function contentSourceChange(){
      	    var options=$("#contentSource option:selected").val();
      		if(options==0){
      			$(".urlShowFlag").show();
      			$(".contentShow").hide();
      			$(".uploadShow").hide();
      			$("#contentDetail").val("");
      		}else if(options==1){
      			$(".urlShowFlag").hide();
      			$(".contentShow").show();
      			$(".uploadShow").hide();
      			$("#contentUrl").val("");
      		}else{
      			$(".uploadShow").show();
      			$(".urlShowFlag").hide();
      			$(".contentShow").hide();
      			$("#contentUrl").val("");
      			$("#contentDetail").val("");
      		}
      }
      
     function deleteFile(fileId){
     	//异步删除
     	$.ajax({
	  	    url  : '${root}/admin/fileupload/deleteFile',
	  	    type : "post",
	  	    data : {
	  	         fileId : fileId
	  	    },
	  	    success : function(res) {
	  	       if (res.status == 1 || res.status == 'ok') {
		  	       var index = $("#" + fileId).index();
				   $("#editFileList tr:eq(" + index + ")").remove();
	  	       }
	  	     }
	  	  });
     }
     function deleteImgFile(fileId){
     	$.ajax({
	  	    url  : '${root}/admin/fileupload/deleteFile',
	  	    type : "post",
	  	    data : {
	  	         fileId : fileId
	  	    },
	  	    success : function(res) {
	  	       if (res.status == 1 || res.status == 'ok') {
		  	       var index = $("#" + fileId).index();
				   $("#editImgFileList tr:eq(" + index + ")").remove();
	  	       }
	  	     }
	  	  });
     }
      </script> 
