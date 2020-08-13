package com.bluebird.module.admin.model;

import java.util.List;

/**
 * 内容管理
 *
 * @author wangj
 */
public class GhContentManage  {

	private String contentId; 
	
	private String contentTitle;  //标题
	
	private String contentDetail; //内容
	
	private String deleteFlag;  //删除标记
	
	private String imgShow; //图片是否显示首页
	
	private String contentShow;  //文章是否显示首页
	
	private String belongContentType;  //所属分类id
	
	private String belongContentTypeName;  //所属分类名称
	
	private String articleType;  //文章类型
	
	private String isRelease;  //是否发布  0是已发布   1是未发布
	
	private String creatUser;  //创建人
	
	private String creatDate;  //创建时间
	
	private String orgId;  //组织机构
	private String orgName;  //组织机构
	
	private Integer viewCount; //浏览总数
	
	private String contentTypeName;  //所属分类名称
	
	private String contentArticleType; // 文章类型
	
	private String menuName; // 所属菜单名称
	private String menuId; // 所属菜单Id
	
	private String contentSource;  //内容来源
	
	private String contentUrl; // url地址
	
	private String files;  //前端传值使用
	
	private String fileUuid; // 附件uuid
	
	private String imgFileUuid;  //图片uuid
	
	private String summary;  //摘要
	
	private String imgFiles; 
	
	private String fileId; 
	
	private List<SysFile> fileList;
	
	private List<SysFile> imgFileList;

	
	public String getMenuId() {
		return menuId;
	}

	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}

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

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public List<SysFile> getImgFileList() {
		return imgFileList;
	}

	public void setImgFileList(List<SysFile> imgFileList) {
		this.imgFileList = imgFileList;
	}

	public String getImgFiles() {
		return imgFiles;
	}

	public void setImgFiles(String imgFiles) {
		this.imgFiles = imgFiles;
	}

	public String getContentId() {
		return contentId;
	}

	public void setContentId(String contentId) {
		this.contentId = contentId;
	}

	public String getContentTitle() {
		return contentTitle;
	}

	public void setContentTitle(String contentTitle) {
		this.contentTitle = contentTitle;
	}

	public String getContentDetail() {
		return contentDetail;
	}

	public void setContentDetail(String contentDetail) {
		this.contentDetail = contentDetail;
	}

	public String getDeleteFlag() {
		return deleteFlag;
	}

	public void setDeleteFlag(String deleteFlag) {
		this.deleteFlag = deleteFlag;
	}

	public String getImgShow() {
		return imgShow;
	}

	public void setImgShow(String imgShow) {
		this.imgShow = imgShow;
	}

	public String getContentShow() {
		return contentShow;
	}

	public void setContentShow(String contentShow) {
		this.contentShow = contentShow;
	}

	public String getBelongContentType() {
		return belongContentType;
	}

	public void setBelongContentType(String belongContentType) {
		this.belongContentType = belongContentType;
	}

	public String getIsRelease() {
		return isRelease;
	}

	public void setIsRelease(String isRelease) {
		this.isRelease = isRelease;
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

	public String getOrgId() {
		return orgId;
	}

	public void setOrgId(String orgId) {
		this.orgId = orgId;
	}

	public Integer getViewCount() {
		return viewCount;
	}

	public void setViewCount(Integer viewCount) {
		this.viewCount = viewCount;
	}

	public String getContentTypeName() {
		return contentTypeName;
	}

	public void setContentTypeName(String contentTypeName) {
		this.contentTypeName = contentTypeName;
	}

	public String getContentArticleType() {
		return contentArticleType;
	}

	public void setContentArticleType(String contentArticleType) {
		this.contentArticleType = contentArticleType;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public String getContentSource() {
		return contentSource;
	}

	public void setContentSource(String contentSource) {
		this.contentSource = contentSource;
	}

	public String getContentUrl() {
		return contentUrl;
	}

	public void setContentUrl(String contentUrl) {
		this.contentUrl = contentUrl;
	}

	public String getBelongContentTypeName() {
		return belongContentTypeName;
	}

	public void setBelongContentTypeName(String belongContentTypeName) {
		this.belongContentTypeName = belongContentTypeName;
	}

	public String getArticleType() {
		return articleType;
	}

	public void setArticleType(String articleType) {
		this.articleType = articleType;
	}

	public String getFiles() {
		return files;
	}

	public void setFiles(String files) {
		this.files = files;
	}

	public String getFileUuid() {
		return fileUuid;
	}

	public void setFileUuid(String fileUuid) {
		this.fileUuid = fileUuid;
	}

	public List<SysFile> getFileList() {
		return fileList;
	}

	public void setFileList(List<SysFile> fileList) {
		this.fileList = fileList;
	}

	public String getImgFileUuid() {
		return imgFileUuid;
	}

	public void setImgFileUuid(String imgFileUuid) {
		this.imgFileUuid = imgFileUuid;
	}
	
}
