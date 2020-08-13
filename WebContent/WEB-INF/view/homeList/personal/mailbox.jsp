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
			<div class="picture-list-content-leftdh">
					<div class="content-js">
						个人中心
					</div>
					<div>
						<ul>
						<li tabindex='1' id="66666"><a href="${root }/home/module/MyTbMailbox">我的留言</a></li>
							<c:if test="${isMember }">
							<li tabindex='1'><a href="${root }/home/module/initiation">我要入会</a></li>
							</c:if>
							<c:if test="${not isMember}">
							<li tabindex='1'><a href="${root }/home/module/member">会员信息</a></li>
							</c:if>
							<li tabindex='1' ><a href="${root }/home/module/getUserEdit">修改密码</a></li>
						</ul>
					</div>
					<div style="height: 30px; background: white;"></div>
			</div>
			
		<div class="article-list-content-info">
			<div class="article-list-content-info-title">
				<img src="${root}/img/biao1.png" >
				<span class="p1">我的留言</span>
				<span class="message-btn"><a href="${root }/home/module/getTbMailbox">我要留言></a></span>
			</div>
				<ul class="mailBoxList">
					<c:forEach items="${page.data}" var="content">
						<li><a
							href="${root}/home/module/TbMailboxPageInfo?id=${content.mailboxId}">
								<div class="txt">
								<c:if test="${content.auditorType==0}">
								<span class="title"> ${content.title}【未审核】 </span>
								</c:if>
								<c:if test="${content.auditorType==1}">
								 <c:if test="${content.replierType==1}">
								 <span class="title"> ${content.title}【已回复】 </span>
								 </c:if>
								 <c:if test="${content.replierType==0}">
								  <span class="title"> ${content.title}【审核已通过】 </span>
								 </c:if>
								</c:if>
								<c:if test="${content.auditorType==2}">
								<span class="title"> ${content.title}【审核未通过】 </span>
								</c:if>
									 <span class="time">${content.yymmdd}【MORE】</span>
								</div>
						</a></li>
					</c:forEach>
				</ul>
				<c:if test="${page.totalPageNO>1}">
					<tags:pagination formID="form1"></tags:pagination>
				</c:if>
			</div>
		</div>
		
		
		<jsp:include page="../../home/bottom.jsp"></jsp:include>	
</div>
<form action="${root}/home/module/MyTbMailbox" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
        </form>
<script>
// 	var data = '${byCondition.contentTypeId }';
	$("#66666").css({"background": "#b9e1fb"});
</script> 
</body>
</html>