<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ page import="com.bluebird.framework.constant.SystemConstant"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="com.bluebird.framework.constant.SystemConstant"%>
<%@ page import="com.bluebird.components.common.TimeHelper"%>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>" />
<%-- <link rel="stylesheet" href="${root}/css/APPbottom.css" /> --%>
<!-- 底部导航 -->
<div class="wrap">
	<div id="menu" style="background-color: #ffffff;border-top: 1px solid #efedee;padding-top: 5px;">
		<ul>
			<li>
				<div  class="menu_li aDevice">
<!-- 					<i class="f46 icon iconfont icon-home_light"></i> -->
                    <img id="my0" src="${root }/img/home.png"  style="width: 23px;height: 23px"/>
					<img id="myred0" src="${root }/img/homeRed.png"  style="width: 23px;height: 23px"/>
					<p>
						<a href="${root}/app/module" id="color0">首页</a>
					</p>
				</div> <span> </span>
			</li>
			<li>
				<div class="menu_li aPlan">
<!-- 					<i class="f46 icon iconfont icon-comment"></i> -->
                    <img id="my1" src="${root }/img/consult.png"  style="width: 23px;height: 23px"/>
					<img id="myred1" src="${root }/img/consultRed.png"  style="width: 23px;height: 23px"/>
					<p id="color1">${DicVoList[1].dicName}</p>
				</div> <span>
				<c:if test="${DicVoList[1].list.size()==0}">
				 <img style="height: 43px" src="${root}/img/navbg1.png" width="100%">
				 </c:if>
				<c:if test="${DicVoList[1].list.size()==1}">
				 <img src="${root}/img/navbg2.png" width="100%">
				 </c:if>
				 <c:if test="${DicVoList[1].list.size()==2}">
				 <img src="${root}/img/navbg3.png" width="100%">
				 </c:if>
				 <c:if test="${DicVoList[1].list.size()==3}">
				 <img src="${root}/img/navbg4.png" width="100%">
				 </c:if>
				 <c:if test="${DicVoList[1].list.size()>=4}">
				 <img src="${root}/img/navbg5.png" width="100%">
				 </c:if>
					<div>
					    <c:forEach begin="0" end="3" items="${DicVoList[1].list}"
							var="con">
							<a href="${root}/app/module/contentType?id=${con.contentTypeId}&isShow=1"
								target="_self">${con.contentTypeName }</a>
						</c:forEach>
							<a style="width: 104px;" href="${root}/app/module/policiesList?isShow=1" target="_self">政策法规</a>
					</div>
			</span>
			</li>
			<li>
				<div class="menu_li">
<!-- 					<i class="f46 icon iconfont icon-rank"></i> -->
                    <img id="my2" src="${root }/img/serve.png"  style="width: 23px;height: 23px"/>
					<img id="myred2" src="${root }/img/serveRed.png"  style="width: 23px;height: 23px"/>
					<p id="color2">${DicVoList[0].dicName}</p>
				</div>  <span>
					<c:if test="${DicVoList[0].list.size()==0}">
				 <img  style="height: 43px" src="${root}/img/navbg1.png" width="100%">
				 </c:if>
				 <c:if test="${DicVoList[0].list.size()==1}">
				 <img src="${root}/img/navbg2.png" width="100%">
				 </c:if>
				 <c:if test="${DicVoList[0].list.size()==2}">
				 <img src="${root}/img/navbg3.png" width="100%">
				 </c:if>
				 <c:if test="${DicVoList[0].list.size()==3}">
				 <img src="${root}/img/navbg4.png" width="100%">
				 </c:if>
				 <c:if test="${DicVoList[0].list.size()>=4}">
				 <img src="${root}/img/navbg5.png" width="100%">
				 </c:if>
					<div>
						<c:forEach begin="0" end="3" items="${DicVoList[0].list}"
							var="con">
							<a style="width: 104px;" href="${root}/app/module/contentType?id=${con.contentTypeId}&isShow=2"
								target="_self">${con.contentTypeName }</a>
						</c:forEach>
						<a style="width: 104px;" href="http://content.dzzgsw.com/website/weixin/index2.html?from=groupmessage" target="_self">职工书屋</a>
					</div>
			</span>
			</li>
			<li>
				<div class="menu_li">
					<img id="my3"  src="${root }/img/my.png"  style="width: 23px;height: 23px"/>
					<img id="myred3" src="${root }/img/myRed.png"  style="width: 23px;height: 23px"/>
<!-- 					<i class="f46 icon iconfont icon-servicefill"></i> -->
					<p id="color3">我的</p>
				</div> <span> <img src="${root}/img/navbg2.png" width="92px">
					<div>
						<a href="${root}/app/module/initiation?isShow=3" id="initiation" target="_self">我要入会</a> 
						<a href="${root}/app/module/member?isShow=3" id="member"  target="_self">会员信息</a> 
						<a href="${root}/app/module/getTbMailbox?isShow=3" target="_self">主席信箱</a>
					</div>
			</span>
			</li>
		</ul>
	</div>
</div>
<form method="POST" id="loginPage" action="${root}/app/module/loginPage?isShow=3">
</form>
<script type="text/javascript">
	var isShow = '${isShow}';
	$("#myred0").hide();
	$("#myred1").hide();
	$("#myred2").hide();
	$("#myred3").hide();
	if(isShow!='-1'){
	$("#my"+isShow).hide();
	$("#myred"+isShow).show();
	$("#color"+isShow).css("color","#bc2021")
	}
	function AutoScroll(obj) {
		$(obj).find("ul:first").animate({
			marginTop : "-25px"
		}, 500, function() {
			$(this).css({
				marginTop : "0px"
			}).find("li:first").appendTo(this);
		});
	}
	$('#menu ul li').each(function(i) {
		$(this).click(function() {
			if ($(this).attr("class") != "on") {
			for(x=0; x<4;x++){
			  $("#my"+x).show();
			  $("#myred"+x).hide();
			  $("#color"+x).css("color","#979797")
			}
			$("#my"+i).hide();
			$("#myred"+i).show();
			$("#color"+i).css("color","#bc2021")
				$('#menu ul .on span').animate({
					bottom : -$('#menu ul .on span').height() - 20
				}, 200);
				$('#menu ul .on').removeClass("on");
				$(this).addClass("on");
				$('#menu ul li span').eq(i).animate({
					bottom : 30
				}, 200);
			} else {
			$("#my"+i).show();
			$("#myred"+i).hide();
			 $("#color"+i).css("color","#979797")
				$('#menu ul li span').eq(i).animate({
					bottom : -$('#menu ul li span').eq(i).height() - 20
				}, 200);
				$(this).removeClass("on");
			}
		});
	});

//点击登录class为tc 显示
$("#color3,#my3,#myred3").click(function(){
   var boo=true;
    $.ajax({
              async: false,
	  	   	  url  : '${root}/app/module/checkUserAjax',
	  	      type : "post",
	  	      success : function(res) {
	  	       if (res.islogin) {
	  	         if(res.isMember=="0"){
	  	          $("#initiation").hide();
	  	          $("#member").show();
	  	         }else{
	  	          $("#member").hide();
	  	          $("#initiation").show();
	  	         }
	  	       }else{
	  	            boo=false;
	  	            $("#loginPage").submit();
	  	       }
	  	     }
	  	  });
	  	return boo
});
</script>