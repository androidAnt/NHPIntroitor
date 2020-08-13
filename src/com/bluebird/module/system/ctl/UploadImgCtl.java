package com.bluebird.module.system.ctl;

import com.bluebird.framework.base.BaseCtl;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.service.UploadImgService;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.time.DateFormatUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.HashMap;
import java.util.Map;

/**
 * 图片上传Ctl
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-03-17 10:54
 * @extends BaseCtl
 */
@Controller
@RequestMapping("/system/upload")
public class UploadImgCtl extends BaseCtl {

    @Resource
    private UploadImgService uploadImgService;

    /**
     * 上传裁剪图片
     *
     * @param imgUrl    图像的64位编码字符串
     * @param imgInitW  原图宽度
     * @param imgInitH  原图高度
     * @param imgW      缩放后宽度
     * @param imgH      缩放后高度
     * @param imgX1     x轴坐标
     * @param imgY1     y轴坐标
     * @param cropW     截取宽度
     * @param cropH     截取长度
     * @param fileType  文件类型(分类存储在硬盘)
     * @param oldPicUrl 历史图片地址
     * @return map
     */
    @RequestMapping(value = "croppic")
    @ResponseBody
    public Map<String, Object> cropPic(String imgUrl, String imgInitW, String imgInitH, String imgW, String imgH, String imgX1, String imgY1, String cropW, String cropH, String fileType, String oldPicUrl, HttpServletRequest request) {
        Map<String, Object> map = new HashMap<>();
        map.put("status", SystemConstant.RETURN_STATUS_FAIL);
        try {
            if (!StringUtils.isEmpty(imgUrl) && imgUrl.indexOf(";") > 0 && imgUrl.split(";")[0].indexOf("data:image") > -1) {//判断是否合法的文件与图像类型
                
            	//String rootPath = request.getSession().getServletContext().getRealPath("");
            	String rootPath = SystemConstant.HTTP_SERVERNAME_PATH;
                //String uploadPath = rootPath;
            	String uploadPath = SystemConstant.FILE_SAVE_ADDRESS; 
            	
                String filePath = "/upload/image/";
                if (StringUtils.isNotEmpty(fileType)) {
                    filePath += fileType + "/";
                } else {
                    filePath = "/upload/img/system/headPortrait/";
                }
                String autoCreatedDateDirByParttern = "yyyy" + File.separatorChar + "MM" + File.separatorChar + "dd"+ File.separatorChar;
                String autoCreatedDateDir = DateFormatUtils.format(new java.util.Date(), autoCreatedDateDirByParttern);//动态目录
                filePath=filePath+autoCreatedDateDir;
                filePath=filePath.replace("\\","/");
                map = uploadImgService.cropPic(uploadPath, filePath, imgUrl.split(",")[1], (int) Double.parseDouble(imgInitW), (int) Double.parseDouble(imgInitH), (int) Double.parseDouble(imgW), (int) Double.parseDouble(imgH), (int) Double.parseDouble(imgX1), (int) Double.parseDouble(imgY1), (int) Double.parseDouble(cropW), (int) Double.parseDouble(cropH));
                if (!StringUtils.isEmpty(oldPicUrl)) {//如果有历史图片则清除
                    uploadImgService.removeOldFile(rootPath + oldPicUrl);
                }
            } else {
                map.put("msg", "上传失败,请重试");
            }
        } catch (Exception e) {
            map.put("msg", "文件类型错误");
        }
        return map;
    }
}
