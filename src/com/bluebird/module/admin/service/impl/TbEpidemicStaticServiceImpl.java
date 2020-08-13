package com.bluebird.module.admin.service.impl;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.TbEpidemic;
import com.bluebird.module.admin.model.TbEpidemicStatic;
import com.bluebird.module.admin.service.TbEpidemicStaticService;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysUserService;

@Service
public class TbEpidemicStaticServiceImpl extends BaseServiceImpl implements TbEpidemicStaticService{
	
	@Resource
	private SysUserService sysUserService;
	
	@LogAspect(desc="更新每日疫情上报统计情况")
	@Override
	public Map<String, Object> saveEpidemicStatic(TbEpidemic tbEpidemic) throws Exception {
		 Map<String, Object> maps = new HashMap<>();
			// 添加错误信息
	        maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
	        maps.put("msg", "添加失败，请重试");
	        
	        //查询当天是否有人已经上报，如果有嗯上报直接更新数据，如果没有需要新增数据
	        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	        TbEpidemicStatic epidemicStatic = queryReportCurr(sdf.format(new Date()));
	        TbEpidemicStatic newEpidemicStatic = new TbEpidemicStatic();
	        
	        DecimalFormat dFormat = new DecimalFormat("0.00");
	        
	        if(ObjectUtils.isEmpty(epidemicStatic)){
	        	//当天无人上报
	        	newEpidemicStatic.setEpidemicStaticId(SysUtil.GetUUID());
	        	newEpidemicStatic.setStaticDate(TimeHelper.getLocatlTime());
	        	//总数查询
	        	int totalNum = sysUserService.getCurrTotalNum();
	        	if(totalNum!=0){
		        	newEpidemicStatic.setStaticTotalNum(totalNum);
		        	newEpidemicStatic.setStaticNoNum(totalNum-1);
		        	newEpidemicStatic.setStaticComNum(1);
		        	
		        	double result = 1*100/totalNum;
//		        	DecimalFormat dFormat = new DecimalFormat("0.00");	
//		        	double result = new BigDecimal((float)1 / totalNum).setScale(3, BigDecimal.ROUND_HALF_UP).doubleValue();
		        	newEpidemicStatic.setComRate(dFormat.format(result)+"%");
	        	}
//	        	新增数据
	        	if (saveSelective(newEpidemicStatic)) {
	    			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
	    			maps.put("msg", "添加成功");
	    		}
	        }else{
	        	//当天已经有人上报了
	        	epidemicStatic.setStaticNoNum(epidemicStatic.getStaticNoNum()-1);
	        	epidemicStatic.setStaticComNum(epidemicStatic.getStaticComNum()+1);
	        	double result = epidemicStatic.getStaticComNum()*100/epidemicStatic.getStaticTotalNum();
//	        	double result = new BigDecimal((float)epidemicStatic.getStaticComNum() / epidemicStatic.getStaticTotalNum()).setScale(3, BigDecimal.ROUND_HALF_UP).doubleValue();
	        	epidemicStatic.setComRate(dFormat.format(result)+"%");
	        	//修改数据
	        	if (updateSelective(epidemicStatic)) {
	    			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
	    			maps.put("msg", "添加成功");
	    		}
	        }
			return maps;
	}

	private TbEpidemicStatic queryReportCurr(String staticDate) throws Exception {
		return dbManage.selectByCondition(staticDate);
	}
	
}
