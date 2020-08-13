package com.bluebird.module.system.vo;

import java.util.List;

/**
 * 用户拥有的角色对象（用于存储角色与角色包含的权限）
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-9 16:08
 */
public class RoleVo {

    private String roleId;//角色主键

    private String roleCode;//角色编码

    private List<String> pmss;//角色拥有的操作资源

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    public List<String> getPmss() {
        return pmss;
    }

    public void setPmss(List<String> pmss) {
        this.pmss = pmss;
    }
}
