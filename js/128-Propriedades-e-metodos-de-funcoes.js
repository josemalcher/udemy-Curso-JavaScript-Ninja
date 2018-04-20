/* 128 - Propriedades e métodos de funções */

(function () {
    'use strict';

    function minhaFuncao(a, b, c, d, e, f) {
        return 'oi';
    }

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

    // 128 - Propriedades e métodos de funções - Parte 2

    function funcaoCao2(a, b, c) {
        console.log(this.lastname,a,b,c);
    }
    var obj3 = {lastname:'Malcher jr'};
    funcaoCao2.call(obj3,'a','b','c'); // Malcher jr a b c
    funcaoCao2.call(funcaoCao2,'a','b','c'); // undefined "a" "b" "c"

    var arg = [1, 2, 3]; // passar de forma dinâmica .apply()
    funcaoCao2.apply(funcaoCao2,arg); // undefined 1 2 3

})();


