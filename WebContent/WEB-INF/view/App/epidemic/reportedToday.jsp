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
		
		<script src="${root }/js/icheck.js" type="text/javascript" charset="utf-8"></script>
		
    <!-- 字体图标 -->
		<link rel="stylesheet" type="text/css" href="${root}/components/plugins/fonticon/iconfont.css" />
	</head>
<body class="pb12 fadeIn animated">
		<header class="ui-header clearfix w75 h8 f46 pl3 pr3 color8 bg-color-primary t-c o-h">
			<div class="ui-header-c fl f30 w64">
				疫情防控
			</div>
			<div>
<%-- 				<a href="${root }/app/module" class="icon color8 iconfont icon-home_light"></a> --%>
			<input type="image" style="width: 21px;height: 21px;padding-top: 2px;padding-right: 2px;" src="${root }/img/return.png"   onclick="javascript:history.go(-1);"/>
			</div>
		</header>
		
			<div class="f30 f30 w75">
			<img src="${root }/img/web/yiqingBg.jpg" />
			<div class="wxts">
			<div class="wxtsZt">
			<img src="${root }/img/web/tsZt.png" style="float: left;width: 20px;" />
			<div style="padding-left: 30px">
			<span style="line-height: 20px;">不外出，不聚集，不吃野味，戴口罩，勤洗手，咳嗽有礼，开窗通风，发热就诊。<br />
			<span style="color: sandybrown;font-weight: 800;">请真实填写当日状态信息，每天16:00前上报</span>
			</span>
			</div>
			</div>
			</div>
		</div>
		<div class=" f30 f30 w75">
		
		<div style="font-family: '微软雅黑';">
			<ul id="hear">
				<li class="action" style="border-bottom: 2px solid red;height: 43px;">
					<a href="#">今日上报</a></li>
				<li><a href="#" >基本信息</a></li>
			</ul>
			
			
			<ul id="contentop">
				<li class="action">
						<form action="${root }/app/module/saveEpidemic"  style="margin-left: 0px"  method="get" id="backForm" class="join" onsubmit="return doSubmit();" >
						<input type="hidden"  value=""  name="currPosition"  id="currPosition"/>
				<div class="pt2 pb2">
					当前位置：
					<input type="text" disabled  class="w66  form-control" id="currPositionId" />
				</div>
				<div>
					近15天是否前往或经停湖北省：<br />
					<label class="mr3">
						是  &nbsp; <input type="radio"  value="1" class="check" name="isTo" />
					</label>
					 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<label class="mr3">
						否 &nbsp;<input type="radio" value="0" checked class="check" name="isTo" />
					</label>
				</div>
				<div>
					近15天是否接触过湖北或出入湖北的人员：<br />
					<label class="mr3">
						是 &nbsp; <input type="radio" value="1" class="check" name="isContact" />
					</label>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<label class="mr3">
						否 &nbsp; <input type="radio" value="0" checked class="check" name="isContact" />
					</label>
				</div>
				
				<div>
					近15天是否接触过确诊或疑似患者：<br />
					<label class="mr3">
						是 &nbsp; <input type="radio" value="1" class="check" name="isDiagnosis" />
					</label>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<label class="mr3">
						否 &nbsp; <input type="radio" checked value="0" class="check" name="isDiagnosis" />
					</label>
				</div>
				
				<div>
					今天的体温范围：<br />
					<label class="mr3">
						37.3度以上 &nbsp; <input type="radio" value="1" class="check" name="currTemperature" />
					</label>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<label class="mr3">
						37.3度以下 &nbsp; <input type="radio" value="0" checked class="check" name="currTemperature" />
					</label>
				</div>
				
				<div>
					有无疑似症状或异常状态：<br />
					<label class="mr3">
						有 &nbsp; <input type="radio" value="1" class="check" name="currStatus" />
					</label>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<label class="mr3">
						无 &nbsp; <input type="radio" value="0" checked class="check" name="currStatus" />
					</label>
				</div>
				
				<div>
					是否隔离：<br />
					<label class="mr3">
						是 &nbsp; <input value="1" type="radio" class="check" name="isIsolation" />
					</label>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					<label class="mr3">
						否 &nbsp; <input value="0" type="radio" checked class="check" name="isIsolation" />
					</label>
				</div>
				
					<div id="isolation"  style="display: none;">
						具体隔离情况：
						<textarea name="isolation" class="w66 h20 form-control" placeholder="请输入具体隔离情况"></textarea>
					</div>
				
				<div>
					其他情况说明：
					<textarea maxlength="100" name="otherSituations" class="w66 h20 form-control" placeholder="请输入其他情况说明"></textarea>
				</div>
				
				<div class="t-c mt5">
					<input  type="submit" class="btn f30 btn-primary radius10 p2 w50" value="提交表单" />
				</div>
			</form>
				</li>
				
				<li>
					<!-- 基本信息 只能看不能修改-->
			<form action="" style="margin-left: 0px"  method="get" id="backForm" class="join" onsubmit="return doSubmit();">
				<div>
					姓名：
					<input type="text"  disabled class="w66 form-control" value="${user.realName }"  name="realName"  />
				</div>
				
				<div >
					性别：
					<label class="mr3"><br />
					男 &nbsp; <input type="radio" disabled class="check" name="gender" <c:if test="${empty user.gender || user.gender == '0'}">checked="checked"</c:if> value="0"/>
					</label>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					女  &nbsp;<label class="mr3"><input type="radio" disabled class="check" name="gender" <c:if test="${ user.gender == '1'}">checked="checked"</c:if> value="1" /></label>
				</div>
				
				<div>
					身份证号：
					<input type="text" name="idCard" id="idCard" disabled  value="${user.idCard }" class="w66  form-control"  />
				</div>
				
				<div>
					出生日期：
					<input type="text" class="w66  form-control" disabled name="birthday"  id="demo" value="${user.birthday }"   />
				</div>
				
				<div class="pt2 pb2">
					籍贯：
					<input type="text" value="${user.hometown }" disabled  class="w66  form-control" />
				</div>
				
				<div>
					电话：
					<input type="text" name="phone" disabled id="phone"  value="${user.phone }" class="w66  form-control"  />
				</div>
				
				<div>
					政治面貌：
					<input type="text" disabled  value="${user.politicalStatus }" class="w66 form-control"  />
				</div>
				
				<div>
					单位及职务：
					<input type="text" name="position" disabled  value="${user.position }" class="w66  form-control" />
				</div>
				
				</form>
				</li>
			</ul>
			</div>
		
		</div>
		<nav class="demo-bottomNav mt6 w75 h12 pt1 t-c f28 bg-color8 o-h clearfix">
			<jsp:include page="../bottom.jsp"></jsp:include>
		</nav>
		<script type="text/javascript">	 
		
			$(function(){
			
				 getCity()
			
				$("#hear li").click(function(){
					$(this).css({
						borderBottom: "2px solid red",
						height:"43px"
					}).siblings().css({
						borderBottom: "none",
						height:"45px"
					});
				});					
					
				$("#hear li").click(function(){
					$(this).addClass("action").siblings().removeClass("action");
					var index = $(this).index();
					$("#contentop li").eq(index).css("display","block").siblings().css("display","none");
				});
			});
		
		 $("input[name='isIsolation']").on("click",function(){
		 	if("1"==$(this).val()){
		 		$("#isolation").css('display','block');
		 	}else{
		 		$("#isolation").css('display','none');
		 	}
		   })
		
			$('.check').iCheck({
				checkboxClass: 'ui-checkbox check-primary',
				radioClass: 'ui-radio check-primary'
			});
			
			
