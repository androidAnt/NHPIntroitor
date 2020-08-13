<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<%@ page import="com.bluebird.components.common.TimeHelper" %>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta charset="utf-8" />
<title><%=SystemConstant.SYS_NAME%></title>
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<link rel="stylesheet" href="${root}/css/header.css" />
<link rel="stylesheet" href="${root}/css/index.css" />
<link rel="shortcut icon" href="${root}/logo.png" type="image/x-icon"/>
<script type="text/javascript"
	src="${root}/components/jquery/jquery.min.js"></script>
<script type="text/javascript"
	src="${root}/js/index.js"></script>
<script type="text/javascript"
	src="${root}/js/jq22.js"></script>
	<script type="text/javascript"
	src="${root}/js/bootstrap.min.js"></script>
<style type="text/css">
	.flbj img{
		width: 25px;
		height: 25px;
		padding: 7px 7px 4px 7px;
	}
	.flbj .cd{
		color: #4c4c4c;	
		margin: -26px 0px 0px 40px;
	}
	.flbj{
		margin-top: 0px;
		border-bottom: 0.5px solid #e3e2e1;
	}
	#wrap ul{
		margin-top: 50px;
	}
	#wrap{
		border: 0px;
	}
	.content-list{
		padding: 47px 10px 10px 20px;
	}
	.content-title{
		border-radius: 0px;
	}
	#news{
		border: 0px;
	}
	.pavilion-container .pavilion-inner{
		border: 0px;
	}
	.aui-content-box-list{
		top: 11px;
	}
	.next{
		top: 45%;
	}
	.prev{
		top: 45%;
	}
	.wrap .lybutton a{
		margin-top: 7px;
	}
</style>
</head>
<body>

<jsp:include page="head.jsp"></jsp:include>

<c:forEach items="${module}" var="mo" varStatus="status">
	<!-- 首页图片 linkId=内容id -->
	<c:if test="${mo.level1==1}">
		<div  id="${mo.id}" 
			style="width:${mo.width}px;height: ${mo.height}px; top: ${mo.top}px; left:${mo.theLeft}px;position: absolute; ">
			<div class="left"
				style=" float: lef;width: 75%;height: 100%; position: absolute;">
				<ul>
					<c:forEach items="${homeImg}" var="hoImg" varStatus="status">
					<c:if test="${status.index==0}">
					<li id="${hoImg.linkId}" onclick="imgDetails()" class="active" style="opacity:1;position: absolute;"><img
							style="width:${mo.width*0.74}px;height:${mo.height}px;object-fit: cover;"
							src="${root}/home/module/downloadTem?filePath=${hoImg.url}"/>
							
							<div class="index-content-imgLb">
							<span style="padding-left: 10px;">${hoImg.linkTile}</span>
							</div>
							
							<%-- <span class="" style="position: absolute; bottom: 0;left: 0;">${hoImg.linkTile}</span> --%>
							</li>
					</c:if>
					<c:if test="${status.index!=0}">
					<li id="${hoImg.linkId}" onclick="imgDetails()" class="active" style="opacity:0;position: absolute;"><img
							style="width:${mo.width*0.74}px;height:${mo.height}px;object-fit: cover;"
							src="${root}/home/module/downloadTem?filePath=${hoImg.url}"/>
							
							<div class="index-content-imgLb">
							<span style="padding-left: 10px;">${hoImg.linkTile}</span>
							</div>
							<%-- <span style="position: absolute; bottom: 0;left: 0;">${hoImg.linkTile}</span> --%>
							</li>
					</c:if>
					</c:forEach>
				</ul>

			</div>
			<div class="right" style="float:right;width: 25%;height: 100%;">
				<ul style="right: 0px;position: absolute;">
					<c:forEach items="${homeImg}" var="hoImg">
						<li><img
							style="width:${mo.width*0.25}px;height:${mo.height*0.25}px;"
							src="${root }/home/module/downloadTem?filePath=${hoImg.url}" />
						</li>
					</c:forEach>
				</ul>

			</div>
		</div>
	</c:if>
	<!--以上为首页图片 -->
	<!-- 列表 -->
	<c:if test="${mo.level1==2}">
			<div id="${mo.id}" class="content-title" style=" border: 0px solid #DDDDDD; width:${mo.width}px;height: ${mo.height}px; top: ${mo.top}px; left:${mo.theLeft}px;position: absolute; ">
				<div class="content-title-name">
				<img src="${root}/img/ghdtBd.png" style="vertical-align: middle;">
				<span style="display: inline-block;height: 100%;vertical-align: middle;"></span>
				 ${mo.listGhContentManage[0].contentTypeName}<br>
				</div>
				
				<div class="content-list">
					<ul>
						<c:forEach items="${mo.listGhContentManage}" var="content">
							<li onclick="details('${content.contentId}')" style=" width: 75%;white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">${content.contentTitle}<span style="position: absolute;right: 5px;">${content.creatDate}</span></li>
						</c:forEach>
					</ul>
				</div>
			</div>
		</c:if>
	<!--以上为列表 -->
	<!-- 首页 列表-->
	<c:if test="${mo.level1==10}">
			<div id="${mo.id}" class="content-title" style=" border: 0px solid #DDDDDD; width:${mo.width}px;height: ${mo.height}px; top: ${mo.top}px; left:${mo.theLeft}px;position: absolute; ">
				<div class="flbj"  style="width:${mo.width}px;">
					<img src="${root}/img/fl2.png" >
					<div class="cd">公司动态</div>
				</div>
				<div class="content-list">
					<ul>
						<c:forEach items="${mo.listGhContentManage}" var="content">
							<li onclick="details('${content.contentId}')" style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">
							<span class="ghdt-content">${content.contentTitle}</span>
							<span class="ghdt-time" style="position: absolute;right: 20px;">${content.creatDate}</span></li>
						</c:forEach>
					</ul>
				</div>
			</div>
		</c:if>
	<!--以上为首页列表 -->
	<!-- 图片 -->
	<c:if test="${mo.level1==9}">
		<img style="width:${mo.width}px;height: ${mo.height}px; top: ${mo.top}px; left:${mo.theLeft}px;position: absolute; "
			src="${root }/home/module/downloadTem?filePath=${mo.url}" />
	</c:if>
	<!-- 以上是图片 -->
    <!--工会概述 -->
    <c:if test="${mo.level1==7}">
				<div class="content-leftdh" style="width:${mo.width}px;height: ${mo.height}px; top: ${mo.top}px; left:${mo.theLeft}px;position: absolute; ">
					<div class="content-js">${mo.name}</div>
					<div>
						<ul>
						<c:forEach items="${mo.contentTypeList}" var="content">
						<li><a href="${root}/home/module/listInfo?id=${content.contentTypeId}">${content.contentTypeName}<img class="ghds-img" src="${root}/img/info.png"></a></li>
						</c:forEach>
							<li><a href="${root}/home/module/tbPolicies?id=6">法律法规<img class="ghds-img" src="${root}/img/info.png"></a></li>
							<li><a href="${root}/home/module/tbFileDownload?id=6">资料下载<img class="ghds-img" src="${root}/img/info.png"></a></li>
						</ul>
					</div>
