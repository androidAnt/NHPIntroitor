<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-file-text-o" aria-hidden="true"></span>
        <b>日志详情(${ fn:substring(operationLog.operateTime ,0,19)})</b>
    </div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/system/log/operation" method="post" id="form1">
                <c:forEach items="${paramMap}" var="item" varStatus="status">
                    <input type="hidden" name="${item.key}" value="${item.value}"/>
                </c:forEach>
                <div class="form-group">
                    <label for="loginName" class="col-xs-4 col-md-2 control-label">操作人登录名称：</label>
                    <div class="col-md-4 col-xs-8">
                        <p class="form-control-static" id="loginName">${operationLog.loginName}</p>
                    </div>
                    <label for="realName" class="col-md-2 col-xs-4 control-label">操作人真实名称：</label>
                    <div class="col-md-4 col-xs-8">
                        <p class="form-control-static" id="realName">
                            <c:if test="${empty operationLog.realName}">- - - -</c:if>
                            <c:if test="${not empty operationLog.realName}">${operationLog.realName}</c:if>
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="className" class="col-md-2 col-xs-4 control-label">类名称：</label>
                    <div class="col-md-4 col-xs-8">
                        <p class="form-control-static" id="className">
                            <c:if test="${empty operationLog.className}">- - - -</c:if>
                            <c:if test="${not empty operationLog.className}">${operationLog.className}</c:if>
                        </p>
                    </div>
                    <label for="methodName" class="col-md-2 control-label col-xs-4">方法名：</label>
                    <div class="col-md-4 col-xs-8">
                        <p class="form-control-static" id="methodName">
                            <c:if test="${not empty operationLog.methodName}">${operationLog.methodName}</c:if>
                            <c:if test="${empty operationLog.methodName}">- - - -</c:if>
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="des" class="col-md-2 control-label col-xs-4">操作描述：</label>
                    <div class="col-md-4 col-xs-8">
                        <p class="form-control-static" id="des">
                            <c:if test="${not empty operationLog.des}">${operationLog.des}</c:if>
                            <c:if test="${empty operationLog.des}">- - - -</c:if>
                        </p>
                    </div>
                    <label for="isSuccess" class="col-md-2 control-label col-xs-4">操作状态：</label>
                    <div class="col-md-4 col-xs-8" style="word-break: normal;">
                        <p class="form-control-static" id="isSuccess">
                            <c:if test="${operationLog.success==0}">失败</c:if>
                            <c:if test="${operationLog.success==1}">成功</c:if>
                        </p>
                    </div>
                </div>
 <%--                <div class="form-group">
                    <label for="parms" class="col-md-2 control-label col-xs-4">参数：</label>
                    <div class="col-md-10 col-xs-8" style="word-break: break-all;">
                        <p class="form-control-static" id="parms">
                            <c:if test="${empty operationLog.params}">- - - -</c:if>
                            <c:if test="${not empty operationLog.params}">${operationLog.params}</c:if>
                        </p>
                    </div>
                </div> --%>
                <div class="form-group">
                    <label for="exceptionCode" class="col-md-2 control-label col-xs-4">错误代码：</label>
                    <div class="col-md-10 col-xs-8">
                        <p class="form-control-static" id="exceptionCode">
                            <c:if test="${empty operationLog.exceptionCode}">- - - -</c:if>
                            <c:if test="${not empty operationLog.exceptionCode}">${operationLog.exceptionCode}</c:if>
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exceptionDetail" class="col-md-2 control-label col-xs-4">异常详情：</label>
                    <div class="col-md-10 col-xs-8" style="word-break: break-all;">
                        <p class="form-control-static" id="exceptionDetail">
                            <c:if test="${empty operationLog.exceptionDetail}">- - - -</c:if>
                            <c:if test="${not empty operationLog.exceptionDetail}">${operationLog.exceptionDetail}</c:if>
                        </p>
                    </div>
                </div>
                <div class="col-lg-12">
                    <button class="btn btn-success btn-sm pull-right" type="submit">返 回</button>
                </div>
            </form>
        </div>
    </div>
</div>