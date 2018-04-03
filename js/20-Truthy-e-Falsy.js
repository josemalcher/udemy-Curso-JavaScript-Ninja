/* -- 20 - Truthy e Falsy -- */

var teste;

if (1) {
    teste = true;
    console.log(teste); //true
} else {
    teste = false;
    console.log(teste);
}

if (0) {
    teste = true;
    console.log(teste);
} else {
    teste = false;
    console.log(teste); //false
}

// FALSY
// - undefined 0
// null  -0
// NaN  " " (string vazia)
// false

if ('') {
    teste = true;
    console.log(teste);
} else {
    teste = false;
    console.log(teste); //false
}

if ('0') {
    teste = true;
    console.log(teste); //true
} else {
    teste = false;
    console.log(teste);
}

if (null) {
    teste = true;
    console.log(teste);
} else {
    teste = false;
    console.log(teste); //false
}
if ({}) { // e tbm um array []
    teste = true;
    console.log(teste); //true
} else {
    teste = false;
    console.log(teste);
}

// !!

console.log(true); //true
console.log(!true); // false
console.log(!false); // true
console.log(!!false); // false