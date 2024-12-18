var express = require('express')
var hotelRouter = require('./controllers/hotelController')

var app= express()
var mongoose =require('mongoose')
app.use(express.json())
app.use('/hotel', hotelRouter)




mongoose.connect('mongodb://localhost:27017/testjs').then(()=>{
    console.log("data base connected!");
}).catch(()=>{
    console.log("error :" +error)
})

var http = require('http')
const { error } = require('console')
var server = http.createServer(app)


server.listen(3000,()=>{
    console.log('server started !');
})