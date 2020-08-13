package com.bluebird.module.admin.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.GhContentManage;
import com.bluebird.module.admin.model.GhContentType;
import com.bluebird.module.admin.model.Module;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.model.TbDataDownload;
import com.bluebird.module.admin.model.TbMailbox;
import com.bluebird.module.admin.model.TbPolicies;
import com.bluebird.module.admin.service.ModuleService;

@Service
public class ModuleServiceImpl extends BaseServiceImpl implements ModuleService{

	@Override
	public Map<String, Object> updateList(List<Module> module) throws Exception {
		Map<String, Object> maps = new HashMap<>();
	    // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg","修改失败，请重试");
		if (dbManage.update(module)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "修改成功");
		}
		return maps;
	}

	@Override
	public List<Module> selectAll(Map map) throws Exception {
		List<Module> listByCondition = dbManage.selectListByCondition(map);
		return listByCondition;
	}
	
	@Override
	public List<GhContentManage> getContentList(String contentTypeId,int num,byte contentShow) throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("contentTypeId", contentTypeId);
		map.put("num", num);
		if(contentShow==(byte)0){
			map.put("contentShow", "0");
		}
		map.put("articleType", "2");
		map.put("isRelease", "0");
		return dbManage.selectListByCondition(map);
	}
	
	@Override
	public List<SysFile> getContentImgFileList(String contentTypeId) throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("contentTypeId", contentTypeId);
		map.put("articleType", "2");
		map.put("imgShow", "0");
		map.put("isRelease", "0");
		return dbManage.selectListByCondition(map);
	}
	
	/**
	 * 获取多级分类
	 */
	@Override
	public List<GhContentType> getContentTypeByMenuId(String menuId){
		Map<String, Object> map = new HashMap<String, Object>();
		List<GhContentType> contentTypeList = new ArrayList<GhContentType>();
		map.put("menuId", menuId);
		map.put("contentType", "2");
		map.put("articleType", "2");
		try {
			contentTypeList = dbManage.selectListByCondition(map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return contentTypeList;
	}

	@Override
	public Map<String, Object> save(Module module) throws Exception {
		Map<String, Object> maps = new HashMap<>();
		// 添加错误信息
        maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
        maps.put("msg", "添加失败，请重试");
        // 设置主键id
        module.setId(SysUtil.GetUUID()); 
        module.setHeight("0.25116279069767444");
        module.setWidth("0.1825");
        module.setTop("-0.0003633720930232558");
        module.setTheLeft("-0.00041015625");
        module.setLevel1("1");
        if (saveSelective(module)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "添加成功");
		}
		return maps;
	}

	@Override
	public Map<String, Object> dele(String moduleId) throws Exception {
		Map<String, Object> maps = new HashMap<String,Object>();
        // 添加错误信息
		maps.put("status", SystemConstant.RETURN_STATUS_FAIL);
		maps.put("msg", "删除失败，请重试");
		if(delete(moduleId)) {
			maps.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
			maps.put("msg", "删除成功");
		}
		return maps;
	}

	@Override
	public Map<String, Object> toDefault(String[] id) throws Exception {
    	List<Module> defaultQuery = this.toDefaultQuery();
    	for(int i=0;i<defaultQuery.size();i++){
    		defaultQuery.get(i).setId(id[i]);
    	}
		return this.updateList(defaultQuery);
	}

	//查询默认的
	public List<Module> toDefaultQuery() throws Exception {
		List<Module> selectListByCondition = dbManage.selectListByCondition(new HashMap<>());
		return selectListByCondition;
	}

	@Override
	public List<GhContentType> getContentButtonList(String[] contentTypeId) throws Exception {
		List<GhContentType> selectListByCondition = dbManage.selectListByCondition(contentTypeId);
		return selectListByCondition;
	}

	@Override
	public List<TbMailbox> getTbMailbox(String mailboxId,int num) throws Exception {
		Map<String, Object> maps = new HashMap<>();
		if(mailboxId!=null){
			maps.put("mailboxId", mailboxId);
		}
		maps.put("num", num);
		return dbManage.selectListByCondition(maps);
	}

	@Override
	public List<GhContentType> getCulture() throws Exception{
		return dbManage.selectListByCondition(new HashMap<>());
	}

	@Override
	public List<GhContentManage> getCultureList(String[] contentTypeId) throws Exception {
		return dbManage.selectListByCondition(contentTypeId);
	}
	@Override
	public List<GhContentManage> getGhContentManageListAll(String[] contentTypeId) throws Exception {
		return dbManage.selectListByCondition(contentTypeId+ this.getClass().getName() + ".getListGhContentManageAll");
	}

	@Override
	public List<GhContentType> getGhContentTypeList(Map map) throws Exception {
		return dbManage.selectListByCondition(map);
	}

	@Override
	public List<GhContentManage> getCulturePage(String contentTypeId) throws Exception {
		Map<String, Object> maps = new HashMap<>();
		maps.put("contentTypeId", contentTypeId);
		return dbManage.selectListByCondition(maps);
	}
	
	@Override
	public Page getCulturePage(String contentTypeId,Page page) throws Exception {
		Map<String, Object> maps = new HashMap<>();
		maps.put("contentTypeId", contentTypeId);
		return dbManage.selectPageByCondition(maps,page, this.getClass().getName() + ".getListByCulturePage");
	}

	@Override
	public Page getListTbMailboxPage(Map map, Page page) throws Exception {
		 return dbManage.selectPageByCondition(map,page, this.getClass().getName() + ".getListTbMailboxPage");
	}

	@Override
	public Page getTbFileDownload(Map map, Page page) throws Exception {
		 return dbManage.selectPageByCondition(map,page, this.getClass().getName() + ".getListTbFileDownload");
	}

	@Override
	public Page getTbPolicies(Map map, Page page) throws Exception {
		 return dbManage.selectPageByCondition(map,page, this.getClass().getName() + ".getListTbPolicies");
	}

	@Override
	public TbMailbox getTbMailboxByMailboxId(String id) throws Exception {
		Map<String, Object> maps = new HashMap<>();
		maps.put("mailboxId", id);
		return dbManage.selectByCondition(maps);
	}

	@Override
	public Page getPageListTbMailbox(Map map, Page page) throws Exception {
		 return dbManage.selectPageByCondition(map,page, this.getClass().getName() + ".getPageListTbMailbox");
	}

	@Override
	public Page search(Map map, Page page) throws Exception {
		 return dbManage.selectPageByCondition(map,page, this.getClass().getName() + ".getListGhContentManage");
	}

	@Override
	public Page getGhContentManageListPage(String[] contentTypeId, Page page) throws Exception {
		 return dbManage.selectPageByCondition(contentTypeId,page, this.getClass().getName() + ".getListGhContentManageAll");
	}

}
