<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<%@ page import="com.bluebird.components.common.TimeHelper" %>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>
<!doctype html>
<html>
<head>
		<meta charset="UTF-8" />
		<meta name="renderer" content="webkit" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0,uc-fitscreen=yes" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
		<meta name="format-detection" content="telephone=no" />
		<title><%=SystemConstant.SYS_NAME%></title>
		<meta name="keywords" content="miniMobile的demo" />
		<meta name="description" content="miniMobile是一个简单易用的移动框架！" />
		<!-- ui css、js -->
		<link rel="stylesheet" type="text/css" href="${root }/css/miniMobile.css"/>
		<script type="text/javascript" src="${root }/js/zepto.min.js"></script>
		<script type="text/javascript" src="${root }/js/miniMobile.js"></script>
		<link rel="stylesheet" type="text/css" href="${root}/components/plugins/mobileSelect/mobileSelect.css">
		<script src="${root}/components/plugins/mobileSelect/mobileSelect.js" type="text/javascript"></script>
    <script type="text/javascript" src="${root}/js/rolldate.min.js"></script></body>
    <!-- 字体图标 -->
		<link rel="stylesheet" type="text/css" href="${root}/components/plugins/fonticon/iconfont.css" />
	</head>
<body class="pb12 fadeIn animated">
		<header class="ui-header clearfix w75 h8 f46 pl3 pr3 color8 bg-color-primary t-c o-h">
			<div class="ui-header-c fl f30 w64">
				我要入会
			</div>
			<div>
