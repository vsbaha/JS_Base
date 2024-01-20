const buttons = document.querySelectorAll('.toggle-button');

buttons.forEach(function(button, index) {
	button.addEventListener('click', function() {
		let answer = document.querySelectorAll('.answer')[index];

		if (answer.style.display === 'none' || answer.style.display === '') {
			answer.style.display = 'block';
			button.textContent = 'Скрыть ответ';
		} else {
			answer.style.display = 'none';
			button.textContent = 'Показать ответ';
		}
	});
});