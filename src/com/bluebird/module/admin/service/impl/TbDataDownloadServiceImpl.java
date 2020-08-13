package com.bluebird.module.admin.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import org.apache.commons.lang3.StringUtils;
import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.TbDataDownload;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.admin.service.TbDataDownloadService;
@Service
public class TbDataDownloadServiceImpl extends BaseServiceImpl implements TbDataDownloadService{
	
	@Resource
	private FileUploadService fileUploadService;
	
	@LogAspect(desc="添加资料下载")
	@Override
	public Map<String, Object> save(TbDataDownload tbDataDownload) throws Exception {
        Map<String, Object> maps = new HashMap<>();
		// 添加错误信息
        maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
        maps.put("msg", "添加失败，请重试");
        // 设置主键id
        tbDataDownload.setFileId(SysUtil.GetUUID()); 
        // 设置创建时间
        tbDataDownload.setCreatDate(TimeHelper.getLocatlTime());
        // 设置删除状态
        tbDataDownload.setDeleteFlag("0");
        String fileUuid = SysUtil.GetUUID();
        if(StringUtils.isNotEmpty(tbDataDownload.getFiles())){
        	fileUploadService.saveFile(tbDataDownload.getFiles(),fileUuid,"资料下载附件");
        	tbDataDownload.setFileUuid(fileUuid);
        }
        
        if (saveSelective(tbDataDownload)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "添加成功");
		}
		return maps;
	}
	
	/**
	 * 删除资料下载
	 */
	@LogAspect(desc="删除资料下载")
	@Override
	public Map<String, Object> delContentTypeById(String fileId) throws Exception {
		Map<String, Object> maps = new HashMap<String,Object>();
        // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg", "删除失败，请重试");
		if(delete(fileId)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "删除成功");
		}
		return maps;
	}
	
	/**
	 * 修改资料下载
	 * @param device
	 * @return
	 * @throws Exception
	 */
	@LogAspect(desc="修改资料下载")
	@Override
	public Map<String, Object> edit(TbDataDownload tbDataDownload) throws Exception {
      Map<String, Object> maps = new HashMap<>();
        // 添加主键id
		maps.put("contentTypeId", tbDataDownload.getFileId().split("_")[0]);
	    // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg","修改失败，请重试");
		if(StringUtils.isNotEmpty(tbDataDownload.getFiles())){
			if(StringUtils.isNotEmpty(tbDataDownload.getFileUuid())){
		        	fileUploadService.saveFile(tbDataDownload.getFiles(),tbDataDownload.getFileUuid(),"资料下载附件");
		    }else{
		    		String getUUID = SysUtil.GetUUID();
		        	fileUploadService.saveFile(tbDataDownload.getFiles(),getUUID,"资料下载附件");
		        	tbDataDownload.setFileUuid(getUUID);
		     }
		}
		if (updateSelective(tbDataDownload)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "修改成功");
		}
     
		return maps;
	}

}
