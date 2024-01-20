// console.log('Hello world!');
// gbgbf
/* vcv c cv
 vcv c vcv
* */

//переменная
var helloText = 'Hello JavaScript, HTML, CSS';
// alert(helloText);
console.log(helloText);
document.write(helloText)

//camelCase
var nameAndSurname = 'Aidana Bekova'

//типы данных
//1) string - текст
console.log('тип данных ' + typeof nameAndSurname) //конкатенация
console.log(nameAndSurname.toUpperCase())
console.log(nameAndSurname.toLowerCase())
console.log(nameAndSurname.length)
console.log(nameAndSurname.repeat(12))

//2)number - номер
var number = 78
console.log(typeof number)
// *, **, /, %, >, <, >=, <=, ==, ===, !=, !==

console.log('Средний возраст группы 33-3 -> ', (18 + 19 + 16 + 17 + 17 + 18 + 18 + 13 + 18 + 16 + 21 + 18) / 12)
console.warn('svdd')
console.error('svdd')

var num1 = 5
var num2 = '5'
console.log(num1 === num2)

//3)boolean - true, false

//условные конструкции if, else..if, else
// var experience = prompt('What is your experience (in years)?')
// var devLevel;
//
// if(experience >= 0 && experience < 1){
//     devLevel = 'junior'
// }else if(experience >= 1 && experience < 5){
//     devLevel = 'middle'
// }else if(experience >= 5){
//     devLevel = 'senior'
// }else{
//     alert('Error')
// }
//
// console.log('You are ' + devLevel +  " developer")

//логические операторы &&, ||
var username = 'aidana'
var pass = 123
var enterUsername = prompt('enter username')
var enterPass = Number(prompt('enter password'))
if(username === enterUsername || pass === enterPass){
    console.log('ok')
}else{
    console.error('error')
}


for (var i = 0; i <= 100; i++) {
    if (i === 0) {
        console.log(i)
    } else if (i % 3 === 0) {
        console.log('fizz')
    } else if (i % 5 === 0) {
        console.log('buzz')
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    } else {
        console.log(i)
    }
}

