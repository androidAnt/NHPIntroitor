package com.bluebird.module.admin.service;

import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.admin.model.TbProposal;

public interface TbProposalService extends BaseService{
	/**
	 * 保存
	 */
	Map<String, Object> save(TbProposal tbProposal) throws Exception;
	
	/**
	 * 删除
	 * @param deviceId
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> delContentTypeById(String proposalId) throws Exception;
	
	/**
	 * 修改
	 * @param device
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> edit(TbProposal tbProposal) throws Exception;

}
