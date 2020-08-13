// 下拉框美化插件
// 来自 www.hcoder.net
function HcSelecter(select_id ,select_div_class, options_class, width, height, call_back, call_back_args)
{
    this.select_id       =   select_id;
    this.select_div_id   =   select_div_class;
    this.options_id      =   options_class;
    this.str             =   '';
    this.width           =   width;
    this.height          =   height;

    this.change_it       =   function()
    {
        var str  = '<div class="'+options_class+'" style="height:'+this.height+'; width:'+this.width+'"><ul>';
        var str_selectd  = '';
        var set_time_id  = null;

        $('#'+select_id+' option').each(function()
        {
            str += '<li>'+$(this).html()+'</li>';
            if($(this).attr('selected') == 'selected')
            {
                str_selectd = $(this).html();
            }
        });
        str     += '</ul></div>';
        if(str_selectd == '')
        {
            str_selectd = $('#'+select_id+' option').eq(0).html();
        }
        str  = '<div class="'+select_div_class+'" style="width:'+this.width+';">'+str_selectd+'</div>'+str;
        $('#'+select_id).after(str);

        $('#'+select_id).next().click(function()
        {
            var sets = $(this).position();
            $(this).next().css({'top':sets.top+$(this).outerHeight(true), 'left':sets.left});
            $(this).next().slideDown(200);
            this_obj = $(this);
            set_time_id = setTimeout(function()
            {
                this_obj.next().slideUp(200);
            },2000);

            $(this).next().hover
            (
                function()
                {
                    clearTimeout(set_time_id);
                }
                ,
                function()
                {
                    this_obj.next().slideUp(200);
                }
            );
        });

        $('#'+select_id).next().next().find('li').click(function()
        {
            var index = $(this).index(0);
            $('#'+select_id).get(0).selectedIndex  = index;
            $(this).parent().parent().prev().html($('#'+select_id).find('option').eq(index).html());
            $(this).parent().parent().hide();
            if(typeof(call_back) != 'undefined')
            {
                if(typeof(call_back_args) == 'undefined')
                {
                    call_back();
                }
                else
                {
                    call_back(call_back_args);
                }
            }
        });

        $('#'+select_id).hide();
    }
}