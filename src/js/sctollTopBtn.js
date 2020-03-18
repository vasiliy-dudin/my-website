// Кнопка Наверх

(function scrolltotop() {
	const $BTN = document.querySelector('.scroll-to-top'); // Кнопка
	var $currentScroll; // Текущие координаты

	window.addEventListener('scroll', function() {
		$currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

		if ($currentScroll > 400) {
			$BTN.style.display = "block";

			// Клик на кнопку
			$BTN.addEventListener('click', function (){
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				})
			});
		}

		else {
			$BTN.style.display = "none";
		}

	});
})();
