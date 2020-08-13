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
		<!-- miniMObile.css、js -->
		<link rel="stylesheet" type="text/css" href="${root}/css/miniMobile.css"/>
		
		<script type="text/javascript" src="${root}/js/zepto.min.js"></script>
		<script type="text/javascript" src="${root}/js/miniMobile.js"></script>
		<!-- fonticon -->
		<link rel="stylesheet" type="text/css" href="${root}/components/plugins/fonticon/iconfont.css" />
		<!-- <link type="text/css" href="css/jq22.css" rel="stylesheet" /> -->
		<!-- <script src="http://www.jq22.com/jquery/1.8.3/jquery.min.js"></script> -->
		<script type="text/javascript" src="${root}/js/jq22.js"></script>
		<script type="text/javascript" src="${root}/js/jquery-2.1.3.min.js"></script>
	</head>

	<body class="fadeIn animated">
		<div class="index-header-mobile">
		<div class="search">
			<form action="${root}/app/module/search">
				<input class="searchInput" name="name" type="text" placeholder="搜索从这里开始...">
				<input type="hidden" name="isShow" type="text" value="0">
				<button class="searchButton" type="submit">
					<img style="width: 30px !important;" class="btn-img"
						src="${root }/img/search.png" />
				</button>
			</form>
		</div>
		<img src="${root }/img/headerBg.png" />
		</div>
		 <!-- 通知公告 -->
		 <div class="box">
		 	<div class="t_news">
		 		<b><img style="width: 15px;" src="${root}/img/lingdang.png">&nbsp;公告：</b>
		 		<ul class="news_li">
		 		<c:forEach items="${announcementList}" var="announcemen" >
		 			<li><a href="${root}/app/module/announcementInfo?id=${announcemen.announcementId}&isShow=${isShow}" >${announcemen.announcementTitle}</a></li>
		 		</c:forEach>
		 		</ul>
		 		<ul class="swap"></ul>
		 		<span style="float: right; padding-right: 20px;"><a href="${root}/app/module/announcementList?isShow=${isShow}"> > </a></span>
		 	</div>
		 </div>

		<!-- 跳转到疫情防控 -->
		<%-- <a href="${root}/app/module/toEpidemic?isShow=3" target="_self">
		<div style="width: 90%; height: 50px;background: #22B8DD;margin-left: 5%;">
		疫情防控
		</div> --%>
			</a>
		 <!-- 菜单 -->
		<div class="index-nav-mobile">
			<ul>
				<c:forEach items="${ghMenuManage}" var="ghMenuManage" >
				<li><a href="${root}/app/module/list?menuId=${ghMenuManage.menuId}&isShow=${isShow}">${ghMenuManage.menuName}<img src="${root}/home/module/downloadById?fileId=${ghMenuManage.imgUuid}" ></a></li>
				</c:forEach>
				<!-- 判断用户是否登录 -->
				<c:if test="${not empty user.suId}" >
				<li><a href="${root}/app/module/toEpidemic?isShow=3">疫情防控 <img src="${root}/img/web/yiqing.png" > </a></li>
				</c:if>
				
			</ul>
		</div>
		<jsp:include page="bottom.jsp"></jsp:include>
	</body>
	<script type="text/javascript">
		
		window.onload = function() {
			$('#menu ul li').each(function(j) {
				$('#menu ul li').eq(j).removeClass("on");
				$('#menu ul li span').eq(j).animate({
					bottom: -$('#menu ul li span').eq(j).height()-20
				}, 100);
			});
		}
		
			
	</script>
</html>