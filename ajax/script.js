$.ajax({
	method: 'GET',
	url: 'https://jsonplaceholder.typicode.com/users',
}).done(function (users) {
	$('.main').css({ height: '80%' });
	$('.header').css({ height: '20%' });

	users.forEach(function (user) {
		$('.header').append('<button class=btn>' + user.name + '</button>');
	});
	$('button').click(function () {
		var userName = this.innerText;
		handleButtonClick(users, userName);
	});
});

function handleButtonClick(users, userName) {
	users.forEach((user) => {
		if (userName === user.name) {
			$.ajax({
				method: 'GET',
				url:
					'https://jsonplaceholder.typicode.com/posts?userId=' + user.id + '',
			}).done(function (posts) {
				onCompleteAjaxCall(posts);
			});
		}
	});
}

function onCompleteAjaxCall(posts) {
	$('.main').empty();
	posts.forEach(function (post) {
		$('.main').append('<p class=post>' + post.title + '</p>');
	});
}
