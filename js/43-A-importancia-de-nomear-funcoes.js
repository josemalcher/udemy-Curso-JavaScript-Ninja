/* -- 43 - A importância de nomear funções -- */

var func = function(){
    return "Olá";
}
console.log(func()); // Olá
console.log(func().name); // undefined

var func2 = function FuncaoTal() {
    return 'Teste';
}
console.log(func2.name); // FuncaoTal

function myfunction2() {
    return 'Conteudo funcao';
}

console.log(myfunction2()); // Conteudo funcao
console.log(myfunction2.name); // myfunction2




