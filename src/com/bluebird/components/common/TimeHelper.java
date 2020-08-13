package com.bluebird.components.common;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * 获得当前本地时间的类
 */
public class TimeHelper {

    /**
     * 描述:获得默认当前时间
     **/
    public static String getLocatlTime() {
        return getCurrentLocalTime("yyyy-MM-dd HH:mm:ss");
    }
    /**
     * 描述:获得默认当前时间年月日
     **/
    public static String getLocatl() {
        return getCurrentLocalTime("yyyyMMdd");
    }
    /**
     * 描述:获得四位随机数字
     **/
    public static int numberRandom(){
    	return (int)((Math.random()*9+1)*1000);
    }

    public static Integer getQuarter(){
        Calendar cal = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("MM");
        Integer month=Integer.parseInt(sdf.format(cal.getTime()));
        if(month>=1&&month<=3){
            return 1;
        }else if(month>=4&&month<=6){
            return 2;
        }else if(month>=7&&month<=9){
            return 3;
        }else{
            return 4;
        }
    }

    /**
     * 描述:获得当前本地时间
     *
     * @param format :格式化时间样式
     * @return 当前本地化时间
     */
    public static String getCurrentLocalTime(String format) {
        Date d = Calendar.getInstance().getTime();
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(d);
    }

    /**
     * 几天前或者几天后时间
     *
     * @return 返回字符串格式前几天或后几天前为负值 后为正值 yyyy-MM-dd
     */
    public static String getBefStringDate(Integer day) {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE, day);
        Date d = cal.getTime();
        SimpleDateFormat sp = new SimpleDateFormat("yyyy-MM-dd");
        return sp.format(d);
    }

    /**
     * 时间比较 date1是否大于date2
     *
     * @param date1 date1
     * @param date2 date2
     * @return boolean
     */
    public static boolean compareDate(String date1, String date2) {
        Long date_1 = Long.valueOf(date1.replace("-", "").replace(".", "").replace(" ", "").replace(":", ""));
        Long date_2 = Long.valueOf(date2.replace("-", "").replace(".", "").replace(" ", "").replace(":", ""));
        return date_1 > date_2;
    }

    /**
     * 获取当前时间戳
     * */
    public static String getTimeStamp(){
        return String.valueOf(System.currentTimeMillis() / 1000);
    }
        
    public static String getTimeAfter10(){
    	SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Calendar c = Calendar.getInstance();
        Date date = new Date();
        //System.out.println("系统当前时间      ："+df.format(date));
        c.setTime(date);//设置参数时间
        c.add(Calendar.SECOND,+6);//把日期往后增加SECOND 秒.整数往后推,负数往前移动
        date=c.getTime(); //这个时间就是日期往后推一天的结果
        String str = df.format(date);
        //System.out.println("系统前6秒之后时间："+str);
        return str;
    }
    
        
    
    
}
