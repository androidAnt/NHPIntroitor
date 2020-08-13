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
    <!-- 字体图标 -->
		<link rel="stylesheet" type="text/css" href="${root}/components/plugins/fonticon/iconfont.css" />
	</head>
<body class="pb12 fadeIn animated">
		<header class="ui-header clearfix w75 h8 f46 pl3 pr3 color8 bg-color-primary t-c o-h">
			<div class="ui-header-c fl f30 w64">
				我要留言
			</div>
			<div>
<%-- 				<a href="${root }/app/module" class="icon color8 iconfont icon-home_light"></a> --%>
			<input type="image" style="width: 21px;height: 21px;padding-top: 2px;padding-right: 2px;" src="${root }/img/return.png"   onclick="javascript:history.go(-1);"/>
			</div>
		</header>
		<div class="p3 f30 f30 w75">
			<form action="${root }/app/module/TbMailbox" method="get" id="backForm" class="join" onsubmit="return doSubmit();">
				<div class="pt2 pb2">
					<label class="label-class">姓名：</label>
					<input type="text" disabled required maxlength="20" value="${name }" class="w45  form-control"  />
				</div>
				 <div >
					 <label class="label-class">所属组织：</label>
					<input type="text" disabled value="${orgName}" class="w45  form-control"  />
				</div>
				
				<div class="pt2 pb2">
					<label class="label-class">主题<span style="color:red;">*</span>：</label>
					<input type="text" placeholder="请输入主题" required maxlength="50" name="title" class="w45  form-control" placeholder="输入工作单位" />
				</div>
				<div class="mt4 mb4">
					<label class="label-class">留言内容<span style="color:red;">*</span>：</label>
					<textarea class="w45 h20 form-control" placeholder="请输入留言内容" required maxlength="300" name="content"></textarea>
				</div>
			<div class="t-c mt5">
					<input type="submit"  class="btn f30 btn-primary radius10 p2 w45" value="提交留言" />
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