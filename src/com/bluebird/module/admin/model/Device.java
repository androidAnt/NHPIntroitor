package com.bluebird.module.admin.model;

/**
 * 检验设备实体类
 *
 * @author jiangr
 * @version 1.0
 * @date 2019年1月23日
 */
public class Device {

	private String deviceId; // 检验设备id

	private String deleteFlag; // 删除标记(0:未删除，1已删除)

	private String createUser; // 创建人

	private String createDate; // 创建时间
	
	private String remindState;  // 到期检验提醒 状态：默认null，0是检验  1是不检

	// 查询字段 :检验设备的公共字段

	private String gDeviceName; // 设备名称

	private String makeCompanyId; // 生产厂家id
	
	private String makeCompanyName; //生产厂家名称
	
	private String makeCompanyNo; //生产厂家编号

	private String useCompanyId; // 使用单位id
	
	private String companyName;   //使用单位名称
	
	private String organizationCode; //组织机构代码 
	
    private String linkName;   //联系人
	
	private String mobile;   //联系电话

	private String gDeviceNo; // 设备编号

	private String gDeviceType; // 设备类型(单选：0锅炉1压力容器)

	private String gDeviceModel; // 设备型号

	private String gDeviceCode; // 设备代码

	private String gDeviceClass; // 设备品种

	private String gDeviceLocation; // 设备使用地点

	private String gSiteType; // 场地类型0气田1油田

	private String gUseCard; // 使用证号

	private String gRegisterCode; // 注册代码

	private String gInstalCompany; // 安装单位

	private String gDesignCompany; // 设计单位

	private String gMakeDate; // 制造日期

	private String gUseDate; // 投用日期

	private String gRealUseYears; // 实际使用年限

	private String gFactoryNumber; // 出厂编号

	private String gLongitude; // 设备经度

	private String gLatitude; // 设备纬度

	private Integer gQualityLevel; // 质检等级 1-5级,0:1级1:2级 2:3级3:4级4:5级

	private String gInspectionDate; // 下次检验时间

	private String gFocus; // 重点设备:0是1否

	private String gFocusCause; // 重点设备原因

	private String gHigh; // 高

	private String gLasting; // 长

	private Integer gMainStructure; // 主体结构形式0单腔1多腔2球形3圆筒形4塔器5其他

	private String gDesignUseYears; // 设计使用年限

	private Integer gInstalShape; // 安装形式0立式1卧式

	private Double gVolume; // 容积

	private Integer gSupportStyle; // 支座形式0鞍式1裙式2支柱

	private Double gUsePressure; // 使用压力

	private String gNorm; // 产品标准

	private String gUseTemper; // 使用温度

	private Double gVolumeDiameter; // 容积内径

	// 锅炉
	private String tBoilerLocation; // 锅炉位置

	private Double tNominalOut; // 额定出力

	private Double tNominalPressure; // 额定压力

	private String tBoilerUse; // 锅炉用途

	private String tFuelType; // 燃料种类

	private String tOutTemperature; // 出口温度
	
    private String ratedTemperature;//额定温度
	
	private String reflowTemperature;//回流温度 

	private String tBoilerMedium; // 锅炉介质

	private String tWaterTreatment; // 水处理形式

	private String tSimplified; // 简体

	// 压力容器
	private String containerStructure; // 容器结构

	private Integer safeLevel; // 安全等级:0:1级1:2级 2:3级3:4级4:5级

	private String containerNo; // 容器编号

	private Double maxCharge; // 最大允许容装量

	private String thermalInsulation; // 保温绝热方式

	private String pressureLevel; // 压力等级

	private String containerType; // 容器分类

	private String containerClass; // 容器类别

	private String makeSpecification; // 制作规范

	private String containerDrawingNo; // 容器图号

	private String designSpecification; // 设计规范

	private String designDate; // 设计日期

	private Double designPressure; // 设计压力

	private String designTemperature; // 设计温度

	private String safeModel; // 安全阀型号及规格

	private String nominalHead; // 公称壁厚/封头

	private String nominalBarrel; // 公称壁厚/筒体

	private String corrosionHead; // 腐蚀裕度/封头

	private String corrosionBarrel; // 腐蚀裕度/筒体

	private String materialHead; // 主体材质/封头

	private String materialBarrel; // 主体材质/筒体

	private String ruptureType; // 爆破片型号

	private String ruptureSpecification; // 爆破片规格

	private Integer ruptureNumber; // 爆破片数量

	private String liquid; // 液面计形式

