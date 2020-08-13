<%@tag pageEncoding="UTF-8"%>
<%@ tag import="java.util.List" %>
<%@ tag import="java.util.Iterator" %>
<%@ tag import="java.util.ArrayList" %>
<%@ tag import="java.util.Collection" %>
<%@ tag import="com.google.common.collect.Table" %>
<%@ tag import="com.bluebird.framework.cache.Cache" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ tag import="com.bluebird.framework.constant.SystemConstant" %>
<%@ attribute name="provinceId" type="java.lang.String" required="true"%>
<%@ attribute name="provinceValue" type="java.lang.String" required="false"%>
<%@ tag import="com.bluebird.framework.listener.ApplicationContextHolder" %>
<%@ tag import="com.bluebird.module.system.vo.RegionVo" %>
<%
    Cache cache = (Cache) ApplicationContextHolder.getBean("ehcacheImpl");
    //所有分类
    Table cacheTable = (Table)cache.get(SystemConstant.SYS_REGION_CACHEKEY);
    List<RegionVo> provinceList=new ArrayList();
    List<RegionVo> cityList=new ArrayList();
    List<RegionVo> countyList=new ArrayList();
    if(null!=cacheTable&&cacheTable.size()>0){
        //省级类别
        Collection collection=cacheTable.column("0").values();
        RegionVo regionVo;
        String province="";
        String city="";
        for (Iterator<RegionVo> iterator = collection.iterator(); iterator.hasNext();) {
            regionVo=iterator.next();
            provinceList.add(regionVo);
        }
    }
%>
<c:set var="provinceList" value="<%=provinceList%>"/>
<div id="provinceDiv" class="hidden">
    <option value="">请选择所在地</option>
    <c:forEach var="provinceList" items="${provinceList}">
        <option value="${provinceList.name}" ${provinceList.name==provinceValue?'selected':''}>${provinceList.name}</option>
    </c:forEach>
</div>
<script>
    $('#'+'${provinceId}').append($('#provinceDiv').html());
</script>