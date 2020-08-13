package com.bluebird.module.admin.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.TbMailbox;
import com.bluebird.module.admin.service.TbMailboxService;

@Service
public class TbMailboxServiceImpl extends BaseServiceImpl implements TbMailboxService {

	@LogAspect(desc="添加主席信箱")
	@Override
	public Map<String, Object> save(TbMailbox tbMailbox) throws Exception {
		 Map<String, Object> maps = new HashMap<>();
			// 添加错误信息
	        maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
	        maps.put("msg", "添加失败，请重试");
	        // 设置主键id
	        tbMailbox.setMailboxId(SysUtil.GetUUID()); 
	        // 设置创建时间
	        tbMailbox.setCreatDate(TimeHelper.getLocatlTime());
	        // 设置删除状态
	        tbMailbox.setDeleteFlag("0");
	        // 设置审核状态
	        tbMailbox.setAuditorType("0");
	        // 设置回复状态
	        tbMailbox.setReplierType("0");
	        if (saveSelective(tbMailbox)) {
				maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
				maps.put("msg", "添加成功");
			}
			return maps;
	}
	@LogAspect(desc="删除主席信箱")
	@Override
	public Map<String, Object> delContentTypeById(String tbMailboxId) throws Exception {
		Map<String, Object> maps = new HashMap<String,Object>();
        // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg", "删除失败，请重试");
		if(delete(tbMailboxId)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "删除成功");
		}
		return maps;
	}

	@LogAspect(desc="修改主席信箱")
	@Override
	public Map<String, Object> edit(TbMailbox tbMailbox) throws Exception {
		Map<String, Object> maps = new HashMap<>();
        // 添加主键id
		maps.put("mailboxId", tbMailbox.getMailboxId().split("_")[0]);
	    // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg","修改失败，请重试");
		if (updateSelective(tbMailbox)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "修改成功");
		}
     
		return maps;
	}
	@Override
	public TbMailbox statistics(Map map) throws Exception {
		return dbManage.selectByCondition(map);
	}

}
