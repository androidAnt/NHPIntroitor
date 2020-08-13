package com.bluebird.framework.dao;

import com.bluebird.framework.base.Page;
import com.bluebird.framework.dao.dbutil.DBIdentifier;

import java.util.List;

/**
 * 数据库操作接口
 *
 * @author zhangyong
 * @version 2.0
 * @Date 2016-1-6 10:01
 */
public interface DBmanage {

    //----------------------------- save -----------------------------//
    boolean insert(Object parameter) throws Exception;

    boolean insert(Object parameter, DBIdentifier dbIdentifier) throws Exception;

    boolean insert(Object parameter, String statement) throws Exception;
    
    boolean insert(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception;

    //---------------------------- delete ----------------------------//
    boolean delete(Object parameter) throws Exception;

    boolean delete(Object parameter, DBIdentifier dbIdentifier) throws Exception;

    boolean delete(Object parameter, String statement) throws Exception;

    boolean delete(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception;

    //---------------------------- update ----------------------------//
    boolean update(Object parameter) throws Exception;

    boolean update(Object parameter, DBIdentifier dbIdentifier) throws Exception;

    boolean update(Object parameter, String statement) throws Exception;

    boolean update(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception;

    //------------------------ query-isExist -------------------------//
    boolean isExist(Object parameter) throws Exception;

    boolean isExist(Object parameter, DBIdentifier dbIdentifier) throws Exception;

    boolean isExist(Object parameter, String statement) throws Exception;

    boolean isExist(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception;

    //------------------- query-selectByCondition --------------------//
    <T> T selectByCondition(Object parameter) throws Exception;

    <T> T selectByCondition(Object parameter, DBIdentifier dbIdentifier) throws Exception;

    <T> T selectByCondition(Object parameter, String statement) throws Exception;

    <T> T selectByCondition(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception;

    //----------------- query-selectListByCondition ------------------//
    <E> List<E> selectListByCondition(Object parameter) throws Exception;

    <E> List<E> selectListByCondition(Object parameter, DBIdentifier dbIdentifier) throws Exception;

    <E> List<E> selectListByCondition(Object parameter, String statement) throws Exception;

    <E> List<E> selectListByCondition(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception;

    //----------------- query-selectTotalByCondition -----------------//
    Integer selectTotalByCondition(Object parameter) throws Exception;

    Integer selectTotalByCondition(Object parameter, DBIdentifier dbIdentifier) throws Exception;

    Integer selectTotalByCondition(Object parameter, String statement) throws Exception;

    Integer selectTotalByCondition(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception;

    //----------------- query-selectPageByCondition ------------------//
    Page selectPageByCondition(Object parameter, Page page) throws Exception;

    Page selectPageByCondition(Object parameter, Page page, DBIdentifier dbIdentifier) throws Exception;

    Page selectPageByCondition(Object parameter, Page page, String statement) throws Exception;

    Page selectPageByCondition(Object parameter, Page page, String statement, DBIdentifier dbIdentifier) throws Exception;
}
