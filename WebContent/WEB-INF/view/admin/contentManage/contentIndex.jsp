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
            <input type="text" name="contentTitle" id="contentTitle" value="${ghContentManage.contentTitle}" class="form-control" placeholder="内容标题,支持模糊查找"
                   maxlength="20">
            <span class="input-group-btn">
                <button class="btn btn-sm btn-success" type="button" id="fa-search"><i
                        class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                </button>
                <button class="btn btn-sm btn-query marginLeft-5" type="button" data-toggle="modal" data-target="#searchModal" ><i
                        class="ace-icon fa fa-star icon-on-right bigger-110"></i>高级查找
                </button>
                <button class="btn btn-sm btn-error  btn-clear marginLeft-5 " type="button"  id="all-search"><i
                        class="ace-icon fa fa-remove icon-on-right bigger-110"></i>清空
                </button>
            </span>
        </div>
    </div>
</div>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>内容管理列表</b>
        <shiro:hasPermission name="gh_content_add">
           <a class="btn btn-xs btn-add pull-right" title="添加内容分类" href="javascript:void(0);" id="toAdd">
                <i class="ace-icon fa fa-plus-square bigger-120"></i>添加内容
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
                <th style="width:100px">内容分类</th>
                <th style="width:100px">所属菜单</th>
                <th style="width:80px">文章类型</th>
                <th style="width:80px">是否发布</th>
                <th style="width:80px">发布人</th>
                <th style="width:150px">发布日期</th>
                <th style="width:246px">操作</th>
            </tr>
            </thead>
            <tbody>
           <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number" style="text-align: center;">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
                    <td>${list.contentTitle}</td>
                     <td>${list.contentTypeName}</td>
                     <td>${list.menuName}</td>
                     <td>
	                     <c:if test="${list.contentArticleType==0}">
	                     	文章类
	                     </c:if>
	                     <c:if test="${list.contentArticleType==1}">
	                     	图文类
	                     </c:if>
	                      <c:if test="${list.contentArticleType==2}">
	                     	图片类
	                     </c:if>
                     </td>
                     <td>
	                     <c:if test="${list.isRelease==0}">
	                     	已发布
	                     </c:if>
	                     <c:if test="${list.isRelease!=0}">
	                     	未发布
	                     </c:if>
                    </td>
                     
                    <td>${list.creatUser}</td>
                    <td>${ fn:substring(list.creatDate ,0,19)}</td>
                    
                    <td>
                    <c:if test="${list.isRelease!=0}">
 					 <shiro:hasPermission name="gh_content_edit">
                            <button class="btn btn-xs btn-info editContent" title="修改" data-contentId="${list.contentId}" data-isRelease="${list.isRelease}">
                                <i class="ace-icon fa fa-edit bigger-120"></i>修改
                            </button>
                        </shiro:hasPermission>
                        </c:if>
 						<shiro:hasPermission name="gh_content_info">
                            <button class="btn btn-xs btn-purple ContentDetails " data-toggle="modal" 
                                    title="查看详情" data-contentId="${list.contentId}">
                               <i class="ace-icon fa fa-eye bigger-120"></i>详情
                            </button>
                        </shiro:hasPermission>
 					 	<shiro:hasPermission name="gh_content_delete">
                            <button class="btn btn-xs btn-danger deleteContent" data-toggle="modal" data-target="#delContent"
                                    title="删除" data-contentId="${list.contentId}">
                                <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
                            </button>
                        </shiro:hasPermission>
                         <c:if test="${list.isRelease==0}">
                        <shiro:hasPermission name="gh_content_revoke">
                            <button class="btn btn-xs btn-danger revokeContent" data-toggle="modal" data-target="#revokeContent"
                                    title="撤回" data-contentId="${list.contentId}">
                                <i class="ace-icon fa fa-trash-o bigger-120"></i>撤回
                            </button>
                        </shiro:hasPermission>
                        </c:if>
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
 
 <!--  删除 -->
  <div id="delContent" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <c:set var="listSize" value="${fn:length(page.data)}"></c:set>
                <h4 class="modal-title">删除内容</h4>
            </div>
            <div class="modal-body">
                <form action="${root}/admin/content/delete" method="post" id="delForm">
                    <input type="hidden" name="contentId" id="delContentId" value="0">
                    <c:if test="${page.totalPageNO==page.pageNO&&listSize==1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO-1}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                    <c:if test="${page.totalPageNO!=page.pageNO||listSize!=1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                </form>
                		你确定要删除该内容吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doDelContent">确定</button>
            </div>
        </div>
    </div>
</div>

<!-- 撤回 -->
<div id="revokeContent" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <c:set var="listSize" value="${fn:length(page.data)}"></c:set>
                <h4 class="modal-title">撤回内容</h4>
            </div>
            <div class="modal-body">
                <form action="${root}/admin/content/revokeContent" method="post" id="revokeForm">
                    <input type="hidden" name="contentId" id="revokeContentId" value="0">
                    <c:if test="${page.totalPageNO==page.pageNO&&listSize==1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO-1}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                    <c:if test="${page.totalPageNO!=page.pageNO||listSize!=1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                </form>
                		你确定要撤回该内容吗？(撤回后门户网站不显示且该条内容可修改可删除)
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doRevokeContent">确定</button>
            </div>
        </div>
    </div>
</div>

 
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
                <form action="${root}/admin/content" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" name="backUrl" id="backUrl" value="${backUrl }">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" name="search_contentTitle" id="search_contentTitle" value="${ghContentManage.contentTitle}">
                	 <div class="form-group">
                        <label for="search_isRelease" class="col-sm-2 control-label">是否发布:</label>
                        <div class="col-sm-10">
                        <select class="form-control" id="search_isRelease" name="search_isRelease">
                                <option value="" }>请选择</option>
                                <c:forEach items="${contentPublic}" var="sysDic">
                                    <option value="${sysDic.dicCode}"}>${sysDic.dicName}</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer no-margin-top">
            	<button type="button" class="btn btn-primary btn-sm" id="search_ret">重置</button>
                <button type="button" class="btn btn-success btn-sm" id="search_btn">搜索</button>
            </div>
        </div>
    </div>
