package com.bluebird.module.system.ctl;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.Servlets;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.model.SysLoginLog;
import com.bluebird.module.system.model.SysOpLog;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysLoginLogService;
import com.bluebird.module.system.service.SysOpLogService;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import java.util.HashMap;
import java.util.Map;

/**
 * 系统登陆日志Ctl
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2015-10-15 9:24
 * @extends BaseCtl
 */
@Controller
@RequestMapping("/system/log")
public class SysLoginLogCtl extends BaseCtl {

    @Autowired
    private SysLoginLogService sysLoginLogService;

    @Resource
    private SysOpLogService sysOpLogService;

    /**
     * 登录日志
     *
     * @param pageNO   当前页 默认为0
     * @param pageSize 每页条数 默认15条
     * @param sort 排序
     * @return String
     */
    @RequiresPermissions("system_loginLog")
    @RequestMapping(value = "login")
    public String loginLog(@RequestParam(value = "pageNO", defaultValue = "0") Integer pageNO,
                           @RequestParam(value = "pageSize", defaultValue = "15") Integer pageSize,
                           @RequestParam(value = "sort", defaultValue = "a.login_date DESC") String sort,
                           ModelMap model, HttpServletRequest request) {
        try {
            Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
            model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));
            
            SysUser sysUser = getSysUser();
            if(!sysUser.getRoleVo().getRoleCode().equals(SystemConstant.SYS_SUPER_ADMINCODE)){
            	searchParams.put("roleId", getSysUser().getRoleId());
            }
            searchParams.put("sort", sort);
            model.put("page", sysLoginLogService.getListByCondition(searchParams, new Page(pageNO, pageSize, 0, sort, null)));
            SysLoginLog loginLog = new SysLoginLog();
            BeanUtils.populate(loginLog, searchParams);
            model.put("loginLog", loginLog);
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            model.put("msg", JSON.toJSONString(map));
            logger.error("查找登录日志异常:" + e.getMessage());
        }
        return "/system/loginLog/index";
    }

    /**
     * 操作日志
     *
     * @param pageNO   当前页 默认为0
     * @param pageSize 每页条数 默认15条
     * @param sort 排序
     */
    @RequiresPermissions("system_operationLog")
    @RequestMapping(value = "operation")
    public String operationLog(@RequestParam(value = "pageNO", defaultValue = "0") Integer pageNO,
                               @RequestParam(value = "pageSize", defaultValue = "15") Integer pageSize,
                               @RequestParam(value = "sort", defaultValue = "a.operate_time DESC") String sort,
                               ModelMap model, HttpServletRequest request) {
        try {
            Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
            // 将搜索条件编码成字符串，用于排序，分页的URL（用户分页get请求
            model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));
            searchParams.put("orgIds", getSysUser().getDbPmss());
            searchParams.put("sort", sort);
            model.put("page", sysOpLogService.getListByCondition(searchParams, new Page(pageNO, pageSize, 0, sort, null)));
            SysOpLog sysOpLog = new SysOpLog();
            BeanUtils.populate(sysOpLog, searchParams);
            model.put("operationLog", sysOpLog);
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            model.put("msg", JSON.toJSONString(map));
            logger.error("查找操作日志异常:"+e.getMessage());
        }
        return "/system/operationLog/index";
    }

    /**
     * 操作日志详情
     *
     * @param opId    主键
     * @param backUrl 返回时用到的地址
     */
    @RequiresPermissions("system_operationLog")
    @RequestMapping(value = "operation/details/{opId}")
    public String operationLogDetails(@PathVariable String opId, String backUrl, ModelMap model) {
        try {
            model.put("operationLog", sysOpLogService.getById(opId));
            model.put("paramMap", paramUnits(backUrl));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            model.put("msg", JSON.toJSONString(map));
            logger.error("查看你异常操作详情异常:"+e.getMessage());
        }
        return "/system/operationLog/details";
    }
}
