package com.bluebird.components.common;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * 获得当前本地时间的类
 */
public class CalendarUtil {
	/**
	 * 把数字月份转成中文月份
	 * @author weic
	 * @time 2015年5月19日   上午11:47:47
	 * @param month
	 * @return
	 */
	public static String getChineseMonth(int month) {
		String[] chineseMonth = {"一","二","三","四","五","六","七","八","九","十","十一","十二"};
		return chineseMonth[month-1]+"月";
	}
	
	/**
	 * 格式化时间的方法
	 * @param Timestamp
	 * @return 今天/昨天/前天 15:00
	 * @author Ray 
	 * @时间 2011-08-29
	 */
	public static String getTime(Date time){
		if(time==null){
			return "";
		}
		
		StringBuilder timeStr = new StringBuilder();
		SimpleDateFormat ft = new SimpleDateFormat("yyyy/MM/dd");
		Date nowTime=new Date();
		Date oldTime=time;
		try {
			oldTime=ft.parse(ft.format(time));
			nowTime=ft.parse(ft.format(nowTime));
		} catch (ParseException e) {
			throw new RuntimeException(e);
		}
	    long diff = nowTime.getTime() - oldTime.getTime();
	    long days = diff / 1000 / 60 / 60 / 24;
	    String temp = time.toString().substring(11,16);
	    if(days==0L){
	    	timeStr.append("今天"+temp);
	    	
	    	return timeStr.toString();
	    }else if(days==1L){
	    	timeStr.append("昨天"+temp);
	    	
	    	return timeStr.toString();
	    }else if(days==2L){
	    	timeStr.append("前天"+temp);
	    	
	    	return timeStr.toString();
	    }else{
	    	String is00=time.toString().substring(5,6);
	    	String is01=time.toString().substring(8,9);
	    	if((!is00.equals("0"))&&(!is01.equals("0"))){
	    		timeStr.append(time.toString().substring(5,7)+"月"+time.toString().substring(8,10)+"日"+time.toString().substring(11,16));
	    		return timeStr.toString();
	    	}else if((!is00.equals("0"))&&(is01.equals("0"))){
	    		timeStr.append(time.toString().substring(5,7)+"月"+time.toString().substring(9,10)+"日"+time.toString().substring(11,16));
	    		
	    		return timeStr.toString();
	    	}else if((is00.equals("0"))&&(!is01.equals("0"))){
	    		timeStr.append(time.toString().substring(6,7)+"月"+time.toString().substring(8,10)+"日"+time.toString().substring(11,16));
	    		
	    		return timeStr.toString();
	    	}else{
	    		timeStr.append(time.toString().substring(6,7)+"月"+time.toString().substring(9,10)+"日"+time.toString().substring(11,16));
			
	    		return timeStr.toString();
	    	}	    
	    }	
	}

	/**
	 * 描述:获得当前本地时间
	 */
	public static Date getCurrentLocalTime() {
		
		return Calendar.getInstance().getTime();
	}
	
	/**
	 * 描述:获得当前本地时间
	 * 
	 * @param format:格式化时间样式
	 * @return 当前本地化时间
	 */
	public static String getCurrentLocalTime(String format) {
		// 月份范围为0－11
		Date d = Calendar.getInstance().getTime();
		// 24小时制
		SimpleDateFormat sdf = new SimpleDateFormat(format);

		return sdf.format(d).toString();
	}
	
	/**
	 * 描述:格式化日期方法
	 * **/
	public static String formatDate(long time){
		Date date = new Date(time);
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String timeStr = formatter.format(date);
		
		return timeStr;
	}
	
	/**
	 * 描述:格式化日期方法
	 * **/
	public static String formatDate(long time, String format){
		Date date = new Date(time);
		SimpleDateFormat formatter = new SimpleDateFormat(format);
		String timeStr = formatter.format(date);
		
		return timeStr;
	}
	
	/**
	 * 描述:格式化日期方法
	 * **/
	public static String formatDate(Date date) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String time = formatter.format(date);
		
