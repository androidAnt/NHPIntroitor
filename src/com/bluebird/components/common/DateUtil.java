/** 
 * FileName AppCommonController.java
 * 
 * Version 1.0
 *
 * Create by yangwr 2014/8/9
 * 
 * Copyright 2000-2001 Bluemobi. All Rights Reserved.
 */
package com.bluebird.components.common;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * FileName AppCommonController.java
 * 
 * Version 1.0
 * 
 * Create by yangwr 2014/8/9
 * 
 * APP公共处理控制器
 */
public class DateUtil {
	
	private static final Logger logger = LoggerFactory.getLogger(DateUtil.class);

	// 变量声明 //
	private static Calendar calObject;

	public static final String DATE_FORMAT_FULL = "yyyy/MM/dd HH:mm:ss";
	public static final String DATE_FORMAT_FULL1 = "yyyy-MM-dd HH:mm:ss";
	public static final String DATE_FORMAT_SHORT = "yyyy/MM/dd";
	public static final String DATE_FORMAT_SHORT1 = "yyyy-MM-dd";
	public static final String DATE_FORMAT_YEAR = "yyyy";
	public final static String DEFAULT_FORMAT = "yyyyMMdd";
	public static final String DATE_FORMAT_CN = "yyyy年MM月dd日HH时mm分ss秒";
	public static final String DATE_FORMAT_CN_SHORT = "yyyy年MM月dd日";
	public static final String DEFAULT_FORMAT_YMDHMS = "yyyyMMddHHmmss";

	/**
	 * 转换日期
	 * 
	 * @param dteDate
	 * @param strDateFormat
	 * @return
	 */
	public static String toDateFormat(Date dteDate, String strDateFormat) {

		// 变量声明 //
		String strRet = null;

		try {

			if (dteDate == null) {

				strRet = "";

			} else {
				strRet = new SimpleDateFormat(strDateFormat).format(dteDate);
			}

		} catch (Exception e) {
			strRet = "";
		}

		return strRet;

	}

	/**
	 * 转换默认格式日期
	 * 
	 * @param dteDate
	 * @param strDateFormat
	 * @return
	 */
	public static String toDateDefaultFormat(Date dteDate) {

		return toDateFormat(dteDate, DATE_FORMAT_FULL);

	}

	/**
	 * 取得当前年份
	 * 
	 * @param dteDate
	 * @param strDateFormat
	 * @return
	 */
	public static String getCurrentYear() {
		Date dteDate = new Date();
		return toDateFormat(dteDate, DATE_FORMAT_YEAR);
	}

	/**
	 * 年计算年的加法
	 * 
	 * 
	 * @param dteDate
	 *            对象日期
	 * @param lngNumber
	 *            加的年数（负数：过去；正数：未来）
	 * @return Date 计算后日期
	 */
	public static Date getAddYear(Date dteDate, long lngNumber) {

		// 变量声明 //
		Date dteRet = null; // 返回日期保存用

		// /1.取得计算对象日期计算结果
		try {
			// //1.1.生成Canlendar对象
			calObject = Calendar.getInstance();
			calObject.setTime(dteDate);

			// //1.2.日期年的加法
			calObject.add(Calendar.YEAR, (int) lngNumber);

			// //1.3.计算后日期的取得
			dteRet = calObject.getTime();

			// /2.发生异常时处理
		} catch (Exception e) {
			// //2.1. 返回NULL
			dteRet = null;
		}

		// /3.返回计算后的日期
		return dteRet;

	}

