package com.bluebird.module.home.ctl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.FileDownload;
import com.bluebird.components.common.StringUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.exception.SystemException;
import com.bluebird.module.admin.model.GhAnnouncement;
import com.bluebird.module.admin.model.GhContentManage;
import com.bluebird.module.admin.model.GhContentType;
import com.bluebird.module.admin.model.GhMenuManage;
import com.bluebird.module.admin.model.Module;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.model.TbDataDownload;
import com.bluebird.module.admin.model.TbMailbox;
import com.bluebird.module.admin.model.TbPolicies;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.admin.service.GhAnnouncementService;
import com.bluebird.module.admin.service.GhContentManageService;
import com.bluebird.module.admin.service.GhContentTypeService;
import com.bluebird.module.admin.service.GhMenuManageService;
import com.bluebird.module.admin.service.ModuleService;
import com.bluebird.module.admin.service.TbDataDownloadService;
import com.bluebird.module.admin.service.TbMailboxService;
import com.bluebird.module.admin.service.TbPoliciesService;
import com.bluebird.module.system.model.SysOrg;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysDicService;
import com.bluebird.module.system.service.SysOrgService;
import com.bluebird.module.system.service.SysUserService;

@Controller
@RequestMapping("home/module")
public class ModuleHomeCtl extends BaseCtl{
	@Resource
	private SysDicService sysDicService;
	@Resource
	private ModuleService moduleService;
	@Resource
	private GhContentManageService ghContentManageService;
	@Resource
	private GhMenuManageService ghMenuManageService;
	@Resource
	private GhContentTypeService ghContentTypeService;
	@Resource
	private GhAnnouncementService ghAnnouncementService;
	@Resource
	private FileUploadService fileUploadService;
	@Resource
	private TbDataDownloadService tbDataDownloadService;
	@Resource
	private TbPoliciesService tbPoliciesService;
	@Resource
	private TbMailboxService tbMailboxService;
	@Resource
	private SysOrgService sysOrgService;
	@Resource
	private SysUserService sysUserService;
	