	private String pressureRange; // 压力表量程
	
	
	public String getMakeCompanyNo() {
		return makeCompanyNo;
	}

	public void setMakeCompanyNo(String makeCompanyNo) {
		this.makeCompanyNo = makeCompanyNo;
	}

	public String getRatedTemperature() {
		return ratedTemperature;
	}

	public void setRatedTemperature(String ratedTemperature) {
		this.ratedTemperature = ratedTemperature;
	}

	public String getReflowTemperature() {
		return reflowTemperature;
	}

	public void setReflowTemperature(String reflowTemperature) {
		this.reflowTemperature = reflowTemperature;
	}

	public String getgDeviceName() {
		return gDeviceName;
	}

	public void setgDeviceName(String gDeviceName) {
		this.gDeviceName = gDeviceName;
	}

	public String getMakeCompanyId() {
		return makeCompanyId;
	}

	public void setMakeCompanyId(String makeCompanyId) {
		this.makeCompanyId = makeCompanyId;
	}

	public String getUseCompanyId() {
		return useCompanyId;
	}

	public void setUseCompanyId(String useCompanyId) {
		this.useCompanyId = useCompanyId;
	}

	public String getgDeviceNo() {
		return gDeviceNo;
	}

	public void setgDeviceNo(String gDeviceNo) {
		this.gDeviceNo = gDeviceNo;
	}

	public String getgDeviceType() {
		return gDeviceType;
	}

	public void setgDeviceType(String gDeviceType) {
		this.gDeviceType = gDeviceType;
	}

	public String getgDeviceModel() {
		return gDeviceModel;
	}

	public void setgDeviceModel(String gDeviceModel) {
		this.gDeviceModel = gDeviceModel;
	}

	public String getgDeviceCode() {
		return gDeviceCode;
	}

	public void setgDeviceCode(String gDeviceCode) {
		this.gDeviceCode = gDeviceCode;
	}

	public String getgDeviceClass() {
		return gDeviceClass;
	}

	public void setgDeviceClass(String gDeviceClass) {
		this.gDeviceClass = gDeviceClass;
	}

	public String getgDeviceLocation() {
		return gDeviceLocation;
	}

	public void setgDeviceLocation(String gDeviceLocation) {
		this.gDeviceLocation = gDeviceLocation;
	}

	public String getgSiteType() {
		return gSiteType;
	}

	public void setgSiteType(String gSiteType) {
		this.gSiteType = gSiteType;
	}

	public String getgUseCard() {
		return gUseCard;
	}

	public void setgUseCard(String gUseCard) {
		this.gUseCard = gUseCard;
	}

	public String getgRegisterCode() {
		return gRegisterCode;
	}

	public void setgRegisterCode(String gRegisterCode) {
		this.gRegisterCode = gRegisterCode;
	}

	public String getgInstalCompany() {
		return gInstalCompany;
	}

	public void setgInstalCompany(String gInstalCompany) {
		this.gInstalCompany = gInstalCompany;
	}

	public String getgDesignCompany() {
		return gDesignCompany;
	}

	public void setgDesignCompany(String gDesignCompany) {
		this.gDesignCompany = gDesignCompany;
	}

	public String getgMakeDate() {
		return gMakeDate;
	}

	public void setgMakeDate(String gMakeDate) {
		this.gMakeDate = gMakeDate;
	}

	public String getgUseDate() {
		return gUseDate;
	}

	public void setgUseDate(String gUseDate) {
		this.gUseDate = gUseDate;
	}

	public String getgRealUseYears() {
		return gRealUseYears;
	}

	public void setgRealUseYears(String gRealUseYears) {
		this.gRealUseYears = gRealUseYears;
	}

	public String getgFactoryNumber() {
		return gFactoryNumber;
	}

	public void setgFactoryNumber(String gFactoryNumber) {
		this.gFactoryNumber = gFactoryNumber;
	}

	public String getgLongitude() {
		return gLongitude;
	}

	public void setgLongitude(String gLongitude) {
		this.gLongitude = gLongitude;
	}

	public String getgLatitude() {
		return gLatitude;
	}

	public void setgLatitude(String gLatitude) {
		this.gLatitude = gLatitude;
	}

	public Integer getgQualityLevel() {
		return gQualityLevel;
	}

	public void setgQualityLevel(Integer gQualityLevel) {
		this.gQualityLevel = gQualityLevel;
	}

	public String getgInspectionDate() {
		return gInspectionDate;
	}

	public void setgInspectionDate(String gInspectionDate) {
		this.gInspectionDate = gInspectionDate;
	}

