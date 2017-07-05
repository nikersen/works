$(function(){
	
	var menu = $('#menu'),
		pos = menu.offset();
		

			$(window).scroll(function(){

				if ($(window).width() >= 1000) {

					if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default')){
						menu.fadeOut('fast', function(){
							$(this).removeClass('default').addClass('fixed').fadeIn('fast');
							$(ico_block).removeClass('default_ico').addClass('fixed_ico').fadeIn('fast');
							$(phone_block).removeClass('default_phone').addClass('fixed_phone').fadeIn('fast');
							$(navigate).removeClass('default_nav').addClass('fixed_nav').fadeIn('fast');

						});
					} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
						menu.fadeOut('fast', function(){
							$(this).removeClass('fixed').addClass('default').fadeIn('fast');
							$(ico_block).removeClass('fixed_ico').addClass('default_ico').fadeIn('fast');
							$(phone_block).removeClass('fixed_phone').addClass('default_phone').fadeIn('fast');
							$(navigate).removeClass('fixed_nav').addClass('default_nav').fadeIn('fast');

						});
					}
				}
			});


	$('.social-icon__img').hover(function(){
		var src = $(this).attr('src');
		src = src.replace('_b_','_a_');
		$(this).attr('src', src);
	}, function() {
		var src = $(this).attr('src');
		src = src.replace('_a_','_b_');
		$(this).attr('src', src);
	});

	$('.nav-toggle').click(function() {
		$('.nav').toggleClass('show');
		$(this).toggleClass('active');
	});

	$('.nav-item-dropdown').click(function(){
		$('.third-nav').removeClass('show');
		$(this).next().toggleClass('show');
	});

});