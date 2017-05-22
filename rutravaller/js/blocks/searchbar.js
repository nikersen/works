$(document).ready(function(){
		$('.js-searchbar-field').focus(function () {
			$('.searchbar-field__row').addClass('focus');
			$('.searchbar .header2016-sug').show();
			$('.nano').nanoScroller();
		});
		$('.searchbar .header2016-sug__place-result').click(function () {
			$('.searchbar-field__row').removeClass('focus');
			$('.searchbar .header2016-sug').hide();
		});

		var _showSuggest = function() {
			var suggest = $('.suggest');
			var header = $('.header-mid');
			var wh = $(window).height();
			var toph = $('.header-topmenu').height();
			var body = $('html, body');

			body.animate({scrollTop: 0});
			suggest.fadeIn('fast').css({'height' : wh-toph});
			header.addClass('suggest-show');
		}

		var _hideSuggest = function() {
			var suggest = $('.suggest');
			var header = $('.header-mid');

			suggest.fadeOut('fast', function(){
				header.removeClass('suggest-show');
			});
		}

		var _hideSuggestBrute = function() {
			var suggest = $('.suggest');
			var header = $('.header-mid');

			suggest.hide();
			header.removeClass('suggest-show');
		}

		$('.js-show-suggest').click(function(){
			_showSuggest();
		});

		$('.js-show-auth').click(function(){
			_hideSuggestBrute();
		});

		$(document).mouseup(function (e) {
		    var container = $('.suggest');
		    var containerSecond = $('.header-search__col_search');
		    if (container.has(e.target).length === 0){
		    	if (containerSecond.has(e.target).length === 0){
		        	_hideSuggest();
		    	}
		    }
		});
		$(window).scroll(function(){
			var suggest = $('.suggest').innerHeight() * 0.85;
			var wscroll = $(this).scrollTop();

			if (wscroll >= suggest) {
				_hideSuggest();
			}
		})
});
