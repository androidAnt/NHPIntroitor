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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.Servlets;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.Device;
import com.bluebird.module.admin.service.DeviceService;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.model.UseCompany;

/**
 * 检验设备controller
 *
 * @author jiangr
 * @version 1.0
 * @date 2019年1月23日 
 */
@Controller
@RequestMapping("admin/device")
public class DeviceCtl extends BaseCtl{

	// 检验设备service
	@Resource
	private DeviceService deviceService;
	
	/**
	 * 查询分页
	 * @param pageNO
	 *            页数
	 * @param pageSize
	 *            每页数量
	 * @param sort
	 *            排序字符串
	 * @param model
	 * @return String
	 */
	@RequiresPermissions("admin_device")   // 用于表明当前用户需是经过认证的用户
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
		model.put("page",deviceService.getListByCondition(searchParams,new Page(pageNO, pageSize, 0, null, null))); 
		  Device device = new Device();
		    BeanUtils.populate(device, searchParams);
	
		    model.put("device", device);
		    } catch (Exception e) {
		    	 // 打印日志
				logger.error("查询分页异常"+e.getMessage());
		    	Map<String, Object> maps= new HashMap<String, Object>();
		    	maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		    	maps.put("msg", "系统繁忙，请稍后再试");
		    	model.put("msg", JSON.toJSONString(maps));
			}
		
		return "admin/device/index";
	}
	
	
	/**
	 * 前往添加界面
	 * 
	 * @param model model容器
	 * @param redirectAttributes 重定向
	 * @return 跳转至添加页面
	 */
	@RequiresPermissions("admin_device_save")
	@RequestMapping("toAdd")     
    public String toAdd(ModelMap model,RedirectAttributes redirectAttributes){
		
		return "admin/device/save";
	}
	
	/**
	 * 添加检验设备信息
	 * 
	 * @param model model容器
	 * @param redirectAttributes 重定向
	 * @return 跳转至添加页面
	 */
	@RequiresPermissions("admin_device_save")
	@RequestMapping("doAdd")    
	public String doAdd(Device device,ModelMap model, RedirectAttributes redirectAttributes){
		
   	 Map<String, Object> returnMap = new HashMap<String, Object>();
		try {
			Map<String, Object> params = new HashMap<String, Object>();
			
			SysUser sysUser = getSysUser();
		
			device.setCreateUser(sysUser.getRealName());
			params.put("gDeviceNo", device.getgDeviceNo());
			List<Device> devices = deviceService.getListByCondition(params);
			if(devices!=null && devices.size()>0){
				model.put("device", device);
				model.put("status", SystemConstant.RETURN_STATUS_FAIL);
				model.put("msg", "检验设备已存在");
				return "admin/device/save";
  		    }
			 Map<String, Object> maps = deviceService.save(device); 
		
			if (!maps.get("status").toString().equals("0")) {
				return "redirect:/admin/device";
			}
			redirectAttributes.addFlashAttribute("msg",JSON.toJSONString(maps));
		} catch (Exception e) {
			Map<String, Object> maps = new HashMap<String, Object>();
			maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
			maps.put("msg", "包含非法数据");
			redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(maps));
	        redirectAttributes.addFlashAttribute("device", device);
		}
		return "redirect:/admin/device/toAdd";
	}
	
	/**
	 * 前往修改页面
	 * @param deviceId 主键id
	 * @param model   model容器
	 * @param backUrl   分页路径
	 * @return  跳转到修改页面
	 */
	@RequiresPermissions("admin_device_edit")
	@RequestMapping("toEdit")
	public String toEdit(String deviceId,ModelMap model,String backUrl){
	   Map<String, Object> maps = new HashMap<String,Object>();  
	   maps.put("deviceId", deviceId);
	    try {
		 Device device = (Device)deviceService.getByCondition(maps);
	    	if (device!=null) {
	    		model.put("paramMap", paramUnits(backUrl));
	            model.put("backUrl", backUrl);
	            // 修改
	            model.put("device", device);
			}else {
				// 如果为空，删除该id
			   maps.remove("deviceId");
			   maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
	           maps.put("msg", "参数不合法");
	           model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
	           return "admin/device/redirect";
			}
	    } catch (Exception e) {
	    	   // 如果为空，删除该id
			   maps.remove("deviceId");
			   maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
	           maps.put("msg", "参数不合法");
	           model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
	           return "admin/device/redirect";
	    }
	    return "admin/device/edit";
    }
	
	
	/**
	 * 修改检验设备信息
	 * @param device 实体类
	 * @param model  model容器
	 * @param backUrl   返回地址
	 * @return
	 */
	@RequiresPermissions("admin_device_edit")
	@ResponseBody
	@RequestMapping(value="doEdit",method = {RequestMethod.POST})
	public Map<String, Object> doEdit(Device device){
		Map<String, Object> paramMap = new HashMap<String, Object>();
		boolean flag =false;
	    try {
	    	Map<String, Object> maps = new HashMap<String, Object>();
	    	maps.put("gDeviceNo", device.getgDeviceNo());
	    	List<Device> devices = deviceService.getListByCondition(maps);
	        //判断检验设备是否存在
	    	if (devices!=null&&devices.size()>0) {
				for (Device devicess : devices) {
					if (!devicess.getDeviceId().equals(device.getDeviceId())){
						paramMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
						paramMap.put("msg","检验设备已存在");
						flag =true;
						break;
					}
				}
			}
	    	if (flag == false) {
	        	paramMap.put("paramMsg", JSON.toJSONString(deviceService.edit(device)).replace("\"", "'"));
		     }
	    	
	    } catch (Exception e) {
            Map<String, Object> maps = new HashMap<String,Object>();
	    	maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
            maps.put("msg", "系统繁忙，请稍后再试");
            paramMap.put("paramMap", JSON.toJSONString(maps).replace("\"", "'"));
	    }
	
	  return paramMap;
	}
	
	@RequestMapping("backIndex")
	public String doEdit(ModelMap model,String backUrl,String status){
		  // 返回路径拼接
		  model.put("paramMap", paramUnits(backUrl));
		  Map<String, Object> maps = new HashMap<>();
		  if (status.equals("1")) {
			  maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			  maps.put("msg", "修改成功");
			  model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
		  }else {
			  maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
			  maps.put("msg", "系统繁忙，请稍后再试");
			  model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
		  }
		 
		  return "admin/device/redirect";
		
	}
	/**
	 * 查看详情
	 * @param deviceId 主键id
	 * @param backUrl  分页路径
	 * @param model model容器
	 * @return  跳转到详情页面
	 */
	@RequiresPermissions("admin_device_details")
	@RequestMapping("details")
	public String details(String deviceId, String backUrl, ModelMap model){
		try {
			Map<String,Object> maps =new HashMap<String,Object>();
			maps.put("deviceId", deviceId);
			Device device = (Device)deviceService.getByCondition(maps);
			if (device.getgDeviceType().equals("0")) {
				device.setgDeviceType("锅炉");
				model.put("device", device);
				model.put("paramMap", paramUnits(backUrl));
			}else{
				device.setgDeviceType("压力容器");
				model.put("device", device);
				model.put("paramMap", paramUnits(backUrl));
			}
		} catch (Exception e) {
			
		}
		return "admin/device/details";
	}
	
	   
	   /**
	    * 删除检验设备信息
	    * @param deviceId 主键id
	    * @param backUrl  返回路径
	    * @param model  model容器
	    * @return
	    */
	 @RequiresPermissions("admin_device_delete")
	 @RequestMapping("delete")
	 public String delete(String deviceId,String backUrl,ModelMap model){
		 Map<String, Object> maps = new HashMap<String, Object>();
		 maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		 model.put("paramMap", paramUnits(backUrl));
		  try {
			  // 调方法
	      maps =  deviceService.delHandDeviceById(deviceId);
		} catch (Exception e) {
	        maps.put("msg", "系统繁忙，请稍后再试");
		}
		 model.put("paramMsg", JSON.toJSONString(maps).replace("\"", "'"));
		 return "admin/device/redirect";
	 }
	 /**
		 * 查询检验设备编号是否唯一
		 * @throws Exception 
		 */
		@RequestMapping(value = "findAllDevice", method = {RequestMethod.POST})
		@ResponseBody
		public Map<String, Object> findAllDevice(String gDeviceNo) throws Exception{
			   Map<String, Object> map = new HashMap<>();
			   map.put("msg", "查询失败");
			     List<Device> devices = deviceService.getListByCondition(map);
			//判断设备编号不重复
			   for (Device device : devices) {
				if (device.getgDeviceNo().equals(gDeviceNo)) {
					map.put("status",SystemConstant.RETURN_STATUS_FAIL);
					map.put("msg", "设备编号已存在");
					break;
				}else {
					map.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
				}
			}
			return map;
		      
		}
}
