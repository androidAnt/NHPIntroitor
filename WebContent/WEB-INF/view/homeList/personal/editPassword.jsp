<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<%@ page import="com.bluebird.components.common.TimeHelper" %>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title><%=SystemConstant.SYS_NAME%></title>
<link rel="stylesheet" href="${root}/css/page.css" />
		<link rel="shortcut icon" href="${root}/logo.png" type="image/x-icon"/>
	<link rel="stylesheet" href="${root}/components/ace/css/font.min.css"/>
<link href="${root}/css/info.css" rel="stylesheet">
<link rel="stylesheet" href="${root}/css/header.css" />
<link rel="stylesheet" href="${root}/css/index.css" />
<link href="${root}/css/list.css" rel="stylesheet">
<script type="text/javascript"
	src="${root}/components/jquery/jquery.min.js"></script>
<script type="text/javascript"
	src="${root}/js/index.js"></script>
</head>

<body style="background: white;">
<jsp:include page="../../home/head.jsp"></jsp:include>
<div class="box">
	
		<div class="picture-list-content">
			<div class="picture-list-content-leftdh">
					<div class="content-js">
						个人中心
					</div>
					<div>
						<ul>
							<li tabindex='1'><a href="${root }/home/module/MyTbMailbox">我的留言</a></li>
							<c:if test="${ isMember}">
							<li tabindex='1'><a href="${root }/home/module/initiation">我要入会</a></li>
							</c:if>
							<c:if test="${not isMember}">
							<li tabindex='1'><a href="${root }/home/module/member">会员信息</a></li>
							</c:if>
							<li tabindex='1' id="66666"><a href="${root }/home/module/getUserEdit">修改密码</a></li>
						</ul>
					</div>
					<div style="height: 30px; background: white;"></div>
			</div>
			
		<div class="article-list-content-info">
			<div class="article-list-content-info-title">
				<img src="${root }/img/biao1.png" >
				<span class="p1">修改密码</span>
			</div>
			<hr >
		<form action="${root }/home/module/userEdit" method="post" class="editPassword" id="backForm" >
		      <div class="messlist">
				  <label>旧密码：</label>
				  <input type="password"  placeholder="请输入旧密码" class="inputText" id="password66">
		     </div>
			 <div class="messlist">
			 		<label>新密码：</label>
			 		<input type="password" placeholder="请输入新密码" class="inputText" name="passwordNew" id="passwordNew" >
			 </div>
			  <div class="messlist">
			 		<label>确认密码：</label>
			 		<input type="password" placeholder="请再次确认密码" class="inputText" name="newPassword" id="newPassword">
			 </div>
		     <div class="clears"></div>
		     <div class="messsub">
		      <input type="button" id="doSubmit" value="提交"  style="background:#00a3eb;color:#fff;" />
		      <input type="reset" value="重置" />
		     </div>
		</form>	
		</div>
		
		</div>
		
		<jsp:include page="../../home/bottom.jsp"></jsp:include>	
</div>
<script>
// 	var data = '${byCondition.contentTypeId }';
	$("#66666").css({"background": "#b9e1fb"});
	$("#doSubmit").click(function() {
		var data = new FormData();
		data.append("password", $("#password66").val());
		//此处模拟上拉加载返回的数据
		$.ajax({
			url : "${root}/home/module/oldPassword",
			type : "post",
			data : data,
			async : false,
			dataType : "JSON",
			processData : false,
			contentType : false,
			success : function(data) {
				if (data) {
					if ($("#passwordNew").val() == $("#newPassword").val()) {
						// 			 $("#backForm").submit();
						edit();
					} else {
						alert("新密码不一致！")
					}
				} else {
					alert("旧密码错误！")
				}
			}
		})
	})
	function edit(){
	var data = new FormData();
		data.append("passwordNew", $("#passwordNew").val());
		data.append("newPassword", $("#newPassword").val());
	$.ajax({
			url : "${root}/home/module/userEdit",
			type : "post",
			data : data,
			async : false,
			dataType : "JSON",
			processData : false,
			contentType : false,
			success : function(data) {
				if(data){
				  alert("修改成功！")
				}else{
				  alert("修改失败！")
				}
			}
		})
	}
</script> 
</body>
</html>