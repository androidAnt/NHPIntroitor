package com.bluebird.module.system.service.impl;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.exception.SystemException;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.system.model.SysResource;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysResourceService;
import com.bluebird.module.system.vo.MenuVo;
import com.bluebird.module.system.vo.ModuleVo;
import com.bluebird.module.system.vo.ZTreeVo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 系统资源管理service接口实现类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-9 15:48
 * @extends BaseServiceImpl
 * @implements SysResourceService
 */
@Service(value = "sysResourceService")
public class SysResourceServiceImpl extends BaseServiceImpl implements SysResourceService {

    /**
     * 根据角色主键获取权限编码集和集合
     *
     * @param roleId 角色主键
     * @return List<RolePmssVo>
     * @throws Exception
     */
    @Override
    public List<String> getRolePmssByRoleId(String roleId) throws Exception {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("roleId", roleId);
        return dbManage.selectListByCondition(paramMap);
    }

    /**
     * 根据角色主键获取角色拥有的模块集合
     *
     * @param roleId     角色主键
     * @param moduleType 模块类型
     * @return List<SysResource>
     * @throws Exception
     */
    @Override
    public List<ModuleVo> getRoleModules(String roleId, String moduleType) throws Exception {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("roleId", roleId);
        paramMap.put("moduleType", moduleType);
        return dbManage.selectListByCondition(paramMap);
    }

    /**
     * 根据指定模块主键与角色主键获取对应的用户菜单信息
     *
     * @param modelId 模块ID
     * @param roleId  角色ID
     * @return List<MenuVo>
     * @throws Exception
     */
    @Override
    public List<MenuVo> getUserMenu(String modelId, String roleId) throws Exception {
        List<MenuVo> menuVos = new ArrayList<>();
        getMenu(menuVos, modelId, roleId);
        return menuVos;
    }

    /**
     * 根据上级ID获取子资源
     *
     * @param pId 上級ID
     * @return List<SysResource>
     * @throws Exception
     */
    @Override
    public List<SysResource> getResByPId(String pId) throws Exception {
        return dbManage.selectListByCondition(pId);
    }

    /**
     * 添加资源
     *
     * @param res 资源信息
     * @return SysResource
     * @throws Exception
     */
    @LogAspect(desc = "添加资源")
    @Override
    public SysResource saveRes(SysResource res) throws Exception {
        SysResource sysResource = hasNameOrCode(res);
        if (null != sysResource) {
            if (sysResource.getResName().equals(res.getResName())) {
                throw SystemException.businessException("资源名称重复");
            }
            throw SystemException.businessException("资源编码重复");
        }
        res.setResId(SysUtil.GetUUID());
        res.setCreateDate(TimeHelper.getLocatlTime());
        if (res.getType() != 0) {
            res.setModuleType("");
        }
        if (dbManage.insert(res)) {
            return res;
        }
        throw SystemException.businessException("资源添加失败");
    }

    /**
     * 修改资源信息
     *
     * @param res 资源信息
     * @return boolean
     * @throws Exception
     */
    @LogAspect(desc = "修改资源")
    @Override
    public boolean updateRes(SysResource res) throws Exception {
        SysResource sysResource = hasNameOrCode(res);
        if (null != sysResource) {
            if (sysResource.getResName().equals(res.getResName())) {
                throw SystemException.businessException("资源名称重复");
            }
            throw SystemException.businessException("资源编码重复");
        }
        if (dbManage.update(res)) {
            return true;
        }
        throw SystemException.businessException("修改资源失败");
    }

    /**
     * 根据主键删除资源
     *
     * @param resId 资源ID
     * @return boolean
     * @throws Exception
     */
    @LogAspect(desc = "删除资源")
    @Override
    public boolean delResByResId(String resId) throws Exception {
        if (isExist(resId)) {
            throw SystemException.businessException("有子节点,无法删除");
        }
        if (hasResRole(resId)) {
            throw SystemException.businessException("已被赋予角色,无法删除");
        }
        if (dbManage.delete(resId)) {
            return true;
        }
        throw SystemException.businessException("删除资源失败");
    }

    /**
     * 获取所有可用的资源并关联角色资源表(用于角色授权)
     *
     * @param user   用户
     * @param roleId 角色主键
     * @return List<ZTreeVo>
     * @throws Exception
     */
    public List<ZTreeVo> getAllRes(SysUser user, String roleId) throws Exception {
        if(user.getRoleVo()!=null){
            return getAdminRes(roleId);
        }
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("myRoleId", user.getRoleVo().getRoleId());
        paramMap.put("roleId", roleId);
        return dbManage.selectListByCondition(paramMap);
    }

    /**
     * 获取所有可用的资源并关联角色资源表(用于角色授权)
     *
     * @param roleId 角色ID
     * @return List<ZTreeVo>
     * @throws Exception
     */
    private List<ZTreeVo> getAdminRes(String roleId) throws Exception {
        return dbManage.selectListByCondition(roleId);
    }

    /**
     * 判断是否存在对象 存在返回对象
     *
     * @param sysResource 资源对象
     * @return SysResource
     * @throws Exception
     */
    private SysResource hasNameOrCode(SysResource sysResource) throws Exception {
        return dbManage.selectByCondition(sysResource);
    }

    /**
     * 判断是否存在子节点
     *
     * @param pId 资源ID
     * @return boolean
     * @throws Exception
     */
    private boolean isExist(String pId) throws Exception {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("pId", pId);
        return dbManage.isExist(paramMap);
    }

    /**
     * 删除前判断是否已被赋予角色
     *
     * @param resId 资源ID
     * @return boolean
     * @throws Exception
     */
    private boolean hasResRole(String resId) throws Exception {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("resId", resId);
        return dbManage.isExist(paramMap);
    }

    /***
     * 递归查找模块下的所有子菜单
     *
     * @param menuList 菜单集合
     * @param pId      父级ID
     * @param roleId   角色ID
     * @throws Exception
     */
    private void getMenu(List<MenuVo> menuList, String pId, String roleId) throws Exception {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("pId", pId);
        paramMap.put("roleId", roleId);
        List<MenuVo> menuVos = dbManage.selectListByCondition(paramMap);
        if (null != menuVos && menuVos.size() > 0) {
            for (MenuVo menuVo : menuVos) {
                menuList.add(menuVo);
                if (menuVo.getType() != 2) {//只查找到二级菜单
                    getMenu(menuList, menuVo.getMenuId(), roleId);
                }
            }
        }
    }
}
