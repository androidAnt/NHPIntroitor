<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<form action="${root}/admin/device" method="post" id="form1">
  <input type="hidden" name="msg" value="${paramMsg}"/>
  <c:forEach items="${paramMap}" var="item" varStatus="status">
    <input type="hidden" name="${item.key}" value="${item.value}"/>
  </c:forEach>
</form>
<script>
  $("#form1").submit();
</script>
