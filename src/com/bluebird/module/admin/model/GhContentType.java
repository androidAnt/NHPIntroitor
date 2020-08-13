package com.bluebird.module.admin.model;

import java.util.List;

/**
 * 内容分类实体类
 * @author huatek-pc
 *
 */
/**
 * @author huatek-pc
 *
 */
public class GhContentType {
	
	private String contentTypeId;  //分类id
	
	private String contentTypeName; //分类名称
	
	private Integer contentTypeSort; //排序
	
	private String contentTypeRemark;  //备注
	
	private String menuId; //所属菜单
	
	private String menuName; //所属菜单名称
	
	private String contentTypePid;  //上级分类id
	
	private String contentTypePname;  //上级分类名称
	
	private String articleType; //文章类型
	
	private String contentType; //内容分类
	
	private String urlPath;  //url地址
	
	private String contentTypeCreateUser;
	
	private String contentTypeCreateDate;
	
	private String deleteFlag;
	
	private String systemFlag; //是否系统内置
	
	private String logoImg;
	
	private String logoImg1;
	
	private String backgroundImg;
	
	private List<SysFile> logoImgList;
	
	private List<SysFile> logoImg2List;
	
	private List<SysFile> backgroundImgList;
	
	private String logoImgUuid;
	
	private String logoImg1Uuid;
	
	private String backgroundImgUuid;
	
	private List<GhContentManage> contentManageList;
	
	private String showFlagWechart;
	
	private String belongWechartBan;
	
	public String getShowFlagWechart() {
		return showFlagWechart;
	}

	public void setShowFlagWechart(String showFlagWechart) {
		this.showFlagWechart = showFlagWechart;
	}

	public String getBelongWechartBan() {
		return belongWechartBan;
	}

	public void setBelongWechartBan(String belongWechartBan) {
		this.belongWechartBan = belongWechartBan;
	}

	public List<SysFile> getLogoImgList() {
		return logoImgList;
	}

	public void setLogoImgList(List<SysFile> logoImgList) {
		this.logoImgList = logoImgList;
	}

	public List<GhContentManage> getContentManageList() {
		return contentManageList;
	}

	public void setContentManageList(List<GhContentManage> contentManageList) {
		this.contentManageList = contentManageList;
	}

	public List<SysFile> getLogoImg2List() {
		return logoImg2List;
	}

	public void setLogoImg2List(List<SysFile> logoImg2List) {
		this.logoImg2List = logoImg2List;
	}

	public List<SysFile> getBackgroundImgList() {
		return backgroundImgList;
	}

	public void setBackgroundImgList(List<SysFile> backgroundImgList) {
		this.backgroundImgList = backgroundImgList;
	}

	public String getSystemFlag() {
		return systemFlag;
	}

	public void setSystemFlag(String systemFlag) {
		this.systemFlag = systemFlag;
	}

	public String getContentTypeId() {
		return contentTypeId;
	}

	public void setContentTypeId(String contentTypeId) {
		this.contentTypeId = contentTypeId;
	}

	public String getContentTypeName() {
		return contentTypeName;
	}

	public void setContentTypeName(String contentTypeName) {
		this.contentTypeName = contentTypeName;
	}

	public Integer getContentTypeSort() {
		return contentTypeSort;
	}

	public void setContentTypeSort(Integer contentTypeSort) {
		this.contentTypeSort = contentTypeSort;
	}

	public String getContentTypeRemark() {
		return contentTypeRemark;
	}

	public void setContentTypeRemark(String contentTypeRemark) {
		this.contentTypeRemark = contentTypeRemark;
	}

	public String getMenuId() {
		return menuId;
	}

	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}
	
	public String getContentTypePid() {
		return contentTypePid;
	}

	public void setContentTypePid(String contentTypePid) {
		this.contentTypePid = contentTypePid;
	}

	public String getContentTypePname() {
		return contentTypePname;
	}

	public void setContentTypePname(String contentTypePname) {
		this.contentTypePname = contentTypePname;
	}

	public String getContentTypeCreateUser() {
		return contentTypeCreateUser;
	}

	public void setContentTypeCreateUser(String contentTypeCreateUser) {
		this.contentTypeCreateUser = contentTypeCreateUser;
	}

	public String getContentTypeCreateDate() {
		return contentTypeCreateDate;
	}

	public void setContentTypeCreateDate(String contentTypeCreateDate) {
		this.contentTypeCreateDate = contentTypeCreateDate;
	}

	public String getDeleteFlag() {
		return deleteFlag;
	}

	public void setDeleteFlag(String deleteFlag) {
		this.deleteFlag = deleteFlag;
	}

	public String getArticleType() {
		return articleType;
	}

	public void setArticleType(String articleType) {
		this.articleType = articleType;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getUrlPath() {
		return urlPath;
	}

	public void setUrlPath(String urlPath) {
		this.urlPath = urlPath;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public String getLogoImg() {
		return logoImg;
	}

	public void setLogoImg(String logoImg) {
		this.logoImg = logoImg;
	}

	public String getBackgroundImg() {
		return backgroundImg;
	}

	public void setBackgroundImg(String backgroundImg) {
		this.backgroundImg = backgroundImg;
	}

	public String getLogoImg1() {
		return logoImg1;
	}

	public void setLogoImg1(String logoImg1) {
		this.logoImg1 = logoImg1;
	}

	public String getLogoImgUuid() {
		return logoImgUuid;
	}

	public void setLogoImgUuid(String logoImgUuid) {
		this.logoImgUuid = logoImgUuid;
	}

	public String getLogoImg1Uuid() {
		return logoImg1Uuid;
	}

	public void setLogoImg1Uuid(String logoImg1Uuid) {
		this.logoImg1Uuid = logoImg1Uuid;
	}

	public String getBackgroundImgUuid() {
		return backgroundImgUuid;
	}

	public void setBackgroundImgUuid(String backgroundImgUuid) {
		this.backgroundImgUuid = backgroundImgUuid;
	}
	
	
}
