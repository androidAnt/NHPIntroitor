<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script type="text/javascript" src="${root}/components/wdatePicker/WdatePicker.js"></script>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading"><span class="fa fa-edit" aria-hidden="true"></span><b>修改检验设备信息</b></div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/admin/device/doEdit" class="form-horizontal" method="post" id="editDeviceForm">
                <input type="hidden" name="backUrl" id="backUrl" value="${backUrl}">
                <input type="hidden" name="deviceId" id="deviceId" value="${device.deviceId}">
                  <div class="col-lg-12" style="padding-left: 0px;">
                  <!-- 公共部分 -->
                  <div class="form-group">
                        <label for="gDeviceNo" class="col-md-2 control-label col-xs-4">检验设备编号<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="gDeviceNo" id=gDeviceNo maxlength="25"
                           onblur="checkgDeviceNo()"  placeholder="检验设备编号" required value="${device.gDeviceNo}">
                                   <span id="tishi"></span>
                        </div>
                      <label for="gDeviceName" class="col-md-2 control-label col-xs-4">检验设备名称<span style="color:red;">*</span></label>
                       <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" name="gDeviceName" id=gDeviceName maxlength="25"
                                   placeholder="检验设备名称" required value="${device.gDeviceName}">
                                   <span id="col2"></span>
                        </div>
                    </div>
                    
                     <div class="form-group">
                     <label for="gDeviceModel" class="col-md-2 control-label col-xs-4">设备型号<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="gDeviceModel" id=gDeviceModel maxlength="25"
                                   placeholder="设备型号" required value="${device.gDeviceModel}">
                        </div>
                      <label for="gDeviceCode" class="col-md-2 control-label col-xs-4">设备代码<span style="color:red;">*</span></label>
                       <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" name="gDeviceCode" id=gDeviceCode maxlength="25"
                                   placeholder="设备代码" required value="${device.gDeviceCode}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gDeviceClass" class="col-md-2 control-label col-xs-4">设备品种<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="gDeviceClass" id=gDeviceClass maxlength="25"
                                   placeholder="设备品种" required value="${device.gDeviceClass}">
                        </div>
                      <label for="gDeviceLocation" class="col-md-2 control-label col-xs-4">设备使用地点<span style="color:red;">*</span></label>
                       <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" name="gDeviceLocation" id=gDeviceLocation maxlength="25"
                                   placeholder="设备使用地点" required value="${device.gDeviceLocation}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gSiteType" class="col-md-2 control-label col-xs-4">场地类型<span style="color:red;">*</span></label>
                       <div class="col-md-4 col-xs-8">
                         <label class="radio-inline" style="padding-top: 4px;">
                           <input type="radio" name="gSiteType" id="gSiteType" value="1" 
                             <c:if test="${device.gSiteType=='1' }">checked="checked"</c:if>>油田
                         </label>
                         <label class="radio-inline" style="padding-top: 4px;" >
                                <input type="radio" name="gSiteType"  value="0" 
                                <c:if test="${device.gSiteType=='0' }">checked="checked"</c:if>>气田
                         </label>
                    </div>
                      <label for="gUseCard" class="col-md-2 control-label col-xs-4">使用证号<span style="color:red;">*</span></label>
                       <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" name="gUseCard" id=gUseCard maxlength="25"
                                   placeholder="使用证号" required value="${device.gUseCard}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gRegisterCode" class="col-md-2 control-label col-xs-4">注册代码<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="gRegisterCode" id=gRegisterCode maxlength="25"
                                   placeholder="注册代码" required value="${device.gRegisterCode}">
                        </div>
                      <label for="gFactoryNumber" class="col-md-2 control-label col-xs-4">出厂编号<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="gFactoryNumber" id=gFactoryNumber maxlength="25"
                                   placeholder="出厂编号" required value="${device.gFactoryNumber}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                      <label for="gInstalCompany" class="col-md-2 control-label col-xs-4">安装单位<span style="color:red;">*</span></label>
                       <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" name="gInstalCompany" id=gInstalCompany maxlength="25"
                                   placeholder="安装单位" required value="${device.gInstalCompany}">
                        </div>
                     
                        <label for="gDesignCompany" class="col-md-2 control-label col-xs-4">设计单位<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="gDesignCompany" id=gDesignCompany maxlength="25"
                                   placeholder="设计单位" required value="${device.gDesignCompany}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                     <label for="gMakeDate" class="col-md-2 control-label col-xs-4">制造日期<span style="color:red;">*</span></label>
                       <div class="col-md-4 col-xs-8">
                          <input type="text" name="gMakeDate" id="gMakeDate" value="${fn:substring(device.gMakeDate ,0,10)}" class="form-control" required placeholder="制造日期"
                                   onFocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\'gUseDate\')}',isShowClear:false,isShowOK:false,isShowToday:false,skin:'twoer'})">
                        </div>
                        <label for="gUseDate" class="col-md-2 control-label col-xs-4">投用日期<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" name="gUseDate" id="gUseDate" value="${fn:substring(device.gUseDate ,0,10)}" class="form-control" required placeholder="投用日期"
                                  onFocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'gMakeDate\')}',isShowClear:false,isShowOK:false,isShowToday:false,skin:'twoer'})">
                        </div>
                    </div>
                   
                     <div class="form-group">
                      <label for="gLongitude" class="col-md-2 control-label col-xs-4">设备经度</label>
                       <div class="col-md-4 col-xs-8">
                           <input type="number" class="form-control" min="1"  name="gLongitude" id=gLongitude oninput="if(value.length>20)value=value.slice(0,20)"
                                   placeholder="设备经度" step="0.0000000000001"  value="${device.gLongitude}">
                        </div>
                     <label for="gLatitude" class="col-md-2 control-label col-xs-4">设备纬度</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1"  name="gLatitude" id=gLatitude oninput="if(value.length>20)value=value.slice(0,20)"
                                   placeholder="设备纬度" step="0.0000000000001" value="${device.gLatitude}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                         <label for="gQualityLevel" class="col-md-2 control-label col-xs-4">质检等级<span style="color:red;">*</span></label>
                         <div class="col-md-4 col-xs-8">
                        <select  class="form-control" id="gQualityLevel" name="gQualityLevel" >
                           	  <option value="0" <c:if test="${device.gQualityLevel=='0' }">selected="selected"</c:if>>1级</option>
                              <option value="1" <c:if test="${device.gQualityLevel=='1' }">selected="selected"</c:if>>2级</option>
                              <option value="2" <c:if test="${device.gQualityLevel=='2' }">selected="selected"</c:if>>3级</option>
                              <option value="3" <c:if test="${device.gQualityLevel=='3' }">selected="selected"</c:if>>4级</option>
                              <option value="4" <c:if test="${device.gQualityLevel=='4' }">selected="selected"</c:if>>5级</option>
                        </select>
                         </div> 
                    </div>
                    
                     <div class="form-group">
                         <label for="gMainStructure" class="col-md-2 control-label col-xs-4">主体结构形式<span style="color:red;">*</span></label>
                         <div class="col-md-4 col-xs-8">
                      <select  class="form-control" id="gMainStructure" name="gMainStructure">
                           <option value="0" <c:if test="${device.gMainStructure=='0' }">selected="selected"</c:if>>单腔</option>
                           <option value="1" <c:if test="${device.gMainStructure=='1' }">selected="selected"</c:if>>多腔</option>
                           <option value="2" <c:if test="${device.gMainStructure=='2' }">selected="selected"</c:if>>球形</option>
                           <option value="3" <c:if test="${device.gMainStructure=='3' }">selected="selected"</c:if>>圆筒形</option>
                           <option value="4" <c:if test="${device.gMainStructure=='4' }">selected="selected"</c:if>>塔器</option>
                           <option value="5" <c:if test="${device.gMainStructure=='5' }">selected="selected"</c:if>>其他</option>
                      </select>
                         </div> 
                     
                        <label for="gSupportStyle" class="col-md-2 control-label col-xs-4">支座形式<span style="color:red;">*</span></label>
                         <div class="col-md-4 col-xs-8">
                        <select  class="form-control" id="gSupportStyle" name="gSupportStyle"> 
                           	<option value="0" <c:if test="${device.gSupportStyle=='0' }">selected="selected"</c:if>>鞍式</option>
                           	<option value="1" <c:if test="${device.gSupportStyle=='1' }">selected="selected"</c:if>>裙式</option>
                           	<option value="2" <c:if test="${device.gSupportStyle=='2' }">selected="selected"</c:if>>支柱</option>
                        </select>
                         </div> 
                    </div>
                    
                     <div class="form-group">
                         <label for="gNorm" class="col-md-2 control-label col-xs-4">产品标准<span style="color:red;">*</span></label>
                       <div class="col-md-4 col-xs-8">
                          <select  class="form-control" id="gNorm" name="gNorm"> 
                           	<option value="GB150-89" <c:if test="${device.gNorm=='GB150-89'}">selected="selected"</c:if>>GB150-89</option>
                           	<option value="GB150-1998" <c:if test="${device.gNorm=='GB150-1998'}">selected="selected"</c:if>>GB150-1998</option>
                           	<option value="GB741-80" <c:if test="${device.gNorm=='GB741-80'}">selected="selected"</c:if>>GB741-80</option>
                           	<option value="GB12337-1998" <c:if test="${device.gNorm=='GB12337-1998' }">selected="selected"</c:if>>GB12337-1998</option>
                           	<option value="GB151-89" <c:if test="${device.gNorm=='GB151-89'}">selected="selected"</c:if>>GB151-89</option>
                           	<option value="GB151-1999" <c:if test="${device.gNorm=='GB151-1999'}">selected="selected"</c:if>>GB151-1999</option>
                           	<option value="GB151-2000" <c:if test="${device.gNorm=='GB151-2000'}">selected="selected"</c:if>>GB151-2000</option>
                           	<option value="[美]ASME VIII" <c:if test="${device.gNorm=='[美]ASME VIII'}">selected="selected"</c:if>>[美]ASME VIII</option>
                            <option value="[日]JIS" <c:if test="${device.gNorm=='[日]JIS'}">selected="selected"</c:if>>[日]JIS</option>
                            <option value="[德]AD" <c:if test="${device.gNorm=='[德]AD'}">selected="selected"</c:if>>[德]AD</option>
                            <option value="[法]CODAP" <c:if test="${device.gNorm=='[法]CODAP'}">selected="selected"</c:if>>[法]CODAP</option>
                            <option value="[英]BS5500" <c:if test="${device.gNorm=='[英]BS5500'}">selected="selected"</c:if>>[英]BS5500</option>
                            <option value="不详" <c:if test="${device.gNorm=='不详'}">selected="selected"</c:if>>不详</option>
                        </select>
                        </div>
                        
                        <label for="gInstalShape" class="col-md-2 control-label col-xs-4">安装形式</label>
                       <div class="col-md-4 col-xs-8">
                         <label class="radio-inline" style="padding-top: 4px;">
                           <input type="radio" name="gInstalShape" id="gInstalShape" value="0" 
                           <c:if test="${device.gInstalShape=='0' }">checked="checked"</c:if>>立式
                         </label>
                         <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="gInstalShape"  value="1" 
                                <c:if test="${device.gInstalShape=='1' }">checked="checked"</c:if>>卧式
                         </label>
                    </div>
                        
                    </div>
                    
                     <div class="form-group">
                        
                        <label for="gFocus" class="col-md-2 control-label col-xs-4">重点设备<span style="color:red;">*</span></label>
                       <div class="col-md-4 col-xs-8" onclick="changeFocus()">
                         <label class="radio-inline" style="padding-top: 4px;">
                           <input type="radio" name="gFocus" id="gFocus" value="0" 
                           <c:if test="${device.gFocus=='0' }">checked="checked"</c:if>>是
                         </label>
                         <label class="radio-inline" style="padding-top: 4px;">
                                <input type="radio" name="gFocus"  value="1" 
                                <c:if test="${device.gFocus=='1' }">checked="checked"</c:if>>否
                         </label>
                    </div>
                        
                        
                      <label for="gFocusCause" class="col-md-2 control-label col-xs-4">重点设备原因</label>
                       <div class="col-md-4 col-xs-8">
                           <input type="text" class="form-control" name="gFocusCause" id=gFocusCause maxlength="25"
                                   placeholder="重点设备原因"  value="${device.gFocusCause}" required>
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gDesignUseYears" class="col-md-2 control-label col-xs-4">设计使用年限</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" name="gDesignUseYears" id=gDesignUseYears oninput="if(value.length>3)value=value.slice(0,3)"
                                   placeholder="设计使用年限"  value="${device.gDesignUseYears}">
                        </div>
                        <label for="gRealUseYears" class="col-md-2 control-label col-xs-4">实际使用年限</label>
                       <div class="col-md-4 col-xs-8">
                           <input type="number" class="form-control" min="1" name="gRealUseYears" id=gRealUseYears oninput="if(value.length>3)value=value.slice(0,3)"
                                   placeholder="实际使用年限"  value="${device.gRealUseYears}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="gHigh" class="col-md-2 control-label col-xs-4">设备高度</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" step='0.01' name="gHigh" id=gHigh oninput="if(value.length>5)value=value.slice(0,5)"
                                   placeholder="设备高度"  value="${device.gHigh}"
                                   style="display:inline;width:90%;">
                                   <span>m</span>
                        </div>
                      <label for="gLasting" class="col-md-2 control-label col-xs-4">设备长度</label>
                       <div class="col-md-4 col-xs-8">
                           <input type="number" class="form-control" min="1" step='0.01' name="gLasting" id=gLasting oninput="if(value.length>5)value=value.slice(0,5)"
                                   placeholder="设备长度"  value="${device.gLasting}"
                                   style="display:inline;width:90%;">
                                   <span>m</span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="gVolume" class="col-md-2 control-label col-xs-4">容积</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" step='0.01' name="gVolume" id=gVolume oninput="if(value.length>5)value=value.slice(0,5)"
                                   placeholder="容积"  value="${device.gVolume}"
                                   style="display:inline;width:90%;">
                                   <span>m³</span>
                        </div>
                         <label for="gVolumeDiameter" class="col-md-2 control-label col-xs-4">容器内径</label>
                       <div class="col-md-4 col-xs-8">
                           <input type="number" class="form-control" min="1" step='0.01' name="gVolumeDiameter" id=gVolumeDiameter oninput="if(value.length>5)value=value.slice(0,5)"
                                step="0.001"   placeholder="容器内径"  value="${device.gVolumeDiameter}"
                                   style="display:inline;width:90%;">
                                   <span>m</span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="gUsePressure" class="col-md-2 control-label col-xs-4">使用压力</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" step='0.01' name="gUsePressure" id=gUsePressure oninput="if(value.length>8)value=value.slice(0,8)"
                                   placeholder="使用压力"  value="${device.gUsePressure}"
                                   style="display:inline;width:90%;">
                                   <span>MPa</span>
                        </div>
                        <label for="gUseTemper" class="col-md-2 control-label col-xs-4">使用温度</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" step='0.01' name="gUseTemper" id=gUseTemper oninput="if(value.length>3)value=value.slice(0,3)"
                                   placeholder="使用温度:℃"  value="${device.gUseTemper}"
                                   style="display:inline;width:90%;">
                                   <span>℃</span>
                        </div>
                    </div>
                          <!-- 设备类型 -->
           <div class="col-lg-13" style="padding-left: 0px;" >
               <div class="form-group">
                         <label for="gDeviceType" class="col-md-2 control-label col-xs-4">设备类型<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="gDeviceType" id=gDeviceType maxlength="25"
                                   placeholder="设备类型"  value="${device.gDeviceType=='0'?'锅炉':'压力容器'}"  disabled>
                        </div>
               </div>
             </div> 
                  
                  <!-- 锅炉 -->
                 <div class="col-lg-13" style="padding-left: 0px; display:none;" id="guoluo">
                    <div class="form-group">
                        <label for="tBoilerLocation" class="col-md-2 control-label col-xs-4">锅炉位置<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="tBoilerLocation" id=tBoilerLocation maxlength="25"
                                   placeholder="锅炉位置" required value="${device.tBoilerLocation}">
                        </div>
                        <label for="tBoilerUse" class="col-md-2 control-label col-xs-4">锅炉用途<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="tBoilerUse" id=tBoilerUse maxlength="25"
                                   placeholder="锅炉用途" required value="${device.tBoilerUse}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="tFuelType" class="col-md-2 control-label col-xs-4">燃料种类<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="tFuelType" id=tFuelType maxlength="25"
                                   placeholder="燃料种类" required value="${device.tFuelType}">
                        </div>
                        <label for="tBoilerMedium" class="col-md-2 control-label col-xs-4">锅炉介质<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="tBoilerMedium" id=tBoilerMedium maxlength="25"
                                   placeholder="锅炉介质" required value="${device.tBoilerMedium}">
                        </div>
                    </div>
                    
                    <div class="form-group">
                     <label for="tWaterTreatment" class="col-md-2 control-label col-xs-4">水处理形式</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="tWaterTreatment" id=tWaterTreatment maxlength="25"
                                   placeholder="水处理形式"  value="${device.tWaterTreatment}">
                        </div>
                        <label for="tSimplified" class="col-md-2 control-label col-xs-4">简体</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="tSimplified" id=tSimplified maxlength="25"
                                   placeholder="简体"  value="${device.tSimplified}">
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="tNominalOut" class="col-md-2 control-label col-xs-4">额定出力</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" step='0.01' name="tNominalOut" id=tNominalOut oninput="if(value.length>10)value=value.slice(0,10)"
                                   placeholder="额定出力"  value="${device.tNominalOut}"
                                   style="display:inline;width:90%">
                                   <span>MPa</span>
                        </div>
                        <label for="tNominalPressure" class="col-md-2 control-label col-xs-4">额定压力</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" step='0.01' name="tNominalPressure" id=tNominalPressure oninput="if(value.length>10)value=value.slice(0,10)"
                                   placeholder="额定压力"  value="${device.tNominalPressure}"
                                   style="display:inline;width:90%">
                                   <span>MPa</span>
                        </div>
                    </div>
                    
                     <div class="form-group">
                        <label for="tOutTemperature" class="col-md-2 control-label col-xs-4">出口温度</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" step='0.01' name="tOutTemperature" id=tOutTemperature oninput="if(value.length>3)value=value.slice(0,3)"
                                   placeholder="出口温度:℃"  value="${device.tOutTemperature }"
                                   style="display:inline;width:90%">
                                   <span>℃</span>
                        </div>
                        <label for="tOutTemperature" class="col-md-2 control-label col-xs-4">额定温度</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" name="ratedTemperature" id="ratedTemperature" oninput="if(value.length>3)value=value.slice(0,3)"
                                   placeholder="额定温度" step='0.01' value="${device.ratedTemperature}"
                                   style="display:inline;width:90%;">
                                   <span>℃</span>
                        </div>
                     
                    </div>
                    <div class="form-group">
                       
                        <label for="tOutTemperature" class="col-md-2 control-label col-xs-4">回流温度</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" name="reflowTemperature" id="reflowTemperature" oninput="if(value.length>3)value=value.slice(0,3)"
                                   placeholder="回流温度" step='0.01' value="${device.reflowTemperature}"
                                   style="display:inline;width:90%;">
                                   <span>℃</span>
                        </div>
                  </div>
                </div>
                <!-- 压力容器 -->
                <div class="col-lg-13" style="padding-left: 0px; display:none;" id="ylrq">
                  <div class="form-group">
                        <label for="containerStructure" class="col-md-2 control-label col-xs-4">容器结构<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="containerStructure" id=containerStructure maxlength="25"
                                   placeholder="容器结构" required value="${device.containerStructure}">
                        </div>
                        <label for="containerNo" class="col-md-2 control-label col-xs-4">容器编号<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="containerNo" id=containerNo maxlength="25"
                                   placeholder="容器编号" required value="${device.containerNo}">
                        </div>
                    </div>  
                
                   <div class="form-group">
                        <label for="containerType" class="col-md-2 control-label col-xs-4">容器分类<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="containerType" id=containerType maxlength="25"
                                   placeholder="容器分类" required value="${device.containerType}">
                        </div>
                        <label for="containerClass" class="col-md-2 control-label col-xs-4">容器类别<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="containerClass" id=containerClass maxlength="25"
                                   placeholder="容器类别" required value="${device.containerClass}">
                        </div>
                    </div>  
                    
                    <div class="form-group">
                        <label for="containerDrawingNo" class="col-md-2 control-label col-xs-4">容器图号<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="containerDrawingNo" id=containerDrawingNo maxlength="25"
                                   placeholder="容器图号" required value="${device.containerDrawingNo}">
                        </div>
                        <label for="safeLevel" class="col-md-2 control-label col-xs-4">安全等级<span style="color:red;">*</span></label>
                        <div class="col-md-4 col-xs-8">
                            <select name="safeLevel" id="safeLevel" required class="form-control">
								<option value="0" <c:if test="${device.safeLevel=='0' }">selected="selected"</c:if>>1级</option>
							    <option value="1" <c:if test="${device.safeLevel=='1' }">selected="selected"</c:if>>2级</option>
							    <option value="2" <c:if test="${device.safeLevel=='2' }">selected="selected"</c:if>>3级</option>
							    <option value="3" <c:if test="${device.safeLevel=='3' }">selected="selected"</c:if>>4级</option>
							    <option value="4" <c:if test="${device.safeLevel=='4' }">selected="selected"</c:if>>5级</option>
                        </select>
                        </div>
                    </div>  
                
                    
                    <div class="form-group">
                        <label for="maxCharge" class="col-md-2 control-label col-xs-4">最大允许容装量</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="maxCharge" id=maxCharge maxlength="25"
                                   placeholder="最大允许容装量"  value="${device.maxCharge}">
                        </div>
                        <label for="thermalInsulation" class="col-md-2 control-label col-xs-4">保温绝热方式</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="thermalInsulation" id=thermalInsulation maxlength="25"
                                   placeholder="保温绝热方式"  value="${device.thermalInsulation}">
                        </div>
                    </div>  
                    
                    <div class="form-group">
                        <label for="liquid" class="col-md-2 control-label col-xs-4">液面计形式</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="liquid" id=liquid maxlength="25"
                                   placeholder="液面计形式"  value="${device.liquid}">
                        </div>
                    
                        <label for="pressureLevel" class="col-md-2 control-label col-xs-4">压力等级</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="pressureLevel" id=pressureLevel maxlength="25"
                                   placeholder="压力等级"  value="${device.pressureLevel}">
                        </div>
                    </div> 
                    
                    <div class="form-group">
                        <label for="makeSpecification" class="col-md-2 control-label col-xs-4">制作规范</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="makeSpecification" id=makeSpecification maxlength="25"
                                   placeholder="制作规范"  value="${device.makeSpecification}">
                        </div>
                        <label for="designSpecification" class="col-md-2 control-label col-xs-4">设计规范</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="designSpecification" id=designSpecification maxlength="25"
                                   placeholder="设计规范"  value="${device.designSpecification}">
                        </div>
                    </div>  
                    
                     <div class="form-group">
                        <label for="designDate" class="col-md-2 control-label col-xs-4">设计日期</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" name="designDate" id="designDate" value="${fn:substring(device.designDate ,0,10)}" class="form-control"  placeholder="设计日期"
                                   onFocus="WdatePicker({dateFmt:'yyyy-MM-dd',isShowClear:false,isShowOK:false,isShowToday:false,skin:'twoer'})">
                        </div>
                         <label for="safeModel" class="col-md-2 control-label col-xs-4">安全阀型号和规格</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="safeModel" id=safeModel maxlength="25"
                                   placeholder="安全阀型号和规格"  value="${device.safeModel}">
                        </div>
                    </div>  
                    
                     <div class="form-group">
                        <label for="designTemperature" class="col-md-2 control-label col-xs-4">设计温度</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" step='0.01' name="designTemperature" id=designTemperature oninput="if(value.length>3)value=value.slice(0,3)"
                                   placeholder="设计温度:℃"  value="${device.designTemperature}"
                                   style="display:inline;width:90%;">
                                   <span>℃</span>
                        </div>
                        <label for="designPressure" class="col-md-2 control-label col-xs-4">设计压力</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" name="designPressure" id=designPressure oninput="if(value.length>10)value=value.slice(0,10)"
                                   placeholder="设计压力"  value="${device.designPressure}"
                                   style="display:inline;width:90%;">
                                   <span>Mpa</span>
                        </div>
                    </div> 
                    
                    <div class="form-group">
                        <label for="nominalHead" class="col-md-2 control-label col-xs-4">公称壁厚/封头</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" step='0.01' name="nominalHead" id=nominalHead oninput="if(value.length>10)value=value.slice(0,10)"
                                   placeholder="公称壁厚/封头"  value="${device.nominalHead}"
                                   style="display:inline;width:90%;">
                                   <span>mm</span>
                        </div>
                        <label for="nominalBarrel" class="col-md-2 control-label col-xs-4">公称壁厚/筒体</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" step='0.01' name="nominalBarrel" id=nominalBarrel oninput="if(value.length>10)value=value.slice(0,10)"
                                   placeholder="公称壁厚/筒体"  value="${device.nominalBarrel}"
                                   style="display:inline;width:90%;">
                                   <span>mm</span>
                        </div>
                    </div> 
                    
                    <div class="form-group">
                        <label for="corrosionHead" class="col-md-2 control-label col-xs-4">腐蚀裕度/封头</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" step='0.01' name="corrosionHead" id=corrosionHead oninput="if(value.length>10)value=value.slice(0,10)"
                                   placeholder="腐蚀裕度/封头"  value="${device.corrosionHead}"
                                   style="display:inline;width:90%;">
                                   <span>mm</span>
                        </div>
                        <label for="corrosionBarrel" class="col-md-2 control-label col-xs-4">腐蚀裕度/筒体</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" min="1" step='0.01' name="corrosionBarrel" id=corrosionBarrel oninput="if(value.length>10)value=value.slice(0,10)"
                                   placeholder="腐蚀裕度/筒体"  value="${device.corrosionBarrel}"
                                   style="display:inline;width:90%;">
                                   <span>mm</span>
                        </div>
                    </div> 
                    
                    <div class="form-group">
                        <label for="materialHead" class="col-md-2 control-label col-xs-4">主体材质/封头</label>
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
                        <label for="materialBarrel" class="col-md-2 control-label col-xs-4">主体材质/筒体</label>
                        <div class="col-md-4 col-xs-8">
                            <%-- <input type="text" class="form-control" name="materialBarrel" id=materialBarrel maxlength="25"
                                   placeholder="主体材质/筒体"  value="${device.materialBarrel}"> --%>
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
                    </div> 
                    
                    <div class="form-group">
                        <label for="ruptureType" class="col-md-2 control-label col-xs-4">爆破片型号</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="ruptureType" id=ruptureType maxlength="25"
                                   placeholder="爆破片型号"  value="${device.ruptureType}">
                        </div>
                        <label for="ruptureSpecification" class="col-md-2 control-label col-xs-4">爆破片规格</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="text" class="form-control" name="ruptureSpecification" id=ruptureSpecification maxlength="25"
                                   placeholder="爆破片规格"  value="${device.ruptureSpecification}">
                        </div>
                    </div> 
                    
                     <div class="form-group">
                        <label for="ruptureNumber" class="col-md-2 control-label col-xs-4">爆破片数量</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control"  min="1" name="ruptureNumber" id=ruptureNumber oninput="if(value.length>5)value=value.slice(0,5)"
                                   placeholder="爆破片数量"  value="${device.ruptureNumber}">
                        </div>
                        <label for="pressureRange" class="col-md-2 control-label col-xs-4">压力表量程</label>
                        <div class="col-md-4 col-xs-8">
                            <input type="number" class="form-control" name="pressureRange" id=pressureRange maxlength="25" oninput="if(value.length>8)value=value.slice(0,8)"
                                   placeholder="压力表量程"  value="${device.pressureRange}"
                                   style="display:inline;width:90%;">
                                   <span>MPa</span>
                        </div>
                    </div>  
             </div>
                </div>
                <div class="col-lg-12">
                    <button id="docheck" class="btn btn-success btn-sm pull-right" type="button"
                            style="margin-left: 10px;">&nbsp;&nbsp;修&nbsp;&nbsp;改&nbsp;&nbsp;</button>
                    <button id="back" class="btn btn-info btn-sm pull-right" type="button">&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
                </div>
            </form>
        </div>
    </div>
    <!-- 生产厂家 -->
     <div id="addModal" class="modal fade" tabindex="-1" >
       <div class="modal-dialog" style="width:930px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">选择生产厂家</h4>
            </div>
            <div class="modal-body">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="${root}/system/makeCompany/sellerList" id="iframeID"></iframe>
                </div>
            </div>
             <div class="modal-footer">
                <div class="full-left col-md-9" style="text-align: left;">
                    <p class="text-warning full-left col-md-2">已选择：</p>
                    <p class="text-muted full-left col-md-10" id="chooseDate" style="text-align: left;"></p>
                </div>
                <div class="full-left col-md-3">
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary btn-sm" onclick="return updateForeignName();">确定</button>
                </div>
              </div>
           </div>
         </div>
      </div> 
      <!-- 使用单位 -->
      <div id="addModal1" class="modal fade" tabindex="-1" >
       <div class="modal-dialog" style="width:930px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">选择使用单位</h4>
            </div>
            <div class="modal-body">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="${root}/system/useCompany/sellerUseCompany" id="iframeID1"></iframe>
                </div>
            </div>
            <div class="modal-footer">
                <div class="full-left col-md-9" style="text-align: left;">
                    <p class="text-warning full-left col-md-2">已选择：</p>
                    <p class="text-muted full-left col-md-10" id="chooseDate1" style="text-align: left;"></p>
                </div>
                <div class="full-left col-md-3">
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary btn-sm" onclick="return updateMakeName();">确定</button>
                </div>
            </div>
           </div>
        </div>
      </div> 
