		var element = "";     // 对象
		// 修改点位的方法
        function updatePoint(data,evt){
        	element = data;
        	markType = data.get("markType");
        	var type = data.get("type");
	    	// 获取图形类型
		   var templateType = $("input[name='templateType']:checked").val();
	    	// 清空
    	   $("#markName").val("");
		   $("#markLand").val("");
		   $("#xCoordinate").val("");
		   $("#yCoordinate").val("");
   		   $("#xValue").val("");
   		   $("#yValue").val("");
   		   $("#xReference").empty();
		   $("#xDirection").empty();
		   $("#yReference").empty();
		   $("#yDirection").empty();
		   $("#referenceR").empty();
		   $("#angle").val("");
   		   $("#distance").val("");
   		   // 判断如果是点位才能进行编辑
   		   if(data.$image=='lamp'){
   			   // 该flag表示编辑状态
   			 $(".pointFlag").val("1");
		   if(templateType=="1"){ // 卧式
			   // 判断是哪一种方式打点
			   if(type=="0"){  // 点在筒体上
			        // 添加最新的值
					pdTemplateType(templateType);
					$("#markName").val(data.get("markName"));
					$("#markLand").val(data.get("markLand"));
				    $("#xCoordinate").val(data.get("xCoordinate"));
			 	    $("#yCoordinate").val(data.get("yCoordinate"));
		    	    $("#xReference option[value='"+data.get('xReference')+"']").attr("selected",true);
		   		    $("#xDirection option[value='"+data.get('xDirection')+"']").attr("selected",true);
		   		    $("#xValue").val(data.get("xValue"));
		   		    $("#yReference option[value='"+data.get('yReference')+"']").attr("selected",true);
		   		    $("#yDirection option[value='"+data.get('yDirection')+"']").attr("selected",true);
		   		    $("#yValue").val(data.get("yValue"));
			        $("#special").modal("show"); 
			   }else if(type=="1"){  // 点在封头上
				   headAddValue(data);
				   $("#markName").val(data.get("markName"));
				   $("#markLand").val(data.get("markLand"));
				   $("#xCoordinate").val(data.get("xCoordinate"));
			 	   $("#yCoordinate").val(data.get("yCoordinate"));
		    	   $("#referenceR option[value='"+data.get('referenceR')+"']").attr("selected",true);
				   $("#angle").val(data.get("angle"));
				   $("#distance").val(data.get("distance"));
				   $("#special").modal("show"); 
			   }
		   }else if(templateType=="0"){
			   // 判断是哪一种方式打点
			   if(type=="0"){  // 点在筒体上
			        // 添加最新的值
					pdTemplateType(templateType);
					$("#markName").val(data.get("markName"));
					$("#markLand").val(data.get("markLand"));
				    $("#xCoordinate").val(data.get("xCoordinate"));
			 	    $("#yCoordinate").val(data.get("yCoordinate"));
		    	    $("#xReference option[value='"+data.get('xReference')+"']").attr("selected",true);
		   		    $("#xDirection option[value='"+data.get('xDirection')+"']").attr("selected",true);
		   		    $("#xValue").val(data.get("xValue"));
		   		    $("#yReference option[value='"+data.get('yReference')+"']").attr("selected",true);
		   		    $("#yDirection option[value='"+data.get('yDirection')+"']").attr("selected",true);
		   		    $("#yValue").val(data.get("yValue"));
			        $("#special").modal("show"); 
			   }else if(type=="1"){  // 点在封头上
				   headAddValue(data);
				   $("#markName").val(data.get("markName"));
				   $("#markLand").val(data.get("markLand"));
				   $("#xCoordinate").val(data.get("xCoordinate"));
			 	   $("#yCoordinate").val(data.get("yCoordinate"));
		    	   $("#referenceR option[value='"+data.get('referenceR')+"']").attr("selected",true);
				   $("#angle").val(data.get("angle"));
				   $("#distance").val(data.get("distance"));
				   $("#special").modal("show"); 
			   }
		   }else{
			    $("#markNameT").val("");
			    $("#markLandT").val();
			    $("#xCoordinateT").val("");
			    $("#yCoordinateT").val("");
			    $("#markNameT").val(data.get("markName"));
				$("#markLandT").val(data.get("markLand"));
			    $("#xCoordinateT").val(data.$location.x.toFixed(2));
		 	    $("#yCoordinateT").val(data.$location.y.toFixed(2));
		 	    $("#otherType").modal("show"); 
		   }
   		 }
	   }
        
        // 切换打点方式
		function changeMarkType(){
	  	  var type = $("input[name='type']:checked").val();
		  // 获取当前图形类型
          var templateType = $("input[name='templateType']:checked").val();
		  if(type=="0"){  // 点在筒体上
		     $("#referenceR").attr("disabled",true);
		     $("#angle").attr("disabled",true);
      		 $("#distance").attr("disabled",true);
      		 $("#angle").val("");
      		 $("#distance").val("");
      		 $("#xReference").attr("disabled",false);
      		 $("#xDirection").attr("disabled",false);
      		 $("#xValue").attr("disabled",false);
      		 $("#yReference").attr("disabled",false);
      		 $("#yDirection").attr("disabled",false);
      		 $("#yValue").attr("disabled",false);
      		 $(".col4").text("");
			 $(".col5").text("");
      	     // 将参照物和方向写入
      	     pdTemplateType(templateType);
       	  }else{ // 点在封头上
       		 $("#referenceR").attr("disabled",false);
       		 $("#angle").attr("disabled",false);
      		 $("#distance").attr("disabled",false);
      		 $("#xReference").attr("disabled",true);
      		 $("#xDirection").attr("disabled",true);
      		 $("#xValue").attr("disabled",true);
      		 $("#yReference").attr("disabled",true);
      		 $("#yDirection").attr("disabled",true);
      		 $("#yValue").attr("disabled",true);
      		 // 设置圆参照物
	 		 $("#referenceR").append("<option value='右封头'>右封头</option>");
	 		 $("#referenceR").append("<option value='左封头'>左封头</option>");
          	 // 将之前的option清空
 			 $("#xReference").empty();
 			 $("#xDirection").empty();
 			 $("#yReference").empty();
 			 $("#yDirection").empty();
 			 $("#xValue").val("");
 			 $("#yValue").val("");
 			 $(".col2").text("");
 			 $(".col3").text("");
       	  }
	  }
		
		// 立式卧式需要添加的内容
	  	function pdTemplateType(templateType){
	  		$("#referenceR").attr("disabled",true);
     		$("#angle").attr("disabled",true);
			$("#distance").attr("disabled",true);
			$("#xReference").attr("disabled",false);
			$("#xDirection").attr("disabled",false);
			$("#xValue").attr("disabled",false);
			$("#yReference").attr("disabled",false);
	 		$("#yDirection").attr("disabled",false);
	 		$("#yValue").attr("disabled",false);
			$("input:radio[name='type'][value='0']").prop("checked",true);
	  		if(templateType=="1"){ // 卧式
				// 添加最新的值
				$("#xReference").append("<option value='左焊缝'>左焊缝</option>");
				$("#xReference").append("<option value='右焊缝'>右焊缝</option>");
				$("#xReference").append("<option value='筒体焊缝中心'>筒体焊缝中心</option>"); 
				$("#xDirection").append("<option value='右'>右</option>"); 
				$("#xDirection").append("<option value='左'>左</option>"); 
				$("#yReference").append("<option value='筒体焊缝'>筒体焊缝</option>"); 
				$("#yReference").append("<option value='左焊缝顶部'>左焊缝顶部</option>");
				$("#yReference").append("<option value='左焊缝底部'>左焊缝底部</option>");
				$("#yDirection").append("<option value='上'>上</option>"); 
				$("#yDirection").append("<option value='下'>下</option>");
      	     }else if (templateType=="0"){
      	    	$("#xReference").append("<option value='筒体焊缝'>筒体焊缝</option>");
				$("#xReference").append("<option value='上焊缝左部'>上焊缝左部</option>");
				$("#xReference").append("<option value='上焊缝右部'>上焊缝右部</option>"); 
				$("#xDirection").append("<option value='左'>左</option>"); 
				$("#xDirection").append("<option value='右'>右</option>"); 
				$("#yReference").append("<option value='上焊缝'>上焊缝</option>"); 
				$("#yReference").append("<option value='下焊缝'>下焊缝</option>");
				$("#yReference").append("<option value='筒体焊缝中心'>筒体焊缝中心</option>");
				$("#yDirection").append("<option value='下'>下</option>");
				$("#yDirection").append("<option value='上'>上</option>"); 
      	     }
	  	}
	  	
     // 图形类型选中切换方法
	    function  drawgraph(templateType){
	 		flag = false;
	 		n = 1;
	 		$("#handDrawnP").val("0")
	    	if(templateType=='1'){
				metaHoriz();
				$("#handDrawnP").attr("disabled",true);
			}else if (templateType=='0'){
				metaUpright();
				$("#handDrawnP").attr("disabled",true);
			}
	    }
	    
	 // 公用方法(普通点和特殊点共用一个)
        function publicMethodMark(element){
        	var templateType = $("input[name='templateType']:checked").val();
        	var xCoordinate = element.location.x.toFixed(2);
        	var yCoordinate = element.location.y.toFixed(2);
        	// 给一个判断标识
        	var num = 0;
	  		// 整个图形的焊缝值遍历
	    	var array = graph._kjModel._j7;
	    	// 左焊缝   
	    	var LLx = 0;
	    	var LLy = 0;
	    	var LLlength = 0;
	    	// 右焊缝  
	    	var RLx = 0; 
	    	var RLy = 0;
	    	// 筒体焊缝
	    	var MLx = 0;
	    	var MLy = 0;
	    	var MLlength = 0;
        	// 左圆  上圆
        	var LRx = 0;
        	var LRy = 0;
        	// 右圆  下圆
        	var RRx = 0;
        	var RRy = 0;
	    	// 遍历图形
	    	for(var i=0;i<array.length;i++){
	    		if(array[i].get('ShapeType')=='ChildNodeRL'){ //右焊缝
            	    RLx = array[i].x;
	    		    num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeLL'){ //左焊缝 
            	    LLx = array[i].x;
            	    LLy = array[i].y;
            	    LLlength = array[i].$image._iy;
            	    num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeML'){ //筒体焊缝
            	    MLx = array[i].x;
            	    MLy = array[i].y;
            	    MLlength = array[i].$image._iy;
            	    num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeTL'){ //上焊缝
	            	LLx = array[i].x;
	            	LLy = array[i].y;
	            	LLlength = array[i].$image._iy;
	            	 num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeBL'){ //下焊缝
	            	RLy = array[i].y;
	            	num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeLR'){ // 左边圆
	            	LRx = array[i].x;
	            	LRy = array[i].y;
	            	num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeRR'){ // 右边圆
	            	RRx = array[i].x;
	            	RRy = array[i].y;
	            	num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeTR'){ // 上边圆
	            	LRx = array[i].x;
	            	LRy = array[i].y;
	            	num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeBR'){ // 下边圆
	            	RRx = array[i].x;
	            	RRy = array[i].y;
	            	num++;
	            }
	    		
	    		if(num==5){
	    			break; 
	    		}
	    		
	    	} 	
    	   if(templateType=="1"){ // 卧式
    			// 获取x轴需要的信息
		    	var a = Math.abs(xCoordinate - LLx); // 左焊缝 0
		    	var b = Math.abs(xCoordinate - RLx); // 右焊缝 1
		    	var c = Math.abs(xCoordinate - MLx); // 筒体焊缝中心 2
    			// 接收x轴信息
		    	var xLine = "";  // 焊缝
		    	var xLRTB = "";  // 方向 0左 1右
    			var xValue = ""; // 距离
    			
    			// 获取值
    			if(a>b&&b>c){
    				xValue = c.toFixed(2);
    				xReference = "筒体焊缝中心";
    				if(xCoordinate>MLx){
    					xDirection = "右";
    				}else{
    					xDirection = "左";
    				}
    			}else if(a>c&&c>b){
    				xValue = b.toFixed(2);
    				xReference = "右焊缝";
    				if(xCoordinate>RLx){
    					xDirection = "右";
    				}else{
    					xDirection = "左";
    				}
    			}else if(b>a&&a>c){
    				xValue = c.toFixed(2);
    				xReference = "筒体焊缝中心";
    				if(xCoordinate>MLx){
    					xDirection = "右";
    				}else{
    					xDirection = "左";
    				}
    			}else if(b>c&&c>a){
    				xValue = a.toFixed(2);
    				xReference = "左焊缝";
    				if(xCoordinate>LLx){
    					xDirection = "右";
    				}else{
    					xDirection = "左";
    				}
    			}else if(c>a&&a>b){
    				xValue = b.toFixed(2);
    				xReference = "右焊缝";
    				if(xCoordinate>RLx){
    					xDirection = "右";
    				}else{
    					xDirection = "左";
    				}
    			}else{
    				xValue = a.toFixed(2);
    				xReference = "左焊缝";
    				if(xCoordinate>LLx){
    					xDirection = "右";
    				}else{
    					xDirection = "左";
    				}
    			}
    			
    			// 获取y轴需要的信息
    			// 左焊缝顶部点
		    	var leftLineTop = parseInt(LLy) - parseInt(LLlength/2); 
		    	// 左焊缝底部点
		    	var leftLineBottom = parseInt(LLy) + parseInt(LLlength/2);  
		    	// 获取y轴需要的信息
		    	var d = Math.abs(yCoordinate - MLy); // 筒体焊缝 0
		    	var e = Math.abs(yCoordinate - leftLineTop);  // 左焊缝顶部 1
		    	var f = Math.abs(yCoordinate - leftLineBottom); // 左焊缝底部 2
		    	// 接收y轴信息
		    	var yLine = "";  // 焊缝
		    	var yLRTB = "";  // 方向 0上 1下
    			var yValue = ""; // 距离
    			// 获取值
    			if(d>e&&e>f){
    				yValue = f.toFixed(2);
    				yReference = "左焊缝底部";
    				if(yCoordinate>leftLineBottom){
    					yDirection = "下";
    				}else{
    					yDirection = "上";
    				}
    			}else if(d>f&&f>e){
    				yValue = e.toFixed(2);
    				yReference = "左焊缝顶部";
    				if(yCoordinate>leftLineTop){
    					yDirection = "下";
    				}else{
    					yDirection = "上";
    				}
    			}else if(e>d&&d>f){
    				yValue = f.toFixed(2);
    				yReference = "左焊缝底部";
    				if(yCoordinate>leftLineBottom){
    					yDirection = "下";
    				}else{
    					yDirection = "上";
    				}
    			}else if(e>f&&f>d){
    				yValue = d.toFixed(2);
    				yReference = "筒体焊缝";
    				if(yCoordinate>MLy){
    					yDirection = "下";
    				}else{
    					yDirection = "上";
    				}
    			}else if(f>d&&d>e){
    				yValue = e.toFixed(2);
    				yReference = "左焊缝顶部";
    				if(yCoordinate>leftLineTop){
    					yDirection = "下";
    				}else{
    					yDirection = "上";
    				}
    			}else{
    				yValue = d.toFixed(2);
    				yReference = "筒体焊缝";
    				if(yCoordinate>MLy){
    					yDirection = "下";
    				}else{
    					yDirection = "上";
    				}
    			}
    			
    			// 判断点位是右焊缝右边，且距离超过25
    			 if(xReference=="右焊缝"&&xDirection=="右"&&xValue>25){
    	 			//  获取该点的两个直角边的长度
    	 			var LLx = parseInt(Math.abs(Math.abs(xCoordinate) - Math.abs(RRx)));
    	 			var LLy = parseInt(Math.abs(Math.abs(yCoordinate) - Math.abs(RRy)));
    	 			//  求出点到圆心的距离
    	 			var distance = parseInt(Math.sqrt(Math.pow(LLx,2)+Math.pow(LLy,2)));
    	 			//  求出该点与圆心的角度
    	 			var ap = LLy/LLx;
    	 			var angle = 0; // 角度
    	 			//  算出点位在那一个象限
    	 			if(xCoordinate>RRx&&yCoordinate<RRy){ // 第一象限
    	 				// 第一象限角度不变
    	 				angle = parseInt(Math.atan(ap) * 180/Math.PI);
    	 			}else if(xCoordinate<RRx&&yCoordinate<RRy){ // 第二象限
    	 				// 第二象限用180减去算出来的角度
    	 				angle = parseInt(180 - (Math.atan(ap) * 180/Math.PI));
    	 			}else if(xCoordinate<RRx&&yCoordinate>RRy){ // 第三象限
    	 				// 第三象限为180加上算出来的角度
    	 				angle = parseInt(180 + (Math.atan(ap) * 180/Math.PI));
    	 			}else{  // 第四象限
    	 				// 第四象限为360度减去算出来的角度
    	 				angle = parseInt(360 - (Math.atan(ap) * 180/Math.PI));
    	 			}
    	 			
    	 			// 判断点到圆心距离小于10都视为圆心
    	 			if(distance<=10){
    	 				xCoordinate = parseInt(RRx);
    	 				yCoordinate = parseInt(RRy);
    	 			}
    	 			
    	 			// 将该点的信息设置进去
    	 			element.set("templateType",templateType);
    	 			element.set("xCoordinate",xCoordinate);
		   			element.set("yCoordinate",yCoordinate);
		   			element.set("referenceR","右封头");
		   			element.set("distance",distance);
		   			element.set("angle",angle);
		   			element.set("type",1);
		   		    // 封头添加信息方法
    				headAddValue(element);
		   		    
    	 		 // 判断点位是左焊缝左边，且距离超过25
    			}else if(xReference=="左焊缝"&&xDirection=="左"&&xValue>25){
    			//  获取该点的两个直角边的长度
    	 			var LLx = parseInt(Math.abs(Math.abs(xCoordinate) - Math.abs(LRx)));
    	 			var LLy = parseInt(Math.abs(Math.abs(yCoordinate) - Math.abs(LRy)));
    	 			//  求出点到圆心的距离
    	 			var distance = parseInt(Math.sqrt(Math.pow(LLx,2)+Math.pow(LLy,2)));
    	 			//  求出该点与圆心的角度
    	 			var ap = LLy/LLx;
    	 			var angle = 0; // 角度
    	 			//  算出点位在那一个象限
    	 			if(xCoordinate<LRx&&yCoordinate<LRy){ // 第一象限
    	 				// 第一象限角度不变
    	 				angle = parseInt(Math.atan(ap) * 180/Math.PI);
    	 			}else if(xCoordinate>LRx&&yCoordinate<LRy){ // 第二象限
    	 				// 第二象限用180减去算出来的角度
    	 				angle = parseInt(180 - (Math.atan(ap) * 180/Math.PI));
    	 			}else if(xCoordinate>LRx&&yCoordinate>LRy){ // 第三象限
    	 				// 第三象限为180加上算出来的角度
    	 				angle = parseInt(180 + (Math.atan(ap) * 180/Math.PI));
    	 			}else{  // 第四象限
    	 				// 第四象限为360度减去算出来的角度
    	 				angle = parseInt(360 - (Math.atan(ap) * 180/Math.PI));
    	 			}
    	 			
    	 		   // 判断点到圆心距离小于10都视为圆心
    	 			if(distance<=10){
    	 				xCoordinate = parseInt(LRx);
    	 				yCoordinate = parseInt(LRy);
    	 			}
    	 			
    	 			// 将该点的信息设置进去
    	 			element.set("templateType",templateType);
    	 			element.set("xCoordinate",xCoordinate);
		   			element.set("yCoordinate",yCoordinate);
		   			element.set("referenceR","左封头");
		   			element.set("distance",distance);
		   			element.set("angle",angle);
		   			element.set("type",1);
    				// 封头添加信息方法
    				headAddValue(element);
    				
    			}else{
    				// 将值设置进去
		   			element.set("templateType",templateType);
		   			element.set("xReference",xReference);
		   			element.set("xDirection",xDirection);
		   			element.set("xValue",xValue);
		   			element.set("yReference",yReference);
		   			element.set("yDirection",yDirection);
		   			element.set("yValue",yValue);
		   			element.set("xCoordinate",xCoordinate);
		   			element.set("yCoordinate",yCoordinate);
		   			element.set("type",0);
    				barrelAddValue(element);
    			}
    		   
    		}else if(templateType=="0"){ // 立式
			    // 添加最新的值
				pdTemplateType(templateType);
    			// 获取x轴需要的信息
    			// 获取上焊缝的左部的值
	    		var topLineLeft = parseInt(LLx) - parseInt(LLlength/2); 
	    		 // 获取上焊缝的右部的值
	    		var topLineRight = parseInt(LLx) + parseInt(LLlength/2); 
	    		// 获取x轴需要的信息
	    		var a = Math.abs(xCoordinate - topLineLeft); // 上焊缝左部 1
		    	var b = Math.abs(xCoordinate - topLineRight);  // 上焊缝右部 2
		    	var c = Math.abs(xCoordinate - MLx); // 筒体焊缝 0
    			// 接收x轴信息
		    	var xLine = "";  // 焊缝
		    	var xLRTB = "";  // 方向
    			var xValue = ""; // 距离
    			// 获取值
    			if(a>b&&b>c){
    				xValue = c.toFixed(2);
    				xReference = "筒体焊缝";
    				if(xCoordinate>MLx){
    					xDirection = "右";
    				}else{
    					xDirection = "左";
    				}
    			}else if(a>c&&c>b){
    				xValue = b.toFixed(2);
    				xReference = "上焊缝右部";
    				if(xCoordinate>topLineRight){
    					xDirection = "右";
    				}else{
    					xDirection = "左";
    				}
    			}else if(b>a&&a>c){
    				xValue = c.toFixed(2);
    				xReference = "筒体焊缝";
    				if(xCoordinate>MLx){
    					xDirection = "右";
    				}else{
    					xDirection = "左";
    				}
    			}else if(b>c&&c>a){
    				xValue = a.toFixed(2);
    				xReference = "上焊缝左部";
    				if(xCoordinate>topLineLeft){
    					xDirection = "右";
    				}else{
    					xDirection = "左";
    				}
    			}else if(c>a&&a>b){
    				xValue = b.toFixed(2);
    				xReference = "上焊缝右部";
    				if(xCoordinate>topLineRight){
    					xDirection = "右";
    				}else{
    					xDirection = "左";
    				}
    			}else{
    				xValue = a.toFixed(2);
    				xReference = "上焊缝左部";
    				if(xCoordinate>topLineLeft){
    					xDirection = "右";
    				}else{
    					xDirection = "左";
    				}
    			}
    		
   			    // 获取y轴需要的信息
		    	var d = Math.abs(yCoordinate - LLy);  // 上焊缝 0
		    	var e = Math.abs(yCoordinate - RLy);  // 下焊缝 1
		    	var f = Math.abs(yCoordinate - MLy);  // 筒体焊缝中心 2
		    	// 接收y轴信息
		    	var yLine = "";  // 焊缝
		    	var yLRTB = "";  // 方向
	   			var yValue = ""; // 距离
	   		    // 获取值
	   			if(d>e&&e>f){
					yValue = f.toFixed(2);
					yReference = "筒体焊缝中心";
					if(yCoordinate>MLy){
						yDirection = "下";
					}else{
						yDirection = "上";
					}
				}else if(d>f&&f>e){
					yValue = e.toFixed(2);
					yReference = "下焊缝";
					if(yCoordinate>RLy){
						yDirection = "下";
					}else{
						yDirection = "上";
					}
				}else if(e>d&&d>f){
					yValue = f.toFixed(2);
					yReference = "筒体焊缝中心";
					if(yCoordinate>MLy){
						yDirection = "下";
					}else{
						yDirection = "上";
					}
				}else if(e>f&&f>d){
					yValue = d.toFixed(2);
					yReference = "上焊缝";
					if(yCoordinate>LLy){
						yDirection = "下";
					}else{
						yDirection = "上";
					}
				}else if(f>d&&d>e){
					yValue = e.toFixed(2);
					yReference = "下焊缝";
					if(yCoordinate>RLy){
						yDirection = "下";
					}else{
						yDirection = "上";
					}
				}else{
					yValue = d.toFixed(2);
					yReference = "上焊缝";
					if(yCoordinate>LLy){
						yDirection = "下";
					}else{
						yDirection = "上";
					}
				}
	   		   
	   		// 判断点位是上焊缝上边，且距离超过25
   			 if(yReference=="上焊缝"&&yDirection=="上"&&yValue>25){
   	 			//  获取该点的两个直角边的长度
   	 			var LLx = parseInt(Math.abs(Math.abs(xCoordinate) - Math.abs(LRx)));
   	 			var LLy = parseInt(Math.abs(Math.abs(yCoordinate) - Math.abs(LRy)));
   	 			//  求出点到圆心的距离
   	 			var distance = parseInt(Math.sqrt(Math.pow(LLx,2)+Math.pow(LLy,2)));
   	 			//  求出该点与圆心的角度
   	 			var ap = LLy/LLx;
   	 			var angle = 0; // 角度
   	 			//  算出点位在那一个象限
   	 			if(xCoordinate>LRx&&yCoordinate>LRy){ // 第一象限
   	 				// 第一象限角度不变
   	 				angle = parseInt(90 - (Math.atan(ap) * 180/Math.PI));
   	 			}else if(xCoordinate>LRx&&yCoordinate<LRy){ // 第二象限
   	 				// 第二象限用180减去算出来的角度
   	 				angle = parseInt(90 + (Math.atan(ap) * 180/Math.PI));
   	 			}else if(xCoordinate<LRx&&yCoordinate<LRy){ // 第三象限
   	 				// 第三象限为180加上算出来的角度
   	 				angle = parseInt(270 - (Math.atan(ap) * 180/Math.PI));
   	 			}else{  // 第四象限
   	 				// 第四象限为360度减去算出来的角度
   	 				angle = parseInt(270 + (Math.atan(ap) * 180/Math.PI));
   	 			}
   	 			
   	 		    // 判断点到圆心距离小于10都视为圆心
	 			if(distance<=10){
	 				xCoordinate = parseInt(LRx);
	 				yCoordinate = parseInt(LRy);
	 			}
   	 			
   	 			// 将该点的信息设置进去
   	 			element.set("templateType",templateType);
   	 			element.set("xCoordinate",xCoordinate);
	   			element.set("yCoordinate",yCoordinate);
	   			element.set("referenceR","上封头");
	   			element.set("distance",distance);
	   			element.set("angle",angle);
	   			element.set("type",1);
		   		    // 封头添加信息方法
   				headAddValue(element);
		   		    
   	 		 // 判断点位是左焊缝左边，且距离超过25
   			} else if(yReference=="下焊缝"&&yDirection=="下"&&yValue>25){
   			//  获取该点的两个直角边的长度
   	 			var LLx = parseInt(Math.abs(Math.abs(xCoordinate) - Math.abs(RRx)));
   	 			var LLy = parseInt(Math.abs(Math.abs(yCoordinate) - Math.abs(RRy)));
   	 			//  求出点到圆心的距离
   	 			var distance = parseInt(Math.sqrt(Math.pow(LLx,2)+Math.pow(LLy,2)));
   	 			//  求出该点与圆心的角度
   	 			var ap = LLy/LLx;
   	 			var angle = 0; // 角度
   	 			//  算出点位在那一个象限
   	 			if(xCoordinate>RRx && yCoordinate<RRy){ // 第一象限
   	 				// 第一象限角度不变
   	 				angle = parseInt(90 - (Math.atan(ap) * 180/Math.PI));
   	 			}else if(xCoordinate>RRx && yCoordinate>RRy){ // 第二象限
   	 				// 第二象限用180减去算出来的角度
   	 				angle = parseInt(90 + (Math.atan(ap) * 180/Math.PI));
   	 			}else if(xCoordinate<RRx && yCoordinate>RRy){ // 第三象限
   	 				// 第三象限为180加上算出来的角度
   	 				angle = parseInt(270 - (Math.atan(ap) * 180/Math.PI));
   	 			}else{  // 第四象限
   	 				// 第四象限为360度减去算出来的角度
   	 				angle = parseInt(270 + (Math.atan(ap) * 180/Math.PI));
   	 			}
   	 			
   	 		// 判断点到圆心距离小于10都视为圆心
	 			if(distance<=10){
	 				xCoordinate = parseInt(RRx);
	 				yCoordinate = parseInt(RRy);
	 			}
   	 			
   	 			// 将该点的信息设置进去
   	 			element.set("templateType",templateType);
   	 			element.set("xCoordinate",xCoordinate);
	   			element.set("yCoordinate",yCoordinate);
	   			element.set("referenceR","下封头");
	   			element.set("distance",distance);
	   			element.set("angle",angle);
	   			element.set("type",1);
   				// 封头添加信息方法
   				headAddValue(element);
   				
   			}else{
   				// 将值设置进去
	   			element.set("templateType",templateType);
	   			element.set("xReference",xReference);
	   			element.set("xDirection",xDirection);
	   			element.set("xValue",xValue);
	   			element.set("yReference",yReference);
	   			element.set("yDirection",yDirection);
	   			element.set("yValue",yValue);
	   			element.set("xCoordinate",xCoordinate);
	   			element.set("yCoordinate",yCoordinate);
	   			element.set("type",0);
   				barrelAddValue(element);
   			  } 	 
    		}
        }
        
       // 获取参照物信息进行打点
	    function markPointRefer(pointColor,type,templateType,markName,markLand,xReference,xDirection,xValue,
	    		yReference,yDirection,yValue,angle,distance,referenceR,pointFlag){
    		// 整个图形的焊缝值遍历
	    	var array = graph._kjModel._j7;
	    	// 给一个判断标识
        	var num = 0;
	    	// 左焊缝   
	    	var LLx = 0;
	    	var LLy = 0;
	    	var LLlength = 0;
	    	// 右焊缝  
	    	var RLx = 0;   
	    	var RLy = 0;
	    	// 筒体焊缝
	    	var MLx = 0;
	    	var MLy = 0;
	    	var MLlength = 0;
	    	// 左圆  上圆
        	var LRx = 0;
        	var LRy = 0;
        	// 右圆  下圆
        	var RRx = 0;
        	var RRy = 0;
	    	// 遍历图形
	    	for(var i=0;i<array.length;i++){
	    		if(array[i].get('ShapeType')=='ChildNodeRL'){ //右焊缝
            	    RLx = array[i].x;
            	    num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeLL'){ //左焊缝 
            	    LLx = array[i].x;
            	    LLy = array[i].y;
            	    LLlength = array[i].$image._iy;
            	    num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeML'){ //筒体焊缝
            	    MLx = array[i].x;
            	    MLy = array[i].y;
            	    MLlength = array[i].$image._iy;
            	    num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeTL'){ //上焊缝
	            	LLx = array[i].x;
            	    LLy = array[i].y;
            	    LLlength = array[i].$image._iy;
            	    num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeBL'){ //下焊缝
	            	RLy = array[i].y;
	            	num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeLR'){ // 左边圆
	            	LRx = array[i].x;
	            	LRy = array[i].y;
	            	num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeRR'){ // 右边圆
	            	RRx = array[i].x;
	            	RRy = array[i].y;
	            	num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeTR'){ // 上边圆
	            	LRx = array[i].x;
	            	LRy = array[i].y;
	            	num++;
	            }else if(array[i].get('ShapeType') == 'ChildNodeBR'){ // 下边圆
	            	RRx = array[i].x;
	            	RRy = array[i].y;
	            	num++;
	            }   
	    		if(num==5){
	    			break;
	    		}
	    		
	    	} 
    		
	    	// x轴的坐标点
	    	var xPoint = "";
	    	// y轴的坐标点
	    	var yPoint = "";
	    	// 判断当前点位点击的是修改
	    	if(pointFlag=="1"){
   	        var model = graph.graphModel;  // 获取对象
   	        model.remove(element);         // 删除对象
   		   }
	    	// 根据类型判断，进行打点
	    	if(templateType==1){
	    		// 判断x轴:选择的参照物和方向
		    	if(xReference=='左焊缝'&&xDirection=='左'){ //选择的是左焊缝且方向为左
		    		xPoint = parseInt(LLx) - parseInt(xValue);
		    	
		    	}else if(xReference=='左焊缝'&&xDirection=='右'){ //选择的是左焊缝且方向为右
		    		xPoint = parseInt(LLx) + parseInt(xValue);
		    	
		    	}else if(xReference=='右焊缝'&&xDirection=='左'){ //选择的是右焊缝且方向为左
		    		xPoint = parseInt(RLx) - parseInt(xValue);
		    	
		    	}else if(xReference=='右焊缝'&&xDirection=='右'){ //选择的是右焊缝且方向为右	
		    		xPoint = parseInt(RLx) + parseInt(xValue);
		    	
		    	}else if(xReference=='筒体焊缝中心'&&xDirection=='左'){ //选择的是筒体焊缝中心且方向为左	
		    		xPoint = parseInt(MLx) - parseInt(xValue);
		    	
		    	}else{ //选择的是筒体焊缝中心且方向为右	
		    		xPoint = parseInt(MLx) + parseInt(xValue);
		    	}
		    	// 左焊缝顶部点
		    	var leftLineTop = parseInt(LLy) - parseInt(LLlength/2);
		    	// 左焊缝底部点
		    	var leftLineBottom = parseInt(LLy) + parseInt(LLlength/2);
		    	// 判断y轴:选择的参照物和方向    
		    	if(yReference=='筒体焊缝'&&yDirection=='上'){ //选择的是筒体焊缝且方向为上  
		    		yPoint = parseInt(MLy) - parseInt(yValue);
		    	
		    	}else if(yReference=='筒体焊缝'&&yDirection=='下'){ //选择的是筒体焊缝且方向为下
		    		yPoint = parseInt(MLy) + parseInt(yValue);
		    	
		    	}else if(yReference=='左焊缝顶部'&&yDirection=='上'){ //选择的是左焊缝顶部且方向为上
		    		yPoint = parseInt(leftLineTop) - parseInt(yValue);
		    	
		    	}else if(yReference=='左焊缝顶部'&&yDirection=='下'){ //选择的是左焊缝顶部且方向为下
		    		yPoint = parseInt(leftLineTop) + parseInt(yValue);
		    	
		    	}else if(yReference=='左焊缝底部'&&yDirection=='上'){ //选择的是左焊缝底部且方向为上
		    		yPoint = parseInt(leftLineBottom) - parseInt(yValue);
		    	
		    	}else{ //选择的是左焊缝底部且方向为下	
		    		yPoint = parseInt(leftLineBottom) + parseInt(yValue);
		    	} 
		    	
		    	// 判断打点的方式
		    	if(type=="0"){
		    		// 判断值不为空
			    	if(xValue!=""&&yValue!=""&&markLand!=""){
			    		if(pointFlag=="1"){
		    	   	        var model = graph.graphModel;  // 获取对象
		    	   	        model.remove(element);         // 删除对象
		    	   		   }
				    	// 创建点位
				    	var markPoint = graph.createNode("" + markName + "", parseFloat(xPoint), parseFloat(yPoint));
				    	markPoint.image = 'lamp'; 
				    	markPoint.setStyle(Q.Styles.RENDER_COLOR, ""+pointColor+"",'2');
				    	markPoint.zIndex = 1;
				    	// 设置点的属性
				    	markPoint.set("markName",markName);
				    	markPoint.set("templateType",templateType);
				    	markPoint.set("markLand",markLand);
				    	markPoint.set("markType",markType);
				    	markPoint.set("type",type);
				    	markPoint.set("xReference",xReference);
				    	markPoint.set("xDirection",xDirection);
				    	markPoint.set("xValue",xValue);
				    	markPoint.set("yReference",yReference);
				    	markPoint.set("yDirection",yDirection);
				    	markPoint.set("yValue",yValue);
				    	markPoint.set("xCoordinate",xPoint);
				    	markPoint.set("yCoordinate",yPoint);
				    	markPoint.editable=false; 
				    	markPoint.tooltip = "点位编号："+markName+"<br/>测点壁厚："+markLand+"<br/>x轴坐标："
				    	         +xPoint+"<br/>y轴坐标："+yPoint+"<br/>距离x轴最近的："+"<br/>焊缝是："+xReference
				    	         +"<br/>方向是："+xDirection+"<br/>距离是："+xValue+"<br/>距离y轴最近的："
				    	         +"<br/>焊缝是："+yReference+"<br/>方向是："+yDirection+"<br/>距离是："+yValue;	
						// 设置将点位和图一起联动
				        markPoint.parent = syncA;
						markPoint.host = syncA; 
	    	            // 将点的信息清空
				    	$("#markLand").val(""); 
				    	$("#xValue").val(""); 
				    	$("#yValue").val(""); 
				    	$(".col1").text("");
				    	$(".col2").text("");
				    	$(".col3").text("");
				    	$('#special').modal('hide'); // 隐藏modal 
			    	}else if(markLand==""){
			    		$(".col1").text("测点壁厚不能为空");
			    	}else if(xValue==""){
			    		$(".col2").text("x轴值不能为空");
			    	}else if(yValue==""){
			    		$(".col3").text("y轴值不能为空");
			    	}
		    	}else{ 
		    		// 判断值不为空
			    	if(markLand!=""&&angle!=""&&distance!=""){
			    		// angle,distance,referenceR
			    		if(referenceR=="右封头"){  // 先判断是右封头
			    			//判断角度所处的象限
			    			var x1=1;
			    		    var y1=1;
			    		    if(angle>90 && angle<=270)
			    		    	{x1=-1;}
			    		    if(angle>0 && angle<=180)
		    		    	{y1=-1;}
		    			    var LLy = Math.sin(2*Math.PI/360*angle)*distance;
		    			    var LLx = Math.sqrt(Math.pow(distance,2)-Math.pow(LLy,2));
		    			    // 算出该点的坐标
		    			    xPoint = parseInt(RRx + x1* Math.abs(LLx));
		    			    yPoint = parseInt(RRy + y1 * Math.abs(LLy)); 
		    			    headPoint(xPoint,yPoint,markName,templateType,markLand,markType,
		    			  			referenceR,angle,distance,pointColor,type,RRx,RRy)
			    		}else {   // 左封头
			    			//判断角度所处的象限
			    			var x1=-1;
			    		    var y1=1;
			    		    if(angle>90 && angle<=270)
			    		    	{x1=1;}
			    		    if(angle>0 && angle<=180)
		    		    	    {y1=-1;}
		    			    var LLy = Math.sin(2*Math.PI/360*angle)*distance;
		    			    var LLx = Math.sqrt(Math.pow(distance,2)-Math.pow(LLy,2));
		    			    // 算出该点的坐标
		    			    xPoint = parseInt(LRx + x1 * Math.abs(LLx));
		    			    yPoint = parseInt(LRy + y1 * Math.abs(LLy)); 
		    			    headPoint(xPoint,yPoint,markName,templateType,markLand,markType,
		    			  			referenceR,angle,distance,pointColor,type,LRx,LRy);
		    			    
			    		} 
			    	}else if(markLand==""){
			    		$(".col1").text("测点壁厚不能为空");
			    	}else if(angle==""){
			    		$(".col4").text("角度不能为空");
			    	}else if(distance==""){
			    		$(".col5").text("距离不能为空");
			    	}
		    	}
	    	 }else if(templateType=="0"){   // 立式
    		    // 获取上焊缝的左部
	    		var topLineLeft = parseInt(LLx) - parseInt(LLlength/2);
	    		// 获取上焊缝的右部
	    		var topLineRight = parseInt(LLx) + parseInt(LLlength/2);
	    		// 判断x轴:选择的参照物和方向
	    		if(xReference=='筒体焊缝'&&xDirection=='左'){ //选择的是筒体焊缝且方向为左
		    		xPoint = parseInt(MLx) - parseInt(xValue);
		    	
		    	}else if(xReference=='筒体焊缝'&&xDirection=='右'){ //选择的是筒体焊缝且方向为右
		    		xPoint = parseInt(MLx) + parseInt(xValue);
		    	
		    	}else if(xReference=='上焊缝左部'&&xDirection=='左'){ //选择的是上焊缝左部且方向为左
		    		xPoint = parseInt(topLineLeft) - parseInt(xValue);
		    		
		    	}else if(xReference=='上焊缝左部'&&xDirection=='右'){ //选择的是上焊缝左部且方向为右	
		    		xPoint = parseInt(topLineLeft) + parseInt(xValue);
		    	
		    	}else if(xReference=='上焊缝右部'&&xDirection=='左'){ //选择的是上焊缝右部且方向为左
		    		xPoint = parseInt(topLineRight) - parseInt(xValue);
		    		
		    	}else { //选择的是上焊缝右部且方向为右	
		    		xPoint = parseInt(topLineRight) + parseInt(xValue);
		    	
		    	}
	    		
	    		// 判断y轴:选择的参照物和方向    
	    		if(yReference=='上焊缝'&&yDirection=='上'){ //选择的是上焊缝且方向为上  
		    		yPoint = parseInt(LLy) - parseInt(yValue);
		    	
		    	}else if(yReference=='上焊缝'&&yDirection=='下'){ //选择的是上焊缝且方向为下
		    		yPoint = parseInt(LLy) + parseInt(yValue);
		    	
		    	}else if(yReference=='下焊缝'&&yDirection=='上'){ //选择的是下焊缝且方向为上
		    		yPoint = parseInt(RLy) - parseInt(yValue);
		    	
		    	}else if(yReference=='下焊缝'&&yDirection=='下'){ //选择的是下焊缝且方向为下
		    		yPoint = parseInt(RLy) + parseInt(yValue);
		    	
		    	}else if(yReference=='筒体焊缝中心'&&yDirection=='上'){ //选择的是筒体焊缝中心且方向为上
		    		yPoint = parseInt(MLy) - parseInt(yValue);
		    	
		    	}else{ //选择的是筒体焊缝中心且方向为下	
		    		yPoint = parseInt(MLy) + parseInt(yValue);
		    	
		    	} 
	    		
	    		// 判断打点的方式
		    	if(type=="0"){
		    		// 判断值不为空
			    	if(xValue!=""&&yValue!=""&&markLand!=""){
			    		if(pointFlag=="1"){
		    	   	        var model = graph.graphModel;  // 获取对象
		    	   	        model.remove(element);         // 删除对象
		    	   		   }
				    	// 创建点位
				    	var markPoint = graph.createNode("" + markName + "", parseFloat(xPoint), parseFloat(yPoint));
				    	markPoint.image = 'lamp'; 
				    	markPoint.setStyle(Q.Styles.RENDER_COLOR, ""+pointColor+"",'2');
				    	markPoint.zIndex = 1;
				    	// 设置点的属性
				    	markPoint.set("markName",markName);
				    	markPoint.set("templateType",templateType);
				    	markPoint.set("markLand",markLand);
				    	markPoint.set("markType",markType);
				    	markPoint.set("type",type);
				    	markPoint.set("xReference",xReference);
				    	markPoint.set("xDirection",xDirection);
				    	markPoint.set("xValue",xValue);
				    	markPoint.set("yReference",yReference);
				    	markPoint.set("yDirection",yDirection);
				    	markPoint.set("yValue",yValue);
				    	markPoint.set("xCoordinate",xPoint);
				    	markPoint.set("yCoordinate",yPoint);
				    	markPoint.editable=false; 
				    	markPoint.tooltip = "点位编号："+markName+"<br/>测点壁厚："+markLand+"<br/>x轴坐标："
		    	         +xPoint+"<br/>y轴坐标："+yPoint+"<br/>距离x轴最近的："+"<br/>焊缝是："+xReference
		    	         +"<br/>方向是："+xDirection+"<br/>距离是："+xValue+"<br/>距离y轴最近的："
		    	         +"<br/>焊缝是："+yReference+"<br/>方向是："+yDirection+"<br/>距离是："+yValue;	
						// 设置将点位和图一起联动
				        markPoint.parent = syncA;
						markPoint.host = syncA; 
	    	            // 将点的信息清空
				    	$("#markLand").val(""); 
				    	$("#xValue").val(""); 
				    	$("#yValue").val(""); 
				    	$(".col1").text("");
				    	$(".col2").text("");
				    	$(".col3").text("");
				    	$('#special').modal('hide'); // 隐藏modal 
			    	}else if(markLand==""){
			    		$(".col1").text("测点壁厚不能为空");
			    	}else if(xValue==""){
			    		$(".col2").text("x轴值不能为空");
			    	}else if(yValue==""){
			    		$(".col3").text("y轴值不能为空");
			    	}
		    	}else{ 
		    		// 判断值不为空
			    	if(markLand!=""&&angle!=""&&distance!=""){
			    		if(referenceR=="下封头"){  // 先判断是右封头
			    			//判断角度所处的象限
			    			var x1= -1;
			    		    var y1=-1;
			    		    if(angle>0 && angle<=180)
			    		    	{x1=1;}
			    		    if(angle>90 && angle<=270)
		    		    	    {y1=1;}
		    			    var LLx = Math.sin(2*Math.PI/360*angle)*distance;
		    			    var LLy = Math.sqrt(Math.pow(distance,2)-Math.pow(LLx,2));
		    			    // 算出该点的坐标
		    			    xPoint = parseInt(RRx + x1* Math.abs(LLx));
		    			    yPoint = parseInt(RRy + y1 * Math.abs(LLy)); 
		    			    headPoint(xPoint,yPoint,markName,templateType,markLand,markType,
		    			  			referenceR,angle,distance,pointColor,type,RRx,RRy); 
			    		} else {   // 上封头
			    			//判断角度所处的象限
			    			var x1=1;
			    		    var y1=1;
			    		    if(angle>180 && angle<=360)
			    		    	{x1=-1;}
			    		    if(angle>90 && angle<=270)
		    		    	    {y1=-1;}
		    			    var LLx = Math.sin(2*Math.PI/360*angle)*distance;
		    			    var LLy = Math.sqrt(Math.pow(distance,2)-Math.pow(LLx,2));
		    			    // 算出该点的坐标
		    			    xPoint = parseInt(LRx + x1 * Math.abs(LLx));
		    			    yPoint = parseInt(LRy + y1 * Math.abs(LLy)); 
		    			    headPoint(xPoint,yPoint,markName,templateType,markLand,markType,
		    			  			referenceR,angle,distance,pointColor,type,LRx,LRy);
		    			    
			    		}   
			    	}else if(markLand==""){
			    		$(".col1").text("测点壁厚不能为空");
			    	}else if(angle==""){
			    		$(".col4").text("角度不能为空");
			    	}else if(distance==""){
			    		$(".col5").text("距离不能为空");
			    	}
		    	}
	    		
	    	 }
	    }
	    // 封头公用打点方法
	  	function headPoint(xPoint,yPoint,markName,templateType,markLand,markType,
	  			referenceR,angle,distance,pointColor,type,RRx,RRy){
	  	    if(distance<=10){
		    	xPoint = parseInt(RRx);
		    	yPoint = parseInt(RRy);
		    }
	  		 // 创建点位
	    	var markPoint = graph.createNode("" + markName + "", parseFloat(xPoint), parseFloat(yPoint));
	    	markPoint.image = 'lamp'; 
	    	markPoint.setStyle(Q.Styles.RENDER_COLOR, ""+pointColor+"",'2');
	    	markPoint.zIndex = 2;
	    	// 设置点的属性
	    	markPoint.set("markName",markName);
	    	markPoint.set("templateType",templateType);
	    	markPoint.set("markLand",markLand);
	    	markPoint.set("markType",markType);
	    	markPoint.set("referenceR",referenceR);
	    	markPoint.set("angle",angle);
	    	markPoint.set("type",type);
	    	markPoint.set("distance",distance);
	    	markPoint.set("xCoordinate",xPoint);
	    	markPoint.set("yCoordinate",yPoint);
	    	markPoint.editable=false; 
	    	markPoint.parent = syncA;
			markPoint.host = syncA; 
	    	markPoint.tooltip = "点位编号："+markName+"<br/>测点壁厚："+markLand +"<br/>x轴坐标："
	    	         +xPoint+"<br/>y轴坐标："+yPoint+"<br/>封头参照物：" +referenceR+"<br/>角度："
	    	         +angle+"°"+"<br/>点到圆心距离："+distance;
            // 将点的信息清空
	    	$("#markLand").val(""); 
	    	$("#angle").val(""); 
	    	$("#distance").val(""); 
	    	$(".col1").text("");
	    	$(".col4").text("");
	    	$(".col5").text("");
	    	$('#special').modal('hide'); // 隐藏modal   
	  	}   
	  	
	  	// 给封头上modal添加值
	  	 function headAddValue(element){
	  		$("#referenceR").attr("disabled",false);
			$("#angle").attr("disabled",false);
     		$("#distance").attr("disabled",false);
     		$("#xReference").attr("disabled",true);
     		$("#xDirection").attr("disabled",true);
     		$("#xValue").attr("disabled",true);
     		$("#yReference").attr("disabled",true);
     		$("#yDirection").attr("disabled",true);
     		$("#yValue").attr("disabled",true);
         	// 将之前的option清空
			$("#xReference").empty();
			$("#xDirection").empty();
			$("#yReference").empty();
			$("#yDirection").empty();
			$("#xValue").val("");
			$("#yValue").val("");
			var templateType = element.get("templateType");
			if(templateType=="1"){  // 卧式
				// 设置封头的参照物
				$("#referenceR").append("<option value='右封头'>右封头</option>");
				$("#referenceR").append("<option value='左封头'>左封头</option>");
			}else{ // 立式
				// 设置封头的参照物
				$("#referenceR").append("<option value='上封头'>上封头</option>");
				$("#referenceR").append("<option value='下封头'>下封头</option>");
			}
			
	  	    // 赋值
			 $("input:radio[name='type'][value='1']").prop("checked",true);
	   		 $("#xCoordinate").val(element.get("xCoordinate"));
	   		 $("#yCoordinate").val(element.get("yCoordinate"));
			 $("#distance").val(element.get("distance"));
			 $("#angle").val(element.get("angle"));
			 $("#referenceR option[value='"+element.get("referenceR")+"']").attr("selected",true);
	  	 }
	  	 // 给筒体modal添加值
	  	 function barrelAddValue(element){
  	         // 将x和y轴坐标写入
	   		 $("#xCoordinate").val(element.get("xCoordinate"));
	   		 $("#yCoordinate").val(element.get("yCoordinate"));
	    	 // 将之前的option清空
			 $("#xReference").empty();
			 $("#xDirection").empty();
			 $("#yReference").empty();
			 $("#yDirection").empty();	     	
	  		 $("#referenceR").attr("disabled",true);
			 $("#angle").attr("disabled",true);
     		 $("#distance").attr("disabled",true);
     		 $("#referenceR").empty();
     		 $("#angle").val("");
     		 $("#distance").val("");
     		 $("#xReference").attr("disabled",false);
     		 $("#xDirection").attr("disabled",false);
     		 $("#xValue").attr("disabled",false);
     		 $("#yReference").attr("disabled",false);
     		 $("#yDirection").attr("disabled",false);
     		 $("#yValue").attr("disabled",false);
			 // 添加最新的值
			 var templateType = element.get("templateType");
			 pdTemplateType(templateType);
			 // 将这些信息设置进去
			 $("#xReference option[value='"+element.get("xReference")+"']").attr("selected",true);
			 $("#xDirection option[value='"+element.get("xDirection")+"']").attr("selected",true);
			 $("#xValue").val(element.get("xValue"));
			 $("#yReference option[value='"+element.get("yReference")+"']").attr("selected",true);
			 $("#yDirection option[value='"+element.get("yDirection")+"']").attr("selected",true);
			 $("#yValue").val(element.get("yValue"));
	 		 $("input:radio[name='type'][value='0']").prop("checked",true); 
	  	 } 

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
		     syncA=shape1;
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
		     shape3.setStyle(Q.Styles.SHAPE_STROKE,2);
		     shape3.setStyle(Q.Styles.SHAPE_LINE_DASH, [8, 4]);
		     shape3.name="左焊缝";
		     shape3.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.LEFT_TOP);
		     shape3.setStyle(Q.Styles.LABEL_POSITION,Q.Position.LEFT_BOTTOM);
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
		     shape4.zIndex = 2;
		     shape4.editable=false; 
		     shape4.parent = shape1;
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
		     syncA=shape1;
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
	    }
	    
		 // 修改选中的图形或点位时将之前的点位清空
	       function removeSelection() {
	    	    var selection = this.selectionModel._values;
	    	    if (!selection || selection.length == 0) {
	    	        return false;
	    	    }
	    	    selection = selection.slice();
	    	    this.graphModel.remove(selection);
	    	    return selection;
	    	}