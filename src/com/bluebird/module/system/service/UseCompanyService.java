package com.bluebird.module.system.service;

import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.system.model.UseCompany;

/**
 * 设备使用单位service接口
 *
 * @author jiangr
 * @version 1.0
 * @date 2019年01月02日 
 * @extends BaseService
 */
public interface UseCompanyService extends BaseService{

	/**
	 * 添加设备使用单位基本信息
	 */
	Map<String, Object>  save(UseCompany useCompany) throws Exception;
	
	/**
	 * 修改设备使用单位基本信息
	 */
	Map<String, Object> edit(UseCompany useCompany) throws Exception;
	
	/**
	 * 删除设备使用单位基本信息
	 */
	Map<String,Object> delUseCompanyById(String useCompanyId)throws Exception;
	
}
