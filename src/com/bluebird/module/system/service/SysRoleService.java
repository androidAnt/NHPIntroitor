package com.bluebird.module.system.service;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.system.model.SysRole;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.vo.RoleVo;

import java.util.List;

/**
 * 角色管理service接口
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-9 15:16
 * @extends BaseService
 */
public interface SysRoleService extends BaseService {

    /**
     * 根据用户主键获取角色信息
     *
     * @param uId 用户主键
     * @return SysRole
     * @throws Exception
     */
    RoleVo getRoleBySuId(String uId) throws Exception;

    /**
     * 获取所有的角色
     *
     * @param user  用户
     * @param isAll 是否全部
     * @return List<SysRole>
     * @throws Exception
     */
    List<SysRole> getAllRole(SysUser user, boolean isAll) throws Exception;

    /**
     * 添加角色
     *
     * @param role 角色
     * @return boolean
     * @throws Exception
     */
    boolean saveRole(SysRole role) throws Exception;

    /**
     * 修改角色
     *
     * @param role 角色
     * @return boolean
     * @throws Exception
     */
    boolean updateRole(SysRole role) throws Exception;

    /**
     * 根据主键删除角色
     *
     * @param roleId 角色ID
     * @return boolean
     * @throws Exception
     */
    boolean delRoleByRoleId(String roleId) throws Exception;

    /**
     * 角色权限分配(添加角色资源表数据)
     *
     * @param roleId 角色ID
     * @param resIds 资源数组
     * @return boolean
     * @throws Exception
     */
    boolean saveRoleRes(String roleId, String[] resIds) throws Exception;

    /**
     * 根据主键删除角色授权资源
     *
     * @param roleId 角色ID
     * @return boolean
     * @throws Exception
     */
    boolean delRoleAuthorize(String roleId) throws Exception;

}
