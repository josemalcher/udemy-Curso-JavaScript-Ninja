/* -- 64 - Saltos -- */

// return
function salto() {
    var number = 10;
    if (number === 10) {
        return true;
    }
    var number1 = 5;
    var name = 'Jose Malcher Jr.';
    return name + ' ' + number1;
}

console.log(salto()); // true

// breack
var x = 2
switch (x) {
    case 1:
        console.log('x é 1');
        break;
    case 2:
        console.log('x = 2'); // x = 2
        break;
    default:
        console.log('Não é nem 1 nem 2');
}

for( var i = 0; i < 10 ; i++){
    if (i === 5) {
        break;
    }
    console.log(i);// 0 - 4
}

// Continue

for( var i = 0; i < 10 ; i++){
    if (i === 5) {
        continue;
    }
    console.log(i);// 0 -4  6 - 9
}