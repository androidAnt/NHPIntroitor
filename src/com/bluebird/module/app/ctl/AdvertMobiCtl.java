package com.bluebird.module.app.ctl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSON;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.service.AdvertService;

/**
 * 获取轮播图接口
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-6-13 10:09
 */
@RestController
@RequestMapping("/mobi/advert")
public class AdvertMobiCtl extends BaseCtl {

    @Resource
    private AdvertService advertService;

    /**
     * 根据位置类型获取轮播图
     *
     * @param type 类型 1首页轮播图 2启动页广告
     * @return List
     */
   
	@RequestMapping(value = "adverting", method = { RequestMethod.POST })
	@ResponseBody
    public String adverting(Integer type, String city, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        try {
            String apId;
            switch (type) {
                case 1://首页
                    apId = SystemConstant.APP_INDEX_PIC_POSITION;
                    break;
                case 2://启动页广告
                    apId = SystemConstant.APP_Start_PIC_POSITION;
                    break;
                default:
                    apId = SystemConstant.APP_INDEX_PIC_POSITION;
                    break;
            }
            resultMap.put("data", advertService.getAppAdvertList(apId, city, getServerPath(request)));
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
        } catch (Exception e) {
            resultMap.put("msg", "系统繁忙,请稍后再试");
            logger.error("根据位置类型获取轮播图异常：" + e.getMessage());
        }
        return JSON.toJSONString(resultMap);
    }

    /**
     * 查看普通广告详情
     *
     * @param aId 广告主键
     * @return map
     */
    @RequestMapping(value = "details/{aId}", method = RequestMethod.POST)
    public ModelAndView details(@PathVariable String aId) {
        ModelAndView mv = new ModelAndView("app/advert");
        try {
            Map<String, Object> paramMap = new HashMap<>();
            paramMap.put("aId", aId);
            mv.addObject("advert",advertService.getByCondition(paramMap));
        } catch (Exception e) {
            logger.error("查看普通广告详情异常：" + e.getMessage());
        }
        return mv;
    }
}
