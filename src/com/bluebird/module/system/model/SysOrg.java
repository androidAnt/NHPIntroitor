package com.bluebird.module.system.model;

/**
 * 组织机构实体类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-10 11:19
 */
public class SysOrg {

    private String orgId;//机构ID

    private String pId;//上级机构ID

    private String agent;//机构标识

    private String orgName;//机构名称

    private String orgCode;//机构编码

    private Integer levels;//机构等级

    private Integer state;//机构状态 1正常 0禁用

    private String createDate;//机构创建日期

    private String remark;//备注
    
    private String name; //用于ztree显示
    
    private Integer orgSort;

    public String getOrgId() {
        return orgId;
    }

    public void setOrgId(String orgId) {
        this.orgId = orgId;
    }

    public String getpId() {
        return pId;
    }

    public void setpId(String pId) {
        this.pId = pId;
    }

    public String getAgent() {
        return agent;
    }

    public void setAgent(String agent) {
        this.agent = agent;
    }

    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(String orgName) {
        this.orgName = orgName;
    }

    public String getOrgCode() {
        return orgCode;
    }

    public void setOrgCode(String orgCode) {
        this.orgCode = orgCode;
    }

    public Integer getLevels() {
        return levels;
    }

    public void setLevels(Integer levels) {
        this.levels = levels;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
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
    
    public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getOrgSort() {
		return orgSort;
	}

	public void setOrgSort(Integer orgSort) {
		this.orgSort = orgSort;
	}

	@Override
    public String toString() {
        return "{" +
                "orgId:'" + orgId + '\'' +
                ", pId:'" + pId + '\'' +
                ", agent:'" + agent + '\'' +
                ", orgName:'" + orgName + '\'' +
                ", orgCode:'" + orgCode + '\'' +
                ", levels:" + levels +
                ", state:" + state +
                ", createDate:'" + createDate + '\'' +
                ", remark:'" + remark + '\'' +
                '}';
    }
}
