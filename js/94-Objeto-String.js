/* -- 94 - Objeto String -- */

/* length */
var jose = new String('José Malcher');
console.log(jose); // String {"José Malcher"}
console.log(jose.length); // 12
console.log('Texto qualquer'.length); // 14

/* charAt */
console.log(jose.charAt(0)); // j
console.log(jose.charAt(1)); // o
console.log(jose.charAt(2)); // s

console.log(jose[0]); // j
console.log(jose[1]); // o

/* concat */
console.log(jose.concat(' Malcher', ' Jr')); // José Malcher Malcher Jr

/* indexOf */
console.log(jose.indexOf('s')); // 2 (index)

/* lasIndexOf*/
console.log(jose.indexOf('s')); // 2 (index) busca de tras para frente

/* replace */
console.log(jose.replace('sé', 'zé')); // Jozé Malcher // faz apenas na primeira palavra localizada

/* slice */
console.log(jose.slice(2)); // sé Malcher

/* split */
console.log(jose.split(' ')); // (2) ["José", "Malcher"]  // quebra de acordo com o parâmetro

/* join */
// junta
console.log(jose.split(' ').join('-')); // José-Malcher