		return time;
	}
	
	/**
	 * 描述:格式化日期方法
	 * **/
	public static String formatDate(Date date, String format) {
		SimpleDateFormat formatter = new SimpleDateFormat(format);
		String time = formatter.format(date);
		
		return time;
	}
	
	/**
	 * 描述:获得默认当前时间
	 * **/
	public static String getDefaultCurrentLocatlTime(){
		return  getCurrentLocalTime("yyyy-MM-dd HH:mm:ss");
	}
	
	/**
	 * 描述:字符串转日期方法
	 * @param	dateStr:日期字符串
	 * @return	Date:日期对象
	 * **/
	public static Date charConvertDate(String dateStr) {
		try{
			return charConvertDate("yyyy-MM-dd HH:mm:ss",dateStr);
		}catch(RuntimeException e){
			throw e;
		}catch(Exception e){
			throw new RuntimeException(e);
		}
	}
	
	/**
	 * 计算开始日期与当前日期相差的秒数
	 * @param startDate
	 * @return
	 */
	public static int calLastedTime(Date startDate) {
		  long a = new Date().getTime();
		  long b = startDate.getTime();
		  int c = (int)((a - b) / 1000);
		  return c;
	}
	
	/**   
     * 计算两个日期之间相差的分钟数  
     * @param smdate 较小的时间  
     * @param bdate  较大的时间  
     * @return 相差天数  
     * @throws ParseException   
     */  
	 public static int daysBetween(Date smdate,Date bdate)   
	    {     
	        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");   
	        try {
				smdate=sdf.parse(sdf.format(smdate));
				bdate=sdf.parse(sdf.format(bdate));   
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}   
	       
	        Calendar cal = Calendar.getInstance();   
	        cal.setTime(smdate);     
	        long time1 = cal.getTimeInMillis();                  
	        cal.setTime(bdate);     
	        long time2 = cal.getTimeInMillis();          
	        long between_minute=(time2-time1)/(1000*60);   
	             
	       return Integer.parseInt(String.valueOf(between_minute));            
	    }
	/**
	 * 描述:字符串转日期方法
	 * @param	format:日期格式
	 * @param	dateStr:日期字符串
	 * @return	Date:日期对象
	 * **/
	public static Date charConvertDate(String format,String dateStr) {
		try{
			DateFormat dateFormat = new SimpleDateFormat(format);        
			
			return dateFormat.parse(dateStr);
		}catch(ParseException e){
			throw new RuntimeException(e);
		}
	}
	
	
	/**
	 * 获取上传的图片的路径
	 * return string
	 * **/
	public static String getTimeFolder(String uid){
		try {
			String temp="/";
			StringBuilder floder=new StringBuilder();
	        floder.append(getSomeTime("year")+temp);
	        floder.append(getSomeTime("month")+temp);
	        floder.append(getSomeTime("date")+temp);
	        floder.append(uid);
			return floder.toString();
		} catch (Exception e) {
			return "";
		}
	}
	
	
	
	
	/**
	 * 描述:获取当前时间中的属性
	 * @param	要获取的属性
	 * **/
	@SuppressWarnings("deprecation")
	public static int getSomeTime(String con) {
		try{
			Date d = new Date();
			if(con.equals("year")){
				return d.getYear()+1900;
			}else if(con.equals("month")){
				return d.getMonth()+1;
			}else if(con.equals("date")){
				return d.getDate();
			}else if(con.equals("hour")){
				return d.getHours();
			}else if(con.equals("min")){
				return d.getMinutes();
			}else if(con.equals("second")){
				return d.getSeconds();
			}else{
				return 0;
			}
		}catch(Exception e){
			throw new RuntimeException(e);
		}
	}

	/** 
	 * 得到指定月的天数 
	 * */  
	public static int getMonthLastDay(int year, int month)  
	{  
	    Calendar a = Calendar.getInstance();  
	    a.set(Calendar.YEAR, year);  
	    a.set(Calendar.MONTH, month - 1);  
	    a.set(Calendar.DATE, 1);//把日期设置为当月第一天  
	    a.roll(Calendar.DATE, -1);//日期回滚一天，也就是最后一天  
	    int maxDate = a.get(Calendar.DATE);  
	    return maxDate;  
	}
	
	public static String getWeekString(Date date){
		
		Calendar c = Calendar.getInstance();  
		c.setTime(date);
		int dayForWeek = 0;  
		if(c.get(Calendar.DAY_OF_WEEK) == 1){  
		  
			dayForWeek = 7;
			
		}else{
			
			dayForWeek = c.get(Calendar.DAY_OF_WEEK) - 1;
			
		}
		String dayWeek = "";
		switch (dayForWeek) {
		case 1:
			dayWeek = "星期一";
			break;
		case 2:
			dayWeek = "星期二";
			break;
		case 3:
			dayWeek = "星期三";
			break;
		case 4:
			dayWeek = "星期四";
			break;
		case 5:
			dayWeek = "星期五";
			break;
		case 6:
			dayWeek = "星期六";
			break;
		case 7:
			dayWeek = "星期日";
			break;
		default:
			break;
		}
		return dayWeek;
		
	}
	
	/**
	 * 获取两个日期之间相差的天/小时/分钟/秒
	 * @param nowDate 当前时间
	 * @param pastDate 过去的时间
	 * @return
	 */
	public static String getTimeIntervalWithLong(Date nowDate,Date pastDate){
		
		long interval = nowDate.getTime()-pastDate.getTime();
		long day = interval/(24*60*60*1000);
		long hour = (interval/(60*60*1000)-day*24);
   	   	long min = ((interval/(60*1000))-day*24*60-hour*60);
   	   	long sencond = (interval/1000-day*24*60*60-hour*60*60-min*60);
   	   	StringBuilder timeStr = new StringBuilder();
   	   	if(day!=0){
   	   		timeStr.append(day).append("天");
   	   	}
   	   	if(hour!=0){
   	   		timeStr.append(hour).append("小时");
   	   	}
   	   	if(min!=0){
   	   		timeStr.append(min).append("分");
   	   	}
   	   	timeStr.append(sencond).append("秒");
   	   	
		return timeStr.toString();
	}
	
	/**
	 * 获取两个日期之间相差的天/小时/分钟/秒
	 * @param nowDate 当前时间
	 * @param pastDate 过去的时间
	 * @return
	 */
	public static String getTimeInterval(Date nowDate,Date pastDate){
		long interval = nowDate.getTime()-pastDate.getTime();
		long day = interval/(24*60*60*1000);
		long hour = (interval/(60*60*1000)-day*24);
   	   	long min = ((interval/(60*1000))-day*24*60-hour*60);
   	   	long sencond = (interval/1000-day*24*60*60-hour*60*60-min*60);
   	   	StringBuilder timeStr = new StringBuilder();
   	   	
   	   	if(day>0){
   	   		timeStr.append(day).append("天");
   	   		return timeStr.toString()+"前";
   	   	}
   	   	if(hour>0){
   	   		timeStr.append(hour).append("小时");
   	   		return timeStr.toString()+"前";
   	   	}
   	   	if(min>0){
   	   		timeStr.append(min).append("分钟");
   	   		return timeStr.toString()+"前";
   	   	}
   	    timeStr.append(sencond).append("秒");
		return timeStr.toString()+"前";
	}
	
	/**
	 * @param date1:第一个日期
	 * @param date2：第二个日期
	 * @param format：格式化日期类型
	 * @return int （0：date1=date2  1:date1>date2  -1:date1<date2）
	 */
	public static int compareDate(String date1,String date2,String format) {
        
        
        DateFormat df = new SimpleDateFormat(format);
        try {
            Date dt1 = df.parse(date1);
            Date dt2 = df.parse(date2);
            if (dt1.getTime() > dt2.getTime()) {
                return 1;
            } else if (dt1.getTime() < dt2.getTime()) {
                return -1;
            } else {
                return 0;
            }
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return 0;
    }
	/**
	 * 得到前一天时间
	 * @param format：格式化日期类型
	 * @return
	 */
	public static String beforeDate(Date date , String format){
		//得到前一天时间
		Calendar   c   =   Calendar.getInstance();  
		c.setTime(date);
		c.add(Calendar.DAY_OF_MONTH, -1);  
		SimpleDateFormat formatter = new SimpleDateFormat(format);  
		String mDateTime=formatter.format(c.getTime());  
		String strStart=mDateTime.substring(0, 16);
		return strStart;
	}
	
	
}

