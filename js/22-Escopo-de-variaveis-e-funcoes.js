/* -- 22 - Escopo de variáveis e funções -- */

var myVar = 1;
function myFunction() {
    return myVar;
}
console.log(myFunction()); // 1

function outherFunction() {
    var outherVar = 20;
    return outherVar;
}

console.log(outherFunction()); // 20
//console.log(outherVar); // Uncaught ReferenceError: outherVar is not defined

// importante: sempre usar "var" para criar variáveis

//se não usar 'var' a variável ficará em modo global

function variavelGlobal() {
    varGlobal = 'variável global';
    return varGlobal;
}
variavelGlobal(); // inicializou a variável
console.log(varGlobal); // variável global

