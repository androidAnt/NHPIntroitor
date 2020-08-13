package com.bluebird.module.admin.ctl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.Servlets;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.Advert;
import com.bluebird.module.admin.service.AdvertPositionService;
import com.bluebird.module.admin.service.AdvertService;

/**
 * 广告管理Controller
 * 
 * @author zhangyong
 * @version 1.0
 * @Date 2015-12-9 16:19
 */
@Controller
@RequestMapping("admin/advert")
public class AdvertCtl extends BaseCtl {

    @Resource
    private AdvertService advertService;

    @Resource
    private AdvertPositionService advertPositionService;

    /**
     * 查询广告分页
     *
     * @param pageNO   页数
     * @param pageSize 每页数量
     * @param sort 排序字符串
     * @param model
     * @return String
     */
    @RequiresPermissions("admin_advert")
    @RequestMapping(value = "")
    public String toIndex(@RequestParam(value = "pageNO", defaultValue = "0") Integer pageNO,
                          @RequestParam(value = "pageSize", defaultValue = "15") Integer pageSize,
                          @RequestParam(value = "sort", defaultValue = "a.op_date DESC") String sort,
                          String msg, ModelMap model, HttpServletRequest request) {
        try {
            if (StringUtils.isNotEmpty(msg)) {
                model.put("msg", msg);
            }
            Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
            searchParams.put("sort", sort);
            model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));
            Map<String,Object> posistionMap=new HashMap<String, Object>();
            posistionMap.put("state","1");
            model.put("positionList", advertPositionService.getListByCondition(posistionMap));
            model.put("page", advertService.getListByCondition(searchParams, new Page(pageNO, pageSize, 0, sort, null)));
            //将查询的map转换成对象
            Advert advert = new Advert();
            BeanUtils.populate(advert, searchParams);
            model.put("advert", advert);
        } catch (Exception e) {
            logger.error("查询广告分页异常:" + e.getMessage());
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            model.put("msg", JSON.toJSONString(map));
        }
        return "/admin/advert/index";
    }

    /**
     * 查看广告详情
     *
     * @param aId
     * @param backUrl
     * @param model
     * @return String
     */
    @RequiresPermissions("admin_advert_details")
    @RequestMapping(value = "details")
    public String details(String aId, String backUrl, ModelMap model) {
        try {
            Map<String,Object> map=new HashMap<String, Object>();
            map.put("aId",aId);
            model.put("advert", advertService.getByCondition(map));
            model.put("paramMap", paramUnits(backUrl));
        } catch (Exception e) {
            logger.error("查看广告详情异常"+e.getMessage());
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            model.put("msg", JSON.toJSONString(map));
        }
        return "/admin/advert/details";
    }

    /**
     * 准备添加广告
     *
     * @param model
     * @return String
     */
    @RequiresPermissions("admin_advert_save")
    @RequestMapping(value = "toadd")
    public String toAdd(ModelMap model, RedirectAttributes redirectAttributes) {
        try {
            Map<String,Object> posistionMap=new HashMap<String, Object>();
            posistionMap.put("state","1");
            model.put("positionList", advertPositionService.getListByCondition(posistionMap));
        } catch (Exception e) {
            logger.error("准备添加广告异常:" + e.getMessage());
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(map));
            return "redirect:/admin/advert";
        }
        return "admin/advert/save";
    }

    /**
     * 添加广告
     *
     * @param advert
     * @return String
     */
    @RequiresPermissions("admin_advert_save")
    @RequestMapping(value = "doadd")
    public String doAdd(Advert advert, RedirectAttributes redirectAttributes) {
        try {
            Map<String, Object> map = advertService.save(advert);
            redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(map));
            if (!map.get("status").toString().equals("0")) {
                return "redirect:/admin/advert";
            }
            redirectAttributes.addFlashAttribute("advert", advert);
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "包含非法数据");
            redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(map));
            redirectAttributes.addFlashAttribute("advert", advert);
        }
        
        
        
        return "redirect:/admin/advert/toadd";
    }

    /**
     * 准备修改广告
     *
     * @param aId
     * @param backUrl
     * @param model
     * @return String
     */
    @RequiresPermissions("admin_advert_edit")
    @RequestMapping(value = "toEdit")
    public String toEdit(String aId, String backUrl, ModelMap model) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("aId", aId);
        try {
            Advert advert = (Advert) advertService.getByCondition(map);
            if (null != advert) {
                Map<String,Object> posistionMap=new HashMap<String, Object>();
                posistionMap.put("state","1");
                model.put("positionList", advertPositionService.getListByCondition(posistionMap));
                model.put("paramMap", paramUnits(backUrl));
                model.put("backUrl", backUrl);
                model.put("advert", advert);
            } else {
                map.remove("aId");
                map.put("status", SystemConstant.RETURN_STATUS_FAIL);
                map.put("msg", "参数不合法");
                model.put("paramMsg", JSON.toJSONString(map).replace("\"", "'"));
                return "admin/advert/redirect";
            }
        } catch (Exception e) {
            e.printStackTrace();
            map.remove("aId");
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "传统繁忙繁忙,请稍后再试");
            model.put("paramMsg", JSON.toJSONString(map).replace("\"", "'"));
            return "admin/advert/redirect";
        }
        return "admin/advert/edit";
    }

    /**
     * 修改广告
     *
     * @param advert
     * @param backUrl
     * @param model
     * @return String
     */
    @RequiresPermissions("admin_advert_edit")
    @RequestMapping(value = "doEdit")
    public String doEdit(Advert advert, String backUrl, ModelMap model) {
        model.put("paramMap", paramUnits(backUrl));
        try {
            model.put("paramMsg", JSON.toJSONString(advertService.edit(advert)).replace("\"", "'"));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            model.put("paramMsg", JSON.toJSONString(map).replace("\"", "'"));
        }
        return "admin/advert/redirect";
    }

    /**
     * 更新广告状态
     *
     * @param aId
     * @param state
     * @param backUrl
     * @param model
     * @return String
     */
    @RequiresPermissions("admin_advert_edit")
    @RequestMapping("editState")
    public String editState(String aId, Integer state, String backUrl, ModelMap model) {
        model.put("paramMap", paramUnits(backUrl));
        try {
            Advert advert=new Advert();
            advert.setaId(aId);
            advert.setState(state);
            model.put("paramMsg", JSON.toJSONString(advertService.editState(advert)).replace("\"", "'"));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            model.put("paramMsg", JSON.toJSONString(map).replace("\"", "'"));
        }
        return "admin/advert/redirect";
    }

    /**
     * 删除广告
     *
     * @param aId
     * @param backUrl
     * @param model
     * @return String
     */
    @RequiresPermissions("admin_advert_delete")
    @RequestMapping("delete")
    public String delete(String aId, String backUrl, ModelMap model) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("status", SystemConstant.RETURN_STATUS_FAIL);
        model.put("paramMap", paramUnits(backUrl));
        try {
            map = advertService.delAdvertByaId(aId);
        } catch (Exception e) {
            map.put("msg", "系统繁忙,请稍后再试");
        }
        model.put("paramMsg", JSON.toJSONString(map).replace("\"", "'"));
        return "admin/advert/redirect";
    }
}
