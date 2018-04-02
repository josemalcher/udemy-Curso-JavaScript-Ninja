/* -- Tipos de dados --*/

// Primitivos
// number | string | boolean | null e undefined

// objeto
console.log({propriedade: 'valor'}); // {propriedade: "valor"}

var objeto = {propriedade: "valor", propriedade2: 10, propriedade3: true};
console.log(objeto); // {propriedade: "valor", propriedade2: 10, propriedade3: true}

console.log(objeto.propriedade); // valor

var pessoa = {nome: 'jose', idade: 33, peso: 88, altura: 1.75};
console.log(pessoa); // {nome: "jose", idade: 33, peso: 88, altura: 1.75}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.altura);

// outra forma de chamar função (função anônimas)
var myvar  = function () {
    return 'Variável myvar';
};
console.log(myvar()); //

