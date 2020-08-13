<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<c:set var="ctx" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>


<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="utf-8"/>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <script type="text/javascript" src="${ctx}/js/jquery-2.1.3.min.js"></script>
    <title>确认支付</title>
</head>
<body>
<form id="alipaysubmit" name="alipaysubmit" action="https://mapi.alipay.com/gateway.do?_input_charset=utf-8" method="get">
    <c:forEach items="${payMap}" var="item">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
    <input type="submit" value="确认" style="display: none;">
</form>
<script>
    $(function(){
    	document.forms['alipaysubmit'].submit();
    });
    
</script>
</body>
</html>
