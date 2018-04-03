var pessoa = {nome: 'jose', idade: 33, peso: 88, altura: 1.75};
console.log(pessoa); // {nome: "jose", idade: 33, peso: 88, altura: 1.75}

pessoa = {sexo: 'masculino'};
console.log(pessoa); // {sexo: "masculino"} // Perdi as propriedades anteriores!!

var pessoa = {nome: 'jose', idade: 33, peso: 88, altura: 1.75, sexo: 'masculino'};
console.log(pessoa); //{nome: "jose", idade: 33, peso: 88, altura: 1.75, sexo: "masculino"}

pessoa.cor = 'Caucasiano';
/*{nome: "jose", idade: 33, peso: 88, altura: 1.75, sexo: "masculino", …}
altura: 1.75
cor: "Caucasiano"
idade: 33nome: "jose"
peso: 88sexo: "
masculino"
__proto__: Object*/

console.log(pessoa);

/* -- Métodos do objeto -- */
pessoa.andar = function () {
    return 'Pessoa Andando';
};
console.log(pessoa);
/*{nome: "jose", idade: 33, peso: 88, altura: 1.75, sexo: "masculino", …}
altura:1.75
andar:ƒ ()
cor:"Caucasiano"
idade:33
nome:"jose"
peso:88
sexo:"masculino"
__proto__:Object*/

console.log(pessoa.andar()); //Pessoa Andando

pessoa.aniversario = function () {
    this.idade++;
};
console.log(pessoa.idade); // 33
pessoa.aniversario();
console.log(pessoa.idade); // 34

pessoa.sobrenome = 'malcher jr';
pessoa.nomeCompleto = function () {
    return pessoa.nome + ' ' + pessoa.sobrenome;
};
console.log(pessoa.nomeCompleto()); // jose malcher jr
