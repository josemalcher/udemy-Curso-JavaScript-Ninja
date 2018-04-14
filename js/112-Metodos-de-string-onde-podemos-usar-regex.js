/* -- 112 - Métodos de string onde podemos usar regex -- */

console.log('josemalcher'.match(/a/g)); // ["a"]

// .replac (regexp, string)
// .split
var cpf = '111.222.333-44';
console.log(cpf.split('.')); // (3) ["111", "222", "333-44"]
console.log(cpf.split(/\D/g)); // (4) ["111", "222", "333", "44"]

//.search
console.log(cpf.search(/\./)); // 3




