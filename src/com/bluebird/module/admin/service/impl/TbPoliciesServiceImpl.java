package com.bluebird.module.admin.service.impl;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.dao.dbutil.DBIdentifier;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.TbPolicies;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.admin.service.TbPoliciesService;

@Service
public class TbPoliciesServiceImpl extends BaseServiceImpl implements TbPoliciesService {
	
	@Resource
	private FileUploadService fileUploadService;
	
	@LogAspect(desc="添加政策法规")
	@Override
	public Map<String, Object> save(TbPolicies tbPolicies) throws Exception {
        Map<String, Object> maps = new HashMap<>();
		// 添加错误信息
        maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
        maps.put("msg", "添加失败，请重试");
        // 设置主键id
        tbPolicies.setPoliciesId(SysUtil.GetUUID()); 
        // 设置创建时间
        tbPolicies.setCreatDate(TimeHelper.getLocatlTime());
        
        String fileUuid = SysUtil.GetUUID();
        if(StringUtils.isNotEmpty(tbPolicies.getFiles())){
        	fileUploadService.saveFile(tbPolicies.getFiles(),fileUuid,"政策法规附件");
        	tbPolicies.setFileUuid(fileUuid);
        }
        
        // 设置删除状态
        tbPolicies.setDeleteFlag("0");
        if (saveSelective(tbPolicies)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "添加成功");
		}
		return maps;
	}
	
	/**
	 * 删除政策法规
	 */
	@LogAspect(desc="删除政策法规")
	@Override
	public Map<String, Object> delContentTypeById(String policiesId) throws Exception {
		Map<String, Object> maps = new HashMap<String,Object>();
        // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg", "删除失败，请重试");
		if(delete(policiesId)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "删除成功");
		}
		return maps;
	}
	
	/**
	 * 修改政策法规
	 * @param device
	 * @return
	 * @throws Exception
	 */
	@LogAspect(desc="修改政策法规")
	@Override
	public Map<String, Object> edit(TbPolicies tbPolicies) throws Exception {
      Map<String, Object> maps = new HashMap<>();
        // 添加主键id
		maps.put("contentTypeId", tbPolicies.getPoliciesId().split("_")[0]);
	    // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg","修改失败，请重试");
		
		if(StringUtils.isNotEmpty(tbPolicies.getFiles())){
			if(StringUtils.isNotEmpty(tbPolicies.getFileUuid())){
		        	fileUploadService.saveFile(tbPolicies.getFiles(),tbPolicies.getFileUuid(),"政策法规附件");
		    }else{
		    		String getUUID = SysUtil.GetUUID();
		        	fileUploadService.saveFile(tbPolicies.getFiles(),getUUID,"政策法规附件");
		        	tbPolicies.setFileUuid(getUUID);
		     }
		}
		if (updateSelective(tbPolicies)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "修改成功");
		}
     
		return maps;
	}

	@Override
	public List<TbPolicies> getAppListByCondition(Map map) throws Exception {
		return dbManage.selectListByCondition(map);
	}

	@Override
	public Page getAppListByCondition(Map map, Page page) throws Exception {
		return dbManage.selectPageByCondition(map, page);
	}


}
