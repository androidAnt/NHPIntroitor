package com.bluebird.module.admin.service;

import java.util.List;
import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.admin.model.Device;
import com.bluebird.module.admin.model.GhContentManage;
import com.bluebird.module.admin.model.GhContentType;
import com.bluebird.module.admin.model.SysFile;

/**
 * 内容分类管理
 * @author huatek-pc
 *
 */
public interface GhContentManageService extends BaseService {
	
	Map<String, Object> deleteContentManage(String contentId) throws Exception;
	
	Map<String, Object> revokeContentTypeById(String contentTypeId) throws Exception;
	
	Map<String, Object> saveContent(GhContentManage ghContentManage) throws Exception;
	
	List<SysFile> getContentImgFile();
}