	public void getMenu(ModelMap model){
		try {
			//菜单
			List<GhMenuManage> ghMenuManage = ghMenuManageService.getListByCondition(new HashMap<>());
			model.put("ghMenuManage",ghMenuManage);
			SysUser sysUser = getSysUser();
			if(!ObjectUtils.isEmpty(sysUser)){
				model.put("isUser",true);
			}else{
				model.put("isUser",false);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value = "home")
	 public String home(String height,String width,ModelMap model, HttpServletRequest request) {
       try {
    	   if(StringUtil.isEmpty(height) || StringUtil.isEmpty(width)){
    		   return "redirect:/home/module";
    	   }
    	   Map<String,Object> windowMap = new HashMap<>();
    	   windowMap.put("width",width);
    	   windowMap.put("height", height);
    	   //0.206
    	   int top = (int)(Integer.parseInt(width)*0.206+185);
    	   windowMap.put("top", top);
    	   List<Module> selectAll = moduleService.selectAll(windowMap);
    	for(Module m : selectAll){
    		switch (m.getLevel1()) {
    		case "1":
    			//获取首页图片新闻
    			List<SysFile> fileList = ghContentManageService.getContentImgFile();
    			model.put("homeImg",fileList);
    			model.put("homeImgList",JSON.toJSONString(fileList));
    			break;
    		case "2":
    			//获取文章列表 传内容分类id(文章 图文类)
    			//获取需要条数。-58 /26
    			String[] split = m.getHeight().split("\\.");
    			Integer num = (Integer.parseInt(split[0])-48)/26;
    			List<GhContentManage> contentArticleList = moduleService.getContentList(m.getLevel2(),num,(byte)1);
    			m.setListGhContentManage(contentArticleList);
    			break;
    		case "3":
    			//获取图集 传内容分类id(图片类)
    			HashMap<Object, Object> hashMap2 = new HashMap<>();
    			hashMap2.put("contentTypeId", m.getLevel2());
    			GhContentType byCondition2 = ghContentTypeService.getByCondition(hashMap2);
    			m.setName(byCondition2.getContentTypeName());
    			List<SysFile> contentImgFileList  = moduleService.getContentImgFileList(m.getLevel2());
    			m.setContentImgFileList(contentImgFileList);
    			break;
    		case "4":
    			//通知公告  获取内容
    			Map<String,Object> map = new HashMap<String, Object>();
    			map.put("isShowIndex", "0");
    			List<GhAnnouncement> announcementList = ghAnnouncementService.getAnnouncementList(map);
    			model.put("announcementList",announcementList);
    			break;
    		case "5":
    			//主席信箱
    			//查询未登录
    			String[] split5 = m.getHeight().split("\\.");
    			Integer num5 = (Integer.parseInt(split5[0])-50)/65;
    			List<TbMailbox> tbMailbox = moduleService.getTbMailbox(null,num5);
    			model.put("tbMailbox", tbMailbox);
    			SysUser sysUser = getSysUser();
				if(!ObjectUtils.isEmpty(sysUser)){
					if(StringUtil.isNotEmpty(sysUser.getRoleId()) && "123456789".equals(sysUser.getRoleId())){
						//可以回复
						model.put("reply", "0");
					}else{
						//可以留言
						model.put("reply", "1");
					}
				}else{
					model.put("reply", "2");
				}
    			break;
    		case "6":
    			//4个按钮类型
    		case "11":
    			//6个按钮类型
    			HashMap<Object, Object> hashMap = new HashMap<>();
    			hashMap.put("menuId", m.getLevel2());
    			GhMenuManage byCondition = ghMenuManageService.getByCondition(hashMap);
    			m.setName(byCondition.getMenuName());
    			String[] split4 = m.getLevel3().split(",");
    			if(split4.length>0){
    				List<GhContentType> contentList = moduleService.getContentButtonList(split4);
    				m.setContentTypeList(contentList);
    			}
    			break;
    		case "7":
    			//工会概述
    			HashMap<Object, Object> menu = new HashMap<>();
    			menu.put("menuId", "6");
    			GhMenuManage menuManage = ghMenuManageService.getByCondition(menu);
    			if(ObjectUtils.isEmpty(menuManage)){
    				break;
    			}
    			m.setName(menuManage.getMenuName());
    			//查询不包含二级分类的分类
    			menu.put("contentType", "1");
	   			List<GhContentType> listByCondition1 = moduleService.getGhContentTypeList(menu);
	   			m.setContentTypeList(listByCondition1);
    			break;
    		case "8":
    			//多级分类展示
    			String[] split3 = m.getHeight().split("\\.");
    			Integer num3 = (Integer.parseInt(split3[0])-140)/41;
    			List<GhContentType> contentTypeList = moduleService.getContentTypeByMenuId(m.getLevel2());
    			contentTypeList.forEach(str ->{
    				try {
						List<GhContentManage> indexContentArticleList = moduleService.getContentList(str.getContentTypeId(),num3,(byte)1);
					    str.setContentManageList(indexContentArticleList);
					} catch (Exception e) {
						e.printStackTrace();
					}
    			});
    			m.setContentTypeList(contentTypeList);
    			break;
    		case "9":
    			//图片
    			break;
    		case "10":
    			//首页列表
    			String[] split2 = m.getHeight().split("\\.");
    			Integer num2 = (Integer.parseInt(split2[0])-48)/26;
    			List<GhContentManage> indexContentArticleList = moduleService.getContentList(m.getLevel2(),num2,(byte)0);
    			m.setListGhContentManage(indexContentArticleList);
    			break;
    		
    		}
    	}
    	//菜单
    	getMenu(model);
//    	List<GhMenuManage> ghMenuManage = ghMenuManageService.getListByCondition(new HashMap<>());
//    	model.put("ghMenuManage",ghMenuManage);
    	//导航栏高亮-首页
    	model.put("navigationBar","666666");
       	model.put("module",selectAll);
    	model.put("list",JSON.toJSONString(selectAll));
       } catch (Exception e) {
           Map<String, Object> map = new HashMap<>();
           map.put("status", SystemConstant.RETURN_STATUS_FAIL);
           map.put("msg", SystemConstant.RETURN_MSG_ERROR);
           model.put("msg", JSON.toJSONString(map));
           logger.error("跳转到添加页面异常：" + e.getMessage());
       }
       return "home/test";
   }	
	
	@RequestMapping(value = "")
	 public String home(ModelMap model, HttpServletRequest request) {
		return "home/homeTest";
	}
      
		 //职工文化
		 @RequestMapping(value = "culture")
		 public String culture(ModelMap model,HttpServletRequest request,HttpServletResponse response) {
			 //获取职工文化前六类
			 try {
				//菜单
			    getMenu(model);
			    //导航栏高亮
		    	model.put("navigationBar","4");
				List<GhContentType> culture  = moduleService.getCulture();
				String[] string = new String[culture.size()]; 
				for(int i=0;i<culture.size();i++){
					if(i<6){
						String[] str = {culture.get(i).getContentTypeId()};
						List<GhContentManage> cultureList = moduleService.getCultureList(str);
						culture.get(i).setContentManageList(cultureList);
					}else{
						string[i-6]=culture.get(i).getContentTypeId();
					}
				}
				if(culture.size()>6){
					List<GhContentManage> cultureList = moduleService.getCultureList(string);
					//其他所有的放到索引6
					culture.get(6).setContentManageList(cultureList);
				}
				model.put("GhContentType", culture);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
         return "homeList/culture";
		 } 
		 
		 //图片显示
		 @RequestMapping(value="/downloadTem")
			public void downloadTem(HttpServletResponse response,HttpServletRequest request,String filePath,String fileName)throws Exception{
				fileName = StringEscapeUtils.unescapeHtml4(fileName);
				FileDownload.fileDownload(response,request,filePath, fileName);
			}
			
			@RequestMapping(value="/downloadById")
			public void downloadById(HttpServletResponse response,HttpServletRequest request,String fileId)throws Exception{
				Map<String,Object> maps = new HashMap();
				maps.put("fileId", fileId);
				SysFile sysFile = fileUploadService.getByCondition(maps);
				String fileName = StringEscapeUtils.unescapeHtml4(sysFile.getName());
				FileDownload.fileDownload(response,request,sysFile.getUrl(), fileName);
			}
			
			//点击菜单
			@RequestMapping(value = "menu")
			 public String menu(String id,ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				//菜单
			    getMenu(model);
			    //导航栏高亮
		    	model.put("navigationBar",id);
				//查询不包含二级分类的分类
				Map<String,Object> hashMap = new HashMap<String,Object>();
				hashMap.put("menuId", id);
				hashMap.put("contentType", "1");
	   			try {
					List<GhContentType> listByCondition1 = moduleService.getGhContentTypeList(hashMap);
					if(listByCondition1.size()>0){
						for(GhContentType gh : listByCondition1){
							if("2".equals(gh.getContentType())){
								//是否属于工会概述
								if("6".equals(id)){
									//获取分类下的文章
									 List<GhContentManage> data = moduleService.getCulturePage(gh.getContentTypeId(),new Page(0, 1, 0, null, null)).getData();
								     if(data.size()>0){
								       return details(data.get(0).getContentId(),model,request,response);
								     }
								}
								if("3".equals(id)){
									//获取成功案例
									 List<GhContentManage> data = moduleService.getCulturePage(gh.getContentTypeId(),new Page(0, 1, 0, null, null)).getData();
								     if(data.size()>0){
								       return details(data.get(0).getContentId(),model,request,response);
								     }
								}
								if("1".equals(id)){
									//获取关于公司
									 List<GhContentManage> data = moduleService.getCulturePage(gh.getContentTypeId(),new Page(0, 1, 0, null, null)).getData();
								     if(data.size()>0){
								       return details(data.get(0).getContentId(),model,request,response);
								     }
								}
								return	this.listInfo(0, 10,gh.getContentTypeId(), model, request, response);
							}
						}
					}
						//菜单下没有分类或没有含文章的分类
						model.put("GhContentType", listByCondition1);
						List<GhContentType> listByCondition =new ArrayList<GhContentType>();
						GhContentType gh =  new GhContentType();
						hashMap.remove("contentType");
						GhMenuManage byCondition = ghMenuManageService.getByCondition(hashMap);
						gh.setMenuName(byCondition.getMenuName());
						gh.setMenuId(id);
						listByCondition.add(gh);
						model.put("GhContentType", listByCondition);
						return "homeList/ArticleListInfo";
					
						
					
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	   			return "redirect:/home/module";
			}
		 
			//分类列表
			@RequestMapping(value = "listInfo")
			 public String listInfo(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
						@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
						String id,ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				try {
					Map<String,Object> maps = new HashMap<String,Object>();
					maps.put("contentTypeId", id);
					//根据id获取分类
					GhContentType byCondition = ghContentTypeService.getByCondition(maps);
					if(byCondition.getContentTypeId().equals("877db69d9b58485eaa2e8c56d3ba2e08")){
						//获取分类下的文章
						 List<GhContentManage> data = moduleService.getCulturePage(byCondition.getContentTypeId(),new Page(0, 1, 0, null, null)).getData();
					     if(data.size()>0){
					       return details(data.get(0).getContentId(),model,request,response);
					     }
					}
					if(byCondition.getContentTypeId().equals("9af45733f2e34c819f15475a42587b27")){
						//获取分类下的文章
						 List<GhContentManage> data = moduleService.getCulturePage(byCondition.getContentTypeId(),new Page(0, 1, 0, null, null)).getData();
					     if(data.size()>0){
					       return details(data.get(0).getContentId(),model,request,response);
					     }
					}
					if(byCondition.getContentTypeId().equals("c39a5fa5149a48239599a194b2c98f91")){
						//获取分类下的文章
						 List<GhContentManage> data = moduleService.getCulturePage(byCondition.getContentTypeId(),new Page(0, 1, 0, null, null)).getData();
					     if(data.size()>0){
					       return details(data.get(0).getContentId(),model,request,response);
					     }
					}
					//是否属于工会概述
					if("6".equals(byCondition.getMenuId())){
						//获取分类下的文章
						 List<GhContentManage> data = moduleService.getCulturePage(byCondition.getContentTypeId(),new Page(0, 1, 0, null, null)).getData();
					     if(data.size()>0){
					       return details(data.get(0).getContentId(),model,request,response);
					     }
					}
					if("3".equals(byCondition.getMenuId())){
						//获取分类下的文章
						 List<GhContentManage> data = moduleService.getCulturePage(byCondition.getContentTypeId(),new Page(0, 1, 0, null, null)).getData();
					     if(data.size()>0){
					       return details(data.get(0).getContentId(),model,request,response);
					     }
					}
					if("1".equals(byCondition.getMenuId())){
						//获取分类下的文章
						 List<GhContentManage> data = moduleService.getCulturePage(byCondition.getContentTypeId(),new Page(0, 1, 0, null, null)).getData();
					     if(data.size()>0){
					       return details(data.get(0).getContentId(),model,request,response);
					     }
					}
					//菜单
			    	getMenu(model);
					//获取菜单
					//查询不包含二级分类的分类
					Map<String,Object> hashMap = new HashMap<String,Object>();
					hashMap.put("menuId", byCondition.getMenuId());
					hashMap.put("contentType", "1");
		   			List<GhContentType> listByCondition1 = moduleService.getGhContentTypeList(hashMap);
		   			model.put("GhContentType", listByCondition1);
		   		    //导航栏高亮
			    	model.put("navigationBar",byCondition.getMenuId());
					if("0".equals(byCondition.getContentType())){
						//URL
						 return "redirect:"+byCondition.getUrlPath();
					}else if("2".equals(byCondition.getContentType())){
						//获取分类下的文章
						Page cultureList = moduleService.getCulturePage(byCondition.getContentTypeId(),new Page(pageNO, pageSize, 0, null, null));
						model.put("page",cultureList);
						model.put("byCondition", byCondition);
						if("0".equals(byCondition.getArticleType())){
							//文章类
							return "homeList/ArticleListInfo";
						}else{
							//图文 图片类
							return "homeList/pictureListInfo";
						}
					}
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "redirect:/home/module";
			}
			
		
			/**
			 * 用户登录
			 * @param loginName
			 * @param password
			 * @param request
			 * @return
			 */
		    @RequestMapping(value = "userLogin", method = RequestMethod.POST)
		    public String userLogin(String loginName, String password, ModelMap model,HttpServletRequest request) {
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
		        } catch (Exception uae) {
		            logger.error("UnknownAccountException:" + loginName);
		        } 
		        return "redirect:/home/module";
		    }
		    
		    @RequestMapping(value = "checkUserAjax", method = {RequestMethod.POST})
			@ResponseBody
			public Map<String, Object> checkUserAjax(String loginName,String password ) throws Exception{
				Map<String,Object> returnMap =new HashMap<String,Object>();
		        Subject subject = SecurityUtils.getSubject();
		        removeSession(SystemConstant.SYS_USER_SESSION_KEY);
		        removeSession("moduleList");
		        subject.logout();
		        UsernamePasswordToken token = new UsernamePasswordToken(loginName, password);
		        token.setRememberMe(false);
		        try {
		            subject.login(token);
		            returnMap.put("userFlag", "1");
		        } catch (Exception e) {
		        	returnMap.put("userFlag", "0");
		        	logger.error("用户登录校验异常");
		        }
				return returnMap;
			}

		  //跳转修改密码页面
		    @RequestMapping(value = "getUserEdit")
		    public String getUserEdit(ModelMap model,HttpServletRequest request) {
		    	//菜单
		    	getMenu(model);
		    	SysUser sysUser = getSysUser();
				if(ObjectUtils.isEmpty(sysUser)){
					return "redirect:/home/module";
				}
		    	model.put("isMember",isMember(sysUser));
		    	return "homeList/personal/editPassword";
		    }
		    
		    //修改密码Ajax
		    @ResponseBody
		    @RequestMapping(value = "userEdit")
		    public Boolean userEdit(String passwordNew,String newPassword, ModelMap model,HttpServletRequest request) {
		    	if(passwordNew.equals(newPassword)){
		    		SysUser sysUser = getSysUser();
		    		if(ObjectUtils.isEmpty(sysUser)){
						return false;
					}
		    		try {
						boolean updatePwd = sysUserService.updatePwd(sysUser, newPassword);
						if(!updatePwd){
							return false;
						}
					} catch (Exception e) {
						e.printStackTrace();
					}
		    	}else{
		    		
		    	}
		    	return true;
		    }
		    
		    //密码确认Ajax
		    @ResponseBody
			@RequestMapping(value = "oldPassword")
			public Boolean oldPassword(String password, ModelMap model,HttpServletRequest request) {
		        try {
		        	  SysUser sysUser = getSysUser();
		              String pwd=new ShaPasswordEncoder().encodePassword(sysUser.getLoginName(), password);
		              if(!pwd.equals(sysUser.getPassword())){
		                  return false;
		              }		    		
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return true;
			}
		   
			//详情页
			@RequestMapping(value = "details")
			 public String details(String id,ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				try {
					//菜单
			    	getMenu(model);
					//根据文章id获取文章详情
					Map<String,Object> maps = new HashMap<String,Object>();
					maps.put("contentId", id);
					GhContentManage byCondition2 = ghContentManageService.getByCondition(maps);
					////根据分类ID获取分类
					Map<String,Object> maps2 = new HashMap<String,Object>();
					maps2.put("contentTypeId", byCondition2.getBelongContentType());
					GhContentType byCondition = ghContentTypeService.getByCondition(maps2);
					model.put("byCondition", byCondition);
					//获取菜单
					//查询不包含二级分类的分类
					Map<String,Object> hashMap = new HashMap<String,Object>();
					hashMap.put("menuId", byCondition.getMenuId());
					hashMap.put("contentType", "1");
		   			List<GhContentType> listByCondition1 = moduleService.getGhContentTypeList(hashMap);
		   			model.put("GhContentType", listByCondition1);
		   		    //导航栏高亮
			    	model.put("navigationBar",byCondition.getMenuId());
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
//		   			if("c405f791baff422d9bb9f5febfc422d9".equals(id)){
		   				
//		   				return "homeList/details/articleInfo";
//		   			}
		   			if("0".equals(byCondition.getArticleType())){
		   			    //文章类
						return "homeList/details/articleInfo";
					}else if("2".equals(byCondition.getArticleType())){
						//图片类
						return "homeList/details/pictureInfo";
					}else{
						//图文类
						return "homeList/details/imgInfo";
					}
		   			
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				return "redirect:/home/module";
			}

			//通知公告列表
			@RequestMapping(value = "announcementList")
			 public String announcementList(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
						@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
						ModelMap model,HttpServletRequest request,HttpServletResponse response) {
			try {
				//菜单
		    	getMenu(model);
				model.put("page",  ghAnnouncementService.getListByCondition(new HashMap<String,String>(),new Page(pageNO, pageSize, 0, null, null)));
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
				return "homeList/announcement/announcementList";
			}
			//通知公告详情
			@RequestMapping(value = "announcementInfo")
			 public String announcementInfo(String id,ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				HashMap<String, String> hashMap = new HashMap<String, String>();
				hashMap.put("announcementId", id);
				try {
					//菜单
			    	getMenu(model);
					model.put("ghAnnouncement", ghAnnouncementService.getByCondition(hashMap));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "homeList/announcement/announcementInfo";
			}

			//主席信箱列表 公众的
			@RequestMapping(value = "listTbMailboxPage")
			 public String getListTbMailboxPage(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
						@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
						ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				try {
					//菜单
			    	getMenu(model);
					model.put("page", moduleService.getListTbMailboxPage(new HashMap<String,String>(), new Page(pageNO, pageSize, 0, null, null) ));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "homeList/mailbox/mailboxList";
			}
			
			//主席信箱详情
			@RequestMapping(value = "TbMailboxPageInfo")
			 public String TbMailboxPageInfo(String id,
					 ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				try {
					//菜单
			    	getMenu(model);
					model.put("mailbox", moduleService.getTbMailboxByMailboxId(id));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "homeList/mailbox/mailboxInfo";
			}
			
			//主席信箱  跳转留言页面
			@RequestMapping(value = "getTbMailbox")
			 public String getTbMailbox(
					 ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				try {
					//菜单
			    	getMenu(model);
					SysUser sysUser = getSysUser();
					if(ObjectUtils.isEmpty(sysUser)){
						return "redirect:/home/module";
					}
					model.put("name", sysUser.getRealName());
					model.put("orgName", sysUser.getOrgName());
				} catch (Exception e) {
					e.printStackTrace();
				}
				return "homeList/mailbox/mailbox";
			}
			
			//主席信箱  留言接口
			@RequestMapping(value = "TbMailbox")
			 public String TbMailbox(TbMailbox tbMailbox,
					 ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				try {
					SysUser sysUser = getSysUser();
					if(ObjectUtils.isEmpty(sysUser)){
						return "redirect:/home/module";
					}
					tbMailbox.setCreatUser(sysUser.getSuId());
					tbMailbox.setOrgId(sysUser.getOrgId());
					tbMailboxService.save(tbMailbox);
				} catch (Exception e) {
					e.printStackTrace();
				}
				return "redirect:/home/module";
			}
			
			//主席信箱 回复列表
			@RequestMapping(value = "findTbMailbox")
			 public String findTbMailbox(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
						@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
						ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				try {
					//菜单
			    	getMenu(model);
					SysUser sysUser = getSysUser();
					if(ObjectUtils.isEmpty(sysUser)){
						return "redirect:/home/module";
					}
					model.put("page", moduleService.getPageListTbMailbox(new HashMap<String,String>(), new Page(pageNO, pageSize, 0, null, null)));
				} catch (Exception e) {
					e.printStackTrace();
				}
				return "homeList/mailbox/replyList";
			}
			
			//主席信箱 回复详情
			@RequestMapping(value = "findTbMailboxInfo")
			 public String findTbMailboxInfo(String id,
						ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				try {
					//菜单
			    	getMenu(model);
					SysUser sysUser = getSysUser();
					if(ObjectUtils.isEmpty(sysUser)){
						return "redirect:/home/module";
					}
					model.put("mailbox", moduleService.getTbMailboxByMailboxId(id));
				} catch (Exception e) {
					e.printStackTrace();
				}
				return "homeList/mailbox/replyInfo";
			}
			
			//主席信箱 回复接口
			@RequestMapping(value = "saveTbMailbox")
			 public String saveTbMailbox(TbMailbox tbMailbox,
						ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				try {
					SysUser sysUser = getSysUser();
					if(ObjectUtils.isEmpty(sysUser)){
						return "redirect:/home/module";
					}
					tbMailbox.setReplierUser(sysUser.getSuId());
					tbMailbox.setReplierDate(TimeHelper.getLocatlTime());
					tbMailbox.setReplierType("1");
					tbMailboxService.edit(tbMailbox);
				} catch (Exception e) {
					e.printStackTrace();
				}
				return "redirect:/home/module/findTbMailbox";
			}
			//跳转我要入会页面
			@RequestMapping(value = "initiation")
			 public String initiation(ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				SysUser sysUser = getSysUser();
				if(ObjectUtils.isEmpty(sysUser)){
					return "redirect:/home/module";
				}
				try {
					//菜单
			    	getMenu(model);
			    	Boolean boo = isMember(sysUser);
					model.put("isMember",boo);
					if(!boo){
						//是会员了
						return "redirect:/home/module/member";
					}
					model.put("education", sysDicService.getCacheDicByType("education"));
					model.put("politicsStatus", sysDicService.getCacheDicByType("politicsStatus"));
					SysUser user =sysUserService.getById(sysUser.getSuId());
					model.put("user",user);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "homeList/personal/initiation";
			}
			//跳转会员信息页面
			@RequestMapping(value = "member")
			 public String member(ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				SysUser sysUser = getSysUser();
				if(ObjectUtils.isEmpty(sysUser)){
					return "redirect:/home/module";
				}
				try {
					//菜单
			    	getMenu(model);
			    	Boolean boo = isMember(sysUser);
					model.put("isMember",boo);
					if(boo){
						//不是会员
						return "redirect:/home/module/initiation";
					}
					model.put("education", sysDicService.getCacheDicByType("education"));
					model.put("politicsStatus", sysDicService.getCacheDicByType("politicsStatus"));
					SysUser user =sysUserService.getById(sysUser.getSuId());
					model.put("user",user);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "homeList/personal/user";
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
				return "redirect:/home/module/initiation";
			}
			//我的留言
			@RequestMapping(value = "MyTbMailbox")
			 public String MyTbMailbox(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
						@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,
						ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				try {
					SysUser sysUser = getSysUser();
					if(ObjectUtils.isEmpty(sysUser)){
						return "redirect:/home/module";
					}
					//菜单
			    	getMenu(model);
					HashMap<String, String> hashMap = new HashMap<String,String>();
					hashMap.put("creatUser", sysUser.getSuId());
					model.put("isMember",isMember(sysUser));
					model.put("page", tbMailboxService.getListByCondition(hashMap, new Page(pageNO, pageSize, 0, null, null)));
				} catch (Exception e) {
					e.printStackTrace();
				}
				return "homeList/personal/mailbox";
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
			
			//资料下载
			@RequestMapping(value = "tbFileDownload")
			 public String tbFileDownload(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
						@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,String id,
						ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				Map<String,Object> maps = new HashMap<String,Object>();
				try {
					//菜单
			    	getMenu(model);
			    	//导航栏高亮
			    	model.put("navigationBar",id);
					//获取菜单
					//查询不包含二级分类的分类
					Map<String,Object> hashMap = new HashMap<String,Object>();
					hashMap.put("menuId", id);
					hashMap.put("contentType", "1");
		   			List<GhContentType> listByCondition1 = moduleService.getGhContentTypeList(hashMap);
		   			hashMap.remove("contentType");
		   			GhMenuManage byCondition = ghMenuManageService.getByCondition(hashMap);
		   			model.put("GhMenuManage", byCondition);
		   			model.put("GhContentType", listByCondition1);
		   			//资料下载
		   			model.put("page",  moduleService.getTbFileDownload(hashMap,new Page(pageNO, pageSize, 0, null, null)));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				return "homeList/download/downloadList";
			}
			
			//资料下载详情
			@RequestMapping(value = "tbFileDownloadInfo")
			 public String tbFileDownloadInfo(String id,String menuId,
						ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				try {
					//菜单
			    	getMenu(model);
			    	//导航栏高亮
			    	model.put("navigationBar",menuId);
					//获取菜单
					//查询不包含二级分类的分类
					Map<String,Object> hashMap = new HashMap<String,Object>();
					hashMap.put("menuId", menuId);
					hashMap.put("contentType", "1");
		   			List<GhContentType> listByCondition1 = moduleService.getGhContentTypeList(hashMap);
		   			model.put("GhContentType", listByCondition1);
		   			hashMap.remove("contentType");
		   			GhMenuManage byCondition = ghMenuManageService.getByCondition(hashMap);
		   			model.put("GhMenuManage", byCondition);
		   			Map<String,Object> maps = new HashMap<String,Object>();
					maps.put("fileId", id);
					TbDataDownload byCondition2 = tbDataDownloadService.getByCondition(maps);
					if(StringUtil.isNotEmpty(byCondition2.getFileUuid())){
						//存在附件
	   					Map<String,Object> fileUuid = new HashMap<String,Object>();
	   					fileUuid.put("uuid", byCondition2.getFileUuid());
						List<SysFile> listByCondition = fileUploadService.getListByCondition(fileUuid);
						byCondition2.setFileList(listByCondition);
					}
					model.put("download", byCondition2);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "homeList/download/downloadInfo";
			}
			
			//法律法规
			@RequestMapping(value = "tbPolicies")
			 public String tbPolicies(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
						@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,String id,
						ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				Map<String,Object> maps = new HashMap<String,Object>();
				try {
					//菜单
			    	getMenu(model);
			    	//导航栏高亮
			    	model.put("navigationBar",id);
					//获取菜单
					//查询不包含二级分类的分类
					Map<String,Object> hashMap = new HashMap<String,Object>();
					hashMap.put("menuId", id);
					hashMap.put("contentType", "1");
		   			List<GhContentType> listByCondition1 = moduleService.getGhContentTypeList(hashMap);
		   			hashMap.remove("contentType");
		   			GhMenuManage byCondition = ghMenuManageService.getByCondition(hashMap);
		   			model.put("GhMenuManage", byCondition);
		   			model.put("GhContentType", listByCondition1);
		   			//法律法规
		   			model.put("page",  moduleService.getTbPolicies(hashMap,new Page(pageNO, pageSize, 0, null, null)));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "homeList/policies/policiesList";
			}
			
			//法律法规详情
			@RequestMapping(value = "tbPoliciesInfo")
			 public String tbPoliciesInfo(String id,String menuId,
						ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				try {
					//菜单
			    	getMenu(model);
			    	//导航栏高亮
			    	model.put("navigationBar",menuId);
					//获取菜单
					//查询不包含二级分类的分类
					Map<String,Object> hashMap = new HashMap<String,Object>();
					hashMap.put("menuId", menuId);
					hashMap.put("contentType", "1");
		   			List<GhContentType> listByCondition1 = moduleService.getGhContentTypeList(hashMap);
		   			model.put("GhContentType", listByCondition1);
		   			hashMap.remove("contentType");
		   			GhMenuManage byCondition = ghMenuManageService.getByCondition(hashMap);
		   			model.put("GhMenuManage", byCondition);
		   			Map<String,Object> maps = new HashMap<String,Object>();
					maps.put("policiesId", id);
					TbPolicies byCondition2 = tbPoliciesService.getByCondition(maps);
					 if(StringUtil.isNotEmpty(byCondition2.getFileUuid())){
							//存在附件
		   					Map<String,Object> fileUuid = new HashMap<String,Object>();
		   					fileUuid.put("uuid", byCondition2.getFileUuid());
							List<SysFile> listByCondition = fileUploadService.getListByCondition(fileUuid);
							byCondition2.setFileList(listByCondition);
					 }
					model.put("policies",byCondition2);
				} catch (Exception e) {
					e.printStackTrace();
				}
				return "homeList/policies/policiesInfo";
			}
			//搜索search
			@RequestMapping(value = "search")
			 public String search(@RequestParam(value="pageNO",defaultValue="0") Integer pageNO,
						@RequestParam(value="pageSize",defaultValue="10") Integer pageSize,String name,
						ModelMap model,HttpServletRequest request,HttpServletResponse response) {
				Map<String,Object> hashMap = new HashMap<String,Object>();
				hashMap.put("contentTitle",name);
				try {
					//菜单
			    	getMenu(model);
					model.put("name", name);
					model.put("page", moduleService.search(hashMap, new Page(pageNO, pageSize, 0, null, null)));
				} catch (Exception e) {
					e.printStackTrace();
				}
				return "homeList/search/searchList";
			}
			
}
