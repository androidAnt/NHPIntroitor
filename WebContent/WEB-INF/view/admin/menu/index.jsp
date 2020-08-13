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
            <input type="text" name="menuName" id="menuName" value="${ghMenuManage.menuName}" class="form-control" placeholder="菜单名称,支持模糊查找"
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
        <b>菜单列表</b>
    </div>
      <c:if test="${empty page.data}">
        <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
    </c:if>
    <c:if test="${not empty page.data}">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th width="44">序号</th>
                <th>菜单名称</th>
                <th>状态</th>
                <th>创建人</th>
                <th>创建日期</th>
				<th width="185px">操作</th>
            </tr>
            </thead>
            <tbody>
           <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number" style="text-align: center;">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
                    
                    <td>${list.menuName}</td>
                  
                     <td>
                        <c:if test="${list.menuStatus==0}">正常</c:if>
                        <c:if test="${list.menuStatus!=0}">禁用</c:if>
                    </td>
                    <td>${list.createUser}</td>
                    <td>${ fn:substring(list.createDate ,0,19)}</td>
                    <td>
                    	<shiro:hasPermission name="gh_menu_edit">
                            <button class="btn btn-xs btn-info editMenu" title="修改" data-menuId="${list.menuId}">
                                <i class="ace-icon fa fa-edit bigger-120"></i>修改
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
                <form action="${root}/admin/menu" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" name="search_menuName" id="search_menuName" value="${ghMenuManage.menuName}">
                </form>
            </div>
            <div class="modal-footer no-margin-top">
                <button type="button" class="btn btn-success btn-sm" id="search_btn">搜索</button>
            </div>
        </div>
    </div>
</div>
  <form action="${root}/admin/contentType/getInfo" method="post" id="redirectForm">
    <input type="hidden" name="menuId" id="menuId">
    <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
</form>
</div>
<script>
// 	搜索
	 $('#fa-search').click(function () {
        $("#search_menuName").val($('#menuName').val());
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
//     重置
      $('#search_ret').click(function () {
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
    });
    
    //跳转到修改页面
	$('.editMenu').click(function () {
	    $("#menuId").val($(this).attr('data-menuId'));
	    $("#redirectForm").attr('action', root + "/admin/menu/toEdit");
	    $('#redirectForm').submit();
	});
</script>