</div>


<div id="croppicDiv" style="display: none;"></div>
<form action="${root}/admin/device" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item" varStatus="status">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>
<script charset="utf-8" src="${root}/components/kindeditor/kindeditor-all-min.js"></script>
<script>

    //返回
    $("#back").click(function () {
        $("#backForm").submit();
    });
    
    // 修改
    $("#docheck").click(function(){
    	/* var name = '${useCompany.companyName}'; */
    	var backUrl = '${backUrl}';
    	var formdata =  $('#editDeviceForm').serialize();
    	$.ajax({
            url  : '${root}/admin/device/doEdit',
            type : "post",
            data : formdata,
           success : function(res) {
        	   console.log(res)
          	  if(res.paramMsg == undefined){
          		   showMes("0", res.msg);
          	   }else{
          		   var ajaxobj=eval("("+res.paramMsg+")");
          		   window.location.href="${root}/admin/device/backIndex?backUrl="+backUrl+"status="+ajaxobj.status;
          	   }  
            }
       });
    	
    });
    $(document).ready(function(){ 
    	 var type = $("#gDeviceType").val();
        // console.log(type);
         if(type=='压力容器'){
     		$('#ylrq').show();
     		// 锅炉
     		$('#tBoilerLocation').attr("required",false);
     		$('#tBoilerUse').attr("required",false);
     		$('#tNominalOut').attr("required",false);
     		$('#tNominalPressure').attr("required",false);
     		$('#tFuelType').attr("required",false);
     		$('#tBoilerMedium').attr("required",false);
     		$('#tOutTemperature').attr("required",false);
     		$('#tWaterTreatment').attr("required",false);
     		$('#tSimplified').attr("required",false);
     		$('#reflowTemperature').attr("required",false);
     		$('#ratedTemperature').attr("required",false);
     		
     	}else{
     		$('#guoluo').show();
     		// 压力容器
     		$('#containerStructure').attr("required",false);
     		$('#containerNo').attr("required",false);
     		$('#containerType').attr("required",false);
     		$('#containerClass').attr("required",false);
     		$('#containerDrawingNo').attr("required",false);
     		$('#safeLevel').attr("required",false);
     		$('#maxCharge').attr("required",false);
     		$('#thermalInsulation').attr("required",false);
     		$('#liquid').attr("required",false);
     		$('#pressureLevel').attr("required",false);
     		$('#makeSpecification').attr("required",false);
     		$('#designSpecification').attr("required",false);
     		$('#designDate').attr("required",false);
     		$('#designPressure').attr("required",false);
     		$('#designTemperature').attr("required",false);
     		$('#safeModel').attr("required",false);
     		$('#nominalHead').attr("required",false);
     		$('#nominalBarrel').attr("required",false);
     		$('#corrosionHead').attr("required",false);
     		$('#corrosionBarrel').attr("required",false);
     		$('#materialHead').attr("required",false);
     		$('#materialBarrel').attr("required",false);
     		/* $('#ruptureType').attr("required",false);
     		$('#ruptureSpecification').attr("required",false);
     		$('#ruptureNumber').attr("required",false); */
     		$('#pressureRange').attr("required",false);
     	} 
    }); 
    
    /* 页面校验 */
    // 特殊符号
     var patten = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im; 
    // 汉字校验 
     var chinese = /^[\u4e00-\u9fa5]/;
    
    // 页面加载判断重点设备
     $(document).ready(function(){ 
    	 var gFocus1 =  $("input[name='gFocus']:checked").val();
         if(gFocus1=='1'){
        	 $('#gFocusCause').attr("required",false);
				$("#gFocusCause").attr("readonly","readonly");
         }
     });
     // 重点设备判断
     function changeFocus(){
      	var gFocus =  $("input[name='gFocus']:checked").val();
      	console.log(gFocus)
  			if(gFocus=='1'){
  				$('#gFocusCause').attr("required",false);
  				$("#gFocusCause").attr("readonly","readonly");
  				$('#gFocusCause').val("");
  			}else{
				   $("#gFocusCause").removeAttr("readonly");
				   $('#gFocusCause').attr("required",true);
			   }
      }
    
     $("#gDeviceNo").blur(function(){
   		 var gDeviceNo = $("#gDeviceNo").val();
   			if(chinese.test(gDeviceNo)){
   			  $("#col1").text("输入的内容不能为汉字");
   			  $("#col1").css("color","red");
   			  $("#gDeviceNo").val("");
   			}else if(patten.test(gDeviceNo)){
   				$("#col1").text("输入的内容不能含有特殊符号");
     			$("#col1").css("color","red");
     			$("#gDeviceNo").val("");
   			}else{
   				$("#col1").text("");
   			}
          });
    
     $("#gDeviceName").blur(function(){
   		 var gDeviceName = $("#gDeviceName").val();
   			if(!chinese.test(gDeviceName)){
   			  $("#col2").text("输入的内容为汉字");
   			  $("#col2").css("color","red");
   			  $("#gDeviceName").val("");
   			}else{
   				$("#col2").text("");
   			}
          });
     
     // 设备编号校验
     function checkgDeviceNo(){
     	 var gDeviceNo = $("#gDeviceNo").val();
         var tishi = document.getElementById("tishi");
         tishi.innerHTML = "";
         var gDeviceNos ='${device.gDeviceNo}'
         if(gDeviceNo!=gDeviceNos){
        	 $.ajax({
	              url  : '${root}/admin/device/findAllDevice',
	              type : "post",
	              data : {
	            	gDeviceNo : gDeviceNo
	               },
	             success : function(res) {
	            	console.log(res)
	                 if (res.status == 0) {
	                     tishi.innerHTML = "<font color='red'>" + res.msg + "</font>";
	                 } else {
	                	 tishi.innerHTML = "";
	                 }
	              }
	         }); 
         }
     }
     
     // 获取提示信息
     var msg = '${msg}';
     var status = '${status}';
     if(status != ""){
     	showMes("0", msg);
     }
   
     
</script>