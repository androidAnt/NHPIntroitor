<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-file-text-o" aria-hidden="true"></span>
        <b>用户详情</b>
    </div>
    <div class="panel-body">
        <div class="row">
            <%-- <div class="col-lg-3" style="width: 240px;margin: auto;text-align: center;">
                <div id="croppic">
                    <c:if test="${empty user.headPortrait}">
                        <img src="${root}/img/system/photo.jpg" class="img-thumbnail" width="100%">
                    </c:if>
                    <c:if test="${not empty user.headPortrait}">
                        <img src="${root}${user.headPortrait}" class="img-thumbnail" width="100%">
                    </c:if>
                </div>
            </div> --%>
            <form action="${root}/system/user" method="post" id="form1" class="form-horizontal">
                <c:forEach items="${paramMap}" var="item" varStatus="status">
                    <input type="hidden" name="${item.key}" value="${item.value}"/>
                </c:forEach>
                <div class="col-lg-12" style="padding-left: 0px;">
                    <div class="form-group">
                        <label for="loginName" class="col-xs-4 col-md-2 control-label">登录名称：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="loginName">${user.loginName}</p>
                        </div>
                     </div>
                     <div class="form-group">
                      <label for="loginName" class="col-xs-4 col-md-2 control-label">所属组织：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="loginName">${user.orgName}</p>
                        </div>
                        <label for="realName" class="col-md-2 col-xs-4 control-label">真实名称：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="realName">
                                <c:if test="${empty user.realName}">- - - -</c:if>
                                <c:if test="${not empty user.realName}">${user.realName}</c:if>
                            </p>
                        </div>
                      </div>
                      
                      <div class="form-group">
                       <label for="sort" class="col-md-2 control-label col-xs-4">排序：</label>
                        <div class="col-md-4 col-xs-8">
                         <p class="form-control-static" >
                        		<c:if test="${empty user.sort}">- - - -</c:if>
                                <c:if test="${not empty user.sort}">${user.sort}</c:if>
                                </p>
                        </div>
                    	<label for="phone" class="col-md-2 control-label col-xs-4">联系电话：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="phone">
                                <c:if test="${empty user.phone}">- - - -</c:if>
                                <c:if test="${not empty user.phone}">${user.phone}</c:if>
                            </p>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="roleNames" class="col-md-2 control-label col-xs-4">拥有角色：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="roleNames">
                                <c:if test="${empty user.roleName}">- - - -</c:if>
                                <c:if test="${not empty user.roleName}">${user.roleName}</c:if>
                            </p>
                        </div>
                      <%--   <label for="type"  class="col-md-2 control-label col-xs-4">用户类型：</label>
                        <div class="col-md-4 col-xs-8">
                           	 <p class="form-control-static" id="type">
                                <c:if test="${user.type=='1'}">检验</c:if>
                                <c:if test="${user.type=='2'}">审核</c:if>
                                <c:if test="${user.type=='3'}">审批</c:if>
                                <c:if test="${empty user.type}">- - - -</c:if>
                            </p>
                        </div> --%>
                    </div>
                    
<!--                     <div class="form-group"> -->
<!--                        <label for="type"  class="col-md-2 control-label col-xs-4">用户类型：</label> -->
<!--                         <div class="col-md-4 col-xs-8"> -->
<!--                            	 <p class="form-control-static" id="type"> -->
<%--                                 <c:if test="${user.type=='1'}">检验</c:if> --%>
<%--                                 <c:if test="${user.type=='2'}">审核</c:if> --%>
<%--                                 <c:if test="${user.type=='3'}">审批</c:if> --%>
<%--                                 <c:if test="${empty user.type}">- - - -</c:if> --%>
<!--                             </p> -->
<!--                         </div> -->
<!--                     </div> -->
                    
                    <!-- <div class="form-group">
                        <label for="age" class="col-md-2 col-xs-4 control-label">年龄：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="age">
                                <c:if test="${empty user.age}">- - - -</c:if>
                                <c:if test="${not empty user.age}">${user.age}</c:if>
                            </p>
                        </div>
                        <label for="gender" class="col-md-2 control-label col-xs-4">性别：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="gender">
                                <c:if test="${user.gender=='1'}">女</c:if>
                                <c:if test="${user.gender=='0'}">男</c:if>
                                <c:if test="${empty user.gender}">- - - -</c:if>
                            </p>
                        </div>
                    </div> -->
                        <!-- <label for="createDate" class="col-md-2 control-label col-xs-4">创建时间：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="createDate">${ fn:substring(user.createDate ,0,19)}</p>
                        </div> -->
                    </div>
                    <!-- <div class="form-group">
                        <label for="email" class="col-md-2 control-label col-xs-4">邮箱地址：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="email">
                                <c:if test="${empty user.email}">- - - -</c:if>
                                <c:if test="${not empty user.email}">${user.email}</c:if>
                            </p>
                        </div> 
                        <label for="phone" class="col-md-2 control-label col-xs-4">联系电话：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="phone">
                                <c:if test="${empty user.phone}">- - - -</c:if>
                                <c:if test="${not empty user.phone}">${user.phone}</c:if>
                            </p>
                        </div>
                    </div> -->
                    <!-- <div class="form-group">
                        <label for="idCard" class="col-md-2 control-label col-xs-4">身份证号码：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="idCard">
                                <c:if test="${empty user.idCard}">- - - -</c:if>
                                <c:if test="${not empty user.idCard}">${user.idCard}</c:if>
                            </p>
                        </div>
                        <label for="address" class="col-md-2 control-label col-xs-4">联系地址：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="address">
                                <c:if test="${empty user.address}">- - - -</c:if>
                                <c:if test="${not empty user.address}">${user.address}</c:if>
                            </p>
                        </div>
                    </div> -->
                    <!-- <div class="form-group">
                        <label for="remark" class="col-md-2 control-label col-xs-4">备注信息：</label>
                        <div class="col-md-4 col-xs-8">
                            <p class="form-control-static" id="remark">
                                <c:if test="${empty user.remark}">- - - -</c:if>
                                <c:if test="${not empty user.remark}">${user.remark}</c:if>
                            </p>
                        </div>
                    </div> -->
                </div>
                <div class="col-lg-12">
                    <button class="btn btn-success btn-sm pull-right" type="submit">返 回</button>
                </div>
            </form>
        </div>
    </div>
</div>