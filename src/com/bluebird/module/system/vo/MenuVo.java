package com.bluebird.module.system.vo;

/**
 * 菜单对象（用于存储模块下用户拥有的操作菜单）
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-7 15:14
 */
public class MenuVo {

    private String menuId;//菜单id

    private String menuName;//菜单名称

    private String icon;//菜单图标

    private String content;//菜单地址

    private Integer type;//菜单类型 0为模块 1为一级菜单 2为二级菜单 3为按钮

    public String getMenuId() {
        return menuId;
    }

    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
}
