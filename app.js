const cors = require("cors");
const express = require("express");
const admin = require('./admin')
app.use(express.json());
app.use(cors());
const app = express();
const retrievework = require('./retrievework')

// const ejs = require("ejs");
const mongoose = require('mongoose')
// app.set('view engine', 'ejs');
app.use(express.static("public"));

require('dotenv').config({path:__dirname + '/.env'})

//mongoose.connect:Connecting to cloud mongoDB atlas 
const BAMBI_CONNECT = process.env.BAMBI_CONNECT
mongoose.connect(BAMBI_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
   (error)=>console.log(`Connection requested`))


app.use('/',admin)
app.use('/',retrievework)

const port = process.env.PORT || 7070
app.listen(port, ()=>{console.log(`server is running on port:${port}`)});
