package com.bluebird.module.admin.service;

import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.admin.model.TbDataDownload;

public interface TbDataDownloadService extends BaseService{
	
	/**
	 * 保存资料下载
	 */
	Map<String, Object> save(TbDataDownload tbDataDownload) throws Exception;
	
	/**
	 * 删除资料下载
	 * @param deviceId
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> delContentTypeById(String fileId) throws Exception;
	
	/**
	 * 修改资料下载
	 * @param device
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> edit(TbDataDownload tbDataDownload) throws Exception;


}
