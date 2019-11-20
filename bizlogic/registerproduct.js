// const Product = require("./../interface/Market.js");
const datalogic = require("./../dataaccess/datalogic");
const mysql = require('mysql2');
const expressvalidator = require('express-validator');
const expressflash = require('express-flash')


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'markettrends'
});


function register_product(req, res) {
    var market_monitoring = {
        "product_name": req.body.product_name,
        "market_name": req.body.market_name,
        "date": req.body.date,
        "price": req.body.price,
        "quantity": req.body.quantity,

    }
    var market_monitoring_2 = [
        req.body.product_name,
        req.body.price,
        req.body.quantity,
        req.body.date,
        req.body.market_name,
    ]
    if (market_monitoring == null) {
        req.flash('error', "Enter all Fields");
        return false;
    }

    // "INSERT INTO feedbacks (name, subject, email, message ) VALUES ( ?, ?, ?, ?)"
    connection.query("INSERT INTO products (product_name, price, quantity, date, market_name) VALUES ( ?, ?, ?, ?, ?)", market_monitoring_2, function (error, results, fields) {
        if (error) {
            console.log("error occurred", error);
            // you're already setting the res header here. no need setting it again in app.js: res.render('index', {message: 'Data Saved Successfully'});
            /* res.send({
                "code": 400,
                "failed": "error occurred"
            }); */
            throw error;
        } else {
            console.log('The solution is ', results);
            /* res.send({
                "code": 200,
                "success": "Registered Successfully"
            }); */
        }
    })
}

module.exports = register_product;