<!-- 					<div style="height: 30px; background: white;"></div> -->
				</div>
			</c:if>
    <!--以上是工会概述 -->
	<!-- 通知公告 -->
			<c:if test="${mo.level1==4}">
				<div class="demopage" style="width:${mo.width}px;height: ${mo.height}px; top: ${mo.top}px; left:${mo.theLeft}px;position: absolute;">
					
					<div class="tzgg-header">
					<span class="tzgg-title">通知公告</span>
					<img src="${root}/img/lb.png" style="margin-left: 50px;width: 25px">
					</div>
					
					<div class="scrollDiv1">
					<%-- <span class="tzgg-title">通知公告</span>
					<img src="${root}/img/lb.png" style="margin-left: 50px;width: 25px"> --%>
					</div>
					<div class="scrollDiv" id="s1">
						<ul>
							<c:forEach items="${announcementList}" var="content">
								<li><a href="${root}/home/module/announcementInfo?id=${content.announcementId}">${content.announcementTitle}</a></li>
							</c:forEach>
						</ul>
					</div>
					<div class="scrollDiv2">
						<a href="${root}/home/module/announcementList"><img src="${root}/img/more.png"></a>
					</div>
				</div>
			</c:if>
	<!-- 以上是通知公告 -->
	<!-- 图集 -->
	<c:if test="${mo.level1==3}">
	
	<div class="aui-content-max" style="width:${mo.width}px;height: ${mo.height-15}px; top: ${mo.top+15}px; left:${mo.theLeft}px;position: absolute; ">
				<div class="flbj"  style="width:${mo.width}px;">
					<img src="${root}/img/fl2.png" >
					<div class="cd">${mo.name}</div>
				</div>
				<div class="aui-content-box" style="width: 100%; height: 100%;">
					<div class="prev"><a href="javascript:void(0)">
					 <img src="${root}/img/web/prev.png"alt=""> </a></div>
					<div class="aui-content-box-ovf" style="width:${mo.width-48}px;height: ${mo.height}px;">
						<div class="aui-content-box-list" style="width:${mo.width-48}px;height: ${mo.height}px">
								<ul>
									<c:forEach items="${mo.contentImgFileList}" var="content">
										<li onclick="details('${content.linkId}')" style="width: ${(mo.width-48)*0.198}px;height:${mo.height-15}px;position: relative;">
										<a style="width: ${(mo.width-48)*0.198}px;height:${mo.height-15}px;display: table-cell;vertical-align: middle; " href="#">
												<div style="width: ${(mo.width-48)*0.198}px;height:${mo.height-15}px;display: table-cell;vertical-align: middle; " class="aui-content-item-img">
													<img  style="object-fit: cover;vertical-align:middle;max-width: ${(mo.width-15)*0.125}px;padding-top: 13px;" src="${root}/home/module/downloadById?fileId=${content.fileId}" alt="">
													<!-- <span style=" display:inline-block;  height:100%;vertical-align:middle;"></span> -->
												</div>
												
										</a></li>
									</c:forEach>
								</ul>
							</div>
					</div>
	
					<div class="next">
					<a href="javascript:void(0)">
					<img src="${root}/img/web/next.png" alt=""> </a>
					</div>
				</div>
			</div>
		</c:if>
			<!-- 以上是图集 -->
	<!-- 多级分类 -->
	<c:if test="${mo.level1==8}">
				<div class="pavilion-container" style="width:${mo.width}px;height: ${mo.height-15}px; top: ${mo.top+15}px; left:${mo.theLeft}px;position: absolute; ">
					<div class="flbj" style="width:${mo.width}px;">
						<img src="${root}/img/fl2.png">
						<div class="cd">${mo.contentTypeList[0].menuName}</div>
					</div>
					<div class="pavilion-inner" style="height: ${mo.height-15}px">
						<ul class="tabs overflow-hide">
							<c:forEach items="${mo.contentTypeList}" var="content"
								varStatus="statusCon">
								<c:if test="${statusCon.index==0}">
										<li onclick="listInfo('${content.contentTypeId}')" class="on">
										<img class="djfl-img" src="${root}/home/module/downloadById?fileId=${content.logoImg}"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==1}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/home/module/downloadById?fileId=${content.logoImg}"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==2}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/home/module/downloadById?fileId=${content.logoImg}"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==3}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/home/module/downloadById?fileId=${content.logoImg}"> 
										${content.contentTypeName}</li>
									</c:if>
								<%-- <c:if test="${mo.contentTypeList[0].menuName==产品中心}">
									<c:if test="${statusCon.index==0}">
										<li onclick="listInfo('${content.contentTypeId}')" class="on">
										<img class="djfl-img" src="${root}/img/zwjm.png"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==1}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/img/yj.png"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==2}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/img/dqghhg.png"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==3}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/img/dqghhg.png"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==4}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/img/hywh.png"> 
										${content.contentTypeName}</li>
									</c:if>
								</c:if>
								<c:if test="${mo.contentTypeList[0].menuName==学习原地}">
									<c:if test="${statusCon.index==0}">
										<li onclick="listInfo('${content.contentTypeId}')" class="on">
										<img class="djfl-img" src="${root}/img/java.png"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==1}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/img/_net.png"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==2}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/img/shj.png"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==3}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/img/android.png"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==4}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/img/qdhtml.png"> 
										${content.contentTypeName}</li>
									</c:if>
								</c:if>
								<c:if test="${mo.contentTypeList[0].menuName!=产品中心&&mo.contentTypeList[0].menuName!=学习原地}">
									<c:if test="${statusCon.index==0}">
										<li onclick="listInfo('${content.contentTypeId}')" class="on">
										<img class="djfl-img" src="${root}/img/yljc.png"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==1}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/img/zgcx.png"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==2}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/img/jcww.png"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==3}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/img/jnds.png"> 
										${content.contentTypeName}</li>
									</c:if>
									<c:if test="${statusCon.index==4}">
										<li onclick="listInfo('${content.contentTypeId}')">
	                                    <img class="djfl-img" src="${root}/img/jcww.png"> 
										${content.contentTypeName}</li>
									</c:if>
								</c:if> --%>
							</c:forEach>
						</ul>
