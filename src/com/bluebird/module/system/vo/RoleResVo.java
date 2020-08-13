package com.bluebird.module.system.vo;

/**
 * 角色资源vo
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-16 15:43
 */
public class RoleResVo {

    private String rsId;//角色资源主键

    private String roleId;//角色主键

    private String resId;//资源主键

    public String getRsId() {
        return rsId;
    }

    public void setRsId(String rsId) {
        this.rsId = rsId;
    }

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

    public String getResId() {
        return resId;
    }

    public void setResId(String resId) {
        this.resId = resId;
    }
}
