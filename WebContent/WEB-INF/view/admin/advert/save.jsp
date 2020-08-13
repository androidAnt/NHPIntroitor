<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script type="text/javascript" src="${root}/components/wdatePicker/WdatePicker.js"></script>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading"><span class="fa fa-plus" aria-hidden="true"></span><b>新增广告</b></div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/admin/advert/doadd" class="form-horizontal" method="post" id="addAdvertForm" onsubmit="return doSubmit();">
                <input type="hidden" name="picUrl" id="picUrl" value="${advert.picUrl}">
                <div class="col-lg-12" style="padding-left: 0px;">
                    <div class="form-group">
                        <label for="title" class="col-md-2 control-label col-xs-4">广告标题：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="title" id="title" maxlength="25"
                                   placeholder="广告标题" required value="${advert.title}">
                        </div>
                        <label for="sortNO" class="col-md-2 control-label col-xs-4">序号：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" name="sortNO" id="sortNO" class="form-control" value="${advert.sortNO}"
                                   placeholder="广告序号" required min="1" step="1" max="100">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="apId" class="col-md-2 control-label col-xs-4">广告位置：</label>
                        <div class="col-md-4 col-xs-8">
                            <select name="apId" id="apId" class="form-control" required>
                                <option value="">请选择广告位置</option>
                                <c:forEach items="${positionList}" var="positionList">
                                    <option value="${positionList.apId}_${positionList.width}_${positionList.height}" <c:if test="${advert.apId==positionList.apId}">selected</c:if>>${positionList.title}</option>
                                </c:forEach>
                            </select>
                        </div>
                        <label for="state" class="col-md-2 control-label col-xs-4">状态：</label>
                        <div class="col-md-4 col-xs-8">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" value="1" <c:if test="${advert.state==1 or empty advert.state}">checked</c:if>>显示
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="state" id="state" value="0" <c:if test="${advert.state==0}">checked</c:if>>隐藏
                            </label>
                        </div>
                        <%--<label for="link" class="col-md-2 control-label col-xs-4">广告链接：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="url" class="form-control" name="link"  id="link" maxlength="120"
                                   placeholder="广告链接" value="${advert.link}">
                        </div>--%>
                    </div>
                    <div class="form-group">
                        <label for="startDate" class="col-md-2 control-label col-xs-4">开始时间：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" name="startDate" id="startDate" value="${fn:substring(advert.startDate ,0,10)}" class="form-control" required placeholder="开始时间"
                                   onFocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\'endDate\')}',isShowClear:false,isShowOK:false,isShowToday:false,skin:'twoer'})">
                        </div>
                        <label for="endDate" class="col-md-2 control-label col-xs-4">结束时间：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" name="endDate" id="endDate" value="${fn:substring(advert.endDate ,0,10)}" class="form-control" required placeholder="结束时间"
                                   onFocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'startDate\')}',isShowClear:false,isShowOK:false,isShowToday:false,skin:'twoer'})">
                        </div>
                    </div>
                    <div class="form-group <c:if test="${empty advert.picUrl}"></c:if>">
                        <label for="picUrl_img" class="col-md-2 control-label col-xs-4">广告图片：</label>
                        <div class="col-md-8 col-xs-8">
                            <div id="picUrl_img" style="border: 1px solid #ddd;border-radius: 4px;vertical-align: middle;text-align: center;">
                                <c:if test="${empty advert.picUrl}"><h2>请选择图片</h2></c:if>
                                <c:if test="${not empty advert.picUrl}"><img src="${root}${advert.picUrl}"></c:if>
                            </div>
                            <div style="text-align: center;margin-top: 10px;" id="croppicBtnDiv"><button class="btn btn-xs btn-success" type="button" id="croppicBtn"><i class="ace-icon fa fa-upload bigger-120"></i>上传图片</button></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="content" class="col-md-2 control-label col-xs-4">广告内容：</label>
                        <div class="col-md-10 col-xs-8">
                            <textarea name="content" id="content" class="form-control" style="height:400px;visibility:hidden;"
                                      placeholder="请输入广告内容">${advert.content}</textarea>
                            <p>
                                您当前输入了 <span class="word_count">0</span> 个文字,剩余<span class="word_count2">10000</span>个文字
                            </p>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="content" class="col-md-2 control-label col-xs-4">省市：</label>
                        <div class="col-md-10 col-xs-8">
                            <div class="input-group">
                                <select name="province" id="province" class="form-control" style="width: 33%" required></select>
                                <select name="city" id="city" class="form-control" style="width: 33%" required></select>
                            </div>
                            <tags:regionCache provinceId="province" provinceValue="${advert.province}" cityId="city" cityValue="${advert.city}" ></tags:regionCache>
                        </div>
                    </div>
                     
                </div>
                
                <div class="col-lg-12">
                    <button id="submit" class="btn btn-success btn-sm pull-right" type="submit" style="margin-left: 10px;">&nbsp;&nbsp;确&nbsp;&nbsp;定&nbsp;&nbsp;</button>
                    <button id="back" class="btn btn-info btn-sm pull-right" type="button" >&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
                </div>
            </form>
        </div>
    </div>
