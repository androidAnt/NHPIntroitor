package com.bluebird.module.admin.model;

/**
 * 菜单管理实体类
 *
 * @author wangj
 */
public class GhMenuManage  {

	private String menuId; // 菜单id

	private String menuName;  // 菜单名称
	
	private Integer menuSort;  // 排序
	
	private String menuStatus; // 删除标记(0:未删除，1已删除) 是否启用

	private String createUser; // 创建人

	private String createDate; // 创建时间
	
	private String imgUuid;  //图标uuid
	
	public String getImgUuid() {
		return imgUuid;
	}

	public void setImgUuid(String imgUuid) {
		this.imgUuid = imgUuid;
	}

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

	public Integer getMenuSort() {
		return menuSort;
	}

	public void setMenuSort(Integer menuSort) {
		this.menuSort = menuSort;
	}

	public String getMenuStatus() {
		return menuStatus;
	}

	public void setMenuStatus(String menuStatus) {
		this.menuStatus = menuStatus;
	}

	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
}
