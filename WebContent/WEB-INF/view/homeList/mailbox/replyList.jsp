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
</head>

<body style="background: white;">
<jsp:include page="../../home/head.jsp"></jsp:include>
<div class="box">
		
		<div class="picture-list-content">
		<div class="article-list-content-info" style="width: 100%;">
			<div class="article-list-content-info-title">
				<img src="${root }/img/biao1.png" >
				<span class="p1">主席信箱</span>
			</div>
			
			<ul class="mailBoxList">
			<c:forEach items="${page.data}"
								var="content">
				<li>
				    <a href="${root}/home/module/findTbMailboxInfo?id=${content.mailboxId}">
				        <div class="txt">
				            <span class="title">
				                ${content.title}
				            </span>
							<span class="time">${content.replierDate}【MORE】</span>
				        </div>
				    </a>
				</li>
				</c:forEach>
			</ul>
			<c:if test="${page.totalPageNO>1}">
                        <tags:pagination formID="form1"></tags:pagination>
            </c:if>
		</div>
		
		</div>
		
		
		<jsp:include page="../../home/bottom.jsp"></jsp:include>	
</div>
<form action="${root}/home/module/findTbMailbox" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
        </form>
</body>
</html>