(function () {
    'use strict';

    //console.log(Date.now());
    var start = Date.now();
    for(var i = 0 ; i < 100000 ; i++){
        var end = Date.now;
    }
    var end = Date.now();
    console.log(end - start);

    /*
    * date.getDate();
    * date.getDay(); // dia da semana
    * date.getFullYear(); // ano completo 2018
    * date.getYear(); // 0-99 | 100 = anos 2000
    * date.getHours; // horas
    *
    * ...
    * 1/1/1970 00:00:00 UTC
    * */

})();