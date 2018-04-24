/* 149 - Mais eventos por elementos */


(function () {
    'use strict'

    function on(element, event, callback) {
        document.querySelector(element).addEventListener(event, callback, false);
    }

    function off(element, event, callback) {
        document.querySelector(element).removeEventListener(event, callback, false);
    }
    /*
    function handleClick(event) {
        event.preventDefault();
        alert('Clicou no a');
    }

    on('[data-js="link"]', 'click', handleClick);
    off('[data-js="link"]', 'click', handleClick); //removendo

    on('[data-js="link"]', 'click', function (event) {
        event.preventDefault();
        alert('Novo evento de click no a');
    });
    */
    on('[data-js="input"]', 'keydown', function (event) {
        console.log(this.value);
    });
    on('[data-js="select"]', 'change', function () {
        document.querySelector('[data-js="input"]').value = this.value;
    });




})();


