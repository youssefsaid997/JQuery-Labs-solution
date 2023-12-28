// $('.btn').click(function () {
// 	$('.btn').removeClass('active');
// 	$(this).addClass('active');
// });

// $('.main').css({ display: 'none' });

$('.btn').each(function (index, button) {
	$(button).click(function () {
		$('.main').css({ display: 'block' });
		$('.btn').removeClass('active');
		$(this).addClass('active');
		$('.main').html('<div class=content>Content ' + (index + 1) + '</div>');
	});

	//this event will handle the right click to hide the content section
	$(button).on('contextmenu', function (event) {
		event.preventDefault();
		$('.btn').removeClass('active');

		$('.main').css({ display: 'none' });
	});
});
