const numbers = [2, 3, 4, 5, 44, 44, 34, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 8, 7, 8, 7, 5, 6, 4, 5]
const uniqueNumbers = numbers.reduce((acc, number) => {
	if (!acc.includes(number)) {
		acc.push(number)
	}
	return acc
},[])

console.log(uniqueNumbers)

function getBooksWithLetterU(books) {
	const booksWithU = books.filter((book) => book.toLowerCase().includes('у'))
	const booksWithoutU = books.filter((book) => !book.toLowerCase().includes('у'))

	console.log("Книги с буквой «у»:")
	booksWithU.map((book) => console.log(`=> ${book} – книга с буквой «у»`))

	console.log("Книги без буквы «у»:")
	booksWithoutU.map((book) => console.log(`=> ${book}`))
}

const books = ["Зов Ктулху", "Сто лет одиночества", "Война и мир", "Утро", "Преступление и наказание", "Гарри Поттер", "Мастер и Маргарита", "Руслан и Людмила", "Хоббит"]

getBooksWithLetterU(books)
