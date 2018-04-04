/* -- 40 - Array - método "push()" e Loop "for" -- */

var arr = [1,2,'jose',{bola:'azul'}];
console.log(arr.length); // 4

var arr = [1,2,'jose',{bola:'azul'}, ['la','2',3]]; // sobreescrevendo
console.log(arr.length); // 5

arr.push({carro: 'BMW'});
console.log(arr.length); // 6
console.log(arr); // (6) [1, 2, "jose", {…}, Array(3), {…}]

arr.push(function soma(x, y){return x+y});
console.log(arr.length); // 7
console.log(arr); // (7) [1, 2, "jose", {…}, Array(3), {…}]


console.log(arr[6](10, 20)); // 30


// For

for(var num = 2, arroz = 3; num < 5; num++){
    console.log(num);
    console.log(arroz++);
}
/*
 2
 3
 3
 4
 4
 5
*/
