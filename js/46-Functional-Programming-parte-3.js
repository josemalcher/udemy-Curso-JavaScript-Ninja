/* -- 046 - Functional Programming - parte 3 -- */

var car = {cor: 'Amarelo'};

function getCorCarro(mycar) {
    return mycar.cor;
};
console.log(getCorCarro(car)); // Amarelo


function mostraOutraFUncao(func) {
    return func();
}
function retornoFUncao() {
    return "Retorno da função";
}

console.log(mostraOutraFUncao(retornoFUncao)); // Retorno da função

console.log(mostraOutraFUncao(function () { // Retorno com função anônima
    return "Retorno com função anônima";
}))

