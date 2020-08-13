package com.bluebird.module.system.ctl;

import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.ContextLoader;
import org.springframework.web.context.WebApplicationContext;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.FileUtils;
import com.bluebird.components.common.Servlets;
import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.components.utils.FileUtil;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.service.FileUploadService;
import com.bluebird.module.system.model.SysDic;
import com.bluebird.module.system.model.SysOrg;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysDicService;
import com.bluebird.module.system.service.SysOrgService;
import com.bluebird.module.system.service.SysRoleService;
import com.bluebird.module.system.service.SysUserService;
import com.itextpdf.text.Font;
import com.itextpdf.text.pdf.AcroFields;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;

/**
 * 系统用户管理Ctl
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-16 17:05
 * @extends BaseCtl
 */
@Controller
@RequestMapping("/system/user")
public class SysUserCtl extends BaseCtl {

    @Resource
    private SysOrgService sysOrgService;

    @Resource
    private SysRoleService sysRoleService;

    @Resource
    private SysUserService sysUserService;
    
    @Resource
    private  FileUploadService fileUploadService;

    @Resource
    private  SysDicService sysDicService;
    
    /**
     * 获取所有系统用户跳转到系统用户管理首页
     *
     * @param pageNO   页数
     * @param pageSize 每页数量
     * @param sort     排序字符串
     * @param model    model
     * @return String
     */
    @RequiresPermissions("system_user")
    @RequestMapping(value = "")
    public String toIndex(@RequestParam(value = "pageNO", defaultValue = "0") Integer pageNO,
                          @RequestParam(value = "pageSize", defaultValue = "15") Integer pageSize,
                          @RequestParam(value = "sort", defaultValue = "a.create_date DESC") String sort,
                          String msg, ModelMap model, HttpServletRequest request) {
        try {
            if (StringUtils.isNotEmpty(msg)) {
                model.put("msg", msg);
            }
            Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
            model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));
            model.put("orgList", sysOrgService.getAllChildOrg(getSysUser().getOrgId(), true));
            model.put("roleList", sysRoleService.getAllRole(getSysUser(), true));
            searchParams.put("orgIds", getSysUser().getDbPmss());
            SysUser user = new SysUser();
            BeanUtils.populate(user, searchParams);
            model.put("user", user);
            model.put("page", sysUserService.getUserListByOrgIds(new Page(pageNO, pageSize, 0, sort, null), searchParams));
            //将查询的map转换成对象
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
        }
        return "/system/user/index";
    }

    /**
     * 查看用户详情
     *
     * @param suId     用户ID
     * @param backUrl 回调参数
     * @param model   model
     * @return String
     */
    @RequiresPermissions("system_user")
    @RequestMapping(value = "details/{suId}/")
    public String details(@PathVariable String suId, String backUrl, ModelMap model) {
        try {
            model.put("user", sysUserService.getById(suId));
            model.put("paramMap", paramUnits(backUrl));
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return "/system/user/details";
    }

    /**
     * 跳转到添加页面
     *
     * @param backUrl 回掉参数
     * @param model   model
     * @return String
     */
    @RequiresPermissions("system_user")
    @RequestMapping(value = "toadd")
    public String toAdd(String backUrl, ModelMap model) {
        model.put("backUrl", backUrl);
        model.put("paramMap", paramUnits(backUrl));
        try {
            model.put("orgList", sysOrgService.getAllChildOrg(getSysUser().getOrgId(), true));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
            logger.error("跳转到添加页面异常：" + e.getMessage());
        }
        return "system/user/add";
    }

    /**
     * 添加用户
     *
     * @param sysUser 用户信息
     * @param backUrl 回调参数
     * @param model   model
     * @return String
     */
    @RequiresPermissions("system_user_add")
    @RequestMapping(value = "doadd")
    public String doAdd(SysUser sysUser, String backUrl, ModelMap model) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        model.put("paramMap", paramUnits(backUrl));
        try {
            sysUser.setIdentity(0);
            sysUser.setState(1);
            sysUserService.saveSysUser(sysUser);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "添加成功");
            model.put("paramMsg", JSON.toJSONString(resultMap).replace("\"", "'"));
            return "system/user/redirect";
        } catch (Exception e) {//添加失败重新跳转到添加页面
            model.put("backUrl", backUrl);
            logger.error("添加用户异常：" + e.getMessage());
            try {
                model.put("orgList", sysOrgService.getAllChildOrg(getSysUser().getOrgId(), true));
            } catch (Exception e1) {
                logger.error("查询机构集合异常：" + e1.getMessage());
            }
            model.put("user", sysUser);
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
            model.put("msg", JSON.toJSONString(resultMap));
            return "system/user/add";
        }
    }

    /**
     * 跳转到修改页面
     *
     * @param suId     用户ID
     * @param backUrl 回掉参数
     * @param model   model
     * @return String
     */
    @RequiresPermissions("system_user_update")
    @RequestMapping(value = "updateUser/{suId}/")
    public String updateUser(@PathVariable String suId, String backUrl, ModelMap model) {
        model.put("backUrl", backUrl);
        model.put("paramMap", paramUnits(backUrl));
        try {
            model.put("user", sysUserService.getById(suId));
            model.put("orgList", sysOrgService.getAllChildOrg(getSysUser().getOrgId(), true));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
            logger.error("跳转到修改页面异常：" + e.getMessage());
        }
        return "system/user/update";
    }

    /**
     * 修改用户
     *
     * @param sysUser 用户信息
     * @param backUrl 回掉参数
     * @param model   model
     * @return String
     */
    @RequiresPermissions("system_user_update")
    @RequestMapping(value = "doupdate")
    public String doUpdate(SysUser sysUser, String backUrl, ModelMap model) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        model.put("paramMap", paramUnits(backUrl));
        try {
            sysUserService.updateSysUser(sysUser);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "修改成功");
            model.put("paramMsg", JSON.toJSONString(resultMap).replace("\"", "'"));
            return "system/user/redirect";
        } catch (Exception e) {//修改失败重新跳转到添加页面
            model.put("backUrl", backUrl);
            logger.error("修改用户异常：" + e.getMessage());
            try {
                model.put("orgList", sysOrgService.getAllChildOrg(getSysUser().getOrgId(), true));
            } catch (Exception e1) {
                logger.error("查询机构集合异常：" + e1.getMessage());
            }
            model.put("user", sysUser);
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
            model.put("msg", JSON.toJSONString(resultMap));
            return "system/user/update";
        }
    }

    /**
     * 删除用户
     *
     * @param suId     用户ID
     * @param backUrl 回跳地址串
     * @param model   model
     * @return String
     */
    @RequiresPermissions("system_user_del")
    @RequestMapping(value = "delUser")
    public String delUser(String suId, String backUrl, ModelMap model) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        model.put("paramMap", paramUnits(backUrl));
        try {
            sysUserService.delUserBySuId(suId);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "删除成功");
        } catch (Exception e) {
            logger.error("删除用户异常：" + e.getMessage());
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
        }
        model.put("paramMsg", JSON.toJSONString(resultMap).replace("\"", "'"));
        return "system/user/redirect";
    }

    /**
     * 重置用户密码
     *
     * @param suId 用户ID
     * @return map
     */
    @RequiresPermissions("system_user_update")
    @RequestMapping(value = "resetpwd/{suId}/")
    @ResponseBody
    public Map<String, Object> resetPwd(@PathVariable String suId) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            SysUser user = sysUserService.getById(suId);
            sysUserService.updatePwd(suId, user.getLoginName());
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "密码重置成功");
        } catch (Exception e) {
            logger.error("重置用户密码异常：" + e.getMessage());
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
        }
        return resultMap;
    }

    /**
     * 用户角色授权
     *@param suId 用户ID
     * @param roleId  角色ID
     * @param backUrl 回跳地址串
     * @param model model
     * @return String
     */
    @RequiresPermissions("system_user_role")
    @RequestMapping(value = "roleAuthorize")
    public String roleAuthorize(String suId, String roleId, String backUrl, ModelMap model) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("status", "授权失败");
        model.put("paramMap", paramUnits(backUrl));
        try {
            SysUser sysUser=new SysUser();
            sysUser.setSuId(suId);
            sysUser.setRoleId(roleId);
            sysUserService.updateSysUser(sysUser);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "授权成功");
        } catch (Exception e) {
            logger.error("取消用户角色授权异常：" + e.getMessage());
        }
        model.put("paramMsg", JSON.toJSONString(resultMap).replace("\"", "'"));
        return "system/user/redirect";
    }

    /**
     * 取消用户角色授权
     *
     * @param suId     用户ID
     * @param backUrl 回跳地址串
     * @param model model
     * @return String
     */
    @RequiresPermissions("system_user_role")
    @RequestMapping(value = "delAuthorize")
    public String delAuthorize(String suId, String backUrl, ModelMap model) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("status", "取消授权失败");
        model.put("paramMap", paramUnits(backUrl));
        try {
            SysUser sysUser=new SysUser();
            sysUser.setSuId(suId);
            sysUser.setRoleId("");
            sysUserService.updateSysUser(sysUser);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "取消授权成功");
        } catch (Exception e) {
            logger.error("取消用户角色授权异常：" + e.getMessage());
        }
        model.put("paramMsg", JSON.toJSONString(resultMap).replace("\"", "'"));
        return "system/user/redirect";
    }
    
    /**
     * 查询登录名称是否唯一
     */
    @RequestMapping(value = "findAllUser", method = {RequestMethod.POST})
	@ResponseBody
	public Map<String, Object> findAllUser(String loginName) throws Exception{
		   Map<String, Object> map = new HashMap<>();
		   map.put("msg", "查询失败");
		     List<SysUser> sysUsers = sysUserService.getListByCondition(map);
		   // 判断登录名称不重复
		   for (SysUser sysUser : sysUsers) {
			   if (sysUser.getLoginName().equals(loginName)) {
				   map.put("status", SystemConstant.RETURN_STATUS_FAIL); 
				   map.put("msg", "登录名称已存在"); 
				   break;
			   }else {
				   map.put("status", SystemConstant.RETURN_STATUS_SUCCESS); 
			   }
		    }
		return map;
	}
    
