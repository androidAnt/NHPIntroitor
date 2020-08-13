<%@ page import="com.bluebird.components.common.TimeHelper" %>
<%@ page import="com.bluebird.module.admin.constant.AppConstant" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
    String date;
    if (TimeHelper.getCurrentLocalTime("yyyy").equals("2016")) {
        date = "2016";
    } else {
        date = "2016-" + TimeHelper.getCurrentLocalTime("yyyy");
    }
%>
<!--<c:set var="ctx" value="${pageContext.request.contextPath}"/>-->
<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<c:set var="ctx" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>


<script type="text/javascript" src="${ctx}/js/jquery-2.1.3.min.js"></script>
<script src="${ctx}/js/jquery.messager.js"></script>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="Expires" CONTENT="-1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/style/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/style/global.css"/>
    <link rel="stylesheet" type="text/css" href="${ctx}/style/page.css"/>
    <link rel="shortcut icon" href="${ctx}/logo.png" type="image/x-icon"/>
    <title>九沪建材</title>
</head>
<body>
<div class="wrapOut logoBar"><div class="wrap"><a href="${ctx}" class="logoImg pull-left"><img src="${ctx}/images/logo.png" border="0"/></a></div></div>
<div class="logonMain">
    <form id="loginForm" method="post" action="${ctx}/member/login">
        <div class="center height100b clearfix">
            <div class="logonBox f_r">
                <h2>会员登录</h2>
                <div class="inputBox_div">
                    <div class="inputBox marginT25"><i class="phoneNumI"></i>
                        <input type="text" id="loginNameInput" name="phone" value="${phone}" maxlength="11" placeholder="请输入手机号码"/>
                    </div>
                    <div class="inputBox marginT10"><i class="passwordI"></i>
                        <input type="password" maxlength="12" name="password" id="passwordInput" placeholder="输入6-12位数字或字母组合密码"/>
                    </div>
                    <div style="display: none;" class="errorMsg marginT10"><i class="errorMsgIcon"></i>
                        <err id="errorMsgLable">${msg}</err>
                    </div>
                </div>
                <div class="forgetPassRegBtn_div clearfix">
                    <a href="${ctx}/front/member/forgetPasswordOne">忘记密码</a>
                    <a href="${ctx}/front/member/initRegister"  class="f_r">新用户免费注册</a>
                </div>
                <div class="logonBtn_div">
                    <a class="logonBtn" href="javascript:void(0);">登录</a>
                </div>
            </div>
        </div>
    </form>
</div>
<div class="wrapOut foot">
    <div class="wrap footMenu">
        <div class="footList">
            <dt>关于我们</dt>
            <dl><a href="${ctx}/front/help/Company_profile">公司简介</a></dl>
            <dl><a href="${ctx}/front/help/link_us">联系我们</a></dl>
        </div>
        <div class="footList">
            <dt>友情链接</dt>
            <dl><a>友情链接</a></dl>
            <dl><a>友情链接</a></dl>
        </div>
        <div class="footList">
            <dt>新手指南</dt>
            <dl><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=2&articleId=2">账户注册</a></dl>
            <dl><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=3&articleId=3">购物流程</a></dl>
        </div>
        <div class="footList">
            <dt>支付方式</dt>
            <dl><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=4&articleId=4">在线支付</a></dl>
            <dl><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=5&articleId=5">优惠券</a></dl>
            <dl><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=6&articleId=6">动能量支付</a></dl>
        </div>
        <div class="footList">
            <dt>售后服务</dt>
            <dl><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=7&articleId=7">退换货政策</a></dl>
            <dl><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=8&articleId=8">退换货流程</a></dl>
            <dl><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=9&articleId=9">退款说明</a></dl>
            <dl><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=10&articleId=10">退款帮助</a></dl>
        </div>
        <div class="footList">
            <dt>帮助</dt>
            <dl>
                <a target="_blank" rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&uin=<%=AppConstant.adminQQ%>&site=qq&menu=yes">在线客服</a>
            </dl>
            <dl><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=11&articleId=11">找回密码</a></dl>
            <dl><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=12&articleId=12">隐私说明</a></dl>
        </div>
        <div class="pull-right downLink"><img src="${ctx}/images/topEwm.png"/><p>手机app下载</p></div>
    </div>
    <div class="wrapOut copyright">
        <div class="bottomMenu"><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=15&articleId=15">合作商家</a><span>|</span><a href="${ctx}/front/help/About_Us" >关于我们</a><span>|</span><a href="${ctx}/front/help/link_us"  >联系我们</a><span>|</span><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=14&articleId=14" >法律声明</a><span>|</span><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=12&articleId=12" >隐私说明</a><span>|</span><a href="${ctx}/helpCentre?selectMenu=4&subMenuSelected=10&topMenuSelected=3&subHelpMenuSelected=13&articleId=13" >服务协议</a></div>
        <p>上海蓝慈环保科技有限公司 ©<%=date%></p>
        <p>沪ICP备17032072号</p>
    </div>
</div>
<script>
    if($('#errorMsgLable').html()!=''){
        $(".errorMsg").show();
    }
    document.onkeydown = keyDownSearch;
    function keyDownSearch(e) {
        var theEvent = e || window.event;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
            $('a.logonBtn').click();
            return false;
        }
        return true;
    }
    $('a.logonBtn').click(function (event) {
        if (phoneCheck($("#loginNameInput").val())) {
            return false;
        }
        if (pwdCheck($("#passwordInput").val())) {
            return false;
        }
        $("#loginForm").submit();
    });

    function phoneCheck(phone){
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(phone==''){
            showMsg("请输入手机号码！");
            $("#loginNameInput").focus();
            return true;
        }else{
            if(!reg.test(phone)){
                showMsg("手机号码不合法！");
                $("#loginNameInput").focus();
                return true;
            }else{
                $("#errorMsg").hide();
                return false;
            }
        }
    }
    function pwdCheck(pwd) {
        var reg = /^[A-Za-z0-9]{6,12}$/;
        var isTrue = reg.test(pwd);
        if (pwd == '') {
            showMsg("请输入密码！");
            $("#pwdInput").focus();
            return true;
        }
        else if (!isTrue) {
            showMsg("输入6-12位数字或字母组合密码！");
            $("#pwdInput").focus();
            return true;
        } else {
            $("#errorMsg").hide();
            return false;
        }
    }
    //光标离开时 验证手机号码是否合法
    $("#loginNameInput").blur(function () {
        phoneCheck($("#loginNameInput").val())
    });

    function showMsg(msg){
        $(".errorMsg").show();
        $("#errorMsgLable").html(msg);
    }
</script>
</body>
</html>