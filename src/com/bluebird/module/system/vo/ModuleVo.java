package com.bluebird.module.system.vo;

/**
 * 用户拥有的模块对象
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-11 14:44
 */
public class ModuleVo {

    private String resId;//模块ID

    private String icon;//模块图片或样式

    private String resCode;//模块编码

    private String resName;//模块名称

    public String getResId() {
        return resId;
    }

    public void setResId(String resId) {
        this.resId = resId;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getResCode() {
        return resCode;
    }

    public void setResCode(String resCode) {
        this.resCode = resCode;
    }

    public String getResName() {
        return resName;
    }

    public void setResName(String resName) {
        this.resName = resName;
    }
}
