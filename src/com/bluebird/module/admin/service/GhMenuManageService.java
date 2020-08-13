package com.bluebird.module.admin.service;

import java.util.List;
import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.admin.model.GhMenuManage;

public interface GhMenuManageService extends BaseService {
	
	public List<GhMenuManage> getAllMenu() throws Exception;
	
	Map<String, Object> updateMenu(GhMenuManage ghMenuManage) throws Exception;
}
