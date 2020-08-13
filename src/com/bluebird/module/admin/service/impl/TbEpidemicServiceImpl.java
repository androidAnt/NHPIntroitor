package com.bluebird.module.admin.service.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.TbEpidemic;
import com.bluebird.module.admin.service.TbEpidemicService;
import com.bluebird.module.admin.service.TbEpidemicStaticService;

@Service
public class TbEpidemicServiceImpl extends BaseServiceImpl implements TbEpidemicService{
	
	@Resource
	private TbEpidemicStaticService epidemicStaticService;
	
	@LogAspect(desc="添加每日疫情上报信息")
	@Override
	public Map<String, Object> saveEpidemic(TbEpidemic tbEpidemic) throws Exception {
		 Map<String, Object> maps = new HashMap<>();
			// 添加错误信息
	        maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
	        maps.put("msg", "添加失败，请重试");
	        
	        tbEpidemic.setCreatDate(TimeHelper.getLocatlTime());
			tbEpidemic.setEpidemicId(SysUtil.GetUUID()); 
	        
	        if (saveSelective(tbEpidemic)) {
	        	//更新当天疫情上报
	        	//判断该用户当天是否已经上报
	        	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	        	List<TbEpidemic> epidemicList = queryReportCurrByUser(sdf.format(new Date()),tbEpidemic);
				
	        	if(epidemicList.size()==1){
	        		epidemicStaticService.saveEpidemicStatic(tbEpidemic);
	        	}
				maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
				maps.put("msg", "添加成功");
			}
			return maps;
	}

	private List<TbEpidemic> queryReportCurrByUser(String currTime, TbEpidemic tbEpidemic) throws Exception {
		//登陆人当天是否已经上报
		 Map<String, Object> maps = new HashMap<>();
		 maps.put("userId", tbEpidemic.getUserId());
		 maps.put("creatDate", currTime);
		return dbManage.selectListByCondition(maps);
	}
}
