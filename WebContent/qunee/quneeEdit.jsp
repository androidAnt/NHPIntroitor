<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="libs/bootstrap/css/bootstrap.css" />
<link rel="stylesheet" href="libs/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css" />
<link rel="stylesheet" href="src/css/graph.editor.css" />
<title>编辑图形模板</title>
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
		var url = decodeURI(decodeURI(location.search));
		var resultUrl = url.split("?")[1]; //url地址?后面的值
		var array = resultUrl.split("&"); //将结果用&符分隔
		var templateId = array[0].split("=")[1]; //模板id
		var graph = "";
		$('#editor').graphEditor({
			saveService : 'save',
			callback : function(editor) {
				graph = editor.graph;
				var background = new GridBackground(graph);
				graph.moveToCenter();

				/* graph.onclick = function() {
					if (graph.popupmenu) {
						graph.popupmenuOld = graph.popupmenu;
						graph.popupmenu = null
					} else {
						graph.popupmenu = graph.popupmenuOld;
					}
				} */
			}
		});
		
		 //保存图形 
	       $("#save").click(function(){
	    	   var result = graph.exportJSON(true);
	    	   $.ajax({
	    		   type:'post',
	    		   url:'../admin/template/doEdit',
	    		   data:{
	    			   result:result,
	    			   templateId:templateId
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

		$(function() {
			$.ajax({
				type : "post",
				url : "../admin/template/toEdit",
				data : {
					templateId : templateId
				},
				success : function(res) {
			    graph.parseJSON(res.result);
				}

			});
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