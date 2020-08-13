package com.bluebird.framework.log.anotation;

import java.lang.annotation.*;

/**
 * 日志拦截器注解
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-11 17:03
 */
//注解运行的位置
@Target({ElementType.METHOD})
//运行时执行的注解
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface LogAspect {
    String desc() default "无描述信息";
}
