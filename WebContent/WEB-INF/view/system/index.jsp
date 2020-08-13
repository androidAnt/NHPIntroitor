<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="glyphicon glyphicon-user"></span>
        <b>我的基本户信息</b>
    </div>
    <table class="table">
        <tbody>
        <tr>
            <td class="info" width="200" align="right">姓名:</td>
            <td>${sysUser.realName}</td>
            <!-- <c:if test="${not empty sysUser.headPortrait}">
                <c:if test="${fn:contains(sysUser.headPortrait,'http://')}">
                    <td rowspan="4" ><img src="${sysUser.headPortrait}" width="150px;" height="150px;"></td>
                </c:if>
                <c:if test="${!fn:contains(sysUser.headPortrait,'http://')}">
                    <td rowspan="4" ><img src="${root}${sysUser.headPortrait}" class="img-thumbnail" width="150px;" height="150px;"></td>
                </c:if>
            </c:if>
            <c:if test="${empty sysUser.headPortrait}">
                <td rowspan="4" ><img src="${root}/img/system/photo.jpg" class="img-thumbnail" width="150px;" height="150px;"></td>
            </c:if> -->
        </tr>
        <!-- <tr>
            <td class="info" align="right">部门:</td>
            <td>${sysUser.orgName}</td>
        </tr> -->
        <tr>
            <td class="info" align="right">拥有角色:</td>
            <td>${sysUser.roleName}</td>
        </tr>
        <tr>
            <td class="info" align="right">上次登录时间:</td>
            <td>${ fn:substring(sysUser.lastDate ,0,19)}</td>
        </tr>
        <tr>
            <td class="info" align="right">上次登录IP:</td>
            <td>${sysUser.loginIp}</td>
        </tr>
        </tbody>
    </table>
</div>