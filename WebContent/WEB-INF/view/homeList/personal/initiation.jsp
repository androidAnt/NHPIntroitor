<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<%@ page import="com.bluebird.components.common.TimeHelper" %>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title><%=SystemConstant.SYS_NAME%></title>
<link rel="stylesheet" href="${root}/css/page.css" />
		<link rel="shortcut icon" href="${root}/logo.png" type="image/x-icon"/>
	<link rel="stylesheet" href="${root}/components/ace/css/font.min.css"/>
<link href="${root}/css/info.css" rel="stylesheet">
<link rel="stylesheet" href="${root}/css/header.css" />
<link rel="stylesheet" href="${root}/css/index.css" />
<link href="${root}/css/list.css" rel="stylesheet">
<script type="text/javascript"
	src="${root}/components/jquery/jquery.min.js"></script>
<script type="text/javascript"
	src="${root}/js/index.js"></script>
	<script src="${root}/components/laydate/laydate.js"></script>
</head>

<body style="background: white;">
<jsp:include page="../../home/head.jsp"></jsp:include>
<div class="box">
	
		<div class="picture-list-content">
			<div class="picture-list-content-leftdh">
					<div class="content-js">
						个人中心
					</div>
					<div>
						<ul>
						<li tabindex='1'><a href="${root }/home/module/MyTbMailbox">我的留言</a></li>
							<c:if test="${isMember }">
							<li tabindex='1' id="66666"><a href="${root }/home/module/initiation">我要入会</a></li>
							</c:if>
							<li tabindex='1' ><a href="${root }/home/module/getUserEdit">修改密码</a></li>
						</ul>
					</div>
					<div style="height: 30px; background: white;"></div>
			</div>
			
		<div class="article-list-content-info">
			<div class="article-list-content-info-title">
				<img src="${root }/img/biao1.png" >
				<span class="p1">我要入会</span>
			</div>
			<hr >
		<form action="${root }/home/module/myInitiation" method="get" id="backForm" class="join" onsubmit="return doSubmit();">
		      <div class="messlist">
				  <label>姓名<span style="color:red;">*</span>：</label>
				  <input type="text" name="realName" required maxlength="20" value="${user.realName }" placeholder="请输入姓名" class="inputText300">
				  	<label>性别<span style="color:red;">*</span>：</label>
					<input type="radio" name="gender" <c:if test="${empty user.gender || user.gender == '0'}">checked="checked"</c:if> value="0"/> 男 &nbsp;&nbsp;&nbsp;&nbsp;
					<input type="radio" name="gender" <c:if test="${ user.gender == '1'}">checked="checked"</c:if> value="1" /> 女
		     </div>
			 
			 <div class="messlist">
			 				  <label>身份证号<span style="color:red;">*</span>：</label>
			 				  <input type="text" name="idCard" id="idCard" required maxlength="18" value="${user.idCard }" placeholder="请输入身份证号" class="inputText300">
			 				   <label>民族<span style="color:red;">*</span>：</label>
				        <input type="text" name="nation" required maxlength="20" value="${user.nation }" placeholder="请输入民族" class="inputText300">
			 </div>
			 
			  <div class="messlist">
					  <label>出生日期<span style="color:red;">*</span>：</label>
					  <input class="laydate-icon inputText280" name="birthday" required id="demo" value="${user.birthday }"> 
					  <label>电话<span style="color:red;">*</span>：</label>
					  <input type="tel" name="phone" id="phone" required maxlength="11" value="${user.phone }" placeholder="请输入电话" class="inputText300">
			 </div>
			 
			  <div class="messlist">
			 		<label>学历<span style="color:red;">*</span>：</label>
					<select name="education" class="select-class">
						<c:forEach items="${education}" var="education">
									<option  value="${education.dicCode}"${education.dicCode==user.education?'selected':''}>${education.dicName}</option>
								</c:forEach>
					</select>
					<label>工资：</label>
					<input type="number" name="wage" value="${user.wage }" placeholder="请输入工资" max="99999999" oninput="if(value.length>8)value=value.slice(0,8)" class="inputText300">
			 </div>
			 
			   <div class="messlist">
			 		<label>政治面貌<span style="color:red;">*</span>：</label>
			 					<select name="politicalStatus" class="select-class">
			 					<c:forEach items="${politicsStatus}" var="politicsStatus">
									<option  value="${politicsStatus.dicCode}"${politicsStatus.dicCode==user.politicalStatus?'selected':''}>${politicsStatus.dicName}</option>
								</c:forEach>
			 					</select>
			 					<label>籍贯<span style="color:red;">*</span>：</label>
			 					<input type="text" value="${user.hometown }" name="hometown" required maxlength="30" placeholder="请输入籍贯" class="inputText300">
			 </div>
			 <div class="messlist">
			 <label>出生地点<span style="color:red;">*</span>：</label>
					  <input type="text" required maxlength="30" name="birthplace" value="${user.birthplace }" placeholder="请输入出生地点" class="inputTextzw">
			 </div>
			 <div class="messlist">
			 	<label>单位及职务<span style="color:red;">*</span>：</label>
				<input type="text" name="position" required maxlength="50" value="${user.position }" placeholder="请输入工作单位及职务" class="inputTextzw">
			 </div>
			 <div class="messlist">
			 	<label>备注：</label>
				<input type="text" name="remark"  maxlength="50" value="${user.remark }" placeholder="请输入备注信息" class="inputTextzw">
			 </div>
			 <c:if test="${user.isMember==2 }">
			  <div class="messlist">
			 	<label>审核状态： </label>
			 	<span>未审核</span>
			 </div>
			 </c:if>
			 <c:if test="${user.isMember==3 }">
			  <div class="messlist">
			 	<label>审核状态： </label>
			 	<span>审核不通过</span>
			 </div>
			  <div class="messlist">
			 	<label>意见：</label>
				<textarea placeholder="未通过意见" disabled class="inputTextArea">${user.opinion }</textarea>
			  </div>
			 </c:if>
		     <div class="clears"></div>
		     <div class="messsub">
		      <input type="submit"  value="提交"  style="background:#c62d2b;color:#fff;" />
		      <input type="reset" value="重置" />
		     </div>
		</form>	
		</div>
		
		</div>
		
		<jsp:include page="../../home/bottom.jsp"></jsp:include>	
