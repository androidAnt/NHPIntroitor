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
            <input type="text" name="contentTypeName" id="contentTypeName" value="${ghContentType.contentTypeName}" class="form-control" placeholder="内容分类名称,支持模糊查找"
                   maxlength="20">
            <span class="input-group-btn">
            	
                <button class="btn btn-sm btn-success" type="button" id="fa-search"><i
                        class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                </button>
                <button  class="marginLeft-5 btn btn-sm btn-query" type="button" data-toggle="modal" data-target="#searchModal" ><i
                        class="ace-icon fa fa-star icon-on-right bigger-110"></i>高级查找
                </button>
                <button  class="btn btn-sm btn-error btn-clear marginLeft-5" type="button"  id="all-search"><i
                        class="ace-icon fa fa-remove icon-on-right bigger-110"></i>清空
                </button>
            </span>
        </div>
    </div>
</div>
<div class="row panel panel-default table-responsive">
    <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>内容分类列表</b>
        <shiro:hasPermission name="gh_content_type_add">
           <a class="btn btn-xs btn-add pull-right" title="添加内容分类" href="javascript:void(0);" id="toAdd">
                <i class="ace-icon fa fa-plus-square bigger-120"></i>添加内容分类
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
                <th>上级分类</th>
                <th>分类名称</th>
                <th>所属菜单</th>
                <th>创建人</th>
                <th>创建时间</th>
<!--                 <th>备注</th> -->
				<th width="185px">操作</th>
            </tr>
            </thead>
            <tbody>
           <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td class="Serial_number" style="text-align: center;">
                            ${(page.pageNO-1)*page.pageSize+status.index+1}
                    </td>
                    <td>${list.contentTypePname}</td>
                    <td>${list.contentTypeName}</td>
                    <td>${list.menuName}</td>
                    <td>${list.contentTypeCreateUser}</td>
                    <td>${ fn:substring(list.contentTypeCreateDate ,0,19)}</td>
<%--  					<td>${list.contentTypeRemark}</td> --%>
 					<td>
 					 <shiro:hasPermission name="gh_content_type_edit">
                            <button class="btn btn-xs btn-info editContentType" title="修改" data-contentTypeId="${list.contentTypeId}">
                                <i class="ace-icon fa fa-edit bigger-120"></i>修改
                            </button>
                        </shiro:hasPermission>
 						<shiro:hasPermission name="gh_content_type_info">
                            <button class="btn btn-xs btn-purple ContentTypeDetails " data-toggle="modal" 
                                    title="查看详情" data-contentTypeId="${list.contentTypeId}">
                               <i class="ace-icon fa fa-eye bigger-120"></i>详情
                            </button>
                        </shiro:hasPermission>
                        
                        <c:if test="${list.systemFlag==1}">
	 					 	<shiro:hasPermission name="gh_content_type_delete">
	                            <button class="btn btn-xs btn-danger deleteContentType " data-toggle="modal"  
	                                    title="删除" data-contentTypeId="${list.contentTypeId}">
	                                <i class="ace-icon fa fa-trash-o bigger-120"></i>删除
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
                    <th colspan="10" style="padding:0;">
                        <tags:pagination formID="form1"></tags:pagination>
                    </th>
                </tr>
                </thead>
            </c:if>
        </table>
 </c:if>
 
<!--  删除 -->
  <div id="delContentType" class="modal fade" tabindex="-1">
    <div class="modal-dialog" style="width:450px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <c:set var="listSize" value="${fn:length(page.data)}"></c:set>
                <h4 class="modal-title">删除内容分类</h4>
            </div>
            <div class="modal-body">
                <form action="${root}/admin/contentType/delete" method="post" id="delForm">
                    <input type="hidden" name="contentTypeId" id="delContentTypeId" value="0">
                    <c:if test="${page.totalPageNO==page.pageNO&&listSize==1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO-1}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                    <c:if test="${page.totalPageNO!=page.pageNO||listSize!=1}">
                        <input type="hidden" name="backUrl"
                               value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
                    </c:if>
                </form>
                		你确定要删除该内容分类吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary btn-sm doDelContentType">确定</button>
            </div>
        </div>
    </div>
