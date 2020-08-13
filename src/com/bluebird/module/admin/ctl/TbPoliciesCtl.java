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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.Servlets;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.model.TbPolicies;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.admin.service.GhMenuManageService;
import com.bluebird.module.admin.service.TbPoliciesService;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysDicService;

@Controller
@RequestMapping("admin/policies")
public class TbPoliciesCtl extends BaseCtl{
        //政策法规service
		@Resource
		private  TbPoliciesService tbPoliciesService;
	
        //菜单service
		@Resource
		private GhMenuManageService ghMenuManageService;
		
		@Resource
		private FileUploadService fileUploadService;

		@Resource
		private SysDicService sysDicService;
	/**
	 * 政策法规列表查询
	 * @param pageNO
	 * @param pageSize
	 * @param msg
	 * @param model
	 * @param request
	 * @return
	 */
	@RequiresPermissions("tb_policies")   // 用于表明当前用户需是经过认证的用户
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
	    	model.put("page",tbPoliciesService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null))); 
	    	TbPolicies tbPolicies = new TbPolicies();
	    	BeanUtils.populate(tbPolicies, searchParams);
	    	model.put("tbPolicies", tbPolicies);
	    	model.put("menuList", ghMenuManageService.getAllMenu());
	        model.put("policiesType", sysDicService.getCacheDicByType("policiesType"));
	    } catch (Exception e) {
	    	 // 打印日志
			logger.error("查询分页异常"+e.getMessage());
	    	Map<String, Object> maps= new HashMap<String, Object>();
	    	maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
	    	maps.put("msg", "系统繁忙，请稍后再试");
	    	model.put("msg", JSON.toJSONString(maps));
		}
		return "admin/policies/index";
	}
	
	/**
	 * 跳转到添加页面
	 * @param backUrl
	 * @param model
	 * @return
	 */
    @RequiresPermissions("tb_policies_add")
    @RequestMapping(value = "toadd")
    public String toAdd(String backUrl, ModelMap model) {
        try {
            model.put("menuList", ghMenuManageService.getAllMenu());
            model.put("policiesType", sysDicService.getCacheDicByType("policiesType"));
            model.put("paramMap", paramUnits(backUrl));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
            logger.error("跳转到添加页面异常：" + e.getMessage());
        }
        return "admin/policies/add";
    }	
    
    /**
	 * 添加政策法规
	 * 
	 * @param model model容器
	 * @param redirectAttributes 重定向
	 */
    @RequiresPermissions("tb_policies_add")
	@RequestMapping("doAdd")
	public String doAdd(TbPolicies tbPolicies,ModelMap model, RedirectAttributes redirectAttributes){
		try {
			SysUser sysUser = getSysUser();
			tbPolicies.setCreatUser(sysUser.getRealName());
			 // 组织id
			tbPolicies.setOrgId(sysUser.getOrgId());
			tbPoliciesService.save(tbPolicies);
		} catch (Exception e) {
			Map<String, Object> maps = new HashMap<String, Object>();
			maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
			maps.put("msg", "包含非法数据");
			redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(maps));
			redirectAttributes.addFlashAttribute("tbPolicies",tbPolicies);
		}
		return "redirect:/admin/policies";
	}
    
    /**
     * 删除政策法规
     * @param deviceId
     * @param backUrl
     * @param model
     * @return
     */
    @RequiresPermissions("tb_policies_del")
	 @RequestMapping("delete")
	 public String delete(String policiesId,String backUrl,ModelMap model){
		 Map<String, Object> maps = new HashMap<String, Object>();
		 maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		 model.put("paramMap", paramUnits(backUrl));
		  try {
			  // 调方法
	      maps =  tbPoliciesService.delContentTypeById(policiesId);
		} catch (Exception e) {
	        maps.put("msg", "系统繁忙，请稍后再试");
		}
		 model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
		 return  "redirect:/admin/policies";
	 }
    
    /**
     * 查看详情 修改页面
     * @param deviceId
     * @param backUrl
     * @param model
     * @return
     */
 	@RequestMapping("getInfo")
 	public String getInfo(String policiesId, String backUrl, Boolean disabled, ModelMap model){
     	Map<String,Object> maps =new HashMap<String,Object>();
 		try {
 			maps.put("policiesId", policiesId);
 			TbPolicies tbPolicies=(TbPolicies)tbPoliciesService.getByCondition(maps);
 			model.put("tbPolicies", tbPolicies);
 			model.put("disabled", disabled);
 			model.put("menuList", ghMenuManageService.getAllMenu());
 			model.put("paramMap", paramUnits(backUrl));
 			model.put("policiesType", sysDicService.getCacheDicByType("policiesType"));
 			if(StringUtils.isNotEmpty(tbPolicies.getFileUuid())){
 				 maps.put("uuid", tbPolicies.getFileUuid());
				 List<SysFile> fileList = fileUploadService.getListByCondition(maps);
				 tbPolicies.setFileList(fileList);
			}
 			
 			if(disabled){
 				model.put("title", "修改政策法规");
 			}else{
 				model.put("title", "政策法规详情");
 			}
 		} catch (Exception e) {
 			maps.put("msg", "系统繁忙，请稍后再试");
 		}
 		return "admin/policies/info";
 	}
     
     /**
      * 执行修改
      * @param contentTypeId
      * @param backUrl
      * @param model
      * @return
      */
     @RequiresPermissions("tb_policies_edit")
     @RequestMapping(value = "doEdit")
     public String doEdit(TbPolicies tbPolicies, String backUrl, ModelMap model) {
         model.put("paramMap", paramUnits(backUrl));
         try {
        	 model.put("paramMsg", JSON.toJSONString(tbPoliciesService.edit(tbPolicies)).replace("\"", "'"));
         } catch (Exception e) {
             Map<String, Object> map = new HashMap<String, Object>();
             map.put("status", SystemConstant.RETURN_STATUS_FAIL);
             map.put("msg", "系统繁忙,请稍后再试");
             model.put("paramMsg", JSON.toJSONString(map).replace("\"", "'"));
         }
         return "redirect:/admin/policies";
     }
     
}
