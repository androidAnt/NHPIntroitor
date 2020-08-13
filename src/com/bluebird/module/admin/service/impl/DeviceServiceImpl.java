package com.bluebird.module.admin.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.Device;
import com.bluebird.module.admin.service.DeviceService;

/**
 *
 *
 * @author jiangr
 * @version 1.0
 * @date 2019年1月28日 
 */
@Service
public class DeviceServiceImpl extends BaseServiceImpl implements DeviceService{

	
	/**
	 * 添加检验设备信息
	 */
	@LogAspect(desc="添加检验设备信息")
	@Override
	public Map<String, Object> save(Device device) throws Exception {
        Map<String, Object> maps = new HashMap<>();
		// 添加错误信息
        maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
        maps.put("msg", "添加失败，请重试");
        // 设置主键id
        device.setDeviceId(SysUtil.GetUUID());
        // 设置创建时间
        device.setCreateDate(TimeHelper.getLocatlTime());
        // 设置删除状态
        device.setDeleteFlag("0");
        if (saveSelective(device)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "添加成功");
		}
		return maps;
	}

	
	/**
	 * 修改检验设备信息
	 */
	@LogAspect(desc="修改检验设备信息")
	@Override
	public Map<String, Object> edit(Device device) throws Exception {
      Map<String, Object> maps = new HashMap<>();
        // 添加主键id
		maps.put("deviceId", device.getDeviceId().split("_")[0]);
	    // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg","修改失败，请重试");
		if (updateSelective(device)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "修改成功");
		}
     
		return maps;
	}
     
	/**
	 * 修改检验设备信息
	 */
	@LogAspect(desc="修改检验设备经纬度信息")
	@Override
	public Map<String, Object> editLocation(Device device) throws Exception {
      Map<String, Object> maps = new HashMap<>();
        // 添加主键id
		maps.put("deviceId", device.getDeviceId().split("_")[0]);
	    // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg","修改失败，请重试");
		if (updateSelective(device)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "修改成功");
		}
     
		return maps;
	}

	
	/**
	 * 删除检验设备信息
	 */
	@LogAspect(desc="删除检验设备信息")
	@Override
	public Map<String, Object> delHandDeviceById(String deviceId) throws Exception {
		Map<String, Object> maps = new HashMap<String,Object>();
        // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg", "删除失败，请重试");
		if (delete(deviceId)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "删除成功");
		}
		return maps;
	}

	
	
	
}
