package com.bluebird.module.admin.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.Device;
import com.bluebird.module.admin.model.GhContentType;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.admin.service.GhContentTypeService;
import com.bluebird.module.system.model.SysUser;

@Service
public class GhContentTypeServiceImpl extends BaseServiceImpl implements GhContentTypeService {
	
	@Resource
	private FileUploadService fileUploadService;
	
	@LogAspect(desc="添加内容分类")
	@Override
	public Map<String, Object> save(GhContentType ghContentType) throws Exception {
        Map<String, Object> maps = new HashMap<>();
		// 添加错误信息
        maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
        maps.put("msg", "添加失败，请重试");
        // 设置主键id
        ghContentType.setContentTypeId(SysUtil.GetUUID()); 
        // 设置创建时间
        ghContentType.setContentTypeCreateDate(TimeHelper.getLocatlTime());
        // 设置删除状态
        ghContentType.setDeleteFlag("0");
        //设置系统内置为正常
        ghContentType.setSystemFlag("1");
        
        //内容类型(0:url 1:含二级 2:文章)
        if(!"2".equals(ghContentType.getContentType())){
    	   ghContentType.setArticleType("");
        }
        
        //上传logo1
        if(StringUtils.isNoneEmpty(ghContentType.getLogoImg())){
        	String logoImgUUID = SysUtil.GetUUID();
        	fileUploadService.saveFile(ghContentType.getLogoImg(),logoImgUUID,"分类logo图片");
        	ghContentType.setLogoImgUuid(logoImgUUID);
        }
        
        //上传logo2
        if(StringUtils.isNoneEmpty(ghContentType.getLogoImg1())){
        	String logoImg1UUID = SysUtil.GetUUID();
        	fileUploadService.saveFile(ghContentType.getLogoImg1(),logoImg1UUID,"分类logo1图片");
        	ghContentType.setLogoImg1Uuid(logoImg1UUID);
        }
        
        //上传背景图
        if(StringUtils.isNoneEmpty(ghContentType.getBackgroundImg())){
        	String imgUUID = SysUtil.GetUUID();
        	fileUploadService.saveFile(ghContentType.getBackgroundImg(),imgUUID,"分类背景图片");
        	ghContentType.setBackgroundImgUuid(imgUUID);
        }
        
        try{
	        if (saveSelective(ghContentType)) {
				maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
				maps.put("msg", "添加成功");
			}
        }catch(Exception e){
        	e.printStackTrace();
        }
		return maps;
	}
	
	/**
	 * 删除内容分类
	 */
	@LogAspect(desc="删除内容分类")
	@Override
	public Map<String, Object> delContentTypeById(String contentTypeId) throws Exception {
		Map<String, Object> maps = new HashMap<String,Object>();
        // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg", "删除失败，请重试");
		if(delete(contentTypeId)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "删除成功");
		}
		return maps;
	}
	
	/**
	 * 修改内容分类
	 * @param device
	 * @return
	 * @throws Exception
	 */
	@LogAspect(desc="修改检验设备信息")
	@Override
	public Map<String, Object> edit(GhContentType ghContentType) throws Exception {
      Map<String, Object> maps = new HashMap<>();
        // 添加主键id
		maps.put("contentTypeId", ghContentType.getContentTypeId().split("_")[0]);
	    // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg","修改失败，请重试");
		
		 //上传logo1
        if(StringUtils.isNotEmpty(ghContentType.getLogoImg())){
        	//删除之前的图片
        	if(StringUtils.isNotEmpty(ghContentType.getLogoImgUuid())){
        		fileUploadService.deleteFileByUuid(ghContentType.getLogoImgUuid());
            	fileUploadService.saveFile(ghContentType.getLogoImg(),ghContentType.getLogoImgUuid(),"分类logo图片");
        	}else{
        		String logoImgUUID = SysUtil.GetUUID();
            	fileUploadService.saveFile(ghContentType.getLogoImg(),logoImgUUID,"分类logo图片");
            	ghContentType.setLogoImgUuid(logoImgUUID);
        	}
        }
        
        //上传logo2
        if(StringUtils.isNotEmpty(ghContentType.getLogoImg1())){
        	if(StringUtils.isNotEmpty(ghContentType.getLogoImg1Uuid())){
	        	fileUploadService.deleteFileByUuid(ghContentType.getLogoImg1Uuid());
	        	fileUploadService.saveFile(ghContentType.getLogoImg1(),ghContentType.getLogoImg1Uuid(),"分类logo1图片");
        	}else{
        		String logoImg1UUID = SysUtil.GetUUID();
            	fileUploadService.saveFile(ghContentType.getLogoImg1(),logoImg1UUID,"分类logo1图片");
            	ghContentType.setLogoImg1Uuid(logoImg1UUID);
        	}
       }
        
        //上传背景图
        if(StringUtils.isNotEmpty(ghContentType.getBackgroundImg())){
        	if(StringUtils.isNotEmpty(ghContentType.getBackgroundImgUuid())){
		        fileUploadService.deleteFileByUuid(ghContentType.getBackgroundImgUuid());
		        fileUploadService.saveFile(ghContentType.getBackgroundImg(),ghContentType.getBackgroundImgUuid(),"分类背景图片");
        	}else{
        		String imgUUID = SysUtil.GetUUID();
            	fileUploadService.saveFile(ghContentType.getBackgroundImg(),imgUUID,"分类背景图片");
            	ghContentType.setBackgroundImgUuid(imgUUID);
        	}
        }
		
		if (updateSelective(ghContentType)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "修改成功");
		}
     
		return maps;
	}

	@Override
	public List<Map<String,String>> selectByArticleType() throws Exception {
		List<Map<String,String>> list= dbManage.selectListByCondition(new HashMap<>());
		return list; 
	}
}
