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
            <input type="text" name="contentTypeName" id="contentTypeName" value="${ghContentType.contentTypeName}" class="form-control" placeholder="内容分类名称,支持模糊查找"
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
                <th>分类名称</th>
                <th>所属菜单</th>
                <th>创建人</th>
                <th>创建时间</th>
            </tr>
            </thead>
            <tbody>
           <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                    <td style="text-align: center;">
                        <input type="radio" name="contentTypeId" value="${list.contentTypeId}" data-name="${list.contentTypeName}">
                    </td>
                    <td>${list.contentTypeName}</td>
                    <td>${list.menuName}</td>
                    <td>${list.contentTypeCreateUser}</td>
                    <td>${ fn:substring(list.contentTypeCreateDate ,0,19)}</td>
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
                <form action="${root}/admin/content/selectContentTypeDialog" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" name="backUrl" value="${backUrl}">
                    <input type="hidden" name="search_contentTypeName" id="search_contentTypeName" value="${ghContentType.contentTypeName}">
                </form>
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
        $("#contentTypeName").val('');
        $("#search_contentTypeName").val('');
        $('#form1').find('input[type=hidden]').val('');
        $('#form1').find('input[type=text]').val('');
    }); 
    // 清空
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
    
    $("input[name='contentTypeId']").click(function(){
        if($(this).prop("checked")){
            window.parent.setMakeCompanyName($(this).val(),$(this).attr('data-name'));
        }else{
            window.parent.removeMakeCompanyName($(this).val(),$(this).attr('data-name'));
        }
    });
	
</script>