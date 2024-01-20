// &&, ||
// var inn = '96767345600787'
// var firstNum = Number(inn[0])
// if((firstNum === 1 || firstNum === 2 || firstNum === 0) && inn.length === 14){
//     console.log('good')
// }else{
//     console.error('error')
// }

//switch..case
// var amount = prompt('Enter amount')
// var currency = prompt('Enter currency')
//
// var convert = 0
//
// switch(currency){
//     case 'USD':
//         convert = amount / 89
//         break
//     case 'EUR':
//         convert = amount / 102
//         break
//     case 'RUB':
//         convert = amount / 1
//         break
//     default:
//         console.warn('INVALID CURRENCY')
// }
// console.log(`${convert} ${currency}`)  //шаблонные строки
//
// if(currency === 'USD'){
//     convert = amount / 89
// }else if(currency === 'EUR'){
//     convert = amount / 102
// }else{
//     console.warn('INVALID CURRENCY')
// }


//number: Infinity , NaN
console.log(3456 / 0)
console.log(Infinity / Infinity)
console.log('fv' ** 3)
console.log((typeof NaN))

//4) null
//5) undefined
let undef;
console.log(undef)
var address = null
console.log(typeof address)

//bigint, symbol

//6)object
var courseGeeks = {
    name:'Geeks',
    foundingYears: 2018,
    directions: ['frontend', 'backend','ux/ui', 'android', 'ios', 'qa', 'pm'],
    address:{
        street:'Ibraimova 103',
        building: 'Victory',
        floor:[2, 4],
        number : null
    },
    branches : 3,
    tagline: 'Будущее за программированием в Geeks'
}
console.log(courseGeeks.address.floor)

//добавление
courseGeeks.students = 1000
//удаление
delete courseGeeks.address.number
console.log(courseGeeks)
//изменение
courseGeeks['branches'] = 4
console.log(courseGeeks)
//методы объекта
console.log(Object.keys(courseGeeks))
console.log(Object.values(courseGeeks))
console.log(Object.entries(courseGeeks))
console.log(courseGeeks.hasOwnProperty('name3'))

//array
var array = ['a', 'b', 'c',56]
console.log(array[3][0])
console.log(array.length - 1)

//цикл for i++
var arrayNum = [123, 234, 145, 456, 66, 78, 12, 23, 55]
for(var i = 0; i < arrayNum.length; i++){
    var number = String(arrayNum[i])
    if(number[0] === '1' || number[0] === '2' || number[0] === '5'){
        console.log(arrayNum[i])
    }
}


//var i = 0
// i = i + 1
// i += 1
// i++


