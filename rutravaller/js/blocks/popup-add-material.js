$(document).ready(function(){
	$('.js-open-popup-add-material').click(function(){
		$('#overlay, .popup-am').fadeIn('fast');
	});
	$('#overlay, .popup-am__close').click(function(){
		$('#overlay, .popup-am').fadeOut();
	});
});