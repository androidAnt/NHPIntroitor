package com.bluebird.framework.base.impl;

import com.bluebird.components.common.FileUtil;
import com.bluebird.framework.base.BaseService;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.dao.DBmanage;
import com.bluebird.framework.dao.dbutil.DBIdentifier;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * 基础service接口实现类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-9 11:29
 * @implements BaseService
 */
public class BaseServiceImpl implements BaseService {

    @Resource
    protected DBmanage dbManage;
    /***
     * 根据对象全保存
     *
     * @param record 对象
     * @return boolean
     * @throws Exception
     ***/
    @Override
    public boolean save(Object record) throws Exception {
        return dbManage.insert(record, this.getClass().getName() + ".save");
    }

    /***
     * 根据对象全保存
     *
     * @param record       对象
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     ***/
    @Override
    public boolean save(Object record, DBIdentifier dbIdentifier) throws Exception {
        return dbManage.insert(record, this.getClass().getName() + ".save", dbIdentifier);
    }

    /***
     * 根据条件选择性保存
     *
     * @param record 对象
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean saveSelective(Object record) throws Exception {
        return dbManage.insert(record, this.getClass().getName() + ".saveSelective");
    }
    


    /***
     * 根据条件选择性保存
     *
     * @param record       对象
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean saveSelective(Object record, DBIdentifier dbIdentifier) throws Exception {
        return dbManage.insert(record, this.getClass().getName() + ".saveSelective", dbIdentifier);
    }

    /***
     * 根据对象删除
     *
     * @param record 对象
     * @return boolean
     * @throws Exception
     ***/
    @Override
    public boolean delete(Object record) throws Exception {
        return dbManage.delete(record, this.getClass().getName() + ".delete");
    }

    /***
     * 根据对象删除
     *
     * @param record       对象
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     ***/
    @Override
    public boolean delete(Object record, DBIdentifier dbIdentifier) throws Exception {
        return dbManage.delete(record, this.getClass().getName() + ".delete", dbIdentifier);
    }

    /***
     * 根据条件选择性删除
     *
     * @param record 对象
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean deleteSelective(Object record) throws Exception {
        return dbManage.delete(record, this.getClass().getName() + ".deleteSelective");
    }

    /***
     * 根据条件选择性删除
     *
     * @param record       对象
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean deleteSelective(Object record, DBIdentifier dbIdentifier) throws Exception {
        return dbManage.delete(record, this.getClass().getName() + ".deleteSelective", dbIdentifier);
    }

    /***
     * 根据对象修改
     *
     * @param record 对象
     * @return boolean
     * @throws Exception
     ***/
    @Override
    public boolean update(Object record) throws Exception {
        return dbManage.update(record, this.getClass().getName() + ".update");
    }

    /***
     * 根据对象修改
     *
     * @param record       对象
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     ***/
    @Override
    public boolean update(Object record, DBIdentifier dbIdentifier) throws Exception {
        return dbManage.update(record, this.getClass().getName() + ".update", dbIdentifier);
    }

    /***
     * 根据条件选择性修改
     *
     * @param record 对象
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean updateSelective(Object record) throws Exception {
        return dbManage.update(record, this.getClass().getName() + ".updateSelective");
    }

    /***
     * 根据条件选择性修改
     *
     * @param record       对象
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean updateSelective(Object record, DBIdentifier dbIdentifier) throws Exception {
        return dbManage.update(record, this.getClass().getName() + ".updateSelective", dbIdentifier);
    }

    /***
     * 根据条件获取对象
     *
     * @param condition 条件
     * @return Object
     * @throws Exception
     */
    @Override
    public <T> T getByCondition(Object condition) throws Exception {
        return dbManage.selectByCondition(condition, this.getClass().getName() + ".getByCondition");
    }

    /***
     * 根据条件获取对象
     *
     * @param condition    条件
     * @param dbIdentifier 数据源标识
     * @return Object
     * @throws Exception
     */
    @Override
    public <T> T getByCondition(Object condition, DBIdentifier dbIdentifier) throws Exception {
        return dbManage.selectByCondition(condition, this.getClass().getName() + ".getByCondition", dbIdentifier);
    }

    /***
     * 根据条件获取记录条数
     *
     * @param condition 查询条件
     * @return Integer(没有返回0)
     * @throws Exception
     */
    @Override
    public Integer getTotalByCondition(Object condition) throws Exception {
        return dbManage.selectTotalByCondition(condition, this.getClass().getName() + ".getTotalByCondition");
    }

