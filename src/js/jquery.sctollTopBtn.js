// Кнопка Наверх
$(function() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

	$('.scroll-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});