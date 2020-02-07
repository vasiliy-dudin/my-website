function _YearsCalc(){
	const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
	const firstDate = new Date(2011, 5, 1); // месяц начинается с 0
	const secondDate = new Date();

	const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));


	// Полных лет
	var $out_years = Math.floor(diffDays / 365);

	// Дней в этом году
	var $out_days = diffDays - ($out_years * 365)


	// Окончания числительных
	function num2str(n, text_forms) {
		n = Math.abs(n) % 100;
		var n1 = n % 10;

		if (n > 10 && n < 20) {
			return text_forms[2];
		}

		if (n1 > 1 && n1 < 5) {
			return text_forms[1];
		}

		if (n1 == 1) {
			return text_forms[0];
		}

		return text_forms[2];
	}


	document.write(" " + $out_years + " лет");
	if ($out_days) {
		document.write(" и " + $out_days + " " + num2str($out_days, ['день', 'дня', 'дней']));
	}
};

_YearsCalc();