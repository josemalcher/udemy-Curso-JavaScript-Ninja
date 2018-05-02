(function () {
    'use strict';
 /*   /!*
    var scope = 'global scope';

    function checkScope() {
        var scope = 'local scope';

        function func() {
            return scope;
        }

        return func;
    }
    console.log(checkScope()());
    *!/
    var counter = 0;
    var increment = (function () {
        var counter = 100;
        return (function () {
            var counter = 10;
            return function () {
                return counter++;
            };
        })();
    })();

    function outherFunction() {
        counter = 150;
    }

    outherFunction();

    console.log(increment());
    console.log(increment());
    console.log(increment());
    console.log(increment());
    /!*
        10
        11
        12
        13
    *!/
*/
        /* CSS */
    var $div = document.querySelector('div');
 /*  $div.style.width = '100px';
    $div.style.height = '100px';
    $div.style.background = 'red';*/
    //$div.style.display = 'none';
    //$div.setAttribute('style', 'width:100px; height:200px; background:blue');

    //console.log($div.classList);// DOMTokenList(3) ["container", "main", "div", value: "container main div"]

    //$div.classList.add('blue');// adicionar classe
    //console.log($div.classList.contains('blue')); // true
    $div.addEventListener('click', function () {
        this.classList.toggle('blue');
        //this.classList.remove('blue');
    }, false);



})();