document.body.style.backgroundColor = 'grey'
var fruits = ['apple', 'pineapple', 'banana', 'orange', 'watermelon']
var filtering = (fruit) => {
	return fruit.length > 6
}

var filtered = fruits.filter(filtering)
console.log(filtered)

var users = [
	{name: 'adam', age: 34},
	{name: 'John', age: 12},
	{name: 'Oliver', age: 23},
	{name: 'Allen', age: 17},
	{name: 'William', age: 18},
	{name: 'Jack', age: 20},
]
var resultAge = users.filter((user) => user.age <= 18)

var arraySom = [567000, 47000, 23000, 1000000]
var arrayDollars = arraySom.map((num) => num / 89)
var fix = arrayDollars.map((dollar) => Math.round(dollar))
console.log(fix)

var sortDollars = fix.sort((n1, n2) => n2 - n1)
console.log(sortDollars)

var numbers = [1, 2, 3, 4, 5]
numbers.forEach((num) => console.log(num * 2))

// var searchUser = prompt('Кого ищите?').trim().toLowerCase()
// var users2 = [
// 	{name: 'adam', age: 34, desc: 'Меня зовут Адам, Мне 43 года я увлекаюсь ИИ и шахматами'},
// 	{name: 'John', age: 12},
// 	{name: 'Oliver', age: 23},
// 	{name: 'Allen', age: 17},
// 	{name: 'William', age: 18},
// 	{name: 'Jack', age: 20},
// ]

// var user = users2.find((user)=> user.name.toLowerCase() === searchUser)
// console.log(user)

var fruits2 = ['apple', 'pineapple', 'banana', 'orange', 'watermelon']
fruits2.push('123')
console.log(fruits2)

function convertUSD(usd, ...som){
	console.log(usd, som)
	return som.map(i => i / usd)
}

console.log(convertUSD(89, 24354656, 89000000))