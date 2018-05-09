(function () {
    'use strict';

    var months = ['janeiro', 'fevereiro', 'abril', 'maio', 'junho', 'julho','agosto']; // etc...

    var year = 2018;
    var month = 10; // inicia no 0
    //var month = months[3];
    var day = 7;
    var hour = 10;
    var min = 10;
    var sec = 0;
    var miliseconds = 0;

    var date = new Date(year, month, day, hour, min, sec, miliseconds);
    console.log(date);  // Wed Nov 07 2018 10:10:00 GMT-0300 (Hora Padrão de Buenos Aires)

})();