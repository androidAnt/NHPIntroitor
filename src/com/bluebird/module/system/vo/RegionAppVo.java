package com.bluebird.module.system.vo;

import java.io.Serializable;
import java.util.List;

/**
 * 省市县/区对象
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-6-2 13:55
 */
public class RegionAppVo {

    private Integer srId;

    private String name;

    private Integer type;//类型 是普通省还是直辖市 只针对省

    private List<RegionAppVo>  city;

    private List<RegionAppVo> county;

    private Double lng;//经度

    private Double lat;//维度

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<RegionAppVo> getCity() {
        return city;
    }

    public void setCity(List<RegionAppVo> city) {
        this.city = city;
    }

    public List<RegionAppVo> getCounty() {
        return county;
    }

    public void setCounty(List<RegionAppVo> county) {
        this.county = county;
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

    public Integer getSrId() {
        return srId;
    }

    public void setSrId(Integer srId) {
        this.srId = srId;
    }
}
