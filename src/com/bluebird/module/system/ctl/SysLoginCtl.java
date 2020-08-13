package com.bluebird.module.system.ctl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.model.SysLoginLog;
import com.bluebird.module.system.model.SysOrg;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysLoginLogService;
import com.bluebird.module.system.service.SysOrgService;
import com.bluebird.module.system.service.SysResourceService;
import com.bluebird.module.system.service.SysRoleService;
import com.bluebird.module.system.service.SysUserService;
import com.bluebird.module.system.vo.MenuVo;
import com.bluebird.module.system.vo.ModuleVo;

/**
 * 登录/注销
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-9 16:23
 * @extends BaseCtl
 */
@Controller
@RequestMapping("/system")
public class SysLoginCtl extends BaseCtl {

    @Resource
    private SysRoleService sysRoleService;

    @Resource
    private SysOrgService sysOrgService;

    @Resource
    private SysResourceService sysResourceService;

    @Resource
    private SysLoginLogService sysLoginLogService;

    @Resource
    private SysUserService sysUserService;

    @RequestMapping(value = "index", method = RequestMethod.GET)
    public String toLogin(){
        return "/index";
    }

    /**
     * 用户登录验证 
     *
     * @param loginName 登录账号
     * @param password  登录密码
     * @param request   request
     * @return Map（json）
     */
    @ResponseBody
    @RequestMapping(value = "login", method = RequestMethod.POST)
    public Map<String, Object> login(String loginName, String password, HttpServletRequest request) {
        Map<String, Object> reslutMap = new HashMap<>();
        reslutMap.put("state", SystemConstant.RETURN_STATUS_FAIL);
        reslutMap.put("msg", "用户名或密码有误");
        Subject subject = SecurityUtils.getSubject();
        removeSession(SystemConstant.SYS_USER_SESSION_KEY);
        removeSession("moduleList");
        subject.logout();
        UsernamePasswordToken token = new UsernamePasswordToken(loginName, password);
        token.setRememberMe(false);
        Integer type=-1;
        try {
            subject.login(token);
        } catch (UnknownAccountException uae) {
            logger.error("UnknownAccountException:" + loginName);
        } catch (IncorrectCredentialsException ice) {
            logger.error("IncorrectCredentialsException:" + loginName);
        } catch (LockedAccountException lae) {
            type=2;
            reslutMap.put("msg", "用户暂被冻结:" + loginName);
        } catch (AuthenticationException ae) {
            logger.error("AuthenticationException:" + loginName);
        }
        if (subject.isAuthenticated()) {//是否验证通过
            SysUser sysUser = (SysUser) subject.getPrincipal();
            sysUser.setPassword(null);
            try {
            	 //根据组织机构id获取组织机构信息
                if(StringUtils.isNotEmpty(sysUser.getOrgId())){
                	 SysOrg sysOrg = sysOrgService.getById(sysUser.getOrgId());
    		            if(sysOrg!=null){
    		            	sysUser.setOrgName(sysOrg.getOrgName());
    		            }
                }
                List<ModuleVo> moduleList = sysResourceService.getRoleModules(sysUser.getRoleId(), SystemConstant.MODULE_TYPE_PC);
                if (null != moduleList && moduleList.size() > 0) {//拥有模块
                    setSession(SystemConstant.SYS_USER_SESSION_KEY, sysUser);
                    reslutMap.clear();
                    reslutMap.put("state", SystemConstant.RETURN_STATUS_SUCCESS);
                    setSession("moduleList", moduleList);
                    saveLoginLog(request, 1, loginName,"成功登录系统");
                   
                    SysUser user=sysUserService.getLastDate(sysUser.getSuId());
                    sysUser.setSessionId(subject.getSession().getId().toString());//存储登录时候的sessionid
                    sysUser.setLastDate(user.getLastDate());
                    sysUser.setLoginIp(user.getLoginIp());
                    setSession(SystemConstant.SYS_USER_SESSION_KEY, sysUser);
                   
                } else {//未分配模块
                    subject.logout();
                    saveLoginLog(request, 0, loginName,"登录用户未分配权限");
                    reslutMap.put("msg", "该账号还未分配权限,请与管理员联系");
                }
            } catch (Exception e) {
                reslutMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
                logger.error("系统用户登录获取用户相关信息异常：" + e.getMessage());
            }
        }else{
            if(type==-1){
                saveLoginLog(request, -1, loginName,"尝试登录系统失败");
            }else{
                saveLoginLog(request, 0, loginName,"登录用户被冻结");
            }
        }
        
        // name(request);
        return reslutMap;
    }

    /**
     * 登录验证成功后加载基本数据资源
     */
    @ResponseBody
    @RequestMapping(value = "loadRes", method = RequestMethod.POST)
    public Map<String, Object> loadRes() {
        Map<String, Object> resultMap = new HashMap<>();
        try {
            resultMap.put("state", SystemConstant.RETURN_STATUS_SUCCESS);
            SysUser sysUser = getSysUser();
            sysUser.setRoleVo(sysRoleService.getRoleBySuId(sysUser.getSuId()));
            sysUser.setDbPmss(sysOrgService.getUserDbPmss(sysUser.getOrgId()));
            setSession(SystemConstant.SYS_USER_SESSION_KEY, sysUser);
            List<ModuleVo> moduleList = getSessionObj("moduleList");
            if (moduleList.size() == 1) {//只有一个模块的时候直接跳转到模块 并将菜单存储到session中
                List<MenuVo> menuList = sysResourceService.getUserMenu(moduleList.get(0).getResId(), getSysUser().getRoleId());
                sysUser.setMenuVos(menuList);
                setSession(SystemConstant.SYS_USER_SESSION_KEY, sysUser);
                resultMap.put("url", "/" + moduleList.get(0).getResCode() + "/");
                removeSession("moduleList");
            } else {
                resultMap.put("url", "/system/module/choose");
            }
        } catch (Exception e) {
            resultMap.put("state", SystemConstant.RETURN_STATUS_FAIL);
            resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
            logger.error("登录验证成功后加载基本数据资源异常：" + e.getMessage());
        }
        return resultMap;
    }

    /**
     * 退出登录操作
     *
     * @return String
     */
    @RequestMapping(value = "outLogin")
    public String loginOut() {
        Subject subject = SecurityUtils.getSubject();
        subject.logout();
        return "redirect:/system/index";
    }

    /**
     * 踢出登录
     *
     * @return String
     * */
    @RequestMapping(value = "kicked")
    public String  kicked(){
        setSession("msg","你的账户已在其他地方登录");
        return "redirect:/system/index";
    }

    /**
     * 记录登录日志
     *
     * @param request 请求
     * @param type 类型
     * @param loginName 登录名称
     */
    private void saveLoginLog(HttpServletRequest request, int type, String loginName,String msg) {
        try {
            SysLoginLog loginLog = new SysLoginLog();
            loginLog.setLogId(SysUtil.GetUUID());
            loginLog.setSuccess(type);
            loginLog.setIp(getIpAddr(request));
            loginLog.setLoginName(loginName);
            loginLog.setContent(msg);
            loginLog.setLoginDate(TimeHelper.getLocatlTime());
            if (type == 1) {
                loginLog.setSuId(getSysUser().getSuId());
            }else{
                loginLog.setSuId("");
                loginLog.setSuccess(0);
            }
            sysLoginLogService.save(loginLog);
        } catch (Exception e) {
            logger.error("记录登录日志错误：" + e.getMessage());
        }
    }
}
