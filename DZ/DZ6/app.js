const input = document.querySelector('#amount')
const button = document.querySelector('#button')
button.addEventListener('click', () => calculateBudget())

window.onkeydown = (event) => {
	if(event.code === 'Enter'){
		calculateBudget()
	} else if (event.code === 'Space') {
		alert('Пасхалочка')
	}
}
function calculateBudget() {
	const amount = Number(document.querySelector('#amount').value)
	const month = Number(document.querySelector('#month').value)
	const daysInMonth = new Date(2023, month, 0).getDate()
	const dailyBudget = amount / daysInMonth

	displayResult(dailyBudget, daysInMonth)
}

function displayResult(dailyBudget, daysInMonth) {
	const resultDiv = document.querySelector('#result')
	resultDiv.innerHTML = ''

	for (let day = 1; day <= daysInMonth; day++) {
		const result = document.createElement('p')
		result.innerHTML = `День ${day} - ${dailyBudget.toFixed(2)}с`
		resultDiv.appendChild(result)
	}
	input.value = ''
}