// cmd : nodemon run start
const express = require('express')// It is a back end web application framework for Node.js.
const mongoose = require('mongoose')//It is a Node.js based Object Data Modeling(ODM) library for MongoDB.It allows developers to enforce a specific schema at the application layer.
const url = 'mongodb://localhost:27017/AlienDBex'
const bodyparser = require('body-parser')// milddleware

const app = express()
app.use(bodyparser.urlencoded({extended:true})) 
app.use(bodyparser.json)

mongoose.connect(url, { useUnifiedTopology: true } , {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter) 

app.listen(9000, () => {
    console.log('Server started')
})