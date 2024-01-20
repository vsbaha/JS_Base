var input = document.getElementById("value")
var plusButton = document.getElementById("plus")
var minusButton = document.getElementById("minus")
var resetButton = document.getElementById("reset")
//у меня по умолчанию стоит значение 0 так что по сути он должен быть серого цвета(я не знаю почему но без этого он белый)
input.style.backgroundColor = "grey"

// функция для проверки
function setBackgroundColor(value) {
	if (value > 0) {
		input.style.backgroundColor = "green"
	} else if (value === '0') {
		input.style.backgroundColor = "grey"
	} else {
		input.style.backgroundColor = "red"
	}
}

// код для кнопки +
plusButton.onclick = () => {
	input.value++
	setBackgroundColor(input.value)
}

// код для кнопки -
minusButton.onclick = () => {
	input.value--
	setBackgroundColor(input.value)
}
// код для кнопки reset
resetButton.onclick = () => {
	input.value = 0
	setBackgroundColor(input.value)
}