<!-- 						<div style="border-bottom: 1.5px dashed #e8e3e3;"></div> -->
						<div class="tab-content-wrap">
							<c:forEach items="${mo.contentTypeList}" var="content"
								varStatus="statusCon">
								<c:if test="${statusCon.index!=0}">
									<div class="tab-content overflow-hide">
										<div class="col-sm-3">
											<ul>
												<c:forEach items="${content.contentManageList}" var="con">
													<li onclick="details('${con.contentId}')">${con.contentTitle}<span>${con.creatDate}</span></li>
												</c:forEach>
											</ul>
										</div>
									</div>
								</c:if>
								<c:if test="${statusCon.index==0}">
									<div class="tab-content overflow-hide show">
										<div class="col-sm-3">
											<ul>
												<c:forEach items="${content.contentManageList}" var="con">
													<li onclick="details('${con.contentId}')">${con.contentTitle}<span>${con.creatDate}</span></li>
												</c:forEach>
											</ul>
										</div>
									</div>
								</c:if>
							</c:forEach>
							
							
						</div>
					</div>
				</div>
			</c:if>
	<!-- 以上是多级分类 -->
			<!-- 四个按钮 -->
			<c:if test="${mo.level1==6}">
				<div class="content-wqga-bg" style="width:${mo.width}px;height: ${mo.height-15}px; top: ${mo.top+15}px; left:${mo.theLeft}px;position: absolute; ">
					<div class="flbj"  style="width:${mo.width}px;">
						<img  src="${root}/img/fl2.png" >
                        <div class="cd">${mo.name}</div>
					</div>
					<div class="content-wqga" style="width: 100%;">
						<c:forEach items="${mo.contentTypeList}" var="con">
							<a href="${root}/home/module/listInfo?id=${con.contentTypeId}">
								<div class="content-nr">
									<img style="vertical-align: middle;" src="${root}/home/module/downloadById?fileId=${con.logoImg}">
									<p>${con.contentTypeName}</p>
								</div>
							</a>
						</c:forEach>
					</div>
				</div>
			</c:if>
			<!-- 以上是四个按钮 -->
			<!-- 主席信箱 -->
			<c:if test="${mo.level1==5}" >
				<div id="news" class="clearfix" style="width:${mo.width}px;height: ${mo.height-15}px; top: ${mo.top+15}px; left:${mo.theLeft}px;position: absolute; ">
					<div class="flbj"  style="width:${mo.width}px;">
						<img src="${root}/img/fl2.png"> <div class="cd">公司留言</div>
						
					</div>
					<div class="wrap">
					<span class="news-more"><a href="${root}/home/module/listTbMailboxPage">更多>></a></span>
						<div class="fl left">
							<ul class="clearfix">
								<c:forEach items="${tbMailbox}" var="con">
									<li><a href="${root}/home/module/TbMailboxPageInfo?id=${con.mailboxId}">
										<div class="data">
											<span class="d">${con.dd}</span> <span class="y">${con.yymm}</span>
										</div>
										<h3>${con.title}</h3>
										<p>${con.content}</p>
								    </a></li>
								</c:forEach>
							</ul>
						</div>
						
						<!-- 按钮 -->
						<div class="lybutton">
						<c:if test="${reply==1 }">
						<a class="" href="${root}/home/module/getTbMailbox" >我要留言</a>
						</c:if>
						<c:if test="${reply==0}">
						<a class="" href="${root}/home/module/findTbMailbox" >我要回复</a>
						</c:if>
