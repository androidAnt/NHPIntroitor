package com.bluebird.module.admin.service;



import java.util.List;
import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.admin.model.Advert;
import com.bluebird.module.app.vo.AdvertAppVo;

/**
 * 广告管理service接口
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2015-12-4 11:00
 * @extends IBaseService
 */
public interface AdvertService extends BaseService {

    /**
     * 添加广告
     * */
    Map<String,Object> save(Advert Advert)throws Exception;

    /**
     * 修改广告
     * */
    Map<String,Object> edit(Advert Advert)throws Exception;

    /**
     * 修改广告状态
     * */
    Map<String, Object> editState(Advert Advert) throws Exception;

    /**
     * 删除广告
     * */
    Map<String,Object> delAdvertByaId(String aId) throws Exception;

    /**
     * 根据位置获取APP端轮播图列表
     */
    List<AdvertAppVo> getAppAdvertList(String apId, String city, String realPath)throws Exception;


}
