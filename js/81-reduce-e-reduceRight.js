/* -- 81 - reduce() e reduceRight() -- */

var arr = [1, 2, 3, 4, 5];
var reduce = arr.reduce(function (acumulado, atual, index, array) {
    return acumulado + atual;

},0); // valor inicial do acumulado = 0

/*
* 1ª - 0 + 1 = 1
* 2ª - 1 + 2 = 3
* 3ª - 3 + 3 = 6
* 4ª - 6 + 4 = 10
* 5ª - 10 + 6 = 15
* */
console.log(reduce); // 15

var arr2 = ['j', 'o', 's', 'e', ' ', 'm', 'a', 'l', 'c', 'h', 'e', 'r'];
var reduce2 = arr2.reduce(function (acumulado, atual, index, array) {
    return acumulado + atual;

});
console.log(reduce2);// jose malcher

/* reduceRight */

var reduce2 = arr2.reduceRight(function (acumulado, atual, index, array) {
    return acumulado + atual;

});
console.log(reduce2);// rehclam esoj  //inverte