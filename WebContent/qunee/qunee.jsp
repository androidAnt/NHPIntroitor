<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="libs/bootstrap/css/bootstrap.css" />
<link rel="stylesheet"
	href="libs/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css" />
<link rel="stylesheet" href="src/css/graph.editor.css" />
<title>新增图形模板</title>
</head>
<body class="layout">
   <div  style="position:absolute;width:100px; height:30px; top:7px; right:20px; z-index:1;">
	     <button id="save" class="btn btn-default btn-sm pull-right" type="button" style="margin-right: 1%;" title = "保存图形" >
		    <img src="../img/bc.png" >
		</button>
	    <button id="cancel" class="btn btn-default btn-sm pull-right" type="button" style="margin-right: 5%;" title = "取消画图" >
		    <img src="../img/cancel.png" >
		</button>
	</div>
	<div id="editor" data-options="region:'center'"></div>
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
	<script type="text/javascript" src="src/graph.editor.js"></script>
	<script type="text/javascript" src="scripts/ShapeBase.js"></script>
	<script type="text/javascript" src="scripts/ShapeExtension.js"></script>
	<script type="text/javascript">
	 var url =decodeURI(decodeURI(location.search)); 
	 var resultUrl = url.split("?")[1]; //url地址?后面的值
     var array=resultUrl.split(  "&");       //将结果用&符分隔
	 var templateName = array[0].split("=")[1];   //模板名称
	 console.log(templateName+"adakjdakj");
	 var lasting = array[1].split("=")[1];        //长度
	 var radius = array[2].split("=")[1];         //半径
	 var templateType = array[3].split("=")[1];   //模板类型
	 var dicName = array[4].split("=")[1];        //项目名称
       var graph="";
        $('#editor').graphEditor({
            saveService: 'save',
            callback: function (editor) {
                graph = editor.graph;
                var background = new GridBackground(graph);
                graph.moveToCenter();
            }
        });
        //保存图形 
       $("#save").click(function(){
    	   var result = graph.exportJSON(true);
    	   console.log(result);
    	   $.ajax({
    		   type:'post',
    		   url:'../admin/template/doAdd',
    		   data:{
    			   result:result,
    			   templateName:templateName,
    			   lasting:lasting,
    			   radius:radius,
    			   templateType:templateType,
    			   dicName:dicName
    			   },
    		   success:function(res){
    			   if(res.status==1){
    				   // 失败
    				  window.location.href="../admin/template/toIndex?msg="+res.msg;
    			   }else {
    				   // 成功
    				   window.location.href="../admin/template/toIndex?msg="+res.msg;
    			   } 
    		   }
    	   });
       });
        
       // 取消画图   
	    $("#cancel").click(function(){
		   window.history.back(-1); 
	    });
        
     $(function(){
	     var i =2;           // 比例
	     var ll = radius*i;  // 直径
	     var r = ll/2;   // 半径
	     var x = lasting*i/2;  // x轴
	     var y = 0;          // y轴
	     var c = r * Math.tan(Math.PI / 8);
	     var d = r * Math.sin(Math.PI / 4);
	     
	     // 判断选择的模板类型
	     if(templateType==1){
	    	 // 创建对象画平面图
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
		     shape.editable=false;
		     shape.set('ShapeType', 'NoOperation');   // 设置标识
		     
		     // 算出竖线的长度
		     var l = 2*Math.PI*r;
		     var z = (r+100)+l/2;
		     // 创建对象画下面的展开图
		     var shape1 = graph.createShapeNode(null,0,z);
		     // 矩形 
		     shape1.moveTo(x, -l/2);
		     shape1.lineTo(-x, -l/2);
		     shape1.lineTo(-x, l/2);
		     shape1.lineTo(x, l/2);
		     shape1.lineTo(x, -l/2);
		     shape1.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape1.editable=false; 
		     shape1.set('ShapeType', 'ParentNode');   // 设置标识
		     // 创建一个对象，画一根竖线,右边
		     var shape2 = graph.createShapeNode(null,-x,z);
		     shape2.moveTo(0,-l/2);
		     shape2.lineTo(0, l/2);
		     shape2.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape2.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#E21667");
		     shape2.setStyle(Q.Styles.SHAPE_STROKE,2);
		     shape2.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.LEFT_BOTTOM);
		     shape2.setStyle(Q.Styles.LABEL_POSITION,Q.Position.LEFT_TOP);
		     shape2.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape2.name="右焊缝";
		     shape2.editable=false; 
		     shape2.movable=false;
		     shape2.parent = shape1;
		     shape2.host = shape1; 
		     shape2.set('ShapeType', 'ChildNodeRL');   // 设置标识
		     // 创建一个对象，画一根竖线,左边
		     var shape3 = graph.createShapeNode(null,x,z);
		     shape3.moveTo(0,-l/2);
		     shape3.lineTo(0,l/2);
		     shape3.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape3.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#E21667");
		     shape3.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.LEFT_TOP);
		     shape3.setStyle(Q.Styles.LABEL_POSITION,Q.Position.LEFT_BOTTOM);
		     shape3.setStyle(Q.Styles.SHAPE_STROKE,2);
		     shape3.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape3.name="左焊缝";
		     shape3.editable=false; 
		     shape3.movable=false;
		     shape3.parent = shape1;
		     shape3.host = shape1; 
		     shape3.set('ShapeType', 'ChildNodeLL');   // 设置标识
		     // 创建一个对象，画一根横线，中间
		     var shape4 = graph.createShapeNode(null,0,z);
		     // 计算中线位置
		     shape4.moveTo(x,0);
		     shape4.lineTo(-x,0);
		     shape4.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape4.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#13e431");
		     shape4.setStyle(Q.Styles.SHAPE_STROKE,2);
		     shape4.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape4.name="筒体焊缝";
		     shape4.editable=false; 
		     shape4.parent = shape1;
		     shape4.zIndex = 2;
		     shape4.host = shape1;
		     shape4.set('ShapeType', 'ChildNodeML');   // 设置标识
		     
		     // 画右边圆
		     var xd = -x+r+50;
		     var yd = z;
		     var shape5 = graph.createShapeNode(null,xd,yd);
		     // 获取第一根横线的位置
		     shape5.moveTo(0, -r);
		     shape5.quadTo(c, -r, d, -d);
	 	     shape5.quadTo(r, -c, r, 0);
		     shape5.quadTo(r, c, d, d);
		     shape5.quadTo(c, r, 0, r); 
		     shape5.quadTo(-c, r, -d, d);
		     shape5.quadTo(-r, c, -r, 0);
		     shape5.quadTo(-r, -c, -d, -d);
		     shape5.quadTo(-c, -r, 0, -r); 
		     shape5.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff"); 
		     var label1 = new Q.LabelUI();  // 创建label
		     label1.rotate = 0;
		     label1.position = {x:0,y:0};
		     label1.anchorPosition = Q.Position.LEFT_BOTTOM;
		     label1.data = "右封头°";
		     shape5.addUI(label1);
		     shape5.editable=false; 
		     shape5.movable=false;
		     shape5.parent = shape1;
		     shape5.host = shape1;
		     shape5.set('ShapeType', 'ChildNodeRR');   // 设置标识
		     // 设置右边固定的中心线，作为右封头的0°
		     var shape5c = graph.createShapeNode(null,0,z);
		     shape5c.moveTo(0,0);
		     shape5c.lineTo(-x+50+2*r+40,0);
		     shape5c.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape5c.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#000000");
		     shape5c.setStyle(Q.Styles.SHAPE_STROKE,1);
		     shape5c.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape5c.editable=false; 
		     shape5c.movable=false;
		     shape5c.zIndex = 1;
		     shape5c.parent = shape1;
		     shape5c.host = shape1;
		     shape5c.set('ShapeType', 'ChildNodeRMC');   // 设置标识右封头中心水平线
		     var label1 = new Q.LabelUI();  
		     label1.rotate = 0;
		     label1.position = {x:-x+2*r+90,y:0};
		     label1.anchorPosition = Q.Position.CENTER_BOTTOM;
		     label1.data = "0°";
		     label1.fontStyle = "bolder";
		     var label2 = new Q.LabelUI();
		     label2.rotate = 0;
		     label2.position = {x:-x+50,y:0};
		     label2.anchorPosition = Q.Position.RIGHT_BOTTOM;
		     label2.data = "180°";
		     label2.fontStyle = "bolder";
		     shape5c.addUI(label1);
		     shape5c.addUI(label2);
		     // 设置右边固定的垂直线，作为右封头的90°
		     var shape5m = graph.createShapeNode(null,xd,yd);
		     shape5m.moveTo(0,-(r+40));
		     shape5m.lineTo(0,r+40);
		     shape5m.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape5m.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#000000");
		     shape5m.setStyle(Q.Styles.SHAPE_STROKE,1);
		     shape5m.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape5m.editable=false; 
		     shape5m.movable=false;
		     shape5m.zIndex = 1;
		     shape5m.parent = shape1;
		     shape5m.host = shape1;
		     shape5m.set('ShapeType', 'ChildNodeRMM');   // 设置标识 右焊缝中心垂直线
		     var label1 = new Q.LabelUI();  // 创建label
		     label1.rotate = -Math.PI / 2;
		     label1.position = {x:0,y:0};
		     label1.anchorPosition = Q.Position.CENTER_BOTTOM;
		     label1.data = "90°";
		     label1.fontStyle = "bolder";
		     var label2 = new Q.LabelUI();
		     label2.rotate = -Math.PI / 2;
		     label2.position = {x:80+2*r,y:0};
		     label2.anchorPosition = Q.Position.CENTER_TOP;
		     label2.data = "270°";
		     label2.fontStyle = "bolder"; 
		     shape5m.addUI(label1);
		     shape5m.addUI(label2);
		     
		     // 画左边圆
		     var xd = -(-x+r+50);
		     var yd = z;
		     var shape6 = graph.createShapeNode(null,xd,yd);
		     // 获取第一根横线的位置，减去半径即使圆的第一个点
		     shape6.moveTo(0, -r);
		     shape6.quadTo(c, -r, d, -d);
	 	     shape6.quadTo(r, -c, r, 0);
		     shape6.quadTo(r, c, d, d);
		     shape6.quadTo(c, r, 0, r); 
		     shape6.quadTo(-c, r, -d, d);
		     shape6.quadTo(-r, c, -r, 0);
		     shape6.quadTo(-r, -c, -d, -d);
		     shape6.quadTo(-c, -r, 0, -r); 
		     var label1 = new Q.LabelUI();  // 创建label
		     label1.rotate = 0;
		     label1.position = {x:0,y:0};
		     label1.anchorPosition = Q.Position.LEFT_BOTTOM;
		     label1.data = "左封头°";
		     shape6.addUI(label1);
		     shape6.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");   
		     shape6.editable=false; 
		     shape6.movable=false;
		     shape6.parent = shape1;
		     shape6.host = shape1;
		     shape6.set('ShapeType', 'ChildNodeLR');   // 设置标识
		     // 设置左边固定的中心线，作为左封头的0°
		     var shape6c = graph.createShapeNode(null,0,z);
		     shape6c.moveTo(0,0);
		     shape6c.lineTo(-(-x+50+2*r+40),0);
		     shape6c.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape6c.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#000000");
		     shape6c.setStyle(Q.Styles.SHAPE_STROKE,1);
		     shape6c.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape6c.editable=false; 
		     shape6c.movable=false;
		     shape6c.zIndex = 1;
		     shape6c.parent = shape1;
		     shape6c.host = shape1;
		     shape6c.set('ShapeType', 'ChildNodeLMC');   // 设置标识  左焊缝中心水平线
		     var label1 = new Q.LabelUI();
		     label1.rotate = 0;
		     label1.position = {x:-x+2*r+90,y:0};
		     label1.anchorPosition = Q.Position.RIGHT_TOP;
		     label1.data = "0°";
		     label1.fontStyle = "bolder";
		     var label2 = new Q.LabelUI();
		     label2.rotate = 0;
		     label2.position = {x:-x+50,y:0};
		     label2.anchorPosition = Q.Position.RIGHT_TOP;
		     label2.data = "180°";
		     label2.fontStyle = "bolder";
		     shape6c.addUI(label1);
		     shape6c.addUI(label2);
		     // 设置右边固定的垂直线，作为右封头的90°
		     var shape6m = graph.createShapeNode(null,xd,yd);
		     shape6m.moveTo(0,-(r+40));
		     shape6m.lineTo(0,r+40);
		     shape6m.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape6m.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#000000");
		     shape6m.setStyle(Q.Styles.SHAPE_STROKE,1);
		     shape6m.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape6m.editable=false; 
		     shape6m.movable=false;
		     shape6m.zIndex = 1;
		     shape6m.parent = shape1;
		     shape6m.host = shape1;
		     shape6m.set('ShapeType', 'ChildNodeLMM');   // 设置标识 左封头中心垂直线
		     var label1 = new Q.LabelUI();  
		     label1.rotate = -Math.PI / 2;
		     label1.position = {x:0,y:0};
		     label1.anchorPosition = Q.Position.CENTER_BOTTOM;
		     label1.data = "90°";
		     label1.fontStyle = "bolder";
		     var label2 = new Q.LabelUI();
		     label2.rotate = -Math.PI / 2;
		     label2.position = {x:80+2*r,y:0};
		     label2.anchorPosition = Q.Position.CENTER_TOP;
		     label2.data = "270°";
		     label2.fontStyle = "bolder"; 
		     shape6m.addUI(label1);
		     shape6m.addUI(label2);
		     graph.zoomToOverview();
	     }else if(templateType==0){
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
		     
		     // 算出竖线的长度
		     var l = 2*Math.PI*r;
		     // 创建对象画下面的展开图
		     // 矩形
		     var shape1 = graph.createShapeNode(null,r+100+l/2,0);
		     shape1.moveTo(-l/2, -x);
		     shape1.lineTo(l/2, -x);
		     shape1.lineTo(l/2, x);
		     shape1.lineTo(-l/2, x);
		     shape1.lineTo(-l/2, -x);
		     shape1.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape1.editable=false; 
		     shape1.set('ShapeType', 'ParentNode');   // 设置标识
		     
		     // 第一根横线
		     var shape2 = graph.createShapeNode(null,r+100+l/2,-x);
		     shape2.moveTo(-l/2, 0);
		     shape2.lineTo(l/2, 0);
		     shape2.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape2.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#E21667");
		     shape2.setStyle(Q.Styles.SHAPE_STROKE,2);
		     shape2.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.LEFT_BOTTOM);
		     shape2.setStyle(Q.Styles.LABEL_POSITION,Q.Position.LEFT_TOP);
		     shape2.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape2.name="上焊缝";
		     shape2.editable=false; 
		     shape2.movable=false;
		     shape2.parent = shape1;
		     shape2.host = shape1;
		     shape2.set('ShapeType', 'ChildNodeTL');   // 设置标识
		     
		     // 第二根横线
		     var shape3 = graph.createShapeNode(null,r+100+l/2,x);
		     shape3.moveTo(-l/2, 0);
		     shape3.lineTo(l/2, 0);
		     shape3.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape3.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#E21667");
		     shape3.setStyle(Q.Styles.SHAPE_STROKE,2);
		     shape3.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.LEFT_TOP);
		     shape3.setStyle(Q.Styles.LABEL_POSITION,Q.Position.LEFT_BOTTOM);
		     shape3.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape3.name="下焊缝";
		     shape3.editable=false; 
		     shape3.movable=false;
		     shape3.parent = shape1;
		     shape3.host = shape1;
		     shape3.set('ShapeType', 'ChildNodeBL');   // 设置标识
		     
		     // 计算中线位置
		     var shape4 = graph.createShapeNode(null,r+100+l/2,0);
		     shape4.moveTo(0, -x);
		     shape4.lineTo(0, x);
		     shape4.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape4.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#13e431");
		     shape4.setStyle(Q.Styles.SHAPE_STROKE,2);
		     shape4.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape4.name="筒体焊缝";
		     shape4.zIndex = 2;
		     shape4.editable=false; 
		     shape4.parent = shape1;
		     shape4.host = shape1;
		     shape4.set('ShapeType', 'ChildNodeML');   // 设置标识
		     
		     // 画上面圆
		     var xd = r+100+l/2;
		     var yd = -(x+r+50);
		     var shape5 = graph.createShapeNode(null,xd,yd);
		     shape5.moveTo(0, -r);
		     shape5.quadTo(c, -r, d, -d);
	 	     shape5.quadTo(r, -c, r, 0);
		     shape5.quadTo(r, c, d, d);
		     shape5.quadTo(c, r, 0, r); 
		     shape5.quadTo(-c, r, -d, d);
		     shape5.quadTo(-r, c, -r, 0);
		     shape5.quadTo(-r, -c, -d, -d);
		     shape5.quadTo(-c, -r, 0, -r); 
		     shape5.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff"); 
		     var label1 = new Q.LabelUI();  // 创建label
		     label1.rotate = 0;
		     label1.position = {x:0,y:2*r};
		     label1.anchorPosition = Q.Position.LEFT_TOP;
		     label1.data = "上封头";
		     shape5.addUI(label1);
		     shape5.editable=false; 
		     shape5.parent = shape1;
		     shape5.host = shape1;
		     shape5.set('ShapeType', 'ChildNodeTR');   // 设置标识
		     
		     // 设置右边固定的中心线，作为右封头的0°
		     var shape5c = graph.createShapeNode(null,r+100+l/2,0);
		     shape5c.moveTo(0,-(x+90+2*r));
		     shape5c.lineTo(0,0);
		     shape5c.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape5c.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#000000");
		     shape5c.setStyle(Q.Styles.SHAPE_STROKE,1);
		     shape5c.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape5c.editable=false; 
		     shape5c.movable=false;
		     shape5c.zIndex = 1;
		     shape5c.parent = shape1;
		     shape5c.host = shape1;
		     shape5c.set('ShapeType', 'ChildNodeRMC');   // 设置标识右封头中心水平线
		     var label1 = new Q.LabelUI();  
		     label1.rotate = -Math.PI / 2;
		     label1.position = {x:0,y:0};
		     label1.anchorPosition = Q.Position.CENTER_BOTTOM;
		     label1.data = "180°";
		     label1.fontStyle = "bolder";
		     var label2 = new Q.LabelUI();
		     label2.rotate = -Math.PI / 2;
		     label2.position = {x:40+2*r,y:0};
		     label2.anchorPosition = Q.Position.RIGHT_TOP;
		     label2.data = "0°";
		     label2.fontStyle = "bolder"; 
		     shape5c.addUI(label1);
		     shape5c.addUI(label2);
		     // 设置右边固定的垂直线，作为右封头的90°
		     var shape5m = graph.createShapeNode(null,xd,yd);
		     shape5m.moveTo(-(r+40),0);
		     shape5m.lineTo(r+40,0);
		     shape5m.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape5m.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#000000");
		     shape5m.setStyle(Q.Styles.SHAPE_STROKE,1);
		     shape5m.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape5m.editable=false; 
		     shape5m.movable=false;
		     shape5m.zIndex = 1;
		     shape5m.parent = shape1;
		     shape5m.host = shape1;
		     shape5m.set('ShapeType', 'ChildNodeRMM');   // 设置标识 右焊缝中心垂直线
		     var label1 = new Q.LabelUI();  // 创建label
		     label1.rotate = 0;
		     label1.position = {x:80+2*r,y:0};
		     label1.anchorPosition = Q.Position.LEFT_BOTTOM;
		     label1.data = "90°";
		     label1.fontStyle = "bolder";
		     var label2 = new Q.LabelUI();
		     label2.rotate = 0;
		     label2.position = {x:0,y:0};
		     label2.anchorPosition = Q.Position.CENTER_BOTTOM;
		     label2.data = "270°";
		     label2.fontStyle = "bolder";  
		     shape5m.addUI(label1);
		     shape5m.addUI(label2); 
		     
		     // 画下面圆
		     var xd = r+100+l/2;
		     var yd = x+r+50;
		     var shape6 = graph.createShapeNode(null,xd,yd);
		     shape6.moveTo(0, -r);
		     shape6.quadTo(c, -r, d, -d);
	 	     shape6.quadTo(r, -c, r, 0);
		     shape6.quadTo(r, c, d, d);
		     shape6.quadTo(c, r, 0, r); 
		     shape6.quadTo(-c, r, -d, d);
		     shape6.quadTo(-r, c, -r, 0);
		     shape6.quadTo(-r, -c, -d, -d);
		     shape6.quadTo(-c, -r, 0, -r); 
		     shape6.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff"); 
		     shape6.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.RIGHT_BOTTOM);
		     shape6.setStyle(Q.Styles.LABEL_POSITION,Q.Position.BOTTOM_LEFT);
		     shape6.editable=false; 
		     shape6.parent = shape1;
		     shape6.host = shape1;
		     shape6.name="下封头";
		     shape6.set('ShapeType', 'ChildNodeBR');   // 设置标识
		     // 设置右边固定的中心线，作为右封头的0°
		     var shape6c = graph.createShapeNode(null,r+100+l/2,0);
		     shape6c.moveTo(0,0);
		     shape6c.lineTo(0,x+90+2*r);
		     shape6c.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape6c.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#000000");
		     shape6c.setStyle(Q.Styles.SHAPE_STROKE,1);
		     shape6c.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape6c.editable=false; 
		     shape6c.movable=false;
		     shape6c.zIndex = 1;
		     shape6c.parent = shape1;
		     shape6c.host = shape1;
		     shape6c.set('ShapeType', 'ChildNodeRMC');   // 设置标识右封头中心水平线
		     var label1 = new Q.LabelUI();  
		     label1.rotate = -Math.PI / 2;
		     label1.position = {x:x+50,y:0};
		     label1.anchorPosition = Q.Position.RIGHT_BOTTOM;
		     label1.data = "0°";
		     label1.fontStyle = "bolder";
		     var label2 = new Q.LabelUI();
		     label2.rotate = -Math.PI / 2;
		     label2.position = {x:x+90+2*r,y:0};
		     label2.anchorPosition = Q.Position.RIGHT_TOP;
		     label2.data = "180°";
		     label2.fontStyle = "bolder";  
		     shape6c.addUI(label1);
		     shape6c.addUI(label2);
		      // 设置右边固定的垂直线，作为右封头的90°
		     var shape6m = graph.createShapeNode(null,xd,yd);
		     shape6m.moveTo(-(r+40),0);
		     shape6m.lineTo(r+40,0);
		     shape6m.setStyle(Q.Styles.SHAPE_FILL_COLOR, "#fff");
		     shape6m.setStyle(Q.Styles.SHAPE_STROKE_STYLE, "#000000");
		     shape6m.setStyle(Q.Styles.SHAPE_STROKE,1);
		     shape6m.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape6m.editable=false; 
		     shape6m.movable=false;
		     shape6m.zIndex = 1;
		     shape6m.parent = shape1;
		     shape6m.host = shape1;
		     shape6m.set('ShapeType', 'ChildNodeRMM');   // 设置标识 右焊缝中心垂直线
		     var label1 = new Q.LabelUI();  // 创建label
		     label1.rotate = 0;
		     label1.position = {x:80+2*r,y:0};
		     label1.anchorPosition = Q.Position.LEFT_BOTTOM;
		     label1.data = "90°";
		     label1.fontStyle = "bolder";
		     var label2 = new Q.LabelUI();
		     label2.rotate = 0;
		     label2.position = {x:0,y:0};
		     label2.anchorPosition = Q.Position.CENTER_BOTTOM;
		     label2.data = "270°";
		     label2.fontStyle = "bolder";  
		     shape6m.addUI(label1);
		     shape6m.addUI(label2);  
		     graph.zoomToOverview();
	     }else if(templateType==99){
	    	 // 创建对象画平面图
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
		     graph.zoomToOverview();
	     }
	     
     });
    
 	// 删除某个元素
	    graph.removeSelectionByInteraction = function (evt) {
         var selection = this.selectionModel.datas;
         Q.confirm("你确定要删除吗？", function () {
             var selection = this.removeSelection();
         }, this);
     }
     
    </script>
</body>
</html>