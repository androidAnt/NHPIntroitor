package com.bluebird.module.admin.model;

public class TbEpidemic {
	 
	private String epidemicId; //疫情上报Id
	private String currPosition; //当前位置
	private String isTo; //近15天是否前往或经停湖北省
	private String isContact; //近15天是否接触过湖北或出入湖北的人员
	private String isDiagnosis;//近15天是否接触过确诊或疑似患者
	private String currTemperature; //今天体温情况
	private String currStatus; //有无疑似症状或异常状态
	private String isIsolation;//是否隔离
	private String isolation;//隔离情况
	private String otherSituations;//其他情况
	private String userId;//用户Id
	private String creatDate;//上报时间
	
	public String getCreatDate() {
		return creatDate;
	}
	public void setCreatDate(String creatDate) {
		this.creatDate = creatDate;
	}
	public String getEpidemicId() {
		return epidemicId;
	}
	public void setEpidemicId(String epidemicId) {
		this.epidemicId = epidemicId;
	}
	public String getCurrPosition() {
		return currPosition;
	}
	public void setCurrPosition(String currPosition) {
		this.currPosition = currPosition;
	}
	public String getIsTo() {
		return isTo;
	}
	public void setIsTo(String isTo) {
		this.isTo = isTo;
	}
	public String getIsContact() {
		return isContact;
	}
	public void setIsContact(String isContact) {
		this.isContact = isContact;
	}
	public String getIsDiagnosis() {
		return isDiagnosis;
	}
	public void setIsDiagnosis(String isDiagnosis) {
		this.isDiagnosis = isDiagnosis;
	}
	public String getCurrTemperature() {
		return currTemperature;
	}
	public void setCurrTemperature(String currTemperature) {
		this.currTemperature = currTemperature;
	}
	public String getCurrStatus() {
		return currStatus;
	}
	public void setCurrStatus(String currStatus) {
		this.currStatus = currStatus;
	}
	public String getIsIsolation() {
		return isIsolation;
	}
	public void setIsIsolation(String isIsolation) {
		this.isIsolation = isIsolation;
	}
	public String getIsolation() {
		return isolation;
	}
	public void setIsolation(String isolation) {
		this.isolation = isolation;
	}
	public String getOtherSituations() {
		return otherSituations;
	}
	public void setOtherSituations(String otherSituations) {
		this.otherSituations = otherSituations;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
}
