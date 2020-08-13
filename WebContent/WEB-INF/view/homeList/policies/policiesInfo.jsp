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
<link href="${root}/css/info.css" rel="stylesheet">
<link rel="stylesheet" href="${root}/css/header.css" />
<link rel="stylesheet" href="${root}/css/index.css" />
<link rel="shortcut icon" href="${root}/logo.png" type="image/x-icon"/>
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
			<!-- 导航 -->
			<div class="picture-list-content-leftdh">
					<div class="content-js">
						${GhMenuManage.menuName}
					</div>
					<div>
						<ul>
							<c:forEach items="${GhContentType}"
								var="content">
								<li tabindex='1' id="${content.contentTypeId}"><a href="${root}/home/module/listInfo?id=${content.contentTypeId}">${content.contentTypeName}</a></li>
							</c:forEach>
							<%-- <li tabindex='1' id="888888"><a href="${root}/home/module/tbPolicies?id=${GhMenuManage.menuId}">法律法规</a></li>
							<li tabindex='1' ><a href="${root}/home/module/tbFileDownload?id=${GhMenuManage.menuId}">资料下载</a></li> --%>
						</ul>
					</div>
					<div style="height: 30px; background: white;"></div>
				</div>
		
			<!-- 图片列表 -->
		<div class="article-list-content-info">
			
			<div class="article-list-content-info-title">
				<img src="${root}/img/biao1.png" >
				<span class="p1">资料下载</span>
			</div>
			<div class="article-info-content">
				<p class="title">${policies.policiesName}</p>
				<p class="time">时间:${policies.creatDate}</p>
				<p class="content">${policies.policiesContent}</p>
				<c:if test="${not empty policies.fileList}">
				<p>附件列表:
                <c:forEach items="${policies.fileList}" var="con">
				 <p>${con.name}<a href="${root}/home/module/downloadById?fileId=${con.fileId}" style="float:right">下载</a></p>
				 </c:forEach>
				</p>
				</c:if>
			</div>
		</div>
		</div>
		
	<jsp:include page="../../home/bottom.jsp"></jsp:include>	
</div>
<script>
	$("#888888").css({"background": "#b9e1fb"});
</script> 
</body>
</html>