</div>
<script>
// 	var data = '${byCondition.contentTypeId }';
	$("#66666").css({"background": "#b9e1fb"});
	!function(){
	laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
	laydate({elem: '#demo'});//绑定元素
	}();
	//日期范围限制
	var start = {
	    elem: '#start',
	    format: 'YYYY-MM-DD',
	    min: '1900-06-16', //设定最小日期为当前日期
	    max: '2099-06-16', //最大日期
	    istime: true,
	    istoday: false,
	    choose: function(datas){
	         end.min = datas; //开始日选好后，重置结束日的最小日期
	         end.start = datas //将结束日的初始值设定为开始日
	    }
	};
	var end = {
	    elem: '#end',
	    format: 'YYYY-MM-DD',
	    min: laydate.now(),
	    max: '2099-06-16',
	    istime: true,
	    istoday: false,
	    choose: function(datas){
	        start.max = datas; //结束日选好后，充值开始日的最大日期
	    }
	};
	laydate(start);
	laydate(end);
	
	function doSubmit() {
		//身份证校验
		// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
		var id = $("#idCard").val(); 
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		if (reg.test(id) === false) {
			alert("身份证输入不合法");
			return false;
		}
		//手机号校验
		 var pattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^(([0\+]\d{2,3})?(0\d{2,3}))(\d{7,8})((\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
		if (!pattern.test($("#phone").val())) {
			alert("请输入合法手机号");
			return false;
		}
	}
</script> 
</body>
</html>