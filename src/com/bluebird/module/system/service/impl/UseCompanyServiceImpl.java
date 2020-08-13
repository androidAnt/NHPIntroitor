package com.bluebird.module.system.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.system.model.UseCompany;
import com.bluebird.module.system.service.UseCompanyService;

/**
 * 设备使用单位service接口实现类
 * 
 * @author jiangr
 * @version 1.0
 * @date 2019年01月02日
 * @extends BaseServiceImpl
 * @implements UseCompanyService
 */
@Service
public class UseCompanyServiceImpl extends BaseServiceImpl implements UseCompanyService{
	
	/**
	 * 添加设备使用单位基本信息
	 */
	@LogAspect(desc = "添加设备使用单位基本信息")
	@Override
	public Map<String, Object> save(UseCompany useCompany) throws Exception {
		// 实例化map
		Map<String,Object> maps = new HashMap<String,Object>();
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg", "添加失败,请重试");
		 //生成主键id
		useCompany.setUseCompanyId(SysUtil.GetUUID());
		 //创建时间
		useCompany.setCreateDate(TimeHelper.getLocatlTime());
		// 设置删除标识
		useCompany.setDeleteFlag("0");
		if(saveSelective(useCompany)){
			// 改变标识和状态
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "添加成功");
		}
		return maps;
	}

	/**
	 * 修改设备使用单位基本信息
	 */
	@LogAspect(desc = "添加设备使用单位基本信息")
	@Override
	public Map<String, Object> edit(UseCompany useCompany) throws Exception {
		Map<String, Object> maps = new HashMap<String, Object>();
		maps.put("useCompanyId", useCompany.getUseCompanyId().split("_")[0]);
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);  
	    maps.put("msg", "修改失败，请重试");
		if (updateSelective(useCompany)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "修改成功");
		}
		return maps;
		
	}

	/**
	 * 删除设备使用单位基本信息
	 */
	@LogAspect(desc = "删除设备使用单位基本信息")
	@Override
	public Map<String, Object> delUseCompanyById(String useCompanyId) throws Exception {
		 Map<String, Object> maps = new HashMap<>();
         maps.put("status", SystemConstant.RETURN_STATUS_FAIL);  
 	     maps.put("msg", "删除失败，请重试");
         if (delete(useCompanyId)) {
        	maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
 			maps.put("msg", "删除成功");
		}
		return maps;

	}
}