function getCity() {
    var latlon = null;
    $.ajax({
        url: "http://api.map.baidu.com/location/ip?ak=91be0ab7e1e8a819585ec3586b5f0553&coor=bd09ll",
        type: "POST",
        dataType: "jsonp",
        success: function (data) {
            latlon = data.content.point.y + "," + data.content.point.x;
            //ajax根据经纬度获取省市区
            $.ajax({
                type: "POST",
                dataType: "jsonp",
                url: 'http://api.map.baidu.com/geocoder/v2/?ak=91be0ab7e1e8a819585ec3586b5f0553&callback=renderReverse&location=' + latlon + '&output=json&pois=0',
                success: function (response) {
                    if (response.status == 0) {
                        console.log(response.result.addressComponent.province + "-" + response.result.addressComponent.city + "-" + response.result.addressComponent.district);
                        city = response.result.addressComponent.city;
						document.getElementById("currPositionId").value=city;
						document.getElementById("currPosition").value=city;
                    }
                }
            });
        }
    });
}
		</script>
		<style>
		#hear{width: 100%;height: 44px;line-height: 45px;border-bottom: 1px solid #cccccc;}
				#hear a{font-weight: normal;color: black;}
				#hear li{text-align: center;float: left;height: 45px;}
				#hear li:nth-of-type(1){width: 50%;float: left;}
				#hear li:nth-of-type(2){width: 50%;float: right;}
				#contentop li{ width: 90%; display: none;margin: 0 auto;margin-top: 12px;}
				#contentop .action{ display: block;}
				#contentop span{font-size: 1.3em;color: #47B0D7;}
				#contentop .sty2{margin-top: 13px;}
				#contentop .sty3{margin-top: 13px;}
				#contentop .cllio {background:url(img/20010.png)repeat-x;width: 93%;height:8px;margin: 0 auto;margin-top: 5px;}
			
		form{
			line-height: 35px;
			margin-bottom: 80px;
		}
		
		</style>
	</body>

</html>