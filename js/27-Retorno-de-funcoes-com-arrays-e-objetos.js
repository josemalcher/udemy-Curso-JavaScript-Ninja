/* -- 27 - Retorno de funções com arrays e objetos -- */
function myFunction1() {
    return 1;
}
console.log(myFunction1()); // 1

function myFunction2() {
    return null;
}
console.log(myFunction2()); // null
function myFunction3() {
}
console.log(myFunction3()); // undefined

// (...) tipos primitivos de retorno!

/* arrays */
function myFunction4() {
    return [1, 2, 3, 4, 5];
}
console.log(myFunction4()); // (5) [1, 2, 3, 4, 5]
console.log(myFunction4()[0]); // 1
console.log(myFunction4()[1]); // 2
console.log(myFunction4()[10]); // undefined

/* objetos */
function myFunction5() {
    return {prop1: 1,
            prop2: 'Jose',
            prop3: function () {
                return 'PROP 3';
            }} ;
}
console.log(myFunction5()); // {prop1: 1, prop2: "Jose", prop3: ƒ}
console.log(myFunction5().prop2); // Jose

var valor = myFunction5();
console.log(valor); //  {prop1: 1, prop2: "Jose", prop3: ƒ}
console.log(valor.prop2); //  Jose
console.log(valor.prop3); //   {return 'PROP 3';} //function
console.log(valor.prop3()); //  PROP 3 // valor
