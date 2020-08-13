<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-file-text-o" aria-hidden="true"></span>
        <b>会员详情</b>
    </div>
    <div class="panel-body">
        <div class="row">
            <form action="${root}/system/user/doReview" method="post"  class="form-horizontal">
                <c:forEach items="${paramMap}" var="item" varStatus="status">
                    <input type="hidden" name="${item.key}" value="${item.value}"/>
                </c:forEach>
                <div class="col-lg-12" style="padding-left: 0px;">
                    <div class="form-group">
                        <label for="loginName" class="col-xs-4 col-md-2 control-label">登录名称：</label>
                        <div class="col-md-4 col-xs-8">
                        	<input disabled type="text" class="form-control" name="loginName" id="loginName"  value="${user.loginName}">
                        </div>
                         <label for="realName" class="col-md-2 col-xs-4 control-label">真实名称：</label>
                        <div class="col-md-4 col-xs-8">
                        <input disabled type="text" class="form-control"  name="realName" id="realName" value="${user.realName}">
                        </div>
                     </div>
                     
                        <div class="form-group">
                      <label for="gender" class="col-xs-4 col-md-2 control-label">性别：</label>
                        <div class="col-md-4 col-xs-8">
                        <c:if test="${user.gender==1 }">
                         <input disabled type="text" class="form-control" id="gender" name="gender" value="女">
                        </c:if>
                         <c:if test="${user.gender==0 }">
                         	<input disabled type="text" class="form-control" id="gender" name="gender" value="男">
                        </c:if>
                        </div>
                         <label for="phone" class="col-md-2 control-label col-xs-4">联系电话：</label>
                         <div class="col-md-4 col-xs-8">
                           <input disabled type="text" class="form-control" id="phone" name="phone" value="${user.phone}">
                        </div>
                      </div>
                     
                     <div class="form-group">
                      <label for="orgId" class="col-xs-4 col-md-2 control-label">所属组织：</label>
                        <div class="col-md-4 col-xs-8">
                         <input disabled type="text" class="form-control" id="orgName" name="orgName" value="${user.orgName}">
                        </div>
                         <label for="sort" class="col-md-2 control-label col-xs-4">排序：</label>
                         <div class="col-md-4 col-xs-8">
                           <input disabled type="text" class="form-control" id="sort" name="sort" value="${user.sort}">
                        </div>
                      </div>
                      
                      <div class="form-group">
                      <label for="birthday" class="col-xs-4 col-md-2 control-label">出生日期：</label>
                        <div class="col-md-4 col-xs-8">
                         <input disabled type="text" class="form-control" id="birthday" name="birthday" value="${user.birthday}">
                        </div>
                         <label for="birthplace" class="col-md-2 control-label col-xs-4">出生地点：</label>
                         <div class="col-md-4 col-xs-8">
                           <input disabled type="text" class="form-control" id="birthplace" name="birthplace" value="${user.birthplace}">
                        </div>
                      </div>
                      
                       <div class="form-group">
                      <label for="hometown" class="col-xs-4 col-md-2 control-label">籍贯：</label>
                        <div class="col-md-4 col-xs-8">
                         <input disabled type="text" class="form-control" id="hometown" name="hometown" value="${user.hometown}">
                        </div>
                         <label for="wage" class="col-md-2 control-label col-xs-4">工资：</label>
                         <div class="col-md-4 col-xs-8">
                           <input disabled type="text" class="form-control" id="wage" name="wage" value="${user.wage}">
                        </div>
                      </div>
                      
                       <div class="form-group">
                      <label for="education" class="col-xs-4 col-md-2 control-label">学历：</label>
                        <div class="col-md-4 col-xs-8">
                         <input disabled type="text" id="education" name="education" class="form-control" value="${user.education}">
                        </div>
                         <label for="politicalStatus" class="col-md-2 control-label col-xs-4">政治面貌：</label>
                         <div class="col-md-4 col-xs-8">
                           <input disabled type="text" id="politicalStatus" name="politicalStatus" class="form-control" value="${user.politicalStatus}">
                        </div>
                      </div>
                        <div class="form-group">
                      <label for="position" class="col-xs-4 col-md-2 control-label">单位及职务：</label>
                        <div class="col-md-4 col-xs-8">
                         <input disabled type="text" class="form-control" id="position" name="position" value="${user.position}">
                        </div>
                        <label for="isMember" class="col-xs-4 col-md-2 control-label">审核：</label>
                        <div class="col-md-4 col-xs-8">
                       	<select disabled class="form-control" id="isMember" name="isMember" >
                       		<option value="0">同意</option>
                       		<option value="3">不同意</option>
                        </select>
                        </div>
                      </div>
                      
                      <div class="form-group">  
                        <label for="opinion" class="col-md-2 control-label col-xs-4">审核意见<span style="color:red;">*</span></label>
                        <div class=" col-lg-10 col-md-4 col-xs-8">
                        <textarea disabled name="opinion"  id="opinion" class="form-control" rows="8" maxlength="200" required="required"
                                      >${user.opinion}</textarea>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <button id="back" class="btn btn-info btn-sm pull-right" type="button" >&nbsp;&nbsp;返&nbsp;&nbsp;回&nbsp;&nbsp;</button>
                </div>
            </form>
        </div>
    </div>
</div>

<form action="${root}/system/user/memberQuery" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item" varStatus="status">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>

<script>
  $("#back").click(function () {
        $("#backForm").submit();
    });
</script>