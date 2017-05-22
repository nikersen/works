$(document).ready(function(){
	$('.header-nav__link').click(function(e){
		$('.header-nav__link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	$('.header__trigger').click(function(){
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('show');
		$('.left-nav').removeClass('show');
	});

	$('.js-left-menu-hide').click(function(){
		$('.left-nav').removeClass('show');
	});
	
	$('.js-left-menu-open').click(function(){
		$('.left-nav').addClass('show');
	});
});