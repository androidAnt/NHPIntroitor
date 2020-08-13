package com.bluebird.module.system.service;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.system.model.SysDic;
import com.bluebird.module.system.vo.DicTypeVo;
import com.bluebird.module.system.vo.DicVo;

import java.util.List;
import java.util.Map;

/**
 * 数据字典service接口
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-4-7 15:07
 * @extends BaseService
 */
public interface SysDicService extends BaseService {

    /**
     * 获取缓存的字典类型集合
     *
     * @return list
     * @throws Exception
     */
    List<DicTypeVo> getCacheDicType() throws Exception;

    /**
     * 根据数据字典类型获取缓存的数据字典信息
     *
     * @param dicTypeKey 字典类型键值
     * @return list
     * @throws Exception
     */
    List<DicVo> getCacheDicByType(String dicTypeKey) throws Exception;

    /**
     * 获取可缓存的字典类型（用于缓存字典类型）
     */
    List<DicTypeVo> getDicTypeList() throws Exception;

    /**
     * 获取可缓存的字典（用于缓存字典）
     */
    List<DicVo> getDicList2Cache() throws Exception;

    /**
     * 添加字典类型
     *
     * @param sysDic 字典类型
     * @return boolean
     */
    boolean saveDicType(SysDic sysDic) throws Exception;

    /**
     * 修改字典类型
     *
     * @param sysDic 字典类型
     * @return boolean
     */
    boolean updateDicType(SysDic sysDic) throws Exception;

    /**
     * 更新字典类型状态
     *
     * @param sysDic 字典类型
     * @return boolean
     */
    boolean updateDicTypeState(SysDic sysDic) throws Exception;

    /**
     * 删除字典类型
     *
     * @param dicId 字典主键
     * @return boolean
     */
    boolean deleteDicType(String dicId) throws Exception;

    /**
     * 获取字典集合
     *
     * @return list
     */
    List<SysDic> getDicList(String dicType) throws Exception;

    /**
     * 添加字典
     *
     * @param sysDic 字典
     * @return boolean
     */
    boolean saveDic(SysDic sysDic) throws Exception;

    /**
     * 修改字典
     *
     * @param sysDic 字典
     * @return boolean
     */
    boolean updateDic(SysDic sysDic) throws Exception;

    /**
     * 更新字典状态
     *
     * @param sysDic 字典
     * @return boolean
     */
    boolean updateDicState(SysDic sysDic) throws Exception;

    /**
     * 删除字典
     *
     * @param dicId 字典主键
     * @return boolean
     */
    boolean deleteDic(String dicId) throws Exception;
    
    /**
     * 根据disCode查询
     * @param params
     * @return
     * @throws Exception
     */
    SysDic getSysDic(Map<String,Object> params) throws Exception;
    
    SysDic getSysDicByCode(Map<String,Object> params) throws Exception;
    
    /**
     * 查询所有
     */
   List<SysDic> getSysDicList(Map<String,Object> params) throws Exception;
   /**
    * 根据类型dic_name查询dic_value
    */
   SysDic getSysDicValue(Map<String,Object> params) throws Exception;
}
