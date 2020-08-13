package com.bluebird.components.redis;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import javax.annotation.Resource;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

/**
 * Redis操作工具类 
 * hash 都是以h开头的方法 
 * Set都是以s开头的方法 不含通用方法
 * List 都是以l开头的方法
 * @author wangwc
 * @version 1.0
 * @Date 2019-8-1
 */
@Component
public class RedisUtil {

	@Resource
	private RedisTemplate<String, Object> redisTemplate;
  //-----------------------------common------------------------------------------
	/**
	 * 指定缓存失效时间
	 * 
	 * @param key
	 * @param time
	 * 
	 * @return
	 */
	public boolean expire(String key, long time) {
		try {
			if (time > 0) {
				redisTemplate.expire(key, time, TimeUnit.SECONDS);
			}
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;

	}

	/**
	 * 根据Key获取指定时间
	 * 
	 * @param key
	 * @return
	 */
	public long getExpire(String key) {
		return redisTemplate.getExpire(key, TimeUnit.SECONDS);
	}

	/**
	 * 判断key是否存在
	 * 
	 * @param key
	 * @return
	 */
	public boolean hasKey(String key) {
		try {
			return redisTemplate.hasKey(key);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	/**
	 * 一个或者多个删除
	 * @param key
	 */
	public void delKey(String...key){
		if(key!=null && key.length>0){
			redisTemplate.delete(key[0]);
		}else{
			redisTemplate.delete(CollectionUtils.arrayToList(key));
		}
		
	}
  //-----------------------------string------------------------------------------
	/**
	 * 普通缓存获取
	 * @param key
	 * @return
	 */
	public Object getKey(String key){
		
		return key==null?null:redisTemplate.opsForValue().get(key);
	}
	/**
	 * 普通缓存的存入
	 * @param key
	 * @param value
	 * @return
	 */
	public boolean setKey(String key,Object value){
		try {
			redisTemplate.opsForValue().set(key, value);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	/**
	 * 普通缓存的存入并设置过期时间
	 * @param key
	 * @param value
	 * @param time
	 * @return
	 */
	public boolean setKey(String key, Object value, long time) {
		try {
			if (time > 0) {
				redisTemplate.opsForValue().set(key, value, time,TimeUnit.SECONDS);
			} else {
				setKey(key, value);
			}
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	/**
	* 递增
	* @param key 键
	* @param by 要增加几(大于0)
	* @return
	*/
	public long incr(String key, long delta) {
		if (delta < 0) {
			throw new RuntimeException("递增因子必须大于0");
		}
		return redisTemplate.opsForValue().increment(key, delta);
	}

	/**
	 * 递减
	 * 
	 * @param key
	 *            键
	 * @param by
	 *            要减少几(小于0)
	 * @return
	 */
	public long decr(String key, long delta) {
		if (delta < 0) {
			throw new RuntimeException("递减因子必须大于0");
		}
		return redisTemplate.opsForValue().increment(key, -delta);
	}
	//-----------------------------set-------------------------------------------
	
	/**
	* 根据key获取Set中的所有值
	* @param key 键
	* @return
	*/
	public Set<Object> sGet(String key) {
		try {
			return redisTemplate.opsForSet().members(key);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	/**
	* 根据value从一个set中查询,是否存在
	* @param key 键
	* @param value 值
	* @return true 存在 false不存在
	*/
	public boolean sHasKey(String key, Object value) {
		try {
			return redisTemplate.opsForSet().isMember(key, value);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;

	}

	/**
	 * 将数据放入set缓存
	 * @param key键
	 * @param values值 可以是多个
	 * @return 成功个数
	 */
	public long sSet(String key, Object... values) {
		try {
			return redisTemplate.opsForSet().add(key, values);
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
	//-----------------------------list-------------------------------------------
	
	/**
	 * 获取list缓存的内容
	 * @param key键
	 * @param start开始
	 * @param end结束 0 到 -1代表所有值
	 * @return
	 */
	public List<Object> lGet(String key, long start, long end) {
		try {
			return redisTemplate.opsForList().range(key, start, end);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	/**
	* 获取list缓存的长度
	* @param key 键
	* @return
	*/
	public long lGetListSize(String key) {
		try {
			return redisTemplate.opsForList().size(key);
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
	/**
	* 通过索引 获取list中的值
	* @param key 键
	* @param index 索引 index>=0时， 0 表头，1 第二个元素，依次类推；index<0时，-1，表尾，-2倒数第二个元素，依次类推
	* @return
	*/
	public Object lGetIndex(String key, long index) {
		try {
			return redisTemplate.opsForList().index(key, index);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/**
	* 将list放入缓存
	* @param key 键
	* @param value 值
	* @param time 时间(秒)
	* @return
	*/
	public boolean lList(String key, Object value) {
		try {
			redisTemplate.opsForList().rightPush(key, value);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	/**
	* 将list放入缓存并且设置过期时间
	* @param key 键
	* @param value 值
	* @param time 时间(秒)
	* @return
	*/
	public boolean lList(String key, Object value, long time) {
		try {
			redisTemplate.opsForList().rightPush(key, value);
			if (time > 0)
				expire(key, time);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	/**
	* 将list放入缓存
	* @param key 键
	* @param value 值
	* @param time 时间(秒)
	* @return
	*/
	public boolean lList(String key, List<Object> value) {
		try {
			redisTemplate.opsForList().rightPushAll(key, value);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	/**
	* 将list放入缓存并且设置过期时间
	* @param key 键
	* @param value 值
	* @param time 时间(秒)
	* @return
	*/
	public boolean lList(String key, List<Object> value, long time) {
		try {
			redisTemplate.opsForList().rightPushAll(key, value);
			if (time > 0)
			expire(key, time);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	/**
	* 根据索引修改list中的某条数据
	* @param key 键
	* @param index 索引
	* @param value 值
	* @return
	*/
	public boolean lUpdateIndex(String key, long index, Object value) {
		try {
			redisTemplate.opsForList().set(key, index, value);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	/**
	* 移除N个值为value
	* @param key 键
	* @param count 移除多少个
	* @param value 值
	* @return 移除的个数
	*/
	public long lRemove(String key, long count, Object value) {
		try {
			Long remove = redisTemplate.opsForList().remove(key, count, value);
			return remove;
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
}



