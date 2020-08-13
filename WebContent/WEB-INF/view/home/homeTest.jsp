<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<form id="form1" action="${root}/NHPWebsite/home/module/home" method="post" >
                <input type="hidden" name="height" id="height">
				<input type="hidden" name="width" id="width">
</form>
<script type="text/javascript">
window.onload = function () { 
        // 计算页面的摆放位置
		// 计算大小屏
		var height = window.screen.height;
		var width = window.screen.width;
		document.getElementById("height").value=height
		document.getElementById("width").value=width
		document.getElementById("form1").submit()
}
</script>