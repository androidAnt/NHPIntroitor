package com.bluebird.module.admin.ctl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.Servlets;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.GhAnnouncement;
import com.bluebird.module.admin.model.GhContentManage;
import com.bluebird.module.admin.model.GhContentType;
import com.bluebird.module.admin.model.GhMenuManage;
import com.bluebird.module.admin.model.Module;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.model.TbMailbox;
import com.bluebird.module.admin.service.GhAnnouncementService;
import com.bluebird.module.admin.service.GhContentManageService;
import com.bluebird.module.admin.service.GhContentTypeService;
import com.bluebird.module.admin.service.GhMenuManageService;
import com.bluebird.module.admin.service.ModuleService;
import com.bluebird.module.system.service.SysDicService;
import com.google.gson.Gson;
import com.hp.hpl.sparta.ParseException;

@Controller
@RequestMapping("admin/module")
public class ModuleCtl extends BaseCtl{
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
	
	@RequiresPermissions("module")   // 用于表明当前用户需是经过认证的用户
	@RequestMapping(value = "")
	 public String toIndex(ModelMap model, HttpServletRequest request) {
        try {
        	Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
        	model.put("menu", sysDicService.getCacheDicByType("module"));
        	Page listByCondition = moduleService.getListByCondition(searchParams ,new Page(0, 50, 0, null, null));
        	model.put("module",listByCondition );
        	model.put("list",JSON.toJSONString(listByCondition.getData()));
        	//菜单
        	List<GhMenuManage> ghMenuManage = ghMenuManageService.getListByCondition(new HashMap<>());
        	model.put("ghMenuManage",ghMenuManage);
        	model.put("ghMenuManageList",JSON.toJSONString(ghMenuManage));
        	//分类表 图片类
        	HashMap<Object, Object> map = new HashMap<>();
        	map.put("articleType", "2");
        	List<Object> listByCondition2 = ghContentTypeService.getListByCondition(map);
        	model.put("ghContentType",listByCondition2);
        	//分类表 文章和图文
        	List<Map<String,String>> selectByArticleType = ghContentTypeService.selectByArticleType();
        	model.put("selectByArticleType",selectByArticleType);
        	//分类表 所有
        	List<Map<String,String>> selectAllByArticleType = ghContentTypeService.getListByCondition(new HashMap<>());
        	model.put("selectAllByArticleType",selectAllByArticleType);
        	//菜单下的分类
        	HashMap<Object, Object> hashMap = new HashMap<>();
        	hashMap.put("contentType", "1");
        	for(int i=0;i<ghMenuManage.size();i++){
        	//查询不包含二级分类的分类
   			 hashMap.put("menuId", ghMenuManage.get(i).getMenuId());
   			 List<GhContentType> listByCondition1 = moduleService.getGhContentTypeList(hashMap);
   			 model.put("contentType"+i,listByCondition1 );
        	}
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
            logger.error("跳转到添加页面异常：" + e.getMessage());
        }
        return "admin/module/index";
    }	
	
