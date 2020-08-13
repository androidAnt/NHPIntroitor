package com.bluebird.module.home.ctl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.StringUtil;
import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.GhAnnouncement;
import com.bluebird.module.admin.model.GhContentManage;
import com.bluebird.module.admin.model.GhContentType;
import com.bluebird.module.admin.model.GhMenuManage;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.model.TbEpidemic;
import com.bluebird.module.admin.model.TbMailbox;
import com.bluebird.module.admin.model.TbPolicies;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.admin.service.GhAnnouncementService;
import com.bluebird.module.admin.service.GhContentManageService;
import com.bluebird.module.admin.service.GhContentTypeService;
import com.bluebird.module.admin.service.GhMenuManageService;
import com.bluebird.module.admin.service.ModuleService;
import com.bluebird.module.admin.service.TbEpidemicService;
import com.bluebird.module.admin.service.TbMailboxService;
import com.bluebird.module.admin.service.TbPoliciesService;
import com.bluebird.module.system.model.SysOrg;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysDicService;
import com.bluebird.module.system.service.SysOrgService;
import com.bluebird.module.system.service.SysUserService;
import com.bluebird.module.system.vo.DicVo;

@Controller
@RequestMapping("app/module")
public class AppModeuleHomeCtl extends BaseCtl{
	@Resource
	private GhMenuManageService ghMenuManageService;
	@Resource
	private GhAnnouncementService ghAnnouncementService;
	@Resource
	private SysOrgService sysOrgService;
	@Resource
	private ModuleService moduleService;
	@Resource
	private GhContentManageService ghContentManageService;
	@Resource
	private GhContentTypeService ghContentTypeService;
	@Resource
	private TbPoliciesService tbPoliciesService;
	@Resource
	private FileUploadService fileUploadService;
	@Resource
	private SysDicService sysDicService;
	@Resource
	private SysUserService sysUserService;
	@Resource
	private TbMailboxService tbMailboxService;
	@Resource
	private TbEpidemicService tbEpidemicService;
	
