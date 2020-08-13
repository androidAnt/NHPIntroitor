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
				<div class="article-info-pic"> 
				<span id="prev" class="btn prev"></span> 
				<span id="next" class="btn next"></span> 
				<span id="prevTop" class="btn prev"></span> 
				<span id="nextTop" class="btn next"></span>
				
				  <div id="picBox" class="picBox">
				    <ul class="cf">
				    <c:forEach items="${GhContentManage.imgFileList}" var="con">
					 <li><a href="function:void(0)"><img style="object-fit: cover; width: 681px;height: 330px;" src="${root}/home/module/downloadById?fileId=${con.fileId}" /></a></li>
			     	</c:forEach>
				    </ul>
				  </div>
				  
				  <div id="listBox" class="listBox">
				    <ul class="cf">
				    <c:forEach items="${GhContentManage.imgFileList}" var="con" varStatus="status">
				       <c:if test="${status.index==0}">
					      <li class="on"><i class="arr2"></i><img  src="${root}/home/module/downloadById?fileId=${con.fileId}" /></li>
			     	   </c:if>
			     	   <c:if test="${status.index!=0}">
					      <li><i class="arr2"></i><img src="${root}/home/module/downloadById?fileId=${con.fileId}" /></li>
			     	   </c:if>
			     	</c:forEach>
				    </ul>
				  </div>
				  
				</div>
				
				
				<p class="content">${GhContentManage.summary}</p>
			</div>
		</div>
		</div>
		
		<jsp:include page="../../home/bottom.jsp"></jsp:include>	
</div>
<script>
var data = '${byCondition.contentTypeId }';
	$("#"+data).css({"background": "#b9e1fb"});
	(function(){
	       function G(s) {
	           return document.getElementById(s);
	       }
	       function getStyle(obj, attr) {
	           if (obj.currentStyle) {
	               return obj.currentStyle[attr];
	           } else {
	               return getComputedStyle(obj, false)[attr];
	           }
	       }
	       function Animate(obj, json) {
	           if (obj.timer) {
	               clearInterval(obj.timer);
	           }
	           obj.timer = setInterval(function(){
	               for (var attr in json) {
	                   var iCur = parseInt(getStyle(obj, attr));
	                   iCur = iCur ? iCur : 0;
	                   var iSpeed = (json[attr] - iCur) / 5;
	                   iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
	                   obj.style[attr] = iCur + iSpeed + 'px';
	                   if(iCur == json[attr]){
	                       clearInterval(obj.timer);
	                   }
	               }
	           }, 30);
	       }
	
	       var oPic = G("picBox");
	       var oList = G("listBox");
	
	       var oPrev = G("prev");
	       var oNext = G("next");
	       var oPrevTop = G("prevTop");
	       var oNextTop = G("nextTop");
	
	       var oPicLi = oPic.getElementsByTagName("li");
	       var oListLi = oList.getElementsByTagName("li");
	       var len1 = oPicLi.length;
	       var len2 = oListLi.length;
	
	       var oPicUl = oPic.getElementsByTagName("ul")[0];
	       var oListUl = oList.getElementsByTagName("ul")[0];
	       var w1 = oPicLi[0].offsetWidth;
	       var w2 = oListLi[0].offsetWidth;
	
	       oPicUl.style.width = w1 * len1 + "px";
	       oListUl.style.width = w2 * len2 + "px";
	
	       var index = 0;
	
	       var num = 5;
	       var num2 = Math.ceil(num / 2);
	
	       function Change() {
	
	           Animate(oPicUl, {left: - index * w1});
	
	           if(index < num2){
	               Animate(oListUl, {left: 0});
	           }else if(index + num2 <= len2){
	               Animate(oListUl, {left: - (index - num2 + 1) * w2});
	           }else{
	               Animate(oListUl, {left: - (len2 - num) * w2});
	           }
	
	           for (var i = 0; i < len2; i++) {
	               oListLi[i].className = "";
	               if(i == index){
	                   oListLi[i].className = "on";
	               }
	           }
	       }
	       oNextTop.onclick = oNext.onclick = function(){
	           index ++;
	           index = index == len2 ? 0 : index;
	           Change();
	       }
	       oPrevTop.onclick = oPrev.onclick = function(){
	           index --;
	           index = index == -1 ? len2 -1 : index;
	           Change();
	       }
	       for (var i = 0; i < len2; i++) {
	           oListLi[i].index = i;
	           oListLi[i].onclick = function(){
	               index = this.index;
	               Change();
	           }
	       }
	       })()
</script> 
</body>
</html>
