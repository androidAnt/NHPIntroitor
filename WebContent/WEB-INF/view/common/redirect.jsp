<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>

<form action="${root}/${action}" method="post" id="redirectForm" name="redirectForm">
    <c:forEach items="${paramMap}" var="item">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>
<script language="JavaScript">
    sessionStorage.setItem("msgItem","{status:'${status}',msg:'${msg}'}");
    document.redirectForm.submit();
</script>
