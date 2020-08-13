<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="adminCode" value="<%=SystemConstant.SYS_SUPER_ADMINCODE%>"/>
<script type="text/javascript" src="${root}/js/echarts.js"></script>
<link type="text/css" rel="stylesheet" href="${root }/components/jeDate/test/jeDate-test.css">
    <link type="text/css" rel="stylesheet" href="${root }/components/jeDate/skin/jedate.css">
    <script type="text/javascript" src="${root }/components/jeDate/src/jedate.js"></script>
<style type="text/css">
   th{
     text-align: center;
   }
</style>
<div class="row">
    <div class="col-lg-6" style="padding: 0;margin-bottom: 10px;padding-right: 25px;">
        <div class="input-group">
        <div class="col-lg-2 col-md-4 col-xs-8">
        <label class="jelabel" style="width: 65px;">时间</label>
        </div>
			  <div class="col-lg-5 col-md-4 col-xs-8">
<!--                 <label class="jelabel" >时间</label> -->
                <div class="jeinpbox" style="width: 170px"><input type="text" id="startDate" value="${startTime }" class="jeinput moredate" placeholder="YYYY-MM-DD"></div>
            </div>
			<div class="col-lg-5 col-md-4 col-xs-8">
<!--                 <label class="jelabel">结束时间</label> -->
                <div class="jeinpbox" style="width: 170px"><input type="text" id="endDate" value="${endTime }" class="jeinput moredate" placeholder="YYYY-MM-DD"></div>
            </div>
			<span class="input-group-btn">
                <button class="btn btn-sm btn-success" type="button" id="fa-search"><i
                        class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                </button>
            </span>
        </div>
    </div>
</div>
 <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 600px;height:480px;float: left;"></div>
    <div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>主席信箱统计列表</b>
    </div>
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th>未审核</th>
                <th>审核不通过</th>
                <th>审核通过</th>
                <th>已回复</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="">${tbMailbox.autp0 }</td>
                    <td style="">${tbMailbox.autp2 }</td>
                    <td style="">${tbMailbox.autp1 }</td>
                    <td style="">${tbMailbox.retp1 }</td>
                </tr>
            </tbody>
        </table>
</div>
<div id="main2" style="width: 504px;height:375px;float: left;"></div>
    <form action="${root}/admin/mailbox/statistics" method="post" id="redirectForm">
      <input type="hidden" name="startTime" id="startTime">
      <input type="hidden" name="endTime" id="endTime">
    </form>
    <script type="text/javascript" src="${root }/components/jeDate/test/demo.js"></script>
<script>
        var tbMailboxJson = '${tbMailboxJson}'
        var tbMailbox = eval("("+tbMailboxJson+")")
        //基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '主席信箱统计'
            },
            tooltip: {},
            legend: {
                data:['总数']
            },
            xAxis: {
                data: ["未审核","审核不通过","审核通过","已回复"]
            },
            yAxis: {},
            series: [{
                name: '总数',
                type: 'bar',
                barWidth: '50%',
                data: [tbMailbox.autp0, tbMailbox.autp2, tbMailbox.autp1,tbMailbox.retp1]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

	//饼图
	var myChart2 = echarts.init(document.getElementById('main2'));
	option2 = {
		tooltip : {
			trigger : 'item',
			formatter : '{a} <br/>{b}: {c} ({d}%)'
		},
		legend : {
			orient : 'vertical',
			left : 10,
			data : [ '未审核', '审核不通过', '审核通过', '已回复' ]
		},
		series : [
			{
				name : '状态',
				type : 'pie',
				radius : [ '50%', '70%' ],
				avoidLabelOverlap : false,
				label : {
					normal : {
						show : false,
						position : 'center'
					},
					emphasis : {
						show : true,
						textStyle : {
							fontSize : '30',
							fontWeight : 'bold'
						}
					}
				},
				labelLine : {
					normal : {
						show : false
					}
				},
				data : [
					{
						value : tbMailbox.autp0,
						name : '未审核'
					},
					{
						value : tbMailbox.autp2,
						name : '审核不通过'
					},
					{
						value : tbMailbox.autp1,
						name : '审核通过'
					},
					{
						value :tbMailbox.retp1,
						name : '已回复'
					},
				]
			}
		]
	};
  myChart2.setOption(option2);

	//查找
	$('#fa-search').click(function () {
	 $("#endTime").val($("#endDate").val())
	 $("#startTime").val($("#startDate").val())
	  $('#redirectForm').submit();
    });
</script>