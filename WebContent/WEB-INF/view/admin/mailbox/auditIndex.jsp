<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="adminCode" value="<%=SystemConstant.SYS_SUPER_ADMINCODE%>"/>
<link rel="stylesheet" href="${root}/components/dateRange/dateRange.css"/>
<script type="text/javascript" src="${root}/components/dateRange/dateRange.js"></script>
<style type="text/css">
   th{
     text-align: center;
   }
</style>

<div class="row">
    <div class="col-lg-6" style="padding: 0;margin-bottom: 10px;padding-right: 25px;">
        <div class="input-group">
            <input type="text" name="title" id="title" value="${tbMailbox.title}" class="form-control" placeholder="标题名称,支持模糊查找"
                   maxlength="20">
            <span class="input-group-btn">
                <button class="btn btn-sm btn-success" type="button" id="fa-search"><i
                        class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                </button>
<!--                  <button class="btn btn-sm btn-query marginLeft-5" type="button" data-toggle="modal" data-target="#searchModal" ><i -->
<!--                         class="ace-icon fa fa-star icon-on-right bigger-110"></i>高级查找 -->
<!--                 </button> -->
                <button class="btn btn-sm btn-error btn-clear marginLeft-5" type="button"  id="all-search"><i
                        class="ace-icon fa fa-remove icon-on-right bigger-110"></i>清空
                </button>
            </span>
        </div>
    </div>
</div>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>主席信箱列表</b>
    </div>
      <c:if test="${empty page.data}">
        <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
    </c:if>
    <c:if test="${not empty page.data}">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th width="44">序号</th>
                <th>标题</th>
<!--                 <th>内容</th> -->
                <th>发布人</th>
                <th>发布时间</th>
                <th>所属组织</th>
                <th>审核状态</th>
<!--                 <th>回复时间</th> -->
				<th width="185px">操作</th>
            </tr>
            </thead>
            <tbody>
           <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number" style="text-align: center;">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
                    <td style="">${list.title}</td>
                    <td style="width:100px">${list.creatUser}</td>
                    <td style="width:150px">${ fn:substring(list.creatDate ,0,19)}</td>
                    <td style="width:100px">${list.orgName}</td>
                    <c:if test="${list.auditorType==0}"> <td style="width:150px">未审核</td></c:if>
                    <c:if test="${list.auditorType!=0}"> <td style="width:150px">已审核
                     <c:if test="${list.auditorType==1}"> <span style="color:green;">(通过)</span></c:if>
                    <c:if test="${list.auditorType==2}"><span style="color:red;">(不通过)</span></c:if>
                    </td></c:if>
 	                <td>
 	                 <c:if test="${list.auditorType==0}">
	 	                <shiro:hasPermission name="tb_mailbox_edit">
	                            <button class="btn btn-xs btn-info editData" title="审核" data-mailboxId="${list.mailboxId}">
	                                <i class="ace-icon fa fa-edit bigger-120"></i>审核
	                            </button>
	                        </shiro:hasPermission>
                        </c:if>
                        <shiro:hasPermission name="tb_mailbox_info">
                            <button class="btn btn-xs btn-purple DataDetails " 
                                    title="查看详情" data-mailboxId="${list.mailboxId}">
                               <i class="ace-icon fa fa-eye bigger-120"></i>详情
                            </button>
                        </shiro:hasPermission>
 	                <shiro:hasPermission name="tb_mailbox_del">
                            <button class="btn btn-xs btn-danger deleteData " data-toggle="modal" data-target="#delData"
                                    title="删除" data-mailboxId="${list.mailboxId}">
                                <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
                            </button>
                        </shiro:hasPermission>
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
</div>

