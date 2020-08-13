package com.bluebird.framework.shiro;

import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysRoleService;
import com.bluebird.module.system.service.SysUserService;
import com.bluebird.module.system.vo.RoleVo;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import java.util.HashSet;
import java.util.Set;

/**
 * 自定义的指定Shiro验证用户登录的类.验证用户登录与权限
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2015-8-24 13:29
 * @extends AuthorizingRealm
 */
@Controller
public class SystemRealm extends AuthorizingRealm {

    protected Log logger = LogFactory.getLog(SystemRealm.class);

    @Resource
    private SysUserService sysUserService;
    @Resource
    private SysRoleService sysRoleService;

    /**
     * 验证当前登录的Subject
     *
     * @param authcToken 认证令牌
     * @return AuthenticationInfo
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException {
        UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
        String username = token.getUsername();
        if (!StringUtils.isEmpty(username)) {// 判断用户名为空
            SysUser sysUser = null;
            try {
                sysUser = sysUserService.getSysUserByLoginName(username);
            } catch (Exception e) {
                logger.error("登录查询用户信息异常："+e.getMessage());
            }
            if (null != sysUser) {
                if (sysUser.getState() ==1) {
                    return new SimpleAuthenticationInfo(sysUser, sysUser.getPassword(), this.getName());
                } else {
                    throw new LockedAccountException();
                }
            }
        }
        throw new UnknownAccountException();
    }

    /**
     * 验证当前登录的Subject授予角色和权限
     *
     * @param principals 权限集合
     * @return AuthorizationInfo 认证信息
     * @throws UnknownAccountException
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        Subject currentUser = SecurityUtils.getSubject();
        if (null != currentUser) {
            Session session = currentUser.getSession();
            if (null != session) {
                SysUser sysUser = (SysUser) session.getAttribute(SystemConstant.SYS_USER_SESSION_KEY);
                if (null != sysUser) {
                    SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
                    RoleVo roleVo = sysUser.getRoleVo();
                    try {
                        if (null == roleVo) {
                            String suId = sysUser.getSuId();
                            roleVo = sysRoleService.getRoleBySuId(suId);
                            sysUser.setRoleVo(roleVo);
                            session.setAttribute(SystemConstant.SYS_USER_SESSION_KEY, sysUser);
                        }
                    } catch (Exception e) {
                        logger.error("获取用户角色异常：" + e.getMessage());
                    }
                    if (null != roleVo) {
                        Set<String> roleSet = new HashSet<>();
                        roleSet.add(roleVo.getRoleCode().trim());
                        if (null != roleVo.getPmss()) {
                            for (String str : roleVo.getPmss()) {
                                info.addStringPermission(str.trim());
                            }
                        }
                        info.setRoles(roleSet);
                    }
                    return info;
                }
            }
        }
        throw new UnknownAccountException();
    }
}
