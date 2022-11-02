// const { MongoClient } = require("mongodb")
// const { ObjectId } = require("mongodb")
const { ObjectId, MongoClient } = require("mongodb")

class Library {
    constructor(dbUrl, dbName, collName) {
    this.dbUrl = dbUrl;
    this.dbName = dbName;
    this.collName = collName;
    this.dbClient; 
    }
    async client() {
        console.log(`Connecting to\n${this.dbUrl}...`)
        this.dbClient = MongoClient.connect(this.dbUrl)
        console.log("Connected to database.");
        return this.dbClient;
    }
    async test() {
        const client = await this.client()
        client.close()
    }
    async collection() {
        const client = await this.client();
        const db = client.db(this.dbName);
        const collection = db.collection(this.collName);
        return collection;
    }
    async allBooks() {
        let collection = await this.collection()
        // console.log(collection)
        return collection.find({}).toArray()
    }
    async findOneBook(id) {
        let docId = ObjectId(id)
        let collection = await this.collection()
        return collection.find(docId).toArray()
    }
    async findManyBooks(query) {
        let collection = await this.collection()
        return collection.find(query).toArray()
    }
    async addBook(info) {
        let collection = await this.collection()
        collection.insertOne(info)
        console.log("book added")
    }
    async changeBook(id, newInfo) {
        let mongoId = { _id: ObjectId(id) }
        let infoObj = {$set: newInfo}
        let collection = await this.collection()
        await collection.updateOne(mongoId, infoObj)
        console.Console;pageXOffset("book changed")
    }
    async removeBook(id) {
        let mongoId = { _id: ObjectId(id) }
        let collection = await this.collection()
        collection.deleteOne(mongoId)
        console.log("book removed")
    }
}

module.exports = Library