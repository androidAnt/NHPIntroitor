<%@tag pageEncoding="UTF-8"%>
<%@ tag import="java.util.List" %>
<%@ tag import="java.util.Iterator" %>
<%@ tag import="java.util.ArrayList" %>
<%@ tag import="java.util.Collection" %>
<%@ tag import="com.google.common.collect.Table" %>
<%@ tag import="com.bluebird.framework.cache.Cache" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ tag import="com.bluebird.framework.constant.SystemConstant" %>
<%@ attribute name="cityId" type="java.lang.String" required="true" %>
<%@ attribute name="cityValue" type="java.lang.String" required="false" %>

<%@ attribute name="provinceId" type="java.lang.String" required="true"%>
<%@ attribute name="provinceValue" type="java.lang.String" required="false"%>


<%@ tag import="com.bluebird.framework.listener.ApplicationContextHolder" %>
<%@ tag import="com.bluebird.module.system.vo.RegionVo" %>
<%@ tag import="org.apache.commons.lang.StringUtils" %>

<%
    Cache cache = (Cache) ApplicationContextHolder.getBean("ehcacheImpl");
    //所有分类
    Table cacheTable = (Table)cache.get(SystemConstant.SYS_REGION_CACHEKEY);
    List<RegionVo> provinceList=new ArrayList();
    List<RegionVo> cityList=new ArrayList();
    //List<RegionVo> countyList=new ArrayList();
    if(null!=cacheTable&&cacheTable.size()>0){
        //省级类别
        Collection collection=cacheTable.column("0").values();
        RegionVo regionVo;
        String province="";
        String city="";
        for (Iterator<RegionVo> iterator = collection.iterator(); iterator.hasNext();) {
            regionVo=iterator.next();
            if(StringUtils.isNotEmpty(provinceValue)&&regionVo.getName().equals(provinceValue)){
                province=regionVo.getSrId().toString();
            }
            provinceList.add(regionVo);
        }
        if(StringUtils.isNotEmpty(cityValue)){
            Collection cityCollection=cacheTable.column(province).values();
            for (Iterator<RegionVo> iterator = cityCollection.iterator(); iterator.hasNext();) {
                regionVo=iterator.next();
                if(StringUtils.isNotEmpty(cityValue)&&regionVo.getName().equals(cityValue)){
                    city=regionVo.getSrId().toString();
                }
                cityList.add(regionVo);
            }
        }
        /*if(StringUtils.isNotEmpty(countyValue)){
            Collection countyCollection=cacheTable.column(city).values();
            for (Iterator<RegionVo> iterator = countyCollection.iterator(); iterator.hasNext();) {
                regionVo=iterator.next();
                countyList.add(regionVo);
            }
        }*/
    }
%>

<c:set var="provinceList" value="<%=provinceList%>"/>
<c:set var="cityList" value="<%=cityList%>"/>

<div id="provinceDiv" class="hidden">
    <option value="">请选择</option>
    <c:forEach var="provinceList" items="${provinceList}">
        <option value="${provinceList.name}" ${provinceList.name==provinceValue?'selected':''} data-keyId="${provinceList.srId}">${provinceList.name}</option>
    </c:forEach>
</div>
<div id="cityDiv" class="hidden">
    <option value="">请选择</option>
    <c:forEach var="cityList" items="${cityList}">
        <option value="${cityList.name}" ${cityList.name==cityValue?'selected':''} data-keyId="${cityList.srId}">${cityList.name}</option>
    </c:forEach>
</div>

<script>
    $('#'+'${provinceId}').append($('#provinceDiv').html());
    $('#'+'${cityId}').append($('#cityDiv').html());
    //$('#'+'${countyID}').append($('#countyDiv').html());
    
    $('#'+'${provinceId}').change(function(){
        $('#'+'${cityId}').empty();
        $('#'+'${countyID}').empty();
        getArae($(this).find('option:selected').attr('data-keyId'),'${cityId}');
    });
    /*$('#'+'${cityId}').change(function(){
        $('#'+'${countyID}').empty();
        getArae($(this).find('option:selected').attr('data-keyId'),'${countyID}');
    });*/
    function getArae(pIds,toId){
        $.ajax({
            type: 'POST',
            url: root + '/region/'+pIds,
            success: function (data) {
                var str='<option value="">请选择</option>';
               if(data){
                   for(var i=0;i<data.length;i++){
                       str+='<option value="'+data[i].name+'" data-keyId="'+data[i].srId+'">'+data[i].name+'</option>'
                   }
                   $("#"+toId).append(str);
               }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('#modal-ProfilePwd').modal('hide');
                showMes("0", "系统繁忙,请稍后再试");
            }
        });
    }
</script>