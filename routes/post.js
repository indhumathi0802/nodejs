/*var express=require("express"); 
var bodyParser=require("body-parser"); 
var mysql = require('mysql');
var path = require('path');
var router = express.Router();

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
  //console.log('hello');
//inset data
router.post('get/sign_up', function(req,res){
    console.log('hi');
    console.log("post",req); 
      var name = req.body.name; 
      var email =req.body.email; 
      var pass = req.body.password; 
      var phone =req.body.phone; 
      connection.connect(function(err) {
          if (err) throw err;
      var sql="INSERT INTO udetails (name,email,password,phone) VALUES('"+name+"','"+email+"','"+pass+"','"+phone+"')";
      connection.query(sql,function(err,result){
          if (err) throw err
          console.log("1 record inserted");
          res.end();
      });
     });
  }) 

  module.exports=router;*/ 