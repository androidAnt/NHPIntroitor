<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="${root}/components/dateRange/dateRange.css"/>
<script type="text/javascript" src="${root}/components/dateRange/dateRange.js"></script>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>参数列表</b>
<%--         <shiro:hasPermission name="admin_company_save">
            <a class="btn btn-xs btn-success pull-right" title="新增企业信息" href="${root}/admin/company/toadd">
                <i class="ace-icon fa fa-plus-square bigger-120"></i>新增企业信息
            </a>
        </shiro:hasPermission> --%>
    </div>
    <c:if test="${empty page.data}">
        <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
    </c:if>
    <c:if test="${not empty page.data}">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th width="50">序号</th>
                <th class="sort-th" style="text-align: center;">企业类型</th>
                <th class="sort-th" style="text-align: center;">查看条数</th>
                <th style="width: 256px;text-align: center;">操作</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
                    <td style="text-align: center;">
                        <c:if test="${not empty list.fitType}">${list.fitType}</c:if>
                        <c:if test="${empty list.fitType}">- - - -</c:if>
                    </td>
                     <td style="text-align: center;">
                        <c:if test="${not empty list.manageBenefit}">${list.manageBenefit}</c:if>
                        <c:if test="${empty list.manageBenefit}">- - - -</c:if>
                    </td>
                           <td style="text-align: center;">
    
                      <shiro:hasPermission name="admin_config_edit">
                            <button class="btn btn-xs btn-info editCompany" title="修改" data-manageId="${list.manageId}">
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
                    <th colspan="9">
                        <tags:pagination formID="form1"></tags:pagination>
                    </th>
                </tr>
                </thead>
            </c:if>
        </table>
    </c:if>
</div>

<form action="${root}/admin/company/editState" method="post" id="redirectForm">
    <input type="hidden" name="manageId" id="manageId">
    <input type="hidden" name="endDate" id="endDate">
    <input type="hidden" name="state" id="state">
   <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&sort=${page.sort}&${searchParams}">
</form>
	<script>

    //前往修改页面
    $('.editCompany').click(function () {
        $("#manageId").val($(this).attr('data-manageId'));
        $("#redirectForm").attr('action', root + "/admin/config/toEdit");
        $('#redirectForm').submit();
    });
	//修改状态
	$('.editState').click(function () {
	    $("#companyId").val($(this).attr('data-companyId').split("_")[0]);
	    $("#state").val($(this).attr('data-companyId').split("_")[1])
	    $("#redirectForm").attr('action', root + "/admin/company/editState");
	    $('#redirectForm').submit();
	});
	//查看
	$('.companyDetails').click(function () {
	    $("#companyId").val($(this).attr('data-companyId'));
	    $("#redirectForm").attr('action', root + "/admin/company/details");
	    $('#redirectForm').submit();
	});
	
	</script>