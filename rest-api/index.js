'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

/*var users = {
    jose:{username: 'Jose Malcher',
    age: 33
    },
    luci:{username:'Luciana Barbosa',
    age:32}
};*/
var users = [{
    username: 'josemalcher',
    name: 'José Malcher',
    age: 33
},
    {
        username: 'luciana',
        name: 'Luciana Barbosa',
        age: 31
    }];

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/', function (req, res) {
    res.send('<h1>Home</h1>');
});

app.get('/user', function (req, res) {
    res.send('User');
});

app.get('/user/:username', function (req, res) {
    var username = req.params.username;
    var hasUser = users.some(function (user) {
        return user.username === username;
    });
    if (hasUser) {
        return res.json(users.filter(function (user) {
            return user.username === username;
        })[0]); //retorna somente o objeto e não o array
    }
    //res.json({error:'Usuário nâo encontrado'});
    res.status(404).json({error: 'Usuário nâo encontrado'});

});

app.post('/user', function (req, res) {
    var username = req.body.username;
    var age = req.body.age;
    var user = req.body.user;

    //veririficação
    var hasUser = users.some(function (user) {
        return user.username === username;
    });
    if (!hasUser) {
        users.push({
            username: username,
            age: age,
            user: user
        });
    }
    res.json(users);
});

app.listen(3000);