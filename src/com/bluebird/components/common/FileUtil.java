package com.bluebird.components.common;

import org.apache.commons.lang.time.DateFormatUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

public class FileUtil {
	
	//定义项目根路径
	public final static String basePath = System.getProperty("nbpc.root");
	
	//专场图片保存地址
	public final static String picPath = "uploadPic/";
	
	/**
	 * 处理上传文件
	 * @param file
	 * @param rootPath 项目根路径
	 * @param filePath 文件路径
	 * @return
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	public static String uploadYardPic(MultipartFile file,String rootPath,String filePath) throws IllegalStateException, IOException{
		String fileName = null;
		if(!(file.getOriginalFilename() ==null || "".equals(file.getOriginalFilename()))){
			String name = file.getOriginalFilename();  
	        //获取上传文件类型的扩展名,先得到.的位置，再截取从.的下一个位置到文件的最后，最后得到扩展名  
	        String ext = name.substring(name.lastIndexOf(".")+1,name.length());  
	        //对扩展名进行小写转换
			String autoCreatedDateDirByParttern = "yyyy" + File.separatorChar + "MM" + File.separatorChar + "dd"+ File.separatorChar;
			String autoCreatedDateDir = DateFormatUtils.format(new java.util.Date(), autoCreatedDateDirByParttern);//动态目录
	        fileName = filePath+autoCreatedDateDir+SysUtil.GetUUID()+ "." + ext.toLowerCase();
			fileName=fileName.replace("\\","/");
	        File f = new File(rootPath + fileName);
	        if(!f.exists()){
	        	f.mkdirs();
	        }
	        file.transferTo(f);
		}
		return fileName;
	}
	
	
	
	
	public static void removeImage(String imageName){
		File file = new File(imageName);//这里只能指定删除一个文件,
		 //如果想要实现删除全部内容要怎么做?
		file.delete();
	}
	
}
