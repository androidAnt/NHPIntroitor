package com.bluebird.module.admin.ctl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.Servlets;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.admin.model.AdvertPosition;
import com.bluebird.module.admin.service.AdvertPositionService;

/**
 * 广告位置管理Controller
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2015-12-4 11:18
 * @extends BaseCtl
 */
@Controller
@RequestMapping("admin/advert/position")
public class AdvertPositionCtl extends BaseCtl {

    @Resource
    private AdvertPositionService advertPositionService;

    /**
     * 根据条件查询广告位置结果集
     *
     * @param sort 排序
     * @param model    ModelMap
     * @param request  request
     * @return String
     */
    @RequiresPermissions("admin_advert_position")
    @RequestMapping(value = "")
    public String toIndex(@RequestParam(value = "sort", defaultValue = "a.op_date DESC") String sort,ModelMap model, HttpServletRequest request) {
        try {
            Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
            searchParams.put("sort", sort);
            model.put("searchParams", Servlets.encodeParameterStringWithPrefix(searchParams, "search_"));            
            model.put("list", advertPositionService.getListByCondition(searchParams));
            AdvertPosition position = new AdvertPosition();
            BeanUtils.populate(position, searchParams);
            model.put("position", position);
            model.put("sort", sort);
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙,请稍后再试");
            model.put("msg", JSON.toJSONString(map));
        }
        return "admin/advert/position/index";
    }

    /**
     * 添加广告位置
     */
    @RequiresPermissions("admin_advert_position_save")
    @RequestMapping(value = "save")
    public String save(AdvertPosition position, RedirectAttributes redirectAttributes) {
        try {
            position.setOpUId(getSysUser().getSuId());
            redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(advertPositionService.save(position)));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙请稍后再试");
            redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(map));
        }
        return "redirect:/admin/advert/position";
    }

    /**
     * 修改广告位置
     */
    @RequiresPermissions("admin_advert_position_edit")
    @RequestMapping(value = "edit")
    public String edit(AdvertPosition position, RedirectAttributes redirectAttributes) {
        try {
            position.setOpUId(getSysUser().getSuId());
            redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(advertPositionService.edit(position)));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙请稍后再试");
            redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(map));
        }
        return "redirect:/admin/advert/position";
    }

    /**
     * 修改广告状态(显示隐藏)
     */
    @RequiresPermissions("admin_advert_position_edit")
    @RequestMapping(value = "editState/{apId}/")
    public String editState(@PathVariable String apId,String state, RedirectAttributes redirectAttributes) {
        try {
            AdvertPosition position=new AdvertPosition();
            position.setApId(apId);
            position.setState(state);
            redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(advertPositionService.editState(position)));
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", "系统繁忙请稍后再试");
            redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(map));
        }
        return "redirect:/admin/advert/position";
    }
}
