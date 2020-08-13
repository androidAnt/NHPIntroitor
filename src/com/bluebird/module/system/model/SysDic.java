package com.bluebird.module.system.model;

/**
 * 数据字典实体类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-4-7 15:00
 */
public class SysDic {

    private String dicId;//字典主键

    private Integer level;//字典级别 0系统 1用户定义

    private String dicCode;//编码

    private String dicType;//类型

    private String dicTypeName;//类型名称

    private String dicName;//名称

    private String dicValue;//值

    private Integer state;//状态 1正常 0禁用

    private String createDate;//创建时间

    private String remark;//备注
    
    private String pCode;
    
	public String getpCode() {
		return pCode;
	}

	public void setpCode(String pCode) {
		this.pCode = pCode;
	}

	public String getDicId() {
        return dicId;
    }

    public void setDicId(String dicId) {
        this.dicId = dicId;
    }

    public String getDicCode() {
        return dicCode;
    }

    public void setDicCode(String dicCode) {
        this.dicCode = dicCode;
    }

    public String getDicType() {
        return dicType;
    }

    public void setDicType(String dicType) {
        this.dicType = dicType;
    }

    public String getDicTypeName() {
        return dicTypeName;
    }

    public void setDicTypeName(String dicTypeName) {
        this.dicTypeName = dicTypeName;
    }

    public String getDicName() {
        return dicName;
    }

    public void setDicName(String dicName) {
        this.dicName = dicName;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getDicValue() {
        return dicValue;
    }

    public void setDicValue(String dicValue) {
        this.dicValue = dicValue;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    @Override
    public String toString() {
        return "{" +
                "dicId:'" + dicId + '\'' +
                ", dicCode:'" + dicCode + '\'' +
                ", level:'" + level + '\'' +
                ", dicType:'" + dicType + '\'' +
                ", dicTypeName:'" + dicTypeName + '\'' +
                ", dicName:'" + dicName + '\'' +
                ", dicValue:'" + dicValue + '\'' +
                ", state:" + state +
                ", createDate:'" + createDate + '\'' +
                ", remark:'" + remark + '\'' +
                '}';
    }
}
