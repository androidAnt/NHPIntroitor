package com.bluebird.module.system.service.impl;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.exception.SystemException;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.system.model.SysRole;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysResourceService;
import com.bluebird.module.system.service.SysRoleService;
import com.bluebird.module.system.vo.RoleResVo;
import com.bluebird.module.system.vo.RoleVo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 系统角色管理service接口实现类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-9 15:16
 * @extends BaseServiceImpl
 * @implements
 */
@Service(value = "sysRoleService")
public class SysRoleServiceImpl extends BaseServiceImpl implements SysRoleService {

    @Resource
    private SysResourceService sysResourceService;

    /**
     * 根据角色主键获取角色信息与角色拥有的权限代码集合
     *
     * @param suId 用户主键
     * @return SysRole
     * @throws Exception
     */
    @Override
    public RoleVo getRoleBySuId(String suId) throws Exception {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("suId", suId);
        RoleVo roleVo = dbManage.selectByCondition(paramMap);
        if (null != roleVo) {
            roleVo.setPmss(sysResourceService.getRolePmssByRoleId(roleVo.getRoleId()));
        }
        return roleVo;
    }

    /**
     * 获取所有的角色
     *
     * @param user  用户信息
     * @param isAll 是否查看全部
     * @return List<SysRole>
     * @throws Exception
     */
    @Override
    public List<SysRole> getAllRole(SysUser user, boolean isAll) throws Exception {
        Map<String, Object> paramMap = new HashMap<>();
        if (null != user.getRoleVo()) {
            if (!user.getRoleVo().getRoleCode().equals(SystemConstant.SYS_SUPER_ADMINCODE)) {//超级管理员编码不能修改
                paramMap.put("roleId", user.getRoleId());
                paramMap.put("SYS_SUPER_ADMINCODE", SystemConstant.SYS_SUPER_ADMINCODE);
                paramMap.put("createSuId", user.getSuId());
            }
            if (isAll) {
                paramMap.put("state", "1");
            }
            return dbManage.selectListByCondition(paramMap);
        }
        return null;
    }

    /**
     * 添加角色
     *
     * @param role 角色
     * @return boolean
     * @throws Exception
     */
    @LogAspect(desc = "添加角色")
    @Override
    public boolean saveRole(SysRole role) throws Exception {
        SysRole sysRole = hasRoleCodeOrName(role);
        if (null != sysRole) {
            if (role.getRoleName().equals(sysRole.getRoleName())) {
                throw SystemException.businessException("角色名重复");
            }
            throw SystemException.businessException("角色编码重复");
        }
        role.setRoleId(SysUtil.GetUUID());
        role.setCreateDate(TimeHelper.getLocatlTime());
        if (dbManage.insert(role)) {
            return true;
        }
        throw SystemException.businessException("添加失败");
    }

    /**
     * 修改角色
     *
     * @param role 角色
     * @return boolean
     * @throws Exception
     */
    @LogAspect(desc = "修改角色")
    @Override
    public boolean updateRole(SysRole role) throws Exception {
        SysRole sysRole = hasRoleCodeOrName(role);
        if (null != sysRole) {
            if (role.getRoleName().equals(sysRole.getRoleName())) {
                throw SystemException.businessException("角色名重复");
            }
            throw SystemException.businessException("角色编码重复");
        }
        if (dbManage.update(role)) {
            return true;
        }
        throw SystemException.businessException("修改失败");
    }

    /**
     * 根据主键删除角色
     *
     * @param roleId 角色ID
     * @return boolean
     * @throws Exception
     */
    @LogAspect(desc = "删除角色")
    @Override
    public boolean delRoleByRoleId(String roleId) throws Exception {
        if (isRoleUse(roleId)) {
            throw SystemException.businessException("该角色已分配,无法删除");
        }
        if (dbManage.delete(roleId)) {
            return true;
        }
        throw SystemException.businessException("删除失败");
    }

    /**
     * 角色权限分配(添加角色资源表数据)
     *
     * @param roleId 角色ID
     * @param resIds 资源数组
     * @return boolean
     * @throws Exception
     */
    @LogAspect(desc = "角色权限分配")
    @Override
    public boolean saveRoleRes(String roleId, String[] resIds) throws Exception {
        if (null != resIds && resIds.length > 0) {
            RoleResVo rs;
            List<RoleResVo> list = new ArrayList<>();
            for (String resId : resIds) {
                rs = new RoleResVo();
                rs.setRsId(SysUtil.GetUUID());
                rs.setRoleId(roleId);
                rs.setResId(resId);
                list.add(rs);
            }
            delRoleResByRoleId(roleId);
            if (dbManage.insert(list)) {
                return true;
            }
            throw SystemException.businessException("授权失败");
        }
        throw SystemException.businessException("授权失败,请选择资源");
    }

    /**
     * 根据主键删除角色授权资源
     *
     * @param roleId 角色ID
     * @return boolean
     * @throws Exception
     */
    @LogAspect(desc = "取消角色授权")
    @Override
    public boolean delRoleAuthorize(String roleId) throws Exception{
        if (delRoleResByRoleId(roleId)) {
            return true;
        }
        throw SystemException.businessException("取消授权失败");
    }

    /**
     * 根据角色主键删除角色资源关联表数据
     *
     * @param roleId 角色主键
     * @return boolean
     * @throws Exception
     */
    private boolean delRoleResByRoleId(String roleId) throws Exception {
        return dbManage.delete(roleId);
    }

    /**
     * 删除角色时判断是否有用户使用
     *
     * @param roleId 角色ID
     * @return boolean
     * @throws Exception
     */
    private boolean isRoleUse(String roleId) throws Exception {
        return dbManage.selectByCondition(roleId) != null;
    }

    /**
     * 判断是否有该编码或名称
     *
     * @param role 角色信息
     * @return String
     * @throws Exception
     */
    private SysRole hasRoleCodeOrName(SysRole role) throws Exception {
        return dbManage.selectByCondition(role);
    }

}
