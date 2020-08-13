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
            <input type="text" name="policiesName" id="policiesName" value="${tbPolicies.policiesName}" class="form-control" placeholder="政策法规名称,支持模糊查找"
                   maxlength="100">
            <span class="input-group-btn">
                <button class="btn btn-sm btn-success" type="button" id="fa-search"><i
                        class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                </button>
                <button class="btn btn-sm btn-query marginLeft-5" type="button" data-toggle="modal" data-target="#searchModal" ><i
                        class="ace-icon fa fa-star icon-on-right bigger-110"></i>高级查找
                </button>
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
        <b>政策法规列表</b>
        <shiro:hasPermission name="tb_data_add">
           <a class="btn btn-xs btn-add pull-right" title="添加政策法规" href="javascript:void(0);" id="toAdd">
                <i class="ace-icon fa fa-plus-square bigger-120"></i>添加政策法规
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
                <th>所属菜单</th>
                <th>法律分类</th>
                <th>政策法规名称</th>
                <!-- <th>政策法规内容</th> -->
                <th>创建人</th>
                <th>创建时间</th>
                <th>所属组织</th>
				<th width="185px">操作</th>
            </tr>
            </thead>
            <tbody>
           <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number" style="text-align: center;">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
                    <td style="text-align: center;">${list.menuName}</td>
                    <td style="text-align: center;">${list.policiesTypeName}</td>
                    <td style="text-align: center;">${list.policiesName}</td>
                    <%-- <td style="text-align: center;">${list.policiesContent}</td> --%>
                    <td style="text-align: center;">${list.creatUser}</td>
                    <td style="text-align: center;">${ fn:substring(list.creatDate ,0,19)}</td>
                    <td style="text-align: center;">${list.orgName}</td>
 	                <td>
 	                <shiro:hasPermission name="tb_data_edit">
                            <button class="btn btn-xs btn-info editData" title="修改" data-policiesId="${list.policiesId}">
                                <i class="ace-icon fa fa-edit bigger-120"></i>修改
                            </button>
                        </shiro:hasPermission>
                        <shiro:hasPermission name="tb_data_info">
                            <button class="btn btn-xs btn-purple DataDetails " 
                                    title="查看详情" data-policiesId="${list.policiesId}">
                               <i class="ace-icon fa fa-eye bigger-120"></i>详情
                            </button>
                        </shiro:hasPermission>
 	                <shiro:hasPermission name="tb_data_del">
                            <button class="btn btn-xs btn-danger deleteData " data-toggle="modal" data-target="#delData"
                                    title="删除" data-policiesId="${list.policiesId}">
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
                <h4 class="modal-title">删除政策法规</h4>
            </div>
            <div class="modal-body">
                <form action="${root}/admin/policies/delete" method="post" id="delForm">
                    <input type="hidden" name="policiesId" id="policiesId" value="0">
                    <c:if test="${page.totalPageNO==page.pageNO&&listSize==1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO-1}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                    <c:if test="${page.totalPageNO!=page.pageNO||listSize!=1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                </form>
                		你确定要删除该政策法规吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doDelData">确定</button>
            </div>
        </div>
    </div>
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
                <form action="${root}/admin/policies" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" name="backUrl" value="${backUrl}">
                    <input type="hidden" name="search_policiesName" id="search_policiesName" value="${tbPolicies.policiesName}">
                    
                    <div class="form-group">
                        <label for="search_menuId" class="col-sm-2 control-label">所属菜单:</label>
                        <div class="col-sm-10">
                        <select class="form-control" id="search_menuId" name="search_menuId">
                                <option value="">请选择</option>
                                <c:forEach items="${menuList}" var="menu">
                                    <option value="${menu.menuId}"}>${menu.menuName}</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="search_menuId" class="col-sm-2 control-label">法律分类:</label>
                        <div class="col-sm-10">
                        <select class="form-control" id="search_policiesType" name="search_policiesType">
                                <option value="">请选择</option>
                                <c:forEach items="${policiesType}" var="po">
                                    <option value="${po.dicCode}"}>${po.dicName}</option>
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
 <form action="${root}/admin/policies/getInfo" method="post" id="redirectForm">
    <input type="hidden" name="policiesId" id="editPoliciesId">
    <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
    <input type="hidden" name="disabled" id="disabled"> 
</form>
<script>
     //查找
	 $('#fa-search').click(function () {
        $("#search_policiesName").val($('#policiesName').val());
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
//     重置
      $('#search_ret').click(function () {
      	$("#search_policiesName").find("option").eq("").prop("selected",true)
      	$("#search_menuId").find("option").eq("").prop("selected",true)
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
    }); 
        //清空 查找全部
     $('#all-search').click(function () {
        $("#search_policiesName").val('');
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
     //高级搜索
    $('#search_btn').click(function () {
         $("#search_policiesName").val($('#policiesName').val());
         $("#pageNO").val(1);
 	     $('#form1').submit();
    });
    //前往添加页面
    $("#toAdd").click(function () {
        $("#form1").attr('action',root+"/admin/policies/toadd");
        $('#form1').submit();
    });
    //准备删除信息
    $('.deleteData').click(function () {
        $('#policiesId').val($(this).attr('data-policiesId'));
    });
    //执行删除操作
    $(".doDelData").click(function () {
        $('#doDelData').modal('hide');
        $("#delForm").submit();
    });
	//查看详情
    $('.DataDetails').click(function () {
	    $("#editPoliciesId").val($(this).attr('data-policiesId'));
	    $("#disabled").val(false);
	    $('#redirectForm').submit();
	});
	//修改
    $('.editData').click(function () {
	    $("#editPoliciesId").val($(this).attr('data-policiesId'));
	    $("#disabled").val(true);
	    $('#redirectForm').submit();
	});
</script>