const express = require('express');
const router = express.Router();
const Person = require('../models/Person');
router.post('/', async(req,res)=>{
    try{const data = req.body;
        const newPerson = new Person(data); // Create a new instance of the Person model
        const response = await newPerson.save();
        console.log("data saved"); // Log the saved person
        res.status(201).json(response); // Send the saved person as a response
    }
    
    catch(err){
        console.log(err); // Log the error
        res.status(500).json({error: 'Internal server error'}); // Send an error response
    }
})
router.get('/', async(req,res)=>{
    try{
        const data = await Person.find(); // Fetch all persons from the database
        console.log("data fetched"); // Log the fetched persons
        res.status(200).json(data); // Send the persons as a response
    }
    catch(err){
        console.log(err); // Log the error
        res.status(500).json({error: 'Internal server error'}); // Send an error response
    }
})
router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType; // Get the work type from the URL parameters
        if(workType == 'chef' ||  workType  == 'manager' || workType == 'waiter'){
        const response = await Person.find({work: workType}); // Fetch persons with the specified work type
        console.log("data fetched"); // Log the fetched persons
        res.status(200).json(response); // Send the persons as a response      
    }else{
        res.status(400).json({error: 'Invalid work type'});
     } // Send an error response for invalid work type
    }catch(err){
        console.log(err); // Log the error
        res.status(500).json({error: 'Internal server error'}); // Send an error response
    }
})
router.put('/:id', async(req,res)=>{
    try{
        const personId = req.params.id; // Get the ID from the URL parameters
        const updatePersonData = req.body; // Get the request body
        const response = await Person.findByIdAndUpdate(personId,updatePersonData, {
            new: true,
            runValidators: true
             
        }); 
        if(!response){
            return res.status(404).json({error: 'Person not found'}); // Send an error response if person not found
        }
        console.log("data updated"); // Log the updated person
        res.status(200).json(response); // Send the updated person as a response
    }catch(err){
        console.log(err); // Log the error
        res.status(500).json({error: 'Internal server error'}); // Send an error response
    }
})
router.delete('/:id', async(req,res)=>{
    try{
        const personId = req.params.id; // Get the ID from the URL parameters
        const response = await Person.findByIdAndDelete(personId); // Delete the person with the specified ID 
        if(!response){
            return res.status(404).json({error: 'Person not found'}); // Send an error response if person not found
        }
        console.log("data deleted"); // Log the deleted person
        res.status(200).json({message: 'Person deleted successfully'}); // Send a success message as a response
    }
    catch(err){
        console.log(err); // Log the error
        res.status(500).json({error: 'Internal server error'}); // Send an error response
    }
})

module.exports = router; // Export the router for use in other files