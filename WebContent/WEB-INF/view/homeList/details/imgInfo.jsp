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
			<!-- 导航 -->
			<div class="picture-list-content-leftdh">
					<div class="content-js">
							${GhContentType[0].menuName}
					</div>
					<div>
						<ul>
							<c:forEach items="${GhContentType}"
								var="content">
								<li tabindex='1' id="${content.contentTypeId}"><a href="${root}/home/module/listInfo?id=${content.contentTypeId}">${content.contentTypeName}</a></li>
							</c:forEach>
							<%-- <li tabindex='1' ><a href="${root}/home/module/tbPolicies?id=${GhContentType[0].menuId}">法律法规</a></li>
							<li tabindex='1' ><a href="${root}/home/module/tbFileDownload?id=${GhContentType[0].menuId}">资料下载</a></li> --%>
						</ul>
					</div>
					<div style="height: 30px; background: white;"></div>
				</div>
		
			<!-- 图片列表 -->
		<div class="article-list-content-info">
			
			<div class="article-list-content-info-title">
				<img src="${root}/img/biao1.png" >
				<span class="p1">${byCondition.contentTypeName}</span>
			</div>
			<div class="article-info-content">
				<p class="title">${GhContentManage.contentTitle}</p>
				<p class="time">时间:${GhContentManage.creatDate}</p>
				<div class="article-info-img"> 
				  <div id="picBox" class="picBox">
				    <ul class="cf">
				    <c:forEach items="${GhContentManage.imgFileList}" var="con">
					 <li><a href="function:void(0)"><img style="object-fit: cover;max-width: 650px;height: auto;" src="${root}/home/module/downloadById?fileId=${con.fileId}" /></a></li>
			     	</c:forEach>
				    </ul>
				  </div>
				</div>
				<c:if test="${not empty GhContentManage.contentDetail}">
				<p class="content">${GhContentManage.contentDetail}</p>
				</c:if>
				<c:if test="${not empty GhContentManage.contentUrl}">
				<p class="content">内容连接:<a class="content-fj-a" href="${GhContentManage.contentUrl}">${GhContentManage.contentUrl}</a></p>
				</c:if>
				<c:if test="${not empty GhContentManage.fileList}">
				<p>附件列表:
                <c:forEach items="${GhContentManage.fileList}" var="con">
				 <p class="content-fj-nr">
				 <a class="content-fj-a" href="${root}/home/module/downloadById?fileId=${con.fileId}">
				 ${con.name}
				 <span>下载</span>
				 </a>
				 </p>
				 </c:forEach>
				</p>
				</c:if>
				</div>
		</div>
		</div>
		
		<jsp:include page="../../home/bottom.jsp"></jsp:include>	
</div>

<script>
var data = '${byCondition.contentTypeId }';
	$("#"+data).css({"background": "#b9e1fb"});
</script>
</body>
</html>
