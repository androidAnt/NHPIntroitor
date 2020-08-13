package com.bluebird.framework.shiro.quartz;

import org.apache.shiro.session.mgt.ValidatingSessionManager;
import org.quartz.Job;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 重写QuartzSessionValidationJob 兼容shiro
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-4-22 12:00
 */
public class QuartzSessionValidationJob implements Job {

    public static final String SESSION_MANAGER_KEY = "sessionManager";

    private static final Logger log = LoggerFactory.getLogger(QuartzSessionValidationJob.class);

    public void execute(JobExecutionContext context) throws JobExecutionException {

        JobDataMap jobDataMap = context.getMergedJobDataMap();
        ValidatingSessionManager sessionManager = (ValidatingSessionManager) jobDataMap.get(SESSION_MANAGER_KEY);
        if (log.isDebugEnabled()) {
            log.debug("Executing session validation Quartz job...");
        }
        sessionManager.validateSessions();
        if (log.isDebugEnabled()) {
            log.debug("Session validation Quartz job complete.");
        }
    }

}
