/* -- 51 - Hoisting -- */

function myfunction() {
    var num1 = 1;
    var num2 = 2;

    return soma();
    var soma = function soma() {
        return num1 + num2;
    }
    /*function soma() { // "elevação para o topo"
        return num1 + num2;
    }*/
}

//console.log(myfunction()); // TypeError: soma is not a function

/* ---------------------- */

function variaveisHoisting() {
    console.log("Antes de declarar", numero1); // Antesde de declarar undefined
    var numero1 = 100;
    console.log("DEPOIS de declarar", numero1);// DEPOIS de declarar 100
}

console.log(variaveisHoisting()); // undefined (função não tem retorno)