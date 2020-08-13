package com.bluebird.framework.dao.dbutil.mybatis.interceptor;


import com.bluebird.framework.dao.dbutil.mybatis.dialect.Dialect;
import com.bluebird.framework.dao.dbutil.mybatis.dialect.MySql5Dialect;
import com.bluebird.framework.dao.dbutil.mybatis.dialect.OracleDialect;
import org.apache.ibatis.executor.statement.StatementHandler;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.plugin.*;
import org.apache.ibatis.reflection.DefaultReflectorFactory;
import org.apache.ibatis.reflection.MetaObject;
import org.apache.ibatis.reflection.ReflectorFactory;
import org.apache.ibatis.reflection.factory.DefaultObjectFactory;
import org.apache.ibatis.reflection.factory.ObjectFactory;
import org.apache.ibatis.reflection.wrapper.DefaultObjectWrapperFactory;
import org.apache.ibatis.reflection.wrapper.ObjectWrapperFactory;
import org.apache.ibatis.session.Configuration;
import org.apache.ibatis.session.RowBounds;

import java.sql.Connection;
import java.util.Properties;

/***
 * 方言类似类似hiberante提供的dialect
 * 此处为扩展mybatis分页拦截器，以便结合方言使用数据库物理分页
 */
@Intercepts({@Signature(type = StatementHandler.class, method = "prepare", args = {Connection.class})})
public class PageInterceptor implements Interceptor {

    private static final ObjectFactory DEFAULT_OBJECT_FACTORY = new DefaultObjectFactory();
    private static final ObjectWrapperFactory DEFAULT_OBJECT_WRAPPER_FACTORY = new DefaultObjectWrapperFactory();
    private static final ReflectorFactory  DEFAULT_OBJECT_REFLECTOR_FACTORY=new DefaultReflectorFactory();

    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        StatementHandler statementHandler = (StatementHandler) invocation.getTarget();
        MetaObject metaStatementHandler = MetaObject.forObject(statementHandler, DEFAULT_OBJECT_FACTORY, DEFAULT_OBJECT_WRAPPER_FACTORY,DEFAULT_OBJECT_REFLECTOR_FACTORY);
        RowBounds rowBounds = (RowBounds) metaStatementHandler.getValue("delegate.rowBounds");
        if(rowBounds == null || rowBounds == RowBounds.DEFAULT){
            return invocation.proceed();
        }
        // 分离代理对象链(由于目标类可能被多个拦截器拦截，从而形成多次代理，通过下面的两次循环可以分离出最原始的的目标类)
        while (metaStatementHandler.hasGetter("h")) {
            Object object = metaStatementHandler.getValue("h");
            metaStatementHandler = MetaObject.forObject(object, DEFAULT_OBJECT_FACTORY, DEFAULT_OBJECT_WRAPPER_FACTORY,DEFAULT_OBJECT_REFLECTOR_FACTORY);
        }
        // 分离最后一个代理对象的目标类
        while (metaStatementHandler.hasGetter("target")) {
            Object object = metaStatementHandler.getValue("target");
            metaStatementHandler = MetaObject.forObject(object, DEFAULT_OBJECT_FACTORY, DEFAULT_OBJECT_WRAPPER_FACTORY,DEFAULT_OBJECT_REFLECTOR_FACTORY);
        }
        Configuration configuration = (Configuration) metaStatementHandler.getValue("delegate.configuration");
        Dialect.Type databaseType = null;
        try {
            databaseType = Dialect.Type.valueOf(configuration.getVariables().getProperty("dialect").toUpperCase());
        } catch (Exception e) {
            //ignore
        }
        if (databaseType == null) {
            throw new RuntimeException("在 mybatis-config.xml 文件中没有定义数据库方言 : " + configuration.getVariables().getProperty("dialect"));
        }
        Dialect dialect = null;
        switch (databaseType) {
            case MYSQL:
                dialect = new MySql5Dialect();
                break;
            case ORACLE:
                dialect = new OracleDialect();
                break;
        }
        BoundSql boundSql = (BoundSql) metaStatementHandler.getValue("delegate.boundSql");
        Object parameterObject = boundSql.getParameterObject();
        if (parameterObject == null) {
            throw new NullPointerException("parameterObject is null!");
        } else {
            // 重写sql
            String originalSql = (String) metaStatementHandler.getValue("delegate.boundSql.sql");
            metaStatementHandler.setValue("delegate.boundSql.sql", dialect.getLimitString(originalSql, rowBounds.getOffset(), rowBounds.getLimit()));
            // 采用物理分页后，就不需要mybatis的内存分页了，所以重置下面的两个参数
            metaStatementHandler.setValue("delegate.rowBounds.offset", RowBounds.NO_ROW_OFFSET);
            metaStatementHandler.setValue("delegate.rowBounds.limit", RowBounds.NO_ROW_LIMIT);
        }
        return invocation.proceed();
    }

    @Override
    public Object plugin(Object target) {
        if (target instanceof StatementHandler) {
            return Plugin.wrap(target, this);
        } else {
            return target;
        }
    }

    @Override
    public void setProperties(Properties properties) {
    }

}
