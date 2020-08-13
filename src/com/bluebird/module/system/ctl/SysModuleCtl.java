package com.bluebird.module.system.ctl;

import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysResourceService;
import com.bluebird.module.system.vo.MenuVo;
import com.bluebird.module.system.vo.ModuleVo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import java.util.List;

/**
 * 系统模块管理Ctl
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-10 14:53
 * @extends BaseCtl
 */
@Controller
@RequestMapping("/system/module")
public class SysModuleCtl extends BaseCtl {

    @Resource
    private SysResourceService sysResourceService;

    @RequestMapping(value = "choose")
    public String choose(ModelMap model) {
        List<ModuleVo> moduleList = getSessionObj("moduleList");
        model.addAttribute("list", moduleList);
        return "/system/sys_choose";
    }

    /**
     * 根据主键获取资源模块信息
     *
     * @param modelId 模块主键
     * @return String
     */
    @RequestMapping(value = "module/{modelId}/", method = RequestMethod.GET)
    public String toModel(@PathVariable String modelId) {
        try {
            List<MenuVo> menuList = sysResourceService.getUserMenu(modelId, getSysUser().getRoleId());
            SysUser sysUser = getSysUser();
            sysUser.setMenuVos(menuList);
            setSession(SystemConstant.SYS_USER_SESSION_KEY, sysUser);
            return "redirect:/xxx/";
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return "redirect:/system/module/choose";
    }

}
