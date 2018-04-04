/* -- 50 - Escopo de funções -- */

function myfunction() {
    var num1 = 1;
    function soma() {
        return num1 + num2;
    }
    var num2 = 2;
    return soma();
}

console.log(myfunction()); // 3
//console.log(soma()); // ReferenceError: soma is not defined

