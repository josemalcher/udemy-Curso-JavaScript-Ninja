'use strict';

var express = require('express');
var cors = require('cors');
var app = express();

var users = {
    jose:{nome: 'Jose Malcher',
    idade: 33
    },
    luci:{nome:'Luciana Barbosa',
    idade:32}
};

app.use(cors());

app.get('/', function (req, res) {
    res.send('<h1>Home</h1>');
});

app.get('/user', function (req, res) {
   res.send('User');
});

app.get('/user/:username', function (req, res) {
    var username = req.params.username;
    if(users[username]){
        return res.json(users[username]);
    }
    //res.json({error:'Usuário nâo encontrado'});
    res.status(404).json({error:'Usuário nâo encontrado'});

});

app.listen(3000);