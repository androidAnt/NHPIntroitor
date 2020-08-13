<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="${root}/components/kindeditor/themes/default/default.css" />
<script charset="utf-8" src="${root}/components/kindeditor/kindeditor-min.js"></script>
<script charset="utf-8" src="${root}/components/kindeditor/lang/zh_CN.js"></script>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading"><span class="fa fa-file-text-o" aria-hidden="true"></span><b>检验设备详情</b></div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/admin/device" method="post" id="form1" class="form-horizontal">
                
	            <c:forEach items="${paramMap}" var="item" varStatus="status">
	                    <input type="hidden" name="${item.key}" value="${item.value}"/>
	            </c:forEach>
                <div class="col-lg-12">
                              <!-- 公共部分 -->
                    <div class="form-group">
                        <label for="gDeviceNo" class="col-md-2 control-label col-xs-4">检验设备编号：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gDeviceNo" id="gDeviceNo" maxlength="25"
                                   placeholder="检验设备编号" required value="${device.gDeviceNo}">
                        </div>
                      <label for="gDeviceName" class="col-md-2 control-label col-xs-4">检验设备名称：</label>
                       <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gDeviceName" id="gDeviceName" maxlength="25"
                                   placeholder="检验设备名称" required value="${device.gDeviceName}">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="gDeviceType" class="col-md-2 control-label col-xs-4">检验设备类型：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="gDeviceType" id="gDeviceType" maxlength="25"
                                   placeholder="检验设备类型" required value="${device.gDeviceType}">
                        </div>
                         <label for="gDeviceModel" class="col-md-2 control-label col-xs-4">设备型号：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="gDeviceModel" id=”gDeviceModel" maxlength="25"
                                   placeholder="设备型号" required value="${device.gDeviceModel}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gDeviceCode" class="col-md-2 control-label col-xs-4">检验设备代码：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gDeviceCode" id="gDeviceCode" maxlength="25"
                                   placeholder="检验设备代码" required value="${device.gDeviceCode}">
                        </div>
                         <label for="gDeviceClass" class="col-md-2 control-label col-xs-4">设备品种：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gDeviceClass" id="gDeviceClass" maxlength="25"
                                   placeholder="设备品种" required value="${device.gDeviceClass}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gDeviceLocation" class="col-md-2 control-label col-xs-4">设备使用地点：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gDeviceLocation" id="gDeviceLocation" maxlength="25"
                                   placeholder="设备使用地点" required value="${device.gDeviceLocation}">
                        </div>
                         <label for="gSiteType" class="col-md-2 control-label col-xs-4">场地类型：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gSiteType" id="gSiteType" maxlength="25"
                                   placeholder="场地类型" required value="${device.gSiteType=='0'?'气田':'油田'}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gUseCard" class="col-md-2 control-label col-xs-4">使用证号：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gUseCard" id="gUseCard" maxlength="25"
                                   placeholder="使用证号" required value="${device.gUseCard}">
                        </div>
                         <label for="gRegisterCode" class="col-md-2 control-label col-xs-4">注册代码：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="gRegisterCode" id="gRegisterCode" maxlength="25"
                                   placeholder="注册代码" required value="${device.gRegisterCode}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gInstalCompany" class="col-md-2 control-label col-xs-4">安装单位：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gInstalCompany" id="gInstalCompany" maxlength="25"
                                   placeholder="安装单位" required value="${device.gInstalCompany}">
                        </div>
                         <label for="gDesignCompany" class="col-md-2 control-label col-xs-4">设计单位：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="gDesignCompany" id="gDesignCompany" maxlength="25"
                                   placeholder="设计单位" required value="${device.gDesignCompany}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gMakeDate" class="col-md-2 control-label col-xs-4">制造日期：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gMakeDate" id="gMakeDate" maxlength="25"
                                   placeholder="制造日期" required value="${fn:substring(device.gMakeDate,0,10)}">
                        </div>
                         <label for="gUseDate" class="col-md-2 control-label col-xs-4">投用日期：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gUseDate" id="gUseDate" maxlength="25"
                                   placeholder="投用日期" required value="${fn:substring(device.gUseDate,0,10)}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gRealUseYears" class="col-md-2 control-label col-xs-4">实际使用年限：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gSiteType" id="gSiteType" maxlength="25"
                                   placeholder="实际使用年限" required value="${device.gSiteType}">
                        </div>
                         <label for="gFactoryNumber" class="col-md-2 control-label col-xs-4">出厂编号：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gSiteType" id="gSiteType" maxlength="25"
                                   placeholder="出厂编号" required value="${device.gSiteType}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gLongitude" class="col-md-2 control-label col-xs-4">经度：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="gLongitude" id="gLongitude" maxlength="25"
                                   placeholder="经度" required value="${device.gLongitude}">
                        </div>
                         <label for="gLatitude" class="col-md-2 control-label col-xs-4">纬度：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="gLatitude" id="gLatitude" maxlength="25"
                                   placeholder="纬度" required value="${device.gLatitude}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gQualityLevel" class="col-md-2 control-label col-xs-4">质检等级：</label>
                        <div class="col-md-4 col-xs-8">
                          <select  name="gQualityLevel" id="gQualityLevel" disabled required class="form-control">
						      <option value="0" <c:if test="${device.gQualityLevel=='0' }">selected="selected"</c:if>>1级</option>
                              <option value="1" <c:if test="${device.gQualityLevel=='1' }">selected="selected"</c:if>>2级</option>
                              <option value="2" <c:if test="${device.gQualityLevel=='2' }">selected="selected"</c:if>>3级</option>
                              <option value="3" <c:if test="${device.gQualityLevel=='3' }">selected="selected"</c:if>>4级</option>
                              <option value="4" <c:if test="${device.gQualityLevel=='4' }">selected="selected"</c:if>>5级</option>
                          </select>
                        </div>
                         <label for="gInspectionDate" class="col-md-2 control-label col-xs-4">下次检验日期：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gInspectionDate" id="gInspectionDate" maxlength="25"
                                   placeholder="下次检验日期" required value="${fn:substring(device.gInspectionDate,0,10)}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gFocus" class="col-md-2 control-label col-xs-4">重点设备：</label>
                        <div class="col-md-4 col-xs-8">
                             <input type="text" class="form-control" readonly name="gFocus" id="gFocus" maxlength="25"
                                   placeholder="重点设备" required value="${device.gFocus=='0'?'是':'否'}">
                        </div>
                         <label for="gFocusCause" class="col-md-2 control-label col-xs-4">重点设备原因：</label>
                        <div class="col-md-4 col-xs-8">
                             <input type="text" class="form-control" readonly name="gFocusCause" id="gFocusCause" maxlength="25"
                                   placeholder="重点设备原因" required value="${device.gFocusCause}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gHigh" class="col-md-2 control-label col-xs-4">高：</label>
                        <div class="col-md-4 col-xs-8">
                             <input type="text" class="form-control" readonly name="gHigh" id="gHigh" maxlength="25"
                                   placeholder="高" required value="${device.gHigh}">
                        </div>
                         <label for="gLasting" class="col-md-2 control-label col-xs-4">长：</label>
                        <div class="col-md-4 col-xs-8">
                             <input type="text" class="form-control" readonly name="gLasting" id="gLasting" maxlength="25"
                                   placeholder="长" required value="${device.gLasting}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gMainStructure" class="col-md-2 control-label col-xs-4">主体结构形式：</label>
                        <div class="col-md-4 col-xs-8">
                             <select  name="gMainStructure" id="gMainStructure" disabled required class="form-control">
						      <option value="0" <c:if test="${device.gMainStructure=='0' }">selected="selected"</c:if>>单腔</option>
                              <option value="1" <c:if test="${device.gMainStructure=='1' }">selected="selected"</c:if>>多腔</option>
                              <option value="2" <c:if test="${device.gMainStructure=='2' }">selected="selected"</c:if>>球形</option>
                              <option value="3" <c:if test="${device.gMainStructure=='3' }">selected="selected"</c:if>>圆筒形</option>
                              <option value="4" <c:if test="${device.gMainStructure=='4' }">selected="selected"</c:if>>塔器</option>
                              <option value="5" <c:if test="${device.gMainStructure=='4' }">selected="selected"</c:if>>其他</option>
                          </select>
                        </div>
                         <label for="gDesignUseYears" class="col-md-2 control-label col-xs-4">设计使用年限：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gLasting" id="gLasting" maxlength="25"
                                   placeholder="长" required value="${device.gLasting}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gInstalShape" class="col-md-2 control-label col-xs-4">安装形式：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gInstalShape" id="gInstalShape" maxlength="25"
                                   placeholder="安装形式" required value="${device.gInstalShape==0?'立式':'卧式'}">
                        </div>
                         <label for="gVolume" class="col-md-2 control-label col-xs-4">容积：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gVolume" id="gVolume" maxlength="25"
                                   placeholder="容积" required value="${device.gVolume}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gSupportStyle" class="col-md-2 control-label col-xs-4">支座形式：</label>
                        <div class="col-md-4 col-xs-8">
                          <select  name="gSupportStyle" id="gSupportStyle" disabled required class="form-control">
						      <option value="0" <c:if test="${device.gMainStructure=='0' }">selected="selected"</c:if>>鞍式</option>
                              <option value="1" <c:if test="${device.gMainStructure=='1' }">selected="selected"</c:if>>裙式</option>
                              <option value="2" <c:if test="${device.gMainStructure=='2' }">selected="selected"</c:if>>支柱</option>
                          </select>
                        </div>
                         <label for="gUsePressure" class="col-md-2 control-label col-xs-4">使用压力：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="gUsePressure" id="gUsePressure" maxlength="25"
                                   placeholder="使用压力" required value="${device.gUsePressure}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gNorm" class="col-md-2 control-label col-xs-4">产品标准：</label>
                        <div class="col-md-4 col-xs-8">
                       <select  class="form-control" id="gNorm" name="gNorm"> 
                           	<option value="GB150-89" <c:if test="${device.gNorm=='0' }">selected="selected"</c:if>>GB150-89</option>
                           	<option value="GB150-1998" <c:if test="${device.gNorm=='GB150-1998' }">selected="selected"</c:if>>GB150-1998</option>
                           	<option value="GB741-80" <c:if test="${device.gNorm=='GB741-80' }">selected="selected"</c:if>>GB741-80</option>
                           	<option value="GB12337-1998" <c:if test="${device.gNorm=='GB12337-1998' }">selected="selected"</c:if>>GB12337-1998</option>
                           	<option value="GB151-89" <c:if test="${device.gNorm=='GB151-89' }">selected="selected"</c:if>>GB151-89</option>
                           	<option value="GB151-1999" <c:if test="${device.gNorm=='GB151-1999' }">selected="selected"</c:if>>GB151-1999</option>
                           	<option value="GB151-2000" <c:if test="${device.gNorm=='GB151-2000' }">selected="selected"</c:if>>GB151-2000</option>
                           	<option value="[美]ASME VIII" <c:if test="${device.gNorm=='[美]ASME VIII' }">selected="selected"</c:if>>[美]ASME VIII</option>
                            <option value="[日]JIS" <c:if test="${device.gNorm=='[日]JIS' }">selected="selected"</c:if>>[日]JIS</option>
                            <option value="[德]AD" <c:if test="${device.gNorm=='[德]AD' }">selected="selected"</c:if>>[德]AD</option>
                            <option value="[法]CODAP" <c:if test="${device.gNorm=='[法]CODAP' }">selected="selected"</c:if>>[法]CODAP</option>
                            <option value="[英]BS5500" <c:if test="${device.gNorm=='[英]BS5500' }">selected="selected"</c:if>>[英]BS5500</option>
                            <option value="不详" <c:if test="${device.gNorm=='不详' }">selected="selected"</c:if>>不详</option>
                        </select>
                        </div>
                         <label for="gUseTemper" class="col-md-2 control-label col-xs-4">使用温度：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="gUseTemper" id="gUseTemper" maxlength="25"
                                   placeholder="使用温度" required value="${device.gUseTemper}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gVolumeDiameter" class="col-md-2 control-label col-xs-4">容积内径：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="gVolumeDiameter" id="gVolumeDiameter" maxlength="25"
                                   placeholder="容积内径" required value="${device.gVolumeDiameter}">
                        </div>
                        <label for="createUser" class="col-md-2 control-label col-xs-4">创建人：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="createUser" id="createUser" maxlength="25"
                                   placeholder="创建人" required value="${device.createUser}">
                        </div>
                    </div>
                    
               <c:if test="${device.gDeviceType eq '锅炉'}">
                   <div class="form-group">
                        <label for="tBoilerLocation" class="col-md-2 control-label col-xs-4">锅炉位置：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="tBoilerLocation" id="tBoilerLocation" maxlength="25"
                                   placeholder="锅炉位置" required value="${device.tBoilerLocation}">
                        </div>
                        <label for="tNominalOut" class="col-md-2 control-label col-xs-4">额定出力：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="tNominalOut" id="tNominalOut" maxlength="25"
                                   placeholder="额定出力" required value="${device.tNominalOut}">
                        </div>
                    </div>
                  
                     <div class="form-group">
                        <label for="tNominalPressure" class="col-md-2 control-label col-xs-4">额定压力：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="tNominalPressure" id="tNominalPressure" maxlength="25"
                                   placeholder="额定压力" required value="${device.tNominalPressure}">
                        </div>
                        <label for="tBoilerUse" class="col-md-2 control-label col-xs-4">锅炉用途：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="tBoilerUse" id="tBoilerUse" maxlength="25"
                                   placeholder="锅炉用途" required value="${device.tBoilerUse}">
                        </div>
                    </div>
                   
                    <div class="form-group">
                        <label for="tFuelType" class="col-md-2 control-label col-xs-4">燃料种类：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="tFuelType" id="tFuelType" maxlength="25"
                                   placeholder="燃料种类" required value="${device.tFuelType}">
                        </div>
                        <label for="tOutTemperature" class="col-md-2 control-label col-xs-4">出口温度：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="tOutTemperature" id="tOutTemperature" maxlength="25"
                                   placeholder="出口温度" required value="${device.tOutTemperature}">
                        </div>
                    </div>
                  
                   <div class="form-group">
                        <label for="tBoilerMedium" class="col-md-2 control-label col-xs-4">锅炉介质：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="tBoilerMedium" id="tBoilerMedium" maxlength="25"
                                   placeholder="锅炉介质" required value="${device.tBoilerMedium}">
                        </div>
                        <label for="tWaterTreatment" class="col-md-2 control-label col-xs-4">水处理形式：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="tWaterTreatment" id="tWaterTreatment" maxlength="25"
                                   placeholder="水处理形式" required value="${device.tWaterTreatment}">
                        </div>
                    </div>
                  
                      <div class="form-group">
                        <label for="tSimplified" class="col-md-2 control-label col-xs-4">简体：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="tSimplified" id="tSimplified" maxlength="25"
                                   placeholder="简体" required value="${device.tSimplified}">
                        </div>
                        <label for="tSimplified" class="col-md-2 control-label col-xs-4">额定温度：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="ratedTemperature" id="ratedTemperature" maxlength="25"
                                   placeholder="额定温度" required value="${device.ratedTemperature}">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="tSimplified" class="col-md-2 control-label col-xs-4">回流温度：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="reflowTemperature" id="reflowTemperature" maxlength="25"
                                   placeholder="回流温度" required value="${device.reflowTemperature}">
                        </div>
                      </div>
                     
                </c:if>
                    
              <c:if test="${device.gDeviceType eq '压力容器'}">
                  <div class="form-group">
                        <label for="containerStructure" class="col-md-2 control-label col-xs-4">容器结构：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="containerStructure" id="containerStructure" maxlength="25"
                                   placeholder="容器结构" required value="${device.containerStructure}">
                        </div>
                        <label for="safeLevel" class="col-md-2 control-label col-xs-4">安全等级：</label>
                        <div class="col-md-4 col-xs-8">
                             <select  name="safeLevel" id="safeLevel" disabled required class="form-control">
						      <option value="0" <c:if test="${device.safeLevel=='0' }">selected="selected"</c:if>>1级</option>
                              <option value="1" <c:if test="${device.safeLevel=='1' }">selected="selected"</c:if>>2级</option>
                              <option value="2" <c:if test="${device.safeLevel=='2' }">selected="selected"</c:if>>3级</option>
                              <option value="3" <c:if test="${device.safeLevel=='3' }">selected="selected"</c:if>>4级</option>
                              <option value="4" <c:if test="${device.safeLevel=='4' }">selected="selected"</c:if>>5级</option>
                          </select>
                        </div>
                    </div>
                  
                     <div class="form-group">
                        <label for="containerNo" class="col-md-2 control-label col-xs-4">容器编号：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="containerNo" id="containerNo" maxlength="25"
                                   placeholder="容器编号" required value="${device.containerNo}">
                        </div>
                        <label for="maxCharge" class="col-md-2 control-label col-xs-4">最大允许容装量：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="maxCharge" id="maxCharge" maxlength="25"
                                   placeholder="最大允许容装量" required value="${device.maxCharge}">
                        </div>
                    </div>
                   
                    <div class="form-group">
                        <label for="thermalInsulation" class="col-md-2 control-label col-xs-4">保温绝热方式：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="thermalInsulation" id="thermalInsulation" maxlength="25"
                                   placeholder="保温绝热方式" required value="${device.thermalInsulation}">
                        </div>
                        <label for="pressureLevel" class="col-md-2 control-label col-xs-4">压力等级：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="pressureLevel" id="pressureLevel" maxlength="25"
                                   placeholder="压力等级" required value="${device.pressureLevel}">
                        </div>
                    </div>
                  
                   <div class="form-group">
                        <label for="containerType" class="col-md-2 control-label col-xs-4">容器分类：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="containerType" id="containerType" maxlength="25"
                                   placeholder="容器分类" required value="${device.containerType}">
                        </div>
                        <label for="containerClass" class="col-md-2 control-label col-xs-4">容器类别：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="containerClass" id="containerClass" maxlength="25"
                                   placeholder="容器类别" required value="${device.containerClass}">
                        </div>
                    </div>
                  
                      <div class="form-group">
                        <label for="makeSpecification" class="col-md-2 control-label col-xs-4">制作规范：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="makeSpecification" id="makeSpecification" maxlength="25"
                                   placeholder="制作规范" required value="${device.makeSpecification}">
                        </div>
                        <label for="containerDrawingNo" class="col-md-2 control-label col-xs-4">容器图号：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="containerDrawingNo" id="containerDrawingNo" maxlength="25"
                                   placeholder="容器图号" required value="${device.containerDrawingNo}">
                        </div>
                    </div>
                 
                  <div class="form-group">
                        <label for="designSpecification" class="col-md-2 control-label col-xs-4">设计规范：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="designSpecification" id="designSpecification" maxlength="25"
                                   placeholder="设计规范" required value="${device.designSpecification}">
                        </div>
                        <label for="designDate" class="col-md-2 control-label col-xs-4">设计日期：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="designDate" id="designDate" maxlength="25"
                                   placeholder="设计日期" required value="${fn:substring(device.designDate,0,10)}">
                        </div>
                    </div>
                 
                    <div class="form-group">
                        <label for="designPressure" class="col-md-2 control-label col-xs-4">设计压力：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="designPressure" id="designPressure" maxlength="25"
                                   placeholder="设计压力" required value="${device.designPressure}">
                        </div>
                        <label for="designTemperature" class="col-md-2 control-label col-xs-4">设计温度：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="designTemperature" id="designTemperature" maxlength="25"
                                   placeholder="设计温度" required value="${device.designTemperature}">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="safeModel" class="col-md-2 control-label col-xs-4">安全阀型号及规格：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="safeModel" id="safeModel" maxlength="25"
                                   placeholder="安全阀型号及规格" required value="${device.safeModel}">
                        </div>
                        <label for="nominalHead" class="col-md-2 control-label col-xs-4">公称壁厚/封头：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="nominalHead" id="nominalHead" maxlength="25"
                                   placeholder="公称壁厚/封头" required value="${device.nominalHead}">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="nominalBarrel" class="col-md-2 control-label col-xs-4">公称壁厚/筒体：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="nominalBarrel" id="nominalBarrel" maxlength="25"
                                   placeholder="公称壁厚/筒体" required value="${device.nominalBarrel}">
                        </div>
                        <label for="corrosionHead" class="col-md-2 control-label col-xs-4">腐蚀裕度/封头：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="corrosionHead" id="corrosionHead" maxlength="25"
                                   placeholder="腐蚀裕度/封头" required value="${device.corrosionHead}">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="corrosionBarrel" class="col-md-2 control-label col-xs-4">腐蚀裕度/筒体：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="corrosionBarrel" id="corrosionBarrel" maxlength="25"
                                   placeholder="腐蚀裕度/筒体" required value="${device.corrosionBarrel}">
                        </div>
                        <label for="materialHead" class="col-md-2 control-label col-xs-4">主体材质/封头：</label>
                        <div class="col-md-4 col-xs-8">
                         <select  class="form-control" id="materialHead" name="materialHead"> 
                           <option value="16MnR" <c:if test="${device.materialHead=='16MnR'}">selected="selected"</c:if>>16MnR</option>
                           <option value="Q235A" <c:if test="${device.materialHead=='Q235A'}">selected="selected"</c:if>>Q235A</option>
                           <option value="Q235B" <c:if test="${device.materialHead=='Q235B'}">selected="selected"</c:if>>Q235B</option>
                           <option value="Q235C" <c:if test="${device.materialHead=='Q235C'}">selected="selected"</c:if>>Q235C</option>
                           <option value="1Cr-18Ni9Ii" <c:if test="${device.materialHead=='1Cr-18Ni9Ii'}">selected="selected"</c:if>>1Cr-18Ni9Ii</option>
                           <option value="1Cr-18Ni9" <c:if test="${device.materialHead=='1Cr-18Ni9'}">selected="selected"</c:if>>1Cr-18Ni9</option>
                           <option value="OCr-18Ni9Ii" <c:if test="${device.materialHead=='OCr-18Ni9Ii'}">selected="selected"</c:if>>1Cr-18Ni9</option>
                           <option value="OCr-18Ni9" <c:if test="${device.materialHead=='OCr-18Ni9'}">selected="selected"</c:if>>1Cr-18Ni9</option>
                           <option value="15MnUR" <c:if test="${device.materialHead=='15MnUR'}">selected="selected"</c:if>>15MnUR</option>
                           <option value="16MnDR" <c:if test="${device.materialHead=='16MnDR'}">selected="selected"</c:if>>16MnDR</option>
                           <option value="SUS304" <c:if test="${device.materialHead=='SUS304'}">selected="selected"</c:if>>SUS304</option>
                           <option value="20R" <c:if test="${device.materialHead=='20R'}">selected="selected"</c:if>>20R</option>
                           <option value="20G" <c:if test="${device.materialHead=='20G'}">selected="selected"</c:if>>20G</option>
                           <option value="20#" <c:if test="${device.materialHead=='20#'}">selected="selected"</c:if>>20#</option>
                           <option value="A3" <c:if test="${device.materialHead=='A3'}">selected="selected"</c:if>>A3</option>
                        </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="materialBarrel" class="col-md-2 control-label col-xs-4">主体材质/筒体：</label>
                        <div class="col-md-4 col-xs-8">
                        <select  class="form-control" id="materialBarrel" name="materialBarrel"> 
                           <option value="16MnR" <c:if test="${device.materialBarrel=='16MnR'}">selected="selected"</c:if>>16MnR</option>
                           <option value="Q235A" <c:if test="${device.materialBarrel=='Q235A'}">selected="selected"</c:if>>Q235A</option>
                           <option value="Q235B" <c:if test="${device.materialBarrel=='Q235B'}">selected="selected"</c:if>>Q235B</option>
                           <option value="Q235C" <c:if test="${device.materialBarrel=='Q235C'}">selected="selected"</c:if>>Q235C</option>
                           <option value="1Cr-18Ni9Ii" <c:if test="${device.materialBarrel=='1Cr-18Ni9Ii'}">selected="selected"</c:if>>1Cr-18Ni9Ii</option>
                           <option value="1Cr-18Ni9" <c:if test="${device.materialBarrel=='1Cr-18Ni9'}">selected="selected"</c:if>>1Cr-18Ni9</option>
                           <option value="OCr-18Ni9Ii" <c:if test="${device.materialBarrel=='OCr-18Ni9Ii'}">selected="selected"</c:if>>OCr-18Ni9Ii</option>
                           <option value="OCr-18Ni9" <c:if test="${device.materialBarrel=='OCr-18Ni9'}">selected="selected"</c:if>>OCr-18Ni9</option>
                           <option value="15MnUR" <c:if test="${device.materialBarrel=='15MnUR'}">selected="selected"</c:if>>15MnUR</option>
                           <option value="16MnDR" <c:if test="${device.materialBarrel=='16MnDR'}">selected="selected"</c:if>>16MnDR</option>
                           <option value="SUS304" <c:if test="${device.materialBarrel=='SUS304'}">selected="selected"</c:if>>SUS304</option>
                           <option value="20R" <c:if test="${device.materialBarrel=='20R'}">selected="selected"</c:if>>20R</option>
                           <option value="20G" <c:if test="${device.materialBarrel=='20G'}">selected="selected"</c:if>>20G</option>
                           <option value="20#" <c:if test="${device.materialBarrel=='20#'}">selected="selected"</c:if>>20#</option>
                           <option value="A3" <c:if test="${device.materialBarrel=='A3'}">selected="selected"</c:if>>A3</option>
                        </select>
                        </div>
                        <label for="ruptureType" class="col-md-2 control-label col-xs-4">爆破片型号：</label>
                        <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" readonly name="ruptureType" id="ruptureType" maxlength="25"
                                   placeholder="爆破片型号" required value="${device.ruptureType}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="ruptureSpecification" class="col-md-2 control-label col-xs-4">爆破片规格：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="ruptureSpecification" id="ruptureSpecification" maxlength="25"
                                   placeholder="爆破片规格" required value="${device.ruptureSpecification}">
                        </div>
                        <label for="ruptureNumber" class="col-md-2 control-label col-xs-4">爆破片数量：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="ruptureNumber" id="ruptureNumber" maxlength="25"
                                   placeholder="爆破片数量" required value="${device.ruptureNumber}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="liquid" class="col-md-2 control-label col-xs-4">液面计形式：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="liquid" id="liquid" maxlength="25"
                                   placeholder="液面计形式" required value="${device.liquid}">
                        </div>
                        <label for="pressureRange" class="col-md-2 control-label col-xs-4">压力表量程：</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" readonly name="pressureRange" id="pressureRange" maxlength="25"
                                   placeholder="压力表量程" required value="${device.pressureRange}">
                        </div>
                    </div>
              </c:if>
                    
                    <div class="col-lg-12">
                        <button class="btn btn-info btn-sm pull-right" type="submit">&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
    var editor;
    KindEditor.ready(function(K) {
        editor = K.create('textarea[name="content"]', {
            width:parseInt($('#content').parents('div').css('width').replace("px",''))-20,
            minWidth:parseInt($('#content').parents('div').css('width').replace("px",''))-20,
            readonlyMode : true,
            items : [],
        });
    });
</script>