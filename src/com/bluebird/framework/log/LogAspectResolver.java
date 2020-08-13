package com.bluebird.framework.log;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.bluebird.components.common.SysUtil;
import com.bluebird.components.common.TimeHelper;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.framework.log.anotation.LogAspect;
import com.bluebird.module.system.model.SysOpLog;
import com.bluebird.module.system.model.SysUser;
import com.bluebird.module.system.service.SysOpLogService;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.util.StringUtil;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.annotation.Resource;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * 日志注解处理器
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2015-9-18 11:33
 */
@Aspect
@Component
public class LogAspectResolver {

    protected Log logger = LogFactory.getLog(getClass());

    @Resource
    private SysOpLogService sysOpLogService;

    /**
     * 标注该方法体为后置通知，当目标方法执行成功后执行该方法体
     *
     * @param joinPoint 切点
     * @param logAspect 注解器
     */
    @AfterReturning(value = "@annotation(logAspect)")//所有有LogAspect注解的进行拦截
    public void doAfterReturning(JoinPoint joinPoint, LogAspect logAspect) {
        try {
            SysOpLog opLog = getOpLog(joinPoint, logAspect);
            opLog.setSuccess(1);
            sysOpLogService.saveSysOpLog(opLog);
        } catch (Exception e) {
            logger.error("存储操作日志异常" + e.getMessage());
        }

    }

    /**
     * 标注该方法体为异常通知，当目标方法出现异常时，执行该方法体
     *
     * @param joinPoint 切点
     * @param logAspect 注解器
     * @param e         异常信息
     */
    @AfterThrowing(pointcut = "@annotation(logAspect)", throwing = "e")
    public void doAfterThrowing(JoinPoint joinPoint, LogAspect logAspect, Throwable e) {
        try {
            SysOpLog opLog = getOpLog(joinPoint, logAspect);
            opLog.setSuccess(0);
            opLog.setExceptionCode(e.getClass().getName());
            opLog.setExceptionDetail(e.getMessage());
            try {
                sysOpLogService.saveSysOpLog(opLog);
            } catch (Exception e1) {
                System.out.println(e1.getMessage());
                e1.printStackTrace();
            }
        } catch (Exception e1) {
            logger.error("存储异常操作日志异常" + e.getMessage());
        }
    }

    /**
     * 返回操作日志对象
     *
     * @param joinPoint 切入点
     * @param logAspect 拦截器
     * @return opLog
     */
    private SysOpLog getOpLog(JoinPoint joinPoint, LogAspect logAspect) {
        SysOpLog opLog = new SysOpLog();
        //获取目标方法签名
        String signature = joinPoint.getSignature().toString();
        //获取具体的方法名
        String methodName = signature.substring(signature.lastIndexOf(".") + 1, signature.indexOf("("));
        //获取当前操作人信息
        Subject currentUser = SecurityUtils.getSubject();
        Session session = currentUser.getSession();
        SysUser SU = (SysUser) session.getAttribute(SystemConstant.SYS_USER_SESSION_KEY);
        opLog.setOpId(SysUtil.GetUUID());
        opLog.setClassName(joinPoint.getTarget().getClass().getSimpleName());
        opLog.setMethodName(methodName);
        opLog.setDes(logAspect.desc());
        Object[] args = joinPoint.getArgs();
        Map<String,Object> paramMap=new HashMap<>();
        JSONObject jsonObject=new JSONObject();
        for (Object object : args) {
            if (object instanceof RedirectAttributes || object instanceof ServletRequest || object instanceof ServletResponse || object instanceof Model || object instanceof MultipartFile) {
                continue;
            }else{
                if(object instanceof Collection){
                    paramMap.put("Array",object);
                }else{
                    paramMap.put("param",object);
                }
            }
        }
        opLog.setParams(JSON.toJSONString(paramMap));
        opLog.setExceptionCode("");
        opLog.setExceptionDetail("");
        opLog.setSuId(SU.getSuId());
        opLog.setOperateTime(TimeHelper.getLocatlTime());
        return opLog;
    }

}
