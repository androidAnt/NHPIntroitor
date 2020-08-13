package com.bluebird.module.admin.vo;

import java.io.Serializable;
import java.util.List;

/**
 * 缓存的商品分类对象
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-5-24 17:59
 */
public class CcCache implements Serializable {

    private String ccId;//商品分类主键

    private Integer sortNO;//排序序号

    private Integer type;//类型 0商城 1生活服务

    private Integer level;//分类级别 0一级 1二级

    private String pId;//上级分类

    private String cname;//分类名称
    private String sname;//分类简写


    private String dicId;//绑定的属性

    private String iocUrl;//图标地址

    private String childJson;//二级分类

    private List<CcCache> childs;//前端使用二级分类

    public String getCcId() {
        return ccId;
    }

    public void setCcId(String ccId) {
        this.ccId = ccId;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public String getpId() {
        return pId;
    }

    public void setpId(String pId) {
        this.pId = pId;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public String getDicId() {
        return dicId;
    }

    public void setDicId(String dicId) {
        this.dicId = dicId;
    }

    public String getIocUrl() {
        return iocUrl;
    }

    public void setIocUrl(String iocUrl) {
        this.iocUrl = iocUrl;
    }

    public String getChildJson() {
        return childJson;
    }

    public void setChildJson(String childJson) {
        this.childJson = childJson;
    }

    public List<CcCache> getChilds() {
        return childs;
    }

    public void setChilds(List<CcCache> childs) {
        this.childs = childs;
    }

    public Integer getSortNO() {
        return sortNO;
    }

    public void setSortNO(Integer sortNO) {
        this.sortNO = sortNO;
    }

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}
    
}
