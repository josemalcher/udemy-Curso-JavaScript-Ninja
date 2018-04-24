/* 148 - Eventos */

(function () {
    'use strict'
    /*
    var $a = document.querySelector('[data-js="link"]');

    document.querySelector('[data-js="div"]').addEventListener('click', function (event) {
        alert('clicou na div');
    },false);
    $a.addEventListener('click', function (event) {
        event.preventDefault();
        alert('clicou no a');
    },false); // false = forma como o evento será capturado. Propaga os eventos a partir do filho->pai
    */

    // função generica:
    function on(element, event, callback) {
        document.querySelector(element).addEventListener(event, callback, false);
        // false = forma como o evento será capturado. Propaga os eventos a partir do filho->pai
        // quando true o evento começa pelo pai até chegar no alvo/filho
    }
    on('[data-js="link"]', 'click', function (event) {
        event.preventDefault();
        alert('Clicou no a');
    });
    on('[data-js="div"]','click', function () {
        alert("Clicou na DIV");
    });
    on('[data-js="span"]','click', function (){
        alert('Clicou no SPAN');
    })

})();


