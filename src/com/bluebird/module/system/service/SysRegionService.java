package com.bluebird.module.system.service;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.system.vo.RegionVo;

import java.util.List;
import java.util.Map;

/**
 * 省市县管理service接口
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-6-2 14:01
 * @extends BaseService
 */
public interface SysRegionService extends BaseService {

    /**
     * 获取用于缓存的集合
     *
     * @return list
     * @throws Exception
     */
    List<RegionVo> getCacheList() throws Exception;

    /**
     * 从缓存中根据上级主键获取下级集合
     *
     * @param pId 上级主键
     * @return list
     * @throws Exception \
     */
    List<RegionVo> getCacheList(Integer pId) throws Exception;

    /**
     * app端获取省市
     *
     * @return map
     * @throws Exception
     */
    Map<String, Object> getAppCityCacheList() throws Exception;

    /**
     * app端获取省市县
     *
     * @return map
     * @throws Exception
     */
    Map<String, Object> getAppCountyCacheList() throws Exception;
    
    /**
     * 获得城市集合
     * @return
     * @throws Exception
     */
	Map<String, Object> getCityList() throws Exception;
}
