package com.bluebird.module.app.vo;

/**
 * 广告对象APP端使用
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-06-13 16:26
 */
public class AdvertAppVo {

    private String aId;//主键

    private Integer sortNO;//序号

    private String link;//广告链接

    private String picUrl;//广告图片地址

    private Integer type;//类型

    private String sellerId;//商户主键

    private String title;//标题

    public Integer getSortNO() {
        return sortNO;
    }

    public void setSortNO(Integer sortNO) {
        this.sortNO = sortNO;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }

    public String getaId() {
        return aId;
    }

    public void setaId(String aId) {
        this.aId = aId;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getSellerId() {
        return sellerId;
    }

    public void setSellerId(String sellerId) {
        this.sellerId = sellerId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
