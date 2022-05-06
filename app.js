const cors = require("cors");
const express = require("express");
const admin = require('./admin')
const retrievework = require('./retrievework')
const app = express();
const ejs = require("ejs");
const mongoose = require('mongoose')
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
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
