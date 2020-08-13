package com.bluebird.components.common;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class URLEncoderUtils {
	private static final String regex = "[^{}!#$%&'()*+,./;:=?@[/] ]";
	public static String encode(String str, String charset) throws UnsupportedEncodingException {
		if (str == null || charset == null) {
			return "";
		}
		StringBuffer sb = new StringBuffer();
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(str);
		while (matcher.find()) {
			matcher.appendReplacement(sb, URLEncoder.encode(matcher.group(0), charset));
		}
		matcher.appendTail(sb);
		return sb.toString();
	}

}