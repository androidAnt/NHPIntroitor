package com.bluebird.module.admin.model;

import java.util.List;

//资料下载实体类
public class TbDataDownload {

	private String fileId; //资料ID
	private String fileName; //资料名称
	private String fileContent; //资料内容
	private String menuId; //所属菜单ID
	private String deleteFlag; //删除标记
	private String orgId; //组织机构id
	private String creatUser; //创建人
	private String creatDate; //创建时间
	private String menuName; //菜单名称
	private String orgName; //组织名称
	private String fileUuid; //附件关联字段
	
	private String files; //附件传值
	
	private List<SysFile> fileList;  //附件列表
	
	public String getOrgName() {
		return orgName;
	}
	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}
	public String getFileId() {
		return fileId;
	}
	public void setFileId(String fileId) {
		this.fileId = fileId;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getFileContent() {
		return fileContent;
	}
	public void setFileContent(String fileContent) {
		this.fileContent = fileContent;
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
	public String getFileUuid() {
		return fileUuid;
	}
	public void setFileUuid(String fileUuid) {
		this.fileUuid = fileUuid;
	}
 
}
