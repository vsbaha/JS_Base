var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

var tagCounts = {};

for (var tag of tags) {
	if (tagCounts[tag] === undefined) {
		tagCounts[tag] = 1;
	} else {
		tagCounts[tag]++;
	}
}

console.log(tagCounts);


var keys = ["name", "lastname", "age"];
var values = ["John", "Black", 23];

var obj = {};

for (var i = 0; i < keys.length; i++) {
	obj[keys[i]] = values[i];
}

console.log(obj);

var getDataType = (userValue) => console.log(`Ваш тип данных: ${typeof userValue}`)
getDataType(32)