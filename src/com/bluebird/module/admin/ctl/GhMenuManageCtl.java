package com.bluebird.module.admin.ctl;

import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestParam;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.Servlets;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.GhContentType;
import com.bluebird.module.admin.model.GhMenuManage;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.admin.service.GhContentTypeService;
import com.bluebird.module.admin.service.GhMenuManageService;

@Controller
@RequestMapping("admin/menu")
public class GhMenuManageCtl extends BaseCtl{

//	菜单service
	@Resource
	private GhMenuManageService ghMenuManageService;	
	
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
	@RequiresPermissions("gh_menu")   // 用于表明当前用户需是经过认证的用户
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
		model.put("page",ghMenuManageService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null))); 
		  GhMenuManage ghMenuManage = new GhMenuManage();
		    BeanUtils.populate(ghMenuManage, searchParams);
		    model.put("ghMenuManage", ghMenuManage);
		    } catch (Exception e) {
		    	 // 打印日志
				logger.error("查询分页异常"+e.getMessage());
		    	Map<String, Object> maps= new HashMap<String, Object>();
		    	maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		    	maps.put("msg", "系统繁忙，请稍后再试");
		    	model.put("msg", JSON.toJSONString(maps));
			}
		return "admin/menu/index";
	}
	
	/**
	 * 跳转到修改页面
	 * @param backUrl
	 * @param model
	 * @return
	 */
	  @RequiresPermissions("gh_content_type_edit")
	   	@RequestMapping("toEdit")
	   	public String toEdit(String menuId, String backUrl, ModelMap model){
	       	Map<String,Object> maps =new HashMap<String,Object>();
	   		try {
	   			GhMenuManage ghMenuManage = ghMenuManageService.getById(menuId);
	   			if(StringUtils.isNotEmpty(ghMenuManage.getImgUuid())){
	   				maps.put("uuid", ghMenuManage.getImgUuid());
					List<SysFile> fileList = fileUploadService.getListByCondition(maps);
					model.put("fileList",fileList);
	   			}else{
	   				model.put("fileList",new ArrayList<SysFile>());
	   			}
		   		
	   			model.put("ghMenuManage",ghMenuManage);
	   			model.put("paramMap", paramUnits(backUrl));
	   		} catch (Exception e) {
	   			maps.put("msg", "系统繁忙，请稍后再试");
	   		}
	   		return "admin/menu/menuEdit";
	   	}
	
	  /**
	   * 修改菜单
	   * @param ghContentType
	   * @param backUrl
	   * @param model
	   * @return
	   */
	  @RequiresPermissions("gh_menu_edit")
	    @RequestMapping(value = "doEdit")
	    public String doEdit(GhMenuManage ghMenuManage, String backUrl, ModelMap model) {
		    Map<String,Object> maps =new HashMap<String,Object>();
	        model.put("paramMap", paramUnits(backUrl));
	        try{
	        model.put("paramMsg", JSON.toJSONString(ghMenuManageService.updateMenu(ghMenuManage)).replace("\"", "'"));
	        maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
	        maps.put("msg", "修改成功");
            model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
	        }catch (Exception e) {//修改失败重新跳转到添加页面
	        	maps.put("msg", "系统繁忙，请稍后再试");
	        }
	        return "redirect:/admin/menu";
	    }
}
