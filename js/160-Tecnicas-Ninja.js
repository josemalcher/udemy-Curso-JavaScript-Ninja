(function () {
    'use strict';

    /* copiando Arrays */
    var arr = [1, 2, 3, 4, 5];
    /*var arr2 = arr.map(function (item) { // copiar um array
        return item;
    });*/
    var arr2 = arr.slice(0)
    console.log(arr, arr2, arr === arr2);

    // copiando elementos do html
    var $divs = document.querySelectorAll('div');
    var $divsCopy = Array.prototype.slice.call($divs);
    console.log($divs, $divsCopy, $divs === $divsCopy);

    /* Saber o tipo de dado real */
    var arr3 = [1, 2, 3];
    //console.log({prop1: 1, prop2: 2}.toString());  // [object Object]
    console.log(Object.prototype.toString.call(arr3));  // [object Array]

    function is(obj) {
        return Object.prototype.toString.call(obj);
    }

    function isArray(obj) {
        return is(obj) === '[object Array]';
    }

    function isObject(obj) {
        return is(obj) === '[object Object]';
    }

    function isFunction(obj) {
        return is(obj) === '[object Function]';
    }

    function isNumber(obj) {
        return is(obj) === '[object Number]';
    }

    console.log(isArray([1, 2, 3, 4])); // true
    console.log(isFunction(function () {
    })); // true

})();