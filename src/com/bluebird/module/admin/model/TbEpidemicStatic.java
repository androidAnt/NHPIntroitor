package com.bluebird.module.admin.model;

public class TbEpidemicStatic {
	 
	private String epidemicStaticId; //当天疫情上报Id
	private String staticDate; //上报时间
	private Integer staticComNum; //已上报人数
	private Integer staticTotalNum; //上报总人数
	private Integer staticNoNum;//未上报人数
	
	private String startTime;
	
	private String endTime; 
	
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	private String comRate;//上报完成率
	
	public String getComRate() {
		return comRate;
	}
	public void setComRate(String comRate) {
		this.comRate = comRate;
	}
	public String getEpidemicStaticId() {
		return epidemicStaticId;
	}
	public void setEpidemicStaticId(String epidemicStaticId) {
		this.epidemicStaticId = epidemicStaticId;
	}
	public String getStaticDate() {
		return staticDate;
	}
	public void setStaticDate(String staticDate) {
		this.staticDate = staticDate;
	}
	public Integer getStaticComNum() {
		return staticComNum;
	}
	public void setStaticComNum(Integer staticComNum) {
		this.staticComNum = staticComNum;
	}
	public Integer getStaticTotalNum() {
		return staticTotalNum;
	}
	public void setStaticTotalNum(Integer staticTotalNum) {
		this.staticTotalNum = staticTotalNum;
	}
	public Integer getStaticNoNum() {
		return staticNoNum;
	}
	public void setStaticNoNum(Integer staticNoNum) {
		this.staticNoNum = staticNoNum;
	}
}
