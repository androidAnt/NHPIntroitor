<%@ tag import="com.bluebird.framework.base.Page" %>
<%@tag pageEncoding="UTF-8" %>
<%@ attribute name="methodType" type="java.lang.String" required="false"%>
<%@ attribute name="pageNOID" type="java.lang.String" required="false" %>
<%@ attribute name="formID" type="java.lang.String" required="false" %>
<%@ attribute name="page" type="com.bluebird.framework.base.Page" required="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    if(null==methodType||methodType.equals("")){
        methodType="post";
    }
    if(null==pageNOID||pageNOID.equals("")){
        pageNOID="pageNO";
    }
    if(null==formID||formID.equals("")){
        formID="pageForm";
    }
    if(null==page){
        page=(Page)request.getAttribute("page");
    }
%>
<c:if test="${page.totalPageNO>1}">
    <c:set var="methodType" value="<%=methodType%>"/>
    <c:set var="pageNOID" value="<%=pageNOID%>"/>
    <c:set var="formID" value="<%=formID%>"/>
    <c:set var="page" value="<%=page%>"/>
    <c:if test="${page.totalPageNO le 5 }"><!-- 总页数小于等于5页 -->
        <c:set var="begin" value="1"/>
        <c:set var="end" value="${page.totalPageNO}"/>
    </c:if>
    <c:if test="${page.totalPageNO gt 5 }"><!-- 总页数大于5页 -->
        <c:if test="${page.pageNO le 3}"><!-- 当前页数小于等于3-->
            <c:set var="begin" value="1"/>
            <c:set var="end" value="5"/>
        </c:if>
        <c:if test="${page.pageNO gt 3}"><!-- 当前页数大于3页 -->
            <c:if test="${page.pageNO+2 ge page.totalPageNO }"><!-- 当前页后推2页大于总页数 -->
                <c:set var="begin" value="${page.totalPageNO-4}"/>
                <c:set var="end" value="${page.totalPageNO}"/>
            </c:if>
            <c:if test="${page.pageNO+2 le page.totalPageNO }"><!-- 当前页后推2页小于等于总页数 -->
                <c:set var="begin" value="${page.pageNO-2}"/>
                <c:set var="end" value="${page.pageNO+2}"/>
            </c:if>
        </c:if>
    </c:if>
    <!-- post请求 -->
    <c:if test="${methodType=='post'}">
        <thead>
        <tr>
            <th class="colspan">
                <nav class="page-nav">
                    <ul class="pagination ${formID}_paginationUL">
                        <li class="disabled"><span style="border:0;background-color: #F1F1F1;">共${page.total}条记录&nbsp;当前<span style="color:#629B58;">${page.pageNO}</span>/${page.totalPageNO}页&nbsp;每页${page.pageSize}条记录</span></li>
                        <c:if test="${page.pageNO==1 }">
                            <li class="disabled"><a href="javascript:void(0);" title="首页"><i class="fa fa-backward"></i></a></li>
                        </c:if>
                        <c:if test="${page.pageNO!=1 }">
                            <li><a href="javascript:void(0);" title="首页" data-pageNO="1"><i class="fa fa-backward"></i></a></li>
                        </c:if>
                        <c:forEach var="i" begin="${begin}" end="${end}" step="1">
                            <c:if test="${page.pageNO==i }">
                                <li class="active"><a href="javascript:void(0);">${i}</a></li>
                            </c:if>
                            <c:if test="${page.pageNO!=i }">
                                <li><a href="javascript:void(0);" data-pageNO="${i}">${i}</a></li>
                            </c:if>
                        </c:forEach>
                        <c:if test="${page.pageNO==page.totalPageNO }">
                            <li class="disabled"><a href="javascript:void(0);" title="尾页"><i class="fa fa-forward"></i></a></li>
                        </c:if>
                        <c:if test="${page.pageNO!=page.totalPageNO }">
                            <li><a href="javascript:void(0);" title="尾页" data-pageNO="${page.totalPageNO}"><i class="fa fa-forward"></i></a></li>
                        </c:if>
                    </ul>
                </nav>
            </th>
        </tr>
        </thead>
        <script>
            $('.${formID}_paginationUL').find('a').click(function () {
                $('#${formID}').find('#${pageNOID}').val($(this).attr('data-pageNO'));
                $('#${formID}').submit();
            });
        </script>
    </c:if>
    <!-- get请求 -->
    <c:if test="${methodType=='get'}">
        <thead>
        <tr>
            <th class="colspan">
                <nav class="page-nav">
                    <ul class="pagination">
                        <li class="disabled"><span style="border:0;background-color: #F1F1F1;">共${page.total}条记录&nbsp;当前<span style="color:#629B58;">${page.pageNO}</span>/${page.totalPageNO}页&nbsp;每页${page.pageSize}条记录</span></li>
                        <c:if test="${page.pageNO==1 }">
                            <li class="disabled"><a href="javascript:void(0);" title="首页"><i class="fa fa-backward"></i></a></li>
                        </c:if>
                        <c:if test="${page.pageNO!=1 }">
                            <li><a href="?pageNO=1&pageSize=${page.pageSize}&sort=${page.sort}&${searchParams}" title="首页"><i class="fa fa-backward"></i></a></li>
                        </c:if>
                        <c:forEach var="i" begin="${begin}" end="${end}" step="1">
                            <c:if test="${page.pageNO==i }">
                                <li class="active"><a href="javascript:void(0);">${i}</a></li>
                            </c:if>
                            <c:if test="${page.pageNO!=i }">
                                <li><a href="?pageNO=${i}&pageSize=${page.pageSize}&sort=${page.sort}&${searchParams}">${i}</a></li>
                            </c:if>
                        </c:forEach>
                        <c:if test="${page.pageNO==page.totalPageNO }">
                            <li class="disabled"><a href="javascript:void(0);" title="尾页"><i class="fa fa-forward"></i></a></li>
                        </c:if>
                        <c:if test="${page.pageNO!=page.totalPageNO }">
                            <li><a href="?pageNO=${totalPageNO}&pageSize=${page.pageSize}&sort=${page.sort}&${searchParams}" title="尾页"><i class="fa fa-forward"></i></a></li>
                        </c:if>
                    </ul>
                </nav>
            </th>
        </tr>
        </thead>
    </c:if>
    <script>
        var talbeObj=$('.colspan').parent('tr').parent('thead').parent('table');
        $('.colspan').attr('colspan',$(talbeObj).find('tr:eq(0) th').length)
    </script>
</c:if>
