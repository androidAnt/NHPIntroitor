<%@tag pageEncoding="UTF-8"%>
<%@ tag import="com.google.common.collect.Table" %>
<%@ tag import="org.apache.commons.lang.StringUtils" %>
<%@ tag import="com.bluebird.framework.cache.Cache" %>
<%@ tag import="com.bluebird.module.admin.vo.CcCache "%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ tag import="com.bluebird.framework.constant.SystemConstant" %>
<%@ attribute name="firstId" type="java.lang.String" required="true"%>
<%@ attribute name="firstValue" type="java.lang.String" required="false"%>
<%@ attribute name="secondId" type="java.lang.String" required="false" %>
<%@ attribute name="secondValue" type="java.lang.String" required="false" %>
<%@ tag import="com.bluebird.framework.listener.ApplicationContextHolder" %>
<%@ tag import="java.util.*" %>
<%@ attribute name="secondEmptyValue" type="java.lang.String" required="false" %>
<%
    Cache cache = (Cache) ApplicationContextHolder.getBean("ehcacheImpl");
    //所有分类
    Table ccCacheTable = (Table)cache.get(SystemConstant.SYS_COMMODITY_CLASSIFY);
    List<CcCache> ccCacheList=new ArrayList();
    if(null!=ccCacheTable&&ccCacheTable.size()>0){
        //一级分类
        Collection collection=ccCacheTable.column("0").values();
        String childJson;
        CcCache ccCache;
        CcCache childCcCache;
        for (Iterator<CcCache> iterator = collection.iterator(); iterator.hasNext();) {
            ccCache=new CcCache();
            ccCache=iterator.next();
            if(StringUtils.isNotEmpty(secondId)){
                Collection childCollection=ccCacheTable.column(ccCache.getCcId()).values();//获取二级分类
                childJson="<option value=''>二级分类</option>";
                if(StringUtils.isNotEmpty(secondEmptyValue)){
                    childJson="<option value=''>"+secondEmptyValue+"</option>";
                }
                for (Iterator<CcCache> childIterator = childCollection.iterator(); childIterator.hasNext();) {
                    childCcCache=new CcCache();
                    childCcCache=childIterator.next();
                    if(StringUtils.isNotEmpty(secondValue)&&secondValue.equals(childCcCache.getCcId())){
                        childJson+="<option value='"+childCcCache.getCcId()+"' selected>"+childCcCache.getCname()+"</option>";
                    }else{
                        childJson+="<option value='"+childCcCache.getCcId()+"'>"+childCcCache.getCname()+"</option>";
                    }
                }
                ccCache.setChildJson(childJson);
            }
            ccCacheList.add(ccCache);
            Collections.sort(ccCacheList, new Comparator<CcCache>() {
                public int compare(CcCache arg0, CcCache arg1) {
                    return arg0.getSortNO().compareTo(arg1.getSortNO());
                }
            });
        }
    }
%>
<c:set var="ccCacheList" value="<%=ccCacheList%>"/>
<c:set var="firstValue" value="<%=firstValue%>"/>
<c:if test="${not empty secondId}">
    <div id="ccCacheListDiv" class="hidden">
        <c:forEach var="ccCacheList" items="${ccCacheList}">
            <option value="${ccCacheList.ccId}" data-child="${ccCacheList.childJson}" ${ccCacheList.ccId==firstValue?'selected':''}>${ccCacheList.cname}</option>
        </c:forEach>
    </div>
</c:if>
<c:if test="${empty secondId}">
    <div id="ccCacheListDiv" class="hidden">
        <c:forEach var="ccCacheList" items="${ccCacheList}">
            <option value="${ccCacheList.ccId}" ${ccCacheList.ccId==firstValue?'selected':''}>${ccCacheList.cname}</option>
        </c:forEach>
    </div>
</c:if>
<script>
    $('#'+'${firstId}').append($('#ccCacheListDiv').html());
    if('${firstValue}'&&'${firstValue}'!=''){
        $('#'+'${firstId}').val('${firstValue}');
    }
    if('${secondId}'&&'${secondId}'!=""){
        if($('#'+'${firstId}').val()!=''){
            $("#"+'${secondId}').empty();
            $("#"+'${secondId}').append($("#"+'${firstId}'+" option:selected").attr('data-child'));
        }
        $('#'+'${firstId}').change(function(){
            $("#"+'${secondId}').empty();
            $("#"+'${secondId}').append($("#"+'${firstId}'+" option:selected").attr('data-child'));
        });
        if('${secondValue}'&&'${secondValue}'!=''){
            $('#'+'${secondId}').val('${secondValue}');
        }
    }
</script>