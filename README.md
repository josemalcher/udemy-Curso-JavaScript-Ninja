# Curso JavaScript Ninja

https://www.udemy.com/curso-javascript-ninja/

---

## Índice

---

### 01 - Variáveis e tipos de dados

```javascript
/* -- Variáveis --*/
var x;
console.log(x); // undefined

x = 0;
console.log(x); // 0

x = 1;
console.log(x); // 1

x = 1.2;
console.log(x); // 1.2

var nomeQualquer = 10;
console.log(nomeQualquer); // 10

/* -- Tipos de dados --*/
// - number
// - string
// - boolean
// - null
// - undefined
// - object
// - array

x = 'Olá mundo';
console.log(x); // Olá mundo
x = "Olá Mundo";
console.log(x); // Olá mundo

x = true;
console.log(x); // true
x = false;
console.log(x); // false

x = null;
console.log(x); // null

x = undefined;
console.log(x); // undefined

x = {};
console.log(x); // {}

pessoa = {altura:1.87, peso: 90};
console.log(pessoa); // {altula: 1.87, peso: 90}
console.log(pessoa.peso); // 90

pessoa.altura = 1.60;
console.log(pessoa.altura); // 1.6

var numeros = [];
numeros = [1,2,3,4,5,6];
console.log(numeros); // [1, 2, 3, 4, 5, 6]
console.log(numeros[0]); // 1
console.log(numeros[1]); // 2
console.log(numeros[2]); // 3

// anotações de arrays em objetos
console.log(pessoa['altura']); // 1.6
### 02 - Operadores aritméticos
console.log(pessoa.altura); // 1.6
```

---
### 02 - Operadores aritméticos

```javascript
/* -- Operadores -- */
console.log(1+1); // 2
console.log(2 * 2); // 4
console.log(10 / 2); // 5
console.log(55 % 2); // 1

// ++ --
var soma = 10 + 10;
console.log(soma); // 20
console.log(soma + 1); // 21
console.log(soma++); // 20
console.log(soma); // 21
console.log(++soma); // 22
console.log(++soma); // 23

var soma2 = 10 + 10;
console.log(soma2); // 20
console.log(soma2 - 1); // 19
console.log(soma2--); // 20
console.log(soma2); // 19
console.log(--soma2); // 18
console.log(--soma2); // 17

// abreviados
soma3 = 20;
soma3 += 10;
console.log(soma3); // 30
soma3 -= 5;
console.log(soma3); // 25

``` 

---
### 03 - Operadores de igualdade e relacionais
```javascript
/* -- Operadores de igualdade e Relacionais -- */

var x = 0;
console.log(x);

console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 != 1); // false
console.log(1 != 2); // true
console.log(x == 1); // false
console.log(x != 1); // true
console.log('------------');

/* -- operadores que testan o tipo do dado -- */
console.log('jose' == 'jose'); // true
var nome = 'jose';
console.log(nome == "jose"); // true

var pessoa = 'maria';
console.log(pessoa == nome); // false

var um = '1';
var numero = 1;
console.log(numero == um); // true
console.log(numero === um); // false
console.log(1 === '1'); // false
console.log(1 !== '1'); // true
console.log("-------------");

console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(10 >= 10); // true
console.log(11 >= 10); //true
```

---
### 04 - Funções
```javascript
/* -- Função -- */

//ex:
function nome() {
}
nome(); //invocando a função

var x = 1;
function soma() {
    x = x + 1;
}

soma();
console.log(x); // 2
soma();
console.log(x); // 3
soma();
console.log(x); // 4

soma; // retorna a função, não há execução da mesma!
console.log(x); // 4

// Escopo
function qualquer() {
    var jose = 'jose';
}
//console.log(jose); //ReferenceError: jose is not defined

function qualquer2() {
    var josemalcher = 'josemalcher';
    return josemalcher;
}
console.log(qualquer2()); // josemalcher

var y = 4;
function cinco() {
    return 5;
}

console.log(cinco()); // 5
console.log(cinco()+y); // 9

// Parâmetros
function somaParametro(x, y) {
    return x + y;
}
console.log(somaParametro(5,5)); // 10
console.log(somaParametro(50,5)); // 55

```


---
### 07 - Operadores Lógicos
```javascript
/* -- Operadores Lógicos -- */

var x = 3;
var y = 4;
console.log(x === y); //false

console.log(x === 3 && y === 4); // true

console.log(x === 3 && y === 10); // false

console.log(x === 3 || y === 10); // true

console.log(x === 10 || y === 10); // false

console.log(! x === 3 ); // false
console.log(x !== 3 ); // false
console.log(x === 3 ); // true

```


---
### 08 - Operadores Unários

```javascript
/* -- Operadores Unários -- */

console.log(3 + 3); // 6
console.log(+3); // 3

console.log('3'); // '3'
console.log(+'3'); // 3

console.log(+'jose'); // NaN

console.log('jose '+ 'malcher'); //jose malcher

console.log(10+ '3'); // 103
console.log('10' + 3); // 103

var y = 3;
console.log(-y); // -3
console.log(-'y'); // NaN

```

---
### 09 - Estrutura Léxica

```javascript
/* -- Estrutura Léxica -- */

var animal = 'cachorro';
var Animal = 'Gato';
console.log(animal); // cachorro
console.log(Animal); // Gato

// comentário de linha

/*
*   comentário em bloco!
*/

// Literais (aparecem diretamente sem mudança)
console.log(12); // 12
console.log(true); // true
console.log(1.2); // 1.2
console.log({a:1}); // {a: 1}
console.log([1,2,3]); // (3) [1, 2, 3]

//Identificadores
// _ ou $
// letras de a a z
// letras de A a Z
// Podem conter entre as palavras 0 a 9
// Qualquer caracteres UNICODE

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar



```

---
### 10 - Instruções condicionais - IF
```javascript
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

```

#### 15 - Tipos de dados e objetos
```javascript
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


```

#### 16 - Métodos de objeto
```javascript
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

```

---
### 20 - Truthy e Falsy

```javascript
/* -- 20 - Truthy e Falsy -- */

var teste;

if (1) {
    teste = true;
    console.log(teste); //true
} else {
    teste = false;
    console.log(teste);
}

if (0) {
    teste = true;
    console.log(teste);
} else {
    teste = false;
    console.log(teste); //false
}

// FALSY
// - undefined 0
// null  -0
// NaN  " " (string vazia)
// false

if ('') {
    teste = true;
    console.log(teste);
} else {
    teste = false;
    console.log(teste); //false
}

if ('0') {
    teste = true;
    console.log(teste); //true
} else {
    teste = false;
    console.log(teste);
}

if (null) {
    teste = true;
    console.log(teste);
} else {
    teste = false;
    console.log(teste); //false
}
if ({}) { // e tbm um array []
    teste = true;
    console.log(teste); //true
} else {
    teste = false;
    console.log(teste);
}

// !!

console.log(true); //true
console.log(!true); // false
console.log(!false); // true
console.log(!!false); // false
```

---
### 21 - Condicional Ternário

```javascript
/* -- 21 - Condicional Ternário -- */

// condição ? true : false;

console.log(1 === 2 ? true : false); // false
console.log(1 ? true : false); // true
```

---
### 22 - Escopo de variáveis e funções

```javascript
/* -- 22 - Escopo de variáveis e funções -- */

var myVar = 1;
function myFunction() {
    return myVar;
}
console.log(myFunction()); // 1

function outherFunction() {
    var outherVar = 20;
    return outherVar;
}

console.log(outherFunction()); // 20
//console.log(outherVar); // Uncaught ReferenceError: outherVar is not defined

// importante: sempre usar "var" para criar variáveis

//se não usar 'var' a variável ficará em modo global

function variavelGlobal() {
    varGlobal = 'variável global';
    return varGlobal;
}
variavelGlobal(); // inicializou a variável
console.log(varGlobal); // variável global


```

---
### 27 - Retorno de funções com arrays e objetos

```javascript
/* -- 27 - Retorno de funções com arrays e objetos -- */
function myFunction1() {
    return 1;
}
console.log(myFunction1()); // 1

function myFunction2() {
    return null;
}
console.log(myFunction2()); // null
function myFunction3() {
}
console.log(myFunction3()); // undefined

// (...) tipos primitivos de retorno!

/* arrays */
function myFunction4() {
    return [1, 2, 3, 4, 5];
}
console.log(myFunction4()); // (5) [1, 2, 3, 4, 5]
console.log(myFunction4()[0]); // 1
console.log(myFunction4()[1]); // 2
console.log(myFunction4()[10]); // undefined

/* objetos */
function myFunction5() {
    return {prop1: 1,
            prop2: 'Jose',
            prop3: function () {
                return 'PROP 3';
            }} ;
}
console.log(myFunction5()); // {prop1: 1, prop2: "Jose", prop3: ƒ}
console.log(myFunction5().prop2); // Jose

var valor = myFunction5();
console.log(valor); //  {prop1: 1, prop2: "Jose", prop3: ƒ}
console.log(valor.prop2); //  Jose
console.log(valor.prop3); //   {return 'PROP 3';} //function
console.log(valor.prop3()); //  PROP 3 // valor

```

