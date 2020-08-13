package com.bluebird.module.system.vo;

/**
 * 树vo
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-03-16 18:50
 */
public class ZTreeVo {

    private String id;//树唯一标识

    private String pId;//上级id

    private String name;//名称

    private boolean checked;//是否选择

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getpId() {
        return pId;
    }

    public void setpId(String pId) {
        this.pId = pId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isChecked() {
        return checked;
    }

    public void setChecked(boolean checked) {
        this.checked = checked;
    }
}
