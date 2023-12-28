// $('.btn').click(function () {
// 	$('.btn').removeClass('active');
// 	$(this).addClass('active');
// });

$('.btn').each(function (index, button) {
	$(button).click(function () {
		$('.btn').removeClass('active');
		$(this).addClass('active');
		$('.main').html('<div class=content>Content ' + (index + 1) + '</div>');
	});
});
