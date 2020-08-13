package com.bluebird.module.system.service;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.system.model.SysResource;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.vo.MenuVo;
import com.bluebird.module.system.vo.ModuleVo;
import com.bluebird.module.system.vo.ZTreeVo;

import java.util.List;

/**
 * 系统资源管理service接口
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-9 15:47
 * @extends BaseService
 */
public interface SysResourceService extends BaseService {

    /**
     * 根据角色主键获取权限编码集和集合
     *
     * @param roleId 角色主键
     * @return List<String>
     * @throws Exception
     */
    List<String> getRolePmssByRoleId(String roleId) throws Exception;

    /**
     * 根据角色主键获取角色拥有的模块集合
     *
     * @param roleId 角色主键
     * @return List<SysResource>
     * @throws Exception
     */
    List<ModuleVo> getRoleModules(String roleId, String moduleType) throws Exception;

    /**
     * 根据指定模块主键与角色主键获取对应的用户菜单信息
     *
     * @param modelId 模块主键
     * @param roleId  角色主键
     * @return List<MenuVo>
     * @throws Exception
     */
    List<MenuVo> getUserMenu(String modelId, String roleId) throws Exception;

    /**
     * 根据上级ID获取子资源
     *
     * @param pId 上級ID
     * @return List<SysResource>
     * @throws Exception
     */
    List<SysResource> getResByPId(String pId) throws Exception;

    /**
     * 添加资源
     *
     * @param res 资源
     * @return SysResource
     * @throws Exception
     */
    SysResource saveRes(SysResource res) throws Exception;

    /**
     * 修改资源信息
     *
     * @param res 资源信息
     * @return boolean
     * @throws Exception
     */
    boolean updateRes(SysResource res) throws Exception;

    /**
     * 根据主键删除资源
     *
     * @param resId 资源主键
     * @return boolean
     * @throws Exception
     */
    boolean delResByResId(String resId) throws Exception;

    /**
     * 获取所有可用的资源并关联角色资源表(用于角色授权)
     *
     * @param user   用户
     * @param roleId 角色主键
     * @return List<ZTreeVo>
     * @throws Exception
     */
    List<ZTreeVo> getAllRes(SysUser user, String roleId) throws Exception;
}
