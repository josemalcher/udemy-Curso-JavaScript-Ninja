/* 128 - Propriedades e métodos de funções */

(function () {
    'use strict';

    function minhaFuncao(a, b, c, d, e, f) {
        return 'oi';
    };

    var arr = [1, 2, 3, 4, 5];

    console.log(minhaFuncao.length); //6
    console.log(arr.length); // 5
    console.log(arr.toString()); // 1,2,3,4,5

    console.log(minhaFuncao.toString()); //  function minhaFuncao(a,b,c,d,e,f) { return 'oi'; }
    console.log(minhaFuncao.call()); // oi

    console.log(minhaFuncao.call()); // oi

    //Exemplo de uso do call()
    function funcaoCall(a, b, c, d) {
        console.log(this.lastname);
    }
    var obj = {lastname:'Malcher jr'};
    var obj2 = {lastname:'M. jr'};

    funcaoCall.call(obj); // Malcher jr
    funcaoCall.call(obj2); // M. jr

})();


