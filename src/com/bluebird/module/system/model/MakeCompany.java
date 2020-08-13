package com.bluebird.module.system.model;

/**
 * 生产厂家实体类
 *
 * @author jiangr
 * @version 1.0
 * @Date 2018-12-21
 */
public class MakeCompany {
	
	private String makeCompanyId;   // 生产厂家id
	
	private String makeCompanyNo;   // 厂家编号
	 
	private String  makeCompanyName; // 厂家名称
	 
	private String makeCompanyAddress;  // 厂家地址
	
	private String linkName;   // 联系人
	
	private String phone;   // 联系电话 
	
	private String email;   // 联系人邮箱
	
	private String deleteFlag;   // 删除标志 (0:未删除，1已删除)
	
	private String createUser; // 创建人

	private String createDate; // 创建时间

	
	// get和set方法
	public String getMakeCompanyId() {
		return makeCompanyId;
	}

	public void setMakeCompanyId(String makeCompanyId) {
		this.makeCompanyId = makeCompanyId;
	}

	public String getMakeCompanyNo() {
		return makeCompanyNo;
	}

	public void setMakeCompanyNo(String makeCompanyNo) {
		this.makeCompanyNo = makeCompanyNo;
	}

	public String getMakeCompanyName() {
		return makeCompanyName;
	}

	public void setMakeCompanyName(String makeCompanyName) {
		this.makeCompanyName = makeCompanyName;
	}

	public String getMakeCompanyAddress() {
		return makeCompanyAddress;
	}

	public void setMakeCompanyAddress(String makeCompanyAddress) {
		this.makeCompanyAddress = makeCompanyAddress;
	}

	public String getLinkName() {
		return linkName;
	}

	public void setLinkName(String linkName) {
		this.linkName = linkName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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
