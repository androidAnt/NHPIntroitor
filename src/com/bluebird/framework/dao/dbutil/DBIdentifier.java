package com.bluebird.framework.dao.dbutil;

/**
 * 多数据源数据库标识枚举
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-14 14:20
 */
public enum DBIdentifier {

    DB_DEFAULT("db_default"),
    DB_TEST("db_test");

    private final String value;

    DBIdentifier(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
