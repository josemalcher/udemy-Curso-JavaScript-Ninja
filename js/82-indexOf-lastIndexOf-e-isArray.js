/* -- 82 - indexOf(), lastIndexOf() e isArray() -- */

/* indexOf*/
var arr = [1,2,3,4,5,6,7,8,9,10];
var arr2 = ['j','o','s','e'];
console.log(arr.indexOf(5)); // 4 (local do index)
console.log(arr.indexOf(22)); // -1

console.log(arr2.indexOf('s')); // 2
console.log(arr2.indexOf('s',3)); // -1 // (valor, a partir de)

console.log(arr2.indexOf('s') > -1); // TRUE

/* lasindexOf*/
// procura do final para inicio
console.log(arr.lastIndexOf(10)); // 9
console.log(arr2.lastIndexOf('e'));// 3
console.log(arr.lastIndexOf(1)); // 0

/*isArray*/
console.log(Array.isArray(arr)); // true
console.log(Array.isArray({})); // false (objeto)

console.log(typeof arr); // object -  objetos e arrays Retorna objeto
console.log(Array.isArray([])); // true