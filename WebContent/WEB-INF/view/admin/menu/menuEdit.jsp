<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style>
.loadShow{
	display:none;
}
</style>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading"><span class="fa fa-edit" aria-hidden="true"></span><b>修改菜单</b></div>
    <div class="panel-body">
        <div class="row loadShow">
            <form action="${root}/admin/menu/doEdit" class="form-horizontal" method="post" id="editMenuForm">
                <div class="col-lg-12" style="padding-left: 0px;">
                <input type="hidden" name="menuId" id="contentTypeId" value="${ghMenuManage.menuId}">
                <input type="hidden" name="backUrl" id="backUrl" value="${backUrl}">
                <input type="hidden" name="imgUuid" id="imgUuid" value="${ghMenuManage.imgUuid}">
                   
        			<div class="form-group">  
        			 <label for="realName" class="col-md-2 control-label col-xs-4">菜单名称：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="menuName" required id="menuName" maxlength="20"
                                   placeholder="菜单名称" value="${ghMenuManage.menuName}">
                        </div>
        			
                        <label for="sort" class="col-md-2 control-label col-xs-4">排序：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" min="0" class="form-control" name="menuSort" id="menuSort"   maxlength="3"  step="1" placeholder="排序" value="${ghMenuManage.menuSort}">
                        </div>
                    </div>
                    
                 	 <div class="form-group" >  
                       <label for="contentSource" class="col-md-2 control-label col-xs-4">图片上传<span style="color:red;">*</span></label>
                       <iframe  id="imgUploadFrame" name="imgUploadFrame" width="800px" src="${root}/admin/fileupload/toUploadImg"  scrolling="no"  frameborder="no"></iframe>
                      </div>
                      
                       <c:if test="${fn:length(fileList)>0}">
           			 <div class="form-group uploadShow" >  
                        <label for="contentDetail" class="col-md-2 control-label col-xs-4"></label>
           			 <div class="col-md-4 col-xs-8">
           			 <table id="editFileList">
                         <c:forEach items="${fileList}" var="list" varStatus="status">
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
                      
                    
                <div class="col-lg-12">
                    <button id="submit" class="btn btn-success btn-sm pull-right" type="submit" style="margin-left: 10px;">&nbsp;&nbsp;确&nbsp;&nbsp;定&nbsp;&nbsp;</button>
                    <button id="back" class="btn btn-info btn-sm pull-right" type="button" >&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
                </div>
            </form>
        </div>
    </div>
</div>
<form action="${root}/admin/menu" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>
<script>
	　window.onload = function(){ 
		$(".loadShow").show();
		}

    //返回
    $("#back").click(function () {
        $("#backForm").submit();
    });
    
    //修改提交
    $("#editMenuForm").submit(function(){
    	var files = document.getElementById("imgUploadFrame").contentWindow.document.getElementsByTagName("a");
    	var fileId = files[0].getAttribute('value');
    	$("#imgUuid").attr("value", fileId);
    })
</script>