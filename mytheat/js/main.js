$(document).ready(function () {
	$('.slide2').waypoint( function () {
		$('.slide2-aliment').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});

	$('.slide4').waypoint( function () {
		$('.photo1, .photo4').addClass('animated rollInDown')
		$('.photo2').addClass('animated rollInUp');
		$('.photo3').addClass('animated rollIn');
		$('.photo5').addClass('animated zoomIn');
		$('.slide4-aliment').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});

	// $('.slide3').waypoint( function () {
	// 	$('.slide3-aliment').addClass('animated fadeInUp');
	// }, {
	// 	offset: '75%'
	// });

	$('.slide5').waypoint( function () {
		$('.slide5-aliment').addClass('animated zoomIn');
	}, {
		offset: '75%'
	});



	var count = 0; // Счетчик
	var pages = 5; // Количество страниц книги

	$('.arrow-next').click( function () {
		var parent = $(this).parent();
		if (count < pages) {
			parent.find('.open-book-page_active')
			.removeClass('open-book-page_active').fadeOut()
			.next().fadeIn().addClass('open-book-page_active');
			count++;
		}
	});

	$('.arrow-prev').click( function () {
		var parent = $(this).parent();
		if (count > 0) {
			parent.find('.open-book-page_active')
			.removeClass('open-book-page_active').fadeOut()
			.prev().fadeIn().addClass('open-book-page_active');
			count--;
		}
	});

	$('.photo').click( function () {
		$(this).removeClass('active').next().addClass('active');
	})
});

$(window).scroll(function () {

	var st = $(this).scrollTop();
	var b = $('.slide3').offset().top;

	if (st < b) {
		$('.logo').css({
			'transform' : 'translate(0px,' + st/4 + 'px',
			'-webkit-transform' : 'translate(0px,' + st/4 + 'px',
			'-moz-transform' : 'translate(0px,' + st/4 + 'px',
			'-o-transform' : 'translate(0px,' + st/4 + 'px',
			'-ms-transform' : 'translate(0px,' + st/4 + 'px',
		});
		$('.cloud').css({
			'transform' : 'translate(0px,' + st/2 + 'px',
			'-webkit-transform' : 'translate(0px,' + st/2 + 'px',
			'-moz-transform' : 'translate(0px,' + st/2 + 'px',
			'-o-transform' : 'translate(0px,' + st/2 + 'px',
			'-ms-transform' : 'translate(0px,' + st/2 + 'px',
		});
		// $('.slide2 .book').css({
		// 	'transform' : 'translate(0px,' + st/10 + 'px'
		// });
	}


    var nav = $('.float-block'); //в переменную определим наше меню
    var s2o = $('.slide2').offset().top;
    var hi = $('.floaty').height();
    var h = $('.slide2').height();
   	var sb = st + hi;
    var s = h + s2o;

    // console.log(
    // 	+ st + ' высота скрола '
    // 	+ h + ' высота книги '
    // 	+ sb + ' высота скрола ловушка '
    // 	+ s + ' высота скрола, остановки '
    // 	);

    if ((st+60 > s2o) && (sb-130 < s)) {
		$('.slide2 .book').css({
			'transform' : 'translate(0px,' + (st+60 - s2o)/1.5 + 'px',
			'-webkit-transform' : 'translate(0px,' + (st+60 - s2o)/1.5 + 'px',
			'-moz-transform' : 'translate(0px,' + (st+60 - s2o)/1.5 + 'px',
			'-o-transform' : 'translate(0px,' + (st+60 - s2o)/1.5 + 'px',
			'-ms-transform' : 'translate(0px,' + (st+60 - s2o)/1.5 + 'px',
		});
	} 

});