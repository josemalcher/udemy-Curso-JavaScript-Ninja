/* -- 89 - Objeto arguments -- */

(function () {
    function myFunction(arg1,arg2) {
        return arguments;
    }

    console.log(myFunction(1,2));
    // Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ] (sem parametros na função)
    // Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]



})();


