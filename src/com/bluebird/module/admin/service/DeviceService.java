package com.bluebird.module.admin.service;

import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.admin.model.Device;

/**
 * 检验设备service接口
 *
 * @author jiangr
 * @version 1.0
 * @date 2019年1月22日 
 */
public interface DeviceService extends BaseService{

	
	/**
	 * 保存检验设备信息
	 */
	Map<String, Object> save(Device device) throws Exception;
	
	
	/**
	 * 修改检验设备信息
	 */
	Map<String, Object> edit(Device device) throws Exception;
	
	Map<String, Object> editLocation(Device device) throws Exception;
	
	
	
	
	
	/**
	 * 删除检验设备信息
	 */
	Map<String, Object> delHandDeviceById(String deviceId) throws Exception;



	
	
}