//    会员查询
    @RequiresPermissions("user_manager_query")
    @RequestMapping(value = "memberQuery")
    public String memberQuery(@RequestParam(value = "pageNO", defaultValue = "0") Integer pageNO,
                          @RequestParam(value = "pageSize", defaultValue = "5") Integer pageSize,
                          @RequestParam(value = "sort", defaultValue = "a.create_date DESC") String sort,
                          String msg, ModelMap model, HttpServletRequest request) {
        try {
            if (StringUtils.isNotEmpty(msg)) {
                model.put("msg", msg);
            }
            
            SysOrg org = sysOrgService.getById(getSysUser().getOrgId());
            Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
            searchParams.put("isMember", "0");
            searchParams.put("orgLevels", org.getLevels());
            model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));
            model.put("orgList", sysOrgService.getAllChildOrg(org.getOrgId(), true));
            model.put("roleList", sysRoleService.getAllRole(getSysUser(), true));
            searchParams.put("orgIds", getSysUser().getDbPmss());
            SysUser user = new SysUser();
            BeanUtils.populate(user, searchParams);
            model.put("user", user);
            model.put("page", sysUserService.getMemberListByOrgIds(new Page(pageNO, pageSize, 0, sort, null), searchParams));
            //将查询的map转换成对象
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
        }
        return "/admin/userManage/memberIndex";
    }
    
