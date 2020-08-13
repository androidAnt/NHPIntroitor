package com.bluebird.module.system.model;


import java.io.Serializable;
import java.util.List;

import com.bluebird.module.system.vo.MenuVo;
import com.bluebird.module.system.vo.RoleVo;

/**
 * 系统用户实体对象
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-7 11:56
 */
public class SysUser implements Serializable {
	
    private String sessionId;//存储的sessionId

    private String suId;//主键
    
    private Integer identity; //用户身份标识 0平台 1商户

    private String loginName;//登录名称

    private String password;//登录密码

    private String realName;//真是姓名 默认为空

    private Integer age;//年龄 默认为0

    private Integer gender;//性别 0为男、1为女 2为未知 默认为2

    private String email;//邮件地址 默认为空

    private String phone;//联系电话 默认为空

    private String address;//联系地址 默认为空

    private String headPortrait;//头像地址 默认为空

    private String orgId;//组织机构表主键(关联sys_org表主键)

    private String dbPmss;//数据权限封装

    private String orgName;//组织机构名称（外联组织机构表获取）

    private Integer state;//用户状态 -1 逻辑删除 1为正常、0冻结 默认为1

    private String createDate;//创建时间 默认为null

    private String lastDate;//最后登录时间默认为 null

    private RoleVo roleVo;//用户拥有的角色信息

    private String roleId;//角色主键

    private String roleName;//角色名称

    private List<MenuVo> menuVos;//用户操作菜单

    private String loginIp;//登录IP

    private String idCard;//身份证号码

    private String remark;//备注信息 默认为空
    
    private Integer type; //用户类型
    
    private Integer sort; //排序
    
    private String isMember; //是否是会员   0是会员  1不是会员  2审核状态   3打回
    
    private String birthday; //出生日期
    
    private String birthplace; //出生地
    
    private String nation; //民族
    
    private String wage; //工资
    
    private String politicalStatus; //政治面貌
    
    private String education; //学历
    
    private String position; //工作单位及职务
    
    private String hometown; //籍贯
    
    private String opinion; //审核意见
    
    private String memberFile; //会员资料
    
    private String value;
    
    private String name;
    
    private String sex;
    
    private String orgLevels;
    
	public String getOrgLevels() {
		return orgLevels;
	}

	public void setOrgLevels(String orgLevels) {
		this.orgLevels = orgLevels;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getMemberFile() {
		return memberFile;
	}

	public void setMemberFile(String memberFile) {
		this.memberFile = memberFile;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getOpinion() {
		return opinion;
	}

	public void setOpinion(String opinion) {
		this.opinion = opinion;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public String getBirthplace() {
		return birthplace;
	}

	public void setBirthplace(String birthplace) {
		this.birthplace = birthplace;
	}

	public String getNation() {
		return nation;
	}

	public void setNation(String nation) {
		this.nation = nation;
	}

	public String getWage() {
		return wage;
	}

	public void setWage(String wage) {
		this.wage = wage;
	}

	public String getPoliticalStatus() {
		return politicalStatus;
	}

	public void setPoliticalStatus(String politicalStatus) {
		this.politicalStatus = politicalStatus;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getHometown() {
		return hometown;
	}

	public void setHometown(String hometown) {
		this.hometown = hometown;
	}

	public String getIsMember() {
		return isMember;
	}

	public void setIsMember(String isMember) {
		this.isMember = isMember;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	//以下属性用于查询
    private String startDate;

    private String endDate;

    private String searchName;

    
    public String getSuId() {
        return suId;
    }

    public void setSuId(String suId) {
        this.suId = suId;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getHeadPortrait() {
        return headPortrait;
    }

    public void setHeadPortrait(String headPortrait) {
        this.headPortrait = headPortrait;
    }

    public String getOrgId() {
        return orgId;
    }

    public void setOrgId(String orgId) {
        this.orgId = orgId;
    }

    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(String orgName) {
        this.orgName = orgName;
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

    public String getLastDate() {
        return lastDate;
    }

    public void setLastDate(String lastDate) {
        this.lastDate = lastDate;
    }

    public RoleVo getRoleVo() {
        return roleVo;
    }

    public void setRoleVo(RoleVo roleVo) {
        this.roleVo = roleVo;
    }

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public List<MenuVo> getMenuVos() {
        return menuVos;
    }

    public void setMenuVos(List<MenuVo> menuVos) {
        this.menuVos = menuVos;
    }

    public String getLoginIp() {
        return loginIp;
    }

    public void setLoginIp(String loginIp) {
        this.loginIp = loginIp;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getSearchName() {
        return searchName;
    }

    public void setSearchName(String searchName) {
        this.searchName = searchName;
    }

    public String getDbPmss() {
        return dbPmss;
    }

    public void setDbPmss(String dbPmss) {
        this.dbPmss = dbPmss;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public Integer getIdentity() {
        return identity;
    }

    public void setIdentity(Integer identity) {
        this.identity = identity;
    }

	public Integer getSort() {
		return sort;
	}

	public void setSort(Integer sort) {
		this.sort = sort;
	}
    
}
