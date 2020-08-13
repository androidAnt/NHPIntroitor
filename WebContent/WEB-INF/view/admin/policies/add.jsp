<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style>
.loadShow{
	display:none;
}
</style>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading"><span class="fa fa-plus" aria-hidden="true"></span><b>添加政策法规</b></div>
    <div class="panel-body">
        <div class="row loadShow">
            <form action="${root}/admin/policies/doAdd" class="form-horizontal" method="post" id="addDataForm" onsubmit="return doSubmit();">
                <input type="hidden" name="files" id="files" value="">
                <div class="col-lg-12" style="padding-left: 0px;">
                    <div class="form-group">  
                        <label class="col-md-2 control-label col-xs-4">所属菜单</label>
                        <div class="col-md-4 col-xs-8">
                        <select class="form-control" id="menuId" name="menuId">
                                <option value="0" >请选择</option>
                                <c:forEach items="${menuList}" var="menu">
                                    <option value="${menu.menuId}">${menu.menuName}</option>
                                </c:forEach>
                            </select>
                        </div>
                        
                          <label for="fileName" class="col-md-2 control-label col-xs-4">政策法规名称<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text"  class="form-control" name="policiesName" id="policiesName" required maxlength="100"  placeholder="政策法规名称">
                        </div>
                    </div>
                    <div class="form-group">
                     <label for="policiesType" class="col-md-2 control-label col-xs-4">法律分类<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <select class="form-control" id="policiesType" name="policiesType">
                                <c:forEach items="${policiesType}" var="po">
                                    <option value="${po.dicCode}" ${po.dicCode==tbPolicies.policiesType?'selected':''}>${po.dicName}</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
					<div class="form-group">
						<label class="col-md-2 control-label col-xs-4">政策法规内容<span
							style="color:red;">*</span></label>
						<div class=" col-lg-10 col-md-4 col-xs-8" >
							<textarea name="policiesContent" id="policiesContent" style="height:400px;" 
								class="form-control" ></textarea> 
<!-- 							 <p> -->
<!-- 								您当前输入了 <span class="word_count">0</span> 个文字 -->
<!-- 							</p>  -->
						</div>
					</div>
					
					 <div class="form-group">  
                        <label for="contentDetail" class="col-md-2 control-label col-xs-4">附件上传<span style="color:red;">*</span></label>
							<iframe  id="uploadFrame" name="uploadFrame" width="800px" src="${root}/admin/fileupload/toUploadFile"  scrolling="yes"  frameborder="no"></iframe>
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
<form action="${root}/admin/policies" method="post" id="backForm">
 <c:forEach items="${paramMap}" var="item">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>
<script charset="utf-8" src="${root}/components/kindeditor/kindeditor-all-min.js"></script>
<script>
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
			afterChange : function() {
				K('.word_count').html(this.count());
			},
		});
	}) ;
	
	window.onload = function(){ 
		$(".loadShow").show();
	}
	
	function doSubmit() {
		 if (editor.text() =="") {
			showMes("0", "请填写法律法规内容!");
			return false;
		}
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
</script>