<%-- 				<a href="${root }/app/module" class="icon color8 iconfont icon-home_light"></a> --%>
			<input type="image" style="width: 21px;height: 21px;padding-top: 2px;padding-right: 2px;" src="${root }/img/return.png"   onclick="javascript:history.go(-1);"/>
			</div>
		</header>
		<div class="p3 f30 f30 w75">
			<form action="${root }/app/module/myInitiation" method="get" id="backForm" class="join" onsubmit="return doSubmit();">
				<div class="pt2 pb2">
					<label class="label-class-user">姓名<span style="color:red;">*</span>：</label>
					<input type="text" required maxlength="20" value="${user.realName }" class="w45  form-control" name="realName" placeholder="输入姓名" />
				</div>
				
				<div class="mt4 mb4">
					<label class="label-class-user">性别<span style="color:red;">*</span>：</label>
					<label class="mr3"><input type="radio" class="check" name="gender" <c:if test="${empty user.gender || user.gender == '0'}">checked="checked"</c:if> value="0"/>男</label>
					<label class="mr3"><input type="radio" class="check" name="gender" <c:if test="${ user.gender == '1'}">checked="checked"</c:if> value="1" />女</label>
				</div>
				<div class="pt2 pb2">
					<label class="label-class-user">民族<span style="color:red;">*</span>：</label>
					<input type="text" name="nation" required maxlength="20" value="${user.nation }" class="w45  form-control" placeholder="输入民族" />
				</div>
				<div class="pt2 pb2">
					<label class="label-class-user">身份证号<span style="color:red;">*</span>：</label>
					<input type="text" name="idCard" id="idCard" required maxlength="18" value="${user.idCard }" class="w45  form-control" placeholder="输入身份证号" />
				</div>
				<div class="pt2 pb2">
					<label class="label-class-user">出生日期<span style="color:red;">*</span>：</label>
					<input type="text"  name="birthday" required id="date-group1-2" placeholder="请选择时间" class="w45  form-control" value="${user.birthday }"/>
				</div>
				<div class="pt2 pb2">
					<label class="label-class-user">电话<span style="color:red;">*</span>：</label>
					<input type="text" name="phone" id="phone" required maxlength="11" value="${user.phone }" class="w45  form-control" placeholder="输入电话" />
				</div>
				<div style="padding-bottom: 10px;">
					<label class="label-class-user">学历<span style="color:red;">*</span>：</label>
					<div id="educationselect" class="form-control w45 h7" style="display: inline-block; background: url(img/select.png) center right no-repeat; background-size:auto 100%;">
						<span class="color3">请选择</span>
					</div>
				</div>
				<input type="hidden" name="education" id="education"  value="${user.education }"> 
				<input type="hidden" name="politicalStatus"  id="politicalStatus"  value="${user.politicalStatus }"> 
				<div style="padding-bottom: 10px;">
					<label class="label-class-user">政治面貌<span style="color:red;">*</span>：</label>
					<div id="selectBox" class="form-control w45 h7" style="display: inline-block; background: url(img/select.png) center right no-repeat; background-size:auto 100%;">
						<span class="color3">请选择</span>
					</div>
				</div>
				
				 <div >
					 <label class="label-class-user">工资：</label>
					<input type="number" name="wage" value="${user.wage }" class="w45  form-control" oninput="if(value.length>8)value=value.slice(0,8)"  max="99999999" />
				</div>
				
				<div class="pt2 pb2">
					<label class="label-class-user">单位及职务<span style="color:red;">*</span>：</label>
					<input type="text" name="position" required maxlength="50" value="${user.position }" class="w45  form-control" placeholder="输入工作单位" />
				</div>
				<div class="pt2 pb2">
					<label class="label-class-user">籍贯<span style="color:red;">*</span>：</label>
					<input type="text" value="${user.hometown }" name="hometown" required maxlength="30" class="w45  form-control" placeholder="输入籍贯" />
				</div>
				<div class="pt2 pb2">
					<label class="label-class-user">出生地址<span style="color:red;">*</span>：</label>
					<input type="text" required maxlength="30" name="birthplace" value="${user.birthplace }" class="w45  form-control" placeholder="输入出生地址" />
				</div>
				<div class="mt4 mb4">
					<label class="label-class-user">备注：</label>
					<textarea class="w45 h20 form-control" name="remark"  maxlength="50"  placeholder="备注">${user.remark }</textarea>
				</div>
			<c:if test="${user.isMember==2 }">
				<div class="mt4 mb4">
					<label class="label-class-user">审核状态： </label> <span>未审核</span>
				</div>
			</c:if>
			<c:if test="${user.isMember==3 }">
				<div class="mt4 mb4">
					<label class="label-class-user">审核状态： </label> <span>审核不通过</span>
				</div> 
				<div class="mt4 mb4">
					<label class="label-class-user">意见：</label>
					<textarea placeholder="未通过意见" style="background-color: #fff;" disabled class="w45 h20 form-control">${user.opinion }</textarea>
				</div>
			</c:if>
			<div class="t-c mt5" style="padding-bottom: 66px;">
					<input type="submit"  class="btn f30 btn-primary radius10 p2 w45" value="提交申请" />
				</div>
			</form>
		</div>
		<nav class="demo-bottomNav mt6 w75 h12 pt1 t-c f28 bg-color8 o-h clearfix">
			<jsp:include page="../bottom.jsp"></jsp:include>
		</nav>
		<script type="text/javascript">
       new Rolldate({
				el: '#date-group1-2',
				format: 'YYYY-MM-DD',
				beginYear: 1900,
				endYear: 2100
			})
		var education = '${education}';
		var userJson = '${userJson}';
		var politicsStatus = '${politicsStatus}';
		var educationStr = eval("(" + education + ")"); //学历
		var politicsStatusStr = eval("(" + politicsStatus + ")"); //政治面貌
		var userJsonStr = eval("(" + userJson + ")"); //政治面貌
		var educationData = []
		var addressArr = []
		$(function(){
		for (i = 0; i < educationStr.length; i++) {
		educationData.push({
					code:educationStr[i].dicCode ,
					value: educationStr[i].dicName,
				})
				if(educationStr[i].dicCode==userJsonStr.education){
				$('#educationselect').text( educationStr[i].dicName)
				}
			};
			var mobileSelect2 = new MobileSelect({
				trigger: '#educationselect',
				title: '学历选择',
				wheels: [{
					data: educationData
				}],
				position: [1,1], //初始化定位 打开时默认选中的哪个 如果不填默认为0
				callback: function(indexArr, data) {
				$('#education').val(data[0].code)
				},
			});
				for (i = 0; i < politicsStatusStr.length; i++) {
					addressArr.push({
						code : politicsStatusStr[i].dicCode,
						value : politicsStatusStr[i].dicName,
					})
					if (politicsStatusStr[i].dicCode == userJsonStr.politicalStatus) {
						$('#selectBox').text(politicsStatusStr[i].dicName)
					}
				}
				;
				//mobileselect 下拉选择框
				var mobileSelect1 = new MobileSelect({
				trigger: '#selectBox',
				title: '政治面貌选择',
				wheels: [{
					data: addressArr
				}],
				position: [1, 1], //初始化定位 打开时默认选中的哪个 如果不填默认为0
				callback: function(indexArr, data) {
					$('#politicalStatus').val(data[0].code)
				}
			});
		})
		
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
		var education = $('#education').val()
				if (!education) {
					alert("请输入学历")
					return false;
				}
		var politicalStatus = $('#politicalStatus').val()
				if (!politicalStatus) {
					alert("请输入政治面貌")
					return false;
				}
			}	
		</script>
	</body>

</html>