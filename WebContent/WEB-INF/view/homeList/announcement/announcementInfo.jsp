<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<%@ page import="com.bluebird.components.common.TimeHelper" %>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title><%=SystemConstant.SYS_NAME%></title>
	<link rel="shortcut icon" href="${root}/logo.png" type="image/x-icon"/>
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
	   <div class="article-list-content-info" style="width: 100%;">
			<div class="article-list-content-info-title">
				<img src="${root}/img/biao.png" >
				<span class="p1">通知公告</span>
			</div>
			<div class="article-info-content">
				<p class="title">${ghAnnouncement.announcementTitle }</p>
				<p class="time">时间:${ghAnnouncement.time }</p>
				<p class="content">${ghAnnouncement.announcementContent }</p>
			</div>
		</div>
		</div>
		
<jsp:include page="../../home/bottom.jsp"></jsp:include>	
</div>
</body>
</html>
