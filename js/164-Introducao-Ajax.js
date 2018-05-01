(function () {
    'use strict';

    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'data/data.json');
    ajax.send();

    console.log('carregando...');

    var response = '';

    ajax.addEventListener('readystatechange', function () {
        if (isRequestOK()) {
            //console.log('Requisição OK | ', JSON.parse(ajax.responseText).message);
            try{
                response = JSON.parse(ajax.responseText);
                //throw  new Error("Mensagem de erro!!");
            }catch (e) {
                //console.log(e);
                response = ajax.responseText;
            }
            console.log(response); // {message: "OK jSon | Requisição realizada com sucesso!"}
        }

    }, false);

    function isRequestOK() {
        return ajax.readyState === 4 && ajax.status === 200;
    }
})();