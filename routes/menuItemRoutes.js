const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem'); // Import the MenuItem model

router.get('/',async(req,res)=>{
    try{
     const data = await MenuItem.find(); // Fetch all menu items from the database
        console.log("data fetched"); // Log the fetched menu items
        res.status(200).json(data); // Send the menu items as a response
    }catch(error){
        console.log(error); // Log the error
        res.status(500).json({error: 'Internal server error'}); // Send an error response

    }
})
router.get('/:taste',async(req,res)=>{
    try{
    //  const data = await MenuItem.find(); // Fetch all menu items from the database
    //     console.log("data fetched"); // Log the fetched menu items
    //     res.status(200).json(data); // Send the menu items as a response
    }catch(error){
        // console.log(error); // Log the error
        // res.status(500).json({error: 'Internal server error'}); // Send an error response

    }
})
router.post('/', async(req,res)=>{
    try{
        const data = req.body; // Get the request body
        const newMenuItem = new MenuItem(data); // Create a new instance of the MenuItem model
        const response = await newMenuItem.save(); // Save the new menu item to the database
        console.log("data saved"); // Log the saved menu item
        res.status(201).json(response); // Send the saved menu item as a response
    }
    catch(err){
        console.log(err); // Log the error
        res.status(500).json({error: 'Internal server error'}); // Send an error response
    }
})

module.exports = router; // Export the router for use in other files