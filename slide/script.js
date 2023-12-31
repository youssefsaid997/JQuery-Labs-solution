var counter = 0;
$('.image').each(function (index, element) {
	$(element).click(function () {
		counter = index;
		$('.slider').addClass('active');
		$('.slider img').attr({ src: element.src });
		$('.next').click(function () {
			if (counter >= 2) {
				counter = 0;
			} else {
				counter++;
			}
			$('.slider img').attr({ src: $('.image')[counter].src });
		});
		$('.previous').click(function () {
			if (counter <= 0) {
				counter = 2;
			} else {
				counter--;
			}
			$('.slider img').attr({ src: $('.image')[counter].src });
		});
		$('.exit').click(function () {
			$('.slider').removeClass('active');
		});
	});
});
