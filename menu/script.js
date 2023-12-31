$('.side-menu').on('mouseenter', function () {
	$('ul').fadeIn(500);

	$('.side-menu').addClass('active').css({ transition: '1s' });
});
$('.side-menu').on('mouseleave', function () {
	console.log('hello');
	$('ul').fadeOut(500);
	$('.side-menu').removeClass('active');
});

$('ul').on('click', function () {
	$(this).children('li').toggle(500);
});
