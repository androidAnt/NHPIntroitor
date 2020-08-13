<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="com.bluebird.framework.constant.SystemConstant" %>
<%@ page import="com.bluebird.components.common.TimeHelper" %>
<c:set var="root" value="<%=SystemConstant.HTTP_SERVERNAME_PATH%>"/>
<style>
	.div1{
		width:33%;
		height: 100%;
		float: left;
		display: flex;
		align-items: center;
		color: #ffffff;
	}
</style>
	<!--页脚区域-->
		<div class="footerWrap">
		
			<!-- <div class="foot-zt">
				办事机构链接
			</div> -->
			<div class="foot-wzlj" style="height:130px;" >
				<div class="div1">
					<div style="float: left; padding-left: 43%;">
							<img src="${root}/img/NHPBottom1.png" style="width:30px;" />
						</div>
						<div style="float: left; padding-left: 7px;">
							<div>
								公司地址
							</div>
							<div>
								西安市高新区高新一路创业大厦D座838
							</div>
						</div>
				</div>
				<div class="div1">
					<div style="float: left; padding-left: 32%;">
							<img src="${root}/img/NHPBottom2.png" style="width:30px;" />
						</div>
						<div style="float: left; padding-left: 7px;">
							<div>
								联系电话
							</div>
							<div>
								029-88717779 130-2296-1055
							</div>
						</div>
				</div>
				<div class="div1">
					<div style="float: left; padding-left: 12%;">
							<img src="${root}/img/NHPBottom3.png" style="width:30px;" />
						</div>
						<div style="float: left; padding-left: 7px;">
							<div>
								联系邮箱
							</div>
							<div>
								13022961055@qq.com
							</div>
						</div>
				</div>
			<!-- <ul>	
			<select class="selcss"
				onchange="javascript:window.open(this.options[this.selectedIndex].value);">
				<option value>工会网站</option>
				<option value="http://www.shxgh.org" target="_blank">陕西总工会</option>
			</select> &nbsp;&nbsp;&nbsp;
			<select class="selcss"
				onchange="javascript:window.open(this.options[this.selectedIndex].value);">
				<option value>集团网站</option>
				<option value="http://www.sxycpc.com" target="_blank">集团主网</option>
				<option value="http://cpjx.sxycpc.com" target="_blank">经销公司</option>
			</select> &nbsp;&nbsp;&nbsp;
			<select class="selcss"
				onchange="javascript:window.open(this.options[this.selectedIndex].value);">
				<option value>其他网站</option>
				<option>智慧工会系统</option>
				<option>智慧工会系统</option>
				<option>智慧工会系统</option>
			</select>
		</ul> -->
			</div>
			
			
			
			<hr style=" border: none;background-color: #7c7c7c;height: 1px;">
			
		<div class="footer w1200 cleafix">
		<ul>
			<li>
				<div class="fooM cleafix">
					<span style="font-size: 14px;">公司信息</span>
					<div class="divTxt fl" >
						<p style="color: #b3b0af; ">版权信息：西安新厚普软件科技有限公司</p>
						<!-- <p>技术支持：</p> -->
						<p style="color: #b3b0af;">服务范围：网站建设 | 网站开发 | 移动端开发 | 电商平台 | 公众号 | 小程序</p>
					</div>
				</div>
			</li>
			
			<!-- <li>
				<div class="fooM cleafix">
					<div class="divTxt fl">
						<p>版权信息</p>
						<p>陕西延长石油（集团）责任有限公司</p>
						<p>陕西延长石油（集团）责任有限公司</p>
					</div>
				</div>
			</li> -->
			
			<%-- <li class="cur1" >
			<div style="float: right;padding-right: 60%;">
				<span>公众号信息</span>
				<p style="text-align:center;">关注公众号</p>
				<img src="${root}/img/newewm.jpg" style="width:80px;" />
				</div>
			</li> --%>
			<li class="cur1" >
			<div  class="fooM cleafix" style="margin: auto 20%;">
				<span style="font-size: 14px;">关注公众号</span>
				<div class="divTxt fl" style="border-right:0px;">
					<!-- <p>关注公众号</p> -->
					<img src="${root}/img/newewm.jpg" style="width:80px; margin-top: 10px;" />
				</div>
			</div>
			</li>
		</ul>
	</div>
</div>