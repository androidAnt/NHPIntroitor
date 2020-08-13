package com.bluebird.components.common;

import org.apache.commons.lang.time.DateFormatUtils;
import sun.misc.BASE64Decoder;

import javax.imageio.ImageIO;
import javax.imageio.ImageReadParam;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;
import java.awt.*;
import java.awt.geom.AffineTransform;
import java.awt.image.AffineTransformOp;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.Iterator;

/**
 * 图片缩放、拆剪
 * zy
 * v1.0
 */
public class ImageHelper {

    public static void main(String[] args) {

    }

    //对单张Base64图片字符串进行上传
    public static String getImgUrl(String imgStr,String rootPath,String filePath){
        String autoCreatedDateDirByParttern = "yyyy" + File.separatorChar + "MM" + File.separatorChar + "dd"+ File.separatorChar;
        String autoCreatedDateDir = DateFormatUtils.format(new java.util.Date(), autoCreatedDateDirByParttern);//动态目录
        filePath=filePath+autoCreatedDateDir+SysUtil.GetUUID()+".png";
        String fullPath = rootPath+filePath;
        File createFile = new File(fullPath);
        if(!createFile.exists()){
            createFile.mkdirs();
        }
        fullPath=fullPath.replace("\\","/");
        if(base64TImageFile(imgStr,fullPath)){
            return filePath.replace("\\","/");
        }
        return "";
    }

    //对多张Base64图片字符串进行上传
    public static String[] getImgUrl(String imgStr[],String rootPath,String filePath){
        String imgUrls[]=new String[imgStr.length];
        String autoCreatedDateDirByParttern = "yyyy" + File.separatorChar + "MM" + File.separatorChar + "dd"+File.separatorChar;
        String autoCreatedDateDir = DateFormatUtils.format(new java.util.Date(), autoCreatedDateDirByParttern);//动态目录
        filePath=filePath+autoCreatedDateDir;
        String fullPath = rootPath+filePath;
        File createFile = new File(fullPath);
        if(!createFile.exists()){
            createFile.mkdirs();
        }
        for(int i=0;i<imgStr.length;i++){
            filePath+=SysUtil.GetUUID()+".png";
            fullPath=fullPath.replace("\\","/");
            if(base64TImageFile(imgStr[i],fullPath)){
                imgUrls[i]=filePath.replace("\\","/");
            }else{
                return null;
            }
            return imgUrls;
        }
        return null;
    }

