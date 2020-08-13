/**
 * Created by zhangyong on 2015-9-9.
 */
var clickRes = $("#rootRes").parent('li');

$('.hasChild').on('click', function () {
    getChild(this);
});
//*********************************************************//
//准备删除资源
function delResFun(obj) {
    $("#delResId").val('');
    $("#delResId").val(eval("(" + $(obj).attr('data-res') + ")").resId);
    clickRes = $(obj);
}

//执行删除操作
function doDelRes() {
    $('#delRes').modal('hide');
    $.ajax({
        type: 'POST',
        url: root + '/system/res/del',
        data: {resId: $("#delResId").val()},
        success: function (data) {
            if (data.status == 1) {
                $(clickRes).parent('.parent_li').remove();
            }
            showMes(data.status, data.msg);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showMes("0", "系统繁忙,请稍后再试");
        }
    });
}
//*******************************************************//
//查看详情
function seeRes(obj) {
    $("#seeResForm").find('p').html('- - - -');
    var res = eval("(" + $(obj).attr('data-res') + ")");
    if (res.type == 0) {
        $("#seeTyte").html("资源模块");
        $('#seemoduleType').html(res.moduleType);
        $("#seeContent").parents('.form-group').addClass('hide');
        $("#seemoduleType").parents('.form-group').removeClass('hide');
        $("#seeIcon").parents('.form-group').removeClass('hide');
    } else if (res.type == 1) {
        $("#seeTyte").html("一级菜单");
        $("#seemoduleType").parents('.form-group').addClass('hide');
        $("#seeContent").parents('.form-group').addClass('hide');
        $("#seeIcon").parents('.form-group').removeClass('hide');
    } else if (res.type == 2) {
        $("#seemoduleType").parents('.form-group').addClass('hide');
        $("#seeTyte").html("二级菜单");
        $("#seeIcon").parents('.form-group').addClass('hide');
        $("#seeContent").parents('.form-group').removeClass('hide');
    } else if (res.type == 3) {
        $("#seemoduleType").parents('.form-group').addClass('hide');
        $("#seeContent").parents('.form-group').addClass('hide');
        $("#seeIcon").parents('.form-group').addClass('hide');
        $("#seeTyte").html("功能按钮");
    }
    $("#seeResName").html(res.resName);
    $("#seeResCode").html(res.resCode);
    if (res.content != '') {
        $("#seeContent").html(res.content);
    }
    if (res.icon != '') {
        $("#seeIcon").html(res.icon);
    }
    $("#seeSortOrder").html(res.sortOrder);
    if (res.state == 0) {
        $("#seeState").html("禁用");
    } else if (res.state == 1) {
        $("#seeState").html("正常");
    }
    $("#seeCreateDate").html(res.createDate.substring(0, res.createDate.length - 2));
    if (res.remark != '') {
        $("#seeRemark").html(res.remark);
    }

}
//*********************************************************//
//准备修改
function updateRes(obj) {
    $('#updateResForm').find('input[type=hidden]').val('');
    $('#updateResForm').find('input[type=text]').val('');
    $("#updateResForm").find('textarea').val('');
    clickRes = $(obj);
    var res = eval("(" + $(obj).attr('data-res') + ")");
    $("#updateResId").val(res.resId);
    $("#updatePId").val(res.pId);
    $("#updateType").val(res.type);
    $("#updateModuleType").val(res.moduleType);
    $("#updateResName").val(res.resName);
    $("#updateResCode").val(res.resCode);
    $("#updateContent").val(res.content);
    $("#updateIcon").val(res.icon);
    $("#updateSortOrder").val(res.sortOrder);
    $('#updateResForm').find('input:radio[name=state]')[1].checked = true;
    if(res.state=="1"){
        $('#updateResForm').find('input:radio[name=state]')[0].checked = true;
    }
    var type=res.type;
    if(type==0){
        $("#updateContent").parents('.form-group').hide();
        $("#updateModuleType").parents('.form-group').show();
        $("#updateIcon").parents('.form-group').show();
    }else{
        $("#updateModuleType").parents('.form-group').hide();
        if(type==1){
            $("#updateContent").parents('.form-group').hide();
            $("#updateIcon").parents('.form-group').show();
        }else if(type==2){
            $("#updateContent").parents('.form-group').show();
            $("#updateIcon").parents('.form-group').hide();
        }else{
            $("#updateContent").parents('.form-group').hide();
            $("#updateIcon").parents('.form-group').hide();
        }
    }
    $("#updateRemark").val(res.remark);
}
//执行修改操作
function doUpdate() {
    $.ajax({
        type: 'POST',
        url: root + '/system/res/update',
        data: $("#updateResForm").serialize(),
        success: function (data) {
            var dataObj = data;
            if (dataObj.status == 1) {
                var res = dataObj.res;
                var htmls = $("#template").html();
                if (res.type == 3) {
                    htmls = $("#template3").html();
                }
                var str = JSON.stringify(res).replace(/"/g, "'");
                htmls = htmls.replace(/#res/g, str);
                htmls = htmls.replace('#Name', res.resName);
                if (res.type == 0) {
                    htmls = htmls.replace(/#type/g, "一级菜单");
                    htmls = htmls.replace(/#icon/g, 'fa fa-th-large');
                } else if (res.type == 1) {
                    htmls = htmls.replace(/#icon/g, res.icon);
                    htmls = htmls.replace(/#type/g, "二级菜单");
                } else if (res.type == 2) {
                    htmls = htmls.replace(/#icon/g, "fa fa-fire");
                    htmls = htmls.replace(/#type/g, "操作按钮");
                }
                $('#updateRes').modal('hide');
                $(clickRes).parent('li ').replaceWith(htmls);
            }
            showMes(dataObj.status, dataObj.msg);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showMes("0", "系统繁忙,请稍后再试");
        }
    });
    return false;
}
//*********************************************************//
//添加准备
function addRes(obj) {
    clickRes = $(obj).parent('li');
    $('#addResForm').find('input[type=hidden]').val('');
    $('#addResForm').find('input[type=text]').val('');
    $('#addResForm').find('input[type=number]').val('');
    $("#addResForm").find('textarea').val('');
    $("#addResForm").find('input:radio[name=state]')[0].checked = true;
    var dataObj=$(obj).attr('data-res');
    if (dataObj == '0') {//添加模块
        $("#addRes").find('.modal-title').html('添加模块');
        $("#pId").val("0");
        $("#type").val("0");
        $("#content").parents('.form-group').addClass('hide');
        $("#moduleTypeDiv").removeClass('hide');
        $("#icon").parents('.form-group').removeClass('hide');
    } else {
        var data = eval("(" + dataObj + ")");
        var type=data.type;//类型
        $("#moduleTypeDiv").addClass('hide');//隐藏模块类型
        $("#pId").val(data.resId);
        $("#type").val(parseInt(type) + 1);
        if(type=="0"){//添加一级菜单
            $("#addRes").find('.modal-title').html('添加一级菜单');
            $("#content").parents('.form-group').addClass('hide');
            $("#icon").parents('.form-group').removeClass('hide');
        }else if(type=="1"){
            $("#addRes").find('.modal-title').html('添加二级菜单');
            $("#icon").parents('.form-group').addClass('hide');
            $("#content").parents('.form-group').removeClass('hide');
        }else{
            $("#content").parents('.form-group').addClass('hide');
            $("#icon").parents('.form-group').addClass('hide');
            $("#addRes").find('.modal-title').html('添加操作按钮');
        }
    }
}
//执行添加操作
function doAdd() {
    $.ajax({
        type: 'POST',
        url: root + '/system/res/add',
        data: $("#addResForm").serialize(),
        success: function (data) {
            if (data.status == 1) {
                var res = data.res;
                var htmls = $("#template").html();
                if (res.type == 3) {
                    htmls = $("#template3").html();
                }
                var str = JSON.stringify(res).replace(/"/g, "'");
                htmls = htmls.replace(/#res/g, str);
                htmls = htmls.replace('#Name', res.resName);
                if (res.type == 0) {
                    htmls = htmls.replace(/#type/g, "一级菜单");
                    htmls = htmls.replace(/#icon/g, 'fa fa-th-large');
                } else if (res.type == 1) {
                    htmls = htmls.replace(/#icon/g, res.icon);
                    htmls = htmls.replace(/#type/g, "二级菜单");
                } else if (res.type == 2) {
                    htmls = htmls.replace(/#icon/g, "fa fa-fire");
                    htmls = htmls.replace(/#type/g, "操作按钮");
                }
                $('#addRes').modal('hide')
                $(clickRes).find('> ul').append(htmls);
            }
            showMes(data.status, data.msg);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            showMes("0", "系统繁忙,请稍后再试");
        }
    });
    return false;

}
//******************************************************************************//
//查看子节点
function getChild(obj) {
    var children = $(obj).parent('li.parent_li').find(' > ul > li');
    if (children.is(":visible")) {
        children.hide('fast');
    } else {
        if ($(obj).hasClass('hasChild')) {
            if ($(obj).parent('li').find('ul').children().length == 0) {
                var pId = eval("(" + $(obj).attr('data-res') + ")").resId;
                $.ajax({
                    type: 'POST',
                    url: root + '/system/res/getResByPId',
                    data: {pId: pId},
                    success: function (data) {
                        if(!data.status){
                            showMes(data.status, data.msg);
                        }else{
                            var objs=data.data;
                            for (var i = 0; i < objs.length; i++) {
                                var htmls = $("#template").html();
                                if (objs[i].type == 3) {
                                    htmls = $("#template3").html();
                                }
                                var str = JSON.stringify(objs[i]).replace(/"/g, "'");
                                htmls = htmls.replace(/#res/g, str);
                                htmls = htmls.replace('#Name', objs[i].resName);
                                if (objs[i].type == 1) {
                                    htmls = htmls.replace(/#icon/g, objs[i].icon);
                                    htmls = htmls.replace(/#type/g, "二级菜单");
                                } else if (objs[i].type == 2) {
                                    htmls = htmls.replace(/#icon/g, "fa fa-fire");
                                    htmls = htmls.replace(/#type/g, "操作按钮");
                                }
                                $(obj).parent('li ').find('> ul').append(htmls);
                            }
                            children.show('fast');
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        showMes("0", "系统繁忙,请稍后再试");
                    }
                });
            } else {
                children.show('fast');
            }
        } else {
            showMes("0", "暂无下级节点");
        }
    }
}