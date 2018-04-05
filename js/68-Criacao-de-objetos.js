/* -- 68 - Criação de objetos -- */

// Mutáveis e Manipulados por referência

var obj = {propriedade1: 'prop1', propriedade2: 'prop2'};
console.log(obj); // {propriedade1: "prop1", propriedade2: "prop2"}
var obj2 = {propriedade1: 'prop1', propriedade2: 'prop2'};
console.log(obj2); // {propriedade1: "prop1", propriedade2: "prop2"}

obj.propriedade1 = 'Propriedade 1';
console.log(obj); // {propriedade1: "Propriedade 1", propriedade2: "prop2"}

delete obj.propriedade1;
console.log(obj); // {propriedade2: "prop2"}

obj.propriedade1 = 'PROPRIEDADE 1';
console.log(obj); // {propriedade2: "prop2", propriedade1: "PROPRIEDADE 1"}


console.log(obj === obj2); // false

var objCopy = obj2;
objCopy.propriedade2 = "AJUSTADO PELA REFerência objCopy";
console.log(objCopy); // {propriedade1: "prop1", propriedade2: "AJUSTADO PELO objCopy"}
console.log(obj2);    // {propriedade1: "prop1", propriedade2: "AJUSTADO PELO objCopy"}

console.log(obj2 === objCopy); // true


/* Criação de objetos*/
// Literias;
// Como contrutor (new)
// com Object.create()

// object.prototype (objetos herdão dele)


