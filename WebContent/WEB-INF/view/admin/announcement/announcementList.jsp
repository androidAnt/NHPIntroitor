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
            <input type="text" name="announcementTitle" id="announcementTitle" value="${announcement.announcementTitle}" class="form-control" placeholder="通知公告标题,支持模糊查找"
                   maxlength="20">
            <span class="input-group-btn">
                <button class="btn btn-sm btn-success" type="button" id="fa-search"><i
                        class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                </button>
                <button class="btn btn-sm btn-error marginLeft-5 btn-clear" type="button"  id="all-search"><i
                        class="ace-icon fa fa-remove icon-on-right bigger-110"></i>清空
                </button>
            </span>
        </div>
    </div>
</div>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>通知公告列表</b>
        <shiro:hasPermission name="gh_content_add">
           <a class="btn btn-xs btn-add pull-right" title="添加通知公告" href="javascript:void(0);" id="toAdd">
                <i class="ace-icon fa fa-plus-square bigger-120"></i>添加通知公告
            </a>
        </shiro:hasPermission>
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
                <th width="100px">是否发布首页</th>
                <th width="80px">创建人</th>
                <th width="185px">创建日期</th>
				<th width="185px">操作</th>
            </tr>
            </thead>
            <tbody>
           <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number" style="text-align: center;">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
                    
                    <td>${list.announcementTitle}</td>
                     <td>
                        <c:if test="${list.isShowIndex==0}">是</c:if>
                        <c:if test="${list.isShowIndex!=0}">否</c:if>
                    </td>
                    <td>${list.creatUser}</td>
                    <td>${ fn:substring(list.creatDate ,0,19)}</td>
                    <td>
                    
                    	<shiro:hasPermission name="gh_announcement_edit">
                            <button class="btn btn-xs btn-info editAnnouncement" title="修改" data-announcementId="${list.announcementId}">
                                <i class="ace-icon fa fa-edit bigger-120"></i>修改
                            </button>
                        </shiro:hasPermission>
                        
                        <shiro:hasPermission name="gh_announcement_info">
                            <button class="btn btn-xs btn-purple announcementDetails " data-toggle="modal" 
                                    title="查看详情" data-announcementId="${list.announcementId}">
                               <i class="ace-icon fa fa-eye bigger-120"></i>详情
                            </button>
                        </shiro:hasPermission>
                        
                        <shiro:hasPermission name="gh_announcement_delete">
                            <button class="btn btn-xs btn-danger delAnnouncement" data-toggle="modal" data-target="#delAnnouncement"
                                    title="删除" data-announcementId="${list.announcementId}">
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
 
<!--  高级查询 -->
<div id="searchModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div class="table-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">高级查询</h4>
                </div>
            </div>
            <div class="modal-body table-responsive">
                <form action="${root}/admin/announcement" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" name="search_announcementTitle" id="search_announcementTitle" value="${announcement.announcementTitle}">
                </form>
            </div>
            <div class="modal-footer no-margin-top">
                <button type="button" class="btn btn-success btn-sm" id="search_btn">搜索</button>
            </div>
        </div>
    </div>
</div>

  <div id="delAnnouncement" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <c:set var="listSize" value="${fn:length(page.data)}"></c:set>
                <h4 class="modal-title">删除通知公告</h4>
            </div>
            <div class="modal-body">
                <form action="${root}/admin/announcement/delete" method="post" id="delForm">
                    <input type="hidden" name="announcementId" id="delAnnouncementId" value="0">
                    <c:if test="${page.totalPageNO==page.pageNO&&listSize==1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO-1}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                    <c:if test="${page.totalPageNO!=page.pageNO||listSize!=1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                </form>
                		你确定要删除该通知公告吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doDelAnnouncement">确定</button>
            </div>
        </div>
    </div>
</div>

  <form action="${root}/admin/announcement/getAnnouncementInfo" method="post" id="redirectForm">
    <input type="hidden" name="announcementId" id="announcementId">
    <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
</form>
</div>
<script>
// 	搜索
	 $('#fa-search').click(function () {
        $("#search_announcementTitle").val($('#announcementTitle').val());
        $("#pageNO").val(1);
	    $('#form1').submit();
    });

        //清空 查找全部
     $('#all-search').click(function () {
        $("#search_announcementTitle").val('');
        $("#announcementTitle").val('');
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
    
    //跳转到修改页面
	$('.editAnnouncement').click(function () {
	    $("#announcementId").val($(this).attr('data-announcementId'));
	    $("#redirectForm").attr('action', root + "/admin/announcement/toEditAnnouncement");
	    $('#redirectForm').submit();
	});
	
	//跳转到添加页面	
	 $("#toAdd").click(function () {
        $("#redirectForm").attr('action',root+"/admin/announcement/toadd");
        $('#redirectForm').submit();
    });
    
    //删除 
     $('.delAnnouncement').click(function () {
        $('#delAnnouncementId').val($(this).attr('data-announcementId'));
    });
    
    //执行删除操作
    $(".doDelAnnouncement").click(function () {
        $('#delAnnouncement').modal('hide');
        $("#delForm").submit();
    });
    
     //查看详情
     $(".announcementDetails").click(function () {
      	$("#announcementId").val($(this).attr('data-announcementId'));
	    $('#redirectForm').submit();
    });
	
</script>