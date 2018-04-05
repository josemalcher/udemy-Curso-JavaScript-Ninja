/* -- 58 - typeof -- */

/*
* typeof undefined; // "undefined"
* typeof function(){}; // "function"
* typeof true; // 'boolean'
* typeof 10; // 'number'
* typeof 'JS Ninja'/ // 'string'
*
* Qual quer outro objeto que não senha function => 'object'
*
*  typeof {} // 'object'
*  typeof []; // object
*  typeof null, // 'object'
*
*  Usar para valores primitivos
* */

console.log(typeof 10); // number
console.log(typeof null); // object
console.log(typeof function(){}); // function

function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(10, 20));      // 30
console.log(soma('js', 20)); // js20
console.log(soma({}, [])); // [object Object]

function subtracao(num1, num2) {
    return num1 - num2;
}
console.log(subtracao(10, 20));      // -10
console.log(subtracao('js', 20)); // NaN
console.log(subtracao({}, [])); // NaN

function subtracao(num1, num2) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 - num2;
    }
    return 'entre com dois numeros';
}
console.log(subtracao(10, 20));      // -10
console.log(subtracao('js', 20)); // entre com dois numeros
console.log(subtracao({}, [])); // entre com dois numeros

/* verificar se é null*/
function  exSeNull(num1,num2) {
    if (num1 === null) {
        return 'não entre com valores nulos';
    }
    return num1 - num2;
}
console.log(exSeNull(null, 20)); // não entre com valores nulos
