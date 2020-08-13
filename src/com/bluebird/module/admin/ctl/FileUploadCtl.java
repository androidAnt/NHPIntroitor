package com.bluebird.module.admin.ctl;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.FileDownload;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.FileMsg;
import com.bluebird.module.admin.model.GhContentType;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.system.model.SysUser;
import com.google.gson.Gson;
import com.hp.hpl.sparta.ParseException;


@Controller
@RequestMapping("admin/fileupload")
public class FileUploadCtl extends BaseCtl{
	
	@Resource
	private FileUploadService fileUploadService;
	
    /**
     * 选择内容分类弹框
     * @param model
     * @param pageNO
     * @param pageSize
     * @param request
     * @return
     */
    @RequestMapping(value = "toUploadFile")
    public String toUploadFile(ModelMap model,HttpServletRequest request) {
    	model.put("type", "/\\.(doc|docx|txt|xls|xlsx|png|jpeg|jpg|gif|pdf|zip|rar)$/i");
    	model.put("maxNum", "9");
        return "iframe/fileUpload";
    }
    
	 @RequestMapping(value = "/doUploadFile")
	 @ResponseBody
	 public String doUploadFile(@RequestParam("file") MultipartFile file,HttpServletResponse response) throws IOException, ParseException {
		 SysUser sysUser = getSysUser();
		 FileMsg fileMsg =fileUploadService.saveFile(file,sysUser);
		 response.setContentType("text/html;charset=utf-8");
		 Gson gson=new Gson();
		 String json=gson.toJson(fileMsg);
		 return json;
	 }
	 
	 @RequestMapping(value = "toUploadImg")
	    public String toUploadImg(ModelMap model,HttpServletRequest request) {
		 	model.put("type", "/\\.(png|jpeg|jpg|gif)$/i");
		 	model.put("maxNum", "1");
		 	return "iframe/fileUpload";
	  }
	 @RequestMapping(value = "toUploadImgFiles")
	    public String toUploadImgFiles(ModelMap model,HttpServletRequest request) {
		 	model.put("type", "/\\.(png|jpeg|jpg|gif)$/i");
		 	model.put("maxNum", "9");
		 	return "iframe/fileUpload";
	  }
	 
	 @RequestMapping(value = "moduleUploadImgFiles")
	    public String moduleUploadImgFiles(ModelMap model,HttpServletRequest request) {
		 	model.put("type", "/\\.(png|jpeg|jpg|gif)$/i");
		 	model.put("maxNum", "9");
		 	return "iframe/moduleUpload";
	  }
	 
		@RequestMapping(value="/downloadTem")
		public void downloadTem(HttpServletResponse response,HttpServletRequest request,String filePath,String fileName)throws Exception{
			fileName = StringEscapeUtils.unescapeHtml4(fileName);
			FileDownload.fileDownload(response,request,filePath, fileName);
		}
		
		@RequestMapping(value="/downloadById")
		public void downloadById(HttpServletResponse response,HttpServletRequest request,String fileId)throws Exception{
			Map<String,Object> maps = new HashMap();
			maps.put("fileId", fileId);
			SysFile sysFile = fileUploadService.getByCondition(maps);
			String fileName = StringEscapeUtils.unescapeHtml4(sysFile.getName());
			FileDownload.fileDownload(response,request,sysFile.getUrl(), fileName);
		}
		
		@RequestMapping(value="/downloadMemberFile")
		public void downloadMemberFile(HttpServletResponse response,HttpServletRequest request,String fileId)throws Exception{
			Map<String,Object> maps = new HashMap();
			maps.put("fileId", fileId);
			SysFile sysFile = fileUploadService.getByCondition(maps);
			FileDownload.fileDownload(response,request,sysFile.getUrl(), sysFile.getName());
		}
		
		@RequestMapping(value = "deleteFile", method = {RequestMethod.POST})
		@ResponseBody
		public Map<String, Object> deleteFile(String fileId) throws Exception{
			Map<String,Object> returnMap =new HashMap<String,Object>();
			try {
				Map<String,Object> maps =new HashMap<String,Object>();
				maps.put("fileId", fileId); 
			   	fileUploadService.delete(maps);
			   	returnMap.put("status", SystemConstant.RETURN_MSG_SUCCESS);
			}catch (Exception e) {
				e.printStackTrace();
				returnMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
			}
				return returnMap;
		}
}
