<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant" %>

<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<c:set var="ctx" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <title><%=SystemConstant.SYS_NAME%>
    </title>
    <link rel="shortcut icon" href="${root}/logo.png" type="image/x-icon"/>
    <style>
        body {
            padding-right: 0px;
            padding-left: 0px;
            padding-bottom: 0px;
            margin: 0px;
            padding-top: 0px;
            background: #dad9d7;
            font-family: "微软雅黑"
        }

        img {
            border-top-style: none;
            border-right-style: none;
            border-left-style: none;
            border-bottom-style: none
        }

        a {
            cursor: pointer
        }

        ul {
            list-style-type: none
        }

        li {
            list-style-type: none
        }

        table {
            table-layout: fixed
        }

        table tr td {
            word-break: break-all;
            word-wrap: break-word
        }

        a {
            text-decoration: none;
            outline: none
        }

        a:hover {
            text-decoration: underline
        }

        .cf {
            clear: both;
            zoom: 1
        }

        .bg {
            background: url(./components/404/01.jpg) #dad9d7 no-repeat center top;
            left: 0px;
            overflow: hidden;
            width: 100%;
            position: absolute;
            top: 0px;
            height: 600px
        }

        .cont {
            margin: 0px auto;
            width: 500px;
            line-height: 20px
        }

        .c1 {
            height: 360px;
            text-align: center
        }

        .c1 .img1 {
            margin-top: 180px
        }

        .c1 .img2 {
            margin-top: 165px
        }

        .cont h2 {
            font-weight: normal;
            font-size: 18px;
            color: #555;
            height: 35px;
            text-align: center
        }

        .c2 {
            height: 35px;
            text-align: center
        }

        .c2 a {
            display: inline-block;
            font-size: 14px;
            margin: 0px 4px;
            color: #626262;
            padding-top: 1px;
            height: 23px;
            text-align: left;
            text-decoration: none
        }

        .c2 a:hover {
            color: #626262;
            text-decoration: none
        }

        .c2 a.home {
            padding-left: 30px;
            background: url(./components/404/02.png);
            width: 66px
        }

        .c2 a.home:hover {
            background: url(./components/404/02.png) 0px -24px
        }

        .c2 a.home:active {
            background: url(./components/404/02.png) 0px -48px
        }

        .c2 a.re {
            padding-left: 30px;
            background: url(./components/404/03.png);
            width: 66px
        }

        .c2 a.re:hover {
            background: url(./components/404/03.png) 0px -24px
        }

        .c2 a.re:active {
            background: url(./components/404/03.png) 0px -48px
        }

        .c2 a.sr {
            padding-left: 28px;
            background: url(./components/404/04.png);
            width: 153px
        }

        .c2 a.sr:hover {
            background: url(./components/404/04.png) 0px -24px
        }

        .c2 a.sr:active {
            background: url(./components/404/04.png) 0px -48px
        }

        .c3 {
            font-size: 12px;
            color: #999;
            height: 180px;
            text-align: center
        }

        #bf {
            left: 0px;
            width: 100%;
            position: absolute;
            top: 269px
        }

        .bf1 {
            padding-left: 32px;
            margin: 0px auto;
            width: 99px
        }

        .bd {
            overflow: hidden;
            height: 600px
        }

        #box {
            left: 0px;
            width: 100%;
            position: absolute;
            top: 165px;
            text-align: center
        }

        .bf1 {
            padding-left: 32px;
            margin: 0px auto;
            width: 99px
        }
    </style>
</head>
<body>
<div class=bg>
    <div class=cont>
        <div class=c1><img class=img1 src="${ctx}/components/404/01.png"/></div>
        <h2>Sorry…<%=SystemConstant.SYS_NAME%>提醒您访问的页面不存在</h2>
        <div class=c2><a class=re href="${ctx}/system/">返回首页</a>
            <br/>&nbsp;
            <br/>&nbsp;
            提醒您 - 您可能输入了错误的网址，或者该网页已删除或移动
        </div>
    </div>
</div>
</body>
</html>
