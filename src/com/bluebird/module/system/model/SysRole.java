package com.bluebird.module.system.model;

/**
 * 角色实体对象
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-7 15:15
 */
public class SysRole {

    private String roleId;//角色主键

    private String roleCode;//角色编码

    private String roleName;//角色名称

    private String state;//角色状态 -1 逻辑删除 1为正常、0冻结 默认为1

    private String createSuId;//创建人主键

    private String createDate;//创建时间

    private String remark;//备注说明

    private Integer hasPmss;////是否授权资源 0为未授权 1为已授权

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

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCreateSuId() {
        return createSuId;
    }

    public void setCreateSuId(String createSuId) {
        this.createSuId = createSuId;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Integer getHasPmss() {
        return hasPmss;
    }

    public void setHasPmss(Integer hasPmss) {
        this.hasPmss = hasPmss;
    }

    @Override
    public String toString() {
        return "{" +
                "roleId:'" + roleId + '\'' +
                ", roleCode:'" + roleCode + '\'' +
                ", roleName:'" + roleName + '\'' +
                ", state:'" + state + '\'' +
                ", createSuId:'" + createSuId + '\'' +
                ", createDate:'" + createDate + '\'' +
                ", remark:'" + remark + '\'' +
                ", hasPmss:" + hasPmss +
                '}';
    }
}
