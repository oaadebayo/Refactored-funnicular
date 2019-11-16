const Product = require("./../interface/Market.js");
const datalogic = require ("./../dataaccess/datalogic");
const mysql = require('mysql2');
const expressvalidator = require('express-validator');
const expressflash = require('express-flash')


var connection  = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'markettrends'
  });


function register_product(req, res){
    var market_monitoring = {
        "product_name": req.body.product_name,   
        "market_name" : req.body.market_name,
        "date": req.body.date,
        "price" : req.body.date,
        "quantity" : req.body.quantity,
        
    }
    if (market_monitoring = null){
        req.flash('error', "Enter all Fields");
    return false;}
   
    
  connection.query("INSERT INTO products SET ?",market_monitoring, function (error, results, fields){
      if (error){
          console.log("error occurred", error);
          res.send({
              "code":400,
              "failed": "error occurred"
          })
      } else {
          console.log('The solution is ', results);
          res.send({
              "code":200,
              "success" : "Registered Successfully"
          });
      }
  }
  )}    
    
module.exports = register_product;