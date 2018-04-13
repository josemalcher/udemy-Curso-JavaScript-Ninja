/* -- 100. Regex - parte 2 -- */

var texto = "Lorem ipsum fusce nostra senectus pellentesque etiam quam, fringilla platea sed turpis arcu congue vivamus 1984 e 2018.";

console.log(texto.match(/\w/g)); // (91) ["L", "o", "r", "e", "m", "i", "p", "s", "u", "m", "f", "u", "s", "c", "e", "n", "o", "s", "t", "r", "a", "s", "e", "n", "e", "c", "t", "u", "s", "p", "e", "l", "l", "e", "n", "t", "e", "s", "q", "u", "e", "e", "t", "i", "a", "m", "q", "u", "a", "m", "f", "r", "i", "n", "g", "i", "l", "l", "a", "p", "l", "a", "t", "e", "a", "s", "e", "d", "t", "u", "r", "p", "i", "s", "a", "r", "c", "u", "c", "o", "n", "g", "u", "e", "v", "i", "v", "a", "m", "u", "s"]
//Retornou um array com todos os CARACTERES

console.log(texto.match(/1984/)); // ["1984", index: 107, input: "Lorem ipsum fusce nostra senectus pellentesque eti…illa platea sed turpis arcu congue vivamus 1984 .", groups: undefined]

/* \d digitos */
console.log(texto.match(/\d/g)); // (4) ["1", "9", "8", "4"]
console.log(texto.match(/\d\d/g)); // (2) ["19", "84"]
console.log(texto.match(/\d\d\d\d/g)); // ["1984"]

/* Classes de Caracteres - LISTAS */

console.log(texto.match(/da|de/g)); // null
console.log(texto.match(/on|an/g)); // ["on"]

console.log(texto.match(/[123]/g)); // [] = classe de caracteres // ["1"]
console.log(texto.match(/[se]/g)); // (21) ["e", "s", "s", "e", "s", "s", "e", "e", "s", "e", "e", "e", "s", "e", "e", "e", "s", "e", "s", "e", "s"]

console.log(texto.match(/(1984)|(2018)/g)); // (2) ["1984", "2018"]
console.log(texto.match(/[13456789]/g)); // (6) ["1", "9", "8", "4", "1", "8"] todos os digitos
console.log(texto.match(/[0-9]/g)); // (8) ["1", "9", "8", "4", "2", "0", "1", "8"]
console.log(texto.match(/[A-Z]/g)); // ["L"]

console.log(texto.match(/[A-Za-z0-9]/g)); // (100) ["L", "o", "r", "e", "m", "i", "p", "s", "u", "m", "f", "u", "s", "c", "e", "n", "o", "s", "t", "r", "a", "s", "e", "n", "e", "c", "t", "u", "s", "p", "e", "l", "l", "e", "n", "t", "e", "s", "q", "u", "e", "e", "t", "i", "a", "m", "q", "u", "a", "m", "f", "r", "i", "n", "g", "i", "l", "l", "a", "p", "l", "a", "t", "e", "a", "s", "e", "d", "t", "u", "r", "p", "i", "s", "a", "r", "c", "u", "c", "o", "n", "g", "u", "e", "v", "i", "v", "a", "m", "u", "s", "1", "9", "8", "4", "e", "2", "0", "1", "8"]






