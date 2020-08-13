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
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.TbMailbox;
import com.bluebird.module.admin.model.TbPolicies;
import com.bluebird.module.admin.service.TbMailboxService;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysDicService;
//主席信箱
@Controller
@RequestMapping("admin/mailbox")
public class TbMailboxCtl extends BaseCtl{
	//政策法规service
	@Resource
	TbMailboxService tbMailboxService;
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
	@RequiresPermissions("tb_mailbox")   // 用于表明当前用户需是经过认证的用户
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
	    	model.put("page",tbMailboxService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null))); 
	    	TbMailbox tbMailbox = new TbMailbox();
	    	BeanUtils.populate(tbMailbox, searchParams);
	    	model.put("isAudit", sysDicService.getCacheDicByType("isAudit"));
	    	model.put("tbMailbox", tbMailbox);
	    } catch (Exception e) {
	    	 // 打印日志
			logger.error("查询分页异常"+e.getMessage());
	    	Map<String, Object> maps= new HashMap<String, Object>();
	    	maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
	    	maps.put("msg", "系统繁忙，请稍后再试");
	    	model.put("msg", JSON.toJSONString(maps));
		}
		return "admin/mailbox/index";
	}
	
	/**
     * 查看详情 审核页面
     * @param deviceId
     * @param backUrl
     * @param model
     * @return
     */
 	@RequestMapping("getInfo")
 	public String getInfo(String mailboxId, String backUrl,String queryOrAudit, Boolean disabled, ModelMap model){
     	Map<String,Object> maps =new HashMap<String,Object>();
 		try {
 			maps.put("mailboxId", mailboxId);
 			TbMailbox tbMailbox=(TbMailbox)tbMailboxService.getByCondition(maps);
 			model.put("tbMailbox", tbMailbox);
 			model.put("queryOrAudit", queryOrAudit);
// 			model.put("disabled", disabled);
 			model.put("paramMap", paramUnits(backUrl));
// 			if(disabled){
// 				model.put("title", "审核主席信箱");
// 			}else{
// 				model.put("title", "主席信箱详情");
// 			}
 		} catch (Exception e) {
 			maps.put("msg", "系统繁忙，请稍后再试");
 		}
 		return "admin/mailbox/info";
 	}
    
 	@RequestMapping("toEditMailbox")
 	public String toEditMailbox(String mailboxId, String backUrl, Boolean disabled, ModelMap model){
     	Map<String,Object> maps =new HashMap<String,Object>();
 		try {
 			maps.put("mailboxId", mailboxId);
 			TbMailbox tbMailbox=(TbMailbox)tbMailboxService.getByCondition(maps);
 			model.put("tbMailbox", tbMailbox);
 			model.put("paramMap", paramUnits(backUrl));
 		} catch (Exception e) {
 			maps.put("msg", "系统繁忙，请稍后再试");
 		}
 		return "admin/mailbox/mailboxEdit";
 	}
 	
 	/**
     * 删除
     * @param deviceId
     * @param backUrl
     * @param model
     * @return
     */
 	@RequiresPermissions("tb_mailbox_del")
 	@RequestMapping("delete")
 	public String delete(String mailboxId,String backUrl,ModelMap model){
 		Map<String, Object> maps = new HashMap<String, Object>();
 		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
 		model.put("paramMap", paramUnits(backUrl));
 		try {
 			// 调方法
 			maps =  tbMailboxService.delContentTypeById(mailboxId);
 		} catch (Exception e) {
 			maps.put("msg", "系统繁忙，请稍后再试");
 		}
 		model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
 		return  "redirect:/admin/mailbox";
 	}
    
 	 /**
     * 执行审核
     * @param contentTypeId
     * @param backUrl
     * @param model
     * @return
     */
    @RequiresPermissions("tb_mailbox_edit")
    @RequestMapping(value = "doEdit")
    public String doEdit(TbMailbox tbMailbox, String backUrl, ModelMap model) {
        model.put("paramMap", paramUnits(backUrl));
        try {
        	//添加审核人
        	SysUser sysUser = getSysUser();
        	tbMailbox.setAuditorUser(sysUser.getRealName());
        	//添加审核时间
        	tbMailbox.setAuditorDate(TimeHelper.getLocatlTime());
       	 model.put("paramMsg", JSON.toJSONString(tbMailboxService.edit(tbMailbox)).replace("\"", "'"));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            model.put("paramMsg", JSON.toJSONString(map).replace("\"", "'"));
        }
        return "redirect:/admin/mailbox/mailboxAudit";
    }
 	
    //审核列表
    @RequiresPermissions("mailboxAudit")   // 用于表明当前用户需是经过认证的用户
	@RequestMapping(value = "mailboxAudit")
	public String mailboxAudit(   
			@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="15") Integer pageSize,
			String msg,ModelMap model, HttpServletRequest request){
		try {
	    	if (StringUtils.isNotEmpty(msg)) {
				model.put("msg", msg);
	    	}
	    	Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
	    	model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));
	    	searchParams.put("auditorType", "0");
	    	model.put("page",tbMailboxService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null))); 
	    	TbMailbox tbMailbox = new TbMailbox();
	    	BeanUtils.populate(tbMailbox, searchParams);
//	    	model.put("isAudit", sysDicService.getCacheDicByType("isAudit"));
	    	model.put("tbMailbox", tbMailbox);
	    } catch (Exception e) {
	    	 // 打印日志
			logger.error("查询分页异常"+e.getMessage());
	    	Map<String, Object> maps= new HashMap<String, Object>();
	    	maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
	    	maps.put("msg", "系统繁忙，请稍后再试");
	    	model.put("msg", JSON.toJSONString(maps));
		}
		return "admin/mailbox/auditIndex";
	}
    
    //统计statistics
    @RequiresPermissions("statistics")
    @RequestMapping(value = "statistics")
    public String statistics(String startTime,String endTime, String backUrl, ModelMap model) {
    	HashMap<String, String> hashMap = new HashMap<String, String>();
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
    	hashMap.put("startTime", startTime);
		model.put("startTime", startTime);
		hashMap.put("endTime", endTime);
		model.put("endTime", endTime);
    	try {
    		TbMailbox statistics = tbMailboxService.statistics(hashMap);
			model.put("tbMailbox", statistics);
			model.put("tbMailboxJson", JSON.toJSONString(statistics));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return "admin/mailbox/statistics";
    }
}
