var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
dotenv.config();
var cors = require('cors');
//import attendance_manage  file

var index = require('./routes/index');



var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser())


//for report id
app.use('/hrm',index)



module.exports = app;
