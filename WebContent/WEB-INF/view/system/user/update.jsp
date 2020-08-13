<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="platform_admins" value="<%=SystemConstant.SYS_admin_LOGINNAME%>"/>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-edit" aria-hidden="true"></span>
        <b>修改用户</b>
    </div>
    <div class="panel-body" >
        <div class="row">
           <!--  <div class="col-lg-3" style="width: 240px;margin: auto;text-align: center;">
                <div id="headPortraitDiv">
                    <c:if test="${empty user.headPortrait}">
                        <img src="${root}/img/system/photo.jpg" class="img-thumbnail headPortrait" width="100%">
                    </c:if>
                    <c:if test="${not empty user.headPortrait}">
                        <img src="${root}${user.headPortrait}" class="img-thumbnail headPortrait" width="100%">
                    </c:if>
                </div> 
                <!-- <div style="text-align: left;padding: 10px;margin-left: 68px;">
                    <p>(240*240比例)<p/>
                    <button class="btn btn-xs btn-success" id="croppicBtn">
                        <i class="ace-icon fa fa-upload bigger-120"></i>修改头像
                    </button>
                </div> 
            </div>-->
            <form action="${root}/system/user/doupdate" class="form-horizontal" method="post" id="updateUserForm">
                <input type="hidden" name="headPortrait" id="headPortrait" value="${user.headPortrait}">
                <input type="hidden" name="suId" id="suId" value="${user.suId}">
                <input type="hidden" name="backUrl" id="backUrl" value="${backUrl}">
                <div class="col-lg-12" style="padding-left: 0px;">
                    <div class="form-group">
                        <label for="loginName" class="col-md-2 control-label col-xs-4">登录名称：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="loginName" id="loginName"  maxlength="20"
                          onblur=" checkLoginName()"  required placeholder="登录名称" value="${user.loginName}"><span id="tishi"></span>
                        </div>
                     </div>
                     
                     <div class="form-group">
                     
                     <label for="realName" class="col-md-2 control-label col-xs-4">所属组织<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
	                        <input type="hidden" name="orgId" id="orgId" class="form-control" value="${user.orgId }">
	                        <input type="text" class="form-control" readonly="" name="orgName" id="orgName" maxlength="25" placeholder="组织机构名称" required value="${user.orgName }" >
	                        <button class="btn btn-xs btn-success pull-right " style="margin-top:-34px; height:33px;" type="button" data-toggle="modal" data-target="#addOrgModal"><i class="ace-icon fa fa-plus-square bigger-120"></i>请选择
	                        </button>
                        </div>
                     
                        <label for="realName" class="col-md-2 control-label col-xs-4">真实名称：</label>

                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="realName" required id="realName" maxlength="20"
                                   placeholder="真实名称" value="${user.realName}">
                        </div>
                     </div> 
                     
                    <div class="form-group">
                        <label for="sort" class="col-md-2 control-label col-xs-4">排序</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" min="0" class="form-control" name="sort" id="sort"   maxlength="3"  step="1" placeholder="排序" value="${user.sort}">
                        </div>
                        
                        <label for="phone" class="col-md-2 control-label col-xs-4">联系电话：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="phone" id="phone" maxlength="15" placeholder="联系电话" value="${user.phone}"
                            	required pattern="([1][3,4,5,7,8][0-9]{9})$" title="请输入正确的电话号码"/>
                        </div>
                    </div>
                    
                   <c:if test="${user.loginName!=platform_admins}"> 
                    <div class="form-group">
                        <label for="state" class="col-md-2 control-label col-xs-4">用户类型：</label>
                        <div class="col-md-4 col-xs-8">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="type" id="type" value="1" <c:if test="${user.type=='1'}">checked</c:if>>检验
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="type" value="2" <c:if test="${user.type=='2'}">checked</c:if>>审核
                            </label>
                              <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="type" value="3" <c:if test="${user.type=='3'}">checked</c:if>>审批
                            </label>
                        </div>
                    </div>   
                     </c:if>
                    </div>
                    <!-- <div class="form-group">
                        <label for="age" class="col-md-2 control-label col-xs-4">年龄：</label>

                        <div class="col-md-4 col-xs-8">
                            <input type="number" min="0" max="200" class="form-control" name="age" id="age" value="${user.age}" step="1"
                                   maxlength="3" placeholder="年龄" >
                        </div>
                        <label for="gender" class="col-md-2 control-label col-xs-4">性别：</label>

                        <div class="col-md-4 col-xs-8">
                            <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="gender" id="gender" value="0" <c:if test="${user.gender=='0'||empty user.gender}">checked</c:if>>男
                            </label>
                            <label class="radio-inline" style="padding-top: 4px;margin-left: 23px;">
                                <input type="radio" name="gender" value="1" <c:if test="${user.gender=='1'}">checked</c:if>>女
                            </label>
                        </div>
                    </div> -->
                   
                   
                   <!--  <div class="form-group">
                        <label for="idCard" class="col-md-2 control-label col-xs-4">身份证号码：</label>
                        <div class="col-md-10 col-xs-8">
                            <input type="text" class="form-control" name="idCard" id="idCard" maxlength="20"
                                   placeholder="身份证号码" value="${user.idCard}">
                        </div>
                    </div> -->
                    <!-- <div class="form-group">
                        <label for="address" class="col-md-2 control-label col-xs-4">联系地址：</label>
                        <div class="col-md-10 col-xs-8">
                            <input type="tel" class="form-control" name="address" id="address" maxlength="100"
                                   placeholder="联系地址" value="${user.address}">
                        </div>
                    </div> -->
                </div>
              <!-- <div class="col-lg-9" style="padding-left: 0px;">
                    <div class="form-group">
                        <label for="remark" class="col-md-2 control-label col-xs-4">备注信息：</label>
                        <div class="col-md-10 col-xs-8">
                            <input type="tel" class="form-control" name="remark" id="remark" maxlength="125"
                                   placeholder="备注信息" value="${user.remark}">
                        </div>
                    </div>
                </div>  -->
                <div class="col-lg-12" >
                    <button id="submit" class="btn btn-success btn-sm pull-right" type="submit" style="margin-left: 10px;">&nbsp;&nbsp;确&nbsp;&nbsp;定&nbsp;&nbsp;</button>
                    <button id="resetPwd" class="btn btn-purple  btn-sm pull-right" type="button" style="margin-left: 10px;">重置密码</button>
                    <button id="back" class="btn btn-info btn-sm pull-right" type="button" >&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
                </div>
            </form>
        </div>
    </div>
