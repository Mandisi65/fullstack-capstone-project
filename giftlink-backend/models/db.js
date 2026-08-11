// giftlink-backend/models/db.js
const { MongoClient } = require('mongodb');
require('dotenv').config(); 

const url = process.env.MONGO_URL;
const dbName = "giftdb";
let dbInstance = null;
let client = null;

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    if (!client) {
        client = new MongoClient(url);
    }

    // Task 1: Connect to MongoDB
    await client.connect();

    // Task 2: Connect to database giftDB and store in variable dbInstance
    dbInstance = client.db(dbName);

    // Task 3: Return the database instance
    return dbInstance;
}

module.exports = connectToDatabase;