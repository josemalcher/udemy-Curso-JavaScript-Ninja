/* 131 - Array-like e editorconfig */

(function () {
    'use strict';

    /*function minhaFuncao() {
        Array.prototype.forEach.call(arguments, function (item, index) {
            console.log(item);
        });
    }
        minhaFuncao(1, 2, 3, 4, 5); // 1 2 3 4 5
    */
    function minhaFuncao() {
        var result = Array.prototype.reduce.call(arguments, function (acumulado, atual,index) {
            return acumulado + atual;
        });
        console.log(result);
    }
    minhaFuncao(1, 2, 3, 4, 5); // 15

})();



