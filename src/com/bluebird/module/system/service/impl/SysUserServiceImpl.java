package com.bluebird.module.system.service.impl;

import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.exception.SystemException;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysUserService;

import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * 系统用户管理service接口实现类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-9 11:28
 */
@Service
public class SysUserServiceImpl extends BaseServiceImpl implements SysUserService {

    private static final String DEFAULT_PASSWORD = "123123";

    public SysUser getLastDate(String suId)throws Exception{
        return dbManage.selectByCondition(suId);
    }

    /**
     * 根据登录名称获取系统用户登录信息
     *
     * @param loginName 登录名称
     * @return SysUser
     * @throws Exception
     */
    @Override
    public SysUser getSysUserByLoginName(String loginName) throws Exception {
        return dbManage.selectByCondition(loginName);
    }

    /**
     * 根据用户拥有的组织机构获取所有归属用户
     *
     * @param page         分页
     * @param searchParams 参数
     * @return Page
     * @throws Exception
     */
    @Override
    public Page getUserListByOrgIds(Page page, Map<String,Object> searchParams) throws Exception {
        searchParams.put("sort", page.getSort());
        return dbManage.selectPageByCondition(searchParams, page);
    }
    
    @Override
    public Page getMemberListByOrgIds(Page page, Map<String,Object> searchParams) throws Exception {
        searchParams.put("sort", page.getSort());
        return dbManage.selectPageByCondition(searchParams, page);
    }

    @Override
    public Page viewNoComUserInfoList(Page page, Map<String,Object> searchParams) throws Exception {
        searchParams.put("sort", page.getSort());
        return dbManage.selectPageByCondition(searchParams, page);
    }
    
    /**
     * 添加用户
     *
     * @param sysUser 用户信息
     * @return boolean
     * @throws Exception
     */
    @LogAspect(desc = "添加系统用户")
    @Override
    public boolean saveSysUser(SysUser sysUser) throws Exception {
        if (null != getSysUserByLoginName(sysUser.getLoginName())) {
            throw SystemException.businessException("登录名称重复");
        }
        sysUser.setSuId(SysUtil.GetUUID());
        sysUser.setCreateDate(TimeHelper.getLocatlTime());
        sysUser.setPassword(new ShaPasswordEncoder().encodePassword(sysUser.getLoginName(), DEFAULT_PASSWORD));
        if(dbManage.insert(sysUser)){
            return true;
        }
        throw SystemException.businessException("添加用戶失败");
    }

    /**
     * 修改用户
     *
     * @param sysUser 用户信息
     * @return boolean
     * @throws Exception
     */
    @LogAspect(desc = "修改系统用户")
    @Override
    public boolean updateSysUser(SysUser sysUser) throws Exception {
        SysUser user=getSysUserByLoginName(sysUser.getLoginName());
        if(null!=user){
            if(!user.getSuId().equals(sysUser.getSuId())){
                throw SystemException.businessException("登录名称重复");
            }
        }
        if(dbManage.update(sysUser)){
            return true;
        }
        throw SystemException.businessException("修改用戶失败");
    }

    /**
     * 删除用户
     *
     * @param suId 用户ID
     * @return boolean
     * @throws Exception
     */
    @LogAspect(desc = "删除系统用户")
    @Override
    public boolean delUserBySuId(String suId) throws Exception {
        if(dbManage.delete(suId)){
            return true;
        }
        throw SystemException.businessException("未找到要删除的用户");
    }

    /**
     * 重置用户密码
     *
     * @param suId       用户ID
     * @param loginName 登录名称
     * @return boolean
     * @throws Exception
     */
    @LogAspect(desc = "重置用户密码")
    @Override
    public boolean updatePwd(String suId, String loginName) throws Exception {
        SysUser sysUser=new SysUser();
        sysUser.setSuId(suId);
        sysUser.setPassword(new ShaPasswordEncoder().encodePassword(loginName, DEFAULT_PASSWORD));
        if(dbManage.update(sysUser)){
            return true;
        }
        throw SystemException.businessException("未找到用户");
    }

    /**
     * 用户修改密码
     *
     * @param sysUser 用户信息
     * @param newPwd  新密码
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean updatePwd(SysUser sysUser, String newPwd) throws Exception {
//        SysUser user=getSysUserByLoginName(sysUser.getLoginName());
//        String pwd=new ShaPasswordEncoder().encodePassword(sysUser.getLoginName(), sysUser.getPassword());
//        if(!pwd.equals(user.getPassword())){
//            throw SystemException.businessException("旧密码不正确");
//        }
        sysUser.setPassword(new ShaPasswordEncoder().encodePassword(sysUser.getLoginName(), newPwd));
        if(dbManage.update(sysUser)){
            return true;
        }
        throw SystemException.businessException("未找到用户");
    }

	@Override
	public List<SysUser> getListByCondition(Map<String, Object> paramMap)throws Exception {
		
		return dbManage.selectListByCondition(paramMap);
	}
    //根据用户名和密码查询用户
	@Override
	public Integer getUserCount(Map<String, Object> paramMap) throws Exception {
	
		return dbManage.selectTotalByCondition(paramMap);
	}
	
	@Override
	public  List<SysUser> memberStatisticsByOrg(Integer orgLevels) throws Exception{
		List<SysUser> selectListByCondition = dbManage.selectListByCondition(orgLevels);
		return selectListByCondition;
	}
	
	 	//根据用户名和密码查询用户
		@Override
		public Integer getCurrTotalNum() throws Exception {
	        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Map<String, Object> maps = new HashMap<>();
	        maps.put("createDate", sdf.format(new Date()));
			return dbManage.selectTotalByCondition(maps);
		}
}
