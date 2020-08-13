package com.bluebird.module.system.service;

import java.util.List;
import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.framework.base.Page;
import com.bluebird.module.system.model.SysUser;

/**
 * 系统用户管理service
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-9 11:24
 */
public interface SysUserService extends BaseService {

    SysUser getLastDate(String suId)throws Exception;

    /**
     * 根据登录名称获取系统用户登录信息
     *
     * @param loginName 登录名称
     * @return SysUser
     * @throws Exception
     */
    SysUser getSysUserByLoginName(String loginName) throws Exception;

    /**
     * 根据用户拥有的组织机构获取所有归属用户
     *
     * @param page         分页
     * @param searchParams 参数
     * @return Page
     * @throws Exception
     */
    Page getUserListByOrgIds(Page page, Map<String,Object> searchParams) throws Exception;
    
    Page getMemberListByOrgIds(Page page, Map<String,Object> searchParams) throws Exception;
    
    Page viewNoComUserInfoList(Page page, Map<String,Object> searchParams) throws Exception;

    /**
     * 添加用户
     *
     * @param sysUser 用户信息
     * @return boolean
     * @throws Exception
     */
    boolean saveSysUser(SysUser sysUser) throws Exception;

    /**
     * 修改用户
     *
     * @param sysUser 用户信息
     * @return boolean
     * @throws Exception
     */
    boolean updateSysUser(SysUser sysUser) throws Exception;

    /**
     * 删除用户
     *
     * @param uId 用户ID
     * @return boolean
     * @throws Exception
     */
    boolean delUserBySuId(String uId) throws Exception;

    /**
     * 重置用户密码
     *
     * @param uId       用户ID
     * @param loginName 登录名称
     * @return boolean
     * @throws Exception
     */
    boolean updatePwd(String uId, String loginName) throws Exception;

    /**
     * 用户修改密码
     *
     * @param sysUser   用户信息
     * @param newPwd 新密码
     * @return boolean
     * @throws Exception
     */
    boolean updatePwd(SysUser sysUser, String newPwd) throws Exception;
    /**
     * 查询所有用户的名称
     * @param paramMap
     * @return
     * @throws Exception
     */
    List<SysUser> getListByCondition(Map<String, Object> paramMap) throws Exception;
    
    /**
     * 根据用户名和密码查询用户
     */
    Integer getUserCount(Map<String, Object> paramMap) throws Exception;
    
    Integer getCurrTotalNum() throws Exception;
    
    List<SysUser> memberStatisticsByOrg(Integer orgLevels) throws Exception;
}