//    会员查看
    @RequiresPermissions("system_user")
    @RequestMapping(value = "memberDetails/{suId}/")
    public String memberDetails(@PathVariable String suId, String backUrl, ModelMap model) {
        try {
            model.put("user", sysUserService.getById(suId));
            model.put("paramMap", paramUnits(backUrl));
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return "/admin/userManage/memberDetails";
    }
    
    /**
     * 审核列表  自己只能审核自己部门的会员
     * @param pageNO
     * @param pageSize
     * @param sort
     * @param msg
     * @param model
     * @param request
     * @return
     */
    /*@RequiresPermissions("user_manager_review")*/
    @RequestMapping(value = "memberReview")
    public String memberReview(@RequestParam(value = "pageNO", defaultValue = "0") Integer pageNO,
                          @RequestParam(value = "pageSize", defaultValue = "15") Integer pageSize,
                          @RequestParam(value = "sort", defaultValue = "a.create_date DESC") String sort,
                          String msg, ModelMap model, HttpServletRequest request) {
        try {
            if (StringUtils.isNotEmpty(msg)) {
                model.put("msg", msg);
            }
            Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
            searchParams.put("isMember", "2");
            searchParams.put("orgId", getSysUser().getOrgId());
            model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));
            model.put("orgList", sysOrgService.getAllChildOrg(getSysUser().getOrgId(), true));
            model.put("roleList", sysRoleService.getAllRole(getSysUser(), true));
            searchParams.put("orgIds", getSysUser().getDbPmss());
            SysUser user = new SysUser();
            BeanUtils.populate(user, searchParams);
            model.put("user", user);
            model.put("page", sysUserService.getUserListByOrgIds(new Page(pageNO, pageSize, 0, sort, null), searchParams));
            //将查询的map转换成对象
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
        }
        return "/admin/userManage/memberReview";
    }
    
