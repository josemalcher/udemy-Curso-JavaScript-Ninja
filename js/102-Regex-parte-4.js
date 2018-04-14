/* -- 102 - Regex - parte 4 -- */

var texto = "Lorem ipsum fusce de nostra Senectus pellentesque 2018 - etiam quam, Fringilla de platea sed turpis de arcu congue vivamus 1984 e 2018.";

// Espaço em branco \s
console.log(texto.match(/\s/g)); // Array(21)

// quebra de linha \n
console.log(texto.match(/\n/g)); // null

// tabulação \t
console.log(texto.match(/\t/g)); // null

// qualquer caracter exceto quebra de linha
console.log(texto.match(/./g)); // (130) ["L", "o", "r", "e", "m", " ", "i", "p", "s", "u", "m".......

// repetidores
console.log(texto.match(/...../));      //["Lorem", index: 0, input: "Lorem ipsum fusce de nostra Senectus pellentesque …ea sed turpis de arcu congue vivamus 1984 e 2018.", groups: undefined]
console.log(texto.match(/\w\w\w\w\w/)); //["Lorem", index: 0, input: "Lorem ipsum fusce de nostra Senectus pellentesque …ea sed turpis de arcu congue vivamus 1984 e 2018.", groups: undefined]

console.log(texto.match(/\d\d\d\d/)); // ["1984",...

console.log(texto.match(/\d\d\d\d\s-\s/)); // ["2018 - "


