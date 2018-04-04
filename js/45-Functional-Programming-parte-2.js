/* -- 45 - Functional Programming - parte 2 --  */

function adder(x) {
    return function (y) {
        return x + y;
    };
};
var add2 = adder(20);
console.log(add2(30)); // 50

console.log(adder(40)(44)); // 84