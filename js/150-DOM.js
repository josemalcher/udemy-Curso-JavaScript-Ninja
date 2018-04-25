/* 150 - DOM */

// .parentNode

(function () {
    'use strict';

    var $main = document.querySelector('.main');
    console.log($main.parentNode); // .parentNode
    console.log($main.childNodes); // .childNodes // NodeList(7) [text, header.main-header, text, section.main-content, text, footer.main-footer, text]

    console.log($main.firstChild); // .firsChild // #text (quebra ou espaçamento)
    console.log($main.lastChild); // .lastChild // #text (quebra ou espaçamento)

    console.log($main.nextSibling); // .nextSibling // <script src="js/150-DOM.js"></script> (sem espaço)
    console.log($main.previousSibling); // .previousSibling // #text (sem os espaço, retorna null, não tem irmão)



})();

