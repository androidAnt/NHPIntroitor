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
import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.GhAnnouncement;
import com.bluebird.module.admin.model.GhContentManage;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.service.GhAnnouncementService;
import com.bluebird.module.system.model.SysUser;

/**
 * 通知公告
 *
 * @author wangj
 */
@Controller
@RequestMapping("admin/announcement")
public class GhAnnouncementCtl  extends BaseCtl {

	@Resource
	private GhAnnouncementService ghAnnouncementService;
	
	/**
	 * 列表查询
	 * @param pageNO
	 * @param pageSize
	 * @return
	 */
	@RequiresPermissions("gh_announcement")   
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
		model.put("page",ghAnnouncementService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null))); 
		GhAnnouncement announcement = new GhAnnouncement();
		BeanUtils.populate(announcement, searchParams);
		model.put("announcement", announcement);
		    } catch (Exception e) {
				logger.error("查询分页异常"+e.getMessage());
		    	Map<String, Object> maps= new HashMap<String, Object>();
		    	maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		    	maps.put("msg", "系统繁忙，请稍后再试");
		    	model.put("msg", JSON.toJSONString(maps));
			}
		return "admin/announcement/announcementList";
	}
	
	/**
	 * 跳转到添加页面
	 * @param backUrl
	 * @param model
	 * @return
	 */
    @RequiresPermissions("gh_announcement")
    @RequestMapping(value = "toadd")
    public String toAdd(String backUrl, ModelMap model) {
        model.put("backUrl", backUrl);
        model.put("paramMap", paramUnits(backUrl));
        return "admin/announcement/announcementAdd";
    }
    
    /**
	 * 添加通知公告
	 * 
	 * @param model model容器
	 * @param redirectAttributes 重定向
	 */
    @RequiresPermissions("gh_announcement_add")
	@RequestMapping("doAdd")
	public String doAdd(GhAnnouncement ghAnnouncement,ModelMap model, RedirectAttributes redirectAttributes){
		try {
			SysUser sysUser = getSysUser();
			ghAnnouncement.setCreatUser(sysUser.getRealName());
			ghAnnouncement.setOrgId(sysUser.getOrgId());
			ghAnnouncement.setDeleteFlag("0");
			ghAnnouncement.setAnnouncementId(SysUtil.GetUUID());
			ghAnnouncement.setCreatDate(TimeHelper.getLocatlTime());
			ghAnnouncementService.saveSelective(ghAnnouncement); 
			
		} catch (Exception e) {
			Map<String, Object> maps = new HashMap<String, Object>();
			maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
			maps.put("msg", "包含非法数据");
			redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(maps));
		}
		return "redirect:/admin/announcement";
	}
    
    /**
     * 删除通知公告
     * @param backUrl
     * @param model
     * @return
     */
    @RequiresPermissions("gh_announcement_delete")
	 @RequestMapping("delete")
	 public String delete(String announcementId,String backUrl,ModelMap model){
		 Map<String, Object> maps = new HashMap<String, Object>();
		 maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		 model.put("paramMap", paramUnits(backUrl));
		  try {
			  // 调方法
	      maps =  ghAnnouncementService.deleteAnnouncement(announcementId);
		} catch (Exception e) {
	        maps.put("msg", "系统繁忙，请稍后再试");
		}
		 model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
		 return  "redirect:/admin/announcement";
	 }
    
   /**
    * 查看详情
    * @param backUrl
    * @param model
    * @return
    */
    @RequiresPermissions("gh_announcement_info")
	@RequestMapping("getAnnouncementInfo")
	public String getInfo(String announcementId, ModelMap model){
    	Map<String,Object> maps =new HashMap<String,Object>();
		try {
			maps.put("announcementId", announcementId);
			GhAnnouncement ghAnnouncement = (GhAnnouncement)ghAnnouncementService.getByCondition(maps);
			model.put("ghAnnouncement", ghAnnouncement);
		} catch (Exception e) {
			e.printStackTrace();
			maps.put("msg", "系统繁忙，请稍后再试");
		}
		return "admin/announcement/announcementInfo";
	}
    
    /**
     * 跳转到修改界面
     * @param backUrl
     * @param model
     * @return
     */
    @RequiresPermissions("gh_announcement_edit")
   	@RequestMapping("toEditAnnouncement")
   	public String toEditContent(String announcementId, String backUrl, ModelMap model){
       	Map<String,Object> maps =new HashMap<String,Object>();
   		try {
   			maps.put("announcementId", announcementId);
   			GhAnnouncement ghAnnouncement = (GhAnnouncement)ghAnnouncementService.getByCondition(maps);
			model.put("ghAnnouncement", ghAnnouncement);
   		} catch (Exception e) {
   			maps.put("msg", "系统繁忙，请稍后再试");
   		}
   		return "admin/announcement/announcementEdit";
   	}
    
    /**
     * 执行修改
     * @param backUrl
     * @param model
     * @return
     */
    @RequiresPermissions("gh_announcement_edit")
    @RequestMapping(value = "doEdit")
    public String doEdit(GhAnnouncement ghAnnouncement, String backUrl, ModelMap model) {
        model.put("paramMap", paramUnits(backUrl));
        try {
            model.put("paramMsg", JSON.toJSONString(ghAnnouncementService.updateSelective((ghAnnouncement))).replace("\"", "'"));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            model.put("paramMsg", JSON.toJSONString(map).replace("\"", "'"));
        }
        return "redirect:/admin/announcement";
    }
}
