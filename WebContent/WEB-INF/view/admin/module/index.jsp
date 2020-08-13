<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="adminCode" value="<%=SystemConstant.SYS_SUPER_ADMINCODE%>"/>
<style type="text/css">
body {
    background-color: white ! important;
    }
   th{
     text-align: center;
   }
.bootstrap-select>.dropdown-toggle {
    width: 166px!important;
}
.open .btn.dropdown-toggle, .open .btn-default.dropdown-toggle {
    background-color: #ffffff !important;
}
.btn, .btn-default, .btn:focus, .btn-default:focus {
    background-color: #ffffff !important;
}
.btn {
    color:#555!important;
    font-size: 14px!important;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0) !important
}
.btn:hover, .btn-default:hover, .btn:active, .btn-default:active, .open .btn.dropdown-toggle, .open .btn-default.dropdown-toggle{
     background-color: #ffffff !important;
/*      border-color:#ffffff !important; */
}
</style>
 <link rel="stylesheet" href="//apps.bdimg.com/libs/jqueryui/1.10.4/css/jquery-ui.min.css">
 <link rel="stylesheet" href="${root}/components/bootstrapSelect/dist/css/bootstrap-select.min.css">
  <script src="//apps.bdimg.com/libs/jquery/1.10.2/jquery.min.js"></script>
  <script src="//apps.bdimg.com/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
  <script src="${root}/components/bootstrapSelect/dist/js/bootstrap-select.min.js"></script>
<div class="row">
	<form id="form1" action="${root}/admin/module/doEdit" method="post" enctype="multipart/form-data">
<!--            <a style="top: -15px;left: -75px;" class="btn btn-xs btn-add pull-right" title="添加" href="javascript:void(0);" id="toAdd"> -->
<!--                 <i class="ace-icon fa fa-plus-square bigger-120"></i>添加 -->
<!--             </a> -->
		<div style="border: 1px solid #000000; width: 280px; height:  1110; position: absolute;
        top: 100px; left: 830px;">
        <table >
				<c:forEach items="${module.data}" var="list" varStatus="status">
				<input type="hidden" name="id" id="id" value="${list.id}">
				<input type="hidden" name="fileId" id="fileId${list.id}">
				<input type="hidden" name="level5" id="level5${list.id}">
					<tr style="height: 45px">
						<td><a style="font-size: 20px">${(module.pageNO-1)*module.pageSize+status.index+1}</a></td>
						<td><select  class="form-control" name="level1" id="level1${list.id}" onchange="onLevel2('${list.id}')" style="width: 166px;">
								<option value="0" >无</option>
								<c:forEach items="${menu}" var="menu">
									<option  value="${menu.dicCode}"${menu.dicCode==list.level1?'selected':''} >${menu.dicName}</option>
								</c:forEach>
						</select>
