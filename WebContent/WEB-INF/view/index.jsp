<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>
<%@ page import="com.bluebird.components.common.TimeHelper" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <title><%=SystemConstant.SYS_NAME%></title>
    <link rel="stylesheet" href="${root}/components/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="${root}/css/system/login.css"/>
    <link rel="shortcut icon" href="${root}/logo.png" type="image/x-icon"/>
    <style type="text/css">
		body {
		 width: 100%;
		 height: 100vh;	/* 重点一 */
		 /* background-image: url(${root}/img/system/login/login.jpg); */
		 background-image: url(${root}/img/system/login/login3.jpg);
		 background-size:100% 100%;
		 text-align:center
		}
	</style>
</head>
<body>
<div class="top-content">
    <div class="inner-bg">
        <div class="container">
          <%--   <div class="row">
                <div class="col-sm-8 col-sm-offset-2 text">
                    <h1><strong><%=SystemConstant.SYS_NAME%></strong></h1>
                    <div class="description">
                        <p>
                            欢迎您使用<%=SystemConstant.SYS_NAME%>
                        </p>
                    </div>
                </div>
            </div> --%>
            <div class="row">
                <div class="form-box" >
                    <div class="form-top">
                    	<h3 class="yhdl">用 户 登 录</h3>
<!--                         <div class="form-top-left"> -->
<!--                             <h3>登录系统</h3> -->
<!-- <!--                             <p>输入您的用户名和密码登录：</p> -->
<!--                         </div> -->
<!--                         <div class="form-top-right"> -->
<!--                             <i class="fa fa-key"></i> -->
<!--                         </div> -->
                    </div>
                    <div class="form-bottom">
                        <form class="login-form" id="login-form" method="post" action="${root}/system/login" role="form">
                            <div class="form-group">
                            <span class="ztxs">用户名：</span>
                            <label for="form-username" class="sr-only">Username</label>
<%--                             	<div class="img" style="border-bottom:0px;"><img src="${root}/img/system/userName.png" style="width: 24px; height: 24px;border:0px;border-bottom:0px"></div> --%>
                                <input type="text" id="form-username" name="loginName" autofocus maxlength="20"
                                       class="form-username form-control" placeholder="请输入登录名...">
                            </div>
                            <div class="form-group">
                            <span class="ztxs">密码：</span>
                                <label for="form-password" class="sr-only">Password</label>
                                <input type="password" name="password" id="form-password"
                                       class="form-password form-control" placeholder="请输入登录密码...">
                            </div>
                            <button class="btn" type="submit">登&nbsp;&nbsp;录<img src="${root}/components/ztree/css/img/loading.gif" id="loginLoading"/></button>
                        </form>
                    </div>
                </div>
            </div>
        
        
        </div>
    </div>
</div>
<%-- <%
    String date;
    if (TimeHelper.getCurrentLocalTime("yyyy").equals("2016")) {
        date = "2016";
    } else {
        date = "2016-" + TimeHelper.getCurrentLocalTime("yyyy");
    }
%> --%>


<input name="msg" type="hidden" value="${sessionScope.msg}" id="msg">

<%
    session.removeAttribute(SystemConstant.SYS_USER_SESSION_KEY);
    session.removeAttribute("msg");
%>

<link href="${root}/components/jquery-jbox/2.3/Skins/Bootstrap/jbox.min.css" rel="stylesheet" />
<script src="${root}/components/jquery-jbox/2.3/jquery.jBox-2.3.min.js" type="text/javascript"></script>


