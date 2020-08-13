package com.bluebird.components.common;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;

/**
 * 数字工具类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016/7/6 11:15
 */
public class NumberUtil {

    /**
     * 将Double四舍五入保留两位小数
     */
    public static Double double45(String number) {
        BigDecimal bigDecimal = new BigDecimal(number);
        return bigDecimal.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
    }

    /**
     * 将Double保留两位小数 不进行四舍五入
     */
    public static Double toDouble(double number) {
        DecimalFormat formater = new DecimalFormat();
        formater.setMaximumFractionDigits(2);
        formater.setGroupingSize(0);
        formater.setRoundingMode(RoundingMode.FLOOR);
        return Double.valueOf(formater.format(number));
    }
}
