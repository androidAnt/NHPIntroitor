<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<%@ page import="com.bluebird.components.common.TimeHelper" %>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>
<!DOCTYPE html>
<html lang="zh-CN">
	<head>
		<meta charset="UTF-8" />
		<meta name="renderer" content="webkit" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0,uc-fitscreen=yes" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
		<meta name="format-detection" content="telephone=no" />
		<title>用户登录</title>
		<meta name="keywords" content="miniMobile的demo" />
		<meta name="description" content="miniMobile是一个简单易用的移动框架！" />
		<!-- miniMObile.css、js -->
		<link rel="stylesheet" type="text/css" href="${root}/css/miniMobile.css"/>
		<script type="text/javascript" src="${root}/js/zepto.min.js"></script>
		<script type="text/javascript" src="${root}/js/miniMobile.js"></script>
		<!-- iconfont -->
		<link rel="stylesheet" type="text/css" href="${root}/components/plugins/fonticon/iconfont.css" />
	</head>

	<body class="pb12 fadeIn animated">
		<header class="ui-header clearfix w75 h8 f46 pl3 pr3 color8 bg-color-primary t-c o-h">
			<div class="ui-header-l fl w5" >
				<!-- <b class="icon iconfont icon-sortlight"></b> -->
			</div>
			<div class="ui-header-c fl f30 w64">
				用户登录
			</div>
			<div>
				<input type="image" style="width: 21px;height: 21px;padding-top: 2px;padding-right: 2px;" src="${root }/img/return.png"   onclick="javascript:history.go(-1);"/>
			</div>
		</header>
		
		<div class="p3 f30 f30 w75">
			<form>
				<div class="pt2 pb2">
					<label class="label-class">用户名：</label>
					<input type="text" class="w45  form-control" id="loginName" placeholder="输入用户名" />
				</div>
				<div class="pt2 pb2">
					<label class="label-class">密码：</label>
					<input type="password" class="w45  form-control" id="password" placeholder="输入密码" />
				</div>
				<div class="t-c mt5">
					<input type="button" id="userCheck" class="btn f30 btn-primary radius10 p2 w20" value="登 录" />
				</div>
			</form>
		</div>
		<jsp:include page="bottom.jsp"></jsp:include>
		<form id="appModule" action="${root}/app/module">
		</form>
	</body>
	<script type="text/javascript">
    $("#userCheck").click(function(){
		var loginName = $("#loginName").val();
		var password = $("#password").val();
		if(loginName.length==0 || password.length==0 ){
			alert("用户名或密码不能为空！")
		}else{
			  $.ajax({
			  async: false,
	  	   	  url  : '${root}/app/module/loginUserAjax',
	  	      type : "post",
	  	      data:{"loginName":loginName,"password":password},
	  	    success : function(res) {
	  	       if (res) {
		  	       $("#loginName").val("");
		  	       $("#password").val("");
		  	      $("#appModule").submit();
	  	       }else{
	  	       		alert("用户名或密码错误！")
	  	       }
	  	     }
	  	  });
		}
	})
	</script>
</html>