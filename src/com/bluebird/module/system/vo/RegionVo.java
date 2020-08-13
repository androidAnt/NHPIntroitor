package com.bluebird.module.system.vo;

import java.io.Serializable;

/**
 * 省市县/区对象
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-6-2 13:55
 */
public class RegionVo implements Serializable{

    private Integer srId;

    private String name;

    private String code;

    private Integer pId;

    private String pName;

    private Double lng;

    private Double lat;

    private Integer type;

    private Integer level;

    private Integer sortNO;
    
    private String pingyinFast;

    public Integer getSrId() {
        return srId;
    }

    public void setSrId(Integer srId) {
        this.srId = srId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getpId() {
        return pId;
    }

    public void setpId(Integer pId) {
        this.pId = pId;
    }

    public String getpName() {
        return pName;
    }

    public void setpName(String pName) {
        this.pName = pName;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getSortNO() {
        return sortNO;
    }

    public void setSortNO(Integer sortNO) {
        this.sortNO = sortNO;
    }

    @Override
    public String toString() {
        return "RegionVo{" +
                "srId=" + srId +
                ", name='" + name + '\'' +
                ", code='" + code + '\'' +
                ", pId=" + pId +
                ", pName='" + pName + '\'' +
                ", lng=" + lng +
                ", lat=" + lat +
                ", type=" + type +
                ", level=" + level +
                ", sortNO=" + sortNO +
                '}';
    }

	public String getPingyinFast() {
		return pingyinFast;
	}

	public void setPingyinFast(String pingyinFast) {
		this.pingyinFast = pingyinFast;
	}
    

}