	/**
	 * 计算月
	 * 
	 * @param dteDate
	 *            计算对象日期
	 * @param lngNumber
	 *            加的月数（负数：过去；正数：未来）
	 * @return Date 计算后日期
	 */
	public static Date getAddMonth(Date dteDate, long lngNumber) {

		// 变量声明 //
		Date dteRet = null; // 返回日期保存用

		// /1.取得计算对象日期计算结果
		try {
			// //1.1.生成Canlendar对象
			calObject = Calendar.getInstance();
			calObject.setTime(dteDate);

			// //1.2.日期月的加法
			calObject.add(Calendar.MONTH, (int) lngNumber);

			// //1.3.计算后日期的取得
			dteRet = calObject.getTime();

			// /2.发生异常时处理
		} catch (Exception e) {
			// //2.1. 返回NULL
			dteRet = null;
		}

		// /3.返回计算后的日期
		return dteRet;

	}

	/**
	 * 计算日
	 * 
	 * @param dteDate
	 *            计算对象日期
	 * @param lngNumber
	 *            加的天数（负数：过去；正数：未来））
	 * @return Date 计算后日期
	 */
	public static Date getAddDay(Date dteDate, long lngNumber) {

		// 变量声明 //
		Date dteRet = null; // 返回日期保存用

		// /1.取得计算对象日期计算结果
		try {
			// //1.1.生成Canlendar对象
			calObject = Calendar.getInstance();
			calObject.setTime(dteDate);

			// //1.2.日期日的加法
			calObject.add(Calendar.DATE, (int) lngNumber);

			// //1.3.计算后日期的取得
			dteRet = calObject.getTime();

			// /2.发生异常时处理
		} catch (Exception e) {
			// //2.1. 返回NULL
			dteRet = null;
		}

		// /3.返回计算后的日期
		return dteRet;

	}

	/**
	 * 计算日
	 * 
	 * @param dteDate
	 *            计算对象日期
	 * @param lngNumber
	 *            加的天数（负数：过去；正数：未来））
	 * @return Date 计算后日期
	 */
	public static Date getAddMinute(Date dteDate, long lngNumber) {

		// 变量声明 //
		Date dteRet = null; // 返回日期保存用

		// /1.取得计算对象日期计算结果
		try {
			// //1.1.生成Canlendar对象
			calObject = Calendar.getInstance();
			calObject.setTime(dteDate);

			// //1.2.日期日的加法
			calObject.add(Calendar.MINUTE, (int) lngNumber);

			// //1.3.计算后日期的取得
			dteRet = calObject.getTime();

			// /2.发生异常时处理
		} catch (Exception e) {
			// //2.1. 返回NULL
			dteRet = null;
		}

		// /3.返回计算后的日期
		return dteRet;

	}

	/**
	 * 计算秒
	 * 
	 * @param dteDate
	 *            计算对象日期
	 * @param lngNumber
	 *            加的秒数（负数：过去；正数：未来））
	 * @return Date 计算后日期
	 */
	public static Date getAddSecond(Date dteDate, long lngNumber) {

		// 变量声明 //
		Date dteRet = null; // 返回日期保存用

		// /1.取得计算对象日期计算结果
		try {
			// //1.1.生成Canlendar对象
			calObject = Calendar.getInstance();
			calObject.setTime(dteDate);

			// //1.2.日期日的加法
			calObject.add(Calendar.SECOND, (int) lngNumber);

			// //1.3.计算后日期的取得
			dteRet = calObject.getTime();

			// /2.发生异常时处理
		} catch (Exception e) {
			// //2.1. 返回NULL
			dteRet = null;
		}

		// /3.返回计算后的日期
		return dteRet;

	}

	/**
	 * 比较两个日期
	 * 
	 * @param dteDate1
	 *            计算对象日期1
	 * @param dteDate2
	 *             计算对象日期2
	 * @return int 比较的结果
	 */
	public static int compareDate(Date dteDate1, Date dteDate2) {

		// 变量声明 //
		int comparRet = 0; // 返回比较结果保存用

		if (dteDate1 == null || dteDate2 == null) {
			return -1;
		}

		comparRet = dteDate1.compareTo(dteDate2);

		// 返回比较的结果
		return comparRet;

	}

