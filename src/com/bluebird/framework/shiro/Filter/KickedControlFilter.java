package com.bluebird.framework.shiro.Filter;

import com.bluebird.module.system.model.SysUser;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.shiro.cache.Cache;
import org.apache.shiro.cache.CacheManager;
import org.apache.shiro.session.Session;
import org.apache.shiro.session.mgt.DefaultSessionKey;
import org.apache.shiro.session.mgt.SessionManager;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.AccessControlFilter;
import org.apache.shiro.web.util.WebUtils;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.io.Serializable;
import java.util.Deque;
import java.util.LinkedList;

/**
 * 踢出多余账户Filter（一个账户同时只容许指定人数在线）
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-4-21 17:31
 * @extends AccessControlFilter
 */
public class KickedControlFilter extends AccessControlFilter {

    protected Log logger = LogFactory.getLog(getClass());

    private boolean openKicked=false;//是否开启踢出功能

    private String kickedUrl="/system/kicked";//踢出后到的地址

    private boolean kickedAfter = false; //踢出之前登录的/之后登录的用户 默认踢出之前登录的用户

    private int maxOnLine = 1; //同一个帐号最大在线数 默认1

    private SessionManager sessionManager;

    private Cache<String, Deque<Serializable>> cache;

    public void setOpenKicked(boolean openKicked) {
        this.openKicked = openKicked;
    }

    public void setKickedUrl(String kickedUrl) {
        this.kickedUrl = kickedUrl;
    }

    public void setKickedAfter(boolean kickedAfter) {
        this.kickedAfter = kickedAfter;
    }

    public void setMaxOnLine(int maxOnLine) {
        this.maxOnLine = maxOnLine;
    }

    public void setSessionManager(SessionManager sessionManager) {
        this.sessionManager = sessionManager;
    }

    public void setCacheManager(CacheManager cacheManager) {
        this.cache = cacheManager.getCache("shiro-kicked-session");
    }

    @Override
    protected boolean isAccessAllowed(ServletRequest servletRequest, ServletResponse servletResponse, Object o) throws Exception {
        return false;
    }

    @Override
    protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {
        Subject subject = getSubject(request, response);
        if(!subject.isAuthenticated() && !subject.isRemembered()) {
            //如果没有登录，直接进行之后的流程
            return true;
        }
        if(openKicked){
            Session session = subject.getSession();
            SysUser sysUser = (SysUser) subject.getPrincipal();
            Serializable sessionId = session.getId();
            Deque<Serializable> deque = cache.get(sysUser.getLoginName());
            if(deque == null) {
                deque = new LinkedList<>();
                cache.put(sysUser.getLoginName(), deque);
            }
            //如果队列里没有此sessionId，且用户没有被踢出；放入队列
            if(!deque.contains(sessionId) && session.getAttribute("kicked") == null) {
                deque.push(sessionId);
            }
            while(deque.size() > maxOnLine) {
                Serializable kickedSessionId;
                if(kickedAfter) { //如果踢出后者
                    kickedSessionId = deque.removeFirst();
                } else { //否则踢出前者
                    kickedSessionId = deque.removeLast();
                }
                try {
                    Session kickedSession = sessionManager.getSession(new DefaultSessionKey(kickedSessionId));
                    if(kickedSession != null) {
                        //设置会话的kickout属性表示踢出了
                        kickedSession.setAttribute("kicked", true);
                    }
                } catch (Exception e) {
                    logger.error("设置踢出异常异常："+e.getMessage());
                }
            }
            if (session.getAttribute("kicked") != null) {
                try {//会话被踢出了
                    subject.logout();
                } catch (Exception e) {
                    logger.error("踢出用户异常："+e.getMessage());
                }
                saveRequest(request);
                WebUtils.issueRedirect(request, response, kickedUrl);
                return false;
            }
        }
        return true;
    }
}
