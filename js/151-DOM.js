/* 151 - DOM */

(function () {
    'use strict';

    var $main = document.querySelector('.main');
    console.log($main.nodeType); // 1
    console.log($main.firstChild.nodeType); // 3
//  9 = Document
//  1 = Element
//  3 = Text
//  8 = Comments
// 22 = documentFragment

    var $main2 = document.querySelector('.main-content');

    // .nodeValue
    console.log($main2.firstChild.nodeValue); //    Texto 1
    console.log($main2.childNodes); //   NodeList(5) [text, comment, text, div.entry, text]

    console.log($main2.firstChild.nextSibling.nodeValue); // comentário
    console.log($main2.firstChild.nextSibling.nodeName); // #comment
    console.log($main2.nodeName); // SECTION

    // https://caniuse.com/

})();