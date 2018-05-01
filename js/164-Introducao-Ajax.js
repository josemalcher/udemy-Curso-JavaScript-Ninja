(function () {
    'use strict';

    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'data/data.json');
    ajax.send();

    console.log('carregando...');
    ajax.addEventListener('readystatechange', function () {
        if (isRquestOK()) {
            var data = JSON.parse(ajax.responseText);
            console.log('Requisição OK', data.message);
        } /*else {
            console.log('Deu problema ou ainda carregando....');
        }*/
    }, false);

    function isRquestOK() {
        return ajax.readyState === 4 && ajax.status === 200;
    }
})();