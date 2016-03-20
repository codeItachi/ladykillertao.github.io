$(function() {
		var pull 		= $('#pull');
			menu 		= $('nav ul');
			menuHeight	= menu.height();
		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});
		$(window).resize(function(){
    		var w = $(window).width();
    		if(w > 320 && menu.is(':hidden')) {
    			menu.removeAttr('style');
    		}
		});



		// 轮播
	    var $slider=$('#slider3')
		var num=1;
		move=function(){
			$slider.children().each(function(){
				$(this).css({opacity:1,zIndex:100})
			})

		}

});