</div>
 
<!--  查看详情 -->
 <form action="${root}/admin/contentType/getInfo" method="post" id="redirectForm">
    <input type="hidden" name="contentTypeId" id="contentTypeId">
    <input type="hidden" name="backUrl" id="backUrl" value="pageNO=${page.pageNO}&pageSize=${page.pageSize}&${searchParams}">
</form>
 
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
                <form action="${root}/admin/contentType" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" name="backUrl" value="${backUrl}">
                    <input type="hidden" name="search_contentTypeName" id="search_contentTypeName" value="${ghContentType.contentTypeName}">
                    
                    <div class="form-group">
                        <label for="search_menuId" class="col-sm-2 control-label">所属菜单:</label>
                        <div class="col-sm-10">
                        <select class="form-control" id="search_menuId" name="search_menuId">
                                <option value=""}>请选择</option>
                                <c:forEach items="${menuList}" var="menu">
                                    <option value="${menu.menuId}"}>${menu.menuName}</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="search_contentType" class="col-sm-2 control-label">内容分类:</label>
                        <div class="col-sm-10">
                        <select class="form-control" id="search_contentType" name="search_contentType">
                                <option value="" }>请选择</option>
                                <c:forEach items="${contentTypeList}" var="sysDic">
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
 
</div>
<script>
// 	搜索
	 $('#fa-search').click(function () {
        $("#search_contentTypeName").val($('#contentTypeName').val());
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
//     重置
      $('#search_ret').click(function () {
      	$("#search_contentType").find("option").eq("").prop("selected",true)
      	$("#search_menuId").find("option").eq("").prop("selected",true)
        $("#contentTypeName").val('');
        $("#search_contentTypeName").val('');
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
    }); 
        //清空 查找全部
     $('#all-search').click(function () {
        $("#search_contentTypeName").val('');
        $("#contentTypeName").val('');
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
        $("#pageNO").val(1);
	    $('#form1').submit();
    });
     //高级搜索
    $('#search_btn').click(function () {
    	 $("#search_gDeviceName").val($('#gDeviceName').val());
         $("#pageNO").val(1);
 	     $('#form1').submit();
    });
    //前往添加页面
    $("#toAdd").click(function () {
        $("#form1").attr('action',root+"/admin/contentType/toadd");
        $('#form1').submit();
    });
    
    //准备删除信息
    $('.deleteContentType').click(function () {
        $('#delContentTypeId').val($(this).attr('data-contentTypeId'));
        //判断该分类下是否绑定内容
        $.ajax({
	  	    url  : '${root}/admin/contentType/getIsContent',
	  	    type : "post",
	  	    data : {
	  	   	 contentTypePid : $('#delContentTypeId').val()
	  	    },
	  	     success : function(res) {
	  	         if (res.status == 1) {
	  	         	showMes("0", "该分类包含内容，不允许删除！");
	  	        }else{
	  	        	$("#delContentType").modal("show")
// 	  	        	$("#delContentType").show();
	  	        }
	  	    }
	  	 });
    });
    
    //执行删除操作
    $(".doDelContentType").click(function () {
        $('#delContentType').modal('hide');
        $("#delForm").submit();
    });
    
    //查看详情
    $('.ContentTypeDetails').click(function () {
	    $("#contentTypeId").val($(this).attr('data-contentTypeId'));
	    $('#redirectForm').submit();
	});
	
	//跳转到修改页面
	$('.editContentType').click(function () {
	    $("#contentTypeId").val($(this).attr('data-contentTypeId'));
	    $("#redirectForm").attr('action', root + "/admin/contentType/toEdit");
	    $('#redirectForm').submit();
	});
	
</script>