---
### 28 - Parâmetros de Funções com arrays e objetos
```javascript
/* --  28 - Parâmetros de Funções com arrays e objetos -- */

var arrayVar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function funcao1(arg) {
    return arg;
}

console.log(funcao1()); // undefined
console.log(funcao1(arrayVar)); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function funcao2(arg) {
    return arg[2];
}

console.log(funcao2(arrayVar)); // 3

// COM OBJETO

var objJose = {
        prop1: 1,
        prop2:'Jose',
        curso: 'JavaScrip NInja!'
        };
function objeto(arg) {
    return arg;
}
console.log(objeto(objJose)); // {prop1: 1, prop2: "Jose"}
console.log(objeto(objJose).prop2); // Jose

function retornaCurso(arg) {
    return arg.curso;
}
console.log(retornaCurso(objJose)); //JavaScrip NInja!
```

---
### 34 - Operador vírgula e estrutura condicional switch

```javascript
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





```

---
### 35 - Estrutura de repetição while

```javascript
/* -- 35 - Estrutura de repetição while -- */

var counter = 0;

while (counter < 10) {
    console.log(counter); // 0,1,2,3,4,5,6,7,8,9
    counter++;
}

var counter2 = 10;
while (counter2--) {
    console.log(counter2); // 9,8,7,6,5,4,3,2,1,0
}
```

---
### 38 -  O operador módulo
```javascript
/* -- 38 -  O operador módulo --*/

console.log(3 / 3); // 1
console.log(4 / 2);// 2
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1
console.log(4 % 2); // 0

var num = 0;
while (num <= 20) {
    num % 2 === 0 ? console.log(num) : '';
    num++;
}

```


---
### 39 - Array - a propriedade length
```javascript
/* -- 39 - Array - a propriedade length -- */

var arr = ['jose', 'Malcher', null, true, {bola:'azul'}, function(){}];

console.log(arr.length); // 6

console.log(arr[1]); // Malcher
console.log(arr[3]); // true

var qtd = arr.length;
console.log(qtd); // 6

while (qtd > 0) {
    console.log(arr[--qtd]);
}
/*
undefined
 ƒ (){}
{bola: "azul"}
 true
null
Malcher
jose
*/
```


---
### 40 - Array - método "push()" e Loop "for"

```javascript
/* -- 40 - Array - método "push()" e Loop "for" -- */

var arr = [1,2,'jose',{bola:'azul'}];
console.log(arr.length); // 4

var arr = [1,2,'jose',{bola:'azul'}, ['la','2',3]]; // sobreescrevendo
console.log(arr.length); // 5

arr.push({carro: 'BMW'});
console.log(arr.length); // 6
console.log(arr); // (6) [1, 2, "jose", {…}, Array(3), {…}]

arr.push(function soma(x, y){return x+y});
console.log(arr.length); // 7
console.log(arr); // (7) [1, 2, "jose", {…}, Array(3), {…}]


console.log(arr[6](10, 20)); // 30


// For

for(var num = 2, arroz = 3; num < 5; num++){
    console.log(num);
    console.log(arroz++);
}
/*
 2
 3
 3
 4
 4
 5
*/

```

---
### 43 - A importância de nomear funções

```js
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

```

---
### 44 - Introdução à Functional Programming

```js
/* -- 44 - Introdução à Functional Programming -- */

var obj = {};
console.log(obj); // {}

var func = function func() {
};
console.log(func.name); // func

var func2 = function () {
};
console.log(func2.name); // func2

function perssoa() {
    return{name: 'Jose', lastname: 'Malcher Jr' }
}
console.log(perssoa()); // {name: "Jose", lastname: "Malcher Jr"}

function perssoa2() {
    var info = {nome: 'Jose', ultimonome: 'Malcher Jr' };
    return info;
}
console.log(perssoa()); // {name: "Jose", lastname: "Malcher Jr"}
console.log(perssoa2().nome); // Jose
console.log(perssoa2().ultimonome); // Malcher Jr


```

#### 45 - Functional Programming - parte 2

```js
/* -- 45 - Functional Programming - parte 2 --  */

function adder(x) {
    return function (y) {
        return x + y;
    };
};
var add2 = adder(20);
console.log(add2(30)); // 50

console.log(adder(40)(44)); // 84
```

#### 46 - Functional Programming - parte 3

```js
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


```

---
### 50 - Escopo de funções

```js
/* -- 50 - Escopo de funções -- */

function myfunction() {
    var num1 = 1;
    function soma() {
        return num1 + num2;
    }
    var num2 = 2;
    return soma();
}

console.log(myfunction()); // 3
//console.log(soma()); // ReferenceError: soma is not defined


```


---
### 51 - Hoisting

```js
/* -- 51 - Hoisting -- */

function myfunction() {
    var num1 = 1;
    var num2 = 2;

    return soma();
    var soma = function soma() {
        return num1 + num2;
    }
    /*function soma() { // "elevação para o topo"
        return num1 + num2;
    }*/
}

//console.log(myfunction()); // TypeError: soma is not a function

/* ---------------------- */

function variaveisHoisting() {
    console.log("Antes de declarar", numero1); // Antesde de declarar undefined
    var numero1 = 100;
    console.log("DEPOIS de declarar", numero1);// DEPOIS de declarar 100
}

console.log(variaveisHoisting()); // undefined (função não tem retorno)
```

---
### 52 - IIFE - Immediately Invoked Function Expression

```js
/* -- 52 - IIFE - Immediately Invoked Function Expression -- */

// Função auto-executável
(function () {
    console.log(30 + 10); // 40
})();


```

---
### 57 - Wrapper Objects
```js
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

```


---
### 58 - typeof
```js
/* -- 58 - typeof -- */

/*
* typeof undefined; // "undefined"
* typeof function(){}; // "function"
* typeof true; // 'boolean'
* typeof 10; // 'number'
* typeof 'JS Ninja'/ // 'string'
*
* Qual quer outro objeto que não senha function => 'object'
*
*  typeof {} // 'object'
*  typeof []; // object
*  typeof null, // 'object'
*
*  Usar para valores primitivos
* */

console.log(typeof 10); // number
console.log(typeof null); // object
console.log(typeof function(){}); // function

function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(10, 20));      // 30
console.log(soma('js', 20)); // js20
console.log(soma({}, [])); // [object Object]

function subtracao(num1, num2) {
    return num1 - num2;
}
console.log(subtracao(10, 20));      // -10
console.log(subtracao('js', 20)); // NaN
console.log(subtracao({}, [])); // NaN

function subtracao(num1, num2) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 - num2;
    }
    return 'entre com dois numeros';
}
console.log(subtracao(10, 20));      // -10
console.log(subtracao('js', 20)); // entre com dois numeros
console.log(subtracao({}, [])); // entre com dois numeros

/* verificar se é null*/
function  exSeNull(num1,num2) {
    if (num1 === null) {
        return 'não entre com valores nulos';
    }
    return num1 - num2;
}
console.log(exSeNull(null, 20)); // não entre com valores nulos

```

---
### 63 - Laços (Loops)
```js
/* -- 63 - Laços (Loops) --*/

var counter = 1;
while (counter < 5) {
    console.log(counter++); // 1-4
}
console.log(counter); // 5

counter = 1;
do {
    console.log(counter++);
} while (counter<5); // 1-4


// for in
for(var i = 1; i <5 ; i++){
    console.log(i); //1-4
}

var car = {marca:'VW', modelo:'gol', ano: '2013'};
console.log(car); // {marca: "VW", modelo: "gol", ano: "2013"}

for(var prop in car){
    console.log(prop);
}
/*
marca
modelo
ano
*/

// propriedade in - verificar se propriedade existe
console.log('Marca existe em car?', 'marca' in car); // true
console.log('Existe portas?', 'porta' in car); // false

for(var prop in car){
    console.log(car[prop]);
}
/*
VW
gol
2013
*/
```

---
### 64 - Saltos

```js
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
```

---
### 68 - Criação de objetos

```js
/* -- 68 - Criação de objetos -- */

// Mutáveis e Manipulados por referência

var obj = {propriedade1: 'prop1', propriedade2: 'prop2'};
console.log(obj); // {propriedade1: "prop1", propriedade2: "prop2"}
var obj2 = {propriedade1: 'prop1', propriedade2: 'prop2'};
console.log(obj2); // {propriedade1: "prop1", propriedade2: "prop2"}

obj.propriedade1 = 'Propriedade 1';
console.log(obj); // {propriedade1: "Propriedade 1", propriedade2: "prop2"}

delete obj.propriedade1;
console.log(obj); // {propriedade2: "prop2"}

obj.propriedade1 = 'PROPRIEDADE 1';
console.log(obj); // {propriedade2: "prop2", propriedade1: "PROPRIEDADE 1"}


console.log(obj === obj2); // false

var objCopy = obj2;
objCopy.propriedade2 = "AJUSTADO PELA REFerência objCopy";
console.log(objCopy); // {propriedade1: "prop1", propriedade2: "AJUSTADO PELO objCopy"}
console.log(obj2);    // {propriedade1: "prop1", propriedade2: "AJUSTADO PELO objCopy"}

console.log(obj2 === objCopy); // true


/* Criação de objetos*/
// Literias;
// Como contrutor (new)
// com Object.create()

// object.prototype (objetos herdão dele)



```

