/* -- 106 - Regex - Negação -- */

var texto = "Lorem ipsum fusce de nostra Senectus pellentesque 2018 - etiam quam, Fringilla de platea sed turpis de arcu congue vivamus 1984 e 2018.";
//negação [^abc]
console.log(texto.match(/[^aeiou]/g));
// (93) ["L", "r", "m", " ", "p", "s", "m", " ", "f", "s", "c", " ", "d", " ", "n", "s", "t", "r", " ", "S", "n", "c", "t", "s", " ", "p", "l", "l", "n", "t", "s", "q", " ", "2", "0", "1", "8", " ", "-", " ", "t", "m", " ", "q", "m", ",", " ", "F", "r", "n", "g", "l", "l", " ", "d", " ", "p", "l", "t", " ", "s", "d", " ", "t", "r", "p", "s", " ", "d", " ", "r", "c", " ", "c", "n", "g", " ", "v", "v", "m", "s", " ", "1", "9", "8", "4", " ", " ", "2", "0", "1", "8", "."]


// Qualquer caractere, menos os alfanuméricos \W (upcase)
console.log(texto.match(/\W/g));
// (25) [" ", " ", " ", " ", " ", " ", " ", " ", "-", " ", " ", ",", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "."]

// qualquer caractere menos os digitos \D  (upcase)
console.log(texto.match(/\D/g)); // (123) ["L", "o", "r", "e", "m", " ", .....

// Qualquer caractere, menos espeços em branco \S (upcase)
console.log(texto.match(/\S/g)); // (113) ["L", "o", "r", "e", "m", "i", "p", "s", "u", "m", "f", "u", "s", "c", "e", "d", "e", "n", "o", "s", "t", "r", "a", "S", "e", "n", "e", "c", "t", "u", "s", "p", "e", "l", "l", "e", "n", "t", "e", "s", "q", "u", "e", "2", "0", "1", "8", "-", "e", "t", "i", "a", "m", "q", "u", "a", "m", ",", "F", "r", "i", "n", "g", "i", "l", "l", "a", "d", "e", "p", "l", "a", "t", "e", "a", "s", "e", "d", "t", "u"

var texto2 = "Lorem 123456789 ipsum fusce de nostra Senectus pellentesque 2018 - etiam quam, Fringilla de platea sed turpis de arcu congue vivamus 1984 e 2018.";
/* Repetidores */
// {n, m}
// intervalo - item anterior ao menos n vezes, e no máximo m vezes
console.log(texto.match(/[\d{2,4}]/g)); // (13) ["2", "0", "1", "8", ",", "1", "9", "8", "4", "2", "0", "1", "8"]



