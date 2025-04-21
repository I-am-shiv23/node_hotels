const mongoose = require('mongoose');
// define the mongoDb connection url
const mongoURl = 'mongodb://localhost:27017/hotels'; //replace 'mydatabase' with your database name

//set up mongodb connection
mongoose.connect(mongoURl);

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