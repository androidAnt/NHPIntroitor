package com.bluebird.components.cache;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.bluebird.framework.cache.BaseCache;
import com.bluebird.framework.cache.Cache;

/**
 * 缓存商品分类
 *
 * @author wangwc
 * @version 1.0
 * @Date 2016-5-24 17:36
 * @implements BaseCache
 */
public class CommodityClassifyCache implements BaseCache {
	
    protected Log logger = LogFactory.getLog(DicCache.class);

//    @Resource
//    CommodityClassifySevice commodityClassifySevice;

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
//        logger.info("[商品分类] 开始缓存......");
//        List<CcCache> list = commodityClassifySevice.getList2Cache();
//        Collections.sort(list, new Comparator<CcCache>() {
//            public int compare(CcCache arg0, CcCache arg1) {
//                return arg0.getSortNO().compareTo(arg1.getSortNO());
//            }
//        });
//        if (null != list && list.size() > 0) {
//            Table<String, String, CcCache> table = HashBasedTable.create();
//            for (CcCache ccCache : list) {
//                table.put(ccCache.getCcId(), ccCache.getpId(), ccCache);
//            }
//            cache.put(SystemConstant.SYS_COMMODITY_CLASSIFY, table);
//        }
//        logger.info("[商品分类] 缓存初始化完成");
    }
}
