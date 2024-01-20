//for i++
var names = ['meerim', 'madina', 'ruslan', 'daniyar', 'baktiyar', 'Aidana']
var blackList = ['aidana','ruslan', 'john', 'baktiyar']
for(var i = 0; i < names.length; i++){
    if(blackList.includes(names[i].toLowerCase())){
        console.warn(`${names[i]} in blacklist`)
        continue
    }
    console.log(`Welcome, dear guest ${names[i]}`)
}
printDelimiter()

//for..of
var children = [2007, 1994, 2021, 2003, 2010, 2015, 1998, 2019, 2000, 2013, 2022, 2007, 2015]
// for(var child2 in children){
//     console.log(child2)
// }

var currentYear = 2023
var gifts = 0
for(var child of children){
    var childAge = currentYear - child
    if(childAge >= 6 && childAge <= 11){
        gifts++
    }
}

console.log(`Gifts total: ${gifts} of ${children.length}`)
printDelimiter()

//for..in
var cars = {
    BMW : '7 марта 1916 г',
    Mercedes_benz : '28 июня 1926 г',
    Polls_Royce: '10 февраля 2011 г'
}

for(var key in cars){
    var foundingDate = cars[key]
    console.log(`${key} был основан ${foundingDate}`)
}
printDelimiter()

for(var key2 of Object.keys(cars)){
    console.log(key2)
}

// doCalc()

//функции
//function-declaration
function printDelimiter() {
    console.log('_'.repeat(70))
}

printDelimiter()

//function-expression
var doCalc = function (num1, num2){
    console.log(num1 + num2)
}
doCalc(3, 10)

// function getMax(num1, num2){
//     if(num1 > num2){
//         console.log(num1)
//     }else{
//         console.log(num2)
//     }
// }
// getMax(12, 8)

//вариант2
var getMax = (n1, n2) => console.log(n1 > n2 ? n1 : n2)
getMax(4,6)

function printPrompt(name){
    console.log(name)
}
printPrompt(prompt())

// hellooooooo
