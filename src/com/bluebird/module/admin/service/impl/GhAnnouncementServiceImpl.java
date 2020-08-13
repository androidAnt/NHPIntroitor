package com.bluebird.module.admin.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.admin.model.GhAnnouncement;
import com.bluebird.module.admin.service.GhAnnouncementService;

@Service
public class GhAnnouncementServiceImpl extends BaseServiceImpl implements GhAnnouncementService {
	
	@LogAspect(desc="删除通知公告")
	@Override
	public Map<String, Object> deleteAnnouncement(String announcementId) throws Exception{
		Map<String, Object> maps = new HashMap<String,Object>();
        // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg", "删除失败，请重试");
		if(delete(announcementId)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "删除成功");
		}
		return maps;
	}
	
	@LogAspect(desc="查找首页通知公告")
	@Override
	public List<GhAnnouncement>  getAnnouncementList(Map<String,Object> map){
		List<GhAnnouncement> announcementList = new ArrayList<GhAnnouncement>();
		try { 
			announcementList= dbManage.selectListByCondition(map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return announcementList;
	}
}