---
### 69 - Criação de objetos - Object.create
```js
/* -- 69 - Criação de objetos - Object.create -- */

/* Criação de objetos*/
// Literias;
// Como contrutor (new)
// com Object.create()

// object.prototype (Herança!)

var obj = {x: 1, y: 2};
var obj2 = Object.create(obj); // cria um novo objeto! Não é uma referência

console.log(obj2);   // {}
console.log(obj2.x); // 1
console.log(obj2.y); // 2

var objVazio = Object.create({});
console.log(objVazio); // {}
console.log(objVazio.toString()); // [object Object]

for(var prop in obj){
    console.log(prop); // x y
}
for(var prop in obj2){
    console.log(prop); // x y
}
// Ambos tem as mesmas propriedades herdadas do objeto

// Verificar se a propriedade existe:
console.log(obj.hasOwnProperty('x')); //true é próprio do objeto
console.log(obj.hasOwnProperty('y')); // true
console.log(obj2.hasOwnProperty('x')); // false pq é herdado
console.log(obj2.hasOwnProperty('y')); // false





```


---
### 70 - Métodos de objeto

```js
/* -- 70 - Métodos de objeto -- */

// objeto -> Array
obj1 = {x:1 , y: 2};
//Object.keys(obj1);
console.log(Object.keys(obj1).length); // 2

// verifica se objeto é protótipo
obj2 = {x: 1}
console.log(obj2.isPrototypeOf(obj1)); // false

// transformar objeto no formato JSON

console.log(JSON.stringify(obj1)); // {"x":1,"y":2}

var jsonn = JSON.stringify(obj1);

// Json para Obje
console.log(JSON.parse(jsonn)); // {x: 1, y: 2}

/* -- Arrays -- */
// pop e push

var arr = [];
arr[0] = 10;
arr[1] = 1;
arr[2] = 'dois'
arr[5] = 5;
arr[12] = 'doze';
console.log(arr); // (13) [10, 1, "dois", empty × 2, 5, empty × 6, "doze"]

arr.push('14'); // adiciona no final
console.log(arr); // (14) [10, 1, "dois", empty × 2, 5, empty × 6, "doze", "14"]

arr.pop(); // remove do final
console.log(arr); // (13) [10, 1, "dois", empty × 2, 5, empty × 6, "doze"]

// pop retorna o valor do item removido


```

---
### 71 - Array - Métodos

```js
/* -- Array - Métodos -- */

/* join */
arr = ['arroz', 'feijão', 'carne'];

console.log(arr.join()); //arroz,feijão,carne

console.log(arr); // (3) ["arroz", "feijão", "carne"]

console.log(arr.join(' ')); // arroz feijão carne
console.log(arr.join(' | ')); // arroz | feijão | carne

console.log("Meu almoço será ",arr.join(', ')); // Meu almoço será  arroz, feijão, carne

/* reverse */

console.log(arr);           // (3) ["arroz", "feijão", "carne"]
console.log(arr.reverse()); // (3) ["carne", "feijão", "arroz"]
console.log(arr);           // (3) ["carne", "feijão", "arroz"] // modifica o array

/* sort */
console.log(arr.sort()); // (3) ["arroz", "carne", "feijão"]
console.log(arr); // (3) ["arroz", "carne", "feijão"] ;; modifica o principal

```

---
### 74 - Array - toString, concat, unshift, shift

```js
/* -- 74 - Array - toString, concat, unshift, shift -- */

/* toString */
arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
arr.push(10);
console.log(arr); // (6) [1, 2, 3, 4, 5, 10]
console.log(arr.length); // 6
console.log(arr.toString()); // 1,2,3,4,5,10 // não altera
// no join é possível passar parâmetros para separar a string

/* contat */

arr = [1, 2, 3, 4, 5];
console.log(arr);           // (5) [1, 2, 3, 4, 5]
console.log(arr.concat(20));// (6) [1, 2, 3, 4, 5, 20]
console.log(arr);           // (5) [1, 2, 3, 4, 5]

console.log(arr.concat([20, 30, 40],[50,70,90])); // 11) [1, 2, 3, 4, 5, 20, 30, 40, 50, 70, 90]
console.log(arr);           // (5) [1, 2, 3, 4, 5]

/* unshift */

arr.unshift(0);
console.log(arr); // (6) [0, 1, 2, 3, 4, 5] //  adiciona no início

/* shift */

arr.shift();
console.log(arr); // (5) [1, 2, 3, 4, 5] //remove do inicio


```

---
### 75 - slice e splice

```js
/* -- 75 - slice e splice -- */

/* slice */

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.slice(3,5)); // (2) [4, 5]
console.log(arr.slice());   // (7) [1, 2, 3, 4, 5, 6, 7]
console.log(arr.slice(0)); // (7) [1, 2, 3, 4, 5, 6, 7]
console.log(arr.slice(0,2)); // (2) [1, 2]
console.log(arr.slice(1,3)); // (2) [2, 3]
console.log(arr.slice(-2)); // (2) [6, 7]

/* splice */

console.log(arr);           // (7) [1, 2, 3, 4, 5, 6, 7]
console.log(arr.splice(3)); // (4) [4, 5, 6, 7] // removeu
console.log(arr);           // (3) [1, 2, 3]

console.log(arr.splice(1, 0, 'add')); // []  // não removeu nada
console.log(arr); // (4) [1, "add", 2, 3]  //adicionou

console.log(arr.splice(2, 0, 'a','b','c'));// []
console.log(arr); // (7) [1, "add", "a", "b", "c", 2, 3]

console.log(arr.splice(1, 4, 2, 3, 4)); // (4) ["add", "a", "b", "c"]
console.log(arr); // (6) [1, 2, 3, 4, 2, 3]

```

---
### 76 - forEach, every, some
```js
/* -- 76 - forEach, every, some -- */

/* foreach */
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (item, index, array) {
    console.log(item, index, array);
    /*
        1 0 (5) [1, 2, 3, 4, 5]
        2 1 (5) [1, 2, 3, 4, 5]
        3 2 (5) [1, 2, 3, 4, 5]
        4 3 (5) [1, 2, 3, 4, 5]
        5 4 (5) [1, 2, 3, 4, 5]
    */
});

var soma = 0;
arr.forEach(function (item) {
    soma += item;
});
console.log(soma); // 15

/* every */

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var every = arr2.every(function (item) {
    console.log(item); // 1,2,3,4,5
    return item < 8;

});
console.log(every); // true // testa todos os itens todos os itens são menores que 8


/* some */

var arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
var some = arr3.some(function (item) {
    return item % 2 == 0 ;
});
console.log(some); //true // verifica se algum é valido



```

---
### 77 - map, filter
```js
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
```

---
### 81 - reduce() e reduceRight()
```js
/* -- 81 - reduce() e reduceRight() -- */

var arr = [1, 2, 3, 4, 5];
var reduce = arr.reduce(function (acumulado, atual, index, array) {
    return acumulado + atual;

},0); // valor inicial do acumulado = 0

/*
* 1ª - 0 + 1 = 1
* 2ª - 1 + 2 = 3
* 3ª - 3 + 3 = 6
* 4ª - 6 + 4 = 10
* 5ª - 10 + 6 = 15
* */
console.log(reduce); // 15

var arr2 = ['j', 'o', 's', 'e', ' ', 'm', 'a', 'l', 'c', 'h', 'e', 'r'];
var reduce2 = arr2.reduce(function (acumulado, atual, index, array) {
    return acumulado + atual;

});
console.log(reduce2);// jose malcher

/* reduceRight */

var reduce2 = arr2.reduceRight(function (acumulado, atual, index, array) {
    return acumulado + atual;

});
console.log(reduce2);// rehclam esoj  //inverte
```


---
### 82 - indexOf(), lastIndexOf() e isArray()

