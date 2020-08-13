package com.bluebird.module.admin.model;

/**
 * 广告位置
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2015-12-4 11:12
 */
public class AdvertPosition {

    private String apId;//广告位置主键

    private String pId;//父级ID

    private String pTitle;//父级标题

    private Integer width;//宽度

    private Integer height;//高度

    private String title;//位置标题

    private String opUId;//操作人主键

    private String opDate;//操作时间（添加或更新）

    private String state;//状态 1显示  0隐藏

    public String getApId() {
        return apId;
    }

    public void setApId(String apId) {
        this.apId = apId;
    }

    public String getpId() {
        return pId;
    }

    public void setpId(String pId) {
        this.pId = pId;
    }

    public String getpTitle() {
        return pTitle;
    }

    public void setpTitle(String pTitle) {
        this.pTitle = pTitle;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getOpUId() {
        return opUId;
    }

    public void setOpUId(String opUId) {
        this.opUId = opUId;
    }

    public String getOpDate() {
        return opDate;
    }

    public void setOpDate(String opDate) {
        this.opDate = opDate;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    @Override
    public String toString() {
        return "{" +
                "apId:'" + apId + '\'' +
                ", pId:'" + pId + '\'' +
                ", pTitle:'" + pTitle + '\'' +
                ", width:" + width +
                ", height:" + height +
                ", title:'" + title + '\'' +
                ", opUId:'" + opUId + '\'' +
                ", opDate:'" + opDate + '\'' +
                ", state:'" + state + '\'' +
                '}';
    }
}