<script src="${root}/components/jquery/jquery.min.js" type="text/javascript"></script>
<script src="${root}/components/jquery/jquery.backstretch.min.js" type="text/javascript"></script>
<script src="${root}/components/messenger/messenger.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="${root}/components/messenger/messenger.css"/>
<link rel="stylesheet" href="${root}/components/messenger/messenger-theme-future.css"/>
<script type="text/javascript">
   // 计算页面的摆放位置
     // 计算大小屏
	var height = window.screen.height;
	var width = window.screen.width;
	console.log(width)
	if(width <= 1280){
// 		$(".row").width("65%");
// 		$(".row").css("margin-left","50%");
		$(".form-box").css("margin-top","15%");
		$(".form-box").css("margin-left","33%");
		$(".form-bottom").css("width", "84%");
		$(".form-top").css("width", "84%");
		$(".form-group").css("margin-bottom","15px");
		$("button.btn").css("margin-top","15px");
		$(".form-top").css("padding","0");
	} 
	
	if(width>1280&&width<=1366){
// 		$(".row").width("65%");
// 		$(".row").css("margin-left","62%");
		$(".form-box").css("margin-top","17%");
		$(".form-box").css("margin-left","33%");
		$(".form-bottom").css("width", "84%");
		$(".form-top").css("width", "84%");
		$(".form-group").css("margin-bottom","15px");
		$("button.btn").css("margin-top","20px");
		$(".form-top").css("padding","0");
	}  

	
	if(width > 1366){
// 		$(".row").width("65%");
// 		$(".row").css("margin-left","62%");
		$(".form-box").css("margin-top","26%");
		$(".form-box").css("margin-left","43%");
		$(".form-bottom").css("width", "114%");
		$(".form-top").css("width", "114%");
		$(".form-group").css("margin-bottom","35px");
		$("button.btn").css("margin-top","65px");
		$(".form-top").css("padding","20px 0");
	}  


    var root='${root}';
    jQuery(document).ready(function () {
        if (window.history && window.history.pushState) {
            for(var i=0;i<window.history.length;i++){
                window.history.pushState('forward', null, '');
            }
        }
        $('.btn').removeAttr('disabled');
        $('#loginLoading').hide();
        sessionStorage.setItem("selectMenu", 'no-select');
        Messenger.options = {
            extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right'
        };
        Messenger.options = {
            extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right'
        }
        if($("#msg").val()!=""){
            Messenger().post({
                message: $("#msg").val(),
                type: 'error',
                hideAfter: 10,
                showCloseButton: true
            });
        }
        $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function () {
            $(this).removeClass('input-error');
        });
        $('.login-form').on('submit', function (e) {
            $(this).find('input[type="text"], input[type="password"]').each(function () {
                if ($(this).val() == "") {
                    e.preventDefault();
                    $(this).addClass('input-error');
                } else {
                    $(this).removeClass('input-error');
                }
            });
            if($('.input-error').length==0){
                $('.btn').attr('disabled',"true");
                $('#loginLoading').show();
                $.ajax({
                    type: 'POST',
                    url: root + '/system/login',
                    data:$("#login-form").serialize(),
                    success: function (data) {
                        if (data.state ==1) {
                            loadRes();//加载资源
                        }else{
                            $('.btn').removeAttr('disabled');
                            $('#loginLoading').hide();
                            Messenger().post({
                                message: data.msg,
                                type: 'error',
                                hideAfter: 2,
                                showCloseButton: true
                            });
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $('.btn').removeAttr('disabled');
                        $('#loginLoading').hide();
                        Messenger().post({
                            message: "系统繁忙,请稍后再试",
                            type: 'error',
                            hideAfter: 2,
                            showCloseButton: true
                        });
                    }
                });
            }
            return false;
        });
    });
    function loadRes(){
        $('.btn').html('正在系统加载资源,请稍后...<img src="${root}/components/ztree/css/img/loading.gif" id="loginLoading"/>');
        $.ajax({
            type: 'POST',
            url: root + '/system/loadRes',
            success: function (datas) {
                if (datas.state ==1) {
                    window.location.href=root+datas.url;
                }else{
                    $('.btn').html('登&nbsp;&nbsp;录<img src="${root}/components/ztree/css/img/loading.gif" id="loginLoading"/>');
                    $('.btn').removeAttr('disabled');
                    $('#loginLoading').hide();
                    Messenger().post({
                        message: "资源加载失败,请重试",
                        type: 'error',
                        hideAfter: 3,
                        showCloseButton: true
                    });
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('.btn').html('登&nbsp;&nbsp;录<img src="${root}/components/ztree/css/img/loading.gif" id="loginLoading"/>');
                $('.btn').removeAttr('disabled');
                $('#loginLoading').hide();
                Messenger().post({
                    message: "系统繁忙,请稍后再试",
                    type: 'error',
                    hideAfter: 3,
                    showCloseButton: true
                });
            }
        });
    }
</script>
</body>
</html>