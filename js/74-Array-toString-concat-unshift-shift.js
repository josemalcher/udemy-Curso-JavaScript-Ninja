/* -- 74 - Array - toString, concat, unshift, shift -- */

/* toString */
arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
arr.push(10);
console.log(arr); // (6) [1, 2, 3, 4, 5, 10]
console.log(arr.length); // 6
console.log(arr.toString()); // 1,2,3,4,5,10 // não altera
// no join é possível passar parâmetros para separar a string

/* contat */

arr = [1, 2, 3, 4, 5];
console.log(arr);           // (5) [1, 2, 3, 4, 5]
console.log(arr.concat(20));// (6) [1, 2, 3, 4, 5, 20]
console.log(arr);           // (5) [1, 2, 3, 4, 5]

console.log(arr.concat([20, 30, 40],[50,70,90])); // 11) [1, 2, 3, 4, 5, 20, 30, 40, 50, 70, 90]
console.log(arr);           // (5) [1, 2, 3, 4, 5]

/* unshift */

arr.unshift(0);
console.log(arr); // (6) [0, 1, 2, 3, 4, 5] //  adiciona no início

/* shift */

arr.shift();
console.log(arr); // (5) [1, 2, 3, 4, 5] //remove do inicio

