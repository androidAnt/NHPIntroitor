package com.bluebird.framework.dao.dbutil.mybatis.dialect;

/***
 * 用于mysql的分页处理
 *
 * @author zhangyong
 * @extends Dialect
 */
public class MySql5Dialect extends Dialect {
    @Override
    public String getLimitString(String sql, int offset, int limit) {
        return MySql5PageHepler.getLimitString(sql, offset, limit);
    }
}