```js
/* -- 82 - indexOf(), lastIndexOf() e isArray() -- */

/* indexOf*/
var arr = [1,2,3,4,5,6,7,8,9,10];
var arr2 = ['j','o','s','e'];
console.log(arr.indexOf(5)); // 4 (local do index)
console.log(arr.indexOf(22)); // -1

console.log(arr2.indexOf('s')); // 2
console.log(arr2.indexOf('s',3)); // -1 // (valor, a partir de)

console.log(arr2.indexOf('s') > -1); // TRUE

/* lasindexOf*/
// procura do final para inicio
console.log(arr.lastIndexOf(10)); // 9
console.log(arr2.lastIndexOf('e'));// 3
console.log(arr.lastIndexOf(1)); // 0

/*isArray*/
console.log(Array.isArray(arr)); // true
console.log(Array.isArray({})); // false (objeto)

console.log(typeof arr); // object -  objetos e arrays Retorna objeto
console.log(Array.isArray([])); // true
```
---
### 87 - JS no browser
```html
<!doctype html>
<html lang="pt_br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Curso Javascript Ninja</title>
</head>
<body>


<script src="js/82-indexOf-lastIndexOf-e-isArray.js"></script>
</body>
</html>
```
```js
(function(){
	var name = 'Teste name';
	console.log(name);
})();
```

---
### 88 - this
```js
/* -- 88 - this -- */
(function () {
    var myObjetect = {
        myProperty: 1,
        init: function init() {
            return this;
        }
    };
    console.log(myObjetect.init()); // this faz referencia ao proprio objeto
    console.log(myObjetect.myProperty); // 1

    function funcaquiThis1() {
        return this;
    }

    console.log(funcaquiThis1()); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

    function MyContructor(){
        this.prop1 = 'propriedade 1';
        this.prop2 = 'propriedade 2';

    }

    //console.log("My contructor", new MyContructor());
    //My contructor MyContructor {prop1: "propriedade 1", prop2: "propriedade 2"}
    var contructor = new MyContructor();
    console.log('Meu controturor', contructor.prop1);
    // Meu controturor propriedade 1

    //prop1 = 'Propriedade 1 global';
    var prop1 = 'Propriedade 1 global'; // sempre usar o var
    console.log(window.prop1); // Propriedade 1 global // undefined
    console.log(prop1); // Propriedade 1 global 


})();
```
---
### 89 - Objeto arguments
```js
/* -- 89 - Objeto arguments -- */

(function () {
    function myFunction(arg1,arg2) {
        return arguments;
    }

    console.log(myFunction(1,2));
    // Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ] (sem parametros na função)
    // Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]



})();



```


---
### 91 - use strict - Criação de variáveis sem o "var"

```js
/* -- 91 - use strict - Criação de variáveis sem o "var" -- */

(function () {
    'use strict';
    myName = 'José Malcher Jr.'; // Uncaught ReferenceError: myName is not defined (ACUSA ERRO)
    console.log(myName);
})();
console.log(myName);
```

---
### 92 - use strict - Uso do width e global this === undefined

```js
/* -- 92 - use strict - Uso do width e global this === undefined -- */

(function () {
    'use strict';
    var obj = {
        prop1 : {
            prop2 : {
                prop3:{
                    prop31: 'Prop31',
                    prop32: 'Prop32',
                    prop33: 'Prop33'
                }
            }
        }
    };

    console.log(obj.prop1.prop2.prop3.prop31);
    console.log(obj.prop1.prop2.prop3.prop32);
    console.log(obj.prop1.prop2.prop3.prop33);

   /* with (obj.prop1.prop2.prop3){ // Uncaught SyntaxError: Strict mode code may not include a with statement
        console.log(prop31);      // Não é possível usar with pois pode causar problemas com nomes de alguma variável
        console.log(prop32);
    }*/

    /*
    *    No escopo global
    *   this === undefined
    */

    function Person(nome, ultimoNome, idade) {
        this.nome = nome;
        this.ultimonome = ultimoNome;
        this.age = idade;
    }

    //console.log(new Person('Jose', 'Malcher Jr.', 30)); // Person {nome: "Jose", ultimonome: "Malcher Jr.", age: 30}

    console.log(Person('Jose', 'Malcher Jr.', 30)); // Uncaught TypeError: Cannot set property 'nome' of undefined

})();

//console.log(nome, ultimoNome, idade); // sem o uso do use stric, poderia acessar as variáveis fora
```

---
### 93 - O operador delete, objetos e funções

```js
/* -- 93 - O operador delete, objetos e funções -- */

(function () {
    'use strict';
    var myVar = 2;
    var obj = {
        prop1: 'Prop1',
        prop2: 'Prop2',
        prop3: 'Prop3', // (com 'use strict') não é permitido propriedades com o mesmo nome
        prop3: 'Prop3' 
    };
    console.log(obj); // {prop1: "Prop1", prop2: "Prop2", prop3: "Prop3"}
    //console.log(delete myVar); // false (sem 'use strict')
    //console.log(delete myVar); // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode. (com 'use strict')
    console.log(delete obj.prop2); // true
    console.log(obj); //{prop1: "Prop1", prop3: "Prop3"}
    //console.log(delete obj); // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode. (com 'use strict')

    /* funções e argumentos sempre deve ser diferentes */
    
    function fun(a,a,) { // // (com 'use strict') não é permitido ter nomes de parametros duplicados
        console.log(a,b)
    }
    
})();



```

---
### 94 - Objeto String

```js
/* -- 94 - Objeto String -- */

/* length */
var jose = new String('José Malcher');
console.log(jose); // String {"José Malcher"}
console.log(jose.length); // 12
console.log('Texto qualquer'.length); // 14

/* charAt */
console.log(jose.charAt(0)); // j
console.log(jose.charAt(1)); // o
console.log(jose.charAt(2)); // s

console.log(jose[0]); // j
console.log(jose[1]); // o

/* concat */
console.log(jose.concat(' Malcher', ' Jr')); // José Malcher Malcher Jr

/* indexOf */
console.log(jose.indexOf('s')); // 2 (index)

/* lasIndexOf*/
console.log(jose.indexOf('s')); // 2 (index) busca de tras para frente

/* replace */
console.log(jose.replace('sé', 'zé')); // Jozé Malcher // faz apenas na primeira palavra localizada

/* slice */
console.log(jose.slice(2)); // sé Malcher

/* split */
console.log(jose.split(' ')); // (2) ["José", "Malcher"]  // quebra de acordo com o parâmetro

/* join */
// junta
console.log(jose.split(' ').join('-')); // José-Malcher


```

---
### 99 - Regex

- https://regex101.com/#javascript

```js
/* -- 99 - Regex -- */

var regex = /m/;
console.log(regex);

var texto = "Lorem ipsum fusce nostra senectus pellentesque etiam quam, fringilla platea sed turpis arcu congue vivamus .";

console.log(texto.match(/m/)); // ['m']
console.log(texto.match(/o/g)); // g = global | (3) ["o", "o", "o"]

```

### 100. Regex - parte 2
```js
/* -- 100. Regex - parte 2 -- */

var texto = "Lorem ipsum fusce nostra senectus pellentesque etiam quam, fringilla platea sed turpis arcu congue vivamus 1984 e 2018.";

console.log(texto.match(/\w/g)); // (91) ["L", "o", "r", "e", "m", "i", "p", "s", "u", "m", "f", "u", "s", "c", "e", "n", "o", "s", "t", "r", "a", "s", "e", "n", "e", "c", "t", "u", "s", "p", "e", "l", "l", "e", "n", "t", "e", "s", "q", "u", "e", "e", "t", "i", "a", "m", "q", "u", "a", "m", "f", "r", "i", "n", "g", "i", "l", "l", "a", "p", "l", "a", "t", "e", "a", "s", "e", "d", "t", "u", "r", "p", "i", "s", "a", "r", "c", "u", "c", "o", "n", "g", "u", "e", "v", "i", "v", "a", "m", "u", "s"]
//Retornou um array com todos os CARACTERES

console.log(texto.match(/1984/)); // ["1984", index: 107, input: "Lorem ipsum fusce nostra senectus pellentesque eti…illa platea sed turpis arcu congue vivamus 1984 .", groups: undefined]

/* \d digitos */
console.log(texto.match(/\d/g)); // (4) ["1", "9", "8", "4"]
console.log(texto.match(/\d\d/g)); // (2) ["19", "84"]
console.log(texto.match(/\d\d\d\d/g)); // ["1984"]

/* Classes de Caracteres - LISTAS */

console.log(texto.match(/da|de/g)); // null
console.log(texto.match(/on|an/g)); // ["on"]

console.log(texto.match(/[123]/g)); // [] = classe de caracteres // ["1"]
console.log(texto.match(/[se]/g)); // (21) ["e", "s", "s", "e", "s", "s", "e", "e", "s", "e", "e", "e", "s", "e", "e", "e", "s", "e", "s", "e", "s"]

console.log(texto.match(/(1984)|(2018)/g)); // (2) ["1984", "2018"]
console.log(texto.match(/[13456789]/g)); // (6) ["1", "9", "8", "4", "1", "8"] todos os digitos
console.log(texto.match(/[0-9]/g)); // (8) ["1", "9", "8", "4", "2", "0", "1", "8"]
console.log(texto.match(/[A-Z]/g)); // ["L"]

console.log(texto.match(/[A-Za-z0-9]/g)); // (100) ["L", "o", "r", "e", "m", "i", "p", "s", "u", "m", "f", "u", "s", "c", "e", "n", "o", "s", "t", "r", "a", "s", "e", "n", "e", "c", "t", "u", "s", "p", "e", "l", "l", "e", "n", "t", "e", "s", "q", "u", "e", "e", "t", "i", "a", "m", "q", "u", "a", "m", "f", "r", "i", "n", "g", "i", "l", "l", "a", "p", "l", "a", "t", "e", "a", "s", "e", "d", "t", "u", "r", "p", "i", "s", "a", "r", "c", "u", "c", "o", "n", "g", "u", "e", "v", "i", "v", "a", "m", "u", "s", "1", "9", "8", "4", "e", "2", "0", "1", "8"]

```

