(function () {
    'use strict';

    var $form = document.querySelector('[data-js="form"]');
    //$form.insertAdjacentHTML('beforebegin', '<h1>Meu Forumulário!</h1>');
    //$form.insertAdjacentHTML('afterbegin', '<h1>Meu Forumulário!</h1>');
    $form.insertAdjacentHTML('beforeend', '<h1>Meu Forumulário!</h1>');
    console.log($form); // retorna propriedades do elemento!

})();