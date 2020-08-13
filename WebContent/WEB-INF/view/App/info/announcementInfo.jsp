<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<%@ page import="com.bluebird.components.common.TimeHelper" %>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>
<!doctype html>
<html>
<head>
		<meta charset="UTF-8" />
		<meta name="renderer" content="webkit" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0,uc-fitscreen=yes" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
		<meta name="format-detection" content="telephone=no" />
		<title><%=SystemConstant.SYS_NAME%></title>
		<meta name="keywords" content="miniMobile的demo" />
		<meta name="description" content="miniMobile是一个简单易用的移动框架！" />
		<!-- ui css、js -->
		<link rel="stylesheet" type="text/css" href="${root }/css/miniMobile.css"/>
		<script type="text/javascript" src="${root }/js/zepto.min.js"></script>
		<script type="text/javascript" src="${root }/js/miniMobile.js"></script>
		<!-- 字体图标 -->
		<link rel="stylesheet" type="text/css" href="${root}/components/plugins/fonticon/iconfont.css" />
		<!-- swiper -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.5/css/swiper.min.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.5/js/swiper.min.js"></script>
		<!-- animate.css -->
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
	</head>
<body class="fadeIn animated">
		<header class="ui-header clearfix w75 h8 f46 pl3 pr3 color8 bg-color-primary t-c o-h">
			<div class="ui-header-l fl w5">
<!-- 				<b class="icon iconfont icon-sortlight"></b> -->
			</div>
			<div class="ui-header-c fl f30 w64">
				通知公告
			</div>
			<div >
<%-- 				<a href="${root}/app/module" class="icon color8 iconfont icon-home_light"></a> --%>
			<input type="image" style="width: 21px;height: 21px;padding-top: 2px;padding-right: 2px;" src="${root }/img/return.png"   onclick="javascript:history.go(-1);"/>
			</div>
		</header>
		<div class="t-c p6 f46 color5">
			<div class="article-info">
				<p class="info-title">${ghAnnouncement.announcementTitle }</p>
				<p class="info-time"> 时间:${ghAnnouncement.time }</p>
				<div style="text-align: left;">
				<p  class="info-content"> 
				${ghAnnouncement.announcementContent }
				</p>
				</div>
			</div>
		</div>
		<nav class="demo-bottomNav mt6  h12 pt1 t-c f28 bg-color8 o-h clearfix">
			<jsp:include page="../bottom.jsp"></jsp:include>
		</nav>
		<!-- aside left-->
		<aside class="ui-aside asideLift w40 bg-color-primary">
<!-- 			<ul class="nav-cl"> -->
<%-- 				<c:forEach items="${GhContentTypeList}" var="ContentType" > --%>
<%-- 				<li><a href="${root}/app/module/contentType?id=${ContentType.contentTypeId}">${ContentType.contentTypeName}</a></li> --%>
<%-- 				</c:forEach> --%>
<!-- 			</ul> -->
		</aside>
		<script type="text/javascript">
			//左侧
			var asideLift = $(".asideLift").asideUi({
				hasmask: true,
				size: "4rem",
				position: "left",
				sidertime: 300
			});
			$(".ui-header-l,.btnLeft").tap(function(event) {
				asideLift.toggle();
				event.preventDefault();
			});
		</script>
	</body>

</html>