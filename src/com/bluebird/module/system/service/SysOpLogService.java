package com.bluebird.module.system.service;

import com.bluebird.framework.base.BaseService;
import com.bluebird.module.system.model.SysOpLog;

/**
 * 系统操作日志接口
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-11 17:16
 * @extends BaseService
 */
public interface SysOpLogService extends BaseService{

    /**
     * 添加操作日志
     * */
    public boolean saveSysOpLog(SysOpLog sysOpLog)throws Exception;
}
