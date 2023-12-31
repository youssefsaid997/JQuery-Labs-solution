var counter = 0;

// $('img').each(function (index, image) {
// 	$(image).on('click', function () {
// 		$('.slider').toggleClass('active');
// 		$('.active img').src =
// 		//next button
// 		$('.next').on('click', function (event) {
// 			event.stopPropagation();
// 			if (counter >= 3) {
// 				counter = 0;
// 			} else {
// 				counter++;
// 			}
// 			$('.active img').attr({ src: $('img')[counter].src });
// 		});

// 		//previous button
// 		$('.previous').on('click', function (event) {
// 			event.stopPropagation();
// 			if (counter <= 0) {
// 				counter = 3;
// 			} else {
// 				counter--;
// 			}
// 			$('.active img').attr({ src: $('img')[counter].src });
// 		});
// 		// x to exit the slider section
// 		$('.active span').on('click', function () {
// 			$('.active').toggleClass('active');
// 		});
// 		// clicking anywhere except next or previous will close the slider
// 		$('.active').on('click', function () {
// 			$('.active').toggleClass('active');
// 		});
// 	});
// });

$('.gallery-image').each(function (index, image) {
	$(image).on('click', function () {
		counter = index;
		$('.slider').toggleClass('active');
		$('.slider img').attr({ src: image.src });

		$('.next').on('click', function (event) {
			movingForward(index);
			$('.active img').attr({ src: $('img')[counter].src });
		});
		$('.previous').on('click', function (event) {
			movingBackward(index);
			$('.active img').attr({ src: $('img')[counter].src });
		});
		$('.exit').click(function () {
			$('.slider').removeClass('active');
		});
	});
});

function movingForward(index) {
	if (counter >= 3) {
		counter = 0;
	} else {
		counter++;
	}
}
function movingBackward(index) {
	if (counter <= 0) {
		counter = 3;
	} else {
		counter--;
	}
}
