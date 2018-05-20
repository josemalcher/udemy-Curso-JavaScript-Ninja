(function () {
    'use strict';
    //front end

    //var ajax = new XMLHttpRequest();
    //ajax.open('GET', 'http://localhost:3000/user/jose', true); // assincrono
    //ajax.open('GET', 'http://localhost:3000/user/jose', false); //sincrono
    //ajax.send();

    //console.log(ajax.responseText, ajax.status);
//186-Ajax.js:6 [Deprecation] Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.


    /*ajax.addEventListener('readystatechange', function (e) {
        //if(ajax.readyState ===4 && ajax.status === 200){
        if (ajax.readyState === 4) {
            console.log(ajax.responseText, ajax.status);
        }
    }, false);*/
  /*  ajax.onreadystatechange = function (e) {
        if (ajax.readyState === 2) {
            console.log('Headers OK!');
            ajax.abort(); // finaliza a requisição
        }
        if(ajax.readyState === 4){
            console.log(ajax.responseText, ajax.status);
        }
    };*/

  //POST
    var ajax = new XMLHttpRequest();
    ajax.open('POST','http://localhost:3000/user');
    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //ajax.send('user=Mario&username=MarioRoberto&age=40');
    ajax.send('user=fernando&username=FernandoMoraeso&age=60');

    console.log('Cadastrando usuário');

    ajax.onreadystatechange = function () {
        if(ajax.readyState === 4){
            console.log('usuário cadastrado!', ajax.responseText);
        }
    };

    var get = new XMLHttpRequest();
    get.open('GET', 'http://localhost:3000/user/FernandoMoraeso');
    get.send();

    get.onreadystatechange = function () {
        if(get.readyState === 4){
            //console.log(get.responseText);
            console.log(JSON.parse(get.responseText));
        }
    }






})();