---

### 101 - Regex - parte 3

```js


var texto = "Lorem ipsum fusce de nostra Senectus pellentesque - etiam quam, Fringilla de platea sed turpis de arcu congue vivamus 1984 e 2018.";

console.log(texto.match(/[a-d]/g)); // (13) ["c", "a", "c", "a", "a", "a", "a", "a", "d", "a", "c", "c", "a"]
console.log(texto.match(/[\w\-]/g)); // todas as letras  e o traço // usando o scape

/* usando o replace */

console.log(texto.replace(/Lorem/, 'LOREM')); // LOREM ipsum fusce nostra Senectus pellentesque - etiam quam, Fringilla platea sed turpis arcu congue vivamus 1984 e 2018.

console.log(texto.replace(/de/g, 'DE'));//  Lorem ipsum fusce DE nostra Senectus pellentesque - etiam quam, Fringilla DE platea sed turpis DE arcu congue vivamus 1984 e 2018.

// $1 = captura do valor passado na expressão regular
console.log(texto.replace(/(de)/g, '--$1--')); // Lorem ipsum fusce --de-- nostra Senectus pellentesque - etiam quam, Fringilla --de-- platea sed turpis --de-- arcu congue vivamus 1984 e 2018.

console.log(texto.replace(/(d)(e)/g, '$1$1')); // Lorem ipsum fusce dd nostra Senectus pellentesque - etiam quam, Fringilla dd platea sed turpis dd arcu congue vivamus 1984 e 2018

console.log(texto.replace(/(d)(e)/g, '--$1$2--'));// Lorem ipsum fusce --de-- nostra Senectus pellentesque - etiam quam, Fringilla --de-- platea sed turpis --de-- arcu congue vivamus 1984 e 2018.

// $& = pega todas as capturas
console.log(texto.replace(/(d)(e)/g, '--$&--')); // Lorem ipsum fusce --de-- nostra Senectus pellentesque - etiam quam, Fringilla --de-- platea sed turpis --de-- arcu congue vivamus 1984 e 2018.

console.log(texto.replace(/(d)(e)/g, function () {
    console.log('ARGUMENTS', arguments);
}));
/* 3x
* Arguments(5) ["de", "d", "e", 95, "Lorem ipsum fusce de nostra Senectus pellentesque …ea sed turpis de arcu congue vivamus 1984 e 2018.", callee: ƒ, Symbol(Symbol.iterator): ƒ]
*
* // Lorem ipsum fusce undefined nostra Senectus pellentesque - etiam quam, Fringilla undefined platea sed turpis undefined arcu congue vivamus 1984 e 2018.
*
* */

console.log(texto.replace(/(d)(e)/g, function (capturaTotal, d, e) {
    return (d + e).toUpperCase();
}));
// Lorem ipsum fusce DE nostra Senectus pellentesque - etiam quam, Fringilla DE platea sed turpis DE arcu congue vivamus 1984 e 2018.

console.log('jose malcher'.replace(/(\w)/g, function (capTotal, letra) {
    return letra.toUpperCase(); // JOSE MALCHER
}));


console.log('jose malcher'.replace(/(\w)(\w)/g, function (capTotal, letra1, letra2) {
    return letra1.toUpperCase() + letra2.toLowerCase(); // JoSe MaLcHer
}));



```

### 105 - Regex - parte 4

```js
/* -- 102 - Regex - parte 4 -- */

var texto = "Lorem ipsum fusce de nostra Senectus pellentesque 2018 - etiam quam, Fringilla de platea sed turpis de arcu congue vivamus 1984 e 2018.";

// Espaço em branco \s
console.log(texto.match(/\s/g)); // Array(21)

// quebra de linha \n
console.log(texto.match(/\n/g)); // null

// tabulação \t
console.log(texto.match(/\t/g)); // null

// qualquer caracter exceto quebra de linha
console.log(texto.match(/./g)); // (130) ["L", "o", "r", "e", "m", " ", "i", "p", "s", "u", "m".......

// repetidores
console.log(texto.match(/...../));      //["Lorem", index: 0, input: "Lorem ipsum fusce de nostra Senectus pellentesque …ea sed turpis de arcu congue vivamus 1984 e 2018.", groups: undefined]
console.log(texto.match(/\w\w\w\w\w/)); //["Lorem", index: 0, input: "Lorem ipsum fusce de nostra Senectus pellentesque …ea sed turpis de arcu congue vivamus 1984 e 2018.", groups: undefined]

console.log(texto.match(/\d\d\d\d/)); // ["1984",...

console.log(texto.match(/\d\d\d\d\s-\s/)); // ["2018 - "

```

---
### 106 - Regex - Negação

```js
/* -- 106 - Regex - Negação -- */

var texto = "Lorem ipsum fusce de nostra Senectus pellentesque 2018 - etiam quam, Fringilla de platea sed turpis de arcu congue vivamus 1984 e 2018.";
//negação [^abc]
console.log(texto.match(/[^aeiou]/g));
// (93) ["L", "r", "m", " ", "p", "s", "m", " ", "f", "s", "c", " ", "d", " ", "n", "s", "t", "r", " ", "S", "n", "c", "t", "s", " ", "p", "l", "l", "n", "t", "s", "q", " ", "2", "0", "1", "8", " ", "-", " ", "t", "m", " ", "q", "m", ",", " ", "F", "r", "n", "g", "l", "l", " ", "d", " ", "p", "l", "t", " ", "s", "d", " ", "t", "r", "p", "s", " ", "d", " ", "r", "c", " ", "c", "n", "g", " ", "v", "v", "m", "s", " ", "1", "9", "8", "4", " ", " ", "2", "0", "1", "8", "."]


// Qualquer caractere, menos os alfanuméricos \W (upcase)
console.log(texto.match(/\W/g));
// (25) [" ", " ", " ", " ", " ", " ", " ", " ", "-", " ", " ", ",", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "."]

// qualquer caractere menos os digitos \D  (upcase)
console.log(texto.match(/\D/g)); // (123) ["L", "o", "r", "e", "m", " ", .....

// Qualquer caractere, menos espeços em branco \S (upcase)
console.log(texto.match(/\S/g)); // (113) ["L", "o", "r", "e", "m", "i", "p", "s", "u", "m", "f", "u", "s", "c", "e", "d", "e", "n", "o", "s", "t", "r", "a", "S", "e", "n", "e", "c", "t", "u", "s", "p", "e", "l", "l", "e", "n", "t", "e", "s", "q", "u", "e", "2", "0", "1", "8", "-", "e", "t", "i", "a", "m", "q", "u", "a", "m", ",", "F", "r", "i", "n", "g", "i", "l", "l", "a", "d", "e", "p", "l", "a", "t", "e", "a", "s", "e", "d", "t", "u"

var texto2 = "Lorem 123456789 ipsum fusce de nostra Senectus pellentesque 2018 - etiam quam, Fringilla de platea sed turpis de arcu congue vivamus 1984 e 2018.";
/* Repetidores */
// {n, m}
// intervalo - item anterior ao menos n vezes, e no máximo m vezes
console.log(texto.match(/[\d{2,4}]/g)); // (13) ["2", "0", "1", "8", ",", "1", "9", "8", "4", "2", "0", "1", "8"]




```


---
### 107 - Regex - Repetidores

