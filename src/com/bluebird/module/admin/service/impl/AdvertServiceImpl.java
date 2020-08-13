package com.bluebird.module.admin.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.bluebird.module.app.vo.AdvertAppVo;
import org.springframework.stereotype.Service;
import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.Advert;
import com.bluebird.module.admin.service.AdvertService;

/**
 * 广告管理service接口实现类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2015-12-4 11:02
 * @extends BaseServiceImpl
 * @implements AdvertService
 */
@Service
public class AdvertServiceImpl extends BaseServiceImpl implements AdvertService {
    /**
     * 添加广告
     *
     * @param advert 广告
     * @return map
     * @throws Exception
     */
    @LogAspect(desc = "添加广告")
    @Override
    public Map<String, Object> save(Advert advert) throws Exception {
        Map<String, Object> map = new HashMap<>();
        map.put("title", advert.getTitle());
        map.put("apId", advert.getApId().split("_")[0]);
        map.put("status", SystemConstant.RETURN_STATUS_FAIL);
        map.put("msg", "添加失败,请重试");
        if (isExist(map)) {
            map.remove("title");
            map.remove("apId");
            map.put("msg", "广告标题重复");
        } else {
            advert.setaId(SysUtil.GetUUID());
            advert.setOpDate(TimeHelper.getLocatlTime());
            advert.setApId(advert.getApId().split("_")[0]);
            if (saveSelective(advert)) {
                map.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
                map.put("msg", "添加成功");
            }
        }
        return map;
    }

    /**
     * 修改广告
     *
     * @param advert 广告
     * @return map
     * @throws Exception
     */
    @LogAspect(desc = "修改广告")
    @Override
    public Map<String, Object> edit(Advert advert) throws Exception {
        Map<String, Object> map = new HashMap<>();
        map.put("title", advert.getTitle());
        map.put("apId", advert.getApId().split("_")[0]);
        map.put("aId", advert.getaId());
        map.put("status", SystemConstant.RETURN_STATUS_FAIL);
        map.put("msg", "修改失败,请重试");
        if (isExist(map)) {
            map.remove("title");
            map.remove("apId");
            map.remove("aId");
            map.put("msg", "广告标题重复");
        } else {
            advert.setApId(advert.getApId().split("_")[0]);
            advert.setOpDate(TimeHelper.getLocatlTime());
            if (updateSelective(advert)) {
                map.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
                map.put("msg", "修改成功");
            }
        }
        return map;
    }

    /**
     * 修改广告状态
     *
     * @param advert 广告
     * @return map
     * @throws Exception
     */
    @LogAspect(desc = "修改广告状态")
    @Override
    public Map<String, Object> editState(Advert advert) throws Exception {
        Map<String, Object> map = new HashMap<>();
        map.put("status", SystemConstant.RETURN_STATUS_FAIL);
        map.put("msg", "操作失败,请重试");
        advert.setOpDate(TimeHelper.getLocatlTime());
        if (updateSelective(advert)) {
            map.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            map.put("msg", "操作成功");
        }
        return map;
    }

    /**
     * 删除广告
     *
     * @param aId 主键
     * @return map
     * @throws Exception
     */
    @LogAspect(desc = "删除广告")
    @Override
    public Map<String, Object> delAdvertByaId(String aId) throws Exception {
        Map<String, Object> resMap = new HashMap<>();
        resMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resMap.put("msg", "删除失败,请重试");
        if (delete(aId)) {
            resMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resMap.put("msg", "删除成功");
        }
        return resMap;
    }

    /**
     * 根据位置获取APP端轮播图列表
     *
     * @param apId     位置主键
     * @param realPath 服务器网络地址
     * @return List<AdvertAppVo>
     * @throws Exception
     */
    public List<AdvertAppVo> getAppAdvertList(String apId,String city, String realPath) throws Exception {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("apId", apId);
        paramMap.put("realPath", realPath);
        paramMap.put("city", city);
        return dbManage.selectListByCondition(paramMap);
    }	

}
