package com.bluebird.module.admin.service;

import java.util.List;
import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.framework.base.Page;
import com.bluebird.module.admin.model.TbPolicies;


public interface TbPoliciesService extends BaseService{
	/**
	 * 保存政策法规
	 */
	Map<String, Object> save(TbPolicies tbPolicies) throws Exception;
	
	/**
	 * 删除政策法规
	 * @param deviceId
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> delContentTypeById(String policiesId) throws Exception;
	
	/**
	 * 修改政策法规
	 * @param device
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> edit(TbPolicies tbPolicies) throws Exception;
	
	List<TbPolicies> getAppListByCondition(Map map) throws Exception;
	
	Page getAppListByCondition(Map map,Page page) throws Exception;
}
