package com.bluebird.module.system.ctl;

import com.alibaba.fastjson.JSON;
import com.bluebird.components.common.StringUtils;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.base.Page;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.model.SysDic;
import com.bluebird.module.system.service.SysDicService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * 数据字典Ctl
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-4-7 13:53
 */
@Controller
@RequestMapping("system/dic")
public class SysDicCtl extends BaseCtl {

    @Resource
    private SysDicService sysDicService;

    /**
     * 根据条件查询数据字典列表分页
     *
     * @param tabs     当前标签页标识
     * @param pageNO   页数
     * @param pageSize 每页条数
     * @param sort     排序
     * @param dicType  字典类型
     * @param model    存储
     * @return String
     */
    @RequiresPermissions("system_dic")
    @RequestMapping(value = "{tabs}")
    public String toIndex(@PathVariable String tabs,
                          @RequestParam(value = "pageNO", defaultValue = "0") Integer pageNO,
                          @RequestParam(value = "pageSize", defaultValue = "15") Integer pageSize,
                          @RequestParam(value = "sort", defaultValue = "a.create_date DESC") String sort,
                          String dicType, String msg, ModelMap model) {
        try {
            if (StringUtils.isNotEmpty(msg)) {
                model.put("msg", msg);
            }
            model.put("tabs", tabs);
            if (tabs.equals("type")) {
                model.put("typeList", sysDicService.getDicList(null));
            } else {
                model.put("cacheTypeList", sysDicService.getCacheDicType());
                Map<String, Object> paramMap = new HashMap<>();
                if (StringUtils.isNotEmpty(dicType)) {
                    paramMap.put("dicType", dicType);
                    model.put("dicType", dicType);
                }
                paramMap.put("sort", sort);
                model.put("sort", sort);
                model.put("page", sysDicService.getListByCondition(paramMap, new Page(pageNO, pageSize, 0, sort, null)));
            }
        } catch (Exception e) {
            logger.error("根据条件查询数据字典列表分页异常:" + e.getMessage());
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
        }
        return "/system/dic/index";
    }

    /**
     * 添加字典类型
     *
     * @return String
     */
    @RequiresPermissions("system_dicType_add")
    @RequestMapping(value = "saveDicType")
    public String saveDicType(SysDic sysDic, RedirectAttributes redirectAttributes) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysDicService.saveDicType(sysDic);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "添加字典类型成功");
        } catch (Exception e) {
            logger.error("添加字典类型异常:" + e.getMessage());
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
        }
        redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(resultMap));
        return "redirect:/system/dic/type/";
    }

    /**
     * 修改字典类型
     *
     * @return String
     */
    @RequiresPermissions("system_dicType_edit")
    @RequestMapping(value = "editDicType")
    public String editDicType(SysDic sysDic, RedirectAttributes redirectAttributes) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysDicService.updateDicType(sysDic);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "修改字典类型成功");
        } catch (Exception e) {
            logger.error("修改字典类型异常:" + e.getMessage());
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
        }
        redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(resultMap));
        return "redirect:/system/dic/type/";
    }

    /**
     * 修改字典类型
     *
     * @return String
     */
    @RequiresPermissions("system_dicType_edit")
    @RequestMapping(value = "updateDicTypeState")
    public String updateDicTypeState(SysDic sysDic, RedirectAttributes redirectAttributes) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysDic.setRemark(null);
            sysDicService.updateDicTypeState(sysDic);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "状态更新成功");
        } catch (Exception e) {
            logger.error("修改字典类型异常:" + e.getMessage());
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
        }
        redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(resultMap));
        return "redirect:/system/dic/type/";
    }

    /**
     * 删除字典类型
     *
     * @return String
     */
    @RequiresPermissions("system_dicType_del")
    @RequestMapping(value = "delDicType")
    public String delDicType(String dicId, RedirectAttributes redirectAttributes) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysDicService.deleteDicType(dicId);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "删除字典类型成功");
        } catch (Exception e) {
            logger.error("删除字典类型异常:" + e.getMessage());
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
        }
        redirectAttributes.addFlashAttribute("msg", JSON.toJSONString(resultMap));
        return "redirect:/system/dic/type/";
    }

    /**
     * 添加字典
     *
     * @param sysDic 字典对象
     * @param model  存储
     * @return String
     */
    @RequiresPermissions("system_dic_add")
    @RequestMapping(value = "saveDic")
    public String saveDic(SysDic sysDic, ModelMap model) {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysDicService.saveDic(sysDic);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "添加字典成功");
        } catch (Exception e) {
            logger.error("添加字典异常:" + e.getMessage());
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
        }
        model.put("paramMsg", JSON.toJSONString(resultMap).replace("\"", "'"));
        resultMap.clear();
        resultMap.put("dicType", sysDic.getDicType());
        model.put("paramMap", resultMap);
        return "/system/dic/redirect";
    }

    /**
     * 修改字典
     *
     * @param sysDic  字典对象
     * @param backUrl 回掉地址参数
     * @param model   存储
     * @return String
     */
    @RequiresPermissions("system_dic_edit")
    @RequestMapping(value = "editDic")
    public String editDic(SysDic sysDic, String backUrl, ModelMap model) {
        Map<String, Object> resultMap = new HashMap<>();
        model.put("paramMap", paramUnits(backUrl));
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysDicService.updateDic(sysDic);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "修改字典成功");
        } catch (Exception e) {
            logger.error("修改字典异常:" + e.getMessage());
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
        }
        model.put("paramMsg", JSON.toJSONString(resultMap).replace("\"", "'"));
        return "/system/dic/redirect";
    }

    /**
     * 修改字典状态
     *
     * @param sysDic  字典对象
     * @param backUrl 回掉地址参数
     * @param model   存储
     * @return String
     */
    @RequiresPermissions("system_dic_edit")
    @RequestMapping(value = "updateDicState")
    public String updateDicState(SysDic sysDic, String backUrl, ModelMap model) {
        Map<String, Object> resultMap = new HashMap<>();
        model.put("paramMap", paramUnits(backUrl));
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysDicService.updateDicState(sysDic);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "状态更新成功");
        } catch (Exception e) {
            logger.error("状态更新异常:" + e.getMessage());
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
        }
        model.put("paramMsg", JSON.toJSONString(resultMap).replace("\"", "'"));
        return "/system/dic/redirect";
    }

    /**
     * 删除字典
     *
     * @return String
     */
    @RequiresPermissions("system_dic_del")
    @RequestMapping(value = "delDic")
    public String delDic(String dicId, String backUrl, ModelMap model) {
        Map<String, Object> resultMap = new HashMap<>();
        model.put("paramMap", paramUnits(backUrl));
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysDicService.deleteDic(dicId);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "删除字典成功");
        } catch (Exception e) {
            logger.error("删除字典异常:" + e.getMessage());
            if (e.getMessage().length() < 20) {
                resultMap.put("msg", e.getMessage());
            }
        }
        model.put("paramMsg", JSON.toJSONString(resultMap).replace("\"", "'"));
        return "/system/dic/redirect";
    }
}
