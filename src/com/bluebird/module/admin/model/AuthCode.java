package com.bluebird.module.admin.model;

/**
 * 验证码对象
 *
 * @author wangwc
 * @version 1.0
 * @Date 2018-6-15
 */
public class AuthCode {

	private String code; // 验证码

	private String mobile; // 手机号码

	private String createDate; // 创建时间


	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
}
