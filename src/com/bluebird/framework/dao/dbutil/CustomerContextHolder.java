package com.bluebird.framework.dao.dbutil;

/**
 * set数据源
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-7 11:25
 */
public abstract class CustomerContextHolder {

    private static final ThreadLocal<String> contextHolder = new ThreadLocal<String>();

    public static void setContextType(String contextType) {
        contextHolder.set(contextType);
    }

    public static String getContextType() {
        return contextHolder.get();
    }

    public static void clearContextType() {
        contextHolder.remove();
    }
}
