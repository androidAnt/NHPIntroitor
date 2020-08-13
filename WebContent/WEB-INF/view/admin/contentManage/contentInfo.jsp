<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style>

</style>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
    <span class="fa fa-file-text-o" aria-hidden="true"></span>
    <b>内容详情</b>
    </div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/admin/content/doAdd" class="form-horizontal"  method="post" id="addContentForm"  >
                <input type="hidden" name="backUrl" value="${backUrl}">
                <input type="hidden" name="files" id="files" value="">
                <div class="col-lg-12" style="padding-left: 0px;">
                     <div class="form-group">  
                    	 <label for="belongContentType" class="col-md-2 control-label col-xs-4">所属分类<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
	                        <input type="text" class="form-control" disabled  id="belongContentTypeName"  value="${ghContent.belongContentTypeName }" >
                        </div>
                        <label for="articleType" class="col-md-2 control-label col-xs-4">类型<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                         <select disabled class="form-control" id="articleType" name="articleType" >
	                        <c:forEach items="${articleTypeList}" var="sysDic">
	                                    <option value="${sysDic.dicCode}"} ${sysDic.dicCode==ghContent.articleType?'selected':''}  >${sysDic.dicName}</option>
	                                </c:forEach>
	                        </select>
                        </div>
                    </div>
                    
                    <div class="form-group">  
                     <label for="contentTitle" class="col-md-2 control-label col-xs-4">标题<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                          <input type="text" class="form-control" disabled value="${ghContent.contentTitle }">
                        </div>
                    
                        <label for="isRelease" class="col-md-2 control-label col-xs-4">是否发布<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        	<c:if test="${ghContent.isRelease==1}">
                        		 <input type="text" disabled class="form-control"  value="否">
                        	</c:if>
                        	<c:if test="${ghContent.isRelease==0}">
                        		 <input type="text" disabled class="form-control"  value="是">
                        	</c:if>
                        </div>
                    </div>
                    <div class="form-group">  
                        <label for="summary" class="col-md-2 control-label col-xs-4">摘要</label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea style="resize:none;" name="summary" disabled id="summary" class="form-control" rows="2"
                                      >${ghContent.summary}</textarea>
                        </div>
                    </div>	 
                    
                       <div class="form-group"> 
                       <div class="articleShow"> 
                    	 <label for="contentShow" class="col-md-2 control-label col-xs-4">文章是否发布首页<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        	<c:if test="${ghContent.contentShow==1}">
                        		 <input type="text" disabled class="form-control"  value="否">
                        	</c:if>
                        	<c:if test="${ghContent.contentShow==0}">
                        		 <input type="text" disabled class="form-control"  value="是">
                        	</c:if>
                        </div>
                        </div>
                    <div class="imgShow">
                        <label for="imgShow" class="col-md-2 control-label col-xs-4">图片是否发布首页<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        	<c:if test="${ghContent.imgShow==1}">
                        		 <input type="text" disabled class="form-control"  value="否">
                        	</c:if>
                        	<c:if test="${ghContent.imgShow==0}">
                        		 <input type="text" disabled class="form-control"  value="是">
                        	</c:if>
                        </div>
                        </div>
                    </div>
                    <c:if test="${fn:length(ghContent.imgFileList)>0}">
                    <div class="form-group imgListShow">  
                    	 <label for="belongContentType" class="col-md-2 control-label col-xs-4">图片列表<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <c:forEach items="${ghContent.imgFileList}" var="list" varStatus="status">
                         	<p>${list.name }<a href="${root}/admin/fileupload/downloadById?fileId=${list.fileId}" style="float:right">下载</a></p>
                        </c:forEach>
                        </div>
                    </div>
                    </c:if>
                    <div class="contentInfo">
                     <div class="form-group contentSourceShowFlag" >  
                        <label for="contentSource" class="col-md-2 control-label col-xs-4">文章来源<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <select disabled class="form-control" id="contentSource" name="contentSource" required>
                         <c:forEach items="${contentSourceList}" var="sysDic">
                                    <option value="${sysDic.dicCode}" ${sysDic.dicCode==ghContent.contentSource?'selected':''}>${sysDic.dicName}</option>
                                </c:forEach>
                        </select>
                        </div>
                        
                        <div class="urlShowFlag" style="display:none" >
                         <label for="urlPath" class="col-md-2 control-label col-xs-4">URL<span style="color:red;">*</span></label>
                         <div class="col-md-4 col-xs-8">
                        <input disabled type="text" class="form-control" name="contentUrl"  id="contentUrl"  value="${ghContent.contentUrl}">
                         </div> 
                        </div>
                    </div>
            		<c:if test="${fn:length(ghContent.fileList)>0}">
            		<div class="form-group uploadShow" >  
                        <label for="contentDetail" class="col-md-2 control-label col-xs-4">附件列表<span style="color:red;">*</span></label>
           			 <div class="col-md-4 col-xs-8">
                         <c:forEach items="${ghContent.fileList}" var="list" varStatus="status">
                         	<p>${list.name }<a href="${root}/admin/fileupload/downloadById?fileId=${list.fileId}" style="float:right">下载</a></p>
                        </c:forEach>
                         </div> 
           			 </div>
           			</c:if> 
           			
            			<div class="form-group contentShow">  
                        <label for="contentDetail" class="col-md-2 control-label col-xs-4">内容<span style="color:red;">*</span></label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea name="contentDetail"  id="contentDetail" class="form-control" 
                                  disabled>${ghContent.contentDetail}</textarea>
                        </div>
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
<form action="${root}/admin/content" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>
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
			afterChange : function() {
				K('.word_count').html(this.count());
			}
		});
		    editor.readonly(true); 
	}) ;

	$(document).ready(function (){
		//判断文章类型 如果是文章类不显示 图片是否发布首页 
		if($("#articleType").val()=='0'){
		//文章类
			$(".imgShow").hide();
			$(".imgListShow").hide();
		}else if($("#articleType").val()=='1'){
			//图文类
			$(".imgListShow").show();
		}else if($("#articleType").val()=='2'){
			//图片类
			$(".contentInfo").hide();
			$(".articleShow").hide();
			$(".imgListShow").show();
		}
		
		var options=$("#contentSource option:selected").val();
		if(options=="0"){
			//0是url  1是自行编辑   2是附件上传
			$(".urlShowFlag").show();
			$(".contentShow").hide();
			$(".uploadShow").hide();
		}else if(options=="1"){
			//0是url  1是自行编辑   2是附件上传
			$(".urlShowFlag").hide();
			$(".contentShow").show();
			$(".uploadShow").hide();
		}else{
			$(".urlShowFlag").hide();
			$(".contentShow").hide();
			$(".uploadShow").show();
		}
	})

    //返回
    $("#back").click(function () {
        $("#backForm").submit();
    });
</script>