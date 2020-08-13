package com.bluebird.framework.cache;

/**
 * 缓存的上级接口
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-4-8 9:32
 */
public interface Cache {

    /***
     * 获得缓存对象
     *
     * @param key 键
     */
    Object get(String key);


    /***
     * 设置缓存对象
     *
     * @param key   键
     * @param value 值
     */
    void put(String key, Object value);


    /***
     * 删除缓存对象
     *
     * @param key 键
     */
    void removeCacheByKey(String key);

    /***
     * 设置cache的key
     *
     * @param cacheKey 键
     */
    void setCacheKey(String cacheKey);

    /***
     * 删除所有缓存内容
     */
    void removeAll();


    void flush();
}
