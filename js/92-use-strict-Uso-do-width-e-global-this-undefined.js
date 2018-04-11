/* -- 92 - use strict - Uso do width e global this === undefined -- */

(function () {
    'use strict';
    var obj = {
        prop1 : {
            prop2 : {
                prop3:{
                    prop31: 'Prop31',
                    prop32: 'Prop32',
                    prop33: 'Prop33'
                }
            }
        }
    };

    console.log(obj.prop1.prop2.prop3.prop31);
    console.log(obj.prop1.prop2.prop3.prop32);
    console.log(obj.prop1.prop2.prop3.prop33);

   /* with (obj.prop1.prop2.prop3){ // Uncaught SyntaxError: Strict mode code may not include a with statement
        console.log(prop31);      // Não é possível usar with pois pode causar problemas com nomes de alguma variável
        console.log(prop32);
    }*/

    /*
    *    No escopo global
    *   this === undefined
    */

    function Person(nome, ultimoNome, idade) {
        this.nome = nome;
        this.ultimonome = ultimoNome;
        this.age = idade;
    }

    //console.log(new Person('Jose', 'Malcher Jr.', 30)); // Person {nome: "Jose", ultimonome: "Malcher Jr.", age: 30}

    console.log(Person('Jose', 'Malcher Jr.', 30)); // Uncaught TypeError: Cannot set property 'nome' of undefined

})();

//console.log(nome, ultimoNome, idade); // sem o uso do use stric, poderia acessar as variáveis fora