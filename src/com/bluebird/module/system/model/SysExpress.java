package com.bluebird.module.system.model;

import java.io.Serializable;

/**
 * 系统物流信息
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016/7/12 17:32
 */
public class SysExpress implements Serializable {

    private String code;

    private String name;

    private String APIId;

    private String APIKey;

    private Integer useCount;//使用次数

    private String useDate;//使用日期

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAPIId() {
        return APIId;
    }

    public void setAPIId(String APIId) {
        this.APIId = APIId;
    }

    public String getAPIKey() {
        return APIKey;
    }

    public void setAPIKey(String APIKey) {
        this.APIKey = APIKey;
    }

    public Integer getUseCount() {
        return useCount;
    }

    public void setUseCount(Integer useCount) {
        this.useCount = useCount;
    }

    public String getUseDate() {
        return useDate;
    }

    public void setUseDate(String useDate) {
        this.useDate = useDate;
    }
}
