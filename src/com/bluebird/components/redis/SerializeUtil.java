package com.bluebird.components.redis;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

import org.apache.log4j.Logger;

/**
 * 序列化工具类
 *
 * @author wangwc
 * @version 1.0
 * @Date 2019-8-1
 */
public class SerializeUtil {
	
	private static Logger logger = Logger.getLogger(SerializeUtil.class);
	
	/**
	 * 对象序列化
	 * @param object
	 * @return
	 */
	public static byte[] serialize(Object object) {
		ObjectOutputStream oos = null;
		ByteArrayOutputStream baos = null;
		try {
			baos = new ByteArrayOutputStream();
			oos = new ObjectOutputStream(baos);
			oos.writeObject(object);
			byte[] bytes = baos.toByteArray();
			return bytes;

		} catch (Exception e) {
			logger.warn("序列化对象出现异常:", e);
		}

		return null;
	}
	/**
	 * 反序列化
	 * @param bytes
	 * @return
	 */
	public static Object deserialize(byte[] bytes) {

		ByteArrayInputStream bais = null;
		try {
			bais = new ByteArrayInputStream(bytes);
			ObjectInputStream ois = new ObjectInputStream(bais);
			return ois.readObject();
		} catch (Exception e) {
			logger.warn("反序列化对象出现异常:", e);
		}

		return bytes;
		
	}
}
