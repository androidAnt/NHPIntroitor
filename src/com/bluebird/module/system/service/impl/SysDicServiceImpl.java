package com.bluebird.module.system.service.impl;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.cache.Cache;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.exception.SystemException;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.system.model.SysDic;
import com.bluebird.module.system.service.SysDicService;
import com.bluebird.module.system.vo.DicTypeVo;
import com.bluebird.module.system.vo.DicVo;
import com.google.common.collect.HashBasedTable;
import com.google.common.collect.Table;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * 数据字典service接口实现类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-4-7 15:07
 * @extends BaseServiceImpl
 * @implements SysDicService
 */
@Service
public class SysDicServiceImpl extends BaseServiceImpl implements SysDicService{

    @Resource
    public Cache cache;

    /**
     * 获取缓存的字典类型集合
     *
     * @return list
     */
    @Override
    public List<DicTypeVo> getCacheDicType() throws Exception {
        Table<String, String,DicTypeVo> dicTypeTable =  (Table)cache.get(SystemConstant.SYS_DICTYPE_NAME);
        if(dicTypeTable !=null&& dicTypeTable.size()>=0){
            List<DicTypeVo> list=new ArrayList<>();
            Collection collection=dicTypeTable.values();
            for (Iterator<DicTypeVo> iterator = collection.iterator(); iterator.hasNext();) {
                list.add(iterator.next());
            }
            return list;
        }
        return null;
    }

    /**
     * 根据数据字典类型获取缓存的数据字典信息
     *
     * @param dicTypeKey 字典类型键值
     * @return list
     * @throws Exception
     */
    @Override
    public List<DicVo> getCacheDicByType(String dicTypeKey) throws Exception {
        Table<String, String,DicTypeVo> cacheDicTable =  (Table)cache.get(SystemConstant.SYS_DIC_NAME);
        if(cacheDicTable !=null&& cacheDicTable.size()>=0){
            List<DicVo> list=new ArrayList<>();
            Collection collection=cacheDicTable.column(dicTypeKey).values();
            for (Iterator<DicVo> iterator = collection.iterator(); iterator.hasNext();) {
                list.add(iterator.next());
            }
            return list;
        }
        return null;
    }

    /**
     * 获取可缓存的字典类型（用于缓存字典类型）
     */
    @Override
    public List<DicTypeVo> getDicTypeList() throws Exception {
        return dbManage.selectListByCondition(SystemConstant.DEFAULT_DICID);
    }

    /**
     * 获取可缓存的字典（用于缓存字典）
     */
    @Override
    public List<DicVo> getDicList2Cache() throws Exception {
        return dbManage.selectListByCondition(SystemConstant.DEFAULT_DICID);
    }

    /**
     * 添加字典类型
     *
     * @param sysDic 字典类型
     * @return boolean
     */
    @LogAspect(desc = "添加字典类型")
    @Override
    public boolean saveDicType(SysDic sysDic) throws Exception {
        sysDic.setDicType(SystemConstant.DEFAULT_DICID);
        sysDic.setCreateDate(TimeHelper.getLocatlTime());
        sysDic.setState(SystemConstant.RETURN_STATUS_SUCCESS);
        hasDic(sysDic);
        sysDic.setDicId(SysUtil.GetUUID());
        if(this.save(sysDic)){
            refreshDicTypeCache();
            return true;
        }
        throw SystemException.businessException("添加字典类型失败");
    }

    /**
     * 修改字典类型
     *
     * @param sysDic 字典类型
     * @return boolean
     */
    @LogAspect(desc = "修改字典类型")
    @Override
    public boolean updateDicType(SysDic sysDic) throws Exception {
        hasDic(sysDic);
        if(this.update(sysDic)){
            refreshDicTypeCache();
            return true;
        }
        throw SystemException.businessException("修改字典类型失败");
    }
    /**
     * 修改字典类型
     *
     * @param sysDic 字典类型
     * @return boolean
     */
    @LogAspect(desc = "修改字典类型状态")
    @Override
    public boolean updateDicTypeState(SysDic sysDic) throws Exception {
        if(this.update(sysDic)){
            refreshDicTypeCache();
            return true;
        }
        throw SystemException.businessException("状态更新失败");
    }

    /**
     * 删除字典类型
     *
     * @param dicId 字典主键
     * @return boolean
     */
    @LogAspect(desc = "删除字典类型")
    @Override
    public boolean deleteDicType(String dicId) throws Exception {
        List<SysDic> list=getDicList(dicId);
        if(null==list||list.size()==0){
            if(this.delete(dicId)){
                refreshDicTypeCache();
                return true;
            }
            throw SystemException.businessException("删除字典类型失败");
        }
        throw  SystemException.businessException("类型下有数据无法删除");
    }