```js
/* -- 107 - Regex - Repetidores -- */

var texto = "Lorem 123456789 ipsum fusce de nostra Senectus pellentesque 2018 - etiam quam, Fringilla de platea sed turpis de arcu congue vivamus 1984 e 2018.";

// {n, } n ou mais
console.log(texto.match(/[\d{4,}]/g)); // (22) ["1", "2", "3", "4", "5", "6", "7", "8", "9", "2", "0", "1", "8", ",", "1", "9", "8", "4", "2", "0", "1", "8"]

// {n} item anterior exatamente n vezes
console.log(texto.match(/[\d{4}]/g)); // (21) ["1", "2", "3", "4", "5", "6", "7", "8", "9", "2", "0", "1", "8", "1", "9", "8", "4", "2", "0", "1", "8"]

// ? opcional - zero ou uma ocorrência do item anterior
console.log(texto.match(/[\d\s?]/g));
//(44) [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", " ", " ", " ", " ", " ", " ", "2", "0", "1", "8", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "1", "9", "8", "4", " ", " ", "2", "0", "1", "8"]

// + uma ou mais ocorrências do item anterior
console.log(texto.match(/\w+/g));
// (23) ["Lorem", "123456789", "ipsum", "fusce", "de", "nostra", "Senectus", "pellentesque", "2018", "etiam", "quam", "Fringilla", "de", "platea", "sed", "turpis", "de", "arcu", "congue", "vivamus", "1984", "e", "2018"]

// * uma ou mais ocorrência do item anterior
console.log(texto.match(/\w*/g));
// (50) ["Lorem", "", "123456789", "", "ipsum", "", "fusce", "", "de", "", "nostra", "", "Senectus", "", "pellentesque", "", "2018", "", "", "", "etiam", "", "quam", "", "", "Fringilla", "", "de", "", "platea", "", "sed", "", "turpis", "", "de", "", "arcu", "", "congue", "", "vivamus", "", "1984", "", "e", "", "2018", "", ""]

// Prática https://regex101.com/#javascript
/*--->>  https?:\/\/[^.]\w+[.\w]+[\/]?\w+[\/]? // Exemplo simples (precisa de melhorias)
https://josemalcher.net/sobre_josemalcher/
https://josemalcher
https:josemalcher
http://qualquersite.com.br.xyz
*
* */
// Para Email: [\w+]+@\w+\.\w+.?([\w{2}])?

/*
* QUeryString  =  ?s=teste?&b=parametro&c=param2
*
*---->  var queryString = ?s=teste?&b=parametro&c=param2;
* ex: queryString.replace([?&](\w+)=(\w+), function(regex,key,value){
*   console.log(key,value); // s=teste | b=......
* })
*
* */
```

---
### 111 - Conhecendo outros símbolos usados na Regex
```js
/* -- 111 - Conhecendo outros símbolos usados na Regex -- */

var texto = "<h2>Lorem 123456789 ipsum fusce de nostra Senectus</h2> pellentesque 2018 - etiam quam, Fringilla de platea sed turpis de arcu congue vivamus 1984 e 2018.";

// inicio de String ^ (representa o inicio)
console.log(texto.match(/^</g)); // ["<"]

//represetnta o fim da string $
console.log(texto.match(/\.$/g)); // ["."]

console.log(texto.match(/^<.+\.$/g)); // ["<h2>Lorem 123456789 ipsum fusce de nostra Senectus…ea sed turpis de arcu congue vivamus 1984 e 2018."]

console.log(texto.match(/(^<).+(\.$)/g)); // ["<h2>Lorem 123456789 ipsum fusce de nostra Senectus…ea sed turpis de arcu congue vivamus 1984 e 2018."]

// Flag m multiline
console.log(texto.match(/t/gim)); // (6) ["t", "t", "t", "t", "t", "t"]

console.log(texto.match(/(^<).+(>$)/gm)); // exemplo de paragrafos em html <p>texto</p>
// m -> pega(match) com os dados que estão em linhas como tags html!

var texto2 = "<h2>Lorem 123456789 ipsum fusce de nostra Senectus</h2> <p>pellentesque 2018 - etiam quam, Fringilla de</p>";
// ? Repetição não gulosa( se usado apos repetidores)

console.log(texto2.match(/(<\w+>).+?(<\/\w+>)/g));
//(2) ["<h2>Lorem 123456789 ipsum fusce de nostra Senectus</h2>", "<p>pellentesque 2018 - etiam quam, Fringilla de</p>"]

// Somente agrupamento, sem capturar (?:)
var texto3 = "julho e junho";
console.log(texto3.match(/ju(?:n|1)ho/g)); // ["junho"]


// Referencia dentro de regex \1, \2
console.log(texto2.match(/<(\w+)>.+<\/(\1)>/g)); // (2) ["<h2>Lorem 123456789 ipsum fusce de nostra Senectus</h2>", "<p>pellentesque 2018 - etiam quam, Fringilla de</p>"]

```


---
### 112 - Métodos de string onde podemos usar regex
```js
/* -- 112 - Métodos de string onde podemos usar regex -- */

console.log('josemalcher'.match(/a/g)); // ["a"]

// .replac (regexp, string)
// .split
var cpf = '111.222.333-44';
console.log(cpf.split('.')); // (3) ["111", "222", "333-44"]
console.log(cpf.split(/\D/g)); // (4) ["111", "222", "333", "44"]

//.search
console.log(cpf.search(/\./)); // 3

```


---
### 113 - o objeto RegExp()

```js
/* -- 113 - o objeto RegExp() -- */

// contrutor
var regex = new RegExp('jose');
console.log(regex); // /jose/

regex = new RegExp('\\.'); // para fazer escape do regex

// metodo .test()
// metodo .exec()
```

---
### 116 - Js no browser - Selecionar elementos no DOM
```js
/* -- 116 - Js no browser - Selecionar elementos no DOM -- */

(function (win,doc) {
    'use strict';

    //console.log(win); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
    function Funcao1(number) {
        return number * 2;
    }

    console.log(Funcao1(10)); // 20

    if (win === window)
        console.log('win é igual a window');// win é igual a window

    window.alert('alert!');
    alert('alert!');
    //prompt('Pergunte...');

    if (prompt('Pergunte...'))
        console.log('resposta ok'); // resposta ok
    else
        console.log('resposta não ok');
    console.log('sempre aqui!'); // sempre aqui!

    /* -- 117 - Js no browser Parte 2 - Selecionar elementos no DOM -- */

    var name = prompt('Qual seu nome');
    if (name) {
        console.log('Olá', name); // Olá Jose
    } else {
        console.log('Não respondeu!');
    }

    var del = confirm('Deseja apagar');
    if (del) {
        console.log('Excluído com sucesso', del); // Excluído com sucesso true
    }else{
        console.log('Ação cancelada!',del);
    }

    console.log(doc.getElementsByClassName('my-link')); // HTMLCollection(3) [a.my-link, a.my-link, a.my-link]
    console.log(doc.getElementsByTagName('a')); // HTMLCollection(3) [a.my-link, a.my-link, a.my-link]


/* -- 118 - Js no browser Parte 3 - Selecionar elementos no DOM -- */



    /* -- 118 - Js no browser Parte 3 - Selecionar elementos no DOM -- */

    //var $input = doc.getElementsByName('username');  // [input]

    var $inputs = doc.getElementsByTagName('input');
    //  HTMLCollection(2) [input#username, input, username: input#username, passwird: input]
    console.log($inputs);
    console.log($inputs.length); // 2

    // Seleção estaticos
    // querySelector() - pega o primeiro que encontrar
    // querySelectorAll() - pega todas as tags

    //$inputs.document.querySelectorAll('input'); // sempre eles para selecionar elementos!
    $inputs = document.querySelectorAll('[type="text"]'); // NodeList(2) [input#username, input#username2]
    console.log($inputs);

    //pegar pela class
    var $inputss = document.querySelectorAll('.input');
    console.log($inputss); // NodeList(2) [input#username.input, input#username2.input]
    var $inputss = document.querySelectorAll('#username');
    console.log($inputss); // NodeList [input#username.input]


})(window, document);





```

---
### 119 Js no browser - Formulário e eventos

```js
/* -- 119 - Js no browser - Formulário e eventos -- */

(function (win, doc) {
    'use strict';

    var $inputUserName = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');
    console.log($inputUserName.value, $inputPassword.value); // josemalcher 123456

    $inputUserName.value = "José Malcher Jr.";
    $inputPassword.value = "!@#!@#!@#!@#";

    console.log($inputUserName.value, $inputPassword.value); // José Malcher Jr. !@#!@#!@#!@#

    // Introdução a Eventos
    $button.addEventListener('click', function (event) {
        event.preventDefault(); // remove comportamento padrão

        console.log('click no botão'); // click no botão
    }, false);

    $inputPassword.addEventListener('click', function (event) {
        alert('clicou em password... regras: ta lta ');

    },false);

})(window, document);

```

---
### 123 - Sync vs async

```js
/* -- 123 - Sync vs async -- */

(function () {
/*    console.log(1);
    for( var i = 0 ; i < 10000 ; i++){
        console.log(i);
    }
    console.log('FIM');*/

    console.log('INICIO');
    document.addEventListener('click', function (event) {
        console.log('clicou no documento' +
            '')
    },false);
    console.log('FIM');
   /* INICIO
    FIM
    clicou no documento
    */
})();


```

---
### 124 - setTimeout

```js
/* -- 124 - setTimeout -- */
(function (win, doc) {
    'use strict';

    console.log('INICIO');
        setTimeout(function () {
            console.log('Executou  o setTimeout');
        },3000); // 3 segundos
    console.log("FIM!");
    /*
        INICIO
        FIM!
        Executou  o setTimeout
    */

    // setInterval()
    console.log('INICIO');
    setInterval(function () {
        console.log('Executou  o setInterval'); // Executou  o setInterval fica executando no intervalo
    },30000); // 3 segundos
    console.log("FIM!");

    var counter = 0;
    function timer() {
        console.log('timer', counter++);
        if (counter > 10) {
            return;
        }
        setTimeout(timer, 1000);
    }
    timer();


})(window, document);

```

