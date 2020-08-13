package com.bluebird.module.system.service.impl;
import com.bluebird.components.common.PinyinUtil;
import com.bluebird.framework.base.impl.BaseServiceImpl;
import com.bluebird.framework.cache.Cache;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.service.SysRegionService;
import com.bluebird.module.system.vo.RegionAppVo;
import com.bluebird.module.system.vo.RegionVo;
import com.google.common.collect.Table;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import java.util.*;

/**
 * 省市县管理service接口实现类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-6-2 14:03
 */
@Service
public class SysRegionServiceImpl extends BaseServiceImpl implements SysRegionService {

    @Resource
    public Cache cache;

    /**
     * 获取用于缓存的集合
     *
     * @return list
     * @throws Exception
     */
    @Override
    public List<RegionVo> getCacheList() throws Exception {
        List<RegionVo> list=dbManage.selectListByCondition(null);
        return dbManage.selectListByCondition(null);
    }

    /**
     * 从缓存中根据上级主键获取下级集合
     *
     * @param pId 上级主键
     * @return list
     * @throws Exception \
     */
    @Override
    public List<RegionVo> getCacheList(Integer pId) throws Exception {
        Table cacheTable = (Table)cache.get(SystemConstant.SYS_REGION_CACHEKEY);
        if(null!=cacheTable&&cacheTable.size()>0){
            List<RegionVo> list=new ArrayList<>();
            Collection collection=cacheTable.column(pId+"").values();
            RegionVo regionVo;
            for (Iterator<RegionVo> iterator = collection.iterator(); iterator.hasNext();) {
                regionVo=iterator.next();
                list.add(regionVo);
            }
            return list;
        }
        return null;
    }
    
    /**
     * 获得经过拼音排序后的城市
     * 
     * @return map
     * @throws Exception
     */
    @Override
    public Map<String, Object> getCityList() throws Exception {
        Map<String, Object> resultMap=new HashMap<>();
        List<RegionVo> cityArrayList= new ArrayList<>();
        
        List<RegionVo> pList=getCacheList(0);//获取省级结果集
        List<RegionVo> cityList;
        RegionAppVo provinceAppVo = null;
        
        for(RegionVo province:pList){
            provinceAppVo=new RegionAppVo();
            
            cityList=getCacheList(province.getSrId());
            if(province.getType()==1){
               if(province.getName().equals("北京市")||province.getName().equals("上海市")||province.getName().equals("天津市")||province.getName().equals("重庆市")){
                   String pinyin = PinyinUtil.getFirstSpell(province.getName());
                   if(null != pinyin && !"".equals(pinyin)){
                       String p = pinyin.substring(0, 1);
                       province.setPingyinFast(p);
                   }
                   cityArrayList.add(province);
               }
            }else{
                for(RegionVo city:cityList){
                	String pinyin = PinyinUtil.getFirstSpell(city.getName());
                	if(null != pinyin && !"".equals(pinyin)){
                		String p = pinyin.substring(0, 1); 		
                		city.setPingyinFast(p);
                	}
                	cityArrayList.add(city);
                }
            }
            
        }
        resultMap.put("cityList",cityArrayList);
        return resultMap;
    }

    

