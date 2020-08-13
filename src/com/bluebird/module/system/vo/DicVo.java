package com.bluebird.module.system.vo;

import java.io.Serializable;
import java.util.List;

/**
 * 缓存的字段对象VO
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-4-8 15:06
 */
public class DicVo implements Serializable {

    private String dicId;//字典主键

    private String dicCode;//编码

    private String dicType;//类型

    private String typeCode;//类型编码

    private String dicName;//名称

    private String dicValue;//值

    private List list ;
    
    public List getList() {
		return list;
	}

	public void setList(List list) {
		this.list = list;
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

    public String getDicName() {
        return dicName;
    }

    public void setDicName(String dicName) {
        this.dicName = dicName;
    }

    public String getDicValue() {
        return dicValue;
    }

    public void setDicValue(String dicValue) {
        this.dicValue = dicValue;
    }

    public String getTypeCode() {
        return typeCode;
    }

    public void setTypeCode(String typeCode) {
        this.typeCode = typeCode;
    }
}
