package com.bluebird.module.admin.model;

import java.util.List;

//政策法规实体
public class TbPolicies {
	private String policiesId; //政策法规ID
	private String policiesName; //政策法规名称
	private String policiesContent; //政策法规内容
	private String menuId; //所属菜单ID
	private String deleteFlag; //删除标记
	private String orgId; //组织机构id
	private String creatUser; //创建人
	private String creatDate; //创建时间
	private String menuName; //菜单名称
	private String orgName; //组织名称
	private String policiesType; //分类
	private String policiesTypeName; //分类名称
	
	public String getPoliciesTypeName() {
		return policiesTypeName;
	}
	public void setPoliciesTypeName(String policiesTypeName) {
		this.policiesTypeName = policiesTypeName;
	}
	private String fileUuid; //附件关联字段
	
	private String files; //附件传值
	
	private List<SysFile> fileList;  //附件列表
	
	
	
	public String getPoliciesType() {
		return policiesType;
	}
	public void setPoliciesType(String policiesType) {
		this.policiesType = policiesType;
	}
	public String getFileUuid() {
		return fileUuid;
	}
	public void setFileUuid(String fileUuid) {
		this.fileUuid = fileUuid;
	}
	public String getFiles() {
		return files;
	}
	public void setFiles(String files) {
		this.files = files;
	}
	public List<SysFile> getFileList() {
		return fileList;
	}
	public void setFileList(List<SysFile> fileList) {
		this.fileList = fileList;
	}
	public String getOrgName() {
		return orgName;
	}
	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}
	public String getPoliciesId() {
		return policiesId;
	}
	public void setPoliciesId(String policiesId) {
		this.policiesId = policiesId;
	}
	public String getPoliciesName() {
		return policiesName;
	}
	public void setPoliciesName(String policiesName) {
		this.policiesName = policiesName;
	}
	public String getPoliciesContent() {
		return policiesContent;
	}
	public void setPoliciesContent(String policiesContent) {
		this.policiesContent = policiesContent;
	}
	public String getMenuId() {
		return menuId;
	}
	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}
	public String getDeleteFlag() {
		return deleteFlag;
	}
	public void setDeleteFlag(String deleteFlag) {
		this.deleteFlag = deleteFlag;
	}
	public String getOrgId() {
		return orgId;
	}
	public void setOrgId(String orgId) {
		this.orgId = orgId;
	}
	public String getCreatUser() {
		return creatUser;
	}
	public void setCreatUser(String creatUser) {
		this.creatUser = creatUser;
	}
	public String getCreatDate() {
		return creatDate;
	}
	public void setCreatDate(String creatDate) {
		this.creatDate = creatDate;
	}
	public String getMenuName() {
		return menuName;
	}
	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}
	
	
}
