const express = require('express');
const app = express();
require('dotenv').config(); // Load environment variables from .env file
const db = require('./db'); // Import the database connection
 // Import the ManuItem model
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
const PORT = process.env.PORT || 3000; // Use the port from .env or default to 3000
const Person = require('./models/Person'); // Import the Person model
// Basic route

app.get('/', function(req, res){
    res.send('Welcome to the Express server!');
});


const personRoutes = require('./routes/personRoutes');// Import the person routes
const menuItemRoutes = require('./routes/menuItemRoutes'); 
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes); // Use the menu item routes
// Start the server
app.listen(PORT, ()=>{
    console.log('Server is running on port 3000');
});