---
### 125 - setTimeout vs setInterval

```js
/* -- 125 - setTimeout vs setInterval -- */

(function (win, doc) {
        'use strict';
        var counter = 0;
        /*function timer() {
            console.log('timer', counter++);
            if (counter > 10) {
                return;
            }
            setTimeout(timer, 1000); // melhor perfomace
        }*/

        /*function timer() {
            console.log('timer', counter++);
        }
        setInterval(timer, 1000);*/

        //
        /*function timer() {
            console.log('timer', counter++);
            if (counter > 20) {
                return;
            }
            setTimeout(timer, 1000); // melhor perfomace
        }
        timer();*/
        var $button = doc.querySelector('[data-js="button"]');
        var temporizador;
        function timer() {
            console.log('timer', counter++);
            if (counter > 20) {
                return;
            }
            temporizador = setTimeout(timer, 1000);
        }
        timer();

        $button.addEventListener('click', function () {
            clearTimeout(temporizador); // clearInterval(id)
        }, false);
    }
)(window, document);

```

---
### 128 - Propriedades e métodos de funções

```js
/* 128 - Propriedades e métodos de funções */

(function () {
    'use strict';

    function minhaFuncao(a, b, c, d, e, f) {
        return 'oi';
    };

    var arr = [1, 2, 3, 4, 5];

    console.log(minhaFuncao.length); //6
    console.log(arr.length); // 5
    console.log(arr.toString()); // 1,2,3,4,5

    console.log(minhaFuncao.toString()); //  function minhaFuncao(a,b,c,d,e,f) { return 'oi'; }
    console.log(minhaFuncao.call()); // oi

    console.log(minhaFuncao.call()); // oi

    //Exemplo de uso do call()
    function funcaoCall(a, b, c, d) {
        console.log(this.lastname);
    }
    var obj = {lastname:'Malcher jr'};
    var obj2 = {lastname:'M. jr'};

    funcaoCall.call(obj); // Malcher jr
    funcaoCall.call(obj2); // M. jr

})();

```

### 128 - Propriedades e métodos de funções - Parte 2

```js
// 128 - Propriedades e métodos de funções - Parte 2

    function funcaoCao2(a, b, c) {
        console.log(this.lastname,a,b,c);
    }
    var obj3 = {lastname:'Malcher jr'};
    funcaoCao2.call(obj3,'a','b','c'); // Malcher jr a b c
    funcaoCao2.call(funcaoCao2,'a','b','c'); // undefined "a" "b" "c"

    var arg = [1, 2, 3]; // passar de forma dinâmica .apply()
    funcaoCao2.apply(funcaoCao2,arg); // undefined 1 2 3

```

---
### 130 - Prototype

```js
/* 130 - Prototype */

(function () {
    'use strict';
    function MinhaFuncao(nome, sobrenone) {
        this.nome = nome;
        this.sobrenome = sobrenone;
        this.idade = 18; // valor padrão sempre 'fixo'
    }
    MinhaFuncao.prototype.NomeCompleto = function () {
        return this.nome + ' ' + this.sobrenome;
    }

    MinhaFuncao.prototype.idade = 33;

    var jose = new MinhaFuncao('José', 'Malcher jr.');

    MinhaFuncao.prototype.idade = 23;

    console.log(jose.NomeCompleto()); // José Malcher jr.
    console.log(jose.NomeCompleto()+ ' idade: '+ jose.idade); // José Malcher jr. idade: 18

})();


```

---
### 131 - Array-like e editorconfig

````js
/* 131 - Array-like e editorconfig */

(function () {
    'use strict';

    /*function minhaFuncao() {
        Array.prototype.forEach.call(arguments, function (item, index) {
            console.log(item);
        });
    }
        minhaFuncao(1, 2, 3, 4, 5); // 1 2 3 4 5
    */
    function minhaFuncao() {
        var result = Array.prototype.reduce.call(arguments, function (acumulado, atual,index) {
            return acumulado + atual;
        });
        console.log(result);
    }
    minhaFuncao(1, 2, 3, 4, 5); // 15

})();

````

---
### 135 - Debug

- https://developers.google.com/web/tools/chrome-devtools/?hl=pt-br

---
### 139 -  Modularização de código

Desafio 23 - Calculadora

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Desafio 23 - Calculadora</title>
</head>
<body>
<input type="text" readonly value="0" data-js="visor">
<div class="buttons-numbers">
    <button data-js="button-number" value="0">0</button>
    <button data-js="button-number" value="1">1</button>
    <button data-js="button-number" value="2">2</button>
    <button data-js="button-number" value="3">3</button>
    <button data-js="button-number" value="4">4</button>
    <button data-js="button-number" value="5">5</button>
    <button data-js="button-number" value="6">6</button>
    <button data-js="button-number" value="7">7</button>
    <button data-js="button-number" value="8">8</button>
    <button data-js="button-number" value="9">9</button>
</div>
<div class="operations">
    <button data-js="button-operation" value="+">+</button>
    <button data-js="button-operation" value="-">-</button>
    <button data-js="button-operation" value="x">x</button>
    <button data-js="button-operation" value="÷">÷</button>
    <button data-js="button-equal" value="="> =</button>
    <button data-js="button-ce" value="ce"> CE</button>

</div>
<script>
    (function (win, doc) {
        'use strict';

        var $visor = document.querySelector('[data-js="visor"]');
        var $buttonNumbers = doc.querySelectorAll('[data-js="button-number"]');
        var $buttonCE = doc.querySelector('[data-js="button-ce"]');
        var $buttonOperation = doc.querySelectorAll('[data-js="button-operation"]');
        var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

        /*$buttonNumbers.forEach(function (button) {
            console.log(button);
        })*/
        Array.prototype.forEach.call($buttonNumbers, function (button) {
            button.addEventListener('click', handleClickNumber, false);
        });

        function handleClickNumber() {
            $visor.value += this.value;
        }

        /* Operações */
        Array.prototype.forEach.call($buttonOperation, function (button) {
            button.addEventListener('click', handleClickOperation, false);
        });

        function handleClickOperation() {
            $visor.value = removeLastItemIfItIsAnOperator($visor.value);
            $visor.value += this.value;
        }

        function isLastItemAnOperation(number) {
            var operations = ['+', '-', 'x', '÷'];
            var lastItem = number.split('').pop();
            return operations.some(function (operator) {
                return operator === lastItem;
            });

        }

        /* Remove o ultimo item se ele for um operador */
        function removeLastItemIfItIsAnOperator(number) {
            if (isLastItemAnOperation(number)) {
                return number.slice(0, -1);
            }
            return number;
        }

        /* button CE */
        $buttonCE.addEventListener('click', handleClickCE, false);

        function handleClickCE() {
            $visor.value = 0;
        }

        /* operadores */
        $buttonEqual.addEventListener('click', handleClickEqual, false);

        function handleClickEqual() {
            $visor.value = removeLastItemIfItIsAnOperator($visor.value);
            var allValues = $visor.value.match(/\d+[+x÷-]?/g);
            $visor.value = allValues.reduce(function (accumulated, actual) {
                var firstValue = accumulated.slice(0, -1);
                var operator = accumulated.split('').pop();
                var lastValue = removeLastItemIfItIsAnOperator(actual);
                var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
                switch (operator) {
                    case '+':
                        return (Number(firstValue) + Number(lastValue)) + lastOperator;
                    case '-':
                        return (Number(firstValue) - Number(lastValue)) + lastOperator;
                    case 'x':
                        return (Number(firstValue) * Number(lastValue)) + lastOperator;
                    case '÷':
                        return (Number(firstValue) / Number(lastValue)) + lastOperator;
                }
            });
        }
    })(window, document)
</script>
</body>
</html>

```

---
### 147 - Javascript inline

```js
/* 147 - Javascript inline */

// <a href="javascript:bom()"> Bom </a>

// Eventos - https://developer.mozilla.org/en-US/docs/Web/Events

```

```html
<!doctype html>
<html lang="pt_br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Curso Javascript Ninja</title>
</head>
<body>

<!--<a href="javascript:" onclick="boom();">BOM!</a>-->
<a href="http://josemalcher.net">BOM!</a>

<script>
/*function boom() {
    alert('boom!');
}*/
var $a = document.querySelector('a');
$a.addEventListener('click', boom, false);
function boom(event) {
    event.preventDefault();
    alert('boom!');
}


</script>
</body>
</html>
```

---
### 148 - Eventos

```html
<body>

<div data-js="div">
    <a href="#" data-js="link">LINK <span data-js="span">SPAN</span></a>
</div>

<script src="js/148-Eventos.js"></script>
```

```js
/* 148 - Eventos */

