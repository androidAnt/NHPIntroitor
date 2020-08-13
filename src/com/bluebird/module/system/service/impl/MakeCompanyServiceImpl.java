package com.bluebird.module.system.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.system.model.MakeCompany;
import com.bluebird.module.system.service.MakeCompanyService;

/**
 * 生产厂家service接口实现类
 *
 * @author jiangr
 * @version 1.0
 * @date 2018年12月21日
 * @extends BaseServiceImpl
 * @implements MakeCompanyService
 */
@Service
public class MakeCompanyServiceImpl extends BaseServiceImpl implements MakeCompanyService{
    


	/**
	 * 添加生产厂家基本信息
	 */
	@LogAspect(desc="添加生产厂家基本信息")
	@Override
	public Map<String, Object> saveMakecompany(MakeCompany makeCompany) throws Exception {
        // 实例化map集合 
		Map<String, Object> maps = new HashMap<String,Object>();
        maps.put("status", SystemConstant.RETURN_STATUS_FAIL);  
        maps.put("msg", "添加失败，请重新添加");
        // 生成主键
		makeCompany.setMakeCompanyId(SysUtil.GetUUID());
		// 创建时间
        makeCompany.setCreateDate(TimeHelper.getLocatlTime());
        // 设置删除标志
		makeCompany.setDeleteFlag("0");
		// 根据条件选择性保存,判断
		if (saveSelective(makeCompany)) {
			// 改变标识和状态
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "添加成功"); 
		}
		return maps;
	}

	/**
	 * 修改生产厂家基本信息
	 */
	@LogAspect(desc="修改生产厂家基本信息")
	@Override
	public Map<String, Object> updateMakeCompany(MakeCompany makeCompany) throws Exception {
		Map<String, Object> maps = new HashMap<String, Object>();
		// 从前端获取到id，使用_分割
		maps.put("makeCompanyId", makeCompany.getMakeCompanyId().split("_")[0]);
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);  
	    maps.put("msg", "修改失败，请重试");
	    // 根据条件选择性修改，判断
		if (updateSelective(makeCompany)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "修改成功");
		}
		return maps;
	}

	/**
	 * 删除生产厂家基本信息
	 */
	@LogAspect(desc="删除生产厂家基本信息")
	@Override
	public Map<String, Object> deleteMakeCompanyById(String makeCompanyId) throws Exception {
		 Map<String, Object> maps = new HashMap<>();
         maps.put("status", SystemConstant.RETURN_STATUS_FAIL);  
 	     maps.put("msg", "删除失败，请重试");
 	     // 根据对象删除
         if (delete(makeCompanyId)) {
        	maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
 			maps.put("msg", "删除成功");
		}
		return maps;
	}

	@Override
	public List<MakeCompany> getListByCondition(Map<String, Object> paramMap) throws Exception {
		
		return this.dbManage.selectListByCondition(paramMap);
	}

	

}