<!-- 						style="display: none" -->
						</div>
					</div>
				</div>
			</c:if>
			<!-- 以上是主席信箱 -->
			<!-- 6个按钮 -->
			<c:if test="${mo.level1==11}" >
			<div id="wrap" style="width:${mo.width}px;height: ${mo.height-15}px; top: ${mo.top+15}px; left:${mo.theLeft}px;position: absolute; ">
				<div class="flbj" style="width:${mo.width}px;">
					<img src="${root}/img/fl2.png"> <div class="cd">${mo.name}</div>
				</div>
				<ul>
						<c:forEach items="${mo.contentTypeList}" var="con">
							<li  style="height: ${mo.height*0.37}px;">
							<a href="${root}/home/module/listInfo?id=${con.contentTypeId}" class="a1"> 
							<img src="${root}/home/module/downloadById?fileId=${con.backgroundImg}">
									<div class="divA">
										<p class="p1">
										 <span id="p_span1">${con.contentTypeName}</span>
               							 <span id="p_span2" >——</span>
										</p>
										 <span id="liu_area"></span>
									</div>
							</a> 
							<a href="#" class="a2"></a>
							</li>
						</c:forEach>
					</ul>
			</div>
			</c:if>
			<!-- 以上是6个按钮 -->
			<!--  底部 -->
			<c:if test="${status.index==0}">
				<div class="footerWrap" style="position: absolute;top:${mo.top+mo.height+16}px">
					<jsp:include page="bottom.jsp"></jsp:include>
				</div>
				<!--以上为底部 -->
			</c:if>
		</c:forEach>
		
