const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')
var url = "mongodb://localhost:27017/AlienDBex";

// GET
router.get('/', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

// GET by ID
router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


// POST
router.post('/', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
	alien.save(function(err,result){
		if(err)
			throw err
		res.json(result)
		
	})

})


module.exports = router