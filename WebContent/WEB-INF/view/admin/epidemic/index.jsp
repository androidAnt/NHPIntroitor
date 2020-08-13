<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="adminCode" value="<%=SystemConstant.SYS_SUPER_ADMINCODE%>"/>
    
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
        <label class="jelabel" style="width: 65px;">时间：</label>
        </div>
			  <div class="col-lg-5 col-md-4 col-xs-8">
                <div class="jeinpbox" style="width: 170px"><input type="text" id="startDate" value="${startTime }" class="jeinput moredate" placeholder="YYYY-MM-DD"></div>
            </div>
			<div class="col-lg-5 col-md-4 col-xs-8">
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
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>疫情上报统计列表</b>
    </div>
      <c:if test="${empty page.data}">
        <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
    </c:if>
    <c:if test="${not empty page.data}">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th width="44">序号</th>
                <th>日期</th>
                <th>用户总数</th>
                <th>已上报人数</th>
                <th>未上报人数</th>
                <th>上报率</th>
				<th width="185px">查看未上报人员</th>
            </tr>
            </thead>
            <tbody>
           <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number" style="text-align: center;">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
                    
                    <td> ${ fn:substring(list.staticDate ,0,10)}</td>
                  
                     <td>
                     	${list.staticTotalNum}人
                    </td>
                    <td>${list.staticComNum}人</td>
                    <td>${list.staticNoNum}人</td>
                    <td>${list.comRate}</td>
                    
                    <td>
                    
                    	<button class="btn btn-xs btn-purple openModal " data-toggle="modal" 
                                    title="查看详情" data-staticDate="${list.staticDate}">
                               <i class="ace-icon fa fa-eye bigger-120"></i>查看
                        </button>
                    </td>

                </tr>
            </c:forEach>
            </tbody>
             <c:if test="${page.totalPageNO>1}">
                <thead>
                <tr>
                    <th colspan="10">
                        <tags:pagination formID="form1"></tags:pagination>
                    </th>
                </tr>
                </thead>
            </c:if>
        </table>
 </c:if>
 
<div id="viewNoComUserInfo" class="modal fade" tabindex="-1" >
<div class="modal-dialog" style="width:60%">
<div class="modal-content">
            <div class="modal-header">
                <div class="table-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">当天未上报人员记录</h4>
                </div>
            </div>
     <div class="modal-body table-responsive">
		<iframe id="noComUser" src="" width="100%" height="90%" scrolling="no" frameborder="0" onload="this.height=500"></iframe>
	</div>

            </div>
</div>
</div>

  <form action="${root}/admin/epidemic/toViewNoCom" method="post" id="redirectForm">
    <input type="hidden" name="staticDate" id="staticDate">
    <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
</form>

 <form action="${root}/admin/epidemic" method="post" id="form1">
     <input type="hidden" name="startTime" id="startTime">
      <input type="hidden" name="endTime" id="endTime">
    <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
</form>

</div>
<script type="text/javascript" src="${root }/components/jeDate/test/demo.js"></script>
<script>
// 	搜索
	 $('#fa-search').click(function () {
        $("#endTime").val($("#endDate").val())
	 	$("#startTime").val($("#startDate").val())
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
//     重置
/*       $('#search_ret').click(function () {
        $("#menuName").val('');
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
    }); 
        //清空 查找全部
     $('#all-search').click(function () {
        $("#search_menuName").val('');
        $("#menuName").val('');
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
        $("#pageNO").val(1);
	    $('#form1').submit();
    }); */
    
   
    $('.openModal').click(function () {
    	var currdate = $(this).attr('data-staticDate');
    	document.getElementById("noComUser").setAttribute("src", root + "/admin/epidemic/viewNoComUserInfo?staticDate="+currdate);
    	/* $("#noComUser").set("action",root + "/admin/epidemic/viewNoComUserInfo?staticDate="+currdate); */
    	$('#viewNoComUserInfo').modal('show');
	})
	
    //跳转到修改页面
	$('.viewNoCom').click(function () {
	    $("#staticDate").val($(this).attr('data-staticDate'));
	    $("#redirectForm").attr('action', root + "/admin/epidemic/toViewNoCom");
	    $('#redirectForm').submit();
	});
</script>