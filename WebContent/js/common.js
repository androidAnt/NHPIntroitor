/**
 * Created by mawj on 2016/5/25.
 */
$('.menu .menuBlock').click(function()
{
    $('.menu .menuBlock').removeClass('curMenu');
    $(this).addClass('curMenu');
})
$(".classifyBlock").hover(function(){
    $(this).find(".classifyCon").show();
    $(this).addClass('curClassify').find('.classifyTit').addClass('curClassifyMenu');
},function(){
    $(this).find(".classifyCon").hide();
    $(this).removeClass('curClassify').find('.classifyTit').removeClass('curClassifyMenu');
});
$('.ifShowType').click(function(event)
{
    $('.defaultHide').slideToggle();
    event.stopPropagation();
})
$(document).click(function()
{
    $('.defaultHide').slideUp();
})
$('.defaultHide').click(function(event)
{
    $(this).show();
    event.stopPropagation();
})

/* 个人中心左侧菜单伸缩 */
$('.leftMenu').click(function()
{
    $(this).next('div').slideToggle();
    $(this).children('i').toggleClass('on');
})

/*返回顶部*/
$(function(){
	scrollback();
	$(".goTop").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
	});
    $(window ).scroll(function() {
    	scrollback();
	});
})
function scrollback(){
 	if($(window).scrollTop()>0){
		$(".goTop").fadeIn();
		  }else{
		  	$(".goTop").fadeOut();
		  };
		  
	if($(window).scrollTop()>100) {
		$('.registerProtocolTitle').css({'position': 'fixed', 'top': '0', 'background': 'green'});
	}else {
		$('.registerProtocolTitle').css({'position': 'relative', 'background': 'white'});
	}
};



var JPlaceHolder = {
    //检测
    _check : function(){
        return 'placeholder' in document.createElement('input');
    },
    //初始化
    init : function(){
        if(!this._check()){
            this.fix();
        }
    },
    //修复
    fix : function(){
        jQuery(':input[placeholder]').each(function(index, element) {
            var self = $(this), txt = self.attr('placeholder');
            self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none', display:'inline-block'}));
            var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
            var holder = $('<span></span>').text(txt).css({position:'absolute', left:pos.left, top:pos.top, height:h, lineHeight:(h-2)+'px', paddingLeft:paddingleft, color:'#aaa'}).appendTo(self.parent());
            self.focusin(function(e) {
                holder.hide();
            }).focusout(function(e) {
                if(!self.val()){
                    holder.show();
                }
            });
            holder.click(function(e) {
                holder.hide();
                self.focus();
            });
        });
    }
};
//执行
jQuery(function(){
    JPlaceHolder.init();
});




