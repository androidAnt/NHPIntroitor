package com.bluebird.module.admin.model;

public class TbProposal {
	  private String proposalId; //ID
	  private String title; //标题
	  private String content; //发布内容
	  private String deleteFlag; //删除标记(0未删除，1是已删除)
	  private String orgId; //组织机构id
	  private String creatUser; //发布人
	  private String creatDate; //发布时间
	  private String replierUser; //回复人
	  private String replierDate; //回复时间
	  private String replierType; //回复状态(0未回复，1已回复)
	  private String replierContent; //回复内容
	  private String auditorUser; //审核人
	  private String auditorDate; //审核时间
	  private String auditorType; //审核状态(0未审核，1已通过，2未通过)
	  private String auditorContent; //审核不通过原因	
	  private String orgName; //组织名称
	  
	public String getOrgName() {
		return orgName;
	}
	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}
	public String getProposalId() {
		return proposalId;
	}
	public void setProposalId(String proposalId) {
		this.proposalId = proposalId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
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
	public String getReplierUser() {
		return replierUser;
	}
	public void setReplierUser(String replierUser) {
		this.replierUser = replierUser;
	}
	public String getReplierDate() {
		return replierDate;
	}
	public void setReplierDate(String replierDate) {
		this.replierDate = replierDate;
	}
	public String getReplierType() {
		return replierType;
	}
	public void setReplierType(String replierType) {
		this.replierType = replierType;
	}
	public String getReplierContent() {
		return replierContent;
	}
	public void setReplierContent(String replierContent) {
		this.replierContent = replierContent;
	}
	public String getAuditorUser() {
		return auditorUser;
	}
	public void setAuditorUser(String auditorUser) {
		this.auditorUser = auditorUser;
	}
	public String getAuditorDate() {
		return auditorDate;
	}
	public void setAuditorDate(String auditorDate) {
		this.auditorDate = auditorDate;
	}
	public String getAuditorType() {
		return auditorType;
	}
	public void setAuditorType(String auditorType) {
		this.auditorType = auditorType;
	}
	public String getAuditorContent() {
		return auditorContent;
	}
	public void setAuditorContent(String auditorContent) {
		this.auditorContent = auditorContent;
	}
	  
	  
}
