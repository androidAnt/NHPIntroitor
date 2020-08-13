package com.bluebird.module.admin.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.exception.SystemException;
import com.bluebird.module.admin.model.GhMenuManage;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.admin.service.GhMenuManageService;
import com.bluebird.module.system.model.SysOrg;
import com.bluebird.module.system.model.SysUser;

@Service
public class GhMenuManageServiceImpl extends BaseServiceImpl implements GhMenuManageService{

	@Resource
	private FileUploadService fileUploadService;
	
	  @Override
	    public List<GhMenuManage> getAllMenu() throws Exception {
		  Map<String, Object> map = new HashMap<>();
		  map.put("msg", "查询失败");
		  List<GhMenuManage> ghMenuManageList =dbManage.selectListByCondition(map);
		  return ghMenuManageList;
	    }
	  
	  @Override
	  public Map<String, Object> updateMenu(GhMenuManage ghMenuManage) throws Exception{
		  	Map<String, Object> maps = new HashMap<>();
		  	
		  	if(StringUtils.isNotEmpty(ghMenuManage.getImgUuid())){
		  		fileUploadService.saveFile(ghMenuManage.getImgUuid(),ghMenuManage.getImgUuid(),"菜单图标附件");
		  	}
		  	
	        // 添加主键id
			maps.put("contentTypeId", ghMenuManage.getMenuId().split("_")[0]);
		    // 添加错误信息
			maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
			maps.put("msg","修改失败，请重试");
			if (updateSelective(ghMenuManage)) {
				maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
				maps.put("msg", "修改成功");
			}
			return maps;
	  }
}
