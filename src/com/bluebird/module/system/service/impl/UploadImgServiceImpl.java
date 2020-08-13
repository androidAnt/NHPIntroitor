package com.bluebird.module.system.service.impl;

import com.bluebird.components.common.ImageHelper;
import com.bluebird.components.common.SysUtil;
import com.bluebird.framework.constant.SystemConstant;
import com.bluebird.module.system.service.UploadImgService;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

/**
 * 图片上传接口实现类
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2015-12-3 10:58
 */
@Service
public class UploadImgServiceImpl implements UploadImgService {

    /**
     * 上传裁剪图片
     *
     * @param rootPath 服务器绝对路劲
     * @param filePath 文件相对路径
     * @param ImgData  图像的64位编码字符串
     * @param imgInitW 原图宽度
     * @param imgInitH 原图高度
     * @param imgW     缩放后宽度
     * @param imgH     缩放后高度
     * @param imgX1    x轴坐标
     * @param imgY1    y轴坐标
     * @param cropW    截取宽度
     * @param cropH    截取长度
     * @return Map
     * @throws Exception
     */
    @Override
    public Map<String, Object> cropPic(String rootPath, String filePath, String ImgData, Integer imgInitW, Integer imgInitH, Integer imgW, Integer imgH, Integer imgX1, Integer imgY1, Integer cropW, Integer cropH) throws Exception {
        Map<String, Object> map = new HashMap<>();
        map.put("status", SystemConstant.RETURN_STATUS_FAIL);
        try {
            String fileName = SysUtil.GetUUID() + ".png";
            if (imgInitW != imgW) {//先等比缩放然后再截切
                ImageHelper.zoomImageByByte(ImgData, rootPath + filePath + fileName, imgW, imgH);
                String newpath = filePath + SysUtil.GetUUID() + ".png";
                ImageHelper.cutImage(rootPath + filePath + fileName, rootPath + newpath, imgX1, imgY1, cropW, cropH, "png");
                File myFilePath = new File(rootPath + filePath + fileName);
                myFilePath.delete();//删除缩放后的图片
                filePath = newpath;
            } else {//直接截切
                filePath = filePath + fileName;
                ImageHelper.cutImageByByte(ImgData, rootPath + filePath, imgX1, imgY1, cropW, cropH, "png");
            }
            map.put("status", "success");
            map.put("url", filePath);
            map.put("width", cropW);
            map.put("height", cropH);
        } catch (Exception e) {
            map.put("msg", "上传失败,请重试");
        }
        return map;
    }

    /**
     * 用户重新上传图片后将移除历史头像
     *
     * @param filePath 头像文件路径
     * @throws Exception
     */
    @Override
    public boolean removeOldFile(String filePath) throws Exception {
        File myFilePath = new File(filePath);
        myFilePath.delete();//删除缩放后的图片
        return true;
    }
}