<!-- 						 <a class="btn btn-xs btn-danger deleteData " data-toggle="modal" data-target="#delData" -->
<%--                                     title="删除" data-fileId="${list.id}"> --%>
<!--                                 <i class="ace-icon fa fa-trash-o bigger-120"></i>删除 -->
<!--                             </a> -->
						</td>
					</tr>
                    <!--菜单 -->
					<tr id="trLevel2${list.id}" style="height: 45px;display:none;">
						<td></td>
						<td><select  class="form-control" name="level2" id="level2${list.id}" onchange="onFour('${list.id}')" style="width: 166px;" >
								<c:forEach items="${ghMenuManage}" var="menu">
									<option  value="${menu.menuId}"${menu.menuId==list.level2?'selected':''} >${menu.menuName}</option>
								</c:forEach>
						</select></td>
					</tr>
					<!-- 文章 图文 -->
					<tr id="trLevel4${list.id}" style="height: 45px;display:none;">
						<td></td>
						<td><select  class="form-control" name="level4" id="level4${list.id}" style="width: 166px;" >
								<c:forEach items="${selectByArticleType}" var="con">
									<option  value="${con.contentTypeId}"${con.contentTypeId==list.level2?'selected':''} >${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
                    <!-- 图片类型 图集 -->
                    <tr id="contentLevel3${list.id}" style="height: 45px;display:none;">
						<td></td>
						<td><select  class="form-control" name="level3" id="level3${list.id}" style="width: 166px;" >
								<c:forEach items="${ghContentType}" var="con">
									<option  value="${con.contentTypeId}"${con.contentTypeId==list.level2?'selected':''} >${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
                    <!--上传图片 -->
					<tr id="imgLevel2${list.id}" style="height: 32px;display:none;">
					<td></td>
						<td><iframe style="width: 250px;height:130px" id="imgUpload${list.id}" name="imgUpload"
								src="${root}/admin/fileupload/moduleUploadImgFiles"
								scrolling="yes" frameborder="no"></iframe></td>
					</tr>
                    <!--回显 -->
					<tr id="echo${list.id}" style="height: 32px;display:none;">
					    <td></td>
						<td style="width: 200px">${list.fileName} <a
							href="${root}/admin/fileupload/downloadById?fileId=${list.level2}">下载</a></td>
						</tr>
					<!--4个按钮 -->
                      <tr id="four0${list.id}" style="height: 32px;display:none;">
                      <td></td>
						<td><select  class="selectpicker" name="levelFour0" id="levelFour0${list.id}" style="width: 166px;" multiple="multiple" data-live-search="true" data-max-options="4" >
								<c:forEach items="${contentType0}" var="con">
									<option  value="${con.contentTypeId}">${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
					<tr id="four1${list.id}" style="height: 32px;display:none;">
                      <td></td>
						<td><select  class="selectpicker" name="levelFour1" id="levelFour1${list.id}" style="width: 166px;" multiple="multiple" data-live-search="true" data-max-options="4" >
								<c:forEach items="${contentType1}" var="con">
									<option  value="${con.contentTypeId}">${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
					<tr id="four2${list.id}" style="height: 32px;display:none;">
                      <td></td>
						<td><select  class="selectpicker" name="levelFour2" id="levelFour2${list.id}" style="width: 166px;" multiple="multiple" data-live-search="true" data-max-options="4" >
								<c:forEach items="${contentType2}" var="con">
									<option  value="${con.contentTypeId}">${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
					<tr id="four3${list.id}" style="height: 32px;display:none;">
                      <td></td>
						<td><select  class="selectpicker" name="levelFour3" id="levelFour3${list.id}" style="width: 166px;" multiple="multiple" data-live-search="true" data-max-options="4" >
								<c:forEach items="${contentType3}" var="con">
									<option  value="${con.contentTypeId}">${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
					<tr id="four4${list.id}" style="height: 32px;display:none;">
                      <td></td>
						<td><select  class="selectpicker" name="levelFour4" id="levelFour4${list.id}" style="width: 166px;" multiple="multiple" data-live-search="true" data-max-options="4" >
								<c:forEach items="${contentType4}" var="con">
									<option  value="${con.contentTypeId}">${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
					<tr id="four5${list.id}" style="height: 32px;display:none;">
                      <td></td>
						<td><select  class="selectpicker" name="levelFour5" id="levelFour5${list.id}" style="width: 166px;" multiple="multiple" data-live-search="true" data-max-options="4" >
								<c:forEach items="${contentType5}" var="con">
									<option  value="${con.contentTypeId}">${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
					 <!--6个按钮 -->
                      <tr id="six0${list.id}" style="height: 32px;display:none;">
                      <td></td>
						<td><select  class="selectpicker" name="levelSix0" id="levelSix0${list.id}" style="width: 166px;" multiple="multiple" data-live-search="true" data-max-options="6" >
								<c:forEach items="${contentType0}" var="con">
									<option  value="${con.contentTypeId}">${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
					<tr id="six1${list.id}" style="height: 32px;display:none;">
                      <td></td>
						<td><select  class="selectpicker" name="levelSix1" id="levelSix1${list.id}" style="width: 166px;" multiple="multiple" data-live-search="true" data-max-options="6" >
								<c:forEach items="${contentType1}" var="con">
									<option  value="${con.contentTypeId}"${con.contentTypeId==list.level3?'selected':''}>${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
					<tr id="six2${list.id}" style="height: 32px;display:none;">
                      <td></td>
						<td><select  class="selectpicker" name="levelSix2" id="levelSix2${list.id}" style="width: 166px;" multiple="multiple" data-live-search="true" data-max-options="6" >
								<c:forEach items="${contentType2}" var="con">
									<option  value="${con.contentTypeId}">${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
					<tr id="six3${list.id}" style="height: 32px;display:none;">
                      <td></td>
						<td><select  class="selectpicker" name="levelSix3" id="levelSix3${list.id}" style="width: 166px;" multiple="multiple" data-live-search="true" data-max-options="6" >
								<c:forEach items="${contentType3}" var="con">
									<option  value="${con.contentTypeId}">${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
					<tr id="six4${list.id}" style="height: 32px;display:none;">
                      <td></td>
						<td><select  class="selectpicker" name="levelSix4" id="levelSix4${list.id}" style="width: 166px;" multiple="multiple" data-live-search="true" data-max-options="6" >
								<c:forEach items="${contentType4}" var="con">
									<option  value="${con.contentTypeId}">${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
					<tr id="six5${list.id}" style="height: 32px;display:none;">
                      <td></td>
						<td><select  class="selectpicker" name="levelSix5" id="levelSix5${list.id}" style="width: 166px;" multiple="multiple" data-live-search="true" data-max-options="6" >
								<c:forEach items="${contentType5}" var="con">
									<option  value="${con.contentTypeId}">${con.contentTypeName}</option>
								</c:forEach>
						</select></td>
					</tr>
				</c:forEach>
			</table>
			<button id="submit"  class="btn btn-success btn-sm pull-right" type="submit" style="margin-left: 200px;top: -38px;position: absolute; ">&nbsp;&nbsp;确&nbsp;&nbsp;定&nbsp;&nbsp;</button>
			<button id="default"  class="btn btn-success btn-sm pull-right" type="submit" style="margin-left: 115px;top: -38px;position: absolute; ">恢复默认</button>
    </div>
		<div
			style="border: 1px solid #000; width: 800px; height: 1110px; position: absolute;
        top: 100px;">	
			<c:forEach items="${module.data}" var="list" varStatus="status">
			<input type="hidden" name="width" id="width${list.id}">
			<input type="hidden" name="top" id="top${list.id}">
			<input type="hidden" name="height" id="height${list.id}">
			<input type="hidden" name="theLeft" id="theLeft${list.id}">
				<div id="rr${list.id}" name="rrr"
					style=" width: ${list.width}px;  height: ${list.height}px; top: ${list.top}px; left:${list.theLeft}px; position: absolute; z-index: 1; cursor: move;">
					<a style="font-size: 20px">${(module.pageNO-1)*module.pageSize+status.index+1}</a>
				</div>
			</c:forEach>
			<hr style=" position:relative;top:348px;BORDER-BOTTOM-STYLE: dotted; BORDER-LEFT-STYLE: dotted; BORDER-RIGHT-STYLE: dotted; BORDER-TOP-STYLE: dotted" color=#111111 size=1>
			<hr style=" position:relative;top:696px;BORDER-BOTTOM-STYLE: dotted; BORDER-LEFT-STYLE: dotted; BORDER-RIGHT-STYLE: dotted; BORDER-TOP-STYLE: dotted" color=#111111 size=1>
		</div>
	</form>
</div>  
	<!--  删除 -->
  <div id="delData" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">删除</h4>
            </div>
            <div class="modal-body">
                <form action="${root}/admin/module/delete" method="post" id="delForm">
                    <input type="hidden" name="moduleId" id="moduleId">
                </form>
                		你确定要删除吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doDelData">确定</button>
            </div>
        </div>
    </div>
</div>
<form id="form2" action="${root}/admin/module/save" method="post">
</form>
<script type="text/javascript">
  var list = '${list}';
  var listStr = eval("("+list+")")
  var ghMenuManageList = '${ghMenuManageList}';
  var ghMenuManageListStr = eval("("+ghMenuManageList+")")
    $(function () {
		$("div[name='rrr']").draggable();
		$("div[name='rrr']").resizable();
	});
    $("#submit").click(function () {
		for (i=0; i<listStr.length; i++) {
		$('#width'+listStr[i].id).val($('#rr'+listStr[i].id).width()/800)	
		$('#top'+listStr[i].id).val($('#rr'+listStr[i].id).position().top/430)
		$('#height'+listStr[i].id).val($('#rr'+listStr[i].id).height()/430)	
		$('#theLeft'+listStr[i].id).val($('#rr'+listStr[i].id).position().left/800)
			var myselect = document.getElementById("level1" + listStr[i].id);
			var index = myselect.selectedIndex; // selectedIndex代表的是你所选中项的index
			if (myselect.options[index].value == 9) {
				var files = document.getElementById("imgUpload"+listStr[i].id).contentWindow.document.getElementsByTagName("a");
				if (files.length == 0) {
// 					showMes("0", "上传图片不能为空！");
// 					return false;
				} else {
					var fileId = files[0].getAttribute('value');
					$('#fileId' + listStr[i].id).val(fileId);
				}
			}else if(myselect.options[index].value == 6) {
			var level;
					for (y = 0; y < ghMenuManageListStr.length; y++) {
						if ($('#level2' + listStr[i].id).val() == ghMenuManageListStr[y].menuId) {
							level = $('#levelFour'+y+listStr[i].id).val()
							break;
						}
					}
				if (level) {
					$('#level5' + listStr[i].id).val(level.length)
				} else {
				    $('#level5' + listStr[i].id).val(0)
				}

			}else if(myselect.options[index].value == 11) {
			var levelSix;
					for (y = 0; y < ghMenuManageListStr.length; y++) {
						if ($('#level2' + listStr[i].id).val() == ghMenuManageListStr[y].menuId) {
							levelSix = $('#levelSix'+y+listStr[i].id).val()
							break;
						}
					}
					 
				if (levelSix) {
					$('#level5' + listStr[i].id).val(levelSix.length)
				} else {
				    $('#level5' + listStr[i].id).val(0)
				}
			}
		} 
    });
     //添加
    $("#toAdd").click(function () {
     if (listStr.length ==10) {
			showMes("0", "最多添加10条!");
			return false;
		}
        $('#form2').submit();
    });
    //准备删除信息
    $('.deleteData').click(function () {
        $('#moduleId').val($(this).attr('data-fileId'));
    });
    //执行删除操作
    $(".doDelData").click(function () {
        $("#delForm").submit();
    });
	//按钮
	function onFour(id) {
		var myselect = document.getElementById("level1" + id);
		var index = myselect.selectedIndex; // selectedIndex代表的是你所选中项的index
		for(i=0;i<ghMenuManageListStr.length;i++){
		 document.getElementById("four"+i+id).style.display = "none";
		 document.getElementById("six"+i+id).style.display = "none";
 		 $('#levelSix'+i+id).selectpicker('val',['noneSelectedText'])//回到初始状态
 		 $('#levelFour'+i+id).selectpicker('val',['noneSelectedText'])//回到初始状态
		 }
		if (myselect.options[index].value == 6) {
		for(i=0;i<ghMenuManageListStr.length;i++){
		  if($('#level2'+id).val()==ghMenuManageListStr[i].menuId){
		  document.getElementById("four" +i+id).style["display"] = null;
		  break;
		  }
		}
// 		var data = new FormData();
// 		data.append("id", $('#level2' + id).val());
// 				$.ajax({
// 					url : "${root}/admin/module/tbContentType",
// 					type : "post",
// 					data : data,
// 					async : false,
// 					dataType : "JSON",
// 					processData : false,
// 					contentType : false,
// 					success : function(data) {
// 				   $("#levelFour"+id).empty();
// 				   var listStr = eval("("+data+")")
// 					for (var i = 0; i < listStr.length; i++) {
// 					//添加option元素
// 						console.log('6',listStr[i])
// 						$("#levelFour"+id).append("<option value='" + listStr[i].contentTypeId + "'>" + listStr[i].contentTypeName + "</option>");
// 					}
// 				  }
// 				})
// $("#applyStatus").selectpicker('refresh');//刷新
			}else if(myselect.options[index].value == 11) {
					for (i = 0; i < ghMenuManageListStr.length; i++) {
						if ($('#level2' + id).val() == ghMenuManageListStr[i].menuId) {
							document.getElementById("six" + i + id).style["display"] = null;
							break;
						}
					}
			}
		}
	//触发二级
	function onLevel2(id) {
			var myselect = document.getElementById("level1" + id);
			var index = myselect.selectedIndex; // selectedIndex代表的是你所选中项的index
			for (i = 0; i < ghMenuManageListStr.length; i++) {
				document.getElementById("four" + i + id).style.display = "none";
				document.getElementById("six" + i + id).style.display = "none";
			}
			if ( myselect.options[index].value == 8) {
				document.getElementById("trLevel2" + id).style["display"] = null;
				document.getElementById("contentLevel3" + id).style.display = "none";
				document.getElementById("imgLevel2" + id).style.display = "none";
				document.getElementById("trLevel4" + id).style.display = "none";
			 } else if (myselect.options[index].value == 9) {
			    document.getElementById("imgLevel2" + id).style["display"] = null;
			    document.getElementById("contentLevel3" + id).style.display = "none";
			    document.getElementById("trLevel4" + id).style.display = "none";
			    document.getElementById("trLevel2" + id).style.display = "none";
			 }else if(myselect.options[index].value == 3){
			  document.getElementById("contentLevel3" + id).style["display"] = null;
			  document.getElementById("trLevel2" + id).style.display = "none";
			  document.getElementById("imgLevel2" + id).style.display = "none";
			  document.getElementById("trLevel4" + id).style.display = "none";
			 }else if(myselect.options[index].value == 2 ){
			    document.getElementById("trLevel4" + id).style["display"] = null; 
			    document.getElementById("trLevel2" + id).style.display = "none";
				document.getElementById("imgLevel2" + id).style.display = "none";
				document.getElementById("contentLevel3" + id).style.display = "none";
			 }else if(myselect.options[index].value == 6 || myselect.options[index].value == 11){
			    document.getElementById("trLevel2" + id).style["display"] = null;
			    onFour(id)
				document.getElementById("trLevel4" + id).style.display = "none";
				document.getElementById("imgLevel2" + id).style.display = "none";
				document.getElementById("contentLevel3" + id).style.display = "none";
			 }else {
		     	document.getElementById("trLevel2" + id).style.display = "none";
				document.getElementById("trLevel4" + id).style.display = "none";
				document.getElementById("imgLevel2" + id).style.display = "none";
				document.getElementById("contentLevel3" + id).style.display = "none";
				document.getElementById("echo" + id).style.display = "none";
			}
	}
	 //恢复默认
    $("#default").click(function () {
        $("#form1").attr('action',root+"/admin/module/default");
        $('#form1').submit();
    });
	//div颜色 
	document.onreadystatechange = function() {
		if (document.readyState == "complete") {
			for (i = 0; i < listStr.length; i++) {
			var rgb = ["rgb(233,145,234)","rgb(145,235,124)","rgb(134,149,234)"
	            ,"rgb(123,245,234)","rgb(135,199,144)","rgb(164,134,232)"
	            ,"rgb(233,145,134)","rgb(183,210,14)","rgb(168,111,111)"
	            ,"rgb(33,245,234)","rgb(163,156,32)","rgb(177,178,234)"
	            ,"rgb(199,155,214)","rgb(178,214,144)","rgb(188,145,14)"];
				document.getElementById("rr" + listStr[i].id).style.background = rgb[i];
				//默认二级展开
				var level1 =listStr[i].level1;
				if ( level1 == 8) {
					document.getElementById("trLevel2" + listStr[i].id).style["display"] = null;
				} else if (level1 == 9) {
					document.getElementById("imgLevel2" + listStr[i].id).style["display"] = null;
					if(listStr[i].fileName){
					document.getElementById("echo" + listStr[i].id).style["display"] = null;
					}
					$('#fileId' + listStr[i].id).val(listStr[i].level2);
				}else if (level1 == 3) {
				    document.getElementById("contentLevel3" + listStr[i].id).style["display"] = null;
				}else if(level1 == 2){
				    document.getElementById("trLevel4" + listStr[i].id).style["display"] = null;
				}else if(level1 == 6){
				    document.getElementById("trLevel2" + listStr[i].id).style["display"] = null;
					for (x = 0; x < ghMenuManageListStr.length; x++) {
						if ( listStr[i].level2 == ghMenuManageListStr[x].menuId) {
							document.getElementById("four" + x + listStr[i].id).style["display"] = null;
							 var arr=listStr[i].level3.split(",")
							if (arr) {
								var rtype = document.getElementById("levelFour"+x+listStr[i].id);
								for (var z = 0; z < rtype.options.length; z++) {
									for (var j = 0; j < arr.length; j++) {
										if (rtype.options[z].value == arr[j]) {
											rtype.options[z].selected = true;
										}
									}
								}
							}
							break;
						}
					}
				}else if( level1 == 11){
				document.getElementById("trLevel2" + listStr[i].id).style["display"] = null;
					for (x = 0; x < ghMenuManageListStr.length; x++) {
						if ( listStr[i].level2 == ghMenuManageListStr[x].menuId) {
							document.getElementById("six" + x + listStr[i].id).style["display"] = null;
							 var arr=listStr[i].level3.split(",")
							if (arr) {
								var rtype = document.getElementById("levelSix"+x+listStr[i].id);
								for (var z = 0; z < rtype.options.length; z++) {
									for (var j = 0; j < arr.length; j++) {
										if (rtype.options[z].value == arr[j]) {
											rtype.options[z].selected = true;
										}
									}
								}
							}
							break;
						}
					}
				}
			}
		}
	}
</script>