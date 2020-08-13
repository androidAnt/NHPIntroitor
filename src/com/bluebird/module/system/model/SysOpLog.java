package com.bluebird.module.system.model;

/**
 * 操作日志实体对象
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-11 17:18
 */
public class SysOpLog {

    private String opId;//操作日志ID

    private String className;//操作类名

    private String methodName;//方法名

    private String des;//操作描述

    private Integer success;//操作是否成功 1" 为成功、"0"为异常 2为失败

    private String exceptionCode;//异常代码

    private String exceptionDetail;//异常详情

    private String params;//请求参数

    private String suId;//操作人主键

    private String operateTime;//操作时间

    private String realName;

    private String loginName;

    //以下属性用于查询
    private String startDate;

    private String endDate;

    private String searchName;

    public String getOpId() {
        return opId;
    }

    public void setOpId(String opId) {
        this.opId = opId;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getMethodName() {
        return methodName;
    }

    public void setMethodName(String methodName) {
        this.methodName = methodName;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    public Integer getSuccess() {
        return success;
    }

    public void setSuccess(Integer success) {
        this.success = success;
    }

    public String getExceptionCode() {
        return exceptionCode;
    }

    public void setExceptionCode(String exceptionCode) {
        this.exceptionCode = exceptionCode;
    }

    public String getExceptionDetail() {
        return exceptionDetail;
    }

    public void setExceptionDetail(String exceptionDetail) {
        this.exceptionDetail = exceptionDetail;
    }

    public String getParams() {
        return params;
    }

    public void setParams(String params) {
        this.params = params;
    }

    public String getSuId() {
        return suId;
    }

    public void setSuId(String suId) {
        this.suId = suId;
    }

    public String getOperateTime() {
        return operateTime;
    }

    public void setOperateTime(String operateTime) {
        this.operateTime = operateTime;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getSearchName() {
        return searchName;
    }

    public void setSearchName(String searchName) {
        this.searchName = searchName;
    }
}
