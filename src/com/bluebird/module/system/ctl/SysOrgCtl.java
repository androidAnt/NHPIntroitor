package com.bluebird.module.system.ctl;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.Servlets;
import com.bluebird.components.common.StringUtil;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.model.SysOrg;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysOrgService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 机构管理Ctl
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-11 14:59
 * @extends BaseCtl
 */
@Controller
@RequestMapping(value = "/system/org")
public class SysOrgCtl extends BaseCtl {

    @Resource
    private SysOrgService sysOrgService;

    /**
     * 跳转到机构管理首页并获取机构列表
     *
     * @param model model
     * @return String
     */
    @RequiresPermissions("system_org")
    @RequestMapping(value = "")
    public String init(ModelMap model,
    		@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="15") Integer pageSize,
			String msg, HttpServletRequest request
    		) {
        try {
        	Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
        	
        	String pId = (String) searchParams.get("pId");
        	if(StringUtil.isEmpty(pId)){
        		searchParams.put("search_pId", getSysUser().getOrgId());
        	}
    		model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));
    		model.put("page",sysOrgService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null)));
        } catch (Exception e) {
            logger.error("跳转到机构管理首页并获取机构列表异常:"+e.getMessage());
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
        }
        return "/system/org/index";
    }
    
    /**
     * ifream跳转
     * 
     * @param model
     * @param upId
     * @return
     */
    @RequiresPermissions("system_org")
    @RequestMapping(value = "orgList")
    public String orgList(ModelMap model,
    		@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="15") Integer pageSize,String pId,String orgName,
			String msg, HttpServletRequest request) {
        try {
        	Map<String, Object> searchParams = new HashMap();
        	if(StringUtil.isNotEmpty(pId)){
        		searchParams.put("pId", pId);
        	}else{
        		searchParams.put("pId", getSysUser().getOrgId());
        	}
        	if(StringUtil.isNotEmpty(orgName)){
        		searchParams.put("orgName", orgName);
        	}
        	model.put("page",sysOrgService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null)));
        } catch (Exception e) {
            logger.error("跳转到机构管理首页并获取机构列表异常:"+e.getMessage());
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
        }
        return "iframe/orgList";
    }
    
	/**
	 * 跳转添加页面
	 * @param backUrl
	 * @param model
	 * @return
	 */
    @RequiresPermissions("system_org_add")
    @RequestMapping(value = "toAddOrg")
    public String toAddOrg(String backUrl, ModelMap model,SysOrg sysOrg) {
        try {
            model.put("pOrg", sysOrg);
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
            logger.error("跳转到添加页面异常：" + e.getMessage());
        }
        return "iframe/orgAdd"; 
    }	
    
    /**
     * 添加组织机构
     *
     * @param org                机构对象
     * @param redirectAttributes 临时存储
     * @return String
     */

    @RequiresPermissions("system_org_add")
    @RequestMapping(value = "add")
    public String saveOrg(SysOrg org, RedirectAttributes redirectAttributes) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
        	
        	SysOrg pOrg = sysOrgService.getById(org.getpId());
        	org.setLevels(pOrg.getLevels()+1);
        	
            sysOrgService.saveOrg(org);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "添加成功");
        } catch (Exception e) {
            logger.error("添加组织机构异常:"+e.getMessage());
            if(e.getMessage().length()<20){
                resultMap.put("msg", e.getMessage());
            }
        }
        redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(resultMap));
        return "redirect:/system/org/orgList";
    }

    /**
     * 跳转到修改页面
     * @param backUrl
     * @param model
     * @param sysOrg
     * @return
     */
    @RequiresPermissions("system_org_edit")
    @RequestMapping(value = "toEditOrg")
    public String toEditOrg(String backUrl, ModelMap model,SysOrg sysOrg) {
        try {
            model.put("sysOrg", sysOrgService.getById(sysOrg.getpId()));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
            logger.error("跳转到修改页面异常：" + e.getMessage());
        }
        return "iframe/orgEdit"; 
    }	
    
    /**
     * 修改组织机构
     *
     * @param org                机构对象
     * @param redirectAttributes 临时存储
     * @return String
     */

    @RequiresPermissions("system_org_edit")
    @RequestMapping(value = "update")
    public String updateOrg(SysOrg org, RedirectAttributes redirectAttributes) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysOrgService.updateOrg(org);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "修改成功");
        } catch (Exception e) {
            logger.error("修改组织机构异常:"+e.getMessage());
            if(e.getMessage().length()<20){
                resultMap.put("msg", e.getMessage());
            }
        }
        redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(resultMap));
        return "redirect:/system/org/orgList";
    }

    /**
     * 根据主键删除组织机构
     *
     * @param orgId 机构ID
     * @return Map
     */
    @RequiresPermissions("system_org_del")
    @RequestMapping(value = "del")
    public String delOrg(String orgId, RedirectAttributes redirectAttributes) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysOrgService.delOrgByOrgId(orgId);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "删除成功");
           /* return "redirect:/system/org";*/
        } catch (Exception e) {
            logger.error("删除组织机构异常:"+e.getMessage());
            if(e.getMessage().length()<20){
                resultMap.put("msg", e.getMessage());
            }
        }
        redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(resultMap));
        return "redirect:/system/org/orgList";
    }
    
    @RequiresPermissions("system_org")
    @RequestMapping(value = "getZtreeData")
    @ResponseBody
    public String getZtreeData(ModelMap model,String pid) throws Exception {
    	List<SysOrg> allChildOrg = new ArrayList();
    	try {
    		 allChildOrg = sysOrgService.getZtreeData(getSysUser().getOrgId());
		} catch (Exception e) {
			logger.error("获取组织机构树:"+e.getMessage());
		}
    	return JSON.toJSON(allChildOrg).toString();
    }
    
    /**
     * 详情
     * @param backUrl
     * @param model
     * @param sysOrg
     * @return
     */
    @RequiresPermissions("system_org_info")
    @RequestMapping(value = "getInfo")
    public String getInfo(String backUrl, ModelMap model,SysOrg sysOrg) {
        try {
        	model.put("sysOrg", sysOrgService.getById(sysOrg.getpId()));
        } catch (Exception e) {
        	e.printStackTrace();
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
            logger.error("跳转到详情页面异常：" + e.getMessage());
        }
        return "iframe/orgInfo";
    }	
    
    /**
     * 组织机构弹框是树
     */
    @RequiresPermissions("system_org")
    @RequestMapping(value = "orgDialog")
    public String orgDialog(ModelMap model,
    		@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="8") Integer pageSize,
    		HttpServletRequest request) {
        try {
        	Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
        	
        	String pId = (String) searchParams.get("pId");
        	if(StringUtil.isEmpty(pId)){
        		searchParams.put("search_pId", getSysUser().getOrgId());
        	}
    		model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));
    		model.put("page",sysOrgService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null)));
        } catch (Exception e) {
            logger.error("跳转到机构管理首页并获取机构列表异常:"+e.getMessage());
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
        }
        return "iframe/orgTreeindex";
    }
    
    @RequiresPermissions("system_org")
    @RequestMapping(value = "orgTreeList")
    public String orgTreeList(ModelMap model,
    		@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="8") Integer pageSize,String pId,String orgName,
			String msg, HttpServletRequest request) {
        try {
        	Map<String, Object> searchParams = new HashMap();
        	if(StringUtil.isNotEmpty(pId)){
        		searchParams.put("pId", pId);
        	}else{
        		searchParams.put("pId", getSysUser().getOrgId());
        	}
        	
        	if(StringUtil.isNotEmpty(orgName)){
        		searchParams.put("orgName", orgName);
        	}
        	
        	model.put("page",sysOrgService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null)));
        } catch (Exception e) {
            logger.error("跳转到机构管理首页并获取机构列表异常:"+e.getMessage());
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
        }
        return "iframe/orgTreeList";
    }
}
