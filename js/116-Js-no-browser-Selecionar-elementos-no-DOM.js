/* -- 116 - Js no browser - Selecionar elementos no DOM -- */

(function (win,doc) {
    'use strict';

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

    /* -- 117 - Js no browser Parte 2 - Selecionar elementos no DOM -- */

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


})(window, document);





