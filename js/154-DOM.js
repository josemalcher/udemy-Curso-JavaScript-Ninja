/* 154 - DOM */

(function () {
    'use strict';

    /* Métodos */

    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $h1 = $mainHeader.firstElementChild;
    var $mainFooter = document.querySelector('.main-footer');
    var $clonemainHeader = $mainHeader.cloneNode(true);

    // .removeChild(child)
    //$mainHeader.removeChild($h1);

    // .replaceChild(new, old)
    //$main.replaceChild($clonemainHeader, $mainFooter);

    // document.createTextNode(text)
    var newTextNode = document.createTextNode('createNodeText-Metodo');
    //$main.appendChild(newTextNode);

    // document.createElement(tagName)
    var $newP = document.createElement('p');
    $newP.appendChild(newTextNode);
    $main.appendChild($newP);



})();




