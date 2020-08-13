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
             <input type="radio" name="templateType" id="templateType" value="1" checked>卧式
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
	<!-- 特殊点弹出框 -->
	<!-- data-backdrop="static"点击空白区域 -->
 <div id="special" class="modal fade" tabindex="-1" data-backdrop="static">
    <div class="modal-dialog" style="width:600px" >
        <div class="modal-content">
            <div class="modal-header">
                <div class="table-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">智能标点</h4>
                </div>
            </div>
      <div class="modal-body table-responsive">
          <form  method="post" class="form-horizontal" name="form2" id="form2">
            <div class="form-group">
              <label for="markName" class="col-sm-2 control-label" >点位编号</label>
              <div class="col-sm-4">
                  <input type="text" class="form-control" id="markName"  name="markName"  disabled>
              </div>
              <label for="markLand" class="col-sm-2 control-label" >测点壁厚<span style="color:red;">*</span></label>
              <div class="col-sm-4">
                  <input type="number" min="1" step="0.01" class="form-control" id="markLand"  name="markLand"
                         oninput="if(value.length>6)value=value.slice(0,6)">
                  <span class="col1" style="color:red"></span>
              </div>
            </div>
            <div class="form-group" hidden>
              <label for="xCoordinate" class="col-sm-2 control-label">x轴坐标</label>
               <div class="col-sm-4">
                  <input type="number" step="0.01" class="form-control" id="xCoordinate"  name="xCoordinate">
               </div>
               <label for="yCoordinate" class="col-sm-2 control-label">y轴坐标</label>
               <div class="col-sm-4">
                  <input type="number" step="0.01" class="form-control" id="yCoordinate"  name="yCoordinate">
               </div>
           </div>
            <div class="form-group">
               <label  class="col-sm-2 control-label">标点方式</label>
               <div class="col-md-4">
                  <label class="radio-inline">
                      <input type="radio" name="type" class="type"  value="0">点在筒体上
                  </label>
               </div>
               <div class="col-md-4">
                  <label class="radio-inline">
                      <input type="radio" name="type" class="type"  value="1" >点在封头上
                  </label>
               </div>
            </div>
            <div style="border:1px solid #eeeeee;">
            <div class="form-group" style="margin-top:15px;">
              <label class="col-sm-1 control-label" style="width:11.333333%;">x轴</label>
              <label for="xReference" class="col-sm-1" style="width:46px;padding:7px 0 0 2px; margin-left:2px;">参照物</label>
              <div class="col-sm-3">
                  <select class="form-control" id="xReference" name="xReference"></select>
              </div>
              <label for="xDirection" class="col-sm-2" style="width:32px;padding:7px 0 0 2px; margin-left:5px;">方向</label>
              <div class="col-sm-2">
                  <select class="form-control" id="xDirection" name="xDirection"></select>
              </div>
              <label for="xValue " class="col-sm-1" style="width:36px;padding:7px 0 0 2px; margin-left:5px;">距离<span style="color:red;">*</span></label>
              <div class="col-sm-3" >
                  <input type="number" class="form-control" id="xValue" min="1" step="0.01" name="xValue"
                         oninput="if(value.length>5)value=value.slice(0,5)">
                   <span class="col2" style="color:red"></span>
              </div>
            </div>
             <div class="form-group">
              <label class="col-sm-1 control-label" style="width:11.333333%;">y轴</label>
              <label for="yReference" class="col-sm-1" style="width:46px;padding:7px 0 0 2px; margin-left:2px;">参照物</label>
              <div class="col-sm-3">
                  <select class="form-control" id="yReference" name="yReference"></select>
              </div>
              <label for="yDirection" class="col-sm-2" style="width:32px;padding:7px 0 0 2px; margin-left:5px;">方向</label>
              <div class="col-sm-2">
                  <select class="form-control" id="yDirection" name="yDirection"></select>
              </div>
              <label for="yValue " class="col-sm-1" style="width:36px;padding:7px 0 0 2px; margin-left:5px;">距离<span style="color:red;">*</span></label>
              <div class="col-sm-3" >
                  <input type="number" class="form-control" id="yValue" min="1" step="0.01"  name="yValue "
                  oninput="if(value.length>5)value=value.slice(0,5)">
                   <span class="col3" style="color:red"></span>
               </div>
             </div>
            </div>
            <div style="border:1px solid #eeeeee; margin-top:10px;">
             <div class="form-group" style="margin-top:15px;">
              <label for="referenceR" class="col-sm-2 control-label">参照物</label>
              <div class="col-sm-3" style="width:27%">
                  <select class="form-control" id="referenceR" name="referenceR"></select>
              </div>
              <label for="angle" class="col-sm-2" style="width:38px;padding:7px 0 0 2px; margin-left:5px;">角度<span style="color:red;">*</span></label>
               <div class="col-sm-2">
                  <input type="number" min="1" class="form-control" id="angle"  name="angle"
                  oninput="if(value.length>3)value=value.slice(0,3)">
                   <span class="col4" style="color:red"></span>
               </div>
               <label for="distance" class="col-sm-1" style="width:36px;padding:7px 0 0 2px; margin-left:5px;">距离<span style="color:red;">*</span></label>
               <div class="col-sm-3">
                  <input type="number" min="1" step="0.01" class="form-control" id="distance"  name="distance"
                   oninput="if(value.length>5)value=value.slice(0,5)">
                    <span class="col5" style="color:red"></span>
               </div>  
              </div>
            </div>
           </form>
        </div>
         <div class="modal-footer no-margin-top">
                <button type="button" class="btn btn-primary btn-sm" id="search_no">取消</button>
                <button type="button" class="btn btn-success btn-sm" id="search_yes">确定</button>
            </div>
        </div>
    </div>
