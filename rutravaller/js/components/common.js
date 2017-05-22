$(document).ready(function(){

	// # Кнопка наверх 

	var posTop;
	
	$('.ontop-clickzone').click(function(e){
		if ($(this).hasClass('ontop-clickzone_down')) {
			$('html, body').animate({scrollTop: posTop}, 300, function(){
				$('.ontop-clickzone').removeClass('fixed');
			});
			$('.ontop-clickzone').removeClass('ontop-clickzone_down');
			e.preventDefault();
		} else {
			posTop = $(document).scrollTop();
			$('html, body').animate({scrollTop: 0}, 500, function(){});
			$('.ontop-clickzone').addClass('ontop-clickzone_down fixed');
			e.preventDefault();
		}
	});

	$(window).scroll(function(){
		var posShow = $('.header').height();
		if ($(document).scrollTop() >= posShow) {
			$('.ontop-clickzone').addClass('ontop-clickzone_show');
		} else {
			$('.ontop-clickzone').removeClass('ontop-clickzone_show');
		}

		if ($(document).scrollTop() >= posTop) {
			$('.ontop-clickzone').removeClass('ontop-clickzone_down fixed');
		}
	});


	// # Соцсети 

	$('.share-btn').click(function(){
		$(this).addClass('active');
	});

	$('.share-block-link').click(function(e){
		$(this).closest('.share-block').find('.share-block-input').show();
		e.preventDefault();
	});

	$(document).click(function (e) {
		if ($(e.target).closest('.share-btn').length == 0 && $(e.target).attr('class') != 'active') {
				$('.share-btn').removeClass('active');
		}
	});


	// # Кнопки 

	$('.js-btn-dd-trigger').click(function(){
		$(this).toggleClass('active');
		$(this).closest('.btn__group').find('.js-btn-dd').slideToggle(180);
	});

});