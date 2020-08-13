package com.bluebird.framework.dao.dbutil;

import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

/**
 * 虚拟数据源驱动
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-7 11:24
 * @extends AbstractRoutingDataSource
 */
public class MultipleDataSource extends AbstractRoutingDataSource {

    @Override
    protected Object determineCurrentLookupKey() {
        return CustomerContextHolder.getContextType();
    }
}
