<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="row panel panel-default table-responsive " style="padding-left:10px">
        <div class="panel-heading">
        <span class="fa fa-list-ul" aria-hidden="true"></span>
        <b>组织机构列表</b>
    </div>
  <c:if test="${empty page.data}">
        <div style="text-align: center;padding: 20px;"><h4>暂无相关数据</h4></div>
    </c:if>
     <c:if test="${not empty page.data}">
        <table class="table table-bordered table-hover orgtable-class">
            <thead>
            <tr>
                <th width="44">请选择</th>
                <th>机构名称</th>
                <th>机构编码</th>
            </tr>
            </thead>

            <tbody>            
            <c:forEach items="${page.data}" var="list" varStatus="status">
                <tr>
                <td style="text-align: center;">
                        <input type="radio" name="orgId" value="${list.orgId}" data-name="${list.orgName}">
                    </td>
                    <td>${list.orgName}</td>
                    <td>${list.orgCode}</td>
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
<script>
	 $("input[name='orgId']").click(function(){
        if($(this).prop("checked")){
            window.parent.parent.setMakeCompanyName($(this).val(),$(this).attr('data-name'));
        }else{
            window.parent.parent.removeMakeCompanyName($(this).val(),$(this).attr('data-name'));
        }
    });
    
</script>