(function () {
    'use strict';

    var $div = document.querySelector('[data-js="main"]');
    //console.log(Object.prototype.toString.call($div)); // [object HTMLDivElement]
    console.log($div.innerHTML);
    $div.innerHTML = '<h2>Título 2 JS</h2>'; // (tela) Título 2 JS
    $div.innerHTML += '<h2>Título 3 JS</h2>';
    //$div.textContent = '<h2>Título 2 JS</h2>' // (tela) <h2>Título 2 JS</h2>

})();