package com.bluebird.module.admin.model;

import java.util.List;

public class Module {
	 private String id; //ID
	 private String top; //上距离
	 private String theLeft; //左距离
	 private String height; //高
	 private String width; //宽
	 private String level1; //一级选择
	 private String level2; //二级选择
	 private String level3; //多选
	 private String fileName; //图片名称
	 private String name; 
	 private String url; //图片URL
	 private String start; 
	 private String num; 
	 private List<GhContentManage> listGhContentManage; //列表
	 private List<SysFile> contentImgFileList; //图集
	 private List<GhContentType> contentTypeList;
	
	

	public List<GhContentType> getContentTypeList() {
		return contentTypeList;
	}


	public void setContentTypeList(List<GhContentType> contentTypeList) {
		this.contentTypeList = contentTypeList;
	}


	public String getLevel3() {
		return level3;
	}


	public void setLevel3(String level3) {
		this.level3 = level3;
	}


	public List<SysFile> getContentImgFileList() {
		return contentImgFileList;
	}


	public void setContentImgFileList(List<SysFile> contentImgFileList) {
		this.contentImgFileList = contentImgFileList;
	}


	public List<GhContentManage> getListGhContentManage() {
		return listGhContentManage;
	}


	public void setListGhContentManage(List<GhContentManage> listGhContentManage) {
		this.listGhContentManage = listGhContentManage;
	}


	public String getNum() {
		return num;
	}


	public void setNum(String num) {
		this.num = num;
	}


	public String getFileName() {
		return fileName;
	}


	public void setFileName(String fileName) {
		this.fileName = fileName;
	}


	public String getUrl() {
		return url;
	}


	

	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public void setUrl(String url) {
		this.url = url;
	}

	public String getTheLeft() {
		return theLeft;
	}
	public void setTheLeft(String theLeft) {
		this.theLeft = theLeft;
	}
	public String getStart() {
		return start;
	}
	public void setStart(String start) {
		this.start = start;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTop() {
		return top;
	}
	public void setTop(String top) {
		this.top = top;
	}
	
	public String getHeight() {
		return height;
	}
	public void setHeight(String height) {
		this.height = height;
	}
	public String getWidth() {
		return width;
	}
	public void setWidth(String width) {
		this.width = width;
	}
	public String getLevel1() {
		return level1;
	}
	public void setLevel1(String level1) {
		this.level1 = level1;
	}
	public String getLevel2() {
		return level2;
	}
	public void setLevel2(String level2) {
		this.level2 = level2;
	}
	
	 
}
