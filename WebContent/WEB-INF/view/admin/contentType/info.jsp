<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
    <span class="fa fa-file-text-o" aria-hidden="true"></span>
    <b>内容分类详情</b>
    </div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/admin/contentType/doAdd" class="form-horizontal" method="post" id="addContentTypeForm" >
                <div class="col-lg-12" style="padding-left: 0px;">
                   <div class="form-group"> 
                     <label for="menuId" class="col-md-2 control-label col-xs-4">所属菜单<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <select disabled class="form-control" id="menuId" name="menuId">
                                <c:forEach items="${menuList}" var="menu">
                                    <option value="${menu.menuId}" } ${menu.menuId==ghContentType.menuId?'selected':''} >${menu.menuName}</option>
                                </c:forEach>
                            </select>
                        </div>
                   		<label for="contentTypePid" class="col-md-2 control-label col-xs-4">上级分类</label>
	                        <div class="col-md-4 col-xs-8">
	                        <select disabled class="form-control" id="contentTypePid" name="contentTypePid">
	                        		<option value=""}>请选择</option>
	                                <c:forEach items="${pList}" var="content">
	                                    <option value="${content.contentTypeId}"} ${content.contentTypeId==ghContentType.contentTypePid?'selected':''}>${content.contentTypeName}</option>
	                                </c:forEach>
	                            </select>
	                        </div>
                    </div>
                    
                    <div class="form-group">  
                       <label for="contentTypeName" class="col-md-2 control-label col-xs-4">分类名称<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" disabled class="form-control" name="contentTypeName" id="contentTypeName" maxlength="50" required placeholder="分类名称" value="${ghContentType.contentTypeName}">
                        </div>
                          <label for="contentTypeSort" class="col-md-2 control-label col-xs-4">分类排序<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" min="0" disabled class="form-control" name="contentTypeSort" id="contentTypeSort"  required  maxlength="3"  step="1" placeholder="分类排序" value="${ghContentType.contentTypeSort}">
                        </div>
                    </div>
                     <div class="form-group">  
                        <label for="showFlagWechart" class="col-md-2 control-label col-xs-4">是否同步到公众号<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input disabled type="radio" name="showFlagWechart" id="showFlagWechart" value="0" <c:if test="${ghContentType.showFlagWechart=='0'||empty ghContentType.showFlagWechart}">checked</c:if>>是</label>
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input disabled type="radio" name="showFlagWechart" value="1" <c:if test="${ghContentType.showFlagWechart=='1'||empty ghContentType.showFlagWechart}">checked</c:if>>否</label>
                        </div>
                         <div class="belongWechartBanShowFlag">
                          <label for="belongWechartBan" class="col-md-2 control-label col-xs-4">所属微信导航<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                         <select disabled class="form-control" id="belongWechartBan" name="belongWechartBan" required>
                         <c:forEach items="${weChartBan}" var="sysDic">
                                    <option value="${sysDic.dicCode}"} ${sysDic.dicCode==ghContentType.belongWechartBan?'selected':''} >${sysDic.dicName}</option>
                                </c:forEach>
                        </select>
                        </div></div>
                    </div>
        			 <div class="form-group">  
                        <label for="contentType" class="col-md-2 control-label col-xs-4">内容分类<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <select disabled class="form-control" id="contentType" name="contentType" required >
                         <c:forEach items="${contentTypeList}" var="sysDic">
                                    <option value="${sysDic.dicCode}"} ${sysDic.dicCode==ghContentType.contentType?'selected':''} >${sysDic.dicName}</option>
                                </c:forEach>
                        </select>
                        </div>
                        <div class="articleShowFlag" style="display:none" >
                         <label for="articleType" class="col-md-2 control-label col-xs-4">文章分类<span style="color:red;">*</span></label>
                         <div class="col-md-4 col-xs-8">
                        <select disabled class="form-control" id="articleType" name="articleType"  >
                        <c:forEach items="${articleTypeList}" var="sysDic">
                                    <option value="${sysDic.dicCode}"} ${sysDic.dicCode==ghContentType.articleType?'selected':''}>${sysDic.dicName}</option>
                                </c:forEach>
                        </select>
                         </div> 
                        </div>
                        <div class="urlShowFlag" style="display:none" >
                         <label for="urlPath" class="col-md-2 control-label col-xs-4">URL<span style="color:red;">*</span></label>
                         <div class="col-md-4 col-xs-8">
                        <input disabled type="text" class="form-control" name="urlPath" id="urlPath" maxlength="50"  placeholder="链接路径" value="${ghContentType.urlPath}">
                         </div> 
                        </div>
                    </div>
                    
                   <c:if test="${fn:length(ghContentType.logoImgList)>0}">
                    <div class="form-group">  
                    	 <label for=logoImgList class="col-md-2 control-label col-xs-4">Logo<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <c:forEach items="${ghContentType.logoImgList}" var="list" varStatus="status">
                         	<p>${list.name }<a href="${root}/admin/fileupload/downloadById?fileId=${list.fileId}" style="float:right">下载</a></p>
                        </c:forEach>
                        </div>
                    </div>
                    </c:if>
                    
                   <%--  <c:if test="${fn:length(ghContentType.logoImg2List)>0}">
                    <div class="form-group">  
                    	 <label for=logoImgList class="col-md-2 control-label col-xs-4">Logo2<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <c:forEach items="${ghContentType.logoImg2List}" var="list" varStatus="status">
                         	<p>${list.name }<a href="${root}/admin/fileupload/downloadById?fileId=${list.fileId}" style="float:right">下载</a></p>
                        </c:forEach>
                        </div>
                    </div>
                    </c:if> --%>
                    
                    <c:if test="${fn:length(ghContentType.backgroundImgList)>0}">
                    <div class="form-group">  
                    	 <label for=backgroundImgList class="col-md-2 control-label col-xs-4">背景图<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <c:forEach items="${ghContentType.backgroundImgList}" var="list" varStatus="status">
                         	<p>${list.name }<a href="${root}/admin/fileupload/downloadById?fileId=${list.fileId}" style="float:right">下载</a></p>
                        </c:forEach>
                        </div>
                    </div>
                    </c:if>
                    
        			<div class="form-group">  
                        <label for="contentTypeRemark" class="col-md-2 control-label col-xs-4">备注</label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea disabled name="contentTypeRemark" id="contentTypeRemark" class="form-control" rows="3"
                                      placeholder="" maxlength="100">${ghContentType.contentTypeRemark }</textarea>
                        </div>
                    </div>
                <div class="col-lg-12">
                    <button id="back" class="btn btn-info btn-sm pull-right" type="button" >&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
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

<div id="croppicDiv" style="display: none;width: 240px;height: 240px;"></div>
<script>
$(document).ready(function (){
		var options=$("#contentType option:selected").val();
    	if(options == "2"){
       		$('.articleShowFlag').show();
       		$('.urlShowFlag').hide();
       }else if(options == "0"){
       		$('.articleShowFlag').hide();
       		$('.urlShowFlag').show();
       }else{
      		$('.articleShowFlag').hide();
       		$('.urlShowFlag').hide();
       }
        var val = $('input[name="showFlagWechart"]:checked').val(); 
       if(val==0){
       		$('.belongWechartBanShowFlag').show();
       }else{
       		$('.belongWechartBanShowFlag').hide();
       }
       
	});
    //返回
    $("#back").click(function () {
        $("#backForm").submit();
    });
    //添加
    function doSubmit(){
        if($("#orgId").val()==""){
            $('#submit').hide();
        }
    } 
</script>