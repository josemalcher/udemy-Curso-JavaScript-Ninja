/* -- 116 - Js no browser - Selecionar elementos no DOM -- */

(function (win,doc) {
    'use strict';
/*
    //console.log(win); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
    function Funcao1(number) {
        return number * 2;
    }

    console.log(Funcao1(10)); // 20

    if (win === window)
        console.log('win é igual a window');// win é igual a window

    window.alert('alert!');
    alert('alert!');
    //prompt('Pergunte...');

    if (prompt('Pergunte...'))
        console.log('resposta ok'); // resposta ok
    else
        console.log('resposta não ok');
    console.log('sempre aqui!'); // sempre aqui!

    /!* -- 117 - Js no browser Parte 2 - Selecionar elementos no DOM -- *!/

    var name = prompt('Qual seu nome');
    if (name) {
        console.log('Olá', name); // Olá Jose
    } else {
        console.log('Não respondeu!');
    }

    var del = confirm('Deseja apagar');
    if (del) {
        console.log('Excluído com sucesso', del); // Excluído com sucesso true
    }else{
        console.log('Ação cancelada!',del);
    }

    console.log(doc.getElementsByClassName('my-link')); // HTMLCollection(3) [a.my-link, a.my-link, a.my-link]
    console.log(doc.getElementsByTagName('a')); // HTMLCollection(3) [a.my-link, a.my-link, a.my-link]
    */


    /* -- 118 - Js no browser Parte 3 - Selecionar elementos no DOM -- */

    //var $input = doc.getElementsByName('username');  // [input]

    var $inputs = doc.getElementsByTagName('input');
    //  HTMLCollection(2) [input#username, input, username: input#username, passwird: input]
    console.log($inputs);
    console.log($inputs.length); // 2

    // Seleção estaticos
    // querySelector() - pega o primeiro que encontrar
    // querySelectorAll() - pega todas as tags

    //$inputs.document.querySelectorAll('input'); // sempre eles para selecionar elementos!
    $inputs = document.querySelectorAll('[type="text"]'); // NodeList(2) [input#username, input#username2]
    console.log($inputs);

    //pegar pela class
    var $inputss = document.querySelectorAll('.input');
    console.log($inputss); // NodeList(2) [input#username.input, input#username2.input]
    var $inputss = document.querySelectorAll('#username');
    console.log($inputss); // NodeList [input#username.input]



})(window, document);