package com.bluebird.module.admin.model;

//附件实体
public class SysFile {
	
	private String fileId;  //附件id
	
	private String fileName; //附件生成的随机名称
	
	private String name; //附件真实名称
	
	private String uuid; //附件关联字段
	
	private String fileSize; //附件大小
	
	private String deleteFlag; //删除标记
	
	private String fileType; //附件格式
	
	private String url; //附件存储路径
	
	private String creatUser; //上传人
	
	private String creatDate; //上传时间
	
	private String fileSource; //附件来源
	
	private String linkId;
	
	private String linkTile;
	
	public String getLinkId() {
		return linkId;
	}

	public void setLinkId(String linkId) {
		this.linkId = linkId;
	}

	public String getLinkTile() {
		return linkTile;
	}

	public void setLinkTile(String linkTile) {
		this.linkTile = linkTile;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getFileSize() {
		return fileSize;
	}

	public void setFileSize(String fileSize) {
		this.fileSize = fileSize;
	}

	public String getDeleteFlag() {
		return deleteFlag;
	}

	public void setDeleteFlag(String deleteFlag) {
		this.deleteFlag = deleteFlag;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
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

	public String getFileSource() {
		return fileSource;
	}

	public void setFileSource(String fileSource) {
		this.fileSource = fileSource;
	}

}
