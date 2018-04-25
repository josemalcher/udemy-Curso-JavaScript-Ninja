/* 152 - DOM */
(function () {
    'use strict';

    // children
    var $main = document.querySelector('.main');
    console.log($main.childNodes); // NodeList(7) [text, header.main-header, text, section.main-content, text, footer.main-footer, text]
    console.log($main.children); // HTMLCollection(3) [header.main-header, section.main-content, footer.main-footer]

    // .firstElementChild (pegar somente elementos)
    console.log($main.firstElementChild); // <header class="main-header"><h1 class="main-header__title">Titulo da página</h1></header>
    console.log($main.nextElementSibling); // <script src="js/152-DOM.js"></script>

    // .childElementCount
    console.log($main.childElementCount); // 3 (filhos)
    console.log($main.children.length); // 3 (filhos)

    /* Métodos */
    // .hasAttribute(name)
    console.log($main.hasAttribute('data-js')); // true
    console.log($main.hasAttribute('id')); // false

    // .hasAttributes()
    console.log($main.hasAttributes()); // true

})();

