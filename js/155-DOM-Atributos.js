/* 155 - DOM - Atributos */

(function () {
    'use strict';

    var $main = document.querySelector('.main');
    console.log($main.id); // main-id
    console.log($main.className); // main

    // getter e setter
    console.log($main.id = 'main-id-arroz'); // main-id-arroz (settando o valor)

    console.log($main.getAttribute('class')); // main
    console.log($main.getAttribute('data-js')); // main

    console.log($main.setAttribute('data-js', 'main-data-js')); // mudar o valor do atributo

})();

