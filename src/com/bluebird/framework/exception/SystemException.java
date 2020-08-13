package com.bluebird.framework.exception;

/**
 * 系统异常类、
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-03-14 10:01
 */
public class SystemException extends RuntimeException {

    /**
     * 序列化ID
     */
    private static final long serialVersionUID = -6467805382279763493L;

    public SystemException(String message) {
        super(message);
    }

    public static RuntimeException businessException(String message) {
        return new SystemException(message);
    }

    public static RuntimeException noDataBaseException() {
        return new SystemException(".........................未找到对应的数据源.........................");
    }



}