    /**
     * app端获取省市县
     *
     * @return map
     * @throws Exception
     */
    @Override
    public Map<String, Object> getAppCityCacheList() throws Exception {
        Map<String, Object> resultMap=new HashMap<>();
        List<RegionVo> pList=getCacheList(0);//获取省级结果集
        Collections.sort(pList, new Comparator<RegionVo>() {
            public int compare(RegionVo arg0, RegionVo arg1) {
                return arg0.getSrId().compareTo(arg1.getSrId());
            }
        });
        List<RegionVo> cityList;
        List<RegionVo> countyList;
        RegionAppVo provinceAppVo;
        RegionAppVo cityAppVo;
        RegionAppVo countyAppVo;
        List<RegionAppVo> provinceAppList=new ArrayList<>();
        List<RegionAppVo> cityAppList=new ArrayList<>();
        List<RegionAppVo> countyAppList=new ArrayList<>();
        for(RegionVo province:pList){
            provinceAppVo=new RegionAppVo();
            provinceAppVo.setSrId(province.getSrId());
            provinceAppVo.setName(province.getName());
            provinceAppVo.setLng(province.getLng());
            provinceAppVo.setLat(province.getLat());
            cityList=getCacheList(province.getSrId());
            if(province.getType()==1){
                for(RegionVo city:cityList){
                    cityAppVo=new RegionAppVo();
                    cityAppVo.setSrId(city.getSrId());
                    cityAppVo.setName(city.getName());
                    cityAppVo.setLng(city.getLng());
                    cityAppVo.setLat(city.getLat());
                    countyList=getCacheList(city.getSrId());
                    for(RegionVo county:countyList){
                        countyAppVo=new RegionAppVo();
                        countyAppVo.setSrId(county.getSrId());
                        countyAppVo.setName(county.getName());
                        countyAppVo.setLng(county.getLng());
                        countyAppVo.setLat(county.getLat());
                        cityAppList.add(countyAppVo);
                    }
                }
            }else{
                for(RegionVo city:cityList){
                    cityAppVo=new RegionAppVo();
                    cityAppVo.setSrId(city.getSrId());
                    cityAppVo.setName(city.getName());
                    cityAppVo.setLng(city.getLng());
                    cityAppVo.setLat(city.getLat());
                    cityAppList.add(cityAppVo);
                }
            }
            Collections.sort(cityAppList, new Comparator<RegionAppVo>() {
                public int compare(RegionAppVo arg0, RegionAppVo arg1) {
                    return arg0.getSrId().compareTo(arg1.getSrId());
                }
            });
            provinceAppVo.setCity(cityAppList);
            cityAppList=new ArrayList<>();
            provinceAppList.add(provinceAppVo);
        }
        Collections.sort(provinceAppList, new Comparator<RegionAppVo>() {
            public int compare(RegionAppVo arg0, RegionAppVo arg1) {
                return arg0.getSrId().compareTo(arg1.getSrId());
            }
        });
        resultMap.put("province",provinceAppList);
        return resultMap;
    }

    /**
     * app端获取省市县
     *
     * @return map
     * @throws Exception
     */
    @Override
    public Map<String, Object> getAppCountyCacheList() throws Exception {
        Map<String, Object> resultMap=new HashMap<>();
        List<RegionVo> pList=getCacheList(0);//获取省级结果集
        Collections.sort(pList, new Comparator<RegionVo>() {
            public int compare(RegionVo arg0, RegionVo arg1) {
                return arg0.getSrId().compareTo(arg1.getSrId());
            }
        });
        List<RegionVo> cityList;
        List<RegionVo> countyList;
        RegionAppVo provinceAppVo;
        RegionAppVo cityAppVo;
        RegionAppVo countyAppVo;
        List<RegionAppVo> provinceAppList=new ArrayList<>();
        List<RegionAppVo> cityAppList=new ArrayList<>();
        List<RegionAppVo> countyAppList=new ArrayList<>();
        for(RegionVo province:pList){
            provinceAppVo=new RegionAppVo();
            provinceAppVo.setSrId(province.getSrId());
            provinceAppVo.setName(province.getName());
            provinceAppVo.setLng(province.getLng());
            provinceAppVo.setLat(province.getLat());
            cityList=getCacheList(province.getSrId());
            for(RegionVo city:cityList){
                cityAppVo=new RegionAppVo();
                cityAppVo.setSrId(city.getSrId());
                cityAppVo.setName(city.getName());
                cityAppVo.setLng(city.getLng());
                cityAppVo.setLat(city.getLat());
                countyList=getCacheList(city.getSrId());
                for(RegionVo county:countyList){
                    countyAppVo=new RegionAppVo();
                    countyAppVo.setSrId(county.getSrId());
                    countyAppVo.setName(county.getName());
                    countyAppVo.setLng(county.getLng());
                    countyAppVo.setLat(county.getLat());
                    countyAppList.add(countyAppVo);
                }
                Collections.sort(countyAppList, new Comparator<RegionAppVo>() {
                    public int compare(RegionAppVo arg0, RegionAppVo arg1) {
                        return arg0.getSrId().compareTo(arg1.getSrId());
                    }
                });
                cityAppVo.setCounty(countyAppList);
                countyAppList=new ArrayList<>();
                cityAppList.add(cityAppVo);
            }
            Collections.sort(cityAppList, new Comparator<RegionAppVo>() {
                public int compare(RegionAppVo arg0, RegionAppVo arg1) {
                    return arg0.getSrId().compareTo(arg1.getSrId());
                }
            });
            provinceAppVo.setCity(cityAppList);
            cityAppList=new ArrayList<>();
            provinceAppList.add(provinceAppVo);
        }
        Collections.sort(provinceAppList, new Comparator<RegionAppVo>() {
            public int compare(RegionAppVo arg0, RegionAppVo arg1) {
                return arg0.getSrId().compareTo(arg1.getSrId());
            }
        });
        resultMap.put("province",provinceAppList);
        return resultMap;
    }
}