(function () {
    'use strict'
    /*
    var $a = document.querySelector('[data-js="link"]');

    document.querySelector('[data-js="div"]').addEventListener('click', function (event) {
        alert('clicou na div');
    },false);
    $a.addEventListener('click', function (event) {
        event.preventDefault();
        alert('clicou no a');
    },false); // false = forma como o evento será capturado. Propaga os eventos a partir do filho->pai
    */

    // função generica:
    function on(element, event, callback) {
        document.querySelector(element).addEventListener(event, callback, false);
        // false = forma como o evento será capturado. Propaga os eventos a partir do filho->pai
        // quando true o evento começa pelo pai até chegar no alvo/filho
    }
    on('[data-js="link"]', 'click', function (event) {
        event.preventDefault();
        alert('Clicou no a');
    });
    on('[data-js="div"]','click', function () {
        alert("Clicou na DIV");
    });
    on('[data-js="span"]','click', function (){
        alert('Clicou no SPAN');
    })

})();



```


---

### 149 - Mais eventos por elementos

```js
/* 149 - Mais eventos por elementos */


(function () {
    'use strict'

    function on(element, event, callback) {
        document.querySelector(element).addEventListener(event, callback, false);
    }

    function off(element, event, callback) {
        document.querySelector(element).removeEventListener(event, callback, false);
    }

    function handleClick(event) {
        event.preventDefault();
        alert('Clicou no a');
    }

    on('[data-js="link"]', 'click', handleClick);
    off('[data-js="link"]', 'click', handleClick); //removendo

    on('[data-js="link"]', 'click', function (event) {
        event.preventDefault();
        alert('Novo evento de click no a');
    });
})();

```

```html
<div>
    <input type="text" data-js="input">
    <select  data-js="select" name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
</div>

```

```js
/*
    function handleClick(event) {
        event.preventDefault();
        alert('Clicou no a');
    }

    on('[data-js="link"]', 'click', handleClick);
    off('[data-js="link"]', 'click', handleClick); //removendo

    on('[data-js="link"]', 'click', function (event) {
        event.preventDefault();
        alert('Novo evento de click no a');
    });
    */
    on('[data-js="input"]', 'keydown', function (event) {
        console.log(this.value);
    });
    on('[data-js="select"]', 'change', function () {
        document.querySelector('[data-js="input"]').value = this.value;
    });

```

---
### 150 - DOM

```html
<!doctype html>
<html lang="pt_br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Curso Javascript Ninja</title>
</head>
<body>

<div class="main">
    <header class="main-header">
        <h1 class="main-header__title">Titulo da página</h1>
    </header>
    <section class="main-content">
        Texto 1
        <div class="entry">
            <p>
                Lorem Ipsum...
            </p>
        </div>
        texto 2
    </section>
    <footer class="main-footer">
        <small class="main-footer__copyright">
            2018 - Todos os direitos reservados
        </small>
    </footer>
</div><script src="js/150-DOM.js"></script>
<script>

</script>
</body>
</html>
```

```js
/* 150 - DOM */

// .parentNode

(function () {
    'use strict';

    var $main = document.querySelector('.main');
    console.log($main.parentNode); // .parentNode
    console.log($main.childNodes); // .childNodes // NodeList(7) [text, header.main-header, text, section.main-content, text, footer.main-footer, text]

    console.log($main.firstChild); // .firsChild // #text (quebra ou espaçamento)
    console.log($main.lastChild); // .lastChild // #text (quebra ou espaçamento)

    console.log($main.nextSibling); // .nextSibling // <script src="js/150-DOM.js"></script> (sem espaço)
    console.log($main.previousSibling); // .previousSibling // #text (sem os espaço, retorna null, não tem irmão)

})();

```

---

### 151 - DOM

```html
 <section class="main-content">
        Texto 1
        <!-- comentário -->
        <div class="entry">
            <p>
                Lorem Ipsum...
            </p>
        </div>
        texto 2
    </section>
```

```js
/* 151 - DOM */

(function () {
    'use strict';

    var $main = document.querySelector('.main');
    console.log($main.nodeType); // 1
    console.log($main.firstChild.nodeType); // 3
//  9 = Document
//  1 = Element
//  3 = Text
//  8 = Comments
// 22 = documentFragment

    var $main2 = document.querySelector('.main-content');

    // .nodeValue
    console.log($main2.firstChild.nodeValue); //    Texto 1
    console.log($main2.childNodes); //   NodeList(5) [text, comment, text, div.entry, text]

    console.log($main2.firstChild.nextSibling.nodeValue); // comentário
    console.log($main2.firstChild.nextSibling.nodeName); // #comment
    console.log($main2.nodeName); // SECTION

    // https://caniuse.com/

})();
```

### 152 - DOM

```html
<div class="main" data-js="main">
    <header class="main-header">
```

```js
/* 152 - DOM */

(function () {
    'use strict';

    // children
    var $main = document.querySelector('.main');
    console.log($main.childNodes); // NodeList(7) [text, header.main-header, text, section.main-content, text, footer.main-footer, text]
    console.log($main.children); // HTMLCollection(3) [header.main-header, section.main-content, footer.main-footer]

    // .firstElementChild (pegar somente elementos)
    console.log($main.firstElementChild); // <header class="main-header"><h1 class="main-header__title">Titulo da página</h1></header>
    console.log($main.nextElementSibling); // <script src="js/152-DOM.js"></script>

    // .childElementCount
    console.log($main.childElementCount); // 3 (filhos)
    console.log($main.children.length); // 3 (filhos)

    /* Métodos */
    // .hasAttribute(name)
    console.log($main.hasAttribute('data-js')); // true
    console.log($main.hasAttribute('id')); // false

    // .hasAttributes() 
    console.log($main.hasAttributes()); // true

})();


```

### 153 - DOM

```js
/* 153 - DOM */

(function () {
    'use strict';

    /* Métodos */
    // . appendChild(child) - adiciona um filho
    var $main = document.querySelector('.main');

    var $mainContet = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    console.log($mainContet.appendChild($mainHeader)); //mover mainHeader para o final

    // .insetBefore(node, beforeWhon) - insere antes
    var $firstText = $mainContet.firstChild;
    $mainContet.insertBefore($mainHeader, $firstText);

    // .cloneNode(boolean)
    var $cloneMainHeader = $mainHeader.cloneNode(true); // copia com conteúdo  = true
    $mainContet.appendChild($cloneMainHeader);
    console.log(document.querySelectorAll('.main-header').length); // 2

    // .hasChildNodes() - vefica se o elemento tem algum node filho
    var $h1 = $mainHeader.firstElementChild;
    console.log($h1.hasChildNodes()); // true

})();





```

### 154 - DOM

```js
/* 154 - DOM */

(function () {
    'use strict';

    /* Métodos */

    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $h1 = $mainHeader.firstElementChild;
    var $mainFooter = document.querySelector('.main-footer');
    var $clonemainHeader = $mainHeader.cloneNode(true);

    // .removeChild(child)
    //$mainHeader.removeChild($h1);

    // .replaceChild(new, old)
    //$main.replaceChild($clonemainHeader, $mainFooter);

    // document.createTextNode(text)
    var newTextNode = document.createTextNode('createNodeText-Metodo');
    //$main.appendChild(newTextNode);

    // document.createElement(tagName)
    var $newP = document.createElement('p');
    $newP.appendChild(newTextNode);
    $main.appendChild($newP);

})();

```

### 155 - DOM - Atributos

```js
/* 155 - DOM - Atributos */

(function () {
    'use strict';

    var $main = document.querySelector('.main');
    console.log($main.id); // main-id
    console.log($main.className); // main

    // getter e setter
    console.log($main.id = 'main-id-arroz'); // main-id-arroz (settando o valor)

    console.log($main.getAttribute('class')); // main
    console.log($main.getAttribute('data-js')); // main

    console.log($main.setAttribute('data-js', 'main-data-js')); // mudar o valor do atributo

})();


```

---
### 158 - documentFragments

```js
(function () {
    'use strict';

    var fragment = document.createDocumentFragment(); 
    var childP = document.createElement('p');
    var textChilp = document.createTextNode('Texto deontro da tag P');
    childP.appendChild(textChilp);
    fragment.appendChild(childP);

    document.body.appendChild(fragment);

})();
```

---
### Dicas de performance

---
### Eventos para carregamento da tela

---
### Copiar arrays

---
### Pegar tipo correto de objetos

---
### Ajax - método GET

---
### try / catch

---
### Tratamento de dados via entrada do usuário

---
### Module Pattern

---
### Closures

---
### Exportar módulo para usar em outros módulos

---
### instanceof

---
### element.classList

---
### innerHTML, outerHTML e insertAdjacentHTML

---
### Objeto Date

---
### Objeto Math

---
### Ajax - outros verbos

---
### Backend para mostrar como ele recebe os dados do client

---
### Enviar dados via Ajax

---
### Enviar cabeçalhos via Ajax

---
### Abortar requisição Ajax

---
### Testes (TDD, BDD)

---
### Ferramentas para escrever testes

---
### Aula bônus

---
