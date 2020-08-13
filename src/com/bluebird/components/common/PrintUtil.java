package com.bluebird.components.common;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import sun.misc.BASE64Encoder;

import com.google.common.collect.Lists;
/**
 * 转换类
 *
 * @author wangwc
 * @version 1.0
 * @Date 2019-03-25
 */
public class PrintUtil {
    /** 
     * 将 List<JavaBean>对象转化为List<Map>
     * @author wyply115
     * @param type 要转化的类型 
     * @param map 
     * @return Object对象
     * @version 2016年3月20日 11:03:01
     */  
    public static <T> List<Map<String, Object>> objectsToMaps(List<T> objList) throws Exception {
        List<Map<String, Object>> list = Lists.newArrayList();
        if (objList != null && objList.size() > 0) {
            Map<String, Object> map = null;
            T bean = null;
            for (int i = 0,size = objList.size(); i < size; i++) {
                bean = objList.get(i);
                map = convertBean2Map(bean);
                list.add(map);
            }
        }
        return list;
    }
    //将javaBean转换成map
    public static Map<String,Object> convertBean2Map(Object bean) throws Exception {  
        Class type = bean.getClass();  
        Map<String,Object> returnMap = new HashMap<String,Object>();  
        BeanInfo beanInfo = Introspector.getBeanInfo(type);  
        PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();  
        for (int i = 0, n = propertyDescriptors.length; i <n ; i++) {  
            PropertyDescriptor descriptor = propertyDescriptors[i];  
            String propertyName = descriptor.getName();  
            if (!propertyName.equals("class")) {  
                Method readMethod = descriptor.getReadMethod();  
                Object result = readMethod.invoke(bean, new Object[0]);  
                if (result != null) {  
                    returnMap.put(propertyName, result);  
                } else {  
                    returnMap.put(propertyName, "");  
                }  
            }  
        }  
        return returnMap;  
    } 

    /**
	 * 功能说明: map转为对象
	 */
	public static Object mapToObject(Map<String, Object> map, Class<?> beanClass) {
		if (map == null)
			return null;

		Object obj = null;
		try {
			obj = beanClass.newInstance();
			BeanInfo beanInfo = Introspector.getBeanInfo(obj.getClass());
			PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();
			for (PropertyDescriptor property : propertyDescriptors) {
				Method setter = property.getWriteMethod();
				if (setter != null) {
					if (map.containsKey(property.getName())) {
						setter.invoke(obj, map.get(property.getName()));
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}
	
	
	/**
	 * 将图片转换为base64在前端进行展示
	 * @return
	 */
	public static String getBase64(HttpServletRequest request,String filePath){
		String rootPath = request.getSession().getServletContext().getRealPath("");
		String imgStr = "";
        String aString = "";
        try {
        File file = new File(rootPath+filePath);
        FileInputStream fis = new FileInputStream(file);
        byte[] buffer = new byte[(int) file.length()]; 
            int offset = 0; 
            int numRead = 0; 
            while (offset < buffer.length && (numRead = fis.read(buffer, offset, buffer.length - offset)) >= 0) {
                offset += numRead;
            } 
             
            if (offset != buffer.length) { 
                throw new IOException("Could not completely read file " + file.getName()); 
            } 
            fis.close(); 
            BASE64Encoder encoder = new BASE64Encoder();
            imgStr = encoder.encode(buffer);
            aString =  "data:image/png;base64,"+imgStr;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return aString;
   }
	/**
	 * 将图片转换为base64在前端进行展示(用于打印图片)
	 * @return
	 */
	public static String getImageBase64(HttpServletRequest request,String filePath){
		String rootPath = request.getSession().getServletContext().getRealPath("");
		String imgStr = "";
        String aString = "";
        try {
        File file = new File(rootPath+filePath);
        FileInputStream fis = new FileInputStream(file);
        byte[] buffer = new byte[(int) file.length()]; 
            int offset = 0; 
            int numRead = 0; 
            while (offset < buffer.length && (numRead = fis.read(buffer, offset, buffer.length - offset)) >= 0) {
                offset += numRead;
            } 
             
            if (offset != buffer.length) { 
                throw new IOException("Could not completely read file " + file.getName()); 
            } 
            fis.close(); 
            BASE64Encoder encoder = new BASE64Encoder();
            imgStr = encoder.encode(buffer);
            aString = imgStr;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return aString;
   }
	
}

