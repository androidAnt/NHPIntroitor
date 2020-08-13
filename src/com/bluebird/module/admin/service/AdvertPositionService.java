package com.bluebird.module.admin.service;

import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.admin.model.AdvertPosition;

/**
 * 广告位置管理service接口
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2015-12-4 11:04
 * @extends IBaseService
 */
public interface AdvertPositionService extends BaseService {

    /**
     * 添加广告位置
     * */
    public Map<String,Object> save(AdvertPosition position)throws Exception;

    /**
     * 修改广告位置
     * */
    public Map<String,Object> edit(AdvertPosition position)throws Exception;

    /**
     * 修改广告位置状态
     * */
    public Map<String, Object> editState(AdvertPosition position) throws Exception;
}
