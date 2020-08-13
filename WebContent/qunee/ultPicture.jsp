<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="libs/bootstrap/css/bootstrap.css" />
<link rel="stylesheet" href="libs/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css" />
<link rel="stylesheet" href="src/css/graph.editor.css" />
<link rel="stylesheet" href="../components/dateRange/dateRange.css"/>
<link rel="stylesheet" href="../components/messenger/messenger.css"/>
<style type="text/css">
    .graph-editor__toolbar{
       text-align:right;
       padding-right:180px;
    }
</style>
<title>画图</title>
</head>
<body class="layout">
    <div  style="position:absolute;width:780px; height:20px; top:10px; left:20px; z-index:1;">
       <div class="col-md-2" style="width:280px;">
           <label class="radio-inline" >
             <input type="radio" name="templateType" id="templateType" value="99" checked>卧式
           </label>
           <label class="radio-inline" >
                  <input type="radio" name="templateType"  value="0" >立式
           </label>
           <label class="radio-inline" >
                  <input type="radio" name="templateType"  value="2" style="margin-top:7px;">
                   <select  class="form-control" id="handDrawnP" name="handDrawnP" style="margin-top:-7px;width:105px;" disabled>
                         
                   </select>
           </label>
       </div> 
       <div class="col-md-2" style="width:500px;">
           <label for="lasting" class="col-md-1" style="font-weight: normal; width:88px;">长度(cm)</label>
           <div class="col-md-2" style="padding:0px; ">
                <input type="number" class="form-control" name="lasting" id="lasting" min="1" step="1" style="width:90px; margin-top:-7px;"
                       oninput="if(value.length>4)value=value.slice(0,4)">
           </div>
           <label for="radius" class="col-md-1" style="margin-left:25px; font-weight: normal; width:88px;">直径(cm)</label>
           <div class="col-md-2" style="padding:0px;">
                <input type="number" class="form-control" name="radius" id="radius" min="1" step="1" style="width:90px; margin-top:-7px;"
                       oninput="if(value.length>4)value=value.slice(0,4)">
           </div>
           <div class="col-md-2" style="margin-left:5px; font-weight: normal; margin-top:-3px;">
                <button id="mine" class="btn btn-default btn-sm pull-right" type="button" style="margin-right: 1%;" title = "点击确认" >
		             <img src="../img/qd.png" >
		        </button>
           </div>
       </div>
    </div>  
    <div  style="position:absolute;width:130px; height:30px; top:7px; right:20px; z-index:1;">
	     <button id="save" class="btn btn-default btn-sm pull-right" type="button" style="margin-right: 1%;" title = "保存图形" >
		    <img src="../img/bc.png" >
		</button>
	    <button id="cancel" class="btn btn-default btn-sm pull-right" type="button" style="margin-right: 5%;" title = "取消画图" >
		    <img src="../img/cancel.png" >
		</button>
		<button id="exportP" class="btn btn-default btn-sm pull-right" type="button" style="margin-right: 5%;" title = "存为模板" data-toggle="modal" data-target="#handDrawn">
		    <img src="../img/daochu.png" >
		</button>
	</div>
	<div id="editor" data-options="region:'center'" ></div>
	<script type="text/javascript" src="qunee-min.js"></script>
	<script type="text/javascript" src="libs/jquery.min.js"></script>
	<script type="text/javascript" src="libs/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="libs/layout.border.js"></script>
	<script type="text/javascript" src="libs/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"></script>
	<script type="text/javascript" src="src/common/i18n.js"></script>
	<script type="text/javascript" src="src/common/DomSupport.js"></script>
	<script type="text/javascript" src="src/common/DragSupport.js"></script>
	<script type="text/javascript" src="src/common/FileSupport.js"></script>
	<script type="text/javascript" src="src/common/JSONSerializer.js"></script>
	<script type="text/javascript" src="src/common/Exportpane.js"></script>
	<script type="text/javascript" src="src/common/Toolbar.js"></script>
	<script type="text/javascript" src="src/common/ToolBox.js"></script>
	<script type="text/javascript" src="src/common/PopupMenu.js"></script>
	<script type="text/javascript" src="src/common/Propertypane.js"></script>
	<script type="text/javascript" src="src/common/GridBackground.js"></script>
	<script type="text/javascript" src="src/common/publicMethod.js"></script>
	<script type="text/javascript" src="src/graph.editor.js"></script>
	<script type="text/javascript" src="scripts/ShapeBase.js"></script>
	<script type="text/javascript" src="scripts/ShapeExtension.js"></script>
	<script type="text/javascript" src="../components/dateRange/dateRange.js"></script>
	<script type="text/javascript" src="../components/messenger/messenger.min.js"></script>
