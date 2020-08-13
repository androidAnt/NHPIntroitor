<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style>
.loadShow{
	display:none;
}
</style>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading"><span class="fa fa-plus" aria-hidden="true"></span><b>添加内容分类</b></div>
    <div class="panel-body">
        <div class="row loadShow">
            <form action="${root}/admin/contentType/doAdd" class="form-horizontal" method="post" id="addContentTypeForm"   onsubmit="return doSubmit();">
                <input type="hidden" name="backUrl" value="${backUrl}">
                <input type="hidden" name="menuIdBack" id="menuIdBack" value="${menu.menuId}">
                
                <input type="hidden" name="logoImg" id="logoImg" value="">
                <input type="hidden" name="logoImg1" id="logoImg1" value="">
                <input type="hidden" name="backgroundImg" id="backgroundImg" value="">
                
                <div class="col-lg-12" style="padding-left: 0px;">
                     <div class="form-group">  
                      <label for="menuId" class="col-md-2 control-label col-xs-4">所属菜单<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <select class="form-control" id="menuId" name="menuId">
                                <c:forEach items="${menuList}" var="menu">
                                    <option value="${menu.menuId}"}>${menu.menuName}</option>
                                </c:forEach>
                            </select>
                        </div>
                        
                     <label for="contentTypePid" class="col-md-2 control-label col-xs-4">上级分类</label>
                        <div class="col-md-4 col-xs-8">
                        <select class="form-control" id="contentTypePid" name="contentTypePid">
                        		<option value=""}>请选择</option>
                                <c:forEach items="${pList}" var="content">
                                    <option value="${content.contentTypeId}"}>${content.contentTypeName}</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">  
                        <label for="contentTypeName" class="col-md-2 control-label col-xs-4">分类名称<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="contentTypeName" id="contentTypeName" maxlength="50" required placeholder="分类名称" value="${ghContentType.contentTypeName}">
                        </div>
                        
                          <label for="contentTypeSort" class="col-md-2 control-label col-xs-4">分类排序<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" min="0" class="form-control" name="contentTypeSort" id="contentTypeSort"  required  maxlength="3"  step="1" placeholder="分类排序" value="${ghContentType.contentTypeSort}">
                        </div>
                    </div>
                    
                    <div class="form-group">  
                        <label for="showFlagWechart" class="col-md-2 control-label col-xs-4">是否同步到公众号<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="showFlagWechart" id="showFlagWechart" value="0">是</label>
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input type="radio" name="showFlagWechart" checked value="1" checked>否</label>
                        </div>
                         <div class="belongWechartBanShowFlag" style="display: none;">
                          <label for="belongWechartBan" class="col-md-2 control-label col-xs-4">所属微信导航<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                         <select  class="form-control" id="belongWechartBan" name="belongWechartBan" required>
                         <c:forEach items="${weChartBan}" var="sysDic">
                                    <option value="${sysDic.dicCode}"}>${sysDic.dicName}</option>
                                </c:forEach>
                        </select>
                        </div></div>
                    </div>
                    
                     <div class="form-group contentTypeShowFlag">  
                        <label for="contentType" class="col-md-2 control-label col-xs-4">内容分类<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <select  class="form-control" id="contentType" name="contentType" required>
                         <c:forEach items="${contentTypeList}" var="sysDic">
                                    <option value="${sysDic.dicCode}"}>${sysDic.dicName}</option>
                                </c:forEach>
                        </select>
                        </div>
                        <div class="articleShowFlag" >
                         <label for="articleType" class="col-md-2 control-label col-xs-4">文章分类<span style="color:red;">*</span></label>
                         <div class="col-md-4 col-xs-8">
                        <select  class="form-control" id="articleType" name="articleType" >
                        <c:forEach items="${articleTypeList}" var="sysDic">
                                    <option value="${sysDic.dicCode}"}>${sysDic.dicName}</option>
                                </c:forEach>
                        </select>
                         </div> 
                        </div>
                        <div class="urlShowFlag" style="display:none" >
                         <label for="urlPath" class="col-md-2 control-label col-xs-4">URL<span style="color:red;">*</span></label>
                         <div class="col-md-4 col-xs-8">
                        <input type="text" class="form-control" name="urlPath" id="urlPath" maxlength="50"  placeholder="链接路径" value="${ghContentType.urlPath}">
                         </div> 
                        </div>
                    </div>
                    
                    <!-- logo1 -->
                     <div class="form-group" >  
                       <label for="logoImg" class="col-md-2 control-label col-xs-4">Logo<span style="color:red;">*</span></label>
                      		<iframe  id="imgLogoUploadFrame" name="imgUploadFrame" width="800px" src="${root}/admin/fileupload/toUploadImg"  scrolling="yes"  frameborder="no"></iframe>
                      </div>
                    
                    <!-- logo2 -->
                     <%-- <div class="form-group" >  
                       <label for="logoImg2" class="col-md-2 control-label col-xs-4">Logo2<span style="color:red;">*</span></label>
                      		<iframe  id="imgLogo1UploadFrame" name="imgUploadFrame" width="800px" src="${root}/admin/fileupload/toUploadImg"  scrolling="yes"  frameborder="no"></iframe>
                      </div> --%>
                    
                    <!-- 背景图 -->
                     <div class="form-group" >  
                       <label for="backgroundImg" class="col-md-2 control-label col-xs-4">背景图<span style="color:red;">*</span></label>
                      		<iframe  id="backgroundUploadFrame" name="backgroundUploadFrame" width="800px" src="${root}/admin/fileupload/toUploadImg"  scrolling="yes"  frameborder="no"></iframe>
                      </div>
                    
        			<div class="form-group">  
                        <label for="contentTypeRemark" class="col-md-2 control-label col-xs-4">备注</label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea name="contentTypeRemark" id="contentTypeRemark" class="form-control" rows="3"
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
<form action="${root}/admin/contentType" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>

