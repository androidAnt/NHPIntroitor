<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="row panel panel-default table-responsive ">
    <div class="panel-heading">
    <span class="fa fa-file-text-o" aria-hidden="true"></span>
    <b>通知公告详情</b>
    </div>
    <div class="panel-body">
        <div class="row">
            <form action="" class="form-horizontal"  method="post" id="addContentForm"  >
                <input type="hidden" name="backUrl" value="${backUrl}">
                <div class="col-lg-12" style="padding-left: 0px;">
                    <div class="form-group">  
                     <label for="contentTitle" class="col-md-2 control-label col-xs-4">标题<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                          <input type="text" class="form-control" disabled name="announcementTitle" id="announcementTitle"  value="${ghAnnouncement.announcementTitle}">
                        </div>
                    
                        <label for="isShowIndex" class="col-md-2 control-label col-xs-4">是否显示首页<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input disabled type="radio" name="isShowIndex" id="isShowIndex" value="0" <c:if test="${ghAnnouncement.isShowIndex=='0'||empty ghAnnouncement.isShowIndex}">checked</c:if>>是</label>
                        <label class="radio-inline" style="padding-top: 4px;">
                        <input disabled type="radio" name="isShowIndex" value="1" <c:if test="${ghAnnouncement.isShowIndex=='1'}">checked</c:if>>否</label>
                        </div>
                    </div>
            	<div class="form-group">  
                        <label for="announcementContent" class="col-md-2 control-label col-xs-4">内容<span style="color:red;">*</span></label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea name="announcementContent"  id="announcementContent" class="form-control" rows="8"
                                      >${ghAnnouncement.announcementContent }</textarea>
                        </div>
                    </div>
                    </div>
                <div class="col-lg-12">
                    <button id="back" class="btn btn-info btn-sm pull-right" type="button" >&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
                </div>
            </form>
        </div>
    </div>
</div>

<form action="${root}/admin/announcement" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>
<script charset="utf-8" src="${root}/components/kindeditor/kindeditor-all-min.js"></script>
<script>　

	var editor;
	KindEditor.ready(function(K) {
		editor = K.create('#announcementContent', {
			uploadJson : root + '/components/kindeditor/jsp/upload_json.jsp',
			fileManagerJson : root + '/components/kindeditor/jsp/file_manager_json.jsp',
			allowFileManager : true,
			resizeType : 0,
			width : parseInt($('#announcementContent').parents('div').css('width').replace("px", '')) - 20,
			minWidth : parseInt($('#announcementContent').parents('div').css('width').replace("px", '')) - 20,
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

</script>