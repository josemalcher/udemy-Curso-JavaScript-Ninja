/* -- 116 - Js no browser - Selecionar elementos no DOM -- */

(function (win) {
    'use strict';
    //console.log(win); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
    function Funcao1(number) {
        return number * 2;
    }
    console.log(Funcao1(10)); // 20

    if(win === window)
        console.log('win é igual a window');// win é igual a window

    window.alert('alert!');
    alert('alert!');
    //prompt('Pergunte...');

    if(prompt('Pergunte...'))
        console.log('resposta ok'); // resposta ok
    else
        console.log('resposta não ok');
    console.log('sempre aqui!'); // sempre aqui!



})(window);





