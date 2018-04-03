/* --  28 - Parâmetros de Funções com arrays e objetos -- */

var arrayVar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function funcao1(arg) {
    return arg;
}

console.log(funcao1()); // undefined
console.log(funcao1(arrayVar)); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function funcao2(arg) {
    return arg[2];
}

console.log(funcao2(arrayVar)); // 3

// COM OBJETO

var objJose = {
        prop1: 1,
        prop2:'Jose',
        curso: 'JavaScrip NInja!'
        };
function objeto(arg) {
    return arg;
}
console.log(objeto(objJose)); // {prop1: 1, prop2: "Jose"}
console.log(objeto(objJose).prop2); // Jose

function retornaCurso(arg) {
    return arg.curso;
}
console.log(retornaCurso(objJose)); //JavaScrip NInja!