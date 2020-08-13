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
	    <script src="${root}/components/laydate/laydate.js"></script>
	    <!-- 字体图标 -->
		<link rel="stylesheet" type="text/css" href="${root}/components/plugins/fonticon/iconfont.css" />
	</head>
<body class="pb12 fadeIn animated">
		<header class="ui-header clearfix w75 h8 f46 pl3 pr3 color8 bg-color-primary t-c o-h">
			<div class="ui-header-c fl f30 w64">
				会员信息
			</div>
			<div>
<%-- 				<a href="${root }/app/module" class="icon color8 iconfont icon-home_light"></a> --%>
			<input type="image" style="width: 21px;height: 21px;padding-top: 2px;padding-right: 2px;" src="${root }/img/return.png"   onclick="javascript:history.go(-1);"/>
			</div>
		</header>
		<div class="p3 f30 f30 w75">
			<form action="${root }/app/module/myInitiation" method="get" id="backForm" class="join" onsubmit="return doSubmit();">
				<div class="pt2 pb2">
					<label class="label-class-user">姓名：</label>
					<input type="text" required maxlength="20" disabled value="${user.realName }" class="w45  form-control" name="realName" placeholder="输入姓名" />
				</div>
				
				<div class="mt4 mb4">
					<label class="label-class-user">性别：</label>
					<label class="mr3"><input type="radio" disabled class="check" name="gender" <c:if test="${empty user.gender || user.gender == '0'}">checked="checked"</c:if> value="0"/>男</label>
					<label class="mr3"><input type="radio" disabled class="check" name="gender" <c:if test="${ user.gender == '1'}">checked="checked"</c:if> value="1" />女</label>
				</div>
				<div class="pt2 pb2">
					<label class="label-class-user">民族：</label>
					<input type="text" name="nation" required disabled maxlength="20" value="${user.nation }" class="w45  form-control" placeholder="输入民族" />
				</div>
				<div class="pt2 pb2">
					<label class="label-class-user">身份证号：</label>
					<input type="text" name="idCard" id="idCard" disabled required maxlength="18" value="${user.idCard }" class="w45  form-control" placeholder="输入身份证号" />
				</div>
				
				<div class="pt2 pb2">
					<label class="label-class-user">出生日期：</label>
					<input type="text" class="w45  form-control" disabled name="birthday" required id="demo" value="${user.birthday }"  placeholder="输入出生日期" />
				</div>
				<div class="pt2 pb2">
					<label class="label-class-user">电话：</label>
					<input type="text" name="phone" disabled id="phone" required maxlength="11" value="${user.phone }" class="w45  form-control" placeholder="输入电话" />
				</div>
				<div style="padding-bottom: 10px;">
					<label class="label-class-user">学历：</label>
					<input type="text"  disabled  value="${user.education }" class="w45  form-control" placeholder="输入电话" />
				</div>
				
				<div style="padding-bottom: 10px;">
					<label class="label-class-user">政治面貌：</label>
					<input type="text" disabled  value="${user.politicalStatus }" class="w45  form-control" placeholder="输入电话" />
				</div>
				
				 <div >
					 <label class="label-class-user">工资：</label>
					<input type="number" name="wage" disabled value="${user.wage }" class="w45  form-control" oninput="if(value.length>8)value=value.slice(0,8)"  max="99999999" />
				</div>
				
				<div class="pt2 pb2">
					<label class="label-class-user">单位及职务：</label>
					<input type="text" name="position" disabled required maxlength="50" value="${user.position }" class="w45  form-control" placeholder="输入工作单位" />
				</div>
				<div class="pt2 pb2">
					<label class="label-class-user">籍贯：</label>
					<input type="text" value="${user.hometown }" disabled name="hometown" required maxlength="30" class="w45  form-control" placeholder="输入籍贯" />
				</div>
				<div class="pt2 pb2">
					<label class="label-class-user">出生地址：</label>
					<input type="text" required maxlength="30" disabled name="birthplace" value="${user.birthplace }" class="w45  form-control" placeholder="输入出生地址" />
				</div>
				<div class="mt4 mb4">
					<label class="label-class-user">备注：</label>
					<textarea class="w45 h20 form-control" name="remark"  maxlength="50" disabled placeholder="备注">${user.remark }</textarea>
				</div>
			</form>
		</div>
		<nav class="demo-bottomNav mt6 w75 h12 pt1 t-c f28 bg-color8 o-h clearfix">
			<jsp:include page="../bottom.jsp"></jsp:include>
		</nav>
		<script type="text/javascript">
		
		</script>
	</body>

</html>