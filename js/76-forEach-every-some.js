/* -- 76 - forEach, every, some -- */

/* foreach */
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (item, index, array) {
    console.log(item, index, array);
    /*
        1 0 (5) [1, 2, 3, 4, 5]
        2 1 (5) [1, 2, 3, 4, 5]
        3 2 (5) [1, 2, 3, 4, 5]
        4 3 (5) [1, 2, 3, 4, 5]
        5 4 (5) [1, 2, 3, 4, 5]
    */
});

var soma = 0;
arr.forEach(function (item) {
    soma += item;
});
console.log(soma); // 15

/* every */

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var every = arr2.every(function (item) {
    console.log(item); // 1,2,3,4,5
    return item < 8;

});
console.log(every); // true // testa todos os itens todos os itens são menores que 8


/* some */

var arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
var some = arr3.some(function (item) {
    return item % 2 == 0 ;
});
console.log(some); //true // verifica se algum é valido


