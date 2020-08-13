<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<%@ page import="com.bluebird.components.common.TimeHelper" %>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>
<%-- <link rel="stylesheet" href="${root}/css/polyfill/polyfill.object-fit.css" />
<script type="text/javascript"
	src="${root}/css/polyfill/polyfill.object-fit.js"></script>
 --%>
<!-- 头部 -->
<div style="height: 25px; background: #434242;">
	<div class="head-dl">
		<img src="${root}/img/dl.png">
		<span><a href="${root}/system/index">后台登录</a></span>
	</div>
	<%-- <div class="head-yhdl">
	   <c:if test="${not isUser}">
		<span><a class="tc" id="tc">用户登录</a></span>
		</c:if>
		<c:if test="${isUser}">
		<span><a class="tc" href="${root}/home/module/MyTbMailbox">个人中心</a></span>
		</c:if>
	</div> --%>
	<div class="date_info" id="date_info"></div>
 </div>
<div class="topbox">
  <div class="top">
  <div class="t-companyName">
				<%-- <img class="logo" src="${root}/img/NHPlogo.png" >
				<img class="com" src="${root}/img/NHPName.png" > --%>
				<img src="${root}/img/NHPWebsite.jpg" >
				
	</div>
   <%-- <div class="t-sousuo">
    <div class="sousuok">
    	<img class="phone" src="${root}/img/NHPPhone.png" >
     <input type="text" id="search" placeholder="请输入关键词进行站内搜索" class="t-txt" value="${name }">
     <input type="button" id="searchButten" value="站内搜索" class="t-btn">
    </div>
   </div> --%>
 </div>
 </div>
 <!--导航区域-->
 <div class="navbox">
  <nav class="nav">
			<ul>
			    <li onmouseout="onmou()" id="666666"><a href=" ${root}/home/module">首页</a></li>
				<c:forEach items="${ghMenuManage}" var="menu">
				    <%-- <c:if test="${ menu.menuId==4}"> --%>
				    <!-- 职工文化 -->
				        <%-- <li onmouseout="onmou()" id="${menu.menuId}"><a href="${root}/home/module/culture">${menu.menuName}</a></li> --%>
				    <%-- </c:if>
				    <c:if test="${ menu.menuId!=4 && menu.menuId!=6}"> --%>
				        <li id="${menu.menuId}" onmouseout="onmou()"><a href="${root}/home/module/menu?id=${menu.menuId}">${menu.menuName}</a></li>
				    <%-- </c:if> --%>
				</c:forEach>
				 <!-- <li onmouseout="onmou()"><a href=" http://www.dzzgsw.com/category3/books.html" target="_blank"   >职工书屋</a></li> -->
			</ul>
		</nav>
 </div>
 <!--焦点图区域-->
 <div id="focus-banner">
		   <ul id="focus-banner-list">
		     <li> <a href="#" class="focus-banner-img"> 
		     <img src="${root}/img/banner5.jpg" alt=""> </a>
		     </li>
		     <li> <img src="${root}/img/banner6.jpg" alt="">
		     </li>
		     <li><img src="${root}/img/banner7.jpg" alt=""></li>
		   </ul>
		   <a href="javascript:;" id="next-img" class="focus-handle"></a> <a href="javascript:;" id="prev-img" class="focus-handle"></a>
		   <ul id="focus-bubble">
		   </ul>
		 </div>
 
 
 
 <!--以上为头部 -->
 <div id="gray"></div>
<div class="popup" id="popup">
	<div class="top_nav" id='top_nav'>
		<div align="center">
			<!-- <i></i> -->
			<span>登录账号</span>
			<a class="guanbi"></a>
		</div>
	</div>
	<div class="min">
		<div class="tc_login">
			<div class="right">
				<form method="POST" name="form_login"  id="userForm" action="${root}/home/module/userLogin">
					<div align="center">
						<i class="icon-mobile-phone"></i>
						<input type="text" name="loginName" maxlength="20" id="loginName" required="required" placeholder="用户名" autocomplete="off" class="input_yh">
						<input type="password" name="password" id="password" required="required" placeholder="密码" autocomplete="off" class="input_mm">
					</div>
					<div align="center">
						<input type="button" class="button"   onclick="userCheck()"  value="登录">
					</div>
				</form>   
			</div>
		</div>
	</div>
