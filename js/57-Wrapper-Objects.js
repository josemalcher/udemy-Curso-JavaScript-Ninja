/* -- 57 - Wrapper Objects --*/

//Construtores - Crian novos objetos
var name = new String('JOSE');
var age = new Number(33);
var ninja = new Boolean(false);

// conversores - sem o new (convertem o tipo)
var name =  String('JOSE');
var age =  Number(33);
var ninja =  Boolean(0);


var nome = 'Jose';
//Ja pega a string e transforma (wrapper) em um objeto para que se possa usar propriedades abaixo:
console.log(nome.length); // 4
console.log(nome.valueOf()); // Jose


