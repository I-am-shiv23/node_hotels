const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file 
// define the mongoDb connection url
// const mongoURL = 'mongodb://localhost:27017/hotels'; //replace 'mydatabase' with your database name
// const mongoURL = ;
//set up mongodb connection
const mongoURL = process.env.MONGODB_URL // Use the environment variable or default to localhost
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB Server!');
});
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.on('disconnected', () => {
    console.log('MongoDB connection disconnected!');
});

module.exports = db;