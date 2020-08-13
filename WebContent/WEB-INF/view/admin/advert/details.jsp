<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="${root}/components/kindeditor/themes/default/default.css" />
<script charset="utf-8" src="${root}/components/kindeditor/kindeditor-min.js"></script>
<script charset="utf-8" src="${root}/components/kindeditor/lang/zh_CN.js"></script>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading"><span class="fa fa-file-text-o" aria-hidden="true"></span><b>广告详情</b></div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/admin/advert" method="post" id="form1" class="form-horizontal">
                
	            <c:forEach items="${paramMap}" var="item" varStatus="status">
	                    <input type="hidden" name="${item.key}" value="${item.value}"/>
	            </c:forEach>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label for="title" class="col-md-2 control-label col-xs-4">广告标题：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="title">${advert.title}</p>
                        </div>
                        <label for="sortNO" class="col-md-2 control-label col-xs-4">序号：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="sortNO">${advert.sortNO}</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="apId" class="col-md-2 control-label col-xs-4">广告位置：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="apId">${advert.positionTitle}</p>
                        </div>
                        <label for="state" class="col-md-2 control-label col-xs-4">状态：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="state">
                                <c:if test="${advert.state==1}">显示</c:if>
                                <c:if test="${advert.state==0}">隐藏</c:if>
                            </p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="startDate" class="col-md-2 control-label col-xs-4">开始时间：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="startDate">${ fn:substring(advert.startDate ,0,10)}</p>
                        </div>
                        <label for="endDate" class="col-md-2 control-label col-xs-4">结束时间：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="endDate">${ fn:substring(advert.endDate ,0,10)}</p>
                        </div>
                    </div>
                    <div class="form-group <c:if test="${empty advert.picUrl}">hide</c:if>" id="picDiv">
                        <label for="picUrl_img" class="col-md-2 control-label col-xs-4">广告图片：</label>

                        <div class="col-md-10 col-xs-8">
                            <div id="picUrl_img"
                                 style="width:${advert.width}px;height:${advert.height}px;border: 1px solid #ddd;border-radius: 4px;vertical-align: middle;text-align: center;">
                                <img src="${root}${advert.picUrl}" style="width:${advert.width}px;height:${advert.height}px;">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="content" class="col-md-2 control-label col-xs-4">广告内容：</label>
                        <div class="col-md-10 col-xs-8">
                            <textarea name="content" id="content" class="form-control" style="height:200px;visibility:hidden;" placeholder="请输入广告内容">${advert.content}</textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="content" class="col-md-2 control-label col-xs-4">省市：</label>
                        <div class="col-md-10 col-xs-8">
                          <p class="form-control-static" >${advert.province}&nbsp;${advert.city}</p>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <button class="btn btn-info btn-sm pull-right" type="submit">&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
    var editor;
    KindEditor.ready(function(K) {
        editor = K.create('textarea[name="content"]', {
            width:parseInt($('#content').parents('div').css('width').replace("px",''))-20,
            minWidth:parseInt($('#content').parents('div').css('width').replace("px",''))-20,
            readonlyMode : true,
            items : [],
        });
    });
</script>