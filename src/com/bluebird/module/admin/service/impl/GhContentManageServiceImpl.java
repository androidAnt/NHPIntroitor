package com.bluebird.module.admin.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.bluebird.components.common.FileUtils;
import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.dao.DBmanage;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.Device;
import com.bluebird.module.admin.model.GhContentManage;
import com.bluebird.module.admin.model.GhContentType;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.admin.service.GhContentManageService;
import com.bluebird.module.admin.service.GhContentTypeService;
import com.bluebird.module.system.model.SysUser;

@Service
public class GhContentManageServiceImpl extends BaseServiceImpl implements GhContentManageService {
	
	@Resource
	private FileUploadService fileUploadService;
	
	@Resource
	private  DBmanage dbmanage;
	
	@LogAspect(desc="删除内容")
	@Override
	public Map<String, Object> deleteContentManage(String contentId) throws Exception{
		Map<String, Object> maps = new HashMap<String,Object>();
        // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg", "删除失败，请重试");
		if(delete(contentId)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "删除成功");
		}
		return maps;
	}
	
	@LogAspect(desc="撤回内容分类")
	@Override
	public  Map<String, Object> revokeContentTypeById(String contentId) throws Exception{
		Map<String, Object> maps = new HashMap<String,Object>();
        // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg", "撤回失败，请重试");
		if(dbManage.update(contentId)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "撤回成功");
		}
		return maps;
	}
	
	@LogAspect(desc="新增内容")
	@Override
	public Map<String, Object> saveContent(GhContentManage ghContentManage) throws Exception{
	
		 Map<String, Object> maps = new HashMap<>();
			// 添加错误信息
	        maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
	        maps.put("msg", "添加失败，请重试");
	        // 设置主键id
	        ghContentManage.setContentId(SysUtil.GetUUID()); 
	        // 设置创建时间
	        ghContentManage.setCreatDate(TimeHelper.getLocatlTime());
	        // 设置删除状态
	        ghContentManage.setDeleteFlag("0");
	        ghContentManage.setViewCount(0);
	        String fileUuid = SysUtil.GetUUID();
	        String imgUuid = SysUtil.GetUUID();
	        if("2".equals(ghContentManage.getContentSource())){
		        if(StringUtils.isNotEmpty(ghContentManage.getFiles())){
		        	fileUploadService.saveFile(ghContentManage.getFiles(),fileUuid,"内容发布附件");
		        	ghContentManage.setFileUuid(fileUuid);
		        }
	        }
	        
	        if(StringUtils.isNotEmpty(ghContentManage.getImgFiles())){
	        	fileUploadService.saveFile(ghContentManage.getImgFiles(),imgUuid,"内容发布图片");
	        	ghContentManage.setImgFileUuid(imgUuid);
	        }
	        
	        if (saveSelective(ghContentManage)) {
				maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
				maps.put("msg", "添加成功");
			}
			return maps;
	}
	

	@LogAspect(desc="查询内容图片信息")
	@Override
	public List<SysFile> getContentImgFile(){
		List<SysFile> fileList= new ArrayList<SysFile>();
		try {
			fileList = dbmanage.selectListByCondition(new HashMap<String, Object>());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return fileList;
	}
}

