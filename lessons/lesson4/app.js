var htmlTeg = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div','div','div','div','div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br', 'span']
var tegObject = {}

for(var i = 0; i < htmlTeg.length; i++){
    var currentTeg = htmlTeg[i]
    if(tegObject.hasOwnProperty(currentTeg)){
        tegObject[currentTeg] += 1
    }else{
        tegObject[currentTeg] = 1
    }
}
console.log(tegObject)
//sort
console.log(Object.keys(tegObject).sort(function (teg1, teg2) {
    return tegObject[teg1] - tegObject[teg2]
}))


//arrow-function
var array = [45, 21, 37, 88]

var getPositionElement = (arr, elem) => {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === elem){
            return console.log(i)
        }
    }
    return console.log('not found 404')
}
getPositionElement(array, 77)



function findMax (array){
    var max = array[0] //99
    for (var num of array) {
        if(max < num){
           max = num //99
        }
    }
    return console.log(max)
}

findMax([2,5,80, 5,5,5,5,5,55,5,5])

var sumArray = (array) =>{
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return console.log(sum)
}

sumArray([1,2,3,4,5,6])

//DOM
console.dir(document.body.style.backgroundColor = 'grey')
//class
var text = document.getElementsByClassName('text')
text[1].style.color = 'red'
text[0].innerHTML = 'Hello from JS'
console.log(text)
var text2 = document.querySelectorAll('.text')
//id
var button = document.getElementById('btn')
// button.style.width = '300px'
//tag
var button2 =  document.querySelector('button')
// button2.style.width = '600px'
button2.addEventListener('click', () => console.log('Клик по кнопке')
)
//lambda - функция в одну строку

//обработка событий

document.querySelector('#btn').onclick = () => {
    var wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'block')
    wrapper.style.width='100px'
    wrapper.style.height='100px'
    wrapper.style.backgroundColor='green'
    document.body.append(wrapper)
}


