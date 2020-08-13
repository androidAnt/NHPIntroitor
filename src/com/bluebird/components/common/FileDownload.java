package com.bluebird.components.common;

import java.io.BufferedOutputStream;
import java.io.OutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bluebird.framework.constant.SystemConstant;

/**
 * 下载文件
 * @version
 */
public class FileDownload {

	/**
	 * @param response 
	 * @param filePath		//文件完整路径(包括文件名和扩展名)
	 * @param fileName		//下载后看到的文件名
	 * @return  文件名
	 */
	public static void fileDownload(final HttpServletResponse response,HttpServletRequest request, String filePath, String fileName){  
		try{
			String dirPath =  SystemConstant.FILEUPLOAD_root_PATH+filePath; 
			byte[] data = FileUtils.toByteArray(dirPath);    
			fileName = URLEncoderUtils.encode(fileName, "UTF-8");
			response.reset();  
		    response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");  
		    response.addHeader("Content-Length", "" + data.length);  
		    response.setContentType("application/octet-stream;charset=UTF-8");  
		    OutputStream outputStream = new BufferedOutputStream(response.getOutputStream());  
		    outputStream.write(data);  
		    outputStream.flush();  
		    outputStream.close();
	    }
		catch(Exception e){
			try {
				e.printStackTrace();
			} catch (Exception e1) {
			} 
		}
	} 
}
