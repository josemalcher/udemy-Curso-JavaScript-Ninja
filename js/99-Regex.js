/* -- 99 - Regex -- */

var regex = /m/;
console.log(regex);

var texto = "Lorem ipsum fusce nostra senectus pellentesque etiam quam, fringilla platea sed turpis arcu congue vivamus .";

console.log(texto.match(/m/)); // ['m']
console.log(texto.match(/o/g)); // g = global | (3) ["o", "o", "o"]
