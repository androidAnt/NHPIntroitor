package com.bluebird.components.common;

import java.util.Random;
import java.util.UUID;


/**
 * 系统工具类
 * @author zhangbing
 */
public class SysUtil {
	
	public static String GetUUID(){
		 String s = UUID.randomUUID().toString(); 
	     //去掉“-”符号 
	     return s.substring(0,8)+s.substring(9,13)+s.substring(14,18)+s.substring(19,23)+s.substring(24); 
	}
	/**
	 * 生成6位随机数
	    * @Title: getSix
	    * @Description: TODO(这里用一句话描述这个方法的作用)
	    * @param @return    参数
	    * @return String    返回类型
	    * @throws
	 */
    public static String getSix(){  
        Random rad=new Random();  
        String result  = rad.nextInt(1000000) +"";  
 	       if(result.length()!=6){  
 	          return getSix();  
 	       }  
 	      return result;  
     }  
	public static void main(String[] args) {
		for (int i = 0; i < 100; i++) {
			System.out.println(getSix());
		}
		
	}
	/**
	 * 生成三位随机数
	 */
	public static String getRandomCode() {
		Random random = new Random();
		int a = (random.nextInt(900))+100;
		return String.valueOf(a);
	}
	
}

