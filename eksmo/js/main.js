// Функция инициализации PerfectScrollbar
var responsiveScroll = function() {
	if($(this).width() > 800) {
		// Инициализируем PerfectScrollbar
		$('.scrollarea').perfectScrollbar({
			theme: 'eksmo'
		});
	} else {
		// Утилизируем PerfectScrollbar
		$('.scrollarea').perfectScrollbar('destroy');
	}
}

// Загрузка DOM
$(document).ready(function(){
	// Инициализируем мозайку отделов
	var initMosaic = function() {
		if($(this).width() >= 1170) {
			$('.map').Mosaic({
				maxRowHeight: 98,
				innerGap: 5
			});
		} else if($(this).width() >= 420) {
			$('.map').Mosaic({
				maxRowHeight: 98,
				innerGap: 5
			});
		}
	}
	initMosaic();

	// Инициализируем PerfectScrollbar
	$('.left-nav__link').click(function(){
		$('.left-nav__link').removeClass('active');
		$(this).addClass('active');
	});

	// Инициализируем PerfectScrollbar
	$(window).resize(function(){
		initMosaic();
		responsiveScroll();
		hidePopup();
	});

	// Инициализируем слайдер в попапе отдела
	$('.map-popup-slider').slick({
		slidesToShow: 3,
  		slidesToScroll: 3,
		responsive: [{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

	// Инициализируем слайдер на странице Foreign rights
	$('.rights-slider').slick({
		arrows: true,
		dots: true
	});

	// Инициализируем слайдер на странице автора
	$('.author-books').slick({
		arrows: true
	});

	// :)
	$('.authors-list__item').click(function(){
		document.location.href = 'author.html';
	});

	// Сортировка авторов, алфавит
	$('.authors-nav__link').click(function(e){
		$('.authors-nav__link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	// Показываем меню на устройствах
	$('.header-nav__btn').click(function(e){
		if($(this).hasClass('active')){
			hideMenu();
		} else {
			$('#overlay').fadeIn('fast');
			$('.header-nav__btn').addClass('active');
			$('.header-nav').addClass('show');
			$('.header').addClass('unoverlay');
		}
		e.preventDefault();
	});

	// Функция закрытия меню на устройствах
	var hideMenu = function(){
		$('.header').removeClass('unoverlay');
		$('.header-nav').removeClass('show');
		$('.header-nav__btn').removeClass('active');
		$('#overlay').hide();
	}

	// Открытие формы поиска
	var openSearch = function(){
		hideMenu();
		$('.header').addClass('unoverlay');
		$('.header-search').addClass('show');
		$('.header-search-input').focus();
		$('#overlay').fadeIn('fast');
	}
	var hideSearch = function(){
		$('.header').removeClass('unoverlay');
		$('.header-search').removeClass('show');
		$('#overlay').hide();
	}
	$('.js-open-search').click(function(){
		openSearch();
	});
	$('#overlay').click(function(){
		hideMenu();
		hideSearch();
	});
	
	// Плавный скролл по якорям
    $('a[href^="#"]').click(function(e){
        var el = $(this).attr('href');
        if (el != '#') {
	        $('html, body').animate({
	            scrollTop: $(el).offset().top}, 500);
	        return false; 
        } else {
	        e.preventDefault();
        }
    });

	// Открываем карту на странице контакты
	$('.js-show-map').click(function(){
        var t = $(this).text();
        $(this).toggleClass('active');
        $(this).text($(this).attr('data-alt'));
        $(this).attr('data-alt',t);
		$('.contacts__map').slideToggle('fast');
	});

	// Переключаем язык

	// Переключение языка
	$('.js-lang-ru').click(function(){
		$('.page').removeClass('eng').addClass('ru');
    	$('.js-lang-eng').removeClass('active');
    	$('.js-lang-ru').addClass('active');
		$('.scrollarea').perfectScrollbar('update');
	});
	$('.js-lang-eng').click(function(){
		$('.page').removeClass('ru').addClass('eng');
    	$('.js-lang-ru').removeClass('active');
    	$('.js-lang-eng').addClass('active');
		$('.scrollarea').perfectScrollbar('update');
	});


	// ################################
	// Попапы
	
	// Попап отделов
	$('.map__item').click(function(){
		showPopup($('.map-popup'));
	});
	// Попап мероприятий
	$('.events-list__item').click(function(){
		showPopup($('.events-popup'));
	});
	// Попап обзора
	$('.review-book-list__btn').click(function(){
		showPopup($('.rb-popup'));
	});
	// Попап обзора инста
	$('.js-review-book-insta').click(function(){
		showPopup($('.rb-popup-insta'));
	});

	// Попап подписки
	$('.js-popup-subscribe').click(function(){
		var w = $(window).width();
		if (w <= 800) {setTimeout(hideMenu, 300);}
		showPopup($('.subscribe-popup'));
	});
	// Попап "Нашли ошибку"
	$('.js-popup-misprint').click(function(){
		var w = $(window).width();
		if (w <= 800) {setTimeout(hideMenu, 300);}
		showPopup($('.misprint-popup'));
	});
	
	// Попап при наведении на подробнее
	var timeout;
	$('.review-book-list__group').hover(function(){
		clearTimeout(timeout);
		$(this).addClass('active');
	}, function(){
		var o = $(this);
		timeout = setTimeout(function(){
			o.removeClass('active');
		}, 200);
	});

	function showPopup(obj) {
		$('#overlay').fadeIn('fast');
		obj.addClass('is-visible');
		$('.scrollarea').perfectScrollbar('destroy');
		$('.scrollarea').perfectScrollbar({
			theme: 'eksmo'
		});
		
	}
	function hidePopup() {
		$('#overlay').fadeOut('fast');
		$('.popup').removeClass('is-visible');
	}
	$('#overlay, .close').click(function(){
		hidePopup();
	});
});

// Строим мозайку после полной загрузки страницы
$(window).load(function(){
	$('#book-wall').Mosaic({
			maxRowHeight: 250,
			innerGap: 5
	});
	responsiveScroll();
});