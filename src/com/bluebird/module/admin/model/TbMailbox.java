package com.bluebird.module.admin.model;

public class TbMailbox {
	  private String mailboxId; //ID
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
	  private String publicity; //是否公开
	  private String orgName; //组织名称
	  private String yymm; //年月
	  private String dd; //日
	  private String yymmdd; //年月日
	  private String autp0; //未审核数量
	  private String autp1; //已通过数量
	  private String autp2; //未通过数量
	  private String retp1; //已回复数量
	  private String count; //总数
	  
	public String getYymmdd() {
		return yymmdd;
	}
	public void setYymmdd(String yymmdd) {
		this.yymmdd = yymmdd;
	}
	public String getAutp0() {
		return autp0;
	}
	public void setAutp0(String autp0) {
		this.autp0 = autp0;
	}
	public String getAutp1() {
		return autp1;
	}
	public void setAutp1(String autp1) {
		this.autp1 = autp1;
	}
	public String getAutp2() {
		return autp2;
	}
	public void setAutp2(String autp2) {
		this.autp2 = autp2;
	}
	public String getRetp1() {
		return retp1;
	}
	public void setRetp1(String retp1) {
		this.retp1 = retp1;
	}
	public String getCount() {
		return count;
	}
	public void setCount(String count) {
		this.count = count;
	}
	public String getYymm() {
		return yymm;
	}
	public void setYymm(String yymm) {
		this.yymm = yymm;
	}
	public String getDd() {
		return dd;
	}
	public void setDd(String dd) {
		this.dd = dd;
	}
	public String getOrgName() {
		return orgName;
	}
	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}
	public String getPublicity() {
		return publicity;
	}
	public void setPublicity(String publicity) {
		this.publicity = publicity;
	}
	public String getAuditorContent() {
		return auditorContent;
	}
	public void setAuditorContent(String auditorContent) {
		this.auditorContent = auditorContent;
	}
	public String getMailboxId() {
		return mailboxId;
	}
	public void setMailboxId(String mailboxId) {
		this.mailboxId = mailboxId;
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
	 
}