    /***
     * 根据条件获取记录条数
     *
     * @param condition    查询条件
     * @param dbIdentifier 数据源标识
     * @return Integer(没有返回0)
     * @throws Exception
     */
    @Override
    public Integer getTotalByCondition(Object condition, DBIdentifier dbIdentifier) throws Exception {
        return dbManage.selectTotalByCondition(condition, this.getClass().getName() + ".getTotalByCondition", dbIdentifier);
    }

    /***
     * 根据条件获取对象集合
     *
     * @param condition 条件
     * @return <E> List<E>
     * @throws Exception
     */
    @Override
    public <E> List<E> getListByCondition(Object condition) throws Exception {
        return dbManage.selectListByCondition(condition, this.getClass().getName() + ".getListByCondition");
    }

    /***
     * 根据条件获取对象集合
     *
     * @param condition    条件
     * @param dbIdentifier 数据源标识
     * @return <E> List<E>
     * @throws Exception
     */
    @Override
    public <E> List<E> getListByCondition(Object condition, DBIdentifier dbIdentifier) throws Exception {
        return dbManage.selectListByCondition(condition, this.getClass().getName() + ".getListByCondition", dbIdentifier);
    }

    /***
     * 根据条件获取分页数据
     *
     * @param condition 条件
     * @param page      分页
     * @return Page
     * @throws Exception
     */
    @Override
    public Page getListByCondition(Object condition, Page page) throws Exception {
        return dbManage.selectPageByCondition(condition, page, this.getClass().getName() + ".getListByCondition");
    }

    /***
     * 根据条件获取分页数据
     *
     * @param condition    条件
     * @param page         分页
     * @param dbIdentifier 数据源标识
     * @return Page
     * @throws Exception
     */
    @Override
    public Page getListByCondition(Object condition, Page page, DBIdentifier dbIdentifier) throws Exception {
        return dbManage.selectPageByCondition(condition, page, this.getClass().getName() + ".getListByCondition", dbIdentifier);
    }

    /***
     * 根据主键获取对象
     *
     * @param id 主键
     * @return Object
     * @throws Exception
     */
    @Override
    public <T> T getById(String id) throws Exception {
        return dbManage.selectByCondition(id, this.getClass().getName() + ".getById");
    }

    /***
     * 根据主键获取对象
     *
     * @param id           主键
     * @param dbIdentifier 数据标识
     * @return Object
     * @throws Exception
     */
    @Override
    public <T> T getById(String id, DBIdentifier dbIdentifier) throws Exception {
        return dbManage.selectByCondition(id, this.getClass().getName() + ".getById", dbIdentifier);
    }

    /**
     * 根据条件判断是否存在
     *
     * @param condition 条件
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean isExist(Object condition) throws Exception {
        return dbManage.isExist(condition, this.getClass().getName() + ".isExist");
    }

    /**
     * 根据条件判断是否存在
     *
     * @param condition    条件
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean isExist(Object condition, DBIdentifier dbIdentifier) throws Exception {
        return dbManage.isExist(condition, this.getClass().getName() + ".isExist", dbIdentifier);
    }

    /**
     * 获取服务器地址
     *
     * @param request request
     * @return String
     */
    @Override
    public String getServerPath(HttpServletRequest request) {
        //return "http://" + request.getContextPath();
        /*String port = "";
        if (request.getLocalPort() != 80) {
            port = ":" + request.getLocalPort();
        }*/
        //return "http://yimaotui.net/" + request.getContextPath();
        return SystemConstant.HTTP_SERVERNAME_PATH;
    }

    /**
     * 上传图片/文件
     *
     * @param request request
     * @return list
     * @throws IOException
     */
    public List<String> upLoadImg(HttpServletRequest request) throws IOException {
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(request.getSession().getServletContext());
        List<String> list = new ArrayList<>();
        if (multipartResolver.isMultipart(request)) {
            //String rootPath = request.getSession().getServletContext().getRealPath("");
        	String rootPath = SystemConstant.FILE_SAVE_ADDRESS;

            String filePath = "/upload/images/evaluate/";
            MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
            Iterator<String> iter = multiRequest.getFileNames();
            //InteractPostsImg postsImg;
            while (iter.hasNext()) {
                MultipartFile file = multiRequest.getFile(iter.next());
                if (file != null) {
                    list.add(FileUtil.uploadYardPic(file, rootPath, filePath));
                }
            }
            return list;
        }
        return new ArrayList<>();
    }
}
