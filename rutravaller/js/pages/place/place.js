$(document).ready(function(){
	$('.js-fav').click(function(){
		var b = $(this).find('.action-link__text').text();
		$(this).addClass('active');
		$(this).find('.action-link__text').text(++b);
	});
	$('.js-show-all-info-tags').click(function(){
		$('.info-tags__item.hidden').removeClass('hidden');
		$(this).hide();
	});
	$('.js-tape-tab').click(function(){
		$('.js-tape-tab').removeClass('active');
		$(this).addClass('active');
	});

	// Открытие/Закрытие формы для ввода записи
	var formCheck = function(obj){
		if(obj.hasClass('active')) {
			if(obj.val() === '') {
				obj.removeClass('active');
			}
		}
	}
	
	$('.tape-form__field').click(function(){
		$(this).find('.tape-form__textarea').addClass('active').focus();
	});
	$('.tape-form__textarea').focusout(function(){
		formCheck($(this));
	});

	// Открытие комментариев
	$('.js-show-comments').click(function(e){
		$(this).closest('.tape-item').find('.tape-comments').fadeIn();
		e.preventDefault();
	});
});