	public String getgFocus() {
		return gFocus;
	}

	public void setgFocus(String gFocus) {
		this.gFocus = gFocus;
	}

	public String getgFocusCause() {
		return gFocusCause;
	}

	public void setgFocusCause(String gFocusCause) {
		this.gFocusCause = gFocusCause;
	}

	public String getgHigh() {
		return gHigh;
	}

	public void setgHigh(String gHigh) {
		this.gHigh = gHigh;
	}

	public String getgLasting() {
		return gLasting;
	}

	public void setgLasting(String gLasting) {
		this.gLasting = gLasting;
	}

	public Integer getgMainStructure() {
		return gMainStructure;
	}

	public void setgMainStructure(Integer gMainStructure) {
		this.gMainStructure = gMainStructure;
	}

	public String getgDesignUseYears() {
		return gDesignUseYears;
	}

	public void setgDesignUseYears(String gDesignUseYears) {
		this.gDesignUseYears = gDesignUseYears;
	}

	public Integer getgInstalShape() {
		return gInstalShape;
	}

	public void setgInstalShape(Integer gInstalShape) {
		this.gInstalShape = gInstalShape;
	}

	public Double getgVolume() {
		return gVolume;
	}

	public void setgVolume(Double gVolume) {
		this.gVolume = gVolume;
	}

	public Integer getgSupportStyle() {
		return gSupportStyle;
	}

	public void setgSupportStyle(Integer gSupportStyle) {
		this.gSupportStyle = gSupportStyle;
	}

	public Double getgUsePressure() {
		return gUsePressure;
	}

	public void setgUsePressure(Double gUsePressure) {
		this.gUsePressure = gUsePressure;
	}

	public String getgNorm() {
		return gNorm;
	}

	public void setgNorm(String gNorm) {
		this.gNorm = gNorm;
	}

	public String getgUseTemper() {
		return gUseTemper;
	}

	public void setgUseTemper(String gUseTemper) {
		this.gUseTemper = gUseTemper;
	}

	public Double getgVolumeDiameter() {
		return gVolumeDiameter;
	}

	public void setgVolumeDiameter(Double gVolumeDiameter) {
		this.gVolumeDiameter = gVolumeDiameter;
	}

	public String gettBoilerLocation() {
		return tBoilerLocation;
	}

	public void settBoilerLocation(String tBoilerLocation) {
		this.tBoilerLocation = tBoilerLocation;
	}

	public Double gettNominalOut() {
		return tNominalOut;
	}

	public void settNominalOut(Double tNominalOut) {
		this.tNominalOut = tNominalOut;
	}

	public Double gettNominalPressure() {
		return tNominalPressure;
	}

	public void settNominalPressure(Double tNominalPressure) {
		this.tNominalPressure = tNominalPressure;
	}

	public String gettBoilerUse() {
		return tBoilerUse;
	}

	public void settBoilerUse(String tBoilerUse) {
		this.tBoilerUse = tBoilerUse;
	}

	public String gettFuelType() {
		return tFuelType;
	}

	public void settFuelType(String tFuelType) {
		this.tFuelType = tFuelType;
	}

	public String gettOutTemperature() {
		return tOutTemperature;
	}

	public void settOutTemperature(String tOutTemperature) {
		this.tOutTemperature = tOutTemperature;
	}

	public String gettBoilerMedium() {
		return tBoilerMedium;
	}

	public void settBoilerMedium(String tBoilerMedium) {
		this.tBoilerMedium = tBoilerMedium;
	}

	public String gettWaterTreatment() {
		return tWaterTreatment;
	}

	public void settWaterTreatment(String tWaterTreatment) {
		this.tWaterTreatment = tWaterTreatment;
	}

	public String gettSimplified() {
		return tSimplified;
	}

	public void settSimplified(String tSimplified) {
		this.tSimplified = tSimplified;
	}

	public String getContainerStructure() {
		return containerStructure;
	}

	public void setContainerStructure(String containerStructure) {
		this.containerStructure = containerStructure;
	}

	public Integer getSafeLevel() {
		return safeLevel;
	}

	public void setSafeLevel(Integer safeLevel) {
		this.safeLevel = safeLevel;
	}

	public String getContainerNo() {
		return containerNo;
	}

	public void setContainerNo(String containerNo) {
		this.containerNo = containerNo;
	}

	public Double getMaxCharge() {
		return maxCharge;
	}

	public void setMaxCharge(Double maxCharge) {
		this.maxCharge = maxCharge;
	}

