/**
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 */
package com.bluebird.components.common;

import org.springframework.util.Assert;

import javax.servlet.ServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;


/**
 * Http与Servlet工具类.
 * 
 */
public class Servlets {

	/**
	 * 取得带相同前缀的Request Parameters, copy from spring WebUtils.
	 * 
	 * 返回的结果的Parameter名已去除前缀.
	 */
	public static Map<String, Object> getParametersStartingWith(ServletRequest request, String prefix) {
		// 断言  判定request不为空
		Assert.notNull(request, "Request must not be null");
		// 获取通过form表单请求的所有带name属性的表单对象的值，返回Enumeration枚举
		Enumeration<?> paramNames = request.getParameterNames();
		// 实例化map集合
		Map<String, Object> params = new TreeMap<>();
		if (prefix == null) {
			prefix = "";
		}
		// 判断是否包含多个元素
		while (paramNames != null && paramNames.hasMoreElements()) {
			// 返回一个参数   和迭代器一样
			String paramName = (String) paramNames.nextElement();
			// 判断字符串开头是否和预想的一致
			if ("".equals(prefix) || paramName.startsWith(prefix)) {
				// 从第几个字符开始截取
				String unprefixed = paramName.substring(prefix.length());
				// 获取name名称一致的值，但会一个数组
				String[] values = request.getParameterValues(paramName);
				if (values != null && values.length != 0) {
					if (values.length > 1) {
                        params.put(unprefixed, values);
                    } else {
                        if(!"".equals(values[0])){
                            params.put(unprefixed, values[0].trim());
                        }
                    }
				}
			}
		}
		return params;
	}

	/**
	 * 组合Parameters生成Query String的Parameter部分, 并在paramter name上加上prefix.
	 * 
	 * @see #getParametersStartingWith
	 */
	public static String encodeParameterStringWithPrefix(Map<String, Object> params, String prefix) {
		if (params == null || params.size() == 0) {
			return "";
		}
		if (prefix == null) {
			prefix = "";
		}
		// 可变长度
		StringBuilder queryStringBuilder = new StringBuilder();
		try {
			Iterator<Entry<String, Object>> it = params.entrySet().iterator();
			while (it.hasNext()) {
				Entry<String, Object> entry = it.next();
				if(entry.getValue()==null){
					continue;
				}
				queryStringBuilder.append(prefix).append(entry.getKey()).append('=').append(java.net.URLEncoder.encode(entry.getValue().toString(),"utf-8"));
				if (it.hasNext()) {
					queryStringBuilder.append('&');
				}
			}
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		return queryStringBuilder.toString();
	}

}
