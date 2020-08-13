package com.bluebird.module.admin.service;

import java.util.List;
import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.admin.model.Device;
import com.bluebird.module.admin.model.GhAnnouncement;
import com.bluebird.module.admin.model.GhContentManage;
import com.bluebird.module.admin.model.GhContentType;
import com.bluebird.module.admin.model.SysFile;

/**
 * 内容分类管理
 * @author huatek-pc
 *
 */
public interface GhAnnouncementService extends BaseService {
	
	Map<String, Object> deleteAnnouncement(String announcementId) throws Exception;
	
	/*首页显示通知公告内容*/
	List<GhAnnouncement>  getAnnouncementList(Map<String,Object> map);
}
