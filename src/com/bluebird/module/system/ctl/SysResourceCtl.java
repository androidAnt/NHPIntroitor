package com.bluebird.module.system.ctl;

import com.alibaba.fastjson.JSON;
import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.model.SysResource;
import com.bluebird.module.system.service.SysResourceService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * 资源管理Ctl
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-3-15 9:41
 * @extends BaseCtl
 */
@Controller
@RequestMapping("/system/res")
public class SysResourceCtl extends BaseCtl{

    @Resource
    private SysResourceService sysResourceService;

    /**
     * 跳转到资源管理首页
     *
     * @param model model
     * @return String
     */
    @RequiresPermissions("system_res")
    @RequestMapping(value = "")
    public String index(ModelMap model) {
        try {
            model.put("list", sysResourceService.getResByPId("0"));
        } catch (Exception e) {
            logger.error("查找资源异常："+e.getMessage());
            Map<String, Object> map = new HashMap<>();
            map.put("status", SystemConstant.RETURN_STATUS_FAIL);
            map.put("msg", SystemConstant.RETURN_MSG_ERROR);
            model.put("msg", JSON.toJSONString(map));
        }
        return "/system/res/index";
    }

    /**
     * 根据父级主键获取资源
     *
     * @param pId 父级ID
     * @return Map
     */
    @RequiresPermissions("system_res")
    @ResponseBody
    @RequestMapping(value = "getResByPId")
    public Map<String,Object> getResByPId(@RequestParam(value = "pId", defaultValue = "0") String pId) {
        Map<String,Object> resultMap=new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("data",sysResourceService.getResByPId(pId));
        } catch (Exception e) {
            logger.error("根据父级主键获取资源异常："+e.getMessage());
        }
        return resultMap;
    }

    /**
     * 添加资源
     * @param sysResource 资源信息
     * */
    @RequiresPermissions("system_res")
    @ResponseBody
    @RequestMapping(value = "add")
    public Map<String,Object> add(SysResource sysResource){
        Map<String,Object> resultMap=new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            SysResource res=sysResourceService.saveRes(sysResource);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "添加成功");
            resultMap.put("res", res);
        } catch (Exception e) {
            logger.error("添加资源异常："+e.getMessage());
            if(e.getMessage().length()<20){
                resultMap.put("msg", e.getMessage());
            }
        }
        return  resultMap;
    }

    /**
     * 删除资源
     *
     * */
    @RequiresPermissions("system_res_del")
    @ResponseBody
    @RequestMapping(value = "del")
    public Map<String,Object> del(String resId){
        Map<String,Object> resultMap=new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysResourceService.delResByResId(resId);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("msg", "删除成功");
        } catch (Exception e) {
            logger.error("删除资源异常："+e.getMessage());
            if(e.getMessage().length()<20){
                resultMap.put("msg", e.getMessage());
            }
        }
        return resultMap;
    }

    /**
     * 修改资源
     *
     * @param res 资源信息
     * @return String
     */
    @RequiresPermissions("system_res_update")
    @ResponseBody
    @RequestMapping(value = "update")
    public Map<String,Object> updateRes(SysResource res) {
        Map<String,Object> resultMap=new HashMap<>();
        resultMap.put("status", SystemConstant.RETURN_STATUS_FAIL);
        resultMap.put("msg", SystemConstant.RETURN_MSG_ERROR);
        try {
            sysResourceService.updateRes(res);
            resultMap.put("status", SystemConstant.RETURN_STATUS_SUCCESS);
            resultMap.put("res", res);
            resultMap.put("msg", "修改成功");
        } catch (Exception e) {
            logger.error("修改资源异常："+e.getMessage());
            if(e.getMessage().length()<20){
                resultMap.put("msg", e.getMessage());
            }
        }
        return resultMap;
    }
}
