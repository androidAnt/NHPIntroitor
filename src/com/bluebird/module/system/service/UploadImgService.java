package com.bluebird.module.system.service;

import java.util.Map;

/**
 * 图片上传service接口
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-03-17 10:55
 */
public interface UploadImgService {

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
    Map<String, Object> cropPic(String rootPath, String filePath, String ImgData, Integer imgInitW, Integer imgInitH, Integer imgW, Integer imgH, Integer imgX1, Integer imgY1, Integer cropW, Integer cropH) throws Exception;

    /**
     * 用户重新上传图片后将移除历史头像
     *
     * @param filePath 头像文件路径
     * @throws Exception
     */
    boolean removeOldFile(String filePath) throws Exception;
}
