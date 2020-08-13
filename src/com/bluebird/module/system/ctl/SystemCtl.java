package com.bluebird.module.system.ctl;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 跳转到系统主页Ctl
 *
 * @author wangwc
 * @version 1.0
 * @Date 2019-8-22
 */
@Controller
@RequestMapping(value = "/system")
public class SystemCtl {

    @RequiresPermissions("system")//shiro权限注解
    @RequestMapping("/")
    public String index(){//系统管理首页
        return "/system/index";
    }
}
