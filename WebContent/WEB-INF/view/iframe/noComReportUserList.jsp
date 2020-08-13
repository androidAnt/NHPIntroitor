<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="adminCode" value="<%=SystemConstant.SYS_SUPER_ADMINCODE%>"/>
<style type="text/css">
   th{
     text-align: center;
   }
</style>

<div class="row">
    <div class="col-lg-6" style="padding: 0;margin-bottom: 10px;padding-right: 25px;">
        <div class="input-group">
            <input type="text" name="realName" id="realName" value="${sysUser.realName}" class="form-control" placeholder="用户名称"
                   maxlength="20">
            <span class="input-group-btn">
                <button class="btn btn-sm btn-success" type="button" id="fa-search"><i
                        class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                </button>
                
                <button class="btn btn-sm btn-error btn-clear" type="button"  id="all-search"><i
                        class="ace-icon fa fa-star icon-on-right bigger-110"></i>清空
                </button>
            </span>
        </div>
    </div>
</div>
<div class="row panel panel-default table-responsive">
      <c:if test="${empty page.data}">
        <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
    </c:if>
    <c:if test="${not empty page.data}">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th width="44">请选择</th>
                <th>姓名</th>
                <th>性别</th>
                <th>联系电话</th>
                <th>政治面面貌</th>
                <th>单位以及职务</th>
                <%-- <th>${staticDate }</th> --%>
            </tr>
            </thead>
            <tbody>
           <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                 	<td class="Serial_number" style="text-align: center;">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
                    <td>${list.realName}</td>
                    <td>
                        <c:if test="${list.gender=='0'}">男</c:if>
                        <c:if test="${list.gender=='1'}">女</c:if>
                    </td>
                    <td>${list.phone}</td>
                    <td>
                    <c:if test="${list.politicalStatus=='0'}">党员</c:if>
                    <c:if test="${list.politicalStatus=='1'}">共青团员</c:if>
                    <c:if test="${list.politicalStatus=='2'}">群众</c:if>
                   </td>
                    <td>${list.position}</td>
                </tr>
            </c:forEach>
            </tbody>
             <c:if test="${page.totalPageNO>1}">
                <thead>
                <tr>
                    <th colspan="10" style="padding:0">
                        <tags:pagination formID="form1"></tags:pagination>
                    </th>
                </tr>
                </thead>
            </c:if>
        </table>
 </c:if>
 
</div>


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
                <form action="${root}/admin/epidemic/viewNoComUserInfo" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" name="staticDate" value="${staticDate}" id="staticDate">
                    <input type="hidden" name="backUrl" value="${backUrl}">
                    <input type="hidden" name="search_realName" id="search_realName" value="${sysUser.realName}">
                    <%-- <input type="hidden" name="search_createDate" id="search_createDate" value="${sysUser.createDate}"> --%>
                </form>
            </div>
        </div>
    </div>
</div>


<script>
// 	搜索
	 $('#fa-search').click(function () {
        $("#search_realName").val($('#realName').val());
        $("#pageNO").val(1);
	    $('#form1').submit(); 
    });
//     重置
      $('#search_ret').click(function () {
        $("#realName").val('');
        $("#search_realName").val('');
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
    }); 
    // 清空
     $('#all-search').click(function () {
        $("#search_realName").val('');
        $("#realName").val('');
        /* $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val(''); */
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
	
</script>