package com.bluebird.module.admin.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.TbProposal;
import com.bluebird.module.admin.service.TbProposalService;
@Service
public class TbProposalServiceImpl extends BaseServiceImpl implements TbProposalService{
	@LogAspect(desc="添加合理化建议")
	@Override
	public Map<String, Object> save(TbProposal tbProposal) throws Exception {
		Map<String, Object> maps = new HashMap<>();
		// 添加错误信息
        maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
        maps.put("msg", "添加失败，请重试");
        // 设置主键id
        tbProposal.setProposalId(SysUtil.GetUUID()); 
        // 设置创建时间
        tbProposal.setCreatDate(TimeHelper.getLocatlTime());
        // 设置删除状态
        tbProposal.setDeleteFlag("0");
        // 设置审核状态
        tbProposal.setAuditorType("0");
        // 设置回复状态
        tbProposal.setReplierType("0");
        if (saveSelective(tbProposal)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "添加成功");
		}
		return maps;
	}
	
	@LogAspect(desc="删除合理化建议")
	@Override
	public Map<String, Object> delContentTypeById(String proposalId) throws Exception {
		Map<String, Object> maps = new HashMap<String,Object>();
        // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg", "删除失败，请重试");
		if(delete(proposalId)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "删除成功");
		}
		return maps;
	}
	
	@LogAspect(desc="修改合理化建议")
	@Override
	public Map<String, Object> edit(TbProposal tbProposal) throws Exception {
		Map<String, Object> maps = new HashMap<>();
        // 添加主键id
		maps.put("tbProposal", tbProposal.getProposalId().split("_")[0]);
	    // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg","修改失败，请重试");
		if (updateSelective(tbProposal)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "修改成功");
		}
     
		return maps;
	}

}
