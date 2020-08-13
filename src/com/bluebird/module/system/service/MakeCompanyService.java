package com.bluebird.module.system.service;

import java.util.List;
import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.system.model.MakeCompany;
import com.bluebird.module.system.model.SysUser;

/**
 * 生产厂家service接口
 *
 * @author jiangr
 * @version 1.0
 * @date 2018年12月21日 
 * @extends BaseService
 */
public interface MakeCompanyService extends BaseService{
   
	/**
	 * 添加生产厂家基本信息
	 */
	Map<String, Object>  saveMakecompany(MakeCompany makeCompany) throws Exception;
	
	/**
	 * 修改生产厂家基本信息
	 */
	Map<String, Object> updateMakeCompany(MakeCompany makeCompany) throws Exception;
	
	/**
	 * 删除生产厂家基本信息
	 */
	Map<String,Object> deleteMakeCompanyById(String makeCompanyId)throws Exception;
	
	 /**
     * 查询所有用户的生产厂家
     * @param paramMap
     * @return
     * @throws Exception
     */
    List<MakeCompany> getListByCondition(Map<String, Object> paramMap) throws Exception;
    
	/* List<MakeCompany> getallMakeCompanies(); */
}
