package com.bluebird.module.admin.service;

import java.util.List;
import java.util.Map;

import com.bluebird.framework.base.BaseService;
import com.bluebird.framework.base.Page;
import com.bluebird.module.admin.model.GhContentManage;
import com.bluebird.module.admin.model.GhContentType;
import com.bluebird.module.admin.model.Module;
import com.bluebird.module.admin.model.SysFile;
import com.bluebird.module.admin.model.TbMailbox;

public interface ModuleService extends BaseService{
	//修改
	Map<String, Object> updateList(List<Module> module) throws Exception;
	
	List<Module> selectAll(Map map) throws Exception;
	
	//获取文章列表 显示首页
	List<GhContentManage> getContentList(String contentTypeId,int num,byte contentShow) throws Exception;
	
	//获取图集列表
	List<SysFile> getContentImgFileList(String contentTypeId) throws Exception;
	
	//获取按钮
	List<GhContentType> getContentButtonList(String[] contentTypeId) throws Exception;
	
	//获取多级分类
	List<GhContentType> getContentTypeByMenuId(String menuId);
	
	//获取职工文化
	List<GhContentType> getCulture() throws Exception;
	//获取职工文化分类ID获取文章
	List<GhContentManage> getCultureList(String[] contentTypeId) throws Exception;
	//分类ID获取文章
	List<GhContentManage> getGhContentManageListAll(String[] contentTypeId) throws Exception;
	//分类ID获取文章分页
	Page getGhContentManageListPage(String[] contentTypeId,Page page) throws Exception;
	//获取职工文化分类ID获取文章
	List<GhContentManage> getCulturePage(String contentTypeId) throws Exception;
	//获取职工文化分类ID获取文章 分页
	Page getCulturePage(String contentTypeId,Page page) throws Exception;
	//新增
	Map<String, Object> save(Module module) throws Exception;
	
	//删除
	Map<String, Object> dele(String moduleId) throws Exception;
	//恢复默认toDefault
	Map<String, Object> toDefault(String[] id) throws Exception;
	
	//查询主席信箱 已公开 审核已通过 已回复的
	List<TbMailbox> getTbMailbox(String mailboxId,int num) throws Exception;
	//查询主席信箱  审核已通过 未回复的
	Page getPageListTbMailbox(Map map,Page page) throws Exception;
	//查询主席信箱 已公开 审核已通过 已回复的
	Page getListTbMailboxPage(Map map,Page page) throws Exception;
	//查询主席信箱详情
	TbMailbox getTbMailboxByMailboxId(String mailboxId) throws Exception;
	
	List<GhContentType> getGhContentTypeList(Map map) throws Exception;
	//查询资料下载
	Page getTbFileDownload(Map map, Page page) throws Exception;
	//法律法规
	Page getTbPolicies(Map map, Page page) throws Exception;
	//搜索
	Page search(Map map, Page page) throws Exception;
	
}