<!--  删除 -->
  <div id="delData" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <c:set var="listSize" value="${fn:length(page.data)}"></c:set>
                <h4 class="modal-title">删除主席信箱</h4>
            </div>
            <div class="modal-body">
                <form action="${root}/admin/mailbox/delete" method="post" id="delForm">
                    <input type="hidden" name="mailboxId" id="mailboxId" value="0">
                    <c:if test="${page.totalPageNO==page.pageNO&&listSize==1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO-1}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                    <c:if test="${page.totalPageNO!=page.pageNO||listSize!=1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                </form>
                		你确定要删除该主席信箱吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doDelData">确定</button>
            </div>
        </div>
    </div>
</div>
<!-- <div id="searchModal" class="modal fade" tabindex="-1"> -->
<!--     <div class="modal-dialog"> -->
<!--         <div class="modal-content"> -->
<!--             <div class="modal-header"> -->
<!--                 <div class="table-header"> -->
<!--                     <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
<!--                     <h4 class="modal-title">高级查询</h4> -->
<!--                 </div> -->
<!--             </div> -->
<!--             <div class="modal-body table-responsive"> -->
<%--                 <form action="${root}/admin/mailbox" method="post" class="form-horizontal" name="form1" id="form1"> --%>
<%--                   <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO"> --%>
<%--                     <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize"> --%>
<%--                     <input type="hidden" name="backUrl" value="${backUrl}"> --%>
<!--                     <input type="hidden" name="search_title" id="search_title"> -->
                    
<!--                     <div class="form-group"> -->
<!--                         <label for="search_menuId" class="col-sm-2 control-label">审核状态:</label> -->
<!--                         <div class="col-sm-10"> -->
<!--                         <select class="form-control" id="search_auditorType" name="search_auditorType"> -->
<!--                                 <option value="">请选择</option> -->
<%--                                 <c:forEach items="${isAudit}" var="isAudit"> --%>
<%--                                     <option value="${isAudit.dicCode}"}>${isAudit.dicName}</option> --%>
<%--                                 </c:forEach> --%>
<!--                             </select> -->
<!--                         </div> -->
<!--                     </div> -->
                    
<!--                 </form> -->
<!--             </div> -->
<!--             <div class="modal-footer no-margin-top"> -->
<!--                 <button type="button" class="btn btn-primary btn-sm" id="search_ret">重置</button> -->
<!--                 <button type="button" class="btn btn-success btn-sm" id="search_btn">搜索</button> -->
<!--             </div> -->
<!--         </div> -->
<!--     </div> -->
<!-- </div> -->
<!--  查看详情 -->
 <form action="${root}/admin/mailbox/getInfo" method="post" id="redirectForm">
    <input type="hidden" name="mailboxId" id="editMailboxId">
    <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
    <input type="hidden" name="disabled" id="disabled"> 
    <input type="hidden" name="queryOrAudit" id="queryOrAudit" value="0"> 
</form>
<script>
     //查找
	 $('#fa-search').click(function () {
        $("#search_title").val($('#title').val());
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
     //重置
      $('#search_ret').click(function () {
      	$("#search_title").find("option").eq("").prop("selected",true)
      	$("#search_auditorType").find("option").eq("").prop("selected",true)
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
    }); 
      //高级搜索
    $('#search_btn').click(function () {
         $("#search_title").val($('#title').val());
         $("#pageNO").val(1);
 	     $('#form1').submit();
    });
        //清空 查找全部
     $('#all-search').click(function () {
        $("#search_title").val('');
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
    //准备删除信息
    $('.deleteData').click(function () {
        $('#mailboxId').val($(this).attr('data-mailboxId'));
    });
    //执行删除操作
    $(".doDelData").click(function () {
        $('#doDelData').modal('hide');
        $("#delForm").submit();
    });
	//查看详情
    $('.DataDetails').click(function () {
	    $("#editMailboxId").val($(this).attr('data-mailboxId'));
	    $("#disabled").val(false);
	    $('#redirectForm').submit();
	});
	//审核
    $('.editData').click(function () {
	    $("#editMailboxId").val($(this).attr('data-mailboxId'));
	    $("#disabled").val(true);
	    $("#redirectForm").attr('action',root+"/admin/mailbox/toEditMailbox");
	    $('#redirectForm').submit();
	});
</script>