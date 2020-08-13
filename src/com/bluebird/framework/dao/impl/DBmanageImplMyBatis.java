package com.bluebird.framework.dao.impl;

import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.dao.DBmanage;
import com.bluebird.framework.dao.dbutil.CustomerContextHolder;
import com.bluebird.framework.dao.dbutil.DBIdentifier;
import com.bluebird.framework.exception.SystemException;

import org.mybatis.spring.support.SqlSessionDaoSupport;

import java.util.ArrayList;
import java.util.List;

/**
 * 数据库操作接口实实现类(mybatis)
 *
 * @author zhangyong
 * @version 2.0
 * @Date 2016-3-14 15:36
 */
public class DBmanageImplMyBatis extends SqlSessionDaoSupport implements DBmanage {

    /**
     * 添加对象(如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean insert(Object parameter) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        return getSqlSession().insert(getStatement(), parameter) > 0;
    }

    /**
     * 添加对象(多数据源)
     *
     * @param parameter    参数
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean insert(Object parameter, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        return getSqlSession().insert(getStatement(), parameter) > 0;
    }

    /**
     * 添加对象(如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @param statement 引用声明
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean insert(Object parameter, String statement) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        return getSqlSession().insert(statement, parameter) > 0;
    }

    /**
     * 添加对象(多数据源)
     *
     * @param parameter    参数
     * @param statement    引用声明
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean insert(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        return getSqlSession().insert(statement, parameter) > 0;
    }

    /**
     * 删除数据(如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean delete(Object parameter) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        return getSqlSession().delete(getStatement(), parameter) > 0;
    }

    /**
     * 删除数据(多数据源)
     *
     * @param parameter    参数
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean delete(Object parameter, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        return getSqlSession().delete(getStatement(), parameter) > 0;
    }

    /**
     * 删除数据(如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @param statement 引用声明
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean delete(Object parameter, String statement) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        return getSqlSession().delete(statement, parameter) > 0;
    }

    /**
     * 删除数据(多数据源)
     *
     * @param parameter    参数
     * @param statement    引用声明
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean delete(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        return getSqlSession().delete(statement, parameter) > 0;
    }

    /**
     * 修改数据(如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean update(Object parameter) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        return getSqlSession().update(getStatement(), parameter) > 0;
    }

    /**
     * 修改数据(多数据源)
     *
     * @param parameter    参数
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean update(Object parameter, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        return getSqlSession().update(getStatement(), parameter) > 0;
    }

    /**
     * 修改数据(如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @param statement 引用声明
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean update(Object parameter, String statement) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        return getSqlSession().update(statement, parameter) > 0;
    }

    /**
     * 修改数据(多数据源)
     *
     * @param parameter    参数
     * @param statement    引用声明
     * @param dbIdentifier 多数据源
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean update(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        return getSqlSession().update(statement, parameter) > 0;
    }

    /**
     * 查看是否存在(存在返回true,如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean isExist(Object parameter) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        Integer count=getSqlSession().selectOne(getStatement(), parameter);
        return count!=null&&count>0;
    }

    /**
     * 查看是否存在(存在返回true,多数据源)
     *
     * @param parameter 参数
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean isExist(Object parameter, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        Integer count=getSqlSession().selectOne(getStatement(), parameter);
        return count!=null&&count>0;

    }

    /**
     * 查看是否存在(存在返回true,如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @param statement 引用声明
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean isExist(Object parameter, String statement) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        Integer count=getSqlSession().selectOne(statement, parameter);
        return count!=null&&count>0;
    }

    /**
     * 查看是否存在(存在返回true,多数据源)
     *
     * @param parameter    参数
     * @param statement    引用声明
     * @param dbIdentifier 数据源标识
     * @return boolean
     * @throws Exception
     */
    @Override
    public boolean isExist(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        Integer count=getSqlSession().selectOne(statement, parameter);
        return count!=null&&count>0;
    }

