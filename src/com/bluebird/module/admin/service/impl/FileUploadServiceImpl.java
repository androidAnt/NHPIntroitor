package com.bluebird.module.admin.service.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bluebird.components.common.FileUtils;
import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.FileMsg;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.system.model.SysUser;

@Service
public class FileUploadServiceImpl extends BaseServiceImpl implements FileUploadService {
	
	@LogAspect(desc="附件上传")
	@Override
	public FileMsg saveFile(MultipartFile file,SysUser sysUser) throws UnsupportedEncodingException{
			String dirPath = SystemConstant.FILEUPLOAD_PATH; // 获取文件上传路径
			Calendar calendar = Calendar.getInstance(); // 获取年月日
			dirPath = dirPath+calendar.get(Calendar.YEAR)+File.separator+calendar.get(Calendar.MONTH+1)+File.separator+calendar.get(Calendar.DATE); //配置文件上传路径
			String fileName = file.getOriginalFilename(); // 获取真实文件名
			String type = FileUtils.getFileExtension(fileName); // 获取文件类型  jpg
			
			File dir = new File(dirPath); //  /opt/resource/jjbgfiles/excelDocument/2018/10/28
		    InputStream in = null;
		    OutputStream out = null;
		    try {
		          	String attachment = SysUtil.GetUUID();
		            if (!dir.exists())
		                 dir.mkdirs();
		              String name = attachment+"."+type; //拼接虚拟名称
		                File serverFile = new File(dir.getAbsolutePath()+File.separator+name);//拼接文件名
		                in = file.getInputStream();
		                out = new FileOutputStream(serverFile);
		                byte[] b = new byte[1024];
		                int len = 0;
		                while ((len = in.read(b)) > 0) {
		                    out.write(b, 0, len);
		                }
		                out.close();
		                in.close();
		                
		                String fileuploadRootDir = SystemConstant.FILEUPLOAD_root_PATH; // /opt/resource/jjbgfiles/jjbgfiles/
		                String absolutePath = serverFile.getAbsolutePath();
		                absolutePath = absolutePath.replace("\\", "/");
		                String filePath =  absolutePath.substring(fileuploadRootDir.length());
		               
		                SysFile sysFile = new SysFile();
		                sysFile.setFileName(name);
		                sysFile.setName(file.getOriginalFilename());
		                sysFile.setFileSize(FileUtils.getFileNameSize(absolutePath));
		                sysFile.setFileType(type);
		                sysFile.setFileId(attachment);
		                sysFile.setUrl(filePath);
		                sysFile.setCreatUser(sysUser.getSuId());
		                sysFile.setCreatDate(TimeHelper.getLocatlTime());
		                sysFile.setDeleteFlag("0");
		                
		                saveSelective(sysFile);
		                
		                List<SysFile> files = new ArrayList<SysFile>();
		                files.add(sysFile);
		                FileMsg fileMsg = new FileMsg();
		                fileMsg.setFiles(files);
		              
		                return fileMsg;
		            } catch (Exception e) {
		            	
		            	e.printStackTrace();
		            	
		            	SysFile sysFile = new SysFile();
		            	sysFile.setFileName(file.getOriginalFilename());
//		                fileMeta.setUrl(dirPath + File.separator + file.getOriginalFilename());
		                List<SysFile> files = new ArrayList<SysFile>();
		                files.add(sysFile);
		                FileMsg fileMsg = new FileMsg();
		                fileMsg.setFiles(files);
		                return fileMsg;
		            } finally {
		                if (out != null) {
		                    try {
		                    	out.flush();
								out.close();
							} catch (IOException e) {
							}
		                    out = null;
		                }
		                if (in != null) {
		                    try {
								in.close();
							} catch (IOException e) {
							}
		                    in = null;
		                }
		            }
		        }

	@Override
	public void updateBatech(List<SysFile> list){
		try{
			updateBatech(list);
		}catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	@Override
	public Boolean deleteFileByUuid(String uuid) throws Exception{
//		Map<String,Object> map = new HashMap<String, Object>();
		return dbManage.delete(uuid);
	}
	
	@Override
	public void saveFile(String files,String fileUuid,String fileSource){
		Map<String, Object> maps = new HashMap<>();
		String[] split = files.split(",");
    	for(String fileId:split) {
    		SysFile file = new SysFile();
    		file.setUuid(fileUuid);
    		file.setFileId(fileId);
    		file.setFileSource(fileSource);
    		try{
    			updateSelective(file);
    		}catch(Exception e){
    			e.printStackTrace();
    		}
    	}
	}
}
