/* -- 93 - O operador delete, objetos e funções -- */

(function () {
    'use strict';
    var myVar = 2;
    var obj = {
        prop1: 'Prop1',
        prop2: 'Prop2',
        prop3: 'Prop3', // (com 'use strict') não é permitido propriedades com o mesmo nome
        prop3: 'Prop3'
    };
    console.log(obj); // {prop1: "Prop1", prop2: "Prop2", prop3: "Prop3"}
    //console.log(delete myVar); // false (sem 'use strict')
    //console.log(delete myVar); // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode. (com 'use strict')
    console.log(delete obj.prop2); // true
    console.log(obj); //{prop1: "Prop1", prop3: "Prop3"}
    //console.log(delete obj); // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode. (com 'use strict')

    /* funções e argumentos sempre deve ser diferentes */

    function fun(a,a,) { // // (com 'use strict') não é permitido ter nomes de parametros duplicados
        console.log(a,b)
    }

})();


