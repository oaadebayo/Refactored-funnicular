const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');
const app= express();
const server = require('./service/server')
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use( express.static(path.join(__dirname,'views')));
app.use('/', function(req, res, next){
    console.log(req.url);
    next(); 
});
app.set('view engine', 'ejs');
app.get('/',function (req, res){
    res.render('index');
});


var registerProduct = require("./bizlogic/registerproduct");
//market routes
// app.use('/market', require('./routes/market'));

//DB Connection
const db = require("./dataaccess/datalogic");

app.listen('4100',function(){
console.log('Server started on port 4100'); 
})

app.post('/api/registerproduct',  function(req, res){
    registerProduct(req, res);
    console.log(req.body)
    res.render('index', {message: 'Data Saved Successfully'});
});