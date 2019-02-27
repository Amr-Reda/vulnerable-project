const express = require('express')
const app = express()
const port = 3000
var mysql      = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'my_database'
});

connection.connect();

app.post('/', function (req, res) {
    
    eval(req.body.num1+req.body.num2)
    
    connection.query(`SELECT * FROM users WHERE userName = '${req.body.userName}' AND password = '${req.body.password}'`, function (error, results, fields) {
        // if (error) throw error;
    });
    
    connection.end();

    res.end('hello world')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))