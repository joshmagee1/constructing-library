require("dotenv").config()
// const express = require("express")
// const app = express()

// const PORT = process.env.PORT || 4000
const MONGO_URL = process.env.MONGO_URL

const Library = require("./library")

let collection = new Library(MONGO_URL, "library", "books")

// collection.test()

async function allBooks() {
    let allBooks = await collection.allBooks()
    // allBooks.forEach(i => {
    //     console.log(i)
    // })
    console.log(allBooks)
}

// allBooks()

async function findOneBook(test) {
    let findOneBook = await collection.findOneBook(test)
    console.log(findOneBook)
}

// findOneBook("63616bcddaa0abacafe3b19b")

async function findManyBooks(test) {
    let query = await collection.findManyBooks({test})
    console.log(query)
}

//findManyBooks()

async function addBook(test) {
    collection.addBook({test})
}

//addBook()

async function changeBook(test) {
    collection.changeBook(test)
}

//changeBook()

async function removeBook(test) {
    collection.removeBook(test)
}

//removeBook()

// app.listen(PORT, () => {
//     // console.log(`listening on ${PORT}`)
// })