</div> 

<!-- 点击导出图片弹出modal -->
<div id="handDrawn" class="modal fade" tabindex="-1" data-backdrop="static">
     <div class="modal-dialog" style="width:400px" >
        <div class="modal-content">
            <div class="modal-header">
                <div class="table-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="close1">
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
                          <span class="col6" style="color:red"></span>
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
	
<!-- 其他类型弹出modal -->
<div id="otherType" class="modal fade" tabindex="-1" data-backdrop="static">
    <div class="modal-dialog" style="width:600px" >
        <div class="modal-content">
            <div class="modal-header">
                <div class="table-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="close2">
                    <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">智能标点</h4>
                </div>
            </div>
      <div class="modal-body table-responsive">
          <form  method="post" class="form-horizontal" name="form2" id="form2">
            <div class="form-group">
              <label for="markNameT" class="col-sm-2 control-label" >点位编号</label>
              <div class="col-sm-4">
                  <input type="text" class="form-control" id="markNameT"  name="markNameT"  disabled>
              </div>
              <label for="markLandT" class="col-sm-2 control-label" >测点壁厚<span style="color:red;">*</span></label>
              <div class="col-sm-4">
                  <input type="number" min="1" step="0.01" class="form-control" id="markLandT"  name="markLandT"
                         oninput="if(value.length>6)value=value.slice(0,6)">
                  <span class="col7" style="color:red"></span>
              </div>
            </div>
            <div class="form-group">
              <label for="xCoordinateT" class="col-sm-2 control-label">x轴坐标<span style="color:red;">*</span></label>
               <div class="col-sm-4">
                  <input type="number" step="0.01" class="form-control" id="xCoordinateT"  name="xCoordinateT">
                    <span class="col8" style="color:red"></span>
               </div>
               <label for="yCoordinateT" class="col-sm-2 control-label">y轴坐标<span style="color:red;">*</span></label>
               <div class="col-sm-4">
                  <input type="number" step="0.01" class="form-control" id="yCoordinateT"  name="yCoordinateT">
                    <span class="col9" style="color:red"></span>
               </div>
             </div>
           </form>
        </div>
         <div class="modal-footer no-margin-top">
                <button type="button" class="btn btn-primary btn-sm" id="no">取消</button>
                <button type="button" class="btn btn-success btn-sm" id="yes">确定</button>
            </div>
        </div>
    </div>
