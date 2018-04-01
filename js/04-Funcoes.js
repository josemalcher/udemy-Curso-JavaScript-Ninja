/* -- Função -- */

//ex:
function nome() {
}
nome(); //invocando a função

var x = 1;
function soma() {
    x = x + 1;
}

soma();
console.log(x); // 2
soma();
console.log(x); // 3
soma();
console.log(x); // 4

soma; // retorna a função, não há execução da mesma!
console.log(x); // 4

// Escopo
function qualquer() {
    var jose = 'jose';
}
//console.log(jose); //ReferenceError: jose is not defined

function qualquer2() {
    var josemalcher = 'josemalcher';
    return josemalcher;
}
console.log(qualquer2()); // josemalcher

var y = 4;
function cinco() {
    return 5;
}

console.log(cinco()); // 5
console.log(cinco()+y); // 9

// Parâmetros
function somaParametro(x, y) {
    return x + y;
}
console.log(somaParametro(5,5)); // 10
console.log(somaParametro(50,5)); // 55
