// //контекст this
// var courseGeeks = {
//     name:'Geeks',
//     foundingYears: 2018,
//     directions: ['frontend', 'backend','ux/ui', 'android', 'ios', 'qa', 'pm'],
//     address:{
//         street:'Ibraimova 103',
//         building: 'Victory',
//         floor:[2, 4],
//         number : null
//     },
//     showInfo(){
//         // console.log(`${courseGeeks.name} ${courseGeeks.foundingYears}`)
//         console.log(`${this.name} ${this.foundingYears}`)
//     },
//     showInfo2(){
//         function info(){
//             console.log(`${this.name} ${this.foundingYears}`)
//         }
//         info()
//     },
//     branches : 3,
//     tagline: 'Будущее за программированием в Geeks'
// }
// // courseGeeks.showInfo()
// courseGeeks.showInfo2()

const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
	if (input.value.trim() === '') {
		return alert('Нельзя вводить пустоту или пробелы')
	}

	const div = document.createElement('div')
	const divButtons = document.createElement('div')

	const text = document.createElement('h3')
	const deleteButton = document.createElement('button')
	const editButton = document.createElement('button')

	deleteButton.innerHTML = 'DELETE'
	editButton.innerHTML = 'EDIT'

	div.setAttribute('class', 'block_text')
	divButtons.setAttribute('class', 'div_button')
	deleteButton.setAttribute('class', 'delete_button')
	editButton.setAttribute('class', 'edit_button')

	divButtons.append(deleteButton, editButton)
	div.append(text, divButtons)
	text.innerHTML = input.value


	todoList.prepend(div)
	console.log(todoList)
	input.value = ''

	deleteButton.onclick = () => div.remove()
	editButton.onclick = () => {
		const editedText = prompt(`Edited -> ${text.innerHTML}`).trim()
		editedText === '' ? alert('Нельзя вводить пустоту') : text.innerHTML = editedText
	}

	text.addEventListener('click', () => text.classList.toggle('toggle'))

}

createButton.onclick = () => createTodo()
window.onkeydown = (event) => {
	if(event.code === 'Enter'){
		createTodo()
	}
}

//truthy and falsy - выражения
//falsy -> 0, '', "", ``, NaN, null, undef, 7n, false

var element = null
console.log(element ? 'true':'false')