//    跳转到审核页面
    @RequiresPermissions("system_user")
    @RequestMapping(value = "reviewDetails/{suId}/")
    public String reviewDetails(@PathVariable String suId, String backUrl, ModelMap model) {
        try {
            model.put("user", sysUserService.getById(suId));
            model.put("paramMap", paramUnits(backUrl));
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return "/admin/userManage/memberReviewForm";
    }
    
    //审核
   /* @RequiresPermissions("system_user_update")*/
    @RequestMapping(value = "doReview")
    public String doReview(SysUser sysUser, String backUrl, ModelMap model) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        model.put("paramMap", paramUnits(backUrl));
        try {
        	
        	//如果是会员
        	if("0".equals(sysUser.getIsMember())){
        		//生成pdf文件
        		SysUser member = sysUserService.getById(sysUser.getSuId());
        		member.setOpinion(sysUser.getOpinion());
        		
        		 //学历以及政治面貌需要翻译
        		HashMap<String, Object> map = new HashMap<String, Object>();
                if(StringUtils.isNotEmpty(member.getEducation())){
	                map.put("dicCode", member.getEducation());
	                map.put("pCode", "education");
               	 	SysDic sysDic = sysDicService.getSysDicByCode(map);
               	 	if(sysDic!=null){
               	 		member.setEducation(sysDic.getDicName());
               	 	}
                }
                
                if(StringUtils.isNotEmpty(member.getPoliticalStatus())){
	                map.put("dicCode", member.getPoliticalStatus());
	                map.put("pCode", "politicsStatus");
               	 	SysDic sysDic = sysDicService.getSysDicByCode(map);
               	 if(sysDic!=null){
            	 		member.setPoliticalStatus(sysDic.getDicName());
            	 	}
                }
        		
                if(StringUtils.isNotEmpty(String.valueOf(member.getGender()))){
                	if(member.getGender() ==1){
                		member.setSex("女");
                	}else if(member.getGender() ==0){
                		member.setSex("男");
                	}
                }
                member.setBirthday(member.getBirthday().substring(0,10));
        		SysFile sysFile = createAllPdf(member);
        		sysUser.setMemberFile(sysFile.getFileId());
        		fileUploadService.saveSelective(sysFile);
        	}
        	
            sysUserService.updateSysUser(sysUser);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "修改成功");
            model.put("paramMsg", JSON.toJSONString(resultMap).replace("\"", "'"));
            return "redirect:/system/user/memberReview";
        } catch (Exception e) {//修改失败重新跳转到添加页面
            model.put("backUrl", backUrl);
            logger.error("修改用户异常：" + e.getMessage());
            try {
                model.put("orgList", sysOrgService.getAllChildOrg(getSysUser().getOrgId(), true));
            } catch (Exception e1) {
                logger.error("查询机构集合异常：" + e1.getMessage());
            }
            model.put("user", sysUser);
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
            model.put("msg", JSON.toJSONString(resultMap));
            return "redirect:/system/user/memberReview";
        }
    }
    
    //生成文件并压缩
    public static SysFile createAllPdf(SysUser user) throws Exception {
    	
    	 String uuid = SysUtil.GetUUID();
    	 //创建文件夹
    	 String	dirPath = SystemConstant.FILEUPLOAD_PATH+"moudle"+File.separator+uuid;
    	 File dir = new File(dirPath);
    	 if (!dir.exists()){
    		 dir.mkdirs();
    	 }
    	 String zipFile = dir.getAbsolutePath()+".zip";
    	 
    	 WebApplicationContext webApplicationContext = ContextLoader.getCurrentWebApplicationContext();
         ServletContext servletContext = webApplicationContext.getServletContext();
         // 得到文件夹绝对路径
         String realPath = servletContext.getRealPath("template");
    	 //生成申请书的pdf
    	 createApplicationPdf(realPath.replace("\\", "/"),dir.getAbsolutePath(),user);
    	 createRegistRationPdf(realPath.replace("\\", "/"),dir.getAbsolutePath(),user);
    	 FileOutputStream fos1 = new FileOutputStream(new File(zipFile));
    	 //文件压缩
    	 FileUtil.toZip(dirPath,fos1,true);
    	 
    	 //存入sysFile表中
    	 SysFile sysFile = new SysFile();
    	 sysFile.setFileId(uuid);
    	 sysFile.setFileName(uuid+".zip");
    	 sysFile.setName(user.getRealName()+"入会申请资料.zip");
    	 sysFile.setUuid(uuid);
    	 sysFile.setFileType("zip");
    	 sysFile.setDeleteFlag("0");
    	 sysFile.setCreatUser(user.getSuId());
    	 sysFile.setCreatDate(TimeHelper.getLocatlTime());
    	 sysFile.setFileSource("入会申请");
    	 sysFile.setFileSize(FileUtils.getFileNameSize(zipFile));
    	 String fileuploadRootDir = SystemConstant.FILEUPLOAD_root_PATH; 
    	 zipFile = zipFile.replace("\\", "/");
         String filePath =  zipFile.substring(fileuploadRootDir.length());
         sysFile.setUrl(filePath);
    	 //删除原文件夹
         deleteFolder(dir);
    	 return sysFile;
    }
    
    //删除生成的文件夹
    
    public static void deleteFolder(File file) throws Exception {
    	File[] listFiles = file.listFiles();
    	if (listFiles != null) {
			for (File f : listFiles) {
				if (f.isDirectory()) {
					deleteFolder(f);
				} else {
					f.delete();
				}
			}
		}
		file.delete();
    }
    
    //生成登记表的pdf文件
    public static void createRegistRationPdf(String path,String root,SysUser user) throws Exception {
    	 //填充创建pdf
    	PdfReader registRationReader = null;
        PdfStamper registRationStamp = null;
         try {
        	 //申请表生成pdf文件
        	 registRationReader = new PdfReader(path+"/registrationForm.pdf");
             File registRationFile = new File(root, user.getRealName() +"登记表"+ ".pdf");
             registRationStamp = new PdfStamper(registRationReader, new FileOutputStream(registRationFile));
             
             BaseFont bf = BaseFont.createFont("STSong-Light", "UniGB-UCS2-H",BaseFont.NOT_EMBEDDED);
             /*Font fontChinese = new Font(bf, 12, Font.NORMAL);*/
             //取出报表模板中的所有字段
             AcroFields registRationForm = registRationStamp.getAcroFields();
             registRationForm.addSubstitutionFont(bf);//这行必须添加否则中文不显示
             // 填充数据 姓名
             registRationForm.setField("memberName", user.getRealName());
             registRationForm.setField("birthday", user.getBirthday());
             registRationForm.setField("birthplace", user.getBirthplace());
             registRationForm.setField("nation", user.getNation());
             registRationForm.setField("wage", user.getWage());
             registRationForm.setField("politicalStatus", user.getPoliticalStatus());
             registRationForm.setField("education", user.getEducation());
             registRationForm.setField("position", user.getPosition());
             registRationForm.setField("hometown", user.getHometown());
             registRationForm.setField("opinion", user.getOpinion());
             registRationForm.setField("sex", user.getSex());
             registRationForm.setField("remark", user.getRemark());
             
             registRationStamp.setFormFlattening(true);
             
         } catch (Exception e) {
             e.printStackTrace();
         } finally {
             if (registRationStamp != null) {
            	 registRationStamp.close();
             }
             if (registRationReader != null) {
            	 registRationReader.close();
             }
         }
    }
    
    public static void createApplicationPdf(String path, String root,SysUser user) throws Exception {
   	 	//填充创建pdf
    	PdfReader applicationReader = null;
        PdfStamper applicationStamp = null;
        
        try {
       	 //申请表生成pdf文件
       	 	applicationReader = new PdfReader(path+"/moudel.pdf");
            File applicationFile = new File(root, user.getRealName() +"申请书"+ ".pdf");
            applicationStamp = new PdfStamper(applicationReader, new FileOutputStream(applicationFile));
            BaseFont bf = BaseFont.createFont("STSong-Light", "UniGB-UCS2-H",BaseFont.NOT_EMBEDDED);
            //取出报表模板中的所有字段
            AcroFields applicationForm = applicationStamp.getAcroFields();
            applicationForm.addSubstitutionFont(bf);//这行必须添加否则中文不显示
            // 填充数据
            applicationForm.setField("userName", user.getRealName());

            //报告生成日期
            Calendar calendar = Calendar.getInstance();
            applicationForm.setField("year", String.valueOf(calendar.get(Calendar.YEAR)));
            applicationForm.setField("month", String.valueOf(calendar.get(Calendar.MONTH)+1));
            applicationForm.setField("day", String.valueOf(calendar.get(Calendar.DATE)));
           
            applicationStamp.setFormFlattening(true);
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (applicationStamp != null) {
           	 applicationStamp.close();
            }
            if (applicationReader != null) {
           	 applicationReader.close();
            }
        }
   }
    
    /**
     * 跳转到会员统计界面
     * @param suId
     * @param backUrl
     * @param model
     * @return
     */
    @RequiresPermissions("user_manager_statistics")
    @RequestMapping(value = "memberStatistics")
    public String memberStatistics(ModelMap model) {
        try {
        	
        	SysOrg org = sysOrgService.getById(getSysUser().getOrgId());
        	
        	List<SysUser> sysUserList = sysUserService.memberStatisticsByOrg(org.getLevels());
        	List<String> orgNameList = new ArrayList<String>();
        	for (SysUser sysUserM : sysUserList) {
        		orgNameList.add(sysUserM.getName()+" 会员数："+sysUserM.getValue());
        		sysUserM.setName(sysUserM.getName()+" 会员数："+sysUserM.getValue());
			}
        	model.put("sysUserList", JSON.toJSONString(sysUserList));
        	model.put("orgNameList", JSON.toJSONString(orgNameList));
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return "/admin/userManage/memberStatistics";
    }
    
}
