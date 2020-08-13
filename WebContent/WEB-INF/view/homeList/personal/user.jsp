<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<%@ page import="com.bluebird.components.common.TimeHelper" %>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title><%=SystemConstant.SYS_NAME%></title>
<link rel="stylesheet" href="${root}/css/page.css" />
		<link rel="shortcut icon" href="${root}/logo.png" type="image/x-icon"/>
	<link rel="stylesheet" href="${root}/components/ace/css/font.min.css"/>
<link href="${root}/css/info.css" rel="stylesheet">
<link rel="stylesheet" href="${root}/css/header.css" />
<link rel="stylesheet" href="${root}/css/index.css" />
<link href="${root}/css/list.css" rel="stylesheet">
<script type="text/javascript"
	src="${root}/components/jquery/jquery.min.js"></script>
<script type="text/javascript"
	src="${root}/js/index.js"></script>
	<script src="${root}/components/laydate/laydate.js"></script>
</head>

<body style="background: white;">
<jsp:include page="../../home/head.jsp"></jsp:include>
<div class="box">
	
		<div class="picture-list-content">
			<div class="picture-list-content-leftdh">
					<div class="content-js">
						个人中心
					</div>
					<div>
						<ul>
						<li tabindex='1'><a href="${root }/home/module/MyTbMailbox">我的留言</a></li>
							<c:if test="${not isMember }">
							<li tabindex='1' id="66666"><a href="${root }/home/module/member">会员信息</a></li>
							</c:if>
							<li tabindex='1' ><a href="${root }/home/module/getUserEdit">修改密码</a></li>
						</ul>
					</div>
					<div style="height: 30px; background: white;"></div>
			</div>
			
		<div class="article-list-content-info">
			<div class="article-list-content-info-title">
				<img src="${root }/img/biao1.png" >
				<span class="p1">会员信息</span>
			</div>
			<hr >
		      <div class="messlist">
				  <label>姓名：</label>
				  <input type="text" name="realName" style="background-color: #fff;" disabled required maxlength="20" value="${user.realName }" placeholder="请输入姓名" class="inputText300">
				  	<label>性别：</label>
					<input type="radio" name="gender" disabled <c:if test="${empty user.gender || user.gender == '0'}">checked="checked"</c:if> value="0"/> 男 &nbsp;&nbsp;&nbsp;&nbsp;
					<input type="radio" name="gender" disabled <c:if test="${ user.gender == '1'}">checked="checked"</c:if> value="1" /> 女
		     </div>
			 
			 <div class="messlist">
			 				  <label>身份证号：</label>
			 				  <input type="text" style="background-color: #fff;" name="idCard" disabled id="idCard" required maxlength="18" value="${user.idCard }" placeholder="请输入身份证号" class="inputText300">
			 				  	   <label>民族：</label>
				        <input type="text" style="background-color: #fff;" name="nation" disabled maxlength="20" value="${user.nation }" placeholder="请输入民族" class="inputText300">
			 </div>
			 
			  <div class="messlist">
					  <label>出生日期：</label>
					  <input style="background-color: #fff;" class=" inputText300" disabled name="birthday" required id="demo" value="${user.birthday }"> 
					 <label>电话：</label>
					 <input type="tel" style="background-color: #fff;" name="phone" id="phone" disabled required maxlength="11" value="${user.phone }" placeholder="请输入电话" class="inputText300">
			 </div>
			 
			  <div class="messlist">
			 		<label>学历：</label>
					<select disabled name="education" class="select-class">
						<c:forEach items="${education}" var="education">
									<option  value="${education.dicCode}"${education.dicCode==user.education?'selected':''}>${education.dicName}</option>
								</c:forEach>
					</select>
					<label>工资：</label>
					<input type="number" style="background-color: #fff;" disabled name="wage" value="${user.wage }" placeholder="" max="99999999" oninput="if(value.length>8)value=value.slice(0,8)" class="inputText300">
			 </div>
			 
			   <div class="messlist">
			 		<label>政治面貌：</label>
			 					<select disabled name="politicalStatus" class="select-class">
			 					<c:forEach items="${politicsStatus}" var="politicsStatus">
									<option  value="${politicsStatus.dicCode}"${politicsStatus.dicCode==user.politicalStatus?'selected':''}>${politicsStatus.dicName}</option>
								</c:forEach>
			 					</select>
			 					<label>籍贯：</label>
			 					<input style="background-color: #fff;" disabled type="text" value="${user.hometown }" name="hometown" required maxlength="30" placeholder="请输入籍贯" class="inputText300">
			 </div>
			 
			 <div class="messlist">
			  <label>出生地点：</label>
					  <input disabled style="background-color: #fff;" name="birthplace" value="${user.birthplace }" placeholder="请输入出生地点" class="inputTextzw">
			 </div>
			 <div class="messlist">
			 	<label>单位及职务：</label>
				<input type="text" style="background-color: #fff;" name="position" disabled required maxlength="50" value="${user.position }" placeholder="请输入工作单位及职务" class="inputTextzw">
			 </div>
			 <div class="messlist">
			 	<label>备注：</label>
				<input type="text" style="background-color: #fff;"  name="remark"  maxlength="100" value="${user.remark }" disabled class="inputTextzw">
			 </div>
		</div>
		
		</div>
		
		<jsp:include page="../../home/bottom.jsp"></jsp:include>	
</div>
<script>
// 	var data = '${byCondition.contentTypeId }';
	$("#66666").css({"background": "#b9e1fb"});
</script> 
</body>
</html>