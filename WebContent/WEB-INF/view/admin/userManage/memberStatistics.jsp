<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script type="text/javascript" src="${root}/js/echarts.js"></script>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-file-text-o" aria-hidden="true"></span>
        <b>会员统计</b>
    </div>
    <div class="panel-body">
        <div class="row">
            <div id="main" style="width: 1000px;height:500px;float: left;"></div>
        </div>
    </div>
</div>

<form action="${root}/system/user/memberQuery" method="post" id="backForm">
    <c:forEach items="${paramMap}" var="item" varStatus="status">
        <input type="hidden" name="${item.key}" value="${item.value}"/>
    </c:forEach>
</form>

<script>
  $("#back").click(function () {
        $("#backForm").submit();
    });
	
	var sysUserOrgName = JSON.parse('${orgNameList}') ;
	var sysUserList = JSON.parse('${sysUserList}');
    var myChart = echarts.init(document.getElementById('main'));
 	option = {
    backgroundColor:'#FFF',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}({d}%)"
    },
    legend: {
    	orient: 'vertical',
        left: 10,
        data:sysUserOrgName
    },
    series: [
        {
            name:'组织会员人数占比：',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],
            center: [500,800],
            color: ['#ccc', '#91e1e0',],
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{b}\n{d}%'
                    
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
        },
        {
            name:'组织会员人数占比：',
            type:'pie',
            radius: ['35%', '45%'],
            center: [700, 200],
            color: ['#669999','#33CC99','#CC6666', '#FF9966', '#3399CC'],
            label: {
                normal: {
                    formatter(v) {
	                    let text = v.name;
	        			let percent = Math.round(v.percent) + '%';
	                    if(text.length < 12){
	                    	return '{b}\n ({d}%)';
	                    }else{
	                    	return text.slice(0,12)+'\n' +text.slice(12)+'\n'+"占比："+percent
	                    }
                 }
                }
            },
            data:sysUserList
        }
    ]
};
      myChart.setOption(option);
    
</script>