<script type="text/javascript">
  
  //列表
  function listInfo(id){
   window.location.href="${root}/home/module/listInfo?id="+id;
  }
	
  //通知公告
  function AutoScroll(obj) {
   $(obj).find("ul:first").animate({
    marginTop: "-25px"
   }, 500, function() {
    $(this).css({
     marginTop: "0px"
    }).find("li:first").appendTo(this);
   });
  }
  /* 首页6个按钮js */
   $('li').mouseenter(function(){
			$(this).find('.a2').css({left:-$(this).width()})
			$(this).find('.divA').css({background:'#156ea9'})
			$(this).find('.p1').css({color:'white'})
			$(this).find('.p2').css({color:'white'})
		})
		$('li').mouseleave(function(){
			$(this).find('.a2').css({left:'0'})
			$(this).find('.divA').css({background:'#f7f7f7'})
			$(this).find('.p1').css({color:'#666'})
			$(this).find('.p2').css({color:'#bc2021'})
		})
  
  /* 底部轮播js */
  		$(".next a").click(function() {
			nextscroll()
		});

		function nextscroll() {
			var vcon = $(".aui-content-box-list ");
			var offset = ($(".aui-content-box-list li").width()) * -1;
			vcon.stop().animate({
				left : offset
			}, "slow", function() {

				var firstItem = $(".aui-content-box-list ul li").first();
				vcon.find("ul").append(firstItem);
				$(this).css("left", "0px");
				circle()
			});
		};

		function circle() {
			var currentItem = $(".aui-content-box-list ul li").first();
			var currentIndex = currentItem.attr("index");
			$(".circle li").removeClass("circle-cur");
			$(".circle li").eq(currentIndex).addClass("circle-cur");
		}


		$(".prev a").click(function() {
			var vcon = $(".aui-content-box-list ");
			var offset = ($(".aui-content-box-list li").width() * -1);
			var lastItem = $(".aui-content-box-list ul li").last();
			vcon.find("ul").prepend(lastItem);
			vcon.css("left", offset);
			vcon.animate({
				left : "0px"
			}, "slow", function() {
				circle()
			})
		});
		
		
			//多级分类
		$('.tabs li').hover(function() {
			var i = $(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			//$('.tab-content').removeClass('show').eq(i).addClass('show');
			$(this).parents("ul").parents("div").children("div").children("div").removeClass('show').eq(i).addClass('show')
		})
		function details(id) {
				window.location.href = "${root}/home/module/details?id=" + id;
			}
			function imgDetails(id) {
				for (i = 0; i < homeImgStr.length; i++) {
					if (document.getElementById(homeImgStr[i].linkId).style.opacity == '1') {
						details(homeImgStr[i].linkId);
						break;
					}
				}
			}
			function startFocus() {
				index++;
				index = index > aRLi.size() - 1 ? 0 : index;
				aLLi.eq(index).addClass('active').siblings().removeClass();
				aLLi.eq(index).stop().animate({
					'opacity' : 1
				}, 300).siblings().stop().animate({
					'opacity' : 0
				}, 300);
				aRLi.eq(index).addClass('active').siblings().removeClass();
			}
			function stopFoucs() {
				clearInterval(timer);
			}
		var list = '${list}';
	    var listStr = eval("("+list+")")
		for (i = 0; i < listStr.length; i++ ) {
			if (listStr[i].level1 == 1) {
			var homeImg = '${homeImgList}';
			var homeImgStr = eval("(" + homeImg + ")"); //详情
			
			// 			首页图片
			var oFocus = $('#'+listStr[i].id),
					oRight = oFocus.find('.right'),
					oLeft = oFocus.find('.left'),
					aRLi = oRight.find('li'),
					aLLi = oLeft.find('li'),
					index = 0,
					timer = null;
				aRLi.click(function() {
					index = $(this).index()
					$(this).addClass('active').siblings().removeClass();
					aLLi.eq(index).addClass('active').siblings().removeClass();
					aLLi.eq(index).stop().animate({
						'opacity' : 1
					}, 300).siblings().stop().animate({
						'opacity' : 0
					}, 300);
					stopFoucs();
				})
				oLeft.mouseenter(function() {
					stopFoucs();
				}).mouseleave(function() {
					timer = setInterval(function() {
						startFocus();
					}, 3000);
				});
				timer = setInterval(function() {
					startFocus();
				}, 3000);
				
			} 
		}  
		
	$(function() {
	/* 通知公告调用 */
		setInterval('AutoScroll("#s1")', 3000);//通知公告
	})
</script>
</body>
</html>