$(document).ready(function(){
	$('.popup-photos__photo').click(function(){
		$(this).toggleClass('active');
	});
	$('.js-pp-photo-uncheck').click(function(){
		$('.popup-photos__photo').removeClass('active');
	});
	$('.popup-photo__album').click(function(e){
		$(this).closest('.popup-photo__body').hide();
		$('.js-ppp-photos').show();
		e.preventDefault();
	});

	$('.popup-photo-add__place-btn').click(function() {
		$(this).closest('.popup-photo-add__place').find('.popup-photo-add__place-popup').toggle();
		$('.countries14-scroll').height('450px').perfectScrollbar({suppressScrollX: true});
		return false;
	});

	$('.countries14-p-a').click(function(e){
		$(this).closest('.popup-photo-add__place').find('.popup-photo-add__place-value').text($(this).text());
		$('.popup-photo-add__place-popup').hide();
		e.preventDefault();
	});

	$('.js-pp-photo-add-open').click(function(){
		$(this).closest('.popup-photo').hide();
		$('.js-pp-photo-add').fadeIn('fast');
	});

	$('#overlay, .popup-photo__close').click(function(){
		$('#overlay, .popup-photo').fadeOut();
	});

});