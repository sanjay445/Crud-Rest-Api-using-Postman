//Mongoose is a Node.js based Object Data Modeling(ODM) library for MongoDB.It allows developers to enforce a specific schema at the application layer.
//DB -> AlienDBex
//Collection -> aliens
const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Alien',alienSchema)