	/**
	 * 判断两个日期距离
	 * 
	 * @param dteDate1
	 *            计算对象日期1
	 * @param dteDate2
	 *             计算对象日期2
	 * @return int 比较的结果
	 */
	public static int compareDateDistance(Date dteDate1, Date dteDate2) {

		// 变量声明 //
		int comparRet = 0; // 返回比较结果保存用

		if (dteDate1 == null || dteDate2 == null) {
			return 0;
		}

		comparRet = dteDate1.compareTo(dteDate2);

		// 返回比较的结果
		return comparRet;

	}

	/**
	 * 根据给定的格式化参数，将字符串转换为日期
	 * 
	 * @param dateString
	 * @param dateFormat
	 * @return java.util.Date
	 */
	public static java.util.Date parse(String dateString, String dateFormat) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>>parse(String dateString, String dateFormat)");
		}
		if (dateString == null || "".equals(dateString.trim())  ) {
			return null;
		}
		DateFormat sdf = new SimpleDateFormat(dateFormat);
		Date date = null;
		try {
			date = sdf.parse(dateString);

		} catch (Exception e) {
			e.printStackTrace();
		}

		if (logger.isDebugEnabled()) {
			logger.debug("<<<parse(return java.util.Date)");
		}
		return date;
	}

	/**
	 * 
	 * 默认将字符串转换为日期，格式(yyyy-MM-dd)
	 * 
	 * @param dateString
	 * @return
	 */
	public static java.util.Date parse(String dateString) {
		return parse(dateString, DEFAULT_FORMAT);
	}

	/**
	 * 根据给定的格式化参数，将日期转换为字符串
	 * 
	 * @param date
	 * @param dateFormat
	 * @return String
	 */
	public static String toString(java.util.Date date, String dateFormat) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>> toString(java.util.Date date, String dateFormat)");
		}
		if ("".equals(date) || date == null) {
			return "bug: date is null";
		}
		DateFormat sdf = new SimpleDateFormat(dateFormat);
		String str = sdf.format(date);

		if (logger.isDebugEnabled()) {
			logger.debug("<<< toString return String");
		}
		return str;
	}

	/**
	 * 默认将日期转换为字符串，格式(yyyy-MM-dd)
	 * 
	 * @param date
	 * @return String
	 */
	public static String toString(java.util.Date date) {
		return toString(date, DEFAULT_FORMAT);
	}
	
	/**
	 * 将日期转换为长整型?
	 * 
	 * @param date
	 * @return long
	 */
	public static long toLong(java.util.Date date) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>>toLong(java.util.Date date)");
		}
		if (date == null) {
			return 0;
		}
		long d = date.getTime();

		if (logger.isDebugEnabled()) {
			logger.debug("<<<toLong return long");
		}
		return d;
	}

	/**
	 * 将长整型转换为日期对象
	 * 
	 * @param time
	 * @return date
	 */
	public static java.util.Date toDate(long time) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>>toDate (long time)");
		}
		if ("".equals(time)) {
			return new Date();
		}
		Date date = new Date(time);

		if (logger.isDebugEnabled()) {
			logger.debug("<<<toDate return date");
		}
		return date;
	}

	/**
	 * 获得系统当前时间
	 * 
	 * @return java.util.Date
	 */
    public static String currentStringDate() {
        if (logger.isDebugEnabled()) {
            logger.debug(">>>currentDate()");
        }
        Date date = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");//可以方便地修改日期格式


        String now = dateFormat.format( date ); 
        if (logger.isDebugEnabled()) {
            logger.debug("<<<currentDate() return date");
        }
        return now;
    }

	/**
	 * 获得系统当前时间(按用户自己格式)
	 * 
	 * @return java.util.Date
	 */
	public static String currentYourDate(String formate) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>>currentDate()");
		}
		Date date = new Date();

		if (logger.isDebugEnabled()) {
			logger.debug("<<<currentDate() return date");
		}
		return toString(date, formate);
	}

	/**
	 * 获得系统当前时间
	 * 
	 * @return java.util.Date
	 */
	public static java.util.Date currentDate() {
		if (logger.isDebugEnabled()) {
			logger.debug(">>>currentDate()");
		}
		Date date = new Date();

		if (logger.isDebugEnabled()) {
			logger.debug("<<<currentDate() return date");
		}
		return date;
	}

	/**
	 * 根据日历的规则，为给定的日历字段添加或减去指定的时间�?
	 * 
	 * @param field
	 *            指定的日历字段
	 * @param date
	 *            需要操作的日期对象
	 * @param value
	 *            更改的时间值
	 * @return java.util.Date
	 */
	public static Date add(int field, Date date, int value) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>>add(int field,Date date,int value)");
		}
		Calendar ca = Calendar.getInstance();
		ca.setTime(date);
		ca.add(field, value);
		Date newDate = ca.getTime();

		if (logger.isDebugEnabled()) {
			logger.debug("<<<add() return date");
		}
		return newDate;
	}

	/**
	 * 返回给定日历字段的值
	 * 
	 * @param field
	 *            指定的日历字段
	 * @param date
	 *            给定的日期对象
	 * @return java.util.Date
	 */
	public static int get(int field, Date date) {
		if (logger.isDebugEnabled()) {
			logger.debug(">>>get(int field, Date date");
		}
		Calendar ca = Calendar.getInstance();
		ca.setTime(date);
		int value = ca.get(field);

		if (logger.isDebugEnabled()) {
			logger.debug("<<<get() return date");
		}
		return value;
	}

	/**
	 * 返回前N个月的日期值
	 * 
	 * @param month
	 * @return
	 */
	public static Date getLastMonth(String month) {
		Calendar ca = Calendar.getInstance();
		int m = 0;
		try {
			m = Integer.parseInt(month);
		} catch (NumberFormatException e) {
			e.printStackTrace();
		}
		ca.add(Calendar.MONTH, -m);
		return ca.getTime();
	}
	
	/** 
	* @Title: getSeconds 
	* @Description: TODO(返回毫秒数) 
	* @param @return    设定文件 
	* @return String    返回类型 
	* @throws 
	*/
	public static String getSeconds(){
	    Calendar ca = Calendar.getInstance();
	    return ca.getTimeInMillis()+"";
	}


	/**
	 * 获取两个日期相差的天数
	 * 
	 * @param dteDate1
	 *            计算对象日期1
	 * @param dteDate2
	 *            计算对象日期2
	 * @return long 结果
	 */
	public static long getDateDistance(Date dteDate1, Date dteDate2) {
		
		Calendar cal = Calendar.getInstance();
		
		dteDate1=parse(toDateFormat(dteDate1, "yyyy-MM-dd"), "yyyy-MM-dd");
		
		cal.setTime(dteDate1);

		long time1 = cal.getTimeInMillis();
		
		dteDate2=parse(toDateFormat(dteDate2, "yyyy-MM-dd"), "yyyy-MM-dd");

		cal.setTime(dteDate2);

		long time2 = cal.getTimeInMillis();

		long between_days = (time2 - time1) / (1000 * 3600 * 24);
		return between_days;
	}
	
	/**
	 * 
	 * @Title: getMonth 
	 * @Description: 获得当前年月
	 * @param date
	 * @return
	 * @throws
	 */
	public static String getYearMonth(Date date){
		return toString(date, "yyyyMM");
	}
	
	/**
	 * 
	 * @Title: transStrToDate 
	 * @Description: 将字符串转换成日期
	 * @param dateStr
	 * @return
	 * @throws ParseException
	 * @throws
	 */
	public static Date transStrToDate(String dateStr) throws ParseException{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = sdf.parse(dateStr);
		return date;
	}
	
	/**
	 * 
	 * @Title: addMonth 
	 * @Description: 给指定日期添加执行月
	 * @param addNumber
	 * @param date
	 * @param pattern
	 * @return
	 * @throws ParseException
	 * @throws
	 */
	public static String addMonth(int addNumber, String date, String pattern) throws ParseException{
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		Date now = sdf.parse(date);
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(now);
		calendar.add(Calendar.MONTH, addNumber);
		return sdf.format(calendar.getTime());
	}
	
	/**
	 * 
	 * @Title: getCurrentYMD 
	 * @Description: 获得当前yyyy-mm-dd日期 
	 * @return
	 * @throws
	 */
	public static String getCurrentYMD(){
		Date dteDate = new Date();
		return toDateFormat(dteDate, DATE_FORMAT_SHORT1);
	}
	
	/**
	 * 
	 * @Title: getMonth 
	 * @Description: 获得当前年月
	 * @param date
	 * @return
	 * @throws
	 */
	public static String getMonth(Date date){
		return toString(date, "MM");
	}
	
	
	/**
	 * 转换日期
	 * 
	 * @param dteDate
	 * @param strDateFormat
	 * @return
	 */
	public static String toDateFormat(Date dteDate) {

		// 变量声明 //
		String strRet = null;

		try {

			if (dteDate == null) {

				strRet = "";

			} else {
				strRet = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(dteDate);
			}

		} catch (Exception e) {
			strRet = "";
		}

		return strRet;
	}
	
	/**
	 * 
	 * @Title: getWeekDateList 
	 * @Description: 获得当前日期所在周的日期列表
	 * @return
	 * @throws
	 */
	public static List<String> getWeekDateList(int year, int month, int day){
		List<String> dateList = new ArrayList<String>();
		
		Calendar cal = Calendar.getInstance();
		if( year !=0 && month != 0 && day != 0 ){
			cal.set(year, month, day);
		}else{
			cal.setTime(new Date());
		}
		
//	    DateFormat sdf = DateFormat.getDateInstance(); 
	    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	    System.out.println("要计算日期为:" + sdf.format(cal.getTime())); // 输出要计算日期  
	    
	    // 判断要计算的日期是否是周日，如果是则减一天计算周六的，否则会出问题，计算到下一周去了  
	    int dayWeek = cal.get(Calendar.DAY_OF_WEEK);// 获得当前日期是一个星期的第几天  
	    if ( 1 == dayWeek ) {  
	    	cal.add(Calendar.DAY_OF_MONTH, -1);  
	    }  
	    
	    // 设置一个星期的第一天，按中国的习惯一个星期的第一天是星期一  
	    cal.setFirstDayOfWeek(Calendar.MONDAY); 
	     
	    // 获得当前日期是一个星期的第几天  
	    day = cal.get(Calendar.DAY_OF_WEEK);  
	    
	    // 根据日历的规则，给当前日期减去星期几与一个星期第一天的差值  
	    cal.add(Calendar.DATE, cal.getFirstDayOfWeek() - day);  
	    
	    //获得周一的日期
	    String mondayDate = sdf.format(cal.getTime());  
	    System.out.println("所在周星期一的日期：" + mondayDate);
	    dateList.add(mondayDate + "_周一");
	    
	    //获得周二的日期
	    cal.add(Calendar.DATE, 1); 
	    String tuesdayDate = sdf.format(cal.getTime());  
	    System.out.println("所在周星期二的日期：" + tuesdayDate);
	    dateList.add(tuesdayDate + "_周二");
	    
	  	//获得周三的日期
	    cal.add(Calendar.DATE, 1); 
	    String wednesdayDate = sdf.format(cal.getTime());  
	    System.out.println("所在周星期三的日期：" + wednesdayDate);
	    dateList.add(wednesdayDate + "_周三");
	    
	    //获得周四的日期
	    cal.add(Calendar.DATE, 1); 
	    String thursdayDate = sdf.format(cal.getTime());  
	    System.out.println("所在周星期四的日期：" + thursdayDate);
	    dateList.add(thursdayDate + "_周四");
	    
	    //获得周五的日期
	    cal.add(Calendar.DATE, 1); 
	    String fridayDate = sdf.format(cal.getTime());  
	    System.out.println("所在周星期五的日期：" + fridayDate);
	    dateList.add(fridayDate + "_周五");
	    
	    //获得周六的日期
	    cal.add(Calendar.DATE, 1); 
	    String saturdayDate = sdf.format(cal.getTime());  
	    System.out.println("所在周星期六的日期：" + saturdayDate);
	    dateList.add(saturdayDate + "_周六");
	    
	    //获得周日的日期
	    cal.add(Calendar.DATE, 1);  
	    String sundayDate = sdf.format(cal.getTime());  
	    System.out.println("所在周星期日的日期：" + sundayDate);
	    dateList.add(sundayDate + "_周日");
	    
	    return dateList;
	}
	
	public static String addDay(int addNumber, String date, String pattern) throws ParseException{
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		Date now = sdf.parse(date);
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(now);
		calendar.add(Calendar.DAY_OF_MONTH, addNumber);
		return sdf.format(calendar.getTime());
	}
	
	/**
	 * 
	 * @Title: getPreMonth 
	 * @Description: 获得当前时间的上个月
	 * @return
	 * @throws
	 */
	public static String getPreMonth(){
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		calendar.add(Calendar.MONTH, -1);
		
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM");
        Date m = calendar.getTime();
        String mon = format.format(m);
        System.out.println("过去一个月："+mon);
        return mon;
	}
	
	/**
	 * 
	 * @Title: getPreMonthFirstDay 
	 * @Description: 获得上个月第一天
	 * @return
	 * @throws
	 */
	public static String getPreMonthFirstDay(){
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.MONTH, -1);
		calendar.set(Calendar.DAY_OF_MONTH, 1);
		
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date m = calendar.getTime();
        String mon = format.format(m);
        System.out.println("上个月第一天："+mon);
        return mon;

	}
	
	/**
	 * 
	 * @Title: getPreMonthLastDay 
	 * @Description: 获得上个月最后一天
	 * @return
	 * @throws
	 */
	public static String getPreMonthLastDay(){
		Calendar calendar = Calendar.getInstance();
		calendar.set(Calendar.DAY_OF_MONTH, 1); 
		calendar.add(Calendar.DATE, -1);
		
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date m = calendar.getTime();
        String mon = format.format(m);
        System.out.println("上个月最后一天："+mon);
        return mon;
	}
	
	public static void main(String args[]) throws ParseException {
		//System.out.println(addMonth(-1, DateUtil.toString(new Date(), "yyyy-MM"),"YYYY-MM"));
		getPreMonthLastDay();
	}

	/**
	 * 判断时间是否在时间段内
	 * 
	 * @param time
	 *            System.currentTimeMillis()
	 * @param strDateBegin
	 *            开始时间 00:00:00
	 * @param strDateEnd
	 *            结束时间 00:05:00
	 * @return
	 */
	public static boolean isInDate(long time, String strDateBegin,
			String strDateEnd) {
		Calendar calendar = Calendar.getInstance();

		// 处理开始时间
		String[] startTime = strDateBegin.split(":");
		calendar.set(Calendar.HOUR_OF_DAY, Integer.valueOf(startTime[0]));
		calendar.set(Calendar.MINUTE, Integer.valueOf(startTime[1]));
		calendar.set(Calendar.SECOND, Integer.valueOf(startTime[2]));
		calendar.set(Calendar.MILLISECOND, 0);
		long startTimeL = calendar.getTimeInMillis();

		// 处理结束时间
		String[] endTime = strDateEnd.split(":");
		calendar.set(Calendar.HOUR_OF_DAY, Integer.valueOf(endTime[0]));
		calendar.set(Calendar.MINUTE, Integer.valueOf(endTime[1]));
		calendar.set(Calendar.SECOND, Integer.valueOf(endTime[2]));
		calendar.set(Calendar.MILLISECOND, 0);
		long endTimeL = calendar.getTimeInMillis();

		return time >= startTimeL && time <= endTimeL;
	}
}
