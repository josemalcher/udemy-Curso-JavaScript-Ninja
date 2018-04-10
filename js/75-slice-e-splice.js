/* -- 75 - slice e splice -- */

/* slice */

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.slice(3,5)); // (2) [4, 5]
console.log(arr.slice());   // (7) [1, 2, 3, 4, 5, 6, 7]
console.log(arr.slice(0)); // (7) [1, 2, 3, 4, 5, 6, 7]
console.log(arr.slice(0,2)); // (2) [1, 2]
console.log(arr.slice(1,3)); // (2) [2, 3]
console.log(arr.slice(-2)); // (2) [6, 7]

/* splice */

console.log(arr);           // (7) [1, 2, 3, 4, 5, 6, 7]
console.log(arr.splice(3)); // (4) [4, 5, 6, 7] // removeu
console.log(arr);           // (3) [1, 2, 3]

console.log(arr.splice(1, 0, 'add')); // []  // não removeu nada
console.log(arr); // (4) [1, "add", 2, 3]  //adicionou

console.log(arr.splice(2, 0, 'a','b','c'));// []
console.log(arr); // (7) [1, "add", "a", "b", "c", 2, 3]

console.log(arr.splice(1, 4, 2, 3, 4)); // (4) ["add", "a", "b", "c"]
console.log(arr); // (6) [1, 2, 3, 4, 2, 3]
