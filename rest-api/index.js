'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<h1>Home</h1>');
});

app.get('/user', function (req, res) {
   res.send('User');
});

app.listen(3000);