	public String getThermalInsulation() {
		return thermalInsulation;
	}

	public void setThermalInsulation(String thermalInsulation) {
		this.thermalInsulation = thermalInsulation;
	}

	public String getPressureLevel() {
		return pressureLevel;
	}

	public void setPressureLevel(String pressureLevel) {
		this.pressureLevel = pressureLevel;
	}

	public String getContainerType() {
		return containerType;
	}

	public void setContainerType(String containerType) {
		this.containerType = containerType;
	}

	public String getContainerClass() {
		return containerClass;
	}

	public void setContainerClass(String containerClass) {
		this.containerClass = containerClass;
	}

	public String getMakeSpecification() {
		return makeSpecification;
	}

	public void setMakeSpecification(String makeSpecification) {
		this.makeSpecification = makeSpecification;
	}

	public String getContainerDrawingNo() {
		return containerDrawingNo;
	}

	public void setContainerDrawingNo(String containerDrawingNo) {
		this.containerDrawingNo = containerDrawingNo;
	}

	public String getDesignSpecification() {
		return designSpecification;
	}

	public void setDesignSpecification(String designSpecification) {
		this.designSpecification = designSpecification;
	}

	public String getDesignDate() {
		return designDate;
	}

	public void setDesignDate(String designDate) {
		this.designDate = designDate;
	}

	public Double getDesignPressure() {
		return designPressure;
	}

	public void setDesignPressure(Double designPressure) {
		this.designPressure = designPressure;
	}

	public String getDesignTemperature() {
		return designTemperature;
	}

	public void setDesignTemperature(String designTemperature) {
		this.designTemperature = designTemperature;
	}

	public String getSafeModel() {
		return safeModel;
	}

	public void setSafeModel(String safeModel) {
		this.safeModel = safeModel;
	}

	public String getNominalHead() {
		return nominalHead;
	}

	public void setNominalHead(String nominalHead) {
		this.nominalHead = nominalHead;
	}

	public String getNominalBarrel() {
		return nominalBarrel;
	}

	public void setNominalBarrel(String nominalBarrel) {
		this.nominalBarrel = nominalBarrel;
	}

	public String getCorrosionHead() {
		return corrosionHead;
	}

	public void setCorrosionHead(String corrosionHead) {
		this.corrosionHead = corrosionHead;
	}

	public String getCorrosionBarrel() {
		return corrosionBarrel;
	}

	public void setCorrosionBarrel(String corrosionBarrel) {
		this.corrosionBarrel = corrosionBarrel;
	}

	public String getMaterialHead() {
		return materialHead;
	}

	public void setMaterialHead(String materialHead) {
		this.materialHead = materialHead;
	}

	public String getMaterialBarrel() {
		return materialBarrel;
	}

	public void setMaterialBarrel(String materialBarrel) {
		this.materialBarrel = materialBarrel;
	}

	public String getRuptureType() {
		return ruptureType;
	}

	public void setRuptureType(String ruptureType) {
		this.ruptureType = ruptureType;
	}

	public String getRuptureSpecification() {
		return ruptureSpecification;
	}

	public void setRuptureSpecification(String ruptureSpecification) {
		this.ruptureSpecification = ruptureSpecification;
	}

	public Integer getRuptureNumber() {
		return ruptureNumber;
	}

	public void setRuptureNumber(Integer ruptureNumber) {
		this.ruptureNumber = ruptureNumber;
	}

	public String getLiquid() {
		return liquid;
	}

	public void setLiquid(String liquid) {
		this.liquid = liquid;
	}

	public String getPressureRange() {
		return pressureRange;
	}

	public void setPressureRange(String pressureRange) {
		this.pressureRange = pressureRange;
	}

	public String getDeviceId() {
		return deviceId;
	}

	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}

	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getDeleteFlag() {
		return deleteFlag;
	}

	public void setDeleteFlag(String deleteFlag) {
		this.deleteFlag = deleteFlag;
	}
	public String getMakeCompanyName() {
		return makeCompanyName;
	}

	public void setMakeCompanyName(String makeCompanyName) {
		this.makeCompanyName = makeCompanyName;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getOrganizationCode() {
		return organizationCode;
	}

	public void setOrganizationCode(String organizationCode) {
		this.organizationCode = organizationCode;
	}

	public String getLinkName() {
		return linkName;
	}

	public void setLinkName(String linkName) {
		this.linkName = linkName;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getRemindState() {
		return remindState;
	}

	public void setRemindState(String remindState) {
		this.remindState = remindState;
	}

}
