package com.bluebird.module.system.ctl;

import com.alibaba.fastjson.JSON;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.model.SysRole;
import com.bluebird.module.system.service.SysResourceService;
import com.bluebird.module.system.service.SysRoleService;
import com.bluebird.module.system.vo.ZTreeVo;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 角色管理Ctl
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-16 11:16
 * @extends BaseCtl
 */
@Controller
@RequestMapping("/system/role")
public class SysRoleCtl extends BaseCtl {

    @Resource
    private SysRoleService sysRoleService;

    @Resource
    private SysResourceService sysResourceService;

    /**
     * 查询角色列表跳转到角色管理首页
     *
     * @param model model
     * @return String
     */
    @RequiresPermissions("system_role")
    @RequestMapping(value = "")
    public String index(ModelMap model) {
        try {
            model.put("list", sysRoleService.getAllRole(getSysUser(),false));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
        }
        return "/system/role/index";
    }

    /**
     * 添加角色
     *
     * @param role 角色
     * @param redirectAttributes 临时存储
     * @return String
     */
    @RequiresPermissions("system_role_add")
    @RequestMapping(value = "add")
    public String saveRole(SysRole role, RedirectAttributes redirectAttributes) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            role.setCreateSuId(getSysUser().getSuId());
            sysRoleService.saveRole(role);
            resultMap.put("status",SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg","添加成功");
        } catch (Exception e) {
            logger.error("添加角色异常："+e.getMessage());
            if(e.getMessage().length()<20){
                resultMap.put("msg", e.getMessage());
            }
        }
        redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(resultMap));
        return "redirect:/system/role";
    }

    /**
     * 修改角色
     *
     * @param role 角色
     * @param redirectAttributes 临时存储
     * @return String
     */
    @RequiresPermissions("system_role_update")
    @RequestMapping(value = "update")
    public String updateRole(SysRole role, RedirectAttributes redirectAttributes) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysRoleService.updateRole(role);
            resultMap.put("status",SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg","修改成功");
        } catch (Exception e) {
            logger.error("修改角色异常："+e.getMessage());
            if(e.getMessage().length()<20){
                resultMap.put("msg", e.getMessage());
            }
        }
        redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(resultMap));
        return "redirect:/system/role";
    }

    /**
     * 根据主键删除角色
     *
     * @param roleId 角色ID
     * @return String
     */
    @RequiresPermissions("system_role_del")
    @ResponseBody
    @RequestMapping(value = "del")
    public Map<String, Object> delRole(String roleId) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysRoleService.delRoleByRoleId(roleId);
            resultMap.put("status",SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg","删除成功");
        } catch (Exception e) {
            logger.error("删除角色异常："+e.getMessage());
            if(e.getMessage().length()<20){
                resultMap.put("msg", e.getMessage());
            }
        }
        return resultMap;
    }

    /**
     * 获取所有可用资源
     *
     * @param roleId 角色ID
     * @return Map
     */
    @RequiresPermissions("system_role")
    @ResponseBody
    @RequestMapping(value = "getResTree")
    public Map<String, Object> getResTree(String roleId) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            List<ZTreeVo> list=sysResourceService.getAllRes(getSysUser(),roleId);
            if(null!=list&&list.size()>0){
                resultMap.put("data",list);
                resultMap.put("status",SystemConstant.RETURN_STATUS_SUCCESS);
            }else{
                resultMap.put("msg", "暂未分配资源,请与管理员联系");
            }
        } catch (Exception e) {
            logger.error("获取资源信息异常："+e.getMessage());
        }
        return resultMap;
    }

    /**
     * 对角色分配权限资源
     *
     * @param roleId 角色ID
     * @param resIds 资源IDs
     * @return Map
     */
    @RequiresPermissions("system_role_authorize")
    @ResponseBody
    @RequestMapping(value = "roleAuthorize")
    public Map<String, Object> roleAuthorize(String roleId, String resIds) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysRoleService.saveRoleRes(roleId,resIds.split(","));
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "授权成功");
        } catch (Exception e) {
            logger.error("分配权限异常："+e.getMessage());
            if(e.getMessage().length()<20){
                resultMap.put("msg", e.getMessage());
            }
        }
        return resultMap;
    }

    /**
     * 删除角色分配的权限资源
     *
     * @param roleId 角色ID
     * @return map
     */
    @RequiresPermissions("system_role_authorize")
    @ResponseBody
    @RequestMapping(value = "delRoleAuthorize")
    public Map<String, Object> delRoleAuthorize(String roleId) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysRoleService.delRoleAuthorize(roleId);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "取消授权成功");
        } catch (Exception e) {
            logger.error("删除角色分配的权限资源异常："+e.getMessage());
            if(e.getMessage().length()<20){
                resultMap.put("msg", e.getMessage());
            }
        }
        return resultMap;
    }
}
