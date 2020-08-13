package com.bluebird.framework.base;

import com.bluebird.framework.constant.SystemConstant;
import org.apache.ibatis.session.RowBounds;

import java.util.ArrayList;
import java.util.List;

/**
 * 分页对象
 *
 * @author zhangyong
 * @version 2.0
 * @Date 2016-1-6 12:01
 */
public class Page {

    private Integer total = 0;//总条数

    private Integer pageSize = SystemConstant.DEFAULT_PAGE_SIZE_PC;//每页显示的记录条数

    private Integer pageNO = SystemConstant.DEFAULT_PAGENO;//当前页 默认为DEFAULT_PAGE_NUMBER

    private Integer totalPageNO=0;//

    private  List data;//当前页中存放的数据

    private String sort=null;//排序

    /**
     * 构造方法
     */
    public Page() {
        this(SystemConstant.DEFAULT_PAGENO, SystemConstant.DEFAULT_PAGE_SIZE_PC, 0, null, new ArrayList());
    }

    /**
     * 默认构造方法
     *
     * @param pageNO   当前页数
     * @param pageSize 本页容量
     * @param total  数据库中总记录条数
     * @param sort  排序字符串
     * @param data  本页包含的数据
     */
    public Page(Integer pageNO, Integer pageSize, Integer total, String sort, List data) {
        this.pageNO = pageNO;
        this.pageSize = pageSize;
        if (this.pageSize < 1) {
            this.pageSize = 1;
        }
        this.total = total;
        this.sort = sort;
        if(null!=data){
            this.data = data;
        }
        if (total % pageSize == 0) {
            this.totalPageNO = total / pageSize;
        } else {
            this.totalPageNO = (total / pageSize) + 1;
        }
    }

    /**
     * 获取任一页第一条数据在数据库中的位置
     */
    private static int getStartOfAnyPage(Integer pageNo, Integer pageSize) {
        int startIndex = (pageNo - 1) * pageSize + 1;
        if (startIndex < 1) startIndex = 1;
        return startIndex;
    }

    /***
     * 获取MyBatis的分页参数
     *
     * @param pageNo
     * @param pageSize
     * @return RowBounds
     */
    public static RowBounds getRowBounds(Integer pageNo, Integer pageSize) {
        return new RowBounds(Page.getStartOfAnyPage(pageNo, pageSize) - 1, pageSize);
    }

    /***
     * 获取分页的Page对象
     *
     * @param pageNO   页码
     * @param pageSize 每页条数
     * @param totalNO  总条数
     * @param orderStr  排序字符串
     * @param records  分页记录结果
     * @return Page
     */
    public static Page getPage(Integer pageNO, Integer pageSize, Integer totalNO, String orderStr, List records) {
        if (totalNO < 1) {
            return new Page();
        }
        if (pageNO < 1) pageNO = 1;
        return new Page(pageNO, pageSize, totalNO, orderStr, records);
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getPageNO() {
        return pageNO;
    }

    public void setPageNO(Integer pageNO) {
        this.pageNO = pageNO;
    }

    public Integer getTotalPageNO() {
        return totalPageNO;
    }

    public void setTotalPageNO(Integer totalPageNO) {
        this.totalPageNO = totalPageNO;
    }

    public List getData() {
        return data;
    }

    public void setData(List data) {
        this.data = data;
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

}
