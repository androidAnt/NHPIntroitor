package com.bluebird.module.system.model;

/**
 * 设备使用单位实体类
 * 
 * @author jiangr
 * @version  1.0
 * @date 2019年1月2日 
 */
public class UseCompany {

	private String useCompanyId;  // 使用单位id
	
	private String companyName;  // 单位名称
	
	private String useCompanyAddress;  // 使用单位地址
	
	private String linkName;  // 联系人
	
	private String mobile;  // 联系方式
	
	private String postal;  // 邮政编码
	
	private String email;  // 联系邮箱
	
	private String longitude;  // 经度
	
	private String latitude;  // 维度
	
	private String organizationCode;  // 组织机构代码
	
	private String safeName;  // 安全员姓名
	
	private String deleteFlag;  // 删除标记 0:未删除1已删除
	
	private String createUser; // 创建人

	private String createDate; // 创建时间

	public String getUseCompanyId() {
		return useCompanyId;
	}

	public void setUseCompanyId(String useCompanyId) {
		this.useCompanyId = useCompanyId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getUseCompanyAddress() {
		return useCompanyAddress;
	}

	public void setUseCompanyAddress(String useCompanyAddress) {
		this.useCompanyAddress = useCompanyAddress;
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

	public String getPostal() {
		return postal;
	}

	public void setPostal(String postal) {
		this.postal = postal;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getOrganizationCode() {
		return organizationCode;
	}

	public void setOrganizationCode(String organizationCode) {
		this.organizationCode = organizationCode;
	}

	public String getSafeName() {
		return safeName;
	}

	public void setSafeName(String safeName) {
		this.safeName = safeName;
	}

	public String getDeleteFlag() {
		return deleteFlag;
	}

	public void setDeleteFlag(String deleteFlag) {
		this.deleteFlag = deleteFlag;
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
	
}
