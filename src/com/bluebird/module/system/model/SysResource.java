package com.bluebird.module.system.model;

/**
 * 资源实体对象
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-9 10:41
 */
public class SysResource {

    private String resId;//系统资源表主键

    private String pId;//父级节点主键

    private Integer type;//类型 0为模块 1为功能菜单 2二级菜单 3操作按钮

    private String resName;//资源名称 默认为空

    private String resCode;//资源编码 默认为空

    private String moduleType;//模块类型 0 pc端 1APP端

    private String icon;//图标标识(CSS样式) 默认为空

    private Integer sortOrder;//排序位置 默认为0

    private String content;//内容(url或者正则规则)

    private String state;// 状态 1可以 0禁用

    private String createDate;//创建时间 默认为空

    private String remark;//备注信息

    public String getResId() {
        return resId;
    }

    public void setResId(String resId) {
        this.resId = resId;
    }

    public String getpId() {
        return pId;
    }

    public void setpId(String pId) {
        this.pId = pId;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getResName() {
        return resName;
    }

    public void setResName(String resName) {
        this.resName = resName;
    }

    public String getResCode() {
        return resCode;
    }

    public void setResCode(String resCode) {
        this.resCode = resCode;
    }

    public String getModuleType() {
        return moduleType;
    }

    public void setModuleType(String moduleType) {
        this.moduleType = moduleType;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
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

    @Override
    public String toString() {
        return "{" +
                "resId:'" + resId + '\'' +
                ", pId:'" + pId + '\'' +
                ", type:" + type +
                ", resName:'" + resName + '\'' +
                ", resCode:'" + resCode + '\'' +
                ", moduleType:'" + moduleType + '\'' +
                ", icon:'" + icon + '\'' +
                ", sortOrder:" + sortOrder +
                ", content:'" + content + '\'' +
                ", state:'" + state + '\'' +
                ", createDate:'" + createDate + '\'' +
                ", remark:'" + remark + '\'' +
                '}';
    }
}
