<%@tag pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ attribute name="target" type="java.lang.String" required="false"%>
<c:if test="${not empty pageData.totalPageNO and pageData.totalPageNO>1}">
    <c:if test="${pageData.totalPageNO le 5 }"><!-- 总页数小于等于5页 -->
        <c:set var="begin" value="1"/>
        <c:set var="end" value="${pageData.totalPageNO}"/>
    </c:if>
    <c:if test="${pageData.totalPageNO gt 5 }"><!-- 总页数大于5页 -->
        <c:if test="${pageData.pageNO le 3}"><!-- 当前页数小于等于3-->
            <c:set var="begin" value="1"/>
            <c:set var="end" value="5"/>
        </c:if>
        <c:if test="${pageData.pageNO gt 3}"><!-- 当前页数大于3页 -->
            <c:if test="${pageData.pageNO+2 ge pageData.totalPageNO }"><!-- 当前页后推2页大于总页数 -->
                <c:set var="begin" value="${pageData.totalPageNO-4}"/>
                <c:set var="end" value="${pageData.totalPageNO}"/>
            </c:if>
            <c:if test="${pageData.pageNO+2 le pageData.totalPageNO }"><!-- 当前页后推2页小于等于总页数 -->
                <c:set var="begin" value="${pageData.pageNO-2}"/>
                <c:set var="end" value="${pageData.pageNO+2}"/>
            </c:if>
        </c:if>
    </c:if>
    <div class="paging">
        <a href="?pageNO=${pageData.pageNO==1?pageData.pageNO:pageData.pageNO-1}&pageSize=${pageData.pageSize}&sort=${pageData.sort}${target}" class="prev">上一页</a>
        <c:forEach var="i" begin="${begin}" end="${end}" step="1">
            <a href="?pageNO=${i}&pageSize=${pageData.pageSize}&sort=${pageData.sort}${target}" class="${pageData.pageNO==i?'on':''}">${i}</a>
        </c:forEach>
        <a href="?pageNO=${pageData.pageNO==pageData.totalPageNO?pageData.pageNO:pageData.pageNO+1}&pageSize=${pageData.pageSize}&sort=${pageData.sort}${target}" class="next">下一页</a>
        <span>共${pageData.totalPageNO}页&nbsp;&nbsp;${pageData.total}条记录，到第<input id="justPage" type="text" maxlength="5"/>页</span>
        <span class="pagingBtn" onclick="return justPage();" >确认</span>
    </div>
</c:if>
<script>
    function justPage(){
        var pageNO = $("#justPage").val();
        if(pageNO == ""){
            alertStyle("请输入想要跳转的页码！");
            $("#justPage").focus();
            return false;
        }else if(isNaN(pageNO)){
            alertStyle("请输入数字！");
            $("#justPage").focus();
            return false;
        }
        if(parseInt(pageNO)>parseInt('${pageData.totalPageNO}')){
            pageNO=${pageData.totalPageNO};
        }
        if(parseInt(pageNO)<=1){
            pageNO=1;
        }
        window.location.href="?pageNO=" + pageNO + "&pageSize=${pageData.pageSize}&sort=${pageData.sort}${target}";
    }
</script>