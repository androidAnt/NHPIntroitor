package com.bluebird.framework.listener;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.model.SysLoginLog;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysLoginLogService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import java.net.UnknownHostException;
import java.util.Hashtable;

/**
 * Session监听器 完成对Seesion会话资源的实时监控
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-18 11:10
 */
public class SessionListener implements HttpSessionListener {

    private static Log logger = LogFactory.getLog(SessionListener.class);

    // 集合对象，保存session对象的引用
    static Hashtable<String,HttpSession> ht = new Hashtable<>();

    /**
     * 实现HttpSessionListener接口，完成session创建事件控制 说明：此时的Session状态为无效会话，
     * 只有用户成功登录系统后才将此Session写入EAHTTPSESSION表作为有效SESSION来管理
     */
    public void sessionCreated(HttpSessionEvent event) {
        HttpSession session = event.getSession();
        ht.put(session.getId(), session);
        logger.debug("创建了一个Session连接:" + session.getId() + " " + TimeHelper.getLocatlTime());
    }

    /**
     * 实现HttpSessionListener接口，完成session销毁事件控制
     */
    public void sessionDestroyed(HttpSessionEvent event) {
        HttpSession session = event.getSession();
        Object context = session.getAttribute(SystemConstant.SYS_USER_SESSION_KEY);
        if (context != null) {
            HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
            SysLoginLogService sysLoginLogService = (SysLoginLogService) ApplicationContextHolder.getBean("sysLoginLogService");
            SysUser sysUser = (SysUser)context;
            SysLoginLog loginLog = new SysLoginLog();
            loginLog.setLogId(SysUtil.GetUUID());
            loginLog.setSuccess(1);
            loginLog.setLoginName(sysUser.getLoginName());
            loginLog.setLoginDate(TimeHelper.getLocatlTime());
            loginLog.setIp(getIpAddr(request));
            loginLog.setSuId(sysUser.getSuId());
            loginLog.setContent("成功退出系统");
            try {
                sysLoginLogService.save(loginLog);
            } catch (Exception e) {
                logger.error("记录退出登录异常:"+e.getMessage());
            }
        }
        ht.remove(session.getId());
    }

    /**
     * see 获取客户端IP地址
     */
    public String getIpAddr(HttpServletRequest request) {
        String ipAddress="";
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
}