</div>

<div id="sellerList" class="modal fade"   tabindex="-1">
    <div class="modal-dialog"  style="width:810px;">
        <div class="modal-content"  >
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">选择商家</h4>
            </div>
            <div class="embed-responsive embed-responsive-16by9">
                <input type="hidden" name="memberListType" id="memberListType" >
                <!-- <iframe class="embed-responsive-item" src="${root}/admin/seller/sellerList" id="sellerListIframe"></iframe> -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" id="ext" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm chooseSeller">确定</button>
            </div>
        </div>
    </div>
</div>
<script charset="utf-8" src="${root}/components/kindeditor/kindeditor-all-min.js"></script>
<div id="croppicDiv" style="display: none;"></div>
<script>
    var editor;
    KindEditor.ready(function (K) {
        editor = K.create('#content', {
            uploadJson: root + '/components/kindeditor/jsp/upload_json.jsp',
            fileManagerJson: root + '/components/kindeditor/jsp/file_manager_json.jsp',
            allowFileManager: true,
            resizeType: 0,
            width:parseInt($('#content').parents('div').css('width').replace("px",''))-20,
            minWidth:parseInt($('#content').parents('div').css('width').replace("px",''))-20,
            items: [
                'source', '|', 'undo', 'redo', '|', 'preview', 'template', 'cut', 'copy', 'paste',
                'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'clearhtml', 'quickformat', '|', '/',
                'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
                'insertfile', 'table', 'hr', 'emoticons', 'link', 'unlink', '|'
            ],
            afterChange: function () {
                K('.word_count').html(this.count());
            }
        });
    });
    $("#picUrl_img").css('width', $("#apId").val().split("_")[1]).css('height', $("#apId").val().split("_")[2]);
    $("#croppicBtnDiv").css('width',$("#apId").val().split("_")[1]);
    $("#back").click(function () {
        window.location.href='${root}/admin/advert';
    });
    var croppicOptions={
        cropData:{'fileType':'advert'},
        imgMaxSize:1,//图片最大2M
        cropUrl: root+'/system/upload/croppic',//裁剪服务器处理路径
        customUploadButtonId: 'croppicBtn',//上传按钮ID
        modal: true,//弹出层
        processInline: true,//在线加载
        rotateControls: false,//旋转
        loaderHtml:'<div class="loader bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div> ',
        onAfterImgCrop:function(data){
            $('#picUrl_img').html('<img src="'+root+data.url+'" style="width:'+$("#picUrl_img").css('width')+';height'+$("#picUrl_img").css('height')+';">')
            $("#picUrl").val(data.url);
        },
        onError:function(errormessage){
            showMes("0",errormessage);
        }
    }
    var croppicObj = new Croppic('croppicDiv', croppicOptions);
    $("#apId").change(function(){
        if($(this).val()!=''){
            $("#picUrl_img").css('width',$(this).val().split("_")[1]).css('height',$(this).val().split("_")[2]);
            $("#croppicBtnDiv").css('width',$(this).val().split("_")[1]);
            if($("#picUrl_img img")){
                $("#picUrl_img img").css('width',$(this).val().split("_")[1]).css('height',$(this).val().split("_")[2]);
            }
            
            /*if(($(this).val().split("_")[1]*2)>1024||($(this).val().split("_")[2]*2)>600){
                $('#croppicDiv').css('width',1242).css('height',2208);
            }else{
                $('#croppicDiv').css('width',$(this).val().split("_")[1]*2).css('height',$(this).val().split("_")[2]*2);
            }*/
            
            $('#croppicDiv').css('width',$(this).val().split("_")[1]).css('height',$(this).val().split("_")[2]);

            
            $("#picDiv").removeClass('hide');
            croppicObj.reset();
        }else{
            $("#picDiv").addClass('hide');
        }
    });

    function doSubmit(){
    	if($("#picUrl").val()==''){
            showMes("0","请上传广告图片");
            return false;
        }
        if(editor.html().length>10000){
            showMes(0,"广告内容不能大于10000");
            return false;
        }
        if(editor.html()==''){
            showMes(0,"请输入广告内容");
            return false;
        }
        return true;
    }
    //发放广告商家
    /*$('.chooseSeller').click(function () {
    	//$("#sellerList").hide();
    	$("#ext").click();
    	var obj = $("#sellerListIframe").contents()
        var sId = obj.find(":radio[name='sId']:checked").val();
        var obj = eval("(" +obj.find(":radio[name='sId']:checked").attr('data-obj')+ ")");
        $("#sellerName").val(obj.sellerName);
        $("#sellerId").val(sId);
    });*/
    
</script>