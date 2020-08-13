package com.bluebird.framework.shiro;

import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authc.credential.SimpleCredentialsMatcher;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;

/**
 * shiro验证时重写密码加密（用于后台）
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2015-09-02 13:29
 * @extends SimpleCredentialsMatcher
 */
public class AdminCredentialsMatcher extends SimpleCredentialsMatcher {

    /**
     * 重写解密
     * */
    @Override
    public boolean doCredentialsMatch(AuthenticationToken authcToken, AuthenticationInfo info) {
        UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
        Object tokenCredentials = encrypt(token.getUsername(),String.valueOf(token.getPassword()));
        Object accountCredentials = getCredentials(info);
        return equals(tokenCredentials, accountCredentials);
    }

    /**
     * 重新加密
     * */
    private String encrypt(String userName,Object password) {
        return new ShaPasswordEncoder().encodePassword(userName,password);
    }

}