</div>
 <script type="text/javascript">
 
 var navigationBar = '${navigationBar}';
 	function onmou() {
 		setTimeout(function() {
 			$("#" + 666666).removeClass()
 			$("#" + navigationBar).addClass("navhover")
 		}, 10);
 	}
 
 	$(function(){
 		$("#" + navigationBar).addClass("navhover")
		var focusBanner=function(){
			var $focusBanner=$("#focus-banner"),
				$bannerList=$("#focus-banner-list li"),
				$focusHandle=$(".focus-handle"),
				$bannerImg=$(".focus-banner-img"),
				$nextBnt=$("#next-img"),
				$prevBnt=$("#prev-img"),
				$focusBubble=$("#focus-bubble"),
				bannerLength=$bannerList.length,
				_index=0,
				_timer="";
	
				var _height=$(".focus-banner-img").find("img").height();
				$focusBanner.height(_height);
				$bannerImg.height(_height);
	
				for(var i=0; i<bannerLength; i++){
					$bannerList.eq(i).css("zIndex",bannerLength-i);
					$focusBubble.append('<li><a href="javascript:;">'+i+'</a></li>');
				}
				$focusBubble.find("li").eq(0).addClass("current");
				var bubbleLength=$focusBubble.find("li").length;
				$focusBubble.css({
					"width":bubbleLength*22,
					"marginLeft":-bubbleLength*11
				});//初始化
	
				$focusBubble.on("click","li",function(){
					$(this).addClass("current").siblings().removeClass("current");
					_index=$(this).index();
					changeImg(_index);
				});//点击轮换
	
				$prevBnt.on("click",function(){
					_index++
					if(_index>bannerLength-1){
						_index=0;
					}
					changeImg(_index);
				});//下一张
	
				$nextBnt.on("click",function(){
					_index--
					if(_index<0){
						_index=bannerLength-1;
					}
					changeImg(_index);
				});//上一张
	
				function changeImg(_index){
					$bannerList.eq(_index).fadeIn(250);
					$bannerList.eq(_index).siblings().fadeOut(200);
					$focusBubble.find("li").removeClass("current");
					$focusBubble.find("li").eq(_index).addClass("current");
					clearInterval(_timer);
					_timer=setInterval(function(){$nextBnt.click()},5000)
				}//切换主函数
				_timer=setInterval(function(){$nextBnt.click()},5000);
	
				function isIE() { //ie?
					if (!!window.ActiveXObject || "ActiveXObject" in window)
					return true;
					else
					return false;
				}
	
				if(!isIE()){
					$(window).resize(function(){ 	
						window.location.reload();
					});
				}else{
					if(!+'\v1' && !'1'[0]){ 
						// alert("老铁什么年代啦还在搞ie8以下版本啊！")
					} else{
						$(window).resize(function(){ 	
							window.location.reload();
						});
					};
				}
				
		}();	
	})
	
 
 
 
 //站内搜索
    $("#searchButten").click(function () {
      window.location.href="${root}/home/module/search?name="+$("#search").val();
    });
    
 //点击关闭按钮
$("a.guanbi").click(function(){
	$("#gray").hide();
	$("#popup").hide();//查找ID为popup的DIV hide()隐藏
})
	function userCheck(){
		var loginName = $("#loginName").val();
		var password = $("#password").val();
		if(loginName.length==0 || password.length==0 ){
			alert("用户名或密码不能为空！")
		}else{
			  $.ajax({
	  	   	  url  : '${root}/home/module/checkUserAjax',
	  	      type : "post",
	  	      data:{"loginName":loginName,"password":password},
	  	    success : function(res) {
	  	       if (res.userFlag == 1) {
		  	       $("#userForm").submit();
		  	       $("#loginName").val("");
		  	       $("#password").val("");
	  	       }else{
	  	       		alert("用户名或密码错误！")
	  	       }
	  	     }
	  	  });
		}
	}
//窗口水平居中
$(window).resize(function(){
	tc_center();
});
//窗口效果
//点击登录class为tc 显示
$("#tc").click(function(){
	$("#gray").show();
	$("#popup").show();//查找ID为popup的DIV show()显示#gray
	tc_center();
});
function tc_center(){
	var _top=($(window).height()-$(".popup").height())/2;
	var _left=($(window).width()-$(".popup").width())/2;
	$(".popup").css({top:_top,left:_left});
}
 $(function(){
    function setTime(){
        var nowdate = new Date();
        var year = nowdate.getFullYear(),
            month = nowdate.getMonth()+1,
            day = nowdate.getDay(),
            hours = nowdate.getHours(),
            minutes = nowdate.getMinutes(),
            seconds = nowdate.getSeconds(),
            date = nowdate.getDate();
        var weekday =["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        // 获取日期id
		hours = hours >=10 ? hours : "0"+hours;
		minutes = minutes >=10 ? minutes : "0"+minutes;
		seconds = seconds >=10 ? seconds : "0"+seconds
        date_info.innerHTML=year+"年"+month+"月"+date+"日   "+weekday[day]+"   "+hours+":"+minutes+":"+seconds;
    }
    setInterval(setTime, 1000);
});
 </script>