	@RequestMapping(value = "doEdit")
	 public String toIndex(String[] id,String[] level1,String[] level2,String[] level3,String[] level4,String[] level5,String[] levelFour0,
			 String[] levelFour1,String[] levelFour2,String[] levelFour3,String[] levelFour4,String[] levelFour5,
			 String[] levelSix0, String[] levelSix1,String[] levelSix2,String[] levelSix3,String[] levelSix4,String[] levelSix5,
			 String[] width,String[] top,String[] height,String[] theLeft,String[] fileId,ModelMap model) {
        try {
        	List<Module> listModule = new ArrayList<Module>();
        	//菜单
        	List<GhMenuManage> ghMenuManage = ghMenuManageService.getListByCondition(new HashMap<>());
        	for(int i=0;i<id.length;i++){
        		Module m = new Module();
        		m.setId(id[i]);
        		m.setLevel1(level1[i]);
        		if("2".equals(level1[i])){
        			//列表
        			m.setLevel2(level4[i]);
        		}else if("9".equals(level1[i])){
        			//图片
        			m.setLevel2(fileId[i]);
        		}else if("3".equals(level1[i])){
        			//图集
        			m.setLevel2(level3[i]);
        		}else if("8".equals(level1[i])){
        			//多级分类
        			m.setLevel2(level2[i]);
        		}else if("6".equals(level1[i])){
        			m.setLevel2(level2[i]);
        			//4按钮类型
        			for(int y=0;y<ghMenuManage.size();y++){
        				if(ghMenuManage.get(y).getMenuId().equals(level2[i])){
        					int parseInt = Integer.parseInt(level5[i]);
        					StringBuffer stringBuffer = new StringBuffer();
        					if(y==0){
        					 for(int x = 0;x<parseInt;x++){
        						 if(x==(parseInt-1)){
        							 stringBuffer.append(levelFour0[x]);
        						 }else{
        							 stringBuffer.append(levelFour0[x]+",");
        						 }
        					 }
        					 //修改数组
        					 if(parseInt!=0){
        						 this.array(parseInt, levelFour0);
        					 }
        					}else if(y==1){
        						for(int x = 0;x<parseInt;x++){
           						 if(x==(parseInt-1)){
           							 stringBuffer.append(levelFour1[x]);
           						 }else{
           							 stringBuffer.append(levelFour1[x]+",");
           						 }
           					 }
           					 //修改数组
        						 if(parseInt!=0){
        							 this.array(parseInt, levelFour1);
            					 }
        					}else if(y==2){
        						for(int x = 0;x<parseInt;x++){
           						 if(x==(parseInt-1)){
           							 stringBuffer.append(levelFour2[x]);
           						 }else{
           							 stringBuffer.append(levelFour2[x]+",");
           						 }
           					 }
           					 //修改数组
        						 if(parseInt!=0){
        							 this.array(parseInt, levelFour2);
            					 }
        					}else if(y==3){
        						for(int x = 0;x<parseInt;x++){
           						 if(x==(parseInt-1)){
           							 stringBuffer.append(levelFour3[x]);
           						 }else{
           							 stringBuffer.append(levelFour3[x]+",");
           						 }
           					 }
           					 //修改数组
        						 if(parseInt!=0){
        							 this.array(parseInt, levelFour3);
            					 }
        					}else if(y==4){
        						for(int x = 0;x<parseInt;x++){
              						 if(x==(parseInt-1)){
              							 stringBuffer.append(levelFour4[x]);
              						 }else{
              							 stringBuffer.append(levelFour4[x]+",");
              						 }
              					 }
              					 //修改数组
           						 if(parseInt!=0){
           							 this.array(parseInt, levelFour4);
               					 }
           					}else{
        						for(int x = 0;x<parseInt;x++){
           						 if(x==(parseInt-1)){
           							 stringBuffer.append(levelFour5[x]);
           						 }else{
           							 stringBuffer.append(levelFour5[x]+",");
           						 }
           					 }
           					 //修改数组
        						 if(parseInt!=0){
        							 this.array(parseInt, levelFour5);
            					 }
        					}
        					 //赋值
        					m.setLevel3(stringBuffer.toString());
        					break;
        				}
        			}
        		}else if("11".equals(level1[i])){
        			m.setLevel2(level2[i]);
        			//6按钮类型
        			for(int y=0;y<ghMenuManage.size();y++){
        				if(ghMenuManage.get(y).getMenuId().equals(level2[i])){
        					int parseInt = Integer.parseInt(level5[i]);
        					StringBuffer stringBuffer = new StringBuffer();
        					if(y==0){
        					 for(int x = 0;x<parseInt;x++){
        						 if(x==(parseInt-1)){
        							 stringBuffer.append(levelSix0[x]);
        						 }else{
        							 stringBuffer.append(levelSix0[x]+",");
        						 }
        					 }
        					 //修改数组
        					 if(parseInt!=0){
        						 this.array(parseInt, levelSix0);
        					 }
        					}else if(y==1){
        						for(int x = 0;x<parseInt;x++){
           						 if(x==(parseInt-1)){
           							 stringBuffer.append(levelSix1[x]);
           						 }else{
           							 stringBuffer.append(levelSix1[x]+",");
           						 }
           					 }
           					 //修改数组
        						 if(parseInt!=0){
        							 this.array(parseInt, levelSix1);
            					 }
        					}else if(y==2){
        						for(int x = 0;x<parseInt;x++){
           						 if(x==(parseInt-1)){
           							 stringBuffer.append(levelSix2[x]);
           						 }else{
           							 stringBuffer.append(levelSix2[x]+",");
           						 }
           					 }
           					 //修改数组
        						 if(parseInt!=0){
        							 this.array(parseInt, levelSix2);
            					 }
        					}else if(y==3){
        						for(int x = 0;x<parseInt;x++){
           						 if(x==(parseInt-1)){
           							 stringBuffer.append(levelSix3[x]);
           						 }else{
           							 stringBuffer.append(levelSix3[x]+",");
           						 }
           					 }
           					 //修改数组
        						 if(parseInt!=0){
        							 this.array(parseInt, levelSix3);
            					 }
        					}else if(y==4){
        						for(int x = 0;x<parseInt;x++){
              						 if(x==(parseInt-1)){
              							 stringBuffer.append(levelSix4[x]);
              						 }else{
              							 stringBuffer.append(levelSix4[x]+",");
              						 }
              					 }
              					 //修改数组
           						 if(parseInt!=0){
           							 this.array(parseInt, levelSix4);
               					 }
           					}else{
        						for(int x = 0;x<parseInt;x++){
           						 if(x==(parseInt-1)){
           							 stringBuffer.append(levelSix5[x]);
           						 }else{
           							 stringBuffer.append(levelSix5[x]+",");
           						 }
           					 }
           					 //修改数组
        						 if(parseInt!=0){
        							 this.array(parseInt, levelSix5);
            					 }
        					}
        					 //赋值
        					m.setLevel3(stringBuffer.toString());
        					break;
        				}
        			}
        		}
        		m.setHeight(height[i]);
        		m.setTop(top[i]);
        		m.setTheLeft(theLeft[i]);
        		m.setWidth(width[i]);
        		listModule.add(m);
        	}
        	moduleService.updateList(listModule);
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
            logger.error("跳转到添加页面异常：" + e.getMessage());
        }
        return "redirect:/admin/module";
    }	
	
	
      