<!-- 点击导出图片弹出modal -->
<div id="handDrawn" class="modal fade" tabindex="-1" data-backdrop="static">
     <div class="modal-dialog" style="width:400px" >
        <div class="modal-content">
            <div class="modal-header">
                <div class="table-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">将该图存为模板</h4>
                </div>
            </div>
      <div class="modal-body table-responsive">
          <form  method="post" class="form-horizontal" name="form3" id="form3">
               <div class="form-group">
                    <label for="handDrawnName" class="col-sm-3 control-label">图形名称<span style="color:red;">*</span></label>
                    <div class="col-sm-9">
                         <input type="text" class="form-control" id="handDrawnName" name="handDrawnName" maxlength="15">
                          <span class="col1" style="color:red"></span>
                    </div>
               </div>
           </form>
       </div>
       <div class="modal-footer no-margin-top">
                <button type="button" class="btn btn-primary btn-sm" id="search_qx">取消</button>
                <button type="button" class="btn btn-success btn-sm" id="search_qd">确定</button>
            </div>
        </div>
    </div>
</div>


	<script type="text/javascript">
	    // 从跳转的页面获取路径的值
		var url = decodeURI(decodeURI(location.search));
		var resultUrl = url.split("?")[1]; //url地址?后面的值
		var array = resultUrl.split("&"); //将结果用&符分隔
		var dicName = array[0].split("=")[1]; //项目编码
		var inspectionId = array[1].split("=")[1]; //检验id
		var suId = array[2].split("=")[1]; //检验人员id
		var instrumentNo = array[3].split("=")[1]; //仪器编号id
    	var templateTypeFlag = $("input[name='templateType']:checked").val();
		// 加载图形页面的方法
		var graph = "";
		$('#editor').graphEditor({
			saveService : 'save',
			callback : function(editor) {
				graph = editor.graph;
				var background = new GridBackground(graph);
				graph.moveToCenter();
			}
		});
		
		// 延长鼠标放点上，信息存在的时间
		graph.enableTooltip = true;
        graph.tooltipDelay = 0;
        graph.tooltipDuration = 10000;
		
         // 页面加载进入去获取选中的图形和图形中设定的值，并将值显示在输入框
		 $(function() {
			// 获取页面进入单选框选中的值
			var templateType = $("input[name='templateType']:checked").val();
			$.ajax({
				type:"post",
				url:"../admin/mark/toGet",
				data:{
					templateType:templateType,
					dicName:dicName,
					inspectionId:inspectionId,
					suId:suId
				},
				success:function(res){
					if(res.status=='1'){
						// 将手绘图形下拉框填充满
						 if(res.handDrawns.length==0){
						    	$("#handDrawnP").append("<option value='0'>手动绘制</opion>");
						    }else{
						    	$("#handDrawnP").append("<option value='0'>手动绘制</opion>");
						    	for(var i=0;i<res.handDrawns.length;i++){
						    		$("#handDrawnP").append("<option value='"+res.handDrawns[i].handDrawnId+"'>"
						    				 +res.handDrawns[i].handDrawnName+"</opion>");
						    	}
						    }
						if(res.graphChart==null&&res.result2==""){
							graph.clear();   // 清空画布
						    graph.parseJSON(res.result1); // 显示模板
							// 将该模板的尺寸显示在input中
							$("#lasting").val(res.template.lasting);
							$("#radius").val(res.template.radius);
						}else{
							graph.clear();   // 清空画布
						    graph.parseJSON(res.result2); // 显示图形
						    // 将该模板的尺寸显示在input中
							$("#lasting").val(res.graphChart.lasting);
							$("#radius").val(res.graphChart.radius);
							// 设置选中的类型
							$("input:radio[name='templateType'][value='"+res.graphChart.templateType+"']").attr('checked','true'); 
							 if(res.graphChart.templateType=='2'){
		                        	$("#handDrawnP").attr("disabled",false);
		                        	$("#handDrawnP").val(res.graphChart.handDrawnId);
		                        }
						}
					}
				}
			});
		});
       
	    // 切换类型(立式或卧式)
	    $("input[name='templateType']").change(function(e){
	    	var templateType = $("input[name='templateType']:checked").val();
	    	if(graph._kjModel._j7[3]!=null){
	    		var changeType = confirm("改变类型会将之前所有图形清空")
			    if(changeType==true){
			    	drawgraph(templateType);
			    	if(templateType=='2'){
						// 如果类型是2(手动绘制),请求后台获取下拉框内容
						$("#handDrawnP").attr("disabled",false);
						graph.clear();   // 清空画布
					}
			    	templateTypeFlag = templateType;
			     }else{
				      $("input[name='templateType'][value='"+templateTypeFlag+"']").prop("checked",true);
			          return false;
			    }
	    	}else{
	    		drawgraph(templateType);
	    		if(templateType=='2'){
					// 如果类型是2(手动绘制),请求后台获取下拉框内容
					$("#handDrawnP").attr("disabled",false);
					graph.clear();   // 清空画布
				}
	    		return false;
	    	}
	    });

	    
	    // 改变长度和直径发生变化的点击事件
	    $("#mine").click(function(){
	    	var lasting = $("#lasting").val();
	    	var radius = $("#radius").val();
		    var templateType = $("input[name='templateType']:checked").val();
		    if(lasting<=0){
				alert("长度必须是大于0的数字");
			}else if(radius<=0){
				alert("直径必须是大于0的数字");
			}else if(graph._kjModel._j7[3]!=null){
				var changeLasting = confirm("改变长度或者直径会将之前所有图形清空")
				if(changeLasting==false){
				    return false;
				}else{
				    drawgraph(templateType);
				}
			}else{
			       drawgraph(templateType);
		    }
	    });
	    
	 // 初始化消息提示框
		 $._messengerDefaults = {
		    extraClasses: 'messenger-fixed messenger-theme-Future messenger-on-bottom messenger-on-right'
		 }
	 
	 // 手绘图形modal确认存为模板
		   $("#search_qd").click(function(){
			   var result = graph.exportJSON(true); 
			   var handDrawnName = $("#handDrawnName").val();
			   if(handDrawnName!=""){
				   $.ajax({
					   type:"post",
					   url:"../admin/mark/exportPicture",
					   data:{
						   dicName:dicName,
						   inspectionId:inspectionId,
						   suId:suId,
						   handDrawnName:handDrawnName,
						   result:result
					   },
					   success:function(res){
						   if(res.status=="1"){ // 成功
							   $("#handDrawnP").append("<option value='"+res.handDrawn.handDrawnId+"'>"+res.handDrawn.handDrawnName+"</option>");
							   $.globalMessenger().post({
								     message: "保存成功",
								     type: 'success',
								     hideAfter: 2,
							   });
						   }else{  // 失败
							   $.globalMessenger().post({
								     message: "保存失败",
								     type: 'info',
								     hideAfter: 2,
							   });
						   }
						   $('#handDrawn').modal('hide');
					   }
				   }); 
			   }else{
				   $(".col1").text("图形名称不能为空");
			   }
		   });
	 
		 // 手绘图形下拉切换显示  
		   $("#handDrawnP").change(function(){
				var handDrawnId = $("#handDrawnP option:selected").val();
				if(handDrawnId=='0'){
					graph.clear();   // 清空画布
				}else{
				   $.ajax({
					   type:"post",
					   url:"../admin/mark/radioSelect",
					   data:{
						   handDrawnId:handDrawnId 
					   },
					   success:function(res){
						   graph.clear();
						   graph.parseJSON(res); // 显示图形
					   }
				   });
				}
		   });
	    
	    // 保存图片
	    $("#save").click(function(){
	    	$("#save").prop("disabled",true);
	    	// 图形存储信息
	    	var scale = 1;  // 比例
	    	var clipBounds = graph.bounds;  // 当前文件信息
	    	var imageInfo = graph.exportImage(scale, clipBounds); // 导出方法
	    	var imageSrc = imageInfo.data;  // 获取文件二进制码
	    	// json传存储文件信息
	    	var result = graph.exportJSON(true);  // 将图片转为字符串
		    var lasting = $("#lasting").val();  // 图形长度
			var radius = $("#radius").val();    // 图形直径
			var handDrawnId = $("#handDrawnP option:selected").val();
			var handDrawnName = $("#handDrawnP option:selected").text();
			// 图形类型
		    var templateType = $("input[name='templateType']:checked").val();
		    $.ajax({
	    		type:"post",
	    		url:"../admin/ultPow/save",
	    		data:{
	    			result:result,
	    			dicName:dicName,
					inspectionId:inspectionId,
					templateType:templateType,
					handDrawnId:handDrawnId,
					handDrawnName:handDrawnName,
					lasting:lasting,
					radius:radius,
					imageSrc:imageSrc
	    		},
	    		success:function(res){
	    			$("#save").prop("disabled",false);
	    			localStorage.setItem("dicName",dicName);
	    			localStorage.setItem("instrumentNo",instrumentNo);
	    			window.history.go(-1); 
	    		}
	    	 }); 
	    });
	    
	    // 取消画图   
	    $("#cancel").click(function(){
		   localStorage.setItem("dicName",dicName);
		   localStorage.setItem("instrumentNo",instrumentNo);
		   window.history.go(-1); 
	    });
	    
	 	// 删除某个元素
	    graph.removeSelectionByInteraction = function (evt) {
            var selection = this.selectionModel.datas;
            Q.confirm("你确定要删除吗？", function () {
                this.removeSelection();
            }, this);
        }
	 	
	 	// 图形类型选中切换方法
	    function  drawgraph(templateType){
	    	if(templateType=='99'){
				metaHoriz();
			}else if(templateType=='0'){
				metaUpright();
			}
	    }
	    
	    // 长度失焦事件
	  	 $("#lasting").blur(function(){
	  		var lasting = $("#lasting").val();
	  		if(lasting<=0){
	  			alert("长度必须是大于0的数字");
		    }
	  	 });
	    
	     // 直径失焦事件
	  	 $("#radius").blur(function(){
	  		var radius = $("#radius").val();
	  		if(radius<=0){
	  			alert("直径必须是大于0的数字");
		    }
	  	 });
	     
          // 图形名称失焦判断
	  	  $("#handDrawnName").blur(function(){
	  		  var handDrawnName = $("#handDrawnName").val();
	  		  if(handDrawnName==""){
	  			  $(".col1").text("图形名称不能为空");
	  		  }else{
	  			  $(".col1").text("");
	  		  }
	  	  })
		  	
	  	 // 导出图形modal点击x号关闭监听
		    $(".close").click(function(){
		    	$('#handDrawn').modal('hide');
		    	// 将点的信息清空
		    	$("#handDrawnName").val(""); 
		    	$(".col1").text("");
		    });
	 	
		 // 取消存为模板
		    $("#search_qx").click(function () {
		    	$('#handDrawn').modal('hide');
		    	// 将点的信息清空
		    	$("#handDrawnName").val(""); 
		    	$(".col1").text("");
		    });
	  
	    // 当变化的是卧式长度和宽度时
	     function metaHoriz(){
		    var lasting = $("#lasting").val();
		    var radius = $("#radius").val();
	    	 var i =2;             // 比例
	    	 var ll = radius * i;  // 直径
		     var r = ll / 2;     // 半径
		     var x = lasting*i/2;  // x轴
		     var y = 0;            // y轴
		     var c = r * Math.tan(Math.PI / 8);
		     var d = r * Math.sin(Math.PI / 4);
		     graph.clear();  // 设置新的图形比例时将之前的画布清空
		     var shape = graph.createShapeNode(null,0,0);
		     // 矩形  
		     shape.moveTo(-x, r);
		     shape.lineTo(x, r);
		     shape.lineTo(x, -r);
		     shape.lineTo(-x, -r);
		     shape.lineTo(-x, r);
		     // 半圆
		     shape.moveTo(x, y - r);
		     shape.quadTo(x + c, y - r, x + d, y - d);
		     shape.quadTo(x + r, y - c, x + r, y);
		     shape.quadTo(x + r, y + c, x + d, y + d);
		     shape.quadTo(x + c, y + r, x, y + r);
		     // 反半圆
		     x = -x;
		     shape.moveTo(x, y - r);
		     shape.quadTo(x - c, y - r, x - d, y - d);
		     shape.quadTo(x - r, y - c, x - r, y);
		     shape.quadTo(x - r, y + c, x - d, y + d);
		     shape.quadTo(x - c, y + r, x, y + r);
		     shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape.set('ShapeType', 'NoOperation');   // 设置标识
		     // 中心线
		     var shape1 = graph.createShapeNode(null,0,0);
		     shape1.moveTo(-(-x+r+30), 0);
		     shape1.lineTo(-x+r+30, 0);
		     shape1.setStyle(Q.Styles.SHAPE_STROKE,1);
		     shape1.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape1.editable=false; 
		     shape1.movable=false;
		     shape1.parent = shape;
		     shape1.host = shape;
		     shape1.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape1.set('ShapeType', 'CENTERLine');   // 设置标识
	    } 
	     
	    // 当改变的是立式的长度和直径时
	    function metaUpright(){
	    	var lasting = $("#lasting").val();
		    var radius = $("#radius").val();
	    	 var i =2;             // 比例
	    	 var ll = radius * i;  // 直径
		     var r = ll/2;     // 半径
		     var x = lasting*i/2;  // x轴
		     var y = 0;            // y轴
		     var c = r * Math.tan(Math.PI / 8);
		     var d = r * Math.sin(Math.PI / 4);
	    	 graph.clear();  // 设置新的图形比例时将之前的画布清空
	    	 // 创建对象画平面图
		     var shape = graph.createShapeNode(null,0,0);
		     // 矩形  
		     shape.moveTo(-r, -x);
		     shape.lineTo(-r, x);
		     shape.lineTo(r, x);
		     shape.lineTo(r, -x);
		     shape.lineTo(-r, -x);
		     
		     // 上半圆
		     shape.moveTo(-r, y + x);
		     shape.quadTo(-r, y + x + c, -d, y + x + d);
		     shape.quadTo(-c, y + x + r, 0, y + x + r);
		     shape.quadTo(c, y + x + r, d, y + x + d);
		     shape.quadTo(r, y + x + c, r , y + x);
		     
		     // 下半圆
		     shape.moveTo(r, y - x);
		     shape.quadTo(r, y - x - c, d, y - x - d);
		     shape.quadTo(c, y - x - r, 0, y - x - r);
		     shape.quadTo(-c, y - x - r, -d, y - x - d);
		     shape.quadTo(-r, y - x - c, -r , y - x);
		     shape.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape.editable=false;
		     shape.set('ShapeType', 'NoOperation');   // 设置标识
		     
		     // 中心线
		     var shape1 = graph.createShapeNode(null,0,0);
		     shape1.moveTo(0, -(x+r+30));
		     shape1.lineTo(0, x+r+30);
		     shape1.setStyle(Q.Styles.SHAPE_STROKE,1);
		     shape1.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape1.editable=false; 
		     shape1.movable=false;
		     shape1.parent = shape;
		     shape1.host = shape;
		     shape1.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape1.set('ShapeType', 'CENTERLine');   // 设置标识
	    }
	</script>
</body>
</html>