    /**
     * 添加字典
     *
     * @param sysDic 字典
     * @return boolean
     */
    @LogAspect(desc = "添加字典")
    @Override
    public boolean saveDic(SysDic sysDic) throws Exception {
        sysDic.setCreateDate(TimeHelper.getLocatlTime());
        sysDic.setState(SystemConstant.RETURN_STATUS_SUCCESS);
        hasDic(sysDic);
        sysDic.setDicId(SysUtil.GetUUID());
        if(this.save(sysDic)){
            refreshDicCache();
            return true;
        }
        throw SystemException.businessException("添加字典失败");
    }

    /**
     * 修改字典
     *
     * @param sysDic 字典
     * @return boolean
     */
    @LogAspect(desc = "修改字典")
    @Override
    public boolean updateDic(SysDic sysDic) throws Exception {
        hasDic(sysDic);
        if(this.update(sysDic)){
            refreshDicCache();
            return true;
        }
        throw SystemException.businessException("修改字典失败");
    }
    /**
     * 修改字典
     *
     * @param sysDic 字典
     * @return boolean
     */
    @LogAspect(desc = "修改字典状态")
    @Override
    public boolean updateDicState(SysDic sysDic) throws Exception {
        sysDic.setRemark(null);
        if(this.update(sysDic)){
            refreshDicCache();
            return true;
        }
        throw SystemException.businessException("状态更新失败");
    }

    /**
     * 删除字典
     *
     * @param dicId 字典主键
     * @return boolean
     */
    @LogAspect(desc = "删除字典")
    @Override
    public boolean deleteDic(String dicId) throws Exception {
        if(this.delete(dicId)){
            refreshDicCache();
            return true;
        }
        throw SystemException.businessException("删除字典失败");
    }

    /**
     * 获取字典集合
     *
     * @return list
     */
    @Override
    public List<SysDic> getDicList(String dicType) throws Exception {
        if(StringUtils.isEmpty(dicType)){
            dicType=SystemConstant.DEFAULT_DICID;
        }
        return dbManage.selectListByCondition(dicType);
    }

    /******************* 辅助类 *******************/
    /**
     * 判断是否编码或者名称重复
     * */
    private void hasDic(SysDic sysDic)throws Exception{
        SysDic sysDic1=dbManage.selectByCondition(sysDic);
        if(null!=sysDic1){
            if(sysDic1.getDicCode().equals(sysDic.getDicCode())){
                throw SystemException.businessException("编码重复");
            }else{
                throw SystemException.businessException("名称重复");
            }
        }
    }

    /***
     * 刷新数据字典类型缓存缓存
     */
    private void  refreshDicTypeCache() throws Exception{
        cache.removeCacheByKey(SystemConstant.SYS_DICTYPE_NAME);
        List<DicTypeVo> typeList=getDicTypeList();
        if(null!=typeList&&typeList.size()>0){
            Table<String, String,DicTypeVo> dicTypeTable = HashBasedTable.create();
            for(DicTypeVo dicTypeVo:typeList){
                dicTypeTable.put(dicTypeVo.getDicId(),dicTypeVo.getDicCode(),dicTypeVo);
            }
            cache.put(SystemConstant.SYS_DICTYPE_NAME, dicTypeTable);
        }
    }

    /***
     * 刷新数据字典缓存缓存
     */
    private void  refreshDicCache() throws Exception{
        cache.removeCacheByKey(SystemConstant.SYS_DIC_NAME);
        List<DicVo> dicList =getDicList2Cache();
        Table<String, String,DicVo> dicTable = HashBasedTable.create();
        if(null!=dicList&&dicList.size()>0){
            for (DicVo dicVo:dicList) {
                dicTable.put(dicVo.getDicId(), dicVo.getTypeCode(),dicVo);
            }
            cache.put(SystemConstant.SYS_DIC_NAME, dicTable);
        }
    }

    /**
     * 根据disCode查询
     */
	@Override
	public SysDic getSysDic(Map<String, Object> params) throws Exception {
		
		return dbManage.selectByCondition(params);
	}

	@Override
	public SysDic getSysDicByCode(Map<String,Object> params) throws Exception{
		return dbManage.selectByCondition(params);
	}
	/**
	 * 查询所有
	 */
	@Override
	public List<SysDic> getSysDicList(Map<String, Object> params)throws Exception {
		
		return dbManage.selectListByCondition(params);
	}
    /**
     * 根据disName查询
     */
	@Override
	public SysDic getSysDicValue(Map<String, Object> params) throws Exception {
	
		return dbManage.selectByCondition(params);
	}
}