    /**
     * 查询对象（单条：如果没数据返回null，如果是开启多数据源则给予默认数据源）
     *
     * @param parameter 参数
     * @return T 泛型对象
     * @throws Exception
     */
    @Override
    public <T> T selectByCondition(Object parameter) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        return getSqlSession().selectOne(getStatement(), parameter);
    }

    /**
     * 查询对象（单条：如果没数据返回null，多数据源）
     *
     * @param parameter 参数
     * @return T 泛型对象
     * @throws Exception
     */
    @Override
    public <T> T selectByCondition(Object parameter, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        return getSqlSession().selectOne(getStatement(), parameter);
    }

    /**
     * 查询对象（单条：如果没数据返回null，如果是开启多数据源则给予默认数据源）
     *
     * @param parameter 参数
     * @param statement 引用声明
     * @return T 泛型对象
     * @throws Exception
     */
    @Override
    public <T> T selectByCondition(Object parameter, String statement) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        return getSqlSession().selectOne(statement, parameter);
    }

    /**
     * 查询对象（单条：如果没数据返回null，多数据源）
     *
     * @param parameter    参数
     * @param statement    引用声明
     * @param dbIdentifier 数据源标识
     * @return T 泛型对象
     * @throws Exception
     */
    @Override
    public <T> T selectByCondition(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        return getSqlSession().selectOne(statement, parameter);
    }

    /**
     * 查询对象集合(无结果为null,如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @return List<E> 泛型集合
     * @throws Exception
     */
    @Override
    public <E> List<E> selectListByCondition(Object parameter) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        return getSqlSession().selectList(getStatement(), parameter);
    }

    /**
     * 查询对象集合(无结果为null,多数据源)
     *
     * @param parameter    参数
     * @param dbIdentifier 数据源标识
     * @return List<E> 泛型集合
     * @throws Exception
     */
    @Override
    public <E> List<E> selectListByCondition(Object parameter, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        return getSqlSession().selectList(getStatement(), parameter);
    }

    /**
     * 查询对象集合(无结果为null,如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @param statement 引用声明
     * @return List<E> 泛型集合
     * @throws Exception
     */
    @Override
    public <E> List<E> selectListByCondition(Object parameter, String statement) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        return getSqlSession().selectList(statement, parameter);
    }

    /**
     * 查询对象集合(无结果为null,多数据源)
     *
     * @param parameter 参数
     * @param statement 引用声明
     * @return List<E> 泛型集合
     * @throws Exception
     */
    @Override
    public <E> List<E> selectListByCondition(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        return getSqlSession().selectList(statement, parameter);
    }

    /**
     * 查询条数(如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @return Integer
     * @throws Exception
     */
    @Override
    public Integer selectTotalByCondition(Object parameter) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        return getSqlSession().selectOne(getStatement(), parameter);
    }

    /**
     * 查询条数(多数据源)
     *
     * @param parameter    参数
     * @param dbIdentifier 数据源标识
     * @return Integer
     * @throws Exception
     */
    @Override
    public Integer selectTotalByCondition(Object parameter, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        return getSqlSession().selectOne(getStatement(), parameter);
    }

    /**
     * 查询条数(如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @param statement 引用声明
     * @return Integer
     * @throws Exception
     */
    @Override
    public Integer selectTotalByCondition(Object parameter, String statement) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        return getSqlSession().selectOne(statement, parameter);
    }

    /**
     * 查询条数(多数据源)
     *
     * @param parameter    参数
     * @param statement    引用声明
     * @param dbIdentifier 数据源标识
     * @return Integer
     * @throws Exception
     */
    @Override
    public Integer selectTotalByCondition(Object parameter, String statement, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        return getSqlSession().selectOne(statement, parameter);
    }

    /**
     * 查询分页数据(如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @param page      分页数据
     * @return page
     * @throws Exception
     */
    @Override
    public Page selectPageByCondition(Object parameter, Page page) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        String statement = getStatement();
        Integer count = getSqlSession().selectOne(statement.replace("List", "Count"), parameter);
        if (0 != count) {
            List list = getSqlSession().selectList(statement, parameter, Page.getRowBounds(page.getPageNO(), page.getPageSize()));
            return Page.getPage(page.getPageNO(), page.getPageSize(), count, page.getSort(), list);
        }
        return Page.getPage(page.getPageNO(), page.getPageSize(), count, page.getSort(), new ArrayList());
    }

    /**
     * 查询分页数据(多数据源)
     *
     * @param parameter 参数
     * @param page      分页数据
     * @return page
     * @throws Exception
     */
    @Override
    public Page selectPageByCondition(Object parameter, Page page, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        String statement = getStatement();
        Integer count = getSqlSession().selectOne(statement.replace("List", "Count"), parameter);
        if (0 != count) {
            List list = getSqlSession().selectList(statement, parameter, Page.getRowBounds(page.getPageNO(), page.getPageSize()));
            return Page.getPage(page.getPageNO(), page.getPageSize(), count, page.getSort(), list);
        }
        return Page.getPage(page.getPageNO(), page.getPageSize(), count, page.getSort(), new ArrayList());
    }

    /**
     * 查询分页数据(如果是开启多数据源则给予默认数据源)
     *
     * @param parameter 参数
     * @param page      分页数据
     * @param statement 引用声明
     * @return page
     * @throws Exception
     */
    @Override
    public Page selectPageByCondition(Object parameter, Page page, String statement) throws Exception {
        if (SystemConstant.MULTIPLE_DATA_SOURCES) {
            try {
                CustomerContextHolder.setContextType(DBIdentifier.DB_DEFAULT.getValue());
            } catch (Exception e) {
                throw SystemException.noDataBaseException();
            }
        }
        Integer count = getSqlSession().selectOne(statement.replace("List", "Count"), parameter);
        if (0 != count) {
            List list = getSqlSession().selectList(statement, parameter, Page.getRowBounds(page.getPageNO(), page.getPageSize()));
            return Page.getPage(page.getPageNO(), page.getPageSize(), count, page.getSort(), list);
        }
        return Page.getPage(page.getPageNO(), page.getPageSize(), count, page.getSort(), new ArrayList());
    }

    /**
     * 查询分页数据(如果是开启多数据源则给予默认数据源)
     *
     * @param parameter    参数
     * @param page         分页数据
     * @param statement    引用声明
     * @param dbIdentifier 数据源标识
     * @return page
     * @throws Exception
     */
    @Override
    public Page selectPageByCondition(Object parameter, Page page, String statement, DBIdentifier dbIdentifier) throws Exception {
        try {
            CustomerContextHolder.setContextType(dbIdentifier.getValue());
        } catch (Exception e) {
            throw SystemException.noDataBaseException();
        }
        Integer count = getSqlSession().selectOne(statement.replace("List", "Count"), parameter);
        if (0 != count) {
            List list = getSqlSession().selectList(statement, parameter, Page.getRowBounds(page.getPageNO(), page.getPageSize()));
            return Page.getPage(page.getPageNO(), page.getPageSize(), count, page.getSort(), list);
        }
        return Page.getPage(page.getPageNO(), page.getPageSize(), count, page.getSort(), new ArrayList());
    }

    /**
     * 获取调用方法的全路径
     *
     * @return String
     * @throws Exception
     */
    private String getStatement() throws Exception {
        StackTraceElement[] stack = (new Throwable()).getStackTrace();
        return stack[2].getClassName() + "." + stack[2].getMethodName();
    }
}
