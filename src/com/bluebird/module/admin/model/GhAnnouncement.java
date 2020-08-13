package com.bluebird.module.admin.model;

/**
 * 通知公告
 *
 * @author wangj
 */
public class GhAnnouncement  {

	private String announcementId;
	
	private String announcementTitle;  //标题
	
	private String announcementContent;  //内容
	
	private String isShowIndex;  //是否显示首页
	
	private String orgId; //组织机构
	
	private String creatUser; 
	
	private String creatDate;
	
	private String deleteFlag;
	
	private String summary; //摘要
	private String time; //摘要
	 
	
	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getDeleteFlag() {
		return deleteFlag;
	}

	public void setDeleteFlag(String deleteFlag) {
		this.deleteFlag = deleteFlag;
	}

	public String getAnnouncementId() {
		return announcementId;
	}

	public void setAnnouncementId(String announcementId) {
		this.announcementId = announcementId;
	}

	public String getAnnouncementTitle() {
		return announcementTitle;
	}

	public void setAnnouncementTitle(String announcementTitle) {
		this.announcementTitle = announcementTitle;
	}

	public String getAnnouncementContent() {
		return announcementContent;
	}

	public void setAnnouncementContent(String announcementContent) {
		this.announcementContent = announcementContent;
	}

	public String getIsShowIndex() {
		return isShowIndex;
	}

	public void setIsShowIndex(String isShowIndex) {
		this.isShowIndex = isShowIndex;
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
	
}
