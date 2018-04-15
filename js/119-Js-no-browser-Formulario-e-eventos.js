/* -- 119 - Js no browser - Formulário e eventos -- */

(function (win, doc) {
    'use strict';

    var $inputUserName = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');
    console.log($inputUserName.value, $inputPassword.value); // josemalcher 123456

    $inputUserName.value = "José Malcher Jr.";
    $inputPassword.value = "!@#!@#!@#!@#";

    console.log($inputUserName.value, $inputPassword.value); // José Malcher Jr. !@#!@#!@#!@#

    // Introdução a Eventos
    $button.addEventListener('click', function (event) {
        event.preventDefault(); // remove comportamento padrão

        console.log('click no botão'); // click no botão
    }, false);

    $inputPassword.addEventListener('click', function (event) {
        alert('clicou em password... regras: ta lta ');

    },false);


})(window, document);



