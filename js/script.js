$(function(){
    $(".header__top-nav a").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
    $('.header__menu-button').on('click', function(){
        $('.header__top-nav').toggleClass('header__top-nav--active');
    })
    var mixer = mixitup('.gallery__filter');
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
    $('.slider__inner').slick({
        dots: true,
        arrows: false,
    });
});

