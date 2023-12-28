var counter = 0;

$('img').each(function (index, image) {
	$(image).on('click', function () {
		$('.slider').toggleClass('active');
		$('.active img').attr({ src: $('img')[index].src });
		//next button
		$('.next').on('click', function (event) {
			event.stopPropagation();
			if (counter >= 3) {
				counter = 0;
			} else {
				counter++;
			}
			$('.active img').attr({ src: $('img')[counter].src });
		});

		//previous button
		$('.previous').on('click', function (event) {
			event.stopPropagation();
			if (counter <= 0) {
				counter = 3;
			} else {
				counter--;
			}
			$('.active img').attr({ src: $('img')[counter].src });
		});
		// x to exit the slider section
		$('.active span').on('click', function () {
			$('.active').toggleClass('active');
		});
		// clicking anywhere except next or previous will close the slider
		$('.active').on('click', function () {
			$('.active').toggleClass('active');
		});
	});
});
