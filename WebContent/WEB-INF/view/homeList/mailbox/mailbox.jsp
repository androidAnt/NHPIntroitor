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
				<img src="${root}/img/biao1.png"  >&nbsp;&nbsp;主席信箱
			</div>
			<hr >
				<form action="${root}/home/module/TbMailbox" method="get" class="messages">
			      <div class="messlist">
					  <label>姓名：</label>
					  <input type="text" disabled placeholder="姓名"  class="inputText" value="${name }">
					   <label>所属组织:</label>
					  <input type="text" disabled placeholder="所属组织" class="inputText" value="${orgName }">
			     </div>
				 <div class="messlist">
				 		<label for="title">主题<span style="color:red;">*</span></label>
				 		<input type="text" placeholder="主题最多输入50字" required maxlength="50" name="title" id="title" class="inputTextZt">
				 </div>
			     <div class="messlist ">
					  <label for="content">留言内容<span style="color:red;">*</span></label>
					  <textarea placeholder="留言内容最多输入300字" required maxlength="300" name="content" id="content" class="inputTextArea"></textarea>
			     </div>
			     <div class="clears"></div>
			     <div class="messsub">
			      <input type="submit" value="提交"  style="background:#00a3eb;color:#fff;" />
			      <input type="reset" value="重置" />
			     </div>
			</form>	
		</div>
		
		
		<jsp:include page="../../home/bottom.jsp"></jsp:include>	
</div>
</body>
</html>