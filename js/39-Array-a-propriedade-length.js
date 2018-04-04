/* -- 39 - Array - a propriedade length -- */

var arr = ['jose', 'Malcher', null, true, {bola:'azul'}, function(){}];

console.log(arr.length); // 6

console.log(arr[1]); // Malcher
console.log(arr[3]); // true

var qtd = arr.length;
console.log(qtd); // 6

while (qtd > 0) {
    console.log(arr[--qtd]);
}
/*
undefined
 ƒ (){}
{bola: "azul"}
 true
null
Malcher
jose
*/