	//新增
	@RequestMapping(value = "save")
	public String save(HttpServletRequest request,HttpServletResponse response) {
		try {
			Module module = new Module();
			moduleService.save(module);
		} catch (Exception e) {
			logger.error("跳转到添加页面异常：" + e.getMessage());
		}
		return "redirect:/admin/module";
	}	
	
	    //删除
		@RequestMapping(value = "delete")
		public String delete(String moduleId) {
			try {
				moduleService.dele(moduleId);
			} catch (Exception e) {
				logger.error("跳转到添加页面异常：" + e.getMessage());
			}
			return "redirect:/admin/module";
		}
		
		@RequestMapping(value = "default")
		 public String toDefault(String[] id,ModelMap model) {
	        try {
	        	moduleService.toDefault(id);
	        } catch (Exception e) {
	            Map<String, Object> map = new HashMap<>();
	            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
	            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
	            model.put("msg", JSON.toJSONString(map));
	            logger.error("跳转到添加页面异常：" + e.getMessage());
	        }
	        return "redirect:/admin/module";
	    }	
		
		 @RequestMapping(value = "/tbContentType")
		 @ResponseBody
		 public String doUploadFile(@RequestParam("id") String id,HttpServletResponse response) throws IOException, ParseException {
			  HashMap<Object, Object> hashMap = new HashMap<>();
			  hashMap.put("menuId", id);
			 List<GhContentType> listByCondition = new ArrayList<GhContentType>();
			try {
				listByCondition = ghContentTypeService.getListByCondition(hashMap);
			} catch (Exception e) {
				e.printStackTrace();
			}
			 response.setContentType("text/html;charset=utf-8");
			 Gson gson=new Gson();
			 String json=gson.toJson(listByCondition);
			 return json;
		 }
		 
		 //修改数组
		 public void array(int x,String[] arr){
			 for(int i=0;i<arr.length-x;i++){
				 arr[i]=arr[i+x];
			 }
		 }
		
}
