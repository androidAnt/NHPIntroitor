package com.bluebird.module.system.service.impl;

import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.module.system.model.SysOpLog;
import com.bluebird.module.system.service.SysOpLogService;
import org.springframework.stereotype.Service;

/**
 * 系统操作日志接口实现类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-11 17:17
 * @extends BaseServiceImpl
 * @implements SysOpLogService
 */
@Service
public class SysOpLogServiceImpl extends BaseServiceImpl implements SysOpLogService {
    /**
     * 添加操作日志
     *
     * @param sysOpLog 操作日志
     */
    @Override
    public boolean saveSysOpLog(SysOpLog sysOpLog) throws Exception {
        return dbManage.insert(sysOpLog);
    }
}
