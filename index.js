var express = require('express');
var bodyParser=require("body-parser"); 
var mysql = require('mysql');
var path = require('path');
var app=express() 
var router = express.Router();

var mysql = require('mysql');

app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ 
    extended: true
}));

var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'mydb'
});
connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
}); 

var add=require('./routes/app.js');
app.use('/get',add);


var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})

