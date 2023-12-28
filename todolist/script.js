var checkedFlag;
$('form').on('submit', function (e) {
	e.preventDefault();
	var inputText = validInputText($('input').val());
	$('.todo-list').append(
		'<div class=todo-item><input type=checkbox /><h2>' +
			inputText +
			'</h2><button class=btn-delete>delete</button></div>'
	);

	$('.btn-delete').on('click', function (e) {
		$(this).parent().remove();
		// this.parentNode.remove();
	});

	$("input[type='checkbox']").on('change', function () {
		checkedFlag = true;
		if (checkedFlag) {
			checkedFlag = false;
		} else {
			checkedFlag = true;
		}
		console.log(checkedFlag);
	});
	$('input').val('');
});

function validInputText(inputText) {
	if (!inputText) {
		throw new Error('please enter a text');
	} else {
		return inputText;
	}
}
