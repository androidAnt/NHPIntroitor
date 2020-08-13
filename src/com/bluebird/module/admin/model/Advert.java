package com.bluebird.module.admin.model;

/**
 * 广告对象
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2015-12-9 16:26
 */
public class Advert {

    private String aId;//主键

    private String apId;//广告位置主键

    private String positionTitle;//广告位置名称

    private Integer sortNO;//序号

    private String title;//广告标题

    private String link;//广告链接

    private String picUrl;//广告图片地址

    private String startDate;//开始时间

    private String endDate;//结束时间

    private String content;//广告内容

    private String opDate;//操作时间

    private Integer state;//显示状态 0隐藏  1显示

    private Integer type;//类型 0普通广告 1商家广告
    
    private String sellerId;   //商家id
    private String sellerName; //商家名称
    private String province;   //省
    private String city;   //市
    private String county;   //市

    //以下用于显示

    private Integer width;//宽度

    private Integer height;//宽度

    public String getaId() {
        return aId;
    }

    public void setaId(String aId) {
        this.aId = aId;
    }

    public String getApId() {
        return apId;
    }

    public void setApId(String apId) {
        this.apId = apId;
    }

    public Integer getSortNO() {
        return sortNO;
    }

    public void setSortNO(Integer sortNO) {
        this.sortNO = sortNO;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getOpDate() {
        return opDate;
    }

    public void setOpDate(String opDate) {
        this.opDate = opDate;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public String getPositionTitle() {
        return positionTitle;
    }

    public void setPositionTitle(String positionTitle) {
        this.positionTitle = positionTitle;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

	public String getSellerId() {
		return sellerId;
	}

	public void setSellerId(String sellerId) {
		this.sellerId = sellerId;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCounty() {
		return county;
	}

	public void setCounty(String county) {
		this.county = county;
	}

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
}