<script>
  $("input[name='showFlagWechart']").on("click",function(){
	  if($(this).val() ==1){
	  	$('.belongWechartBanShowFlag').hide();
	  }else{
	  	$('.belongWechartBanShowFlag').show();
	  }
	})
		   
	window.onload = function(){ 
		$(".loadShow").show();
	}
$(document).ready(function (){
		var options=$("#contentType option:selected").val();
    	if(options == "2"){
        	$("#urlPath").removeAttr("required");
       		$('.articleShowFlag').show();
       		$('.urlShowFlag').hide();
       }else if(options == "0"){
			$("#urlPath").attr("required", "true");
       		$('.articleShowFlag').hide();
       		$('.urlShowFlag').show();
       }else{
      		$("#urlPath").removeAttr("required");
      		$('.articleShowFlag').hide();
       		$('.urlShowFlag').hide();
       }
	});
    //返回
    $("#back").click(function () {
        $("#backForm").submit();
    });
    
     $("#contentType").change(function () {
       var options=$("#contentType option:selected").val();
       if(options == "2"){
        	$("#urlPath").removeAttr("required");
       		$('.articleShowFlag').show();
       		$("#urlPath").val("");
       		$('.urlShowFlag').hide();
       }else if(options == "0"){
			$("#urlPath").attr("required", "true");
       		$('.articleShowFlag').hide();
       		$('.urlShowFlag').show();
       }else{
      		$("#urlPath").removeAttr("required");
      		$("#urlPath").val("");
      		$('.articleShowFlag').hide();
       		$('.urlShowFlag').hide();
       }
    });
    
    $("#contentTypePid").change(function () {
	    var contentTypePid = $("#contentTypePid").val();
	     		$.ajax({
	  	              url  : '${root}/admin/contentType/findMenuById',
	  	              type : "post",
	  	              data : {
	  	            	contentTypePid : contentTypePid
	  	               },
	  	             success : function(res) {
	  	                 if (res.status == 1) {
	  	                 	$("#menuId").find("option[value = '"+res.menuId+"']").prop("selected","selected");
	  	                 	$("#menuId").val(res.menuId)
	  	                 }
	  	              }
	  	         });
    
    	var options=$("#contentTypePid option:selected").val();
    	if(options.length>0){
    		$('.articleShowFlag').show();
      		$("#menuId").attr("disabled", "true");
     		$("#contentType").find("option[value = '2']").attr("selected",true);
     		$("#contentType").val("2")
     		$("#contentType").attr("disabled", "true");
    	}else{
    		$("#menuId").removeAttr("disabled");
    		$("#contentType").removeAttr("disabled");
    	}
    });
    
    function doSubmit() {
		var logoArr = new Array();
		var logoFiles = document.getElementById("imgLogoUploadFrame").contentWindow.document.getElementsByTagName("a");
      	if(logoFiles.length==0){
      		showMes("0", "Logo1不能为空！");
      		return false;
      	}else{
      		for(var i=0;i<logoFiles.length;i++){
				logoArr.push(logoFiles[i].getAttribute('value'));
	 		} 
	 	$("#logoImg").attr("value", logoArr.join(",")); 	
      }
		
		/* var logo1Arr = new Array();
		var logo1Files = document.getElementById("imgLogo1UploadFrame").contentWindow.document.getElementsByTagName("a");
      	if(logo1Files.length==0){
      		showMes("0", "Logo2不能为空！");
      		return false;
      	}else{
      		for(var i=0;i<logo1Files.length;i++){
				logo1Arr.push(logo1Files[i].getAttribute('value'));
	 		} 
	 	$("#logoImg1").attr("value", logo1Arr.join(",")); 	
      } */
		
		var backgroundImgArr = new Array();
		var backgroundImgFiles = document.getElementById("backgroundUploadFrame").contentWindow.document.getElementsByTagName("a");
      	if(backgroundImgFiles.length==0){
      		showMes("0", "背景图不能为空！");
      		return false;
      	}else{
      		for(var i=0;i<backgroundImgFiles.length;i++){
				backgroundImgArr.push(backgroundImgFiles[i].getAttribute('value'));
	 		} 
	 	$("#backgroundImg").attr("value", backgroundImgArr.join(",")); 	
      }
	}
</script>