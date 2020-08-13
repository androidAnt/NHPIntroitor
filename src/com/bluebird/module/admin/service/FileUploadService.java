package com.bluebird.module.admin.service;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.admin.model.FileMsg;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.system.model.SysUser;

/**
 * 内容分类管理
 * @author huatek-pc
 *
 */
public interface FileUploadService extends BaseService {
	
	 FileMsg saveFile(MultipartFile file,SysUser sysUser) throws UnsupportedEncodingException;
	 
	 void updateBatech(List<SysFile> files);
	 
	 void saveFile(String files,String fileUuid,String fileSource);
	 
	 Boolean deleteFileByUuid(String uuid) throws Exception;
}
