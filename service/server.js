const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');
const app= express();
app.use( express.static(path.join(__dirname,'views')));
app.use(bodyParser.urlencoded({
    extended: true
}))
var register_product = require("./../bizlogic/registerproduct");
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use( express.static(path.join(__dirname,'views')));
app.use('/', function(req, res, next){
    console.log(req.url);
    next(); 
});
app.set('view engine', 'ejs');


// app.post('/api/registerproduct',  function(req, res){
//     register_product(req, res);
//     console.log(req.body)
//     res.render('index', {message: 'Data Saved Successfully'});
// });