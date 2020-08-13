package com.bluebird.module.admin.service;

import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.admin.model.TbMailbox;

public interface TbMailboxService extends BaseService{
	/**
	 * 保存
	 */
	Map<String, Object> save(TbMailbox tbMailbox) throws Exception;
	
	/**
	 * 删除
	 * @param deviceId
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> delContentTypeById(String tbMailboxId) throws Exception;
	
	/**
	 * 修改
	 * @param device
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> edit(TbMailbox tbMailbox) throws Exception;
	
	//统计
	TbMailbox statistics(Map map) throws Exception;

}
