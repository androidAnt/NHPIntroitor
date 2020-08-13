package com.bluebird.components.common;

import java.util.Random;

/**
 * 数字工具类
 * 
 * @author Jie.F
 * @version 1.0, 2017-7-11 09:59:55
 */
public class MathUtils {

	/**
	 * 生成6位随机且不重复的随机数
	 * 
	 * @return int
	 */
	public static int random6Math(){
        int[] array = {0,1,2,3,4,5,6,7,8,9};
        Random rand = new Random();
        for (int i = 10; i > 1; i--) {
            int index = rand.nextInt(i);
            int tmp = array[index];
            array[index] = array[i - 1];
            array[i - 1] = tmp;
        }
        int result = 0;
        for(int i = 0; i < 6; i++)
            result = result * 10 + array[i];
        return result;
    }
	
}
