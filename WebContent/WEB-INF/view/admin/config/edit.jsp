<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script type="text/javascript" src="${root}/components/wdatePicker/WdatePicker.js"></script>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading"><span class="fa fa-edit" aria-hidden="true"></span><b>修改企业信息</b></div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/admin/config/doEdit" class="form-horizontal" method="post" id="editAdvertForm"
                  onsubmit="return doSubmit();">
                <input type="hidden" name="backUrl" id="backUrl" value="${backUrl}">
                <input type="hidden" name="manageId" id="manageId" value="${config.manageId}">
                   <div class="col-lg-12" style="padding-left: 0px;">
      
                    <div class="form-group">
                        <label for="fitType" class="col-md-2 control-label col-xs-4">企业类型：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="fitType" id="fitType" maxlength="25"
                                readonly   placeholder="企业账号" required value="${config.fitType}">
                        </div>

                    </div>
                    <div class="form-group">
            
                        <label for="manageBenefit" class="col-md-2 control-label col-xs-4">查看条数：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" name="manageBenefit" id="manageBenefit" class="form-control"
                             value="${config.manageBenefit}" placeholder="查看条数" required>
                        </div>
                    </div>

                </div>
                <div class="col-lg-12">
                    <button id="submit" class="btn btn-success btn-sm pull-right" type="submit"
                            style="margin-left: 10px;">&nbsp;&nbsp;修&nbsp;&nbsp;改&nbsp;&nbsp;</button>
                    <button id="back" class="btn btn-info btn-sm pull-right" type="button">&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
                </div>
            </form>
        </div>
    </div>
</div>

<div id="sellerList" class="modal fade"  tabindex="-1">
    <div class="modal-dialog" style="width:810px;" >
        <div class="modal-content"  >
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" id="ext" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm chooseSeller">确定</button>
            </div>
        </div>
    </div>
</div>

<div id="croppicDiv" style="display: none;"></div>
<form action="${root}/admin/company" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item" varStatus="status">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>
<script charset="utf-8" src="${root}/components/kindeditor/kindeditor-all-min.js"></script>
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
    $("#picUrl_img").css('width',$("#apId").val().split("_")[1]).css('height',$("#apId").val().split("_")[2]);
    $("#picUrl_img img").css('width',$("#apId").val().split("_")[1]).css('height',$("#apId").val().split("_")[2]);
    $("#croppicBtnDiv").css('width',$("#apId").val().split("_")[1]);
    
    /*if(($('#apId').val().split("_")[1]*2)>1024||($('#apId').val().split("_")[2]*2)>600){
        $('#croppicDiv').css('width',1242).css('height',2208);
    }else{
        $('#croppicDiv').css('width',$("#apId").val().split("_")[1]*2).css('height',$("#apId").val().split("_")[2]*2);
    }*/
    
    $('#croppicDiv').css('width',$("#apId").val().split("_")[1]).css('height',$("#apId").val().split("_")[2]);

    


    //返回
    $("#back").click(function () {
        $("#backForm").submit();
    });
    var croppicOptions = {
        cropData: {'fileType': 'advert'},
        imgMaxSize: 1,//图片最大2M
        cropUrl: root + '/system/upload/croppic',//裁剪服务器处理路径
        customUploadButtonId: 'croppicBtn',//上传按钮ID
        modal: true,//弹出层
        processInline: true,//在线加载
        rotateControls: false,//旋转
        loaderHtml: '<div class="loader bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div> ',
        onAfterImgCrop: function (data) {
            $('#picUrl_img').html('<img src="'+root+data.url+'" style="width:'+$("#picUrl_img").css('width')+';height'+$("#picUrl_img").css('height')+';">')
            $("#picUrl").val(data.url);
        },
        onError: function (errormessage) {
            showMes("0", errormessage);
        }
    }
    var croppicObj = new Croppic('croppicDiv', croppicOptions);
    $("#apId").change(function () {
        if ($(this).val() != '') {
            $("#picUrl_img").css('width', $(this).val().split("_")[1]).css('height', $(this).val().split("_")[2]);
            $("#croppicBtnDiv").css('width',$("#apId").val().split("_")[1]);
            if ($("#picUrl_img img")) {
                $("#picUrl_img img").css('width', $(this).val().split("_")[1]).css('height', $(this).val().split("_")[2]);
            }
            
            /*if(($(this).val().split("_")[1]*2)>1024||($(this).val().split("_")[2]*2)>600){
                $('#croppicDiv').css('width',1000).css('height',500);
            }else{
                $('#croppicDiv').css('width',$(this).val().split("_")[1]*2).css('height',$(this).val().split("_")[2]*2);
            }*/
            
            $('#croppicDiv').css('width',$(this).val().split("_")[1]).css('height',$(this).val().split("_")[2]);
            
            $("#picDiv").removeClass('hide');
            croppicObj.reset();
        } else {
            $("#picDiv").addClass('hide');
        }
    });
     function checkPassword(){
    	 var companyPassword = $("#companyPassword").val();
    	 if(companyPassword.length !=6){
    			$("#infos").text("位数不正确")
        		$("#companyPassword").val('');
    	 }else{
    			$("#infos").text('');

    	 }
    	 
     }
</script>