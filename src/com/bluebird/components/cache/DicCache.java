package com.bluebird.components.cache;

import com.bluebird.framework.cache.BaseCache;
import com.bluebird.framework.cache.Cache;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.service.SysDicService;
import com.bluebird.module.system.vo.DicTypeVo;
import com.bluebird.module.system.vo.DicVo;
import com.google.common.collect.HashBasedTable;
import com.google.common.collect.Table;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import javax.annotation.Resource;
import java.util.List;

/**
 * 数据字典缓存
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-4-8 10:19
 * @implements BaseCache
 */
public class DicCache implements BaseCache{

    protected Log logger = LogFactory.getLog(DicCache.class);

    @Resource
    private SysDicService sysDicService;

    @Resource
    Cache cache;

    /***
     * 这是缓存的key值
     *
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
        logger.info("[数据字典] 开始缓存......");
        List<DicTypeVo> typeList=sysDicService.getDicTypeList();
        if(null!=typeList&&typeList.size()>0){
            Table<String, String,DicTypeVo> dicTypeTable = HashBasedTable.create();
            for(DicTypeVo dicTypeVo:typeList){
                dicTypeTable.put(dicTypeVo.getDicId(),dicTypeVo.getDicCode(),dicTypeVo);
            }
            cache.put(SystemConstant.SYS_DICTYPE_NAME, dicTypeTable);
            List<DicVo> dicList = sysDicService.getDicList2Cache();
            Table<String, String,DicVo> dicTable = HashBasedTable.create();
            if(null!=dicList&&dicList.size()>0){
                for (DicVo dicVo:dicList) {
                    dicTable.put(dicVo.getDicId(), dicVo.getTypeCode(),dicVo);
                }
                cache.put(SystemConstant.SYS_DIC_NAME, dicTable);
            }
        }
        logger.info("[数据字典] 缓存初始化完成");
    }

}
