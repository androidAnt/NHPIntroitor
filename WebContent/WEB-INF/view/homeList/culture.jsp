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
<script type="text/javascript"
	src="${root}/components/jquery/jquery.min.js"></script>
<script type="text/javascript"
	src="${root}/js/index.js"></script>
<script type="text/javascript" src="${root}/js/pgwslider.min.js"></script>
</head>

<body style="background: white;">
<jsp:include page="../home/head.jsp"></jsp:include>
<div class="box">

		<div class="zgwh-info-content">
		<c:if test="${not empty GhContentType[0].contentTypeName}">
						<div class="zgwh-info-content-nr1">
				<div class="zgwh-info-content-nr1-title">
					<p class="p1">职工.${GhContentType[0].contentTypeName}  <span class="rightMore"><a href="${root}/home/module/listInfo?id=${GhContentType[0].contentTypeId}">更多</a></span></p>
					<p class="p2">——————————</p>
				</div>
				
				<div class="zgwh-info-content-nr1-zs">
					<ul class="stadium">
					<c:forEach items="${GhContentType[0].contentManageList}"
								var="content" begin="0" end="3">
								<li>
							<a href="${root}/home/module/details?id=${content.contentId}" class="a1">
								<img src="${root}/home/module/downloadById?fileId=${content.fileId}">
								<div class ="divA">
									<p class="p1">${content.contentTitle}</p>
									<p class="p2">${content.summary}</p>
								</div>
							</a>
						</li>
							</c:forEach>
					</ul>
				</div>
			</div>
			</c:if>
			<c:if test="${not empty GhContentType[1].contentTypeName}">
			<div class="zgwh-info-content-nr2">
				<img src="${root}/img/zhengwen.jpg" >
				<ul class="indexNewsList">
				<c:forEach items="${GhContentType[1].contentManageList}" var="content" begin="0" end="2">
					<li class="col-xs-12 col-sm-6 col-md-6">
					    <a href="${root}/home/module/details?id=${content.contentId}">
					    <div class="author">
								<p class="zz"><span style="font-size: 16px; color: red;">${content.creatUser}</span><span style="color: #000000;">&nbsp;${content.orgName}</span></p>
								<p class="zxsj"><span>${content.creatDate}征选</span></p>
							</div>
					        <div class="img" style="background-image: url(${root}/home/module/downloadById?fileId=${content.fileId})"></div>
					        <div class="txt">
					            <span class="title">
					                ${content.contentTitle}
					            </span>
					            <!-- <span class="time">[ 2017-01-01 ]</span> -->
					            <p>
					                ${content.summary}
					            </p>
								<span class="moreInfo" style="float: right">了解详情</span>
					        </div>
							 <!-- <div class="img" style="background-image: url(img/1.png)"></div> -->
					    </a>
					</li>
				</c:forEach>
				</ul>
			</div>
			</c:if>
			
		<c:if test="${not empty GhContentType[2].contentTypeName}">
			<div class="zgwh-info-content-nr1">
				<div class="zgwh-info-content-nr1-title">
					<p class="p1">职工.${GhContentType[2].contentTypeName} <span class="rightMore"><a href="${root}/home/module/listInfo?id=${GhContentType[2].contentTypeId}">更多</a></span></p>
					<p class="p2">——————————</p>
				</div>
				<div class="zgwh-info-content-nr1-zs">
					<ul class="pgwSlider">
					<c:forEach items="${GhContentType[2].contentManageList}"
								var="content" begin="0" end="3">
								<li onclick="details('${content.contentId}')"><img src="${root}/home/module/downloadById?fileId=${content.fileId}"><span>${content.contentTitle}</span></li>
					</c:forEach>
					</ul>
				</div>
				
			</div>
			</c:if>
		<c:if test="${not empty GhContentType[3].contentTypeName}">
		<div class="zgwh-info-content-nr1">
			<div class="zgwh-info-content-nr1-title">
				<p class="p1">职工.${GhContentType[3].contentTypeName}<span class="rightMore"><a href="${root}/home/module/listInfo?id=${GhContentType[3].contentTypeId}">更多</a></span></p>
				<p class="p2">——————————</p>
			</div>
					<div class="zgwh-info-content-nr1-zs">
						<ul class="infoArticleList">
							<c:forEach items="${GhContentType[3].contentManageList}"
								var="content" begin="0" end="3">
								<li class="col-xs-12 col-sm-6 col-md-6"><a
									href="${root}/home/module/details?id=${content.contentId}">
										<div class="img" style="background-image: url(${root}/home/module/downloadById?fileId=${content.fileId})"></div>
										<div class="txt">
											<span class="title">${content.contentTitle} </span> <span
												class="time"> ${content.creatDate}</span>
											<p>
											 ${content.summary}
											</p>
										</div>
								</a></li>
							</c:forEach>
						</ul>
					</div>
				</div>
				</c:if>
		<c:if test="${not empty GhContentType[4].contentTypeName}">
		<div class="zgwh-info-content-nr1">
			<div class="zgwh-info-content-nr1-title">
				<p class="p1">职工.${GhContentType[4].contentTypeName} <span class="rightMore"><a href="${root}/home/module/listInfo?id=${GhContentType[4].contentTypeId}">更多</a></span></p>
				<p class="p2">——————————</p>
			</div>
					<div class="zgwh-info-content-nr1-zs">
						<ul id="container" class="clearfix">
							<c:forEach items="${GhContentType[4].contentManageList}"
								var="content" begin="0" end="4" varStatus="status">
								<c:if test="${status.index==0}">
								<li onclick="details('${content.contentId}')" class="sh-li"><img class="img" src="${root}/home/module/downloadById?fileId=${content.fileId}">
									<p class="sh-p">
										<span> ${content.contentTitle}</span> <a target="_blank"
											href="#"></a> <i></i>
									</p></li>
								</c:if>
								<c:if test="${status.index!=0}">
								<li onclick="details('${content.contentId}')"><img class="img" src="${root}/home/module/downloadById?fileId=${content.fileId}">
									<p>
										<span> ${content.contentTitle}</span> <a target="_blank"
											href="#"></a> <i></i>
									</p></li>
									</c:if>
							</c:forEach>
						</ul>
					</div>
				</div>
				</c:if>
	<c:if test="${not empty GhContentType[5].contentTypeName}">		
		<div class="zgwh-info-content-nr1">
			<div class="zgwh-info-content-nr1-title">
				<p class="p1">职工.${GhContentType[5].contentTypeName}  <span class="rightMore"><a href="${root}/home/module/listInfo?id=${GhContentType[5].contentTypeId}">更多</a></span></p>
				<p class="p2">——————————</p>
			</div>
			
			<div class="zgwh-info-content-nr1-zs">
				<ul class="stadium">
				<c:forEach items="${GhContentType[5].contentManageList}"
								var="content" begin="0" end="3">
					<li>
						<a href="${root}/home/module/details?id=${content.contentId}" class="a1">
							<img src="${root}/home/module/downloadById?fileId=${content.fileId}">
							<div class ="divA">
								<p class="p1">${content.contentTitle}</p>
								<p class="p2">${content.summary}</p>
							</div>
						</a>
					</li>
					</c:forEach>
				</ul>
			</div>
		</div>
		</c:if>
		<c:if test="${not empty GhContentType[6].contentManageList}">
		<div class="zgwh-info-content-nr1">
			<div class="zgwh-info-content-nr1-title">
				<p class="p1">职工.其他  <span class="rightMore"><a href="${root}/home/module/listInfo?id=${GhContentType[6].contentTypeId}">更多</a></span></p>
				<p class="p2">——————————</p>
			</div>
			
			<div class="zgwh-info-content-nr1-zs">
				<ul class="stadium">
							<c:forEach items="${GhContentType[6].contentManageList}"
								var="content" begin="0" end="3">
								<li><a href="${root}/home/module/details?id=${content.contentId}" class="a1"> <img src="${root}/home/module/downloadById?fileId=${content.fileId}">
										<div class="divA">
											<p class="p1">${content.contentTitle}</p>
											<p class="p2">${content.summary}</p>
										</div>
								</a></li>
							</c:forEach>
						</ul>
			</div>
		</div>
		</c:if>
		</div>
		
		<jsp:include page="../home/bottom.jsp"></jsp:include>	
