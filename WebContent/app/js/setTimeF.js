    // 获取手持设备编号
	var deviceNo = localStorage.getItem('deviceNo'); 
	
	// 定时请求
	setInterval(function () {
 	    $.ajax({
 	        type: "post",
 	        dataType: "json",
 	        url: allUrl+"/mobi/login/getState",
 	        data:{
 	        	deviceNo:deviceNo
 	        },
 	        success:function(res){
 	        	var ajaxobj=eval("("+res+")");
 	            if(ajaxobj.status==0){
 	        	    $.toptip(ajaxobj.msg, 'error');
					   setTimeout(function () {
					      window.location.href=allUrl+"/app/login.html?deviceNo="+deviceNo;
	                   }, 2000)
 	            } 
 	         }
 	    });
 	},30000)