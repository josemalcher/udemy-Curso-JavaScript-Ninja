/* -- 38 -  O operador módulo --*/

console.log(3 / 3); // 1
console.log(4 / 2);// 2
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1
console.log(4 % 2); // 0

var num = 0;
while (num <= 20) {
    num % 2 === 0 ? console.log(num) : '';
    num++;
}
