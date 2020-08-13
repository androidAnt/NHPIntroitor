package com.bluebird.framework.dao.dbutil.mybatis.dialect;

public class MySql5PageHepler {
	/**
	 * 得到分页的SQL
	 * @param offset 	偏移量
	 * @param limit		位置
	 * @return	分页SQL
	 */
	public static String getLimitString(String querySelect,int offset, int limit) {
		
		querySelect		= getLineSql(querySelect);
		
		String sql =  querySelect +" limit "+ offset +" ,"+ limit;
		
		return sql;
		
	}

	/**
	 * 将SQL语句变成一条语句，并且每个单词的间隔都是1个空格
	 * 
	 * @param sql SQL语句
	 * @return 如果sql是NULL返回空，否则返回转化后的SQL
	 */
	private static String getLineSql(String sql) {
		return sql.replaceAll("[\r\n]", " ").replaceAll("\\s{2,}", " ");
	}

}
