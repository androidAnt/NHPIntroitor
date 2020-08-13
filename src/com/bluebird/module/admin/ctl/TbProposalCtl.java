package com.bluebird.module.admin.ctl;

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
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.TbProposal;
import com.bluebird.module.admin.service.TbProposalService;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysDicService;


//合理化建议
@Controller
@RequestMapping("admin/proposal")
public class TbProposalCtl extends BaseCtl{
	//政策法规service
		@Resource
		TbProposalService tbProposalService;
		@Resource
		private SysDicService sysDicService;
		
		/**
		 * 列表查询
		 * @param pageNO
		 * @param pageSize
		 * @param msg
		 * @param model
		 * @param request
		 * @return
		 */
		@RequiresPermissions("tb_proposal")   // 用于表明当前用户需是经过认证的用户
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
		    	model.put("page",tbProposalService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null))); 
		    	TbProposal tbProposal = new TbProposal();	
		    	BeanUtils.populate(tbProposal, searchParams);
		    	model.put("isAudit", sysDicService.getCacheDicByType("isAudit"));
		    	model.put("tbProposal", tbProposal);
		    } catch (Exception e) {
		    	 // 打印日志
				logger.error("查询分页异常"+e.getMessage());
		    	Map<String, Object> maps= new HashMap<String, Object>();
		    	maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		    	maps.put("msg", "系统繁忙，请稍后再试");
		    	model.put("msg", JSON.toJSONString(maps));
			}
			return "admin/proposal/index";
		}
		
		/**
	     * 查看详情 审核页面
	     * @param deviceId
	     * @param backUrl
	     * @param model
	     * @return
	     */
	 	@RequestMapping("getInfo")
	 	public String getInfo(String proposalId, String backUrl, Boolean disabled, ModelMap model){
	     	Map<String,Object> maps =new HashMap<String,Object>();
	 		try {
	 			maps.put("proposalId", proposalId);
	 			TbProposal tbProposal=(TbProposal)tbProposalService.getByCondition(maps);
	 			model.put("tbProposal", tbProposal);
	 			model.put("disabled", disabled);
	 			model.put("paramMap", paramUnits(backUrl));
	 			if(disabled){
	 				model.put("title", "审核合理化建议");
	 			}else{
	 				model.put("title", "合理化建议详情");
	 			}
	 		} catch (Exception e) {
	 			maps.put("msg", "系统繁忙，请稍后再试");
	 		}
	 		return "admin/proposal/info";
	 	}
	    
	 	@RequestMapping("toEditProposal")
	 	public String toEditProposal(String proposalId, String backUrl, Boolean disabled, ModelMap model){
	     	Map<String,Object> maps =new HashMap<String,Object>();
	 		try {
	 			maps.put("proposalId", proposalId);
	 			TbProposal tbProposal=(TbProposal)tbProposalService.getByCondition(maps);
	 			model.put("tbProposal", tbProposal);
	 			model.put("paramMap", paramUnits(backUrl));
	 		} catch (Exception e) {
	 			maps.put("msg", "系统繁忙，请稍后再试");
	 		}
	 		return "admin/proposal/proposalEdit";
	 	}
	    
	 	/**
	     * 删除
	     * @param deviceId
	     * @param backUrl
	     * @param model
	     * @return
	     */
	 	@RequiresPermissions("tb_proposal_del")
	 	@RequestMapping("delete")
	 	public String delete(String proposalId,String backUrl,ModelMap model){
	 		Map<String, Object> maps = new HashMap<String, Object>();
	 		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
	 		model.put("paramMap", paramUnits(backUrl));
	 		try {
	 			// 调方法
	 			maps =  tbProposalService.delContentTypeById(proposalId);
	 		} catch (Exception e) {
	 			maps.put("msg", "系统繁忙，请稍后再试");
	 		}
	 		model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
	 		return  "redirect:/admin/proposal";
	 	}
	    
	 	 /**
	     * 执行审核
	     * @param contentTypeId
	     * @param backUrl
	     * @param model
	     * @return
	     */
	    @RequiresPermissions("tb_proposal_edit")
	    @RequestMapping(value = "doEdit")
	    public String doEdit(TbProposal tbProposal, String backUrl, ModelMap model) {
	        model.put("paramMap", paramUnits(backUrl));
	        try {
	        	//添加审核人
	        	SysUser sysUser = getSysUser();
	        	tbProposal.setAuditorUser(sysUser.getRealName());
	        	//添加审核时间
	        	tbProposal.setAuditorDate(TimeHelper.getLocatlTime());
	       	 model.put("paramMsg", JSON.toJSONString(tbProposalService.edit(tbProposal)).replace("\"", "'"));
	        } catch (Exception e) {
	            Map<String, Object> map = new HashMap<String, Object>();
	            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
	            map.put("msg", "系统繁忙,请稍后再试");
	            model.put("paramMsg", JSON.toJSONString(map).replace("\"", "'"));
	        }
	        return "redirect:/admin/proposal";
	    }
	 	
}