</div>

<div id="addOrgModal" class="modal fade" tabindex="-1" >
<div class="modal-dialog" style="width:800px">
<div class="modal-content">
            <div class="modal-header">
                <div class="table-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">选择组织机构</h4>
                </div>
            </div>
     <div class="modal-body table-responsive">
	<iframe id="orgContent" src="${root}/system/org/orgDialog" width="100%" height="90%" scrolling="no" frameborder="0" onload="this.height=500"></iframe>
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
            
            </div></div></div>

<form action="${root}/system/user" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item" varStatus="status">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>
<div id="croppicDiv" style="display: none;width: 240px;height: 240px;"></div>
<script>
    var croppicOptions={
        cropData:{'fileType':'user'},
        imgMaxSize:2,//图片最大2M
        cropUrl: root+'/system/upload/croppic',//裁剪服务器处理路径
        customUploadButtonId: 'croppicBtn',//上传按钮ID
        modal: true,//弹出层
        processInline: true,//在线加载
        rotateControls: false,//旋转
        loaderHtml:'<div class="loader bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div> ',
        onAfterImgCrop:function(data){
            $('#headPortraitDiv img').attr("src",root+data.url);
            $("#headPortrait").val(data.url);
        },
        onError:function(errormessage){
            showMes("0",errormessage);
        }
    }
    var croppicObj = new Croppic('croppicDiv', croppicOptions);

    $('#selOrgId li').click(function(){
        $("#orgId").val($(this).attr('id'));
        $("#orgName").val($(this).find('a').html());
        $("#orgNames").html($(this).find('a').html());
    });

    //返回
    $("#back").click(function () {
        $("#backForm").submit();
    });
   /*  function doSubmit(){
        if($("#orgId").val()==""){
            showMes("0","请选择归属部门");
            return false;
        }else{
            $('#submit').hide();
        }
    } */
    //重置密码
    $("#resetPwd").click(function(){
        $("#resetPwd").hide();
        $.ajax({
            type: 'POST',
            url: root + '/system/user/resetpwd/'+$("#suId").val()+"/",
            success: function (data) {
                $("#resetPwd").show();
                showMes(data.status, data.msg);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#resetPwd").show();
                showMes("0", "系统繁忙,请稍后再试");
            }
        });
    });
    
 // 登录名称校验
    function checkLoginName(){
    	 var loginName = $("#loginName").val();
         var tishi = document.getElementById("tishi");
         tishi.innerHTML = "";
         var loginNames ='${user.loginName}';
         if(loginName!=loginNames){
        	 $.ajax({
	              url  : '${root}/system/user/findAllUser',
	              type : "post",
	              data : {
	            	  loginName : loginName
	               },
	             success : function(res) {
	            	 console.log(res)
	                 if (res.status == 0) {
	                     tishi.innerHTML = "<font color='red'>" + res.msg + "</font>";
	                 } else {
	                	 tishi.innerHTML = "";
	                 }
	              }
	         });
         }
	         
        }
        
        
          function setMakeCompanyName(id,name){
     if(!$('#'+id).html()){
        $('#chooseDate').html('<span class="chooseSpan" style="margin: 0 5px;" id="'+id+'">'+name+'</span>');
          }
      } 
    
  // 生产厂家名称确定
      function updateForeignName(){
        if($('#chooseDate').html()==''){
            showMes(0,"请"+$('#addOrgModal').find('.modal-title').html());
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
        
        $("#orgName").val(names);
        $("#orgId").val(ids);
        $("#orgName").attr('title',names);
        $('#addOrgModal').modal('hide');
    }
    
    //删除选中的生产厂家
      function removeMakeCompanyName(id,name){
          $('#chooseDate').find('#'+id).remove();
          $("#tr_"+id).remove();
      }    
    
</script>