	@RequestMapping(value = "")
	public String home(ModelMap model, HttpServletRequest request) {
		try {
			//底部导航栏
			wechartBanner(model,"0");
			//菜单
			List<GhMenuManage> ghMenuManage = ghMenuManageService.getListByCondition(new HashMap<>());
			model.put("ghMenuManage",ghMenuManage);
			
			
				SysUser sysUser = getSysUser();
				if(ObjectUtils.isEmpty(sysUser)){
					model.put("user",new SysUser());
				}else{
					model.put("user",sysUser);
				}
			
			//通知公告  获取内容
			Map<String,Object> map = new HashMap<String, Object>();
			map.put("isShowIndex", "0");
			List<GhAnnouncement> announcementList = ghAnnouncementService.getAnnouncementList(map);
			model.put("announcementList",announcementList);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "App/index";
	}
	//点击菜单
	@RequestMapping(value = "list")
	public String list(String menuId,String isShow,ModelMap model, HttpServletRequest request,HttpServletResponse response) {
		try {
			//底部导航栏
			wechartBanner(model,isShow);
			//查询不包含二级分类的分类
			Map<String,Object> hashMap = new HashMap<String,Object>();
			hashMap.put("menuId", menuId);
			hashMap.put("contentType", "1");
			List<GhContentType> listByCondition1 = moduleService.getGhContentTypeList(hashMap);
			if(listByCondition1.size()>0){
				for(GhContentType gh : listByCondition1){
					if("2".equals(gh.getContentType())){
						return	this.contentType(0, 10,gh.getContentTypeId(),isShow, model, request, response);
					}
				}
			}
			
			model.put("GhContentTypeList", listByCondition1);
			//查询菜单
			hashMap.remove("contentType");
			GhMenuManage byCondition = ghMenuManageService.getByCondition(hashMap);
			model.put("menu", byCondition);
			//获取分类下的文章
			String[] ids = new String[listByCondition1.size()];
			for(int i = 0; i<listByCondition1.size(); i++){
				ids[i]=listByCondition1.get(i).getContentTypeId();
			}
			List<GhContentManage> cultureList = moduleService.getGhContentManageListAll(ids);
			model.put("GhContentManageList", cultureList);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "App/List/articleList";
	}
	
	//点击分类
	@RequestMapping(value = "contentType")
	public String contentType(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
			String id,String isShow,ModelMap model, HttpServletRequest request,HttpServletResponse response) {
		try {
			
			Map<String,Object> maps = new HashMap<String,Object>();
			maps.put("contentTypeId", id);
			//根据id获取分类
			GhContentType byCondition = ghContentTypeService.getByCondition(maps);
			//是否属于工会概述
			if("6".equals(byCondition.getMenuId())){
				//获取分类下的文章
				 List<GhContentManage> data = moduleService.getCulturePage(byCondition.getContentTypeId(),new Page(0, 1, 0, null, null)).getData();
			     if(data.size()>0){
			       return details(data.get(0).getContentId(),isShow,byCondition.getMenuId(),model,request);
			     }
			}
			//底部导航栏
			wechartBanner(model,isShow);
			menuOrGhContentTypeList(model, byCondition.getMenuId());
			if("0".equals(byCondition.getContentType())){
				//URL
				 return "redirect:"+byCondition.getUrlPath();
			}else if("2".equals(byCondition.getContentType())){
//				//获取分类下的文章
//				String[] str;
//					 str=new String[1];
//					 str[0]=id;
//				Page ghContentManageListPage = moduleService.getGhContentManageListPage(str,new Page(pageNO, pageSize, 0, null, null));
//				model.put("page", ghContentManageListPage);
				model.put("byConditionJson", JSON.toJSONString(byCondition));
				model.put("menuJson", JSON.toJSONString(model.get("menu")));
				if("0".equals(byCondition.getArticleType())){
					//文章类
					return "App/List/articleList";
				}else{
					//图文 图片类
					return "App/List/ImgList";
				}
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "redirect:/app/module";
	}
	
	//点击分类Ajax
	@RequestMapping(value = "contentTypeAjax")
	@ResponseBody
	public Map<String,Object> contentTypeAjax(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
			String id,ModelMap model, HttpServletRequest request,HttpServletResponse response) {
		Map<String,Object> map = new HashMap<String, Object>();
		try {
			//获取分类下的文章
			String[] str={id};
			Page ghContentManageListPage = moduleService.getGhContentManageListPage(str,new Page(pageNO, pageSize, 0, null, null));
			map.put("list", ghContentManageListPage.getData());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}
	
	//文章详情
	@RequestMapping(value = "details")
	public String details(String id,String isShow,String menuId,ModelMap model, HttpServletRequest request) {
		try {
			//底部导航栏
			wechartBanner(model,isShow);
			//根据文章id获取文章详情
			Map<String,Object> maps = new HashMap<String,Object>();
			maps.put("contentId", id);
			GhContentManage byCondition2 = ghContentManageService.getByCondition(maps);
			if(StringUtil.isNotEmpty(byCondition2.getFileUuid())){
					//存在附件
					Map<String,Object> fileUuid = new HashMap<String,Object>();
					fileUuid.put("uuid", byCondition2.getFileUuid());
				List<SysFile> listByCondition = fileUploadService.getListByCondition(fileUuid);
				byCondition2.setFileList(listByCondition);
				}
   			if(StringUtil.isNotEmpty(byCondition2.getImgFileUuid())){
   				//存在图片
   				Map<String,Object> hashMap3 = new HashMap<String,Object>();
				hashMap3.put("uuid", byCondition2.getImgFileUuid());
				List<SysFile> listByCondition = fileUploadService.getListByCondition(hashMap3);
				byCondition2.setImgFileList(listByCondition);
   			}
			model.put("GhContentManage", byCondition2);
			menuOrGhContentTypeList(model,menuId);
			if("2".equals(byCondition2.getArticleType())){
				//图片类
				return "App/info/imgInfo";
			}else{
				//图文类 文章类
				return "App/info/articleInfo";
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "redirect:/app/module";
	}
	//政策法规列表
	@RequestMapping(value = "policiesList")
	public String policiesList(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
			String menuId,String isShow,ModelMap model, HttpServletRequest request) {
		try {
			//底部导航栏
			wechartBanner(model,isShow);
			//菜单
			List<GhMenuManage> ghMenuManage = ghMenuManageService.getListByCondition(new HashMap<>());
			model.put("ghMenuManage",ghMenuManage);
//			//获取列表
//			HashMap<String, Object> hashMap = new HashMap<>();
//			if(StringUtil.isNotEmpty(menuId)){
//				hashMap.put("menuId", menuId);
//			}
//			Page appListByCondition = tbPoliciesService.getAppListByCondition(hashMap,new Page(pageNO, pageSize, 0, null, null));
//			model.put("page",appListByCondition );
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "App/List/policiesList";
	}
	
	    //政策法规列表Ajax
	    @ResponseBody
		@RequestMapping(value = "policiesListAjax")
		public Map<String,Object> policiesListAjax(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
				@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
				String menuId,ModelMap model, HttpServletRequest request) {
	    	Map<String,Object> map = new HashMap<String, Object>();
			try {
				HashMap<String, Object> hashMap = new HashMap<>();
				if(StringUtil.isNotEmpty(menuId)){
					hashMap.put("menuId", menuId);
				}
				Page appListByCondition = tbPoliciesService.getAppListByCondition(hashMap,new Page(pageNO, pageSize, 0, null, null));
				map.put("list", appListByCondition.getData());
			} catch (Exception e) {
				e.printStackTrace();
			}
			return map;
		}
	
	    //政策法规详情
		@RequestMapping(value = "policiesInfo")
		public String policiesInfo(String id,String isShow,ModelMap model, HttpServletRequest request) {
			try {
				//底部导航栏
				wechartBanner(model,isShow);
				//菜单
				List<GhMenuManage> ghMenuManage = ghMenuManageService.getListByCondition(new HashMap<>());
				model.put("ghMenuManage",ghMenuManage);
				HashMap<String, Object> hashMap = new HashMap<>();
				hashMap.put("policiesId", id);
				TbPolicies tbPolicies =	tbPoliciesService.getByCondition(hashMap);
				 if(StringUtil.isNotEmpty(tbPolicies.getFileUuid())){
						//存在附件
	   					Map<String,Object> fileUuid = new HashMap<String,Object>();
	   					fileUuid.put("uuid", tbPolicies.getFileUuid());
						List<SysFile> listByCondition = fileUploadService.getListByCondition(fileUuid);
						tbPolicies.setFileList(listByCondition);
				 }
				model.put("policies",tbPolicies);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return "App/info/policiesInfo";
		}
	
	public void menuOrGhContentTypeList(ModelMap model,String id){
		try{
			//查询不包含二级分类的分类
			Map<String,Object> hashMap = new HashMap<String,Object>();
			hashMap.put("menuId", id);
			hashMap.put("contentType", "1");
			List<GhContentType> listByCondition1 = moduleService.getGhContentTypeList(hashMap);
			model.put("GhContentTypeList", listByCondition1);
			//查询菜单
			hashMap.remove("contentType");
			GhMenuManage menu = ghMenuManageService.getByCondition(hashMap);
			model.put("menu", menu);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	//通知公告列表
	@RequestMapping(value = "announcementList")
	public String announcementList(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
			ModelMap model,String isShow,HttpServletRequest request,HttpServletResponse response) {
		try {
			//底部导航栏
			wechartBanner(model,isShow);
//			HashMap<String, String> hashMap = new HashMap<String,String>();
//			Page listByCondition = ghAnnouncementService.getListByCondition(hashMap,new Page(pageNO, pageSize, 0, null, null));
//			model.put("page", listByCondition );
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "App/List/announcementList";
	}
	
	//通知公告列表Ajax
    @ResponseBody
	@RequestMapping(value = "announcementListAjax")
	public Map<String,Object> announcementListAjax(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
			@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
			String menuId,ModelMap model, HttpServletRequest request) {
    	Map<String,Object> map = new HashMap<String, Object>();
    	try {
			HashMap<String, String> hashMap = new HashMap<String,String>();
			map.put("list",  ghAnnouncementService.getListByCondition(hashMap, new Page(pageNO, pageSize, 0, null, null)).getData());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return map;
	}
	//通知公告详情
	@RequestMapping(value = "announcementInfo")
	 public String announcementInfo(String id,String isShow,ModelMap model,HttpServletRequest request,HttpServletResponse response) {
		HashMap<String, String> hashMap = new HashMap<String, String>();
		hashMap.put("announcementId", id);
		try {
			//底部导航栏
			wechartBanner(model,isShow);
			model.put("ghAnnouncement", ghAnnouncementService.getByCondition(hashMap));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "App/info/announcementInfo";
	}
	
	//底部导航栏
	public void wechartBanner(ModelMap model,String isShow){
		try {
			List<DicVo> cacheDicByType = sysDicService.getCacheDicByType("wechart_banner");
			for(DicVo dic : cacheDicByType){
				//查询不包含二级分类的分类
				Map<String,Object> hashMap = new HashMap<String,Object>();
				hashMap.put("showFlagWechart", "0");
				hashMap.put("belongWechartBanner",dic.getDicCode());
				hashMap.put("contentType", "1");
				List<GhContentType> listByCondition1 = moduleService.getGhContentTypeList(hashMap);
				dic.setList(listByCondition1);
			}
			model.put("DicVoList", cacheDicByType);
			//底图是否高亮
			if(StringUtil.isNotEmpty(isShow)){
				model.put("isShow",isShow);
			}else{
				model.put("isShow","-1");
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	    //跳转登陆页面
	@RequestMapping(value = "loginPage")
	 public String loginPage(String isShow,ModelMap model,HttpServletRequest request,HttpServletResponse response) {
		wechartBanner(model,isShow);
		return "App/loginPage";
	}
	
	    //判断是否登录
	    @ResponseBody
		@RequestMapping(value = "checkUserAjax")
		public Map<String,Object> checkUserAjax(ModelMap model, HttpServletRequest request) {
			SysUser sysUser = getSysUser();
			Map<String,Object> map = new HashMap<String, Object>();
			if(ObjectUtils.isEmpty(sysUser)){
				map.put("islogin", false);
				return map;
			}
			try {
				map.put("islogin", true);
				SysUser user =sysUserService.getById(sysUser.getSuId());
				map.put("isMember", user.getIsMember());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return map;
		}
	    //登录
	    @ResponseBody
	    @RequestMapping(value = "loginUserAjax")
	    public Boolean loginUserAjax(String loginName, String password,ModelMap model, HttpServletRequest request) {
	    	Subject subject = SecurityUtils.getSubject();
	        removeSession(SystemConstant.SYS_USER_SESSION_KEY);
	        removeSession("moduleList");
	        subject.logout();
	        UsernamePasswordToken token = new UsernamePasswordToken(loginName, password);
	        token.setRememberMe(false);
	        Integer type=-1;
	        try {
	            subject.login(token);
	            SysUser sysUser = (SysUser) subject.getPrincipal();
	            //根据组织机构id获取组织机构信息
	            if(StringUtils.isNotEmpty(sysUser.getOrgId())){
	            	 SysOrg sysOrg = sysOrgService.getById(sysUser.getOrgId());
			            if(sysOrg!=null){
			            	sysUser.setOrgName(sysOrg.getOrgName());
			            }
	            }
	            setSession(SystemConstant.SYS_USER_SESSION_KEY, sysUser);
	            return true;
	        } catch (Exception uae) {
	            logger.error("UnknownAccountException:" + loginName);
	        } 
	        return false;
	    }
	    
	    //跳转我要入会页面
		@RequestMapping(value = "initiation")
		 public String initiation(ModelMap model,String isShow,HttpServletRequest request,HttpServletResponse response) {
			SysUser sysUser = getSysUser();
			if(ObjectUtils.isEmpty(sysUser)){
				return "redirect:/app/module";
			}
			try {
				//底部导航栏
				wechartBanner(model,isShow);
		    	Boolean boo = isMember(sysUser);
				if(!boo){
					//是会员了
					return "redirect:/app/module/member";
				}
				model.put("education", JSON.toJSONString(sysDicService.getCacheDicByType("education")));
				model.put("politicsStatus", JSON.toJSONString(sysDicService.getCacheDicByType("politicsStatus")));
				SysUser user =sysUserService.getById(sysUser.getSuId());
				model.put("user",user);
				model.put("userJson",JSON.toJSONString(user));
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return "App/my/initiation";
		}
		
		 //跳转会员信息
		@RequestMapping(value = "member")
		 public String myInitiation(ModelMap model,String isShow,HttpServletRequest request,HttpServletResponse response) {
			SysUser sysUser = getSysUser();
			if(ObjectUtils.isEmpty(sysUser)){
				return "redirect:/app/module";
			}
			try {
				//底部导航栏
				wechartBanner(model,isShow);
		    	Boolean boo = isMember(sysUser);
				if(boo){
					//不是会员了
					return "redirect:/app/module/initiation";
				}
				SysUser user =sysUserService.getById(sysUser.getSuId());
				List<DicVo> cacheDicByType = sysDicService.getCacheDicByType("education");
				List<DicVo> cacheDicByType2 = sysDicService.getCacheDicByType("politicsStatus");
				for(DicVo dic :cacheDicByType){
					if(dic.getDicCode().equals(user.getEducation())){
						user.setEducation(dic.getDicName());
						break;
					}
				}
				for(DicVo dic :cacheDicByType2){
					if(dic.getDicCode().equals(user.getPoliticalStatus())){
						user.setPoliticalStatus(dic.getDicName());
						break;
					}
				}
				model.put("user",user);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return "App/my/user";
		}
		
		//我要入会
		@RequestMapping(value = "myInitiation")
		public String myInitiation(SysUser user,ModelMap model,HttpServletRequest request,HttpServletResponse response) {
			SysUser sysUser = getSysUser();
			user.setSuId(sysUser.getSuId());
			user.setIsMember("2");
			try {
				sysUserService.updateSysUser(user);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return "redirect:/app/module/initiation";
		}
		
		public Boolean isMember(SysUser sysUser){
			try {
				SysUser user =sysUserService.getById(sysUser.getSuId());
				if("0".equals(user.getIsMember())){
					//是会员
					return false;
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			return true;
		}
		//跳转主席信息页面
		 @RequestMapping(value = "getTbMailbox")
		 public String getTbMailbox(
				 ModelMap model,String isShow,HttpServletRequest request,HttpServletResponse response) {
			try {
				SysUser sysUser = getSysUser();
				if(ObjectUtils.isEmpty(sysUser)){
					return "redirect:/app/module";
				}
				//底部导航栏
				wechartBanner(model,isShow);
				model.put("name", sysUser.getRealName());
				model.put("orgName", sysUser.getOrgName());
			} catch (Exception e) {
				e.printStackTrace();
			}
			return "App/my/mailbox";
		}
		
		//主席信箱  留言接口
		@RequestMapping(value = "TbMailbox")
		 public String TbMailbox(TbMailbox tbMailbox,
				 ModelMap model,HttpServletRequest request,HttpServletResponse response) {
			try {
				SysUser sysUser = getSysUser();
				if(ObjectUtils.isEmpty(sysUser)){
					return "redirect:/app/module";
				}
				tbMailbox.setCreatUser(sysUser.getSuId());
				tbMailbox.setOrgId(sysUser.getOrgId());
				tbMailboxService.save(tbMailbox);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return "redirect:/app/module";
		}
		//搜索search
		@RequestMapping(value = "search")
		 public String search(String name,ModelMap model,String isShow,HttpServletRequest request,HttpServletResponse response) {
			try {
				//底部导航栏
				wechartBanner(model,isShow);
				model.put("name", name);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return "App/List/searchList";
		}
		//搜索searchAjax
		@RequestMapping(value = "searchAjax")
		@ResponseBody
		public Map<String,Object> searchAjax(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
				@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
				String name,ModelMap model, HttpServletRequest request,HttpServletResponse response) {
			Map<String,Object> map = new HashMap<String, Object>();
			map.put("contentTitle",name);
			try {
				Page ghContentManageListPage =moduleService.search(map, new Page(pageNO, pageSize, 0, null, null));
				map.put("list", ghContentManageListPage.getData());
			} catch (Exception e) {
				e.printStackTrace();
			}
			return map;
		}
		
		/**
		 * 跳转到疫情上报页面
		 * @param model
		 * @return
		 */
		 @RequestMapping(value = "toEpidemic")
		 public String toEpidemic(
				 ModelMap model,String isShow,HttpServletRequest request,HttpServletResponse response) {
			try {
				SysUser sysUser = getSysUser();
				if(ObjectUtils.isEmpty(sysUser)){
					return "redirect:/app/module";
				}
				//底部导航栏
				wechartBanner(model,isShow);
				model.put("name", sysUser.getRealName());
				model.put("orgName", sysUser.getOrgName());
				model.put("user", sysUser);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return "App/epidemic/reportedToday";
		}
		 
		 /**
		  * 保存每日上报信息
		  * @param tbMailbox
		  * @param model
		  * @param request
		  * @param response
		  * @return
		  */
		 @RequestMapping(value = "saveEpidemic")
		 public String saveEpidemic(TbEpidemic tbEpidemic,
				 ModelMap model,HttpServletRequest request,HttpServletResponse response) {
			try {
				SysUser sysUser = getSysUser();
				if(ObjectUtils.isEmpty(sysUser)){
					return "redirect:/app/module";
				}
				tbEpidemic.setUserId(sysUser.getSuId());
				tbEpidemicService.saveEpidemic(tbEpidemic);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return "redirect:/app/module";
		}
}
