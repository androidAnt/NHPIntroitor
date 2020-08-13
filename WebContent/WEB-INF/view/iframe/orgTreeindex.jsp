<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="adminCode" value="<%=SystemConstant.SYS_SUPER_ADMINCODE%>"/>
<link rel="stylesheet" href="${root}/components/ztree/css/zTreeStyle.css"/>
<script src="${root}/components/ztree/js/jquery.ztree.all-3.5.min.js"></script>
<style type="text/css">
   th{
     text-align: center;
   }
   .orgtable-class{
   	width:69%;
   	float:right;
   }
   .ztree-class{
   	width:30%;
   	float:left;
   }
   .marginClass{
   	margin-left:10px;
   }
   
</style>

<div class="row">
    <div class="col-lg-4" style="padding: 0;margin-bottom: 10px;padding-right: 25px;">
        <div class="input-group">
        <input type="hidden" name="orgPid" id="orgPid" value="">
        <input type="text" name="queryName" id="queryName" value="" class="form-control" placeholder="组织机构名称,支持模糊查找"
                   maxlength="20">
            <span class="input-group-btn">
                <button class="btn btn-sm btn-success" type="button" id="fa-search"><i
                        class="ace-icon fa fa-search icon-on-right bigger-110"></i>查找
                </button>
            </span>
        </div>
    </div>
</div>
<div class="row panel panel-default table-responsive ">
	<div class="panel-heading ztree-class">
	<input type="hidden" name="pId" id="pId" value="">
	<input type="hidden" name="pName" id="pName" value="">
	<span class="fa fa-list-ul" aria-hidden="true"></span>
	<b>组织机构结构</b>
	<ul id="tree-rec" class="ztree" style="height:500px;"></ul>
	</div>
		
   <div class="orgtable-class" style="">
   <iframe id="orgContent" src="${root}/system/org/orgTreeList?id=&queryVal=" width="100%" height="90%" scrolling="no" frameborder="0" onload="this.height=700"></iframe>
   </div>
   
   <div id="searchModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body table-responsive">
                <form action="${root}/system/org" method="post" class="form-horizontal" name="form1" id="form1">
                    <input type="hidden" value="${page.pageNO }" id="pageNO" name="pageNO">
                    <input type="hidden" value="${page.pageSize }" id="pageSize" name="pageSize">
                    <input type="hidden" name="backUrl" value="${backUrl}">
                    <input type="hidden" name="search_pId" id="search_pId" value="">
                    <input type="hidden" name="search_orgName" id="search_orgName" value="">
                </form>
            </div>
        </div>
    </div>
</div>

</div>

<script>
	var zTree;
	var setting = {
		view: {
			dblClickExpand: false,
			showLine: true,
			selectedMulti: false
		},
		data: {
			simpleData: {
				enable:true,
				idKey: "orgId",
				pIdKey: "pId",
				rootPId: ""
			}
		},
		callback: {
			beforeClick: function(treeId, treeNode) {
				var zTree = $.fn.zTree.getZTreeObj("tree-rec");
				if (treeNode.isParent) {
					zTree.expandNode(treeNode);
				} 
				$("#pId").val(treeNode.orgId);
				$("#pName").val(treeNode.name);
			},
			onClick:function(event, treeId, treeNode){
					var id = treeNode.orgId;
					$("#orgPid").val(id);
					var orgName = $("#queryName").val()
 					$('#orgContent').attr("src","${root}/system/org/orgTreeList?pId="+id+"&orgName="+orgName);
					}
		}
	};
	var zNodes;
	$(document).ready(function(){
		$.ajax({
	  	      url  : '${root}/system/org/getZtreeData',
	  	      dataType : "json",
	  	      type : "post",
	  	      data : {
	  	          pid : 0
	  	       },
	  	      success : function(res) {
	  	      zNodes = res
	  	       result = JSON.parse(res)
	  	       t = $.fn.zTree.init($("#tree-rec"), setting, result);
	  	      	}
	  	         });
	});
		
	$("#fa-search").click(function () {
		var orgName = $("#queryName").val();
		var id =$("#orgPid").val();
		$('#orgContent').attr("src","${root}/system/org/orgTreeList?pId="+id+"&orgName="+orgName);
    });	
		
		
</script>