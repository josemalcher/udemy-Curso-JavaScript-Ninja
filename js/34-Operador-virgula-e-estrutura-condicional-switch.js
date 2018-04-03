/* -- 34 - Operador vírgula e estrutura condicional switch -- */

// var a; b = 2, c;
function myFUnction() {
    var x = 0;
    return (x += 1, x);
    // return x++;
}

function funcao1() {
    var a = 1, b = 2, c = 3;
    return [a, b, c];
}

console.log(funcao1()); // (3) [1, 2, 3]

/* -- Estruturas COndicionais - switch -- */

function funcswitch(x) {
    switch (x){
        case 1:
            console.log('x é 1');
            break;
        case 2:
            console.log('x = 2');
            break;
        default:
            console.log('Não é nem 1 nem 2');
    }
}
funcswitch(); // Não é nem 1 nem 2
funcswitch(1); // x é 1
funcswitch(2); // x = 2




