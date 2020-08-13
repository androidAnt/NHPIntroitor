package com.bluebird.module.system.ctl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bluebird.framework.base.BaseCtl;
import com.bluebird.module.system.service.SysRegionService;
import com.bluebird.module.system.vo.RegionVo;

/**
 * 区域服务Ctl
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-6-2 16:30
 */
@RestController
@RequestMapping("region")
public class SysRegionCtl extends BaseCtl {

    @Resource
    private SysRegionService sysRegionService;

    /**
     * 根据类型获取地域集合
     *
     * @param pId 上级主键
     * @return list
     */
    @RequestMapping(value = "{pId}")
    public List<RegionVo> getList(@PathVariable Integer pId) {
        try {
            return sysRegionService.getCacheList(pId);
        } catch (Exception e) {
            logger.error("根据类型获取地域集合异常:" + e.getMessage());
        }
        return null;
    }

    /*@RequestMapping(value = "sys")
    public String sys(){
        try {
            List<RegionVo> list=sysRegionService.getListByCondition(null);
            String str;
            for(RegionVo vo:list){
                str=Map.Geocoding(vo.getName());
                if(StringUtils.isNotEmpty(str)){
                    vo.setLat(Double.parseDouble(str.split(",")[1]));
                    vo.setLng(Double.parseDouble(str.split(",")[0]));
                    vo.setName(null);
                    sysRegionService.updateSelective(vo);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "ok";
    }*/
}
