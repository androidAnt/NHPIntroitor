package com.bluebird.module.system.ctl;

import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysUserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * 个人信息维护Ctl
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-17 15:47
 * @extends BaseCtl
 */
@RestController
@RequestMapping("/system/person")
public class SysPersonCtl extends BaseCtl {

    @Resource
    private SysUserService sysUserService;

    /**
     * 跳转到个人信息维护页面
     *
     * @return map
     */
    @RequestMapping(value = "userinfo")
    public Map<String, Object> userInfo() {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        paramMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            paramMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            paramMap.put("data", sysUserService.getById(getSysUser().getSuId()));
        } catch (Exception e) {
            logger.error("查询个人信息异常：" + e.getMessage());
        }
        return paramMap;
    }

    /**
     * 个人信息修改
     *
     * @param sysUser 用户信息
     * @return map
     */
    @RequestMapping(value = "update")
    public Map<String, Object> doUpdate(SysUser sysUser) {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        paramMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysUser.setLoginName(getSysUser().getLoginName());
            sysUser.setSuId(getSysUser().getSuId());
            sysUserService.updateSysUser(sysUser);
            SysUser newuser = getSysUser();
            newuser.setRealName(sysUser.getRealName());
            if (StringUtils.isNotEmpty(sysUser.getHeadPortrait())) {
                newuser.setHeadPortrait(sysUser.getHeadPortrait());
            }
            setSession(SystemConstant.SYS_USER_SESSION_KEY, newuser);
            paramMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            paramMap.put("msg","修改成功");
        } catch (Exception e) {
            logger.error("维护个人信息异常：" + e.getMessage());
            if(e.getMessage().length()<20){
                paramMap.put("msg",e.getMessage());
            }
        }
        return paramMap;
    }

    /**
     * 修改个人密码
     *
     * @param oldPwd 旧密码
     * @param newPwd 新密码
     */
    @RequestMapping(value = "updatepwd")
    public Map<String, Object> doUpdatePwd(String oldPwd, String newPwd) {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        paramMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            SysUser sysUser = getSysUser();
            sysUser.setPassword(oldPwd);
            sysUserService.updatePwd(sysUser,newPwd);
            paramMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            paramMap.put("msg","修改成功");
        } catch (Exception e) {
            if(e.getMessage().length()<20){
                paramMap.put("msg",e.getMessage());
            }
            logger.error("修改个人密码异常：" + e.getMessage());
        }
        return paramMap;
    }
}
