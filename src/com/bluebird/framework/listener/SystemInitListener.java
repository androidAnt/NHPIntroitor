package com.bluebird.framework.listener;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * 系统启动监听器
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-18 13:04
 */
public class SystemInitListener implements ServletContextListener {

    private static Log logger = LogFactory.getLog(SessionListener.class);

    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        ApplicationContext applicationContext = WebApplicationContextUtils.getWebApplicationContext(servletContextEvent.getServletContext());
        ApplicationContextHolder applicationContextHolder=new ApplicationContextHolder();
        applicationContextHolder.setApplicationContext(applicationContext);
        logger.info("********************************************");
        logger.info("系统启动成功.....");
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        logger.info("********************************************");
        logger.info("系统关闭成功.....");
    }
}
