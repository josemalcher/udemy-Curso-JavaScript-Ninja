/* -- 69 - Criação de objetos - Object.create -- */

/* Criação de objetos*/
// Literias;
// Como contrutor (new)
// com Object.create()

// object.prototype (Herança!)

var obj = {x: 1, y: 2};
var obj2 = Object.create(obj); // cria um novo objeto! Não é uma referência

console.log(obj2);   // {}
console.log(obj2.x); // 1
console.log(obj2.y); // 2

var objVazio = Object.create({});
console.log(objVazio); // {}
console.log(objVazio.toString()); // [object Object]

for(var prop in obj){
    console.log(prop); // x y
}
for(var prop in obj2){
    console.log(prop); // x y
}
// Ambos tem as mesmas propriedades herdadas do objeto

// Verificar se a propriedade existe:
console.log(obj.hasOwnProperty('x')); //true é próprio do objeto
console.log(obj.hasOwnProperty('y')); // true
console.log(obj2.hasOwnProperty('x')); // false pq é herdado
console.log(obj2.hasOwnProperty('y')); // false




