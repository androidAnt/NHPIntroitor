package com.bluebird.module.admin.service;

import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.admin.model.TbEpidemic;

public interface TbEpidemicStaticService extends BaseService{
	
	Map<String, Object> saveEpidemicStatic(TbEpidemic tbEpidemic) throws Exception;

}
