<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style>
.contentTypeShow{
	display:none;
}
.contentSourceShowFlag{
	display:none;
}
.imgShow{
	display:none;
}
.articleShow{
	display:none;
}
.contentShow{
	display:none;
}
.uploadShow{
	display:none;
}
.imgUploadShowFlag{
	display:none;
}
.contentInfo{
display:none;
}

</style>
<div class="row panel panel-default table-responsive ">
    <div class="panel-heading">
    <span class="fa fa-plus" aria-hidden="true"></span>
    <b>添加内容</b>
    </div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/admin/content/doAdd" class="form-horizontal"  method="post" id="addContentForm"  >
                <input type="hidden" name="backUrl" value="${backUrl}">
                <input type="hidden" name="files" id="files" value="">
                <input type="hidden" name="imgFiles" id="imgFiles" value="">
                <div class="col-lg-12" style="padding-left: 0px;">
                     <div class="form-group">  
                    	 <label for="belongContentType" class="col-md-2 control-label col-xs-4">所属分类<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
	                        <input type="hidden" name="belongContentType" id="belongContentType" class="form-control" value="">
	                        <input type="text" class="form-control" readonly="" name="belongContentTypeName" id="belongContentTypeName" maxlength="25" placeholder="请选择我" value="" >
	                        <button class="btn btn-xs btn-success pull-right " style="margin-top:-34px; height:33px;" type="button" data-toggle="modal" data-target="#selectContentTypeModal"><i class="ace-icon fa fa-plus-square bigger-120"></i>请选择
	                        </button>
                        </div>
                        <div class="contentTypeShow" >
                        <label for="articleType" class="col-md-2 control-label col-xs-4">类型<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" disabled class="form-control" name="articleType" id="articleType">
                        </div>
                        </div>
                    </div>
                    
                    <div class="form-group">  
                     <label for="contentTitle" class="col-md-2 control-label col-xs-4">标题<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                          <input type="text" class="form-control" name="contentTitle" id="contentTitle" maxlength="100"  placeholder="标题" value="${ghContente.contentTitle}">
                        </div>
                    
                        <label for="isRelease" class="col-md-2 control-label col-xs-4">是否发布<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="isRelease" id="isRelease" value="0" <c:if test="${ghContente.isRelease=='0'||empty ghContente.isRelease}"></c:if>>是</label>
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="isRelease" checked value="1" <c:if test="${ghContente.isRelease=='1'}">checked</c:if>>否</label>
                        </div>
                    </div>
                    
                    <div class="form-group">  
                        <label for="summary" class="col-md-2 control-label col-xs-4">摘要<span style="color:red;">*</span></label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea  style="resize:none;"  name="summary" maxlength="200" placeholder="最多输入200字" id="summary" class="form-control" rows="2"
                                      ></textarea>
                        </div>
                    </div>	 
                    
                       <div class="form-group"> 
                       <div class="articleShow"> 
                    	 <label for="contentShow" class="col-md-2 control-label col-xs-4">文章是否发布首页<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="contentShow" id="contentShow" value="0" <c:if test="${ghContente.contentShow=='0'||empty ghContente.contentShow}">checked</c:if>>是</label>
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="contentShow" value="1" <c:if test="${ghContente.contentShow=='1'}">checked</c:if>>否</label>
                        </div>
                        </div>
                    <div class="imgShow">
                        <label for="imgShow" class="col-md-2 control-label col-xs-4">图片是否发布首页<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="imgShow" id="imgShow" value="0" <c:if test="${ghContente.imgShow=='0'||empty ghContente.imgShow}">checked</c:if>>是</label>
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="imgShow" value="1" <c:if test="${ghContente.imgShow=='1'}">checked</c:if>>否</label>
                        </div>
                        </div>
                    </div>
                    
                     <div class="form-group imgUploadFilesShowFlag" style="display: none" >  
                       <label for="contentSource" class="col-md-2 control-label col-xs-4">图片上传<span style="color:red;">*</span></label>
                      		<iframe  id="imgUploadFilesShowFlag" name="imgUploadFilesShowFlag" width="800px" src="${root}/admin/fileupload/toUploadImgFiles"  scrolling="yes"  frameborder="no"></iframe>
                      </div>
                    
                      <div class="form-group imgUploadShowFlag" >  
                       <label for="contentSource" class="col-md-2 control-label col-xs-4">图片上传<span style="color:red;">*</span></label>
                      		<iframe id="imgUploadFrame" name="imgUploadFrame" width="800px" src="${root}/admin/fileupload/toUploadImg"  scrolling="yes"  frameborder="no"></iframe>
                      </div>
                      
                      <div class="contentInfo">
                     <div class="form-group contentSourceShowFlag" >  
                        <label for="contentSource" class="col-md-2 control-label col-xs-4">文章来源<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <select  onchange=contentSourceChange() class="form-control" id="contentSource" name="contentSource" >
                         <c:forEach items="${contentSourceList}" var="sysDic">
                                    <option value="${sysDic.dicCode}"}>${sysDic.dicName}</option>
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
           			 
            	<div class="form-group contentShow">  
                        <label for="contentDetail" class="col-md-2 control-label col-xs-4">内容<span style="color:red;">*</span></label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea name="contentDetail"  id="contentDetail" class="form-control" rows="8"
                                      ></textarea>
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
<div class="modal-dialog" style="width:60%">
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
		});
	}) ;


    //返回
    $("#back").click(function () {
        $("#backForm").submit();
    });
    
   
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
	     	if(files.length<=0){
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
	      			/* debugger; */
	      			var arr = new Array();
	      			var fjFiles = document.getElementById("uploadFrame").contentWindow.document.getElementsByTagName("a");
	      			if(fjFiles.length==0){
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
	     	$("#addContentForm").submit();
	     }
    })
    
     $(".doConfirmContent").click(function(){
    	$('#confirmContent').modal('hide');
    	$("#addContentForm").submit();
    })
    
	function setMakeCompanyName(id,name){
     if(!$('#'+id).html()){
        $('#chooseDate').html('<span class="chooseSpan" style="margin: 0 5px;" id="'+id+'">'+name+'</span>');
          }
      } 
  // 生产厂家名称确定
      function updateForeignName(){
        if($('#chooseDate').html()==''){
            showMes(0,"请"+$('#selectContentTypeModal').find('.modal-title').html());
            return false;
        }
        var names="";
        var ids="";
        $('.chooseSpan').each(function(){
            names+=$(this).html()+",";
            ids+=$(this).attr('id')+",";
        });
        names=names.substring(0,names.length-1);
        ids=ids.substring(0,ids.length-1);
        $('#belongContentTypeName').val(names);
        $('#belongContentType').val(ids);
        $('#belongContentTypeName').attr('title',names);
        $('#selectContentTypeModal').modal('hide');
        
        
        //异步查询所选的的内容分类详情
        $.ajax({
	  	    url  : '${root}/admin/contentType/findMenuById',
	  	    type : "post",
	  	    data : {
	  	         contentTypePid : ids
	  	    },
	  	    success : function(res) {
	  	       if (res.status == 1) {
		  	       	$(".contentTypeShow").show();
		  	       	$(".contentSourceShowFlag").show();
		  	       	contentSourceChange();
		  	       	if(res.articleType ==0 ){
		  	       		$(".articleShow").show();
		  	       		$("#articleType").val("文章类");
		  	       		$(".imgUploadShowFlag").hide();
		  	       		$(".imgUploadFilesShowFlag").hide();
		  	       		//文章类不显示图片是否发布首页
		  	       		$(".imgShow").hide();
		  	       		$(".contentInfo").show();
		  	       	}else if(res.articleType ==1){
		  	       		$(".imgShow").show();
		  	       		$(".articleShow").show();
		  	       		$(".imgUploadShowFlag").show();
		  	       		$("#articleType").val("图文类");
		  	       		$(".contentInfo").show();
		  	       		$(".imgUploadFilesShowFlag").hide();
		  	       	}else{
		  	       		$(".imgShow").show();
		  	       		$(".imgUploadShowFlag").hide();
		  	       		$(".articleShow").hide();
		  	       		$("#articleType").val("图片类");
		  	       		$(".contentSourceShowFlag").hide();
		  	       		$(".contentShow").hide();
		  	       		$(".contentInfo").hide();
		  	       		$(".imgUploadFilesShowFlag").show();
		  	       	}
	  	       }
	  	     }
	  	  });
    }
    
    //删除选中的生产厂家
      function removeMakeCompanyName(id,name){
          $('#chooseDate').find('#'+id).remove();
          $("#tr_"+id).remove();
      }
      
      function contentSourceChange(){
      	    var options=$("#contentSource option:selected").val();
      		if(options==0){
      			$(".urlShowFlag").show();
      			$(".contentShow").hide();
      			$(".uploadShow").hide();
      		}else if(options==1){
      			$(".urlShowFlag").hide();
      			$(".contentShow").show();
      			$(".uploadShow").hide();
      		}else{
      			$(".uploadShow").show();
      			$(".urlShowFlag").hide();
      			$(".contentShow").hide();
      		}
      }
        
</script>