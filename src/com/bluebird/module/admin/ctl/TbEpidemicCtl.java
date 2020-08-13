package com.bluebird.module.admin.ctl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
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
import com.bluebird.module.admin.model.GhMenuManage;
import com.bluebird.module.admin.model.TbEpidemicStatic;
import com.bluebird.module.admin.service.GhMenuManageService;
import com.bluebird.module.admin.service.TbEpidemicStaticService;
import com.bluebird.module.system.service.SysUserService;

//合理化建议
@Controller
@RequestMapping("admin/epidemic")
public class TbEpidemicCtl extends BaseCtl{
	
	@Resource
	private TbEpidemicStaticService tbEpidemicStaticService;
	
	@Resource
	private SysUserService sysUserService;
	
	
	/**
	 * 疫情防控上报统计
	 * @return
	 */
	@RequestMapping(value = "")
	public String toIndex(   
			@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="15") Integer pageSize,
			String msg,ModelMap model, HttpServletRequest request,
			String startTime,String endTime){
		    try {
		    	if (StringUtils.isNotEmpty(msg)) {
					model.put("msg", msg);
		    	}
		    	
		    	
		    	SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd");
		    	if(StringUtils.isBlank(startTime)){
		    		Calendar c = Calendar.getInstance();
		        	c.add(Calendar.MONTH, 0);
		        	c.set(Calendar.DAY_OF_MONTH,1);//1:本月第一天
		        	startTime= format.format(c.getTime());
		    	}  
		    	if(StringUtils.isBlank(endTime)){
		    		endTime = format.format(new Date());
		    	}
		    	
		    	model.put("startTime", startTime);
				model.put("endTime", endTime);
				
			Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
			searchParams.put("startTime", startTime);
			searchParams.put("endTime", endTime);
			
			model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));	
			model.put("page",tbEpidemicStaticService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null))); 
			
			TbEpidemicStatic tbEpidemicStatic = new TbEpidemicStatic();
			BeanUtils.populate(tbEpidemicStatic, searchParams);
			model.put("tbEpidemicStatic", tbEpidemicStatic);
		    } catch (Exception e) {
		    	 // 打印日志
				logger.error("查询分页异常"+e.getMessage());
		    	Map<String, Object> maps= new HashMap<String, Object>();
		    	maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		    	maps.put("msg", "系统繁忙，请稍后再试");
		    	model.put("msg", JSON.toJSONString(maps));
			}
		return "admin/epidemic/index";
	}
	
	/**
	 * 查看用户信息
	 * @return
	 */
	    @RequestMapping(value = "viewNoComUserInfo")
	    public String viewNoComUserInfo(ModelMap model,
	    		@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
				@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
				@RequestParam(value = "sort", defaultValue = "a.create_date DESC") String sort,
				@RequestParam String staticDate,
	    		HttpServletRequest request) {
	        try {
	        	Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
	        	model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));
	        	searchParams.put("createDate", staticDate.substring(0,10));
	        	model.put("page", sysUserService.viewNoComUserInfoList(new Page(pageNO, pageSize, 0, sort, null), searchParams));
	        } catch (Exception e) {
	            logger.error("跳转到机构管理首页并获取机构列表异常:"+e.getMessage());
	            Map<String, Object> map = new HashMap<>();
	            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
	            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
	            model.put("msg", JSON.toJSONString(map));
	        }
	        model.put("staticDate", staticDate);
	        return "iframe/noComReportUserList";
	    }
	
}
