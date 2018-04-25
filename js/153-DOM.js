/* 153 - DOM */

(function () {
    'use strict';

    /* Métodos */
    // . appendChild(child) - adiciona um filho
    var $main = document.querySelector('.main');

    var $mainContet = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    console.log($mainContet.appendChild($mainHeader)); //mover mainHeader para o final

    // .insetBefore(node, beforeWhon) - insere antes
    var $firstText = $mainContet.firstChild;
    $mainContet.insertBefore($mainHeader, $firstText);

    // .cloneNode(boolean)
    var $cloneMainHeader = $mainHeader.cloneNode(true); // copia com conteúdo  = true
    $mainContet.appendChild($cloneMainHeader);
    console.log(document.querySelectorAll('.main-header').length); // 2

    // .hasChildNodes() - vefica se o elemento tem algum node filho
    var $h1 = $mainHeader.firstElementChild;
    console.log($h1.hasChildNodes()); // true

})();




