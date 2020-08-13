package com.bluebird.framework.cache;

import com.bluebird.framework.constant.SystemConstant;

/**
 * 缓存基础接口
 *
 * @author wangwc
 * @version 1.0
 * @Date 2016-4-8 9:3
 */
public interface BaseCache {

    String SYS_CACHE= SystemConstant.DEFAULT_CACHEKEY;

    /**
     *
     * <p>方法说明：初始化</p>
     * @throws Exception
     */
    void init()throws Exception;

    /***
     * 这是缓存的key值
     * @return
     */
    void setCacheKey();

}
