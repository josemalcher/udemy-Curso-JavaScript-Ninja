(function () {
    'use strict';

    var ajax = new XMLHttpRequest();
    console.log(ajax.readyState);
    ajax.open('GET', 'js/164-Introducao-Ajax.js');
    console.log(ajax.readyState);
    ajax.send();

    // ajax.readyState
    // 0: Não enviado (open não chamado) | 1: conexão aberta | 2: Headers recebidos | 3: Carregando corpo do request | 4: concluido com sucessl

    // ajax.status - HTTP status
    // (200, 403, 404, 500, etc)
    ajax.addEventListener('readystatechange', function () {
        console.log('Terminou Requisição', ajax.readyState, ajax.status);
    })

/*
    0
    1
    Terminou Requisição 2 200
    Terminou Requisição 3 200
    Terminou Requisição 4 200
*/

})();