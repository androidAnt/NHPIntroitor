package com.bluebird.module.admin.ctl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.Servlets;
import com.bluebird.components.common.StringUtil;
import com.bluebird.components.common.SysUtil;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.GhContentManage;
import com.bluebird.module.admin.model.GhContentType;
import com.bluebird.module.admin.model.GhMenuManage;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.admin.service.GhContentManageService;
import com.bluebird.module.admin.service.GhContentTypeService;
import com.bluebird.module.admin.service.GhMenuManageService;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysDicService;

@Controller
@RequestMapping("admin/content")
public class GhContentManageCtl extends BaseCtl{

	@Resource
	private GhContentTypeService ghContentTypeService;
	
	@Resource
	private SysDicService sysDicService;
	
	@Resource
	private GhContentManageService ghContentManageService;
	
	@Resource
	private FileUploadService fileUploadService;
	
	/**
	 * 菜单列表查询
	 * @param pageNO
	 * @param pageSize
	 * @param msg
	 * @param model
	 * @param request
	 * @return
	 */
	@RequiresPermissions("gh_content")   // 用于表明当前用户需是经过认证的用户
	@RequestMapping(value = "")
	public String toIndex(   
			@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="15") Integer pageSize,
			String msg,ModelMap model, HttpServletRequest request){
		    try {
		    	if (StringUtils.isNotEmpty(msg)) {
					model.put("msg", msg);
		    	}
		Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
		model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));	
		model.put("page",ghContentManageService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null))); 
		model.put("contentPublic", sysDicService.getCacheDicByType("contentPublic"));
		GhContentManage ghContentManage = new GhContentManage();
		BeanUtils.populate(ghContentManage, searchParams);
		model.put("ghContentManage", ghContentManage);
		    } catch (Exception e) {
				logger.error("查询分页异常"+e.getMessage());
		    	Map<String, Object> maps= new HashMap<String, Object>();
		    	maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		    	maps.put("msg", "系统繁忙，请稍后再试");
		    	model.put("msg", JSON.toJSONString(maps));
			}
		return "admin/contentManage/contentIndex";
	}
	
	/**
	 * 跳转到添加页面
	 * @param backUrl
	 * @param model
	 * @return
	 */
    @RequiresPermissions("gh_content_type")
    @RequestMapping(value = "toadd")
    public String toAdd(String backUrl, ModelMap model) {
        model.put("backUrl", backUrl);
        model.put("paramMap", paramUnits(backUrl));
        try {
            model.put("contentSourceList", sysDicService.getCacheDicByType("contentSource"));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
            logger.error("跳转到添加页面异常：" + e.getMessage());
        }
        return "admin/contentManage/contentAdd";
    }	
    
    /**
     * 选择内容分类弹框
     * @param model
     * @param pageNO
     * @param pageSize
     * @param request
     * @return
     */
    @RequiresPermissions("gh_content")
    @RequestMapping(value = "selectContentTypeDialog")
    public String orgDialog(ModelMap model,
    		@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
    		HttpServletRequest request) {
        try {
        	Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
        	searchParams.put("contentType", "2");
        	model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));
    		model.put("page",ghContentTypeService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null)));
        } catch (Exception e) {
            logger.error("跳转到机构管理首页并获取机构列表异常:"+e.getMessage());
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
        }
        return "iframe/selectContentType";
    }
	/**
	 * 添加内容分类
	 * 
	 * @param model model容器
	 * @param redirectAttributes 重定向
	 */
    @RequiresPermissions("gh_content_add")
	@RequestMapping("doAdd")
	public String doAdd(GhContentManage ghContentManage,ModelMap model, RedirectAttributes redirectAttributes){
		try {
			SysUser sysUser = getSysUser();
			ghContentManage.setCreatUser(sysUser.getRealName());
			ghContentManage.setOrgId(sysUser.getOrgId());
			
			Map<String, Object> maps = ghContentManageService.saveContent(ghContentManage); 
			if (!maps.get("status").toString().equals("0")) {
				return "redirect:/admin/content";
			}
			redirectAttributes.addFlashAttribute("msg",JSON.toJSONString(maps));
		} catch (Exception e) {
			Map<String, Object> maps = new HashMap<String, Object>();
			maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
			maps.put("msg", "包含非法数据");
			redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(maps));
		}
		return "redirect:/admin/content";
	}
    
    /**
     * 删除内容分类
     * @param deviceId
     * @param backUrl
     * @param model
     * @return
     */
    @RequiresPermissions("gh_content_delete")
	 @RequestMapping("delete")
	 public String delete(String contentId,String backUrl,ModelMap model){
		 Map<String, Object> maps = new HashMap<String, Object>();
		 maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		 model.put("paramMap", paramUnits(backUrl));
		  try {
			  // 调方法
	      maps =  ghContentManageService.deleteContentManage(contentId);
		} catch (Exception e) {
	        maps.put("msg", "系统繁忙，请稍后再试");
		}
		 model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
		 return  "redirect:/admin/content";
	 }
    
    @RequiresPermissions("gh_content_revoke")
	 @RequestMapping("revokeContent")
	 public String revokeContent(String contentId,String backUrl,ModelMap model){
		 Map<String, Object> maps = new HashMap<String, Object>();
		 maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		 model.put("paramMap", paramUnits(backUrl));
		  try {
			  // 调方法
			  maps =  ghContentManageService.revokeContentTypeById(contentId);
		} catch (Exception e) {
	        maps.put("msg", "系统繁忙，请稍后再试");
		}
		 model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
		 return  "redirect:/admin/content";
	 }
    
   /**
    * 查看详情
    * @param deviceId
    * @param backUrl
    * @param model
    * @return
    */
    @RequiresPermissions("gh_content_info")
	@RequestMapping("getContentInfo")
	public String getInfo(String contentId, ModelMap model){
    	Map<String,Object> maps =new HashMap<String,Object>();
		try {
			maps.put("contentId", contentId);
			GhContentManage ghContentManage = (GhContentManage)ghContentManageService.getByCondition(maps);
			 model.put("contentSourceList", sysDicService.getCacheDicByType("contentSource"));
			//获取附件列表
			 if(("2").equals(ghContentManage.getContentSource())){
				 if(StringUtils.isNotEmpty(ghContentManage.getFileUuid())){
					 maps.put("uuid", ghContentManage.getFileUuid());
					 List<SysFile> fileList = fileUploadService.getListByCondition(maps);
					 ghContentManage.setFileList(fileList);
				 }
			 }
			 
			 if(StringUtils.isNotEmpty(ghContentManage.getImgFileUuid())){
				 maps.put("uuid", ghContentManage.getImgFileUuid());
				 List<SysFile> imgFileList = fileUploadService.getListByCondition(maps);
				 ghContentManage.setImgFileList(imgFileList);
			 }
			 
			model.put("articleTypeList", sysDicService.getCacheDicByType("articleType"));
			model.put("ghContent", ghContentManage);
		} catch (Exception e) {
			e.printStackTrace();
			maps.put("msg", "系统繁忙，请稍后再试");
		}
		return "admin/contentManage/contentInfo";
	}
    
    /**
     * 跳转到修改界面
     * @param contentTypeId
     * @param backUrl
     * @param model
     * @return
     */
    @RequiresPermissions("gh_content_edit")
   	@RequestMapping("toEditContent")
   	public String toEditContent(String contentId, String backUrl, ModelMap model){
       	Map<String,Object> maps =new HashMap<String,Object>();
   		try {
   			maps.put("contentId", contentId);
   			GhContentManage ghContentManage = (GhContentManage)ghContentManageService.getByCondition(maps);
   		    model.put("contentSourceList", sysDicService.getCacheDicByType("contentSource"));
	   		 if(("2").equals(ghContentManage.getContentSource())){
				 if(StringUtils.isNotEmpty(ghContentManage.getFileUuid())){
					 maps.put("uuid", ghContentManage.getFileUuid());
					 List<SysFile> fileList = fileUploadService.getListByCondition(maps);
					 ghContentManage.setFileList(fileList);
				 }
			 }
	   		 if(StringUtils.isNotEmpty(ghContentManage.getImgFileUuid())){
				 maps.put("uuid", ghContentManage.getImgFileUuid());
				 List<SysFile> imgFileList = fileUploadService.getListByCondition(maps);
				 ghContentManage.setImgFileList(imgFileList);
			 }
	   		model.put("ghContent", ghContentManage);
   		} catch (Exception e) {
   			maps.put("msg", "系统繁忙，请稍后再试");
   		}
   		return "admin/contentManage/contentEdit";
   	}
    
    /**
     * 执行修改
     * @param contentTypeId
     * @param backUrl
     * @param model
     * @return
     */
    @RequiresPermissions("gh_content_edit")
    @RequestMapping(value = "doEdit")
    public String doEdit(GhContentManage ghContentManage, String backUrl, ModelMap model) {
        model.put("paramMap", paramUnits(backUrl));
        try {
        	 if("2".equals(ghContentManage.getContentSource())){
        		 ghContentManage.setContentDetail("");
        		 ghContentManage.setContentUrl("");
        		 
        		 if(StringUtils.isNotEmpty(ghContentManage.getFiles())){
        			 if(StringUtils.isNotEmpty(ghContentManage.getFileUuid())){
        				 fileUploadService.saveFile(ghContentManage.getFiles(),ghContentManage.getFileUuid(),"内容发布附件");
        			 }else{
        				 String getUUID = SysUtil.GetUUID();
        				 fileUploadService.saveFile(ghContentManage.getFiles(),getUUID,"内容发布附件");
        				 ghContentManage.setFileUuid(getUUID);
        			 }
        		 }
 	        }else if("1".equals(ghContentManage.getContentSource())){
 	        	//自行编辑 删除附件
 	        	ghContentManage.setContentUrl("");
 	        	ghContentManage.setFileUuid("");
 	        }else{
 	        	//url 删除附件
 	        	ghContentManage.setContentDetail("");
 	        	ghContentManage.setFileUuid("");
 	        }
        	 
        	 if(StringUtils.isNotEmpty(ghContentManage.getImgFiles())){
        		 if(StringUtils.isNotEmpty(ghContentManage.getImgFileUuid())){
    				 fileUploadService.saveFile(ghContentManage.getImgFiles(),ghContentManage.getImgFileUuid(),"内容发布图片");
    			 }else{
    				 String getUUID = SysUtil.GetUUID();
    				 fileUploadService.saveFile(ghContentManage.getImgFiles(),getUUID,"内容发布图片");
    				 ghContentManage.setImgFileUuid(getUUID);
    			 }
 	        }
        	 
            model.put("paramMsg", JSON.toJSONString(ghContentManageService.updateSelective((ghContentManage))).replace("\"", "'"));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            model.put("paramMsg", JSON.toJSONString(map).replace("\"", "'"));
        }
        return "redirect:/admin/content";
    }
    
}
