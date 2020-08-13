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
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.Device;
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
@RequestMapping("admin/contentType")
public class GhContentTypeCtl extends BaseCtl{

//	菜单service
	@Resource
	private GhMenuManageService ghMenuManageService;
	//内容分类service
	@Resource
	private GhContentTypeService ghContentTypeService;
	
	@Resource
	private GhContentManageService ghContentManageService;
	
	@Resource
	private SysDicService sysDicService;
	
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
	@RequiresPermissions("gh_content_type")   // 用于表明当前用户需是经过认证的用户
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
		model.put("page",ghContentTypeService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null))); 
		GhContentType ghContentType = new GhContentType();
		BeanUtils.populate(ghContentType, searchParams);
		model.put("ghContentType", ghContentType);
		model.put("menuList", ghMenuManageService.getAllMenu());
        model.put("contentTypeList", sysDicService.getCacheDicByType("contentType"));
		    } catch (Exception e) {
		    	 // 打印日志
				logger.error("查询分页异常"+e.getMessage());
		    	Map<String, Object> maps= new HashMap<String, Object>();
		    	maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		    	maps.put("msg", "系统繁忙，请稍后再试");
		    	model.put("msg", JSON.toJSONString(maps));
			}
		return "admin/contentType/index";
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
        	Map<String, Object> paramMap = new HashMap<>();
            paramMap.put("contentType", "1");
        	
        	model.put("pList", ghContentTypeService.getListByCondition(paramMap));
            model.put("menuList", ghMenuManageService.getAllMenu());
            model.put("contentTypeList", sysDicService.getCacheDicByType("contentType"));
            model.put("articleTypeList", sysDicService.getCacheDicByType("articleType"));
            model.put("weChartBan", sysDicService.getCacheDicByType("wechart_banner"));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
            logger.error("跳转到添加页面异常：" + e.getMessage());
        }
        return "admin/contentType/add";
    }	
    
	/**
	 * 添加内容分类
	 * 
	 * @param model model容器
	 * @param redirectAttributes 重定向
	 */
    @RequiresPermissions("gh_content_type")
	@RequestMapping("doAdd")
	public String doAdd(GhContentType ghContentType,ModelMap model, RedirectAttributes redirectAttributes){
		try {
			SysUser sysUser = getSysUser();
			ghContentType.setContentTypeCreateUser(sysUser.getRealName());
			
			//所属菜单
			if(StringUtils.isNotEmpty(ghContentType.getContentTypePid())){
				ghContentType.setContentType("2");
				Map<String,Object> maps =new HashMap<String,Object>();
	       		maps.put("contentTypeId", ghContentType.getContentTypePid());
	        	GhContentType ghContentType1 = (GhContentType)ghContentTypeService.getByCondition(maps);
	        	ghContentType.setMenuId(ghContentType1.getMenuId());
			}
			
			Map<String, Object> maps = ghContentTypeService.save(ghContentType); 
			if (!maps.get("status").toString().equals("0")) {
				return "redirect:/admin/contentType";
			}
			redirectAttributes.addFlashAttribute("msg",JSON.toJSONString(maps));
		} catch (Exception e) {
			Map<String, Object> maps = new HashMap<String, Object>();
			maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
			maps.put("msg", "包含非法数据");
			redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(maps));
	        redirectAttributes.addFlashAttribute("ghContentType", ghContentType);
		}
		return "redirect:/admin/contentType";
	}
    
    /**
     * 删除内容分类
     * @param deviceId
     * @param backUrl
     * @param model
     * @return
     */
    @RequiresPermissions("gh_content_type_delete")
	 @RequestMapping("delete")
	 public String delete(String contentTypeId,String backUrl,ModelMap model){
		 Map<String, Object> maps = new HashMap<String, Object>();
		 maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		 model.put("paramMap", paramUnits(backUrl));
		  try {
			  // 调方法
	      maps =  ghContentTypeService.delContentTypeById(contentTypeId);
		} catch (Exception e) {
	        maps.put("msg", "系统繁忙，请稍后再试");
		}
		 model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
		 return  "redirect:/admin/contentType";
	 }
    
   /**
    * 查看详情
    * @param deviceId
    * @param backUrl
    * @param model
    * @return
    */
    @RequiresPermissions("gh_content_type_info")
	@RequestMapping("getInfo")
	public String getInfo(String contentTypeId, String backUrl, ModelMap model){
    	Map<String,Object> maps =new HashMap<String,Object>();
		try {
			maps.put("contentTypeId", contentTypeId);
			GhContentType ghContentType = (GhContentType)ghContentTypeService.getByCondition(maps);
			
			Map<String, Object> paramMap = new HashMap<>();
            paramMap.put("contentType", "1");
			
            if(StringUtils.isNotEmpty(ghContentType.getLogoImgUuid())){
				 maps.put("uuid", ghContentType.getLogoImgUuid());
				 List<SysFile> logoImgList = fileUploadService.getListByCondition(maps);
				 ghContentType.setLogoImgList(logoImgList);
			 }
            
            if(StringUtils.isNotEmpty(ghContentType.getLogoImg1Uuid())){
				 maps.put("uuid", ghContentType.getLogoImg1Uuid());
				 List<SysFile> logoImg1List = fileUploadService.getListByCondition(maps);
				 ghContentType.setLogoImg2List(logoImg1List);
			 }
            
            if(StringUtils.isNotEmpty(ghContentType.getBackgroundImgUuid())){
				 maps.put("uuid", ghContentType.getBackgroundImgUuid());
				 List<SysFile> backgroundImgList = fileUploadService.getListByCondition(maps);
				 ghContentType.setBackgroundImgList(backgroundImgList);
			 }
            
			model.put("pList", ghContentTypeService.getListByCondition(paramMap));
			model.put("menuList", ghMenuManageService.getAllMenu());
            model.put("contentTypeList", sysDicService.getCacheDicByType("contentType"));
            model.put("articleTypeList", sysDicService.getCacheDicByType("articleType"));
            model.put("weChartBan", sysDicService.getCacheDicByType("wechart_banner"));
			model.put("ghContentType", ghContentType);
			model.put("paramMap", paramUnits(backUrl));
		} catch (Exception e) {
			maps.put("msg", "系统繁忙，请稍后再试");
		}
		return "admin/contentType/info";
	}
    
    /**
     * 跳转到修改界面
     * @param contentTypeId
     * @param backUrl
     * @param model
     * @return
     */
    @RequiresPermissions("gh_content_type_edit")
   	@RequestMapping("toEdit")
   	public String toEdit(String contentTypeId, String backUrl, ModelMap model){
       	Map<String,Object> maps =new HashMap<String,Object>();
   		try {
   			maps.put("contentTypeId", contentTypeId);
   			GhContentType ghContentType = (GhContentType)ghContentTypeService.getByCondition(maps);
   			
   		 if(StringUtils.isNotEmpty(ghContentType.getLogoImgUuid())){
			 maps.put("uuid", ghContentType.getLogoImgUuid());
			 List<SysFile> logoImgList = fileUploadService.getListByCondition(maps);
			 ghContentType.setLogoImgList(logoImgList);
		 }
        
        if(StringUtils.isNotEmpty(ghContentType.getLogoImg1Uuid())){
			 maps.put("uuid", ghContentType.getLogoImg1Uuid());
			 List<SysFile> logoImg1List = fileUploadService.getListByCondition(maps);
			 ghContentType.setLogoImg2List(logoImg1List);
		 }
        
        if(StringUtils.isNotEmpty(ghContentType.getBackgroundImgUuid())){
			 maps.put("uuid", ghContentType.getBackgroundImgUuid());
			 List<SysFile> backgroundImgList = fileUploadService.getListByCondition(maps);
			 ghContentType.setBackgroundImgList(backgroundImgList);
		 }
   			
   			Map<String, Object> paramMap = new HashMap<>();
            paramMap.put("contentType", "1");
   			
   			model.put("pList", ghContentTypeService.getListByCondition(paramMap));
   			model.put("menuList", ghMenuManageService.getAllMenu());
   			model.put("contentTypeList", sysDicService.getCacheDicByType("contentType"));
   			model.put("articleTypeList", sysDicService.getCacheDicByType("articleType"));
   			model.put("weChartBan", sysDicService.getCacheDicByType("wechart_banner"));
   			model.put("ghContentType", ghContentType);
   			model.put("paramMap", paramUnits(backUrl));
   		} catch (Exception e) {
   			maps.put("msg", "系统繁忙，请稍后再试");
   		}
   		return "admin/contentType/edit";
   	}
    
    /**
     * 执行修改
     * @param contentTypeId
     * @param backUrl
     * @param model
     * @return
     */
    @RequiresPermissions("gh_content_type_edit")
    @RequestMapping(value = "doEdit")
    public String doEdit(GhContentType ghContentType, String backUrl, ModelMap model) {
    	ghContentType.setDeleteFlag("0");
        model.put("paramMap", paramUnits(backUrl));
        try {
            model.put("paramMsg", JSON.toJSONString(ghContentTypeService.edit(ghContentType)).replace("\"", "'"));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            model.put("paramMsg", JSON.toJSONString(map).replace("\"", "'"));
        }
        return "redirect:/admin/contentType";
    }
    
	@RequestMapping(value = "findMenuById", method = {RequestMethod.POST})
	@ResponseBody
	public Map<String, Object> findMenuById(String contentTypePid) throws Exception{
		
		Map<String,Object> returnMap =new HashMap<String,Object>();
		
		Map<String,Object> maps =new HashMap<String,Object>();
   		maps.put("contentTypeId", contentTypePid);
   		GhContentType ghContentType = (GhContentType)ghContentTypeService.getByCondition(maps);
		
   		if(ghContentType!=null){
   			returnMap.put("status", "1");
   			returnMap.put("menuId", ghContentType.getMenuId());
   			returnMap.put("articleType", ghContentType.getArticleType());
   		}else{
   			returnMap.put("status", "0");
   		}
		return returnMap;
	}
	
	@RequestMapping(value = "getIsContent", method = {RequestMethod.POST})
	@ResponseBody
	public Map<String, Object> getIsContent(String contentTypePid) throws Exception{
		
		Map<String,Object> returnMap =new HashMap<String,Object>();
		
		Map<String,Object> maps =new HashMap<String,Object>();
   		maps.put("belongContentType", contentTypePid);
   		List<GhContentManage> contentList = ghContentManageService.getListByCondition(maps);
		
   		if(contentList.size()>0){
   			returnMap.put("status", "1");
   		}else{
   			returnMap.put("status", "0");
   		}
		return returnMap;
	}
    
}
