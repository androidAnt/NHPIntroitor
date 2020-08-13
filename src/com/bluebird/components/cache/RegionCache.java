package com.bluebird.components.cache;

import com.bluebird.framework.cache.BaseCache;
import com.bluebird.framework.cache.Cache;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.service.SysRegionService;
import com.bluebird.module.system.vo.RegionVo;
import com.google.common.collect.HashBasedTable;
import com.google.common.collect.Table;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import javax.annotation.Resource;
import java.util.List;

/**
 * 省市区缓存
 *
 * @author wangwc
 * @version 1.0
 * @Date 2016-6-2 14:00
 */
public class RegionCache implements BaseCache {

    protected Log logger = LogFactory.getLog(DicCache.class);

    @Resource
    private SysRegionService sysRegionService;

    @Resource
    Cache cache;

    /***
     * 这是缓存的key值
     */
    @Override
    public void setCacheKey() {
        cache.setCacheKey(SYS_CACHE);
    }

    /**
     * <p>方法说明：初始化</p>
     *
     * @throws Exception
     */
    @Override
    public void init() throws Exception {
        logger.info("[省市区缓存] 开始缓存......");
        List<RegionVo> list=sysRegionService.getCacheList();
        if (null != list && list.size() > 0) {
            Table<Integer, String, RegionVo> table = HashBasedTable.create();
            for (RegionVo regionVo : list) {
                table.put(regionVo.getSrId(), regionVo.getpId()+"", regionVo);
            }
            cache.put(SystemConstant.SYS_REGION_CACHEKEY, table);
        }
        logger.info("[省市区缓存] 缓存初始化完成");
    }
}
