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
		<link rel="stylesheet" href="${root }/css/mescroll.css">
		<link rel="stylesheet" href="${root }/css/mescroll-option.css">
		<script src="${root }/js/mescroll.js" type="text/javascript" charset="utf-8"></script>
	    <script src="${root }/js/mescroll-option.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="${root }/js/zepto.min.js"></script>
		<script type="text/javascript" src="${root }/js/miniMobile.js"></script>
		<!-- 字体图标 -->
		<link rel="stylesheet" type="text/css" href="${root}/components/plugins/fonticon/iconfont.css" />
		<style type="text/css">
			* {
				margin: 0;
				padding: 0;
				-webkit-touch-callout:none;
				-webkit-user-select:none;
				-webkit-tap-highlight-color:transparent;
			}
			body{background-color: white}
			ul{list-style-type: none}
			img{width: 100%;vertical-align: bottom;}
	
			/*列表*/
			.mescroll{
				position: fixed;
				top: 44px;
				bottom: 51px;
				height: auto;
			}
			/*回到顶部按钮*/
			.mescroll-totop {
				bottom: 70px;
			}
			
			/*下拉刷新回调的提示*/
			.download-tip{
				z-index: 9900;
				position: fixed;
				top: 20px;
				left: 0;
				width: 100%;
				height: 24px;
				line-height: 24px;
				font-size: 12px;
				text-align: center;
				background-color: rgba(80,175,85,.7);
				color: white;
				-webkit-transition: top 300ms;
				transition: top 300ms;
			}
			
			/*展示上拉加载的数据列表*/
			.news-list li{
				padding: 16px;
				border-bottom: 1px solid #eee;
			}
			.news-list .new-content{
				font-size: 14px;
				margin-top: 6px;
				margin-left: 10px;
				color: #666;
			}
		</style>
	</head>
<body class="fadeIn animated">
		<header class="ui-header clearfix w75 h8 f46 pl3 pr3 color8 bg-color-primary t-c o-h">
			<div class="ui-header-c fl f30 w64">
					搜索列表
			</div>
			<div >
<%-- 				<a href="${root}/app/module" class="icon color8 iconfont icon-home_light"></a> --%>
			<input type="image" style="width: 21px;height: 21px;padding-top: 2px;padding-right: 2px;" src="${root }/img/return.png"   onclick="javascript:history.go(-1);"/>
			</div>
		</header>
		<div id="mescroll" class="t-c p6 f46 color5 mescroll">
			<div class="article-content-info">
				<ul id="newsList" class="news-list infoNewsList ">
				</ul>
			</div>
		</div>
		<nav class="demo-bottomNav mt6 w75 h12 pt1 t-c f28 bg-color8 o-h clearfix">
             <jsp:include page="../bottom.jsp"></jsp:include>				
		</nav>
		<script type="text/javascript">
		var isShow = '${isShow}';
		var name = '${name}';
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
			$(function(){
			//创建MeScroll对象
			var mescroll = initMeScroll("mescroll", {
				down:{
					auto:false,//是否在初始化完毕之后自动执行下拉回调callback; 默认true
					callback: downCallback, //下拉刷新的回调
				},
				up: {
					auto:true,//初始化完毕,是否自动触发上拉加载的回调
					isBoth: false, //上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认false,两者不可同时触发; 这里为了演示改为true,不必等列表加载完毕才可下拉;
					callback: upCallback, //上拉加载的回调
				}
			});
			/*下拉刷新的回调 */
			function downCallback(){
			 window.location.href="${root}/app/module/search?name="+name+"&isShow="+isShow;
// 				//加载轮播数据..
// 				//...
// 				//加载列表数据
// 				getListDataFromNet(0, 1, function(data){
// 					//联网成功的回调,隐藏下拉刷新的状态
// 					mescroll.endSuccess();
// 					//设置列表数据
// 					setListData(data, false);
// 					//显示提示
// 					$("#downloadTip").css("top","44px");
// 					setTimeout(function () {
// 						$("#downloadTip").css("top","20px");
// 					},2000);
// 				}, function(){
// 					//联网失败的回调,隐藏下拉刷新的状态
// 	                mescroll.endErr();
// 				});
			}
			
			/*上拉加载的回调 page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
			function upCallback(page){
				//联网加载数据
				getListDataFromNet(page.num, page.size, function(data){
					//联网成功的回调,隐藏上拉加载的状态
					mescroll.endSuccess(data.length);//传参:数据的总数; mescroll会自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
					//设置列表数据
					setListData(data, true);
				}, function(){
					//联网失败的回调,隐藏上拉加载的状态
	                mescroll.endErr();
				});
			}
			
			/*设置列表数据*/
			function setListData(data, isAppend) {
				var listDom=document.getElementById("newsList");
				for (var i = 0; i < data.length; i++) {
					var newObj=data[i];
					var str = '<a href="${root}/app/module/details?id='+newObj.contentId+'&menuId='+newObj.menuId+'&isShow='+isShow+'">'
					str+=' <div class="txt">'
					str+='<span class="title">'+newObj.contentTitle+'</span>';
					str+='<p>'+newObj.summary+'</p>';
					str+='<span class="time">'+newObj.creatDate+'【MORE】</span>'
					str+=' </div> </a>'
					var liDom=document.createElement("li");
					liDom.innerHTML=str;
					if (isAppend) {
						listDom.appendChild(liDom);//加在列表的后面,上拉加载
					} else{
						listDom.insertBefore(liDom, listDom.firstChild);//加在列表的前面,下拉刷新
					}
				}
			}
			
			/*联网加载列表数据*/
			var downIndex=0;
			function getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
				//延时一秒,模拟联网
                setTimeout(function () {
                	try{
                		var newArr=[];
	                	if(pageNum==0){
	                		//此处模拟下拉刷新返回的数据
// 	                		downIndex++;
// 	                		var newObj={title:"【新增话题"+downIndex+"】 新增话题", content:"新增话题的内容"};
// 	                		newArr.push(newObj);
	                	}else {
	                	      var data = new FormData();
 		                      data.append("pageNO", pageNum);
 		                      data.append("pageSize", pageSize);
 		                      data.append("name", name);
								//此处模拟上拉加载返回的数据
								$.ajax({
									url : "${root}/app/module/searchAjax",
									type : "post",
									data : data,
									async : false,
									dataType : "JSON",
									processData : false,
									contentType : false,
									success : function(data) {
									var dataObj = JSON.parse(data);
									newArr=dataObj.list
									}
								})
							}
	                	//联网成功的回调
	                	successCallback&&successCallback(newArr);
                	}catch(e){
                		//联网失败的回调
                		errorCallback&&errorCallback();
                	}
                },2000)
			}
			
			//禁止PC浏览器拖拽图片,避免与下拉刷新冲突;如果仅在移动端使用,可删除此代码
			document.ondragstart=function() {return false;}
		});
		</script>
	</body>

</html>