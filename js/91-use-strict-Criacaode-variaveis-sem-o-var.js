/* -- 91 - use strict - Criação de variáveis sem o "var" -- */

(function () {
    'use strict';
    myName = 'José Malcher Jr.'; // Uncaught ReferenceError: myName is not defined (ACUSA ERRO)
    console.log(myName);
})();
console.log(myName);