</div>

<script>
   function details(id){
    window.location.href="${root}/home/module/details?id="+id;
   }

   $("#container li").each(function(){
	   $(this).on('mouseenter',function(e){
		   var e=e||window.event;
		   var angle=direct(e,this)
		   mouseEvent(angle,this,'in')
	   })
	   $(this).on('mouseleave',function(e){
		   var e=e||window.event;
		   var angle=direct(e,this)
		   mouseEvent(angle,this,'off')
	   })
   })
   function direct(e,o){
	 var w=o.offsetWidth;
	 var h=o.offsetHeight;
	 var top= o.offsetTop;                    //包含滚动条滚动的部分
	 var left= o.offsetLeft;
	 var scrollTOP=document.body.scrollTop||document.documentElement.scrollTop;
	 var scrollLeft=document.body.scrollLeft||document.documentElement.scrollLeft;
	 var offTop=top-  scrollTOP;
	 var offLeft= left- scrollLeft;
	 var ex= (e.pageX-scrollLeft)|| e.clientX;
	 var ey=(e.pageY-scrollTOP)|| e.clientY;
	 var x=(ex-offLeft-w/2)*(w>h?(h/w):1);
	 var y=(ey-offTop-h/2)*(h>w?(w/h):1);

	 var angle=(Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90)+3)%4 //atan2返回的是弧度 atan2(y,x)
	 var directName=["上","右","下","左"];
	 return directName[angle];  //返回方向  0 1 2 3对应 上 右 下 左
   }
   function mouseEvent(angle,o,d){ //方向  元素  鼠标进入/离开
	   var w=o.offsetWidth;
	   var h=o.offsetHeight;

	   if(d=='in'){
		   switch(angle){
			   case '上':
				   $(o).find("p").css({left:0,top:-h+"px"}).stop(true).animate({left:0,top:0},300)
					setTimeout(function(){
						$(o).find("p a").css({left:'50%',top:-h+"px"}).stop(true).animate({left:'50%',top:'20px'},300)
					},200)
				   break;
			   case '右':
				   $(o).find("p").css({left:w+"px",top:0}).stop(true).animate({left:0,top:0},300)
				   setTimeout(function(){
					   $(o).find("p a").css({left:w+"px",top:'20px'}).stop(true).animate({left:'50%',top:'20px'},300)
				   },200)
				   break;
			   case '下':
				   $(o).find("p").css({left:0,top:h+"px"}).stop(true).animate({left:0,top:0},300)
				   setTimeout(function(){
					   $(o).find("p a").css({left:'50%',top:h+"px"}).stop(true).animate({left:'50%',top:'20px'},300)
				   },200)
				   break;
			   case '左':
				   $(o).find("p").css({left:-w+"px",top:0}).stop(true).animate({left:0,top:0},300)
				   setTimeout(function(){
					   $(o).find("p a").css({left:-w+"px",top:'20px'}).stop(true).animate({left:'50%',top:'20px'},300)
				   },200)
				   break;
		   }
	   }else if(d=='off'){
		   switch(angle){
			   case '上':
				   $(o).find("p a").stop(true).animate({left:'50%',top:-h+"px"},300)
				   setTimeout(function(){
					   $(o).find("p").stop(true).animate({left:0,top:-h+"px"},300)
				   },200)
				   break;
			   case '右':
				   $(o).find("p a").stop(true).animate({left:w+"px",top:'20px'},300)
				   setTimeout(function(){
					   $(o).find("p").stop(true).animate({left:w+"px",top:0},300)
				   },200)
				   break;
			   case '下':
				   $(o).find("p a").stop(true).animate({left:'50%',top:h+"px"},300)
				   setTimeout(function(){
					   $(o).find("p").stop(true).animate({left:0,top:h+"px"},300)
				   },200)
				   break;
			   case '左':
				   $(o).find("p a").stop(true).animate({left:-w+"px",top:'20px'},300)
				   setTimeout(function(){
					   $(o).find("p").stop(true).animate({left:-w+"px",top:0},300)
				   },200)
				   break;
		   }
	   }
   }
   
   $(document).ready(function() {
		$('.pgwSlider').pgwSlider();
   });
   
</script> 
</body>
</html>
	