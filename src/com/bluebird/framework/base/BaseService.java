package com.bluebird.framework.base;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.bluebird.framework.dao.dbutil.DBIdentifier;

/**
 * 基础service接口
 *
 * @author zhangyong
 * @version 2.0
 * @Date 2016-1-7 16:14
 */
public interface BaseService {

    /******************************* 增 *******************************/
    /***
     * 根据对象全保存
     *
     * @param record 对象
     * @return boolean
     * @throws Exception
     ***/
    boolean save(Object record) throws Exception;
    /***
     * 根据对象全保存
     *
     * @param record       对象
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     ***/
    boolean save(Object record, DBIdentifier dbIdentifier) throws Exception;

    /***
     * 根据条件选择性保存
     *
     * @param record 对象
     * @return boolean
     * @throws Exception
     */
    boolean saveSelective(Object record) throws Exception;

    /***
     * 根据条件选择性保存
     *
     * @param record       对象
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    boolean saveSelective(Object record, DBIdentifier dbIdentifier) throws Exception;

    /******************************* 删 *******************************/
    /***
     * 根据对象删除
     *
     * @param record 对象
     * @return boolean
     * @throws Exception
     ***/
    boolean delete(Object record) throws Exception;

    /***
     * 根据对象删除
     *
     * @param record       对象
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     ***/
    boolean delete(Object record, DBIdentifier dbIdentifier) throws Exception;

    /***
     * 根据条件选择性删除
     *
     * @param record 对象
     * @return boolean
     * @throws Exception
     */
    boolean deleteSelective(Object record) throws Exception;

    /***
     * 根据条件选择性删除
     *
     * @param record       对象
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    boolean deleteSelective(Object record, DBIdentifier dbIdentifier) throws Exception;

    /******************************* 改 *******************************/
    /***
     * 根据对象修改
     *
     * @param record 对象
     * @return boolean
     * @throws Exception
     ***/
    boolean update(Object record) throws Exception;

    /***
     * 根据对象修改
     *
     * @param record       对象
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     ***/
    boolean update(Object record, DBIdentifier dbIdentifier) throws Exception;

    /***
     * 根据条件选择性修改
     *
     * @param record 对象
     * @return boolean
     * @throws Exception
     */
    boolean updateSelective(Object record) throws Exception;

    /***
     * 根据条件选择性修改
     *
     * @param record       对象
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    boolean updateSelective(Object record, DBIdentifier dbIdentifier) throws Exception;

    /******************************* 查 *******************************/

    /***
     * 根据条件获取对象
     *
     * @param condition 条件
     * @return Object
     * @throws Exception
     */
    <T> T getByCondition(Object condition) throws Exception;

    /***
     * 根据条件获取对象
     *
     * @param condition    条件
     * @param dbIdentifier 数据源标识
     * @return Object
     * @throws Exception
     */
    <T> T getByCondition(Object condition, DBIdentifier dbIdentifier) throws Exception;

    /***
     * 根据条件获取记录条数
     *
     * @param condition 查询条件
     * @return Integer(没有返回0)
     * @throws Exception
     */
    Integer getTotalByCondition(Object condition) throws Exception;

    /***
     * 根据条件获取记录条数
     *
     * @param condition    查询条件
     * @param dbIdentifier 数据源标识
     * @return Integer(没有返回0)
     * @throws Exception
     */
    Integer getTotalByCondition(Object condition, DBIdentifier dbIdentifier) throws Exception;

    /***
     * 根据条件获取对象集合
     *
     * @param condition 条件
     * @return <E> List<E>
     * @throws Exception
     */
    <E> List<E> getListByCondition(Object condition) throws Exception;

    /***
     * 根据条件获取对象集合
     *
     * @param condition    条件
     * @param dbIdentifier 数据源标识
     * @return <E> List<E>
     * @throws Exception
     */
    <E> List<E> getListByCondition(Object condition, DBIdentifier dbIdentifier) throws Exception;

    /***
     * 根据条件获取分页数据
     *
     * @param condition 条件
     * @param page      分页
     * @return Page
     * @throws Exception
     */
    Page getListByCondition(Object condition, Page page) throws Exception;

    /***
     * 根据条件获取分页数据
     *
     * @param condition    条件
     * @param page         分页
     * @param dbIdentifier 数据源标识
     * @return Page
     * @throws Exception
     */
    Page getListByCondition(Object condition, Page page, DBIdentifier dbIdentifier) throws Exception;

    /***
     * 根据主键获取对象
     *
     * @param id 主键
     * @return Object
     * @throws Exception
     */
    <T> T getById(String id) throws Exception;

    /***
     * 根据主键获取对象
     *
     * @param id           主键
     * @param dbIdentifier 数据标识
     * @return Object
     * @throws Exception
     */
    <T> T getById(String id, DBIdentifier dbIdentifier) throws Exception;

    /**
     * 根据条件判断是否存在
     *
     * @param condition 条件
     * @return boolean
     * @throws Exception
     */
    boolean isExist(Object condition) throws Exception;

    /**
     * 根据条件判断是否存在
     *
     * @param condition    条件
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    boolean isExist(Object condition, DBIdentifier dbIdentifier) throws Exception;

    /**
     * 获取服务器地址
     *
     * @param request request
     * @return String
     */
    String getServerPath(HttpServletRequest request);

    /**
     * 上传图片/文件
     *
     * @param request request
     * @return list
     * @throws IOException
     */
    List<String> upLoadImg(HttpServletRequest request) throws IOException;
	
}
