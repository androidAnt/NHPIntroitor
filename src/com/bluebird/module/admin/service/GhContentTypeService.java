package com.bluebird.module.admin.service;

import java.util.List;
import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.admin.model.Device;
import com.bluebird.module.admin.model.GhContentType;

/**
 * 内容分类管理
 * @author huatek-pc
 *
 */
public interface GhContentTypeService extends BaseService {
	
	/**
	 * 保存内容分类
	 */
	Map<String, Object> save(GhContentType ghContentType) throws Exception;
	
	/**
	 * 删除内容分类
	 * @param deviceId
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> delContentTypeById(String contentTypeId) throws Exception;
	
	/**
	 * 修改内容分类
	 * @param device
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> edit(GhContentType ghContentType) throws Exception;
	
	/**
	 * 查询文章和图文类
	 * @param device
	 * @return
	 * @throws Exception
	 */
	List<Map<String,String>> selectByArticleType() throws Exception;
}
