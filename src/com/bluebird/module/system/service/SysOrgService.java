package com.bluebird.module.system.service;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.system.model.SysOrg;

import java.util.List;

/**
 * 组织机构管理service接口
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-10 11:18
 * @extends BaseService
 */
public interface SysOrgService extends BaseService {

    /**
     * 添加组织机构
     *
     * @param sysOrg 机构对象
     * @return boolean
     * @throws Exception
     */
    public boolean saveOrg(SysOrg sysOrg) throws Exception;

    /**
     * 修改组织机构
     *
     * @param sysOrg 机构对象
     * @return boolean
     * @throws Exception
     */
    public boolean updateOrg(SysOrg sysOrg) throws Exception;

    public boolean delOrgByOrgId(String orgId) throws Exception;

    /**
     * 根据用户主键与归属部门获取所有子部门（组成查询数据串）
     *
     * @param orgId 归属部门ID
     * @return String
     * @throws Exception
     */
    String getUserDbPmss(String orgId) throws Exception;

    /**
     * 获取组织机构
     *
     * @param orgId 归属机构ID
     *              @param isAll 是否全部
     * @return List<SysOrg>
     * @throws Exception
     */
    public List<SysOrg> getAllChildOrg(String orgId,boolean isAll) throws Exception;
    
    public List<SysOrg> getZtreeData(String orgId) throws Exception;
    
    public SysOrg getOrgAndPid(String orgId) throws Exception;
    
}
