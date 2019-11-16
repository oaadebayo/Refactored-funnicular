const express = require('express');
const mysql = require('mysql2');


var connection  = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'markettrends'
  });


//Test db
connection.connect((err)=> {
    if(err){
      throw err;
    }
    console.log('MySQL connected...')
});
global.db = connection;

module.exports.connection = connection;