</div> 

<div class="pointFlag" hidden></div>

<script type="text/javascript">
	    // 从跳转的页面获取路径的值
		var url = decodeURI(decodeURI(location.search));
		var resultUrl = url.split("?")[1]; //url地址?后面的值
		var array = resultUrl.split("&"); //将结果用&符分隔
		var dicName = array[0].split("=")[1]; //项目编码
		var inspectionId = array[1].split("=")[1]; //检验id
		var suId = array[2].split("=")[1]; //检验人员id
		var instrumentNo = array[3].split("=")[1]; //检验仪器编号
    	var templateTypeFlag = $("input[name='templateType']:checked").val();
		// 每次添加点位的编号
		var n = 1;
		// 添加点位的标识,点击确认后true,编号++
		var flag = false;
		var syncA;
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
					// 显示模板
					if(res.graphChart==null&&res.result2==""){
						graph.clear();   // 清空画布
						if(res.result1!=""){
					        graph.parseJSON(res.result1); // 显示模板
					        graph.zoomToOverview();
					        graph.zIndex = -1;
						}
				        graph.forEach(function (e) {
				            if (e.get('ShapeType') == 'ParentNode') {
				            	syncA=e;
				                return false;
				            }
				        });
						// 将该模板的尺寸显示在input中
						$("#lasting").val(res.template.lasting);
						$("#radius").val(res.template.radius);
						
						// 显示图形
					}else{
						graph.clear();   // 清空画布
						if(res.result2!=""){
					       graph.parseJSON(res.result2); // 显示图形
						}
					    // 将该模板的尺寸显示在input中
						$("#lasting").val(res.graphChart.lasting);
						$("#radius").val(res.graphChart.radius);
						n = parseInt(res.graphChart.maxNumber);
						flag = true;
						// 设置选中的类型
						$("input:radio[name='templateType'][value='"+res.graphChart.templateType+"']").attr('checked','true');
                        if(res.graphChart.templateType=='2'){
                        	$("#handDrawnP").attr("disabled",false);
                        	$("#handDrawnP").val(res.graphChart.handDrawnId);
                        }
					}
				}
			});
		});
		
	    // 切换类型(立式或卧式)
	    $("input[name='templateType']").change(function(){
	    	var templateType = $("input[name='templateType']:checked").val();
	    	if(graph._kjModel._j7[11]!=null){
	    		var changeType = confirm("改变类型会将之前所有点位和图形清空")
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
	    	flag=false;
	    	n=1;
		    var templateType = $("input[name='templateType']:checked").val();
		    if(lasting<=0){
				alert("长度必须是大于0的数字");
			}else if(radius<=0){
				alert("直径必须是大于0的数字");
			}else if(graph._kjModel._j7[11]!=null){
				var changeLasting = confirm("改变长度或者直径会将之前所有点位和图形清空")
				if(changeLasting==false){
				    return false;
				}else{
				    drawgraph(templateType);
				}
			}else{
			       drawgraph(templateType);
		    }
	    });
	    
		// 点的类型
		var markType = "";
		// 点的对象存放在集合中
	    var listPoint = Array();
		// 当拖动点位时，进行判断
        graph.onElementCreated = function (element, evt, dragInfo) {
            Q.Graph.prototype.onElementCreated.call(this, element, evt, dragInfo);
            var templateType = $("input[name='templateType']:checked").val();
            if (element instanceof Q.Node) {
            	markType = element.type;
            	if(flag==true){
                	n++;
                }
            	// 判断拖进来的点的图形模板不是其他类型时
            	if(templateType!='2'){
            		if(markType=='普通点'||markType=='特殊点'){
                		// 设置编号
                    	$("#markName").val(n);
                    	$("#special").modal("show");
                    	// 公用方法(获取点到距离焊缝位置,并给下拉框赋值)
                    	publicMethodMark(element);
                	}
            	}else if(templateType=='2'){
            		if(markType=='普通点'||markType=='特殊点'){
            			var xCoordinate = element.location.x.toFixed(2);
                    	var yCoordinate = element.location.y.toFixed(2);
                		// 设置编号
                		$("#markNameT").val(n);
                		$("#xCoordinateT").val(xCoordinate);
                		$("#yCoordinateT").val(yCoordinate);
            			$("#otherType").modal("show");
                	}
            	}
                return;
            }
        }
		
	    // 卧式立式打点modal点击确定
	    $("#search_yes").click(function(){
	        // 打点方式
	        var type = $("input[name='type']:checked").val();
	        // 图形类型
	    	var templateType = $("input[name='templateType']:checked").val();
	    	// 获取拖动标点的x轴和y轴的位置及点位编号
            var markName = $("#markName").val();   // 点位编号
	    	var markLand = $("#markLand").val();   // 壁厚值
	    	 // 获取参照物标点的信息
	    	var xReference = $("#xReference option:selected").val(); // x轴参照物
	    	var xDirection = $("#xDirection option:selected").val(); // x轴方向
	    	var xValue = $("#xValue").val(); // x轴的值
	    	var yReference = $("#yReference option:selected").val(); // y轴参照物
	    	var yDirection = $("#yDirection option:selected").val(); // y轴方向
	    	var yValue = $("#yValue").val(); // y轴的值
	    	var angle = $("#angle").val();   // 角度值
	    	var distance = $("#distance").val(); // 距离值
	    	var referenceR = $("#referenceR option:selected").val();; // 距离值
	    	var pointFlag = $(".pointFlag").val();
	    	// 判断点位类型
	    	if(markType=="普通点"){
	    		var pointColor = "#0F0";
	    		markPointRefer(pointColor,type,templateType,markName,markLand,xReference,xDirection,xValue,
	    				yReference,yDirection,yValue,angle,distance,referenceR,pointFlag);
	    	}else{
    		    var pointColor = "#F00";
    		    markPointRefer(pointColor,type,templateType,markName,markLand,xReference,xDirection,xValue,
    		    		yReference,yDirection,yValue,angle,distance,referenceR,pointFlag);
	    	}
	    	flag = true;
	    });
	    
	    // 手绘图形打点的modal框确认
	    $("#yes").click(function(){
	    	// 图形类型
	    	var templateType = $("input[name='templateType']:checked").val();
	    	// 获取拖动标点的x轴和y轴的位置及点位编号
            var markName = $("#markNameT").val();   // 点位编号
	    	var markLand = $("#markLandT").val();   // 壁厚值
	    	var xPoint = $("#xCoordinateT").val();
    		var yPoint = $("#yCoordinateT").val();
    		var pointFlag = $(".pointFlag").val();
	    	var xCoordinate = parseInt(xPoint);
	    	var yCoordinate = parseInt(yPoint);
    		if(markLand!=""&&xCoordinate!=""&&yCoordinate!=""){
    			if(pointFlag=="1"){
    	   	        var model = graph.graphModel;  // 获取对象
    	   	        model.remove(element);         // 删除对象
    	   		   }
    			// 创建点位
    	    	var markPoint = graph.createNode("" + markName + "", parseFloat(xCoordinate), parseFloat(yCoordinate));
    	    	markPoint.image = 'lamp'; 
    	    	if(markType=="普通点"){
    	    		var pointColor = "#0F0";
    	    	}else if(markType=="特殊点"){
    	    		var pointColor = "#F00";
    	    	}
    	    	markPoint.setStyle(Q.Styles.RENDER_COLOR, ""+pointColor+"",'2');
    	    	markPoint.zIndex = 1;
    	    	// 设置点的属性
    	    	markPoint.set("markName",markName);
    	    	markPoint.set("templateType",templateType);
    	    	markPoint.set("markLand",markLand);
    	    	markPoint.set("markType",markType);
    	    	markPoint.set("type","2");
    	    	markPoint.set("xCoordinate",xCoordinate);
    	    	markPoint.set("yCoordinate",yCoordinate);
    	    	markPoint.tooltip = "点位编号："+markName+"<br/>测点壁厚："+markLand+"<br/>x轴坐标："
    	    	         +xCoordinate+"<br/>y轴坐标："+yCoordinate;
      	        // 将点的信息清空
    	    	$("#markLandT").val(""); 
    	    	$("#xCoordinate").val(""); 
    	    	$("#yCoordinate").val(""); 
    	    	$(".col7").text("");
    	    	$(".col8").text("");
    	    	$(".col9").text("");
    	    	$('#otherType').modal('hide'); // 隐藏modal  
    	    	flag = true;
    		}else if(markLand==""){
    			$(".col7").text("壁厚值不能为空");
    		}else if(xCoordinate==""){
    			$(".col8").text("x轴坐标不能为空");
    		}else if(yCoordinate==""){
    			$(".col9").text("y轴坐标不能为空");
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
			   $(".col6").text("图形名称不能为空");
		   }
	   });
	     
	   // 手绘图形下拉切换显示  
	   $("#handDrawnP").change(function(){
			var handDrawnId = $("#handDrawnP option:selected").val();
			n = 1;
			flag = false;
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
	  
	   //保存图形 
       $("#save").click(function(){
    	   $("#save").prop("disabled",true);
    	   var arr = graph._kjModel._j7;
    	   for(var i=0;i<arr.length;i++){
    		   if(arr[i].image=='lamp'){
    			// 存放点属性
   		    	var obj = {};
   		    	obj["markName"] = arr[i].get("markName");
   		    	obj["markLand"] = arr[i].get("markLand");
   		    	obj["xCoordinate"] = arr[i].get("xCoordinate");
   		    	obj["yCoordinate"] = arr[i].get("yCoordinate");
   		    	var type = arr[i].get("type");
   		    	obj["type"] = type; 
   		    	if(type=="0"){ // 点在筒体
		    		obj["xReference"] = arr[i].get("xReference");
			    	obj["xDirection"] = arr[i].get("xDirection");
			    	obj["xValue"] = arr[i].get("xValue");
			    	obj["yReference"] = arr[i].get("yReference");
			    	obj["yDirection"] = arr[i].get("yDirection");
			    	obj["yValue"] = arr[i].get("yValue");
			    	listPoint.push(obj);  // 添加到数组 
		    	}else if(type=="1"){  // 点在封头
		    		obj["referenceR"] = arr[i].get("referenceR");
			    	obj["angle"] = arr[i].get("angle");
			    	obj["distance"] = arr[i].get("distance");
			    	listPoint.push(obj);  // 添加到数组 
		    	}else if(type=="2"){
    				listPoint.push(obj);  // 添加到数组 
    			}  
    		  }   
    	   }
    	    
    	    var scale = 1;  // 比例
	    	var clipBounds = graph.bounds;  // 当前文件信息
	    	var imageInfo = graph.exportImage(scale, clipBounds); // 导出方法
	    	var imageSrc = imageInfo.data;  // 获取文件二进制码
    	
	    	// 将集合转为json对象
            var listAllPoint= JSON.stringify(listPoint);
            var result = graph.exportJSON(true);  // 将图片转为字符串
	    	var lasting = $("#lasting").val();  // 图形长度
			var radius = $("#radius").val();    // 图形直径
			var handDrawnId = $("#handDrawnP option:selected").val();
			var handDrawnName = $("#handDrawnP option:selected").text();
			// 图形类型
	    	var templateType = $("input[name='templateType']:checked").val();
        	$.ajax({
    		type:"post",
    		url:"../admin/mark/doAdd",
    		data:{
    			result:result,
    			listAllPoint:listAllPoint,
    			dicName:dicName,
				inspectionId:inspectionId,
				templateType:templateType,
				handDrawnId:handDrawnId,
				handDrawnName:handDrawnName,
				lasting:lasting,
				radius:radius,
				imageSrc:imageSrc,
				maxNumber:n
    		},
    		success:function(res){
    			$("#save").prop("disabled",false);
    			localStorage.setItem("dicName",dicName);
    			localStorage.setItem("instrumentNo",instrumentNo);
    			window.history.go(-1); 
    		}
    	  });     
       });     
	    
	 	// 删除某个元素
	    graph.removeSelectionByInteraction = function (evt) {
            var selection = this.selectionModel.datas;
            Q.confirm("你确定要删除吗？", function () {
                this.removeSelection();
            }, this);
        }
	 	
       // 标点时将之前拖动过来的点位删除
       var model = graph.graphModel;
       model.listChangeDispatcher.addListener(function (evt) {
           if (evt.kind == "add") {
               var element = evt.data;
                if (element.name=="普通点"||element.name=="特殊点")  {
               	model.remove(element);
               }
           }
       });
        
	  	// 切换选中的方式
        $("input[name='type']").change(function(){
        	changeMarkType();
        })
        
	    // 长度失焦事件
	  	 $("#lasting").blur(function(){
	  		var lasting = $("#lasting").val();
	  		if(lasting<=0){
	  			alert("长度必须是大于0的数字");
		    }
	  	 });
	    
	     // 长度失焦事件
	  	 $("#radius").blur(function(){
	  		var radius = $("#radius").val();
	  		if(radius<=0){
	  			alert("直径必须是大于0的数字");
		    }
	  	 });
	 	
	  	 // 壁厚值失焦判断
	  	 $("#markLand").blur(function(){
	  		var markLand = $("#markLand").val();
	  		if(markLand==""){
	  			$(".col1").text("壁厚值不能为空");
		    	}else{
		    		$(".col1").text("");
		    	}
	  	  });
	  	
	  	// x轴值失焦判断
	  	$("#xValue").blur(function(){
	  		var xValue = $("#xValue").val();
	  		if(xValue==""){
	  			$(".col2").text("x轴值不能为空");
		    	}else{
		    		$(".col2").text("");
		    	}
	  	})
	  	
	  	// y轴值失焦判断
	  	$("#yValue").blur(function(){
	  		var yValue = $("#yValue").val();
	  		if(yValue==""){
	  			$(".col3").text("y轴值不能为空");
		    	}else{
		    		$(".col3").text("");
		    	}
	  	})
	  	
	  	// 角度失焦判断
	  	$("#angle").blur(function(){
	  		var angle = $("#angle").val();
	  		if(angle==""){
	  			$(".col4").text("角度不能为空");
		    	}else{
		    		$(".col4").text("");
		    	}
	  	})
	  	
	  	 // 距离失焦判断
	  	$("#distance").blur(function(){
	  		var distance = $("#distance").val();
	  		if(distance==""){
	  			$(".col5").text("距离不能为空");
		    	}else{
		    		$(".col5").text("");
		    	}
	  	})
	  	
	  	// 图形名称失焦判断
	  	$("#handDrawnName").blur(function(){
	  		var handDrawnName = $("#handDrawnName").val();
	  		if(handDrawnName==""){
	  			$(".col6").text("图形名称不能为空");
	  		}else{
	  			$(".col6").text("");
	  		}
	  	})
	  	
	  	// 其他类型打点壁厚值失焦判断
	  	$("#markLandT").blur(function(){
	  		var markLandT = $("#markLandT").val();
	  		if(markLandT==""){
	  			$(".col7").text("壁厚值不能为空");
	  		}else{
	  			$(".col7").text("");
	  		}
	  	})
	  	
	  	// 其他类型打点x轴坐标失焦判断
	  	$("#xCoordinateT").blur(function(){
	  		var xCoordinateT = $("#xCoordinateT").val();
	  		if(xCoordinateT==""){
	  			$(".col8").text("x轴坐标不能为空");
	  		}else{
	  			$(".col8").text("");
	  		}
	  	})
	    // 其他类型打点x轴坐标失焦判断
	  	$("#yCoordinateT").blur(function(){
	  		var yCoordinateT = $("#yCoordinateT").val();
	  		if(yCoordinateT==""){
	  			$(".col9").text("y轴坐标不能为空");
	  		}else{
	  			$(".col9").text("");
	  		}
	  	})
	  	
	  	
	  	
	  	 // 卧式和立式打点modal取消
		    $("#search_no").click(function () {
		    	flag = false;
		    	var pointFlag = $(".pointFlag").val();
		    	if(pointFlag=="1"){
		    		flag = true;
		    	}
		    	$(".pointFlag").val("");
		    	$('#special').modal('hide');
		    	// 将点的信息清空
		    	$("#markLand").val(""); 
		    	$("#xValue").val("");
		    	$("#yValue").val("");
		    	$("#angle").val("");
	      		$("#distance").val("");
		    	$(".col1").text("");
		    	$(".col2").text("");
		    	$(".col3").text("");
		    	$(".col4").text("");
		    	$(".col5").text("");
		    });
		    
		    // 取消画图   
		    $("#cancel").click(function(){
		    	flag = false;
			   localStorage.setItem("dicName",dicName);
			   localStorage.setItem("instrumentNo",instrumentNo);
			   window.history.go(-1); 
		    });
	        
		 // 取消存为模板
		    $("#search_qx").click(function () {
		    	$('#handDrawn').modal('hide');
		    	// 将点的信息清空
		    	$("#handDrawnName").val(""); 
		    	$(".col6").text("");
		    });
		  	
		    // 其他类型取消打点
		    $("#no").click(function () {
		    	flag = false;
		    	var pointFlag = $(".pointFlag").val();
		    	if(pointFlag=="1"){
		    		flag = true;
		    	}
		    	$(".pointFlag").val("");
		    	$('#otherType').modal('hide');
		    	// 将点的信息清空
		    	$("#markLandT").val(""); 
		    	$("#xCoordinateT").val(""); 
		    	$("#yCoordinateT").val(""); 
		    	$(".col7").text("");
		    	$(".col8").text("");
		    	$(".col9").text("");
		    });
		    
		 // 卧式立式打点modal点击x号关闭监听
		    $(".close").click(function(){
		    	flag = false;
		    	var pointFlag = $(".pointFlag").val();
		    	if(pointFlag=="1"){
		    		flag = true;
		    	}
		    	$('#special').modal('hide');
		    	// 将点的信息清空
		    	$("#markLand").val(""); 
		    	$("#xValue").val("");
		    	$("#yValue").val("");
		    	$("#angle").val("");
	      		$("#distance").val("");
		    	$(".col1").text("");
		    	$(".col2").text("");
		    	$(".col3").text(""); 
		    	$(".col4").text(""); 
		    	$(".col5").text(""); 
		    });
		    
		     // 导出图形modal点击x号关闭监听
		    $("#close1").click(function(){
		    	flag = false;
		    	$('#handDrawn').modal('hide');
		    	// 将点的信息清空
		    	$("#handDrawnName").val(""); 
		    	$(".col6").text("");
		    });
		     
		    // 其他类型打点modal点击x号关闭监听
		    $("#close2").click(function(){
		    	flag = false;
		    	var pointFlag = $(".pointFlag").val();
		    	if(pointFlag=="1"){
		    		flag = true;
		    	}
		    	$('#otherType').modal('hide');
		    	// 将点的信息清空
		    	$("#markLandT").val(""); 
		    	$("#xCoordinateT").val(""); 
		    	$("#yCoordinateT").val(""); 
		    	$(".col7").text("");
		    	$(".col8").text("");
		    	$(".col9").text("");
		    });
	</script>
</body>
</html>