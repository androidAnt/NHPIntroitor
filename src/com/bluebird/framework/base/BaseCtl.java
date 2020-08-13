package com.bluebird.framework.base;

import java.io.UnsupportedEncodingException;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;

import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.model.SysUser;

/**
 * Ctl基类.
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-9 16:24
 */
public class BaseCtl {

    protected Log logger = LogFactory.getLog(getClass());

    /**
     * 根据key值获取存储在ShiroSession中的对象
     * param Object key key值
     * return Object
     */
    public <T> T getSessionObj(String key) {
        Subject currentUser = SecurityUtils.getSubject();
        if (null != currentUser) {
            Session session = currentUser.getSession();
            if (null != session) {
                return (T) session.getAttribute(key);
            }
        }
        return null;
    }

    /**
     * 获取用户信息
     * return SysUser
     */
    public SysUser getSysUser() {
        Subject currentUser = SecurityUtils.getSubject();
        if (null != currentUser) {
            Session session = currentUser.getSession();
            if (null != session) {
                return (SysUser) session.getAttribute(SystemConstant.SYS_USER_SESSION_KEY);
            }
        }
        return null;
    }

    

    /**
     * 将一些数据放到ShiroSession中,以便于其它地方使用
     * 比如Controller,使用时直接用HttpSession.getAttribute(key)就可以取到
     * param Object key key值
     * param Object value value值
     * return void
     */
    public void setSession(Object key, Object value) {
        Subject currentUser = SecurityUtils.getSubject();
        if (null != currentUser) {
            Session session = currentUser.getSession();
            if (null != session) {
                session.setAttribute(key, value);
            }
        }
    }

    /**
     * 根据存储的key值移除ShiroSession中的对象
     * param Object key key值
     * return void
     */
    public void removeSession(Object key) {
        Subject currentUser = SecurityUtils.getSubject();
        if (null != currentUser) {
            Session session = currentUser.getSession();
            if (null != session) {
                session.removeAttribute(key);
            }
        }
    }

    /**
     * 返回地址的拼接
     *
     * @param backUrl 返回参数
     * @return map
     */
    public Map<String, Object> paramUnits(String backUrl) {
        String[] params = backUrl.split("&");
        Map<String, Object> paramMap = new HashMap<>();
        for (String param : params) {
            if (StringUtils.isNotEmpty(param)) {
                try {
                    if (param.split("=").length > 1) {
                        paramMap.put(param.split("=")[0], java.net.URLDecoder.decode(param.split("=")[1], "utf-8"));
                    }
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
            }
        }
        return paramMap;
    }

    /**
     * see 获取客户端IP地址
     */
    public String getIpAddr(HttpServletRequest request) {
        String ipAddress;
        ipAddress = request.getHeader("x-forwarded-for");
        if (ipAddress == null || ipAddress.length() == 0 || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getHeader("Proxy-Client-IP");
        }
        if (ipAddress == null || ipAddress.length() == 0 || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ipAddress == null || ipAddress.length() == 0 || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getRemoteAddr();
            if (ipAddress.equals("127.0.0.1") || "0:0:0:0:0:0:0:1".equals(ipAddress)) {
                java.net.InetAddress inet = null;
                try {
                    inet = java.net.InetAddress.getLocalHost();
                } catch (UnknownHostException e) {
                    logger.error("IP地址获取失败.", e);
                }
                assert inet != null;
                ipAddress = inet.getHostAddress();
            }
        }
        if (ipAddress != null && ipAddress.length() > 15) {
            if (ipAddress.indexOf(",") > 0) {
                ipAddress = ipAddress.substring(0,ipAddress.indexOf(","));
            }
        }
        return ipAddress;
    }

    /**
     * 获取服务器地址
     *
     * @param request request
     * @return String
     */
    public String getServerPath(HttpServletRequest request) {
    	/*String port = "";
        if (request.getLocalPort() != 80) {
            port = ":" + request.getLocalPort();
        }
        return "http://" + request.getServerName() + port + request.getContextPath();*/
        return SystemConstant.HTTP_SERVERNAME_PATH;
    }

    
}
