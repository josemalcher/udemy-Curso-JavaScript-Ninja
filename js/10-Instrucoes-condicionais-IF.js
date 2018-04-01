/* -- condicionais - IF -- */
var x = 3;
var y = 7;
console.log(y); // 7
if (x == 3) {
    y = 3;
}
console.log(y); // 3

if (x === y && y === 3) {
    x = 5;
    y = 2;
}
console.log(x); // 5
console.log(y); // 2

if (x === 55 && y === 33) {
    x = 5;
    y = 2;
}else{
    x = 50;
    y = 20;
}
console.log(x); // 50
console.log(y); // 20

if (x === 55 && y === 33) {
    x = 5;
    y = 2;
}else if(x === 50 || y === 20){
    x = 55;
    y = 25;
}else{
    x = 0;
    y = 0;
}
console.log(x); // 55
console.log(y); // 25
