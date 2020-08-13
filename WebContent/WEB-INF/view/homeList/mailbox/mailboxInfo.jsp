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
		
		<!-- 主席信箱 我要留言 -->
		<div class="mailbox-content">
			
			<div class="mailbox-img">
				<img src="${root}/img/biao1.png" >&nbsp;&nbsp;主席信箱
			</div>
			<hr >
				<form action="#" method="get" class="messages">
			      <div class="messlist">
					  <label>姓名：</label>
					  <input type="text" disabled placeholder="姓名" class="inputText" value="${mailbox.creatUser}">
					   <label>所属组织:</label>
					  <input type="text" disabled placeholder="所属组织" class="inputText" value="${mailbox.orgName}"> 
			     </div>
				 <div class="messlist">
				 		<label>主题：</label>
				 		<input type="text" disabled placeholder="主题" class="inputTextZt" value="${mailbox.title}">
				 </div>
			     <div class="messlist ">
					  <label>留言内容</label>
					  <textarea placeholder="留言内容" disabled class="inputTextArea">${mailbox.content}</textarea>
			     </div>
			      <div class="clears"></div>
				<c:if test="${mailbox.replierType==1}">
					<div class="messlist ">
						<label>回复内容</label>
						<textarea placeholder="回复内容" disabled class="inputTextArea">${mailbox.replierContent}</textarea>
					</div>
				</c:if>
				<c:if test="${mailbox.auditorType==2}">
					<div class="messlist ">
						<label>未通过理由</label>
						<textarea placeholder="未通过理由" disabled class="inputTextArea">${mailbox.auditorContent}</textarea>
					</div>
				</c:if>
				<div class="clears"></div>
			     <div class="messsub">
<!-- 			      <input type="submit" value="提交" style="background:#00a3eb;color:#fff;" /> -->
<!-- 			      <input type="button" value="返回" /> -->
			     </div>
			</form>	
		</div>
		
		
		<jsp:include page="../../home/bottom.jsp"></jsp:include>	
</div>
</body>
</html>