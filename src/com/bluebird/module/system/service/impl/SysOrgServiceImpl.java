package com.bluebird.module.system.service.impl;

import com.bluebird.components.common.StringUtil;
import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.exception.SystemException;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.system.model.SysOrg;
import com.bluebird.module.system.service.SysOrgService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 组织机构管理service接口实现类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-10 11:20
 * @extends BaseServiceImpl
 * @implements SysOrgService
 */
@Service
public class SysOrgServiceImpl extends BaseServiceImpl implements SysOrgService {

    /**
     * 添加组织机构
     *
     * @param sysOrg 机构对象
     * @return boolean
     * @throws Exception
     */
    @Override
    @LogAspect(desc = "添加组织机构")
    public boolean saveOrg(SysOrg sysOrg) throws Exception {
        SysOrg org = hasOrgCodeOrName(sysOrg);
        if (null != org) {
            if (sysOrg.getOrgName().equals(org.getOrgName())) {
                throw new SystemException("机构名称重复");
            } else {
                throw new SystemException("机构编码重复");
            }
        }
       
        sysOrg.setOrgId(SysUtil.GetUUID());
        sysOrg.setCreateDate(TimeHelper.getLocatlTime());
        if (dbManage.insert(sysOrg)) {
            return true;
        }
        throw SystemException.businessException("添加失败");
    }

    /**
     * 修改组织机构
     *
     * @param sysOrg 机构对象
     * @return boolean
     * @throws Exception
     */
    @Override
    @LogAspect(desc = "修改组织机构")
    public boolean updateOrg(SysOrg sysOrg) throws Exception {
        SysOrg org = hasOrgCodeOrName(sysOrg);
        if (null != org) {
            if (sysOrg.getOrgName().equals(org.getOrgName())) {
                throw SystemException.businessException("机构名称重复");
            } else {
                throw SystemException.businessException("机构编码重复");
            }
        }
        if (dbManage.update(sysOrg)) {
            return true;
        }
        throw SystemException.businessException("修改失败");
    }

    /**
     * 根据主键删除机构
     *
     * @param orgId 机构主键
     */
    @LogAspect(desc = "删除组织机构")
    @Override
    public boolean delOrgByOrgId(String orgId) throws Exception {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("pId", orgId);
        if (isExist(paramMap)) {
            throw SystemException.businessException("该机构还有下级机构,无法删除");
        }
        if (dbManage.delete(orgId)) {
            return true;
        }
        throw SystemException.businessException("删除失败");
    }

    /**
     * 根据用户主键与归属部门获取所有子部门（组成查询数据串）
     *
     * @param orgId 归属部门ID
     * @return String
     * @throws Exception
     */
    @Override
    public String getUserDbPmss(String orgId) throws Exception {
        String dbPmss;
        List<String> orgIdList = new ArrayList<>();
        getOrgIdList(orgIdList, orgId);
        if (orgIdList.size() > 0) {
            dbPmss = " in ( '" + orgId + "'";
            for (String orgIdStr : orgIdList) {
                dbPmss += ",'" + orgIdStr + "'";
            }
            dbPmss += ") ";
        } else {
            dbPmss = " ='" + orgId + "' ";
        }
        return dbPmss;
    }

    /**
     * 获取组织机构
     *
     * @param orgId 归属机构ID
     *              @param isAll 是否全部
     * @return List<SysOrg>
     * @throws Exception
     */
    @Override
    public List<SysOrg> getAllChildOrg(String orgId,boolean isAll) throws Exception {
        List<SysOrg> orgList = new ArrayList<>();
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("orgId", orgId);
        try {
            SysOrg org = getByCondition(paramMap);
            if (null != org) {
                orgList.add(org);
                getAllChildOrg(orgList, org.getOrgId(),isAll);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return orgList;
    }
    
    /**
     * 获取组织机构树
     */
    @Override
    public List<SysOrg> getZtreeData(String orgId) throws Exception{
    	 List<SysOrg> orgList = new ArrayList<>();
         try {
             SysOrg org = getById(orgId);
             if (null != org) {
            	 SysOrg pOrg = new SysOrg();
                 pOrg.setOrgId(org.getOrgId());
                 pOrg.setName(org.getOrgName());
                 pOrg.setpId(org.getpId());
                 orgList.add(pOrg);
                 getZtreeData(orgList, org.getOrgId());
             }
         } catch (Exception e) {
             e.printStackTrace();
         }
         return orgList;
    }

	private void getZtreeData(List<SysOrg> resultList, String pId) throws Exception {
    	Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("pId", pId);
       
        List<SysOrg> orgList = dbManage.selectListByCondition(paramMap);
        if (orgList != null && !orgList.isEmpty()) {
            for (SysOrg sysOrg : orgList) {
                resultList.add(sysOrg);
                getZtreeData(resultList, sysOrg.getOrgId());
            }
        }
	}

	/***
     * 递归查找部门的所有子部门
     *
     * @param resultList 机构集合
     * @param pId        父级机构主键
     * @throws Exception
     */
    private void getAllChildOrg(List<SysOrg> resultList, String pId,boolean isAll) throws Exception {
        // 找出当前部门的子部门\
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("pId", pId);
        if(isAll){
            paramMap.put("state",1);
        }
        List<SysOrg> orgList = dbManage.selectListByCondition(paramMap);
        if (orgList != null && !orgList.isEmpty()) {
            for (SysOrg sysOrg : orgList) {
                resultList.add(sysOrg);
                getAllChildOrg(resultList, sysOrg.getOrgId(), isAll);
            }
        }
    }


    /***
     * 递归查找部门的所有子部门
     *
     * @param orgIdList 部门ID集合
     * @param pId       父级ID
     * @throws Exception
     */
    private void getOrgIdList(List<String> orgIdList, String pId) throws Exception {
        // 找出当前部门的子部门\
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("pId", pId);
        List<String> orgList = dbManage.selectListByCondition(paramMap);
        if (null != orgList && orgList.size() > 0) {
            for (String orgIdStr : orgList) {
                orgIdList.add(orgIdStr);
                getOrgIdList(orgIdList, orgIdStr);
            }
        }
    }

    /**
     * 根据名称、编码、主键查询对象
     *
     * @param sysOrg 机构对象
     * @return SysOrg
     * @throws Exception
     */
    private SysOrg hasOrgCodeOrName(SysOrg sysOrg) throws Exception {
        return dbManage.selectByCondition(sysOrg);
    }
    
    @Override
    public SysOrg getOrgAndPid(String orgId) throws Exception{
    	SysOrg sysOrg = new SysOrg();
    	sysOrg.setOrgId(orgId);
    	return dbManage.selectByCondition(sysOrg);
    }
}