</div>

<!--  查看详情 -->
 <form action="${root}/admin/content/getContentInfo" method="post" id="redirectForm">
    <input type="hidden" name="contentId" id="contentId">
    <input type="hidden" id="isPub">
<%--     <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}"> --%>
</form>

</div>
<script>
// 	搜索
	 $('#fa-search').click(function () {
        $("#search_contentTitle").val($('#contentTitle').val());
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
//     重置
      $('#search_ret').click(function () {
        $("#contentTitle").val('');
        $("#search_contentTitle").val('');
        $("#search_isRelease").find("option").eq("").prop("selected",true)
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
    }); 
    
    //清空
        $('#all-search').click(function () {
        $("#search_contentTitle").val('');
        $("#contentTitle").val('');
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
      //高级搜索
    $('#search_btn').click(function () {
    	 $("#search_contentTitle").val($('#contentTitle').val());
         $("#pageNO").val(1);
 	     $('#form1').submit();
    });
      //前往添加页面
    $("#toAdd").click(function () {
        $("#form1").attr('action',root+"/admin/content/toadd");
        $('#form1').submit();
    });
      //准备删除信息
    $('.deleteContent').click(function () {
        $('#delContentId').val($(this).attr('data-contentId'));
    });
    
    //执行删除操作
    $(".doDelContent").click(function () {
        $('#delContent').modal('hide');
        $("#delForm").submit();
    });
    
      //准备撤回信息
    $('.revokeContent').click(function () {
        $('#revokeContentId').val($(this).attr('data-contentId'));
    });
    
    //执行撤回操作
    $(".doRevokeContent").click(function () {
        $('#revokeContent').modal('hide');
        $("#revokeForm").submit();
    });
    
    //查看详情
     $(".ContentDetails").click(function () {
      	$("#contentId").val($(this).attr('data-contentId'));
	    $('#redirectForm').submit();
    });
    
    // 跳转到修改页面
    $(".editContent").click(function () {
      	$("#contentId").val($(this).attr('data-contentId'));
      	$("#isPub").val($(this).attr('data-isRelease'));
      /* 	if($("#isPub").val() == "0"){
      		alert("已发布内容不允许修改！")
      		return false;
      	} */
      	$("#redirectForm").attr('action', root + "/admin/content/toEditContent");
	    $('#redirectForm').submit();
    });
</script>