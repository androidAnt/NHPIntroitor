package com.bluebird.module.system.vo;

import java.io.Serializable;

/**
 * 数据字典类型vo
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-4-8 14:34
 */
public class DicTypeVo implements Serializable{

    private  String dicId;

    private String dicCode;

    private String dicName;

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

    public String getDicName() {
        return dicName;
    }

    public void setDicName(String dicName) {
        this.dicName = dicName;
    }
}
