/*-- 77 - map, filter --*/

/* map */
var arr = [ 1,2,3,4,5,6];
var map = arr.map(function (item, index, array) {
    return item + 1; // retorna arry
});

console.log(arr, map);//(6) [1, 2, 3, 4, 5, 6] (6) [2, 3, 4, 5, 6, 7]


var arr2 = [10, 20, 30, 40, 50];
var map = arr2.map(function (item,index,array) {
    return {intex:index, item: item};
});
console.log(arr2, map);
/*(5) [{…}, {…}, {…}, {…}, {…}]
0:{intex: 0, item: 10}
1:{intex: 1, item: 20}
2:{intex: 2, item: 30}
3:{intex: 3, item: 40}
4:{intex: 4, item: 50}
length:5
*/

var newArr = [];
arr2.forEach(function (item, index, array) {
    newArr.push({index:index, item: item});
});
console.log('newArry com foreach');
console.log(newArr);
/*
*(5) [{…}, {…}, {…}, {…}, {…}]
0:{index: 0, item: 10}
1:{index: 1, item: 20}
2:{index: 2, item: 30}
3:{index: 3, item: 40}
4:{index: 4, item: 50}
length:5
*/

/* filter */

var arr3 = [1,2,3,4,5,6,7];
var filter = arr3.filter(function (item, index, array) {
    return item > 2;
});
console.log(filter); // (5) [3, 4, 5, 6, 7]

// Encadendo
var arr4 = [1,2,3,4,5,6,7,8,9,10];
var map = arr4.map(function (item) {
    return item + 10;
}).filter(function (item) {
    return item > 15;
});
console.log(map); // (5) [16, 17, 18, 19, 20]