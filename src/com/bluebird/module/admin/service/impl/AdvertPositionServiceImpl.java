package com.bluebird.module.admin.service.impl;


import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.AdvertPosition;
import com.bluebird.module.admin.service.AdvertPositionService;

/**
 * 广告位置管理service接口实现类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2015-12-4 11:05
 * @extends BaseServiceImpl
 * @implements AdvertPositionService
 */
@Service
public class AdvertPositionServiceImpl extends BaseServiceImpl implements AdvertPositionService {

    /**
     * 添加广告位置
     *
     * @param position
     * @return map
     * @throws Exception
     */
    @LogAspect(desc = "添加广告位置")
    @Override
    public Map<String, Object> save(AdvertPosition position) throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("title", position.getTitle());
        map.put("pId", position.getpId());
        map.put("status", SystemConstant.RETURN_STATUS_FAIL);
        map.put("msg", "添加失败,请重试");
        if (isExist(map)) {
            map.remove("title");
            map.remove("pId");
            map.put("msg", "广告位置标题重复");
        } else {
            position.setApId(SysUtil.GetUUID());
            position.setOpDate(TimeHelper.getLocatlTime());
            if (saveSelective(position)) {
                map.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
                map.put("msg", "添加成功");
            }
        }
        return map;
    }

    /**
     * 修改广告位置
     *
     * @param position
     * @return map
     * @throws Exception
     */
    @LogAspect(desc = "修改广告位置")
    @Override
    public Map<String, Object> edit(AdvertPosition position) throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("title", position.getTitle());
        map.put("pId", position.getpId());
        map.put("apId", position.getApId());
        map.put("status", SystemConstant.RETURN_STATUS_FAIL);
        map.put("msg", "修改失败,请重试");
        if (isExist(map)) {
            map.remove("title");
            map.remove("pId");
            map.remove("apId");
            map.put("msg", "广告位置标题重复");
        } else {
            position.setOpDate(TimeHelper.getLocatlTime());
            if (updateSelective(position)) {
                map.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
                map.put("msg", "修改成功");
            }
        }
        return map;
    }

    /**
     * 修改广告位置状态
     *
     * @param position
     * @return map
     * @throws Exception
     */
    @LogAspect(desc = "修改广告位置状态")
    @Override
    public Map<String, Object> editState(AdvertPosition position) throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("status", SystemConstant.RETURN_STATUS_FAIL);
        map.put("msg", "操作失败,请重试");
        position.setOpDate(TimeHelper.getLocatlTime());
        if(updateSelective(position)){
            map.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            map.put("msg", "操作成功");
        }
        return map;
    }

}