    // 对字节数组字符串进行Base64解码并生成图片
    public static boolean base64TImageFile(String imgStr, String imgFilePath) {
        if (imgStr == null) // 图像数据为空
            return false;
        if(imgStr.indexOf(",")>-1){
            imgStr=imgStr.split(",")[1];
        }
        BASE64Decoder decoder = new BASE64Decoder();
        try {
            // Base64解码
            byte[] bytes = decoder.decodeBuffer(imgStr);
            for (int i = 0; i < bytes.length; ++i) {
                if (bytes[i] < 0) {// 调整异常数据
                    bytes[i] += 256;
                }
            }
            // 生成jpeg图片
            OutputStream out = new FileOutputStream(imgFilePath);
            out.write(bytes);
            out.flush();
            out.close();
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /*
     * 根据尺寸图片居中裁剪 
     */
    public static void cutCenterImage(String src, String dest, int w, int h) throws IOException {
        Iterator iterator = ImageIO.getImageReadersByFormatName("jpg");
        ImageReader reader = (ImageReader) iterator.next();
        InputStream in = new FileInputStream(src);
        ImageInputStream iis = ImageIO.createImageInputStream(in);
        reader.setInput(iis, true);
        ImageReadParam param = reader.getDefaultReadParam();
        int imageIndex = 0;
        Rectangle rect = new Rectangle((reader.getWidth(imageIndex) - w) / 2, (reader.getHeight(imageIndex) - h) / 2, w, h);
        param.setSourceRegion(rect);
        BufferedImage bi = reader.read(0, param);
        ImageIO.write(bi, "jpg", new File(dest));

    }

    /* 
     * 图片裁剪二分之一 
     */
    public static void cutHalfImage(String src, String dest) throws IOException {
        Iterator iterator = ImageIO.getImageReadersByFormatName("jpg");
        ImageReader reader = (ImageReader) iterator.next();
        InputStream in = new FileInputStream(src);
        ImageInputStream iis = ImageIO.createImageInputStream(in);
        reader.setInput(iis, true);
        ImageReadParam param = reader.getDefaultReadParam();
        int imageIndex = 0;
        int width = reader.getWidth(imageIndex) / 2;
        int height = reader.getHeight(imageIndex) / 2;
        Rectangle rect = new Rectangle(width / 2, height / 2, width, height);
        param.setSourceRegion(rect);
        BufferedImage bi = reader.read(0, param);
        ImageIO.write(bi, "jpg", new File(dest));
    }
    /* 
     * 图片裁剪通用接口 
     */

    public static void cutImage(String src, String dest, int x, int y, int w, int h, String FormatName) throws IOException {
        FileInputStream in = null;
        ImageInputStream iis = null;
        try {
            Iterator iterator = ImageIO.getImageReadersByFormatName(FormatName);
            ImageReader reader = (ImageReader) iterator.next();
            in = new FileInputStream(src);
            iis = ImageIO.createImageInputStream(in);
            reader.setInput(iis, true);
            ImageReadParam param = reader.getDefaultReadParam();
            Rectangle rect = new Rectangle(x, y, w, h);
            param.setSourceRegion(rect);
            BufferedImage bi = reader.read(0, param);
            ImageIO.write(bi, FormatName, new File(dest));
        } catch (RuntimeException e) {
            // TODO Auto-generated catch block
            System.out.println(e.getMessage());
            e.printStackTrace();
        } finally {
            if (in != null)
                in.close();
            if (iis != null)
                iis.close();
        }

    }

    /*
     * 图片裁剪通用接口
     */

    public static void cutImageByByte(String ImgData, String dest, int x, int y, int w, int h, String FormatName) throws IOException {
        ByteArrayInputStream in = null;
        ImageInputStream iis = null;
        try {
            Iterator iterator = ImageIO.getImageReadersByFormatName(FormatName);
            ImageReader reader = (ImageReader) iterator.next();
            File destFile = new File(dest);
            if (!destFile.exists()) {
                destFile.mkdirs();
            }
            byte[] b = new byte[0];
            b = new BASE64Decoder().decodeBuffer(ImgData);
            for (int i = 0; i < b.length; ++i) {
                if (b[i] < 0) {// 调整异常数据
                    b[i] += 256;
                }
            }
            in = new ByteArrayInputStream(b);
            iis = ImageIO.createImageInputStream(in);
            reader.setInput(iis, true);
            ImageReadParam param = reader.getDefaultReadParam();
            Rectangle rect = new Rectangle(x, y, w, h);
            param.setSourceRegion(rect);
            BufferedImage bi = reader.read(0, param);
            ImageIO.write(bi, FormatName, new File(dest));
        } catch (RuntimeException e) {
            // TODO Auto-generated catch block
            System.out.println(e.getMessage());
            e.printStackTrace();
        } finally {
            if (in != null)
                in.close();
            if (iis != null)
                iis.close();
        }

    }

    /*
     * 图片缩放 
     */
    public static void zoomImage(String src, String dest, int w, int h) throws Exception {
        double wr = 0, hr = 0;
        File srcFile = new File(src);
        File destFile = new File(dest);
        BufferedImage bufImg = ImageIO.read(srcFile);
        Image Itemp = bufImg.getScaledInstance(w, h, bufImg.SCALE_SMOOTH);
        wr = w * 1.0 / bufImg.getWidth();
        hr = h * 1.0 / bufImg.getHeight();
        AffineTransformOp ato = new AffineTransformOp(AffineTransform.getScaleInstance(wr, hr), null);
        Itemp = ato.filter(bufImg, null);
        try {
            ImageIO.write((BufferedImage) Itemp, dest.substring(dest.lastIndexOf(".") + 1), destFile);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            ex.printStackTrace();
        }
    }

    /*
     * 图片缩放
     */
    public static void zoomImageByByte(String ImgData, String dest, int w, int h) throws Exception {
        double wr = 0, hr = 0;
        File destFile = new File(dest);
        if (!destFile.exists()) {
            destFile.mkdirs();
        }
        byte[] b = new byte[0];
        b = new BASE64Decoder().decodeBuffer(ImgData);
        for (int i = 0; i < b.length; ++i) {
            if (b[i] < 0) {// 调整异常数据
                b[i] += 256;
            }
        }
        ByteArrayInputStream is = new ByteArrayInputStream(b);
        BufferedImage bufImg = ImageIO.read(is);
        String ss[] = bufImg.getPropertyNames();
        Image Itemp = bufImg.getScaledInstance(w, h, bufImg.SCALE_REPLICATE);
        wr = w * 1.0 / bufImg.getWidth();
        hr = h * 1.0 / bufImg.getHeight();
        AffineTransformOp ato = new AffineTransformOp(AffineTransform.getScaleInstance(wr, hr), null);
        Itemp = ato.filter(bufImg, null);
        try {
            ImageIO.write((BufferedImage) Itemp, dest.substring(dest.lastIndexOf(".") + 1), destFile);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            ex.printStackTrace();
        }
    }

    /**
     * 删除临时文件夹
     */
    public static void delFolder(String folderPath) {
        try {
            delAllFile(folderPath); //删除完里面所有内容
            String filePath = folderPath;
            filePath = filePath.toString();
            File myFilePath = new File(filePath);
            myFilePath.delete(); //删除空文件夹
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 删除临时文件
     */
    public static boolean delAllFile(String path) {
        boolean flag = false;
        File file = new File(path);
        if (!file.exists()) {
            return flag;
        }
        if (!file.isDirectory()) {
            return flag;
        }
        String[] tempList = file.list();
        File temp = null;
        for (int i = 0; i < tempList.length; i++) {
            if (path.endsWith(File.separator)) {
                temp = new File(path + tempList[i]);
            } else {
                temp = new File(path + File.separator + tempList[i]);
            }
            if (temp.isFile()) {
                temp.delete();
            }
            if (temp.isDirectory()) {
                delAllFile(path + "/" + tempList[i]);//先删除文件夹里面的文件
                delFolder(path + "/" + tempList[i]);//再删除空文件夹
                flag = true;
            }
        }
        return flag;
    }

}
