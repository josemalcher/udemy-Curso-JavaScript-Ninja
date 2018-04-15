/* -- 124 - setTimeout -- */
(function (win, doc) {
    'use strict';

    console.log('INICIO');
        setTimeout(function () {
            console.log('Executou  o setTimeout');
        },3000); // 3 segundos
    console.log("FIM!");
    /*
        INICIO
        FIM!
        Executou  o setTimeout
    */

    // setInterval()
    console.log('INICIO');
    setInterval(function () {
        console.log('Executou  o setInterval'); // Executou  o setInterval fica executando no intervalo
    },30000); // 3 segundos
    console.log("FIM!");

    var counter = 0;
    function timer() {
        console.log('timer', counter++);
        if (counter > 10) {
            return;
        }
        setTimeout(timer, 1000);
    }
    timer();


})(window, document);
