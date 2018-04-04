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
### Array - método "push()" e Loop "for"

---
### A importância de nomear funções

---
### Introdução à Functional Programming

---
### Escopo de funções

---
### Hoisting

---
### IIFE - Immediately Invoked Function Expression

---
### Wrapper Objects

---
### typeof

---
### Laços (Loops)

---
### Saltos

---
### Criação de objetos

---
### Criação de objetos - Object.create

---
### Métodos de objeto

---
### Array - Métodos

---
### Array - toString, concat, unshift, shift

---
### slice e splice

---
### forEach, every, some

---
### map, filter

---
### reduce() e reduceRight()

---
### indexOf(), lastIndexOf() e isArray()

---
### JS no browser

---
### this

---
### Objeto arguments

---
### use strict - Criação de variáveis sem o "var"

---
### use strict - Uso do width e global this === undefined

---
### O operador delete, objetos e funções

---
### Objeto String

---
### Regex

---
### Regex - Negação

---
### Regex - Repetidores

---
### Conhecendo outros símbolos usados na Regex

---
### Métodos de string onde podemos usar regex

---
### o objeto RegExp()

---
### Js no browser - Selecionar elementos no DOM

---
### Js no browser - Formulário e eventos

---
### Sync vs async

---
### setTimeout

---
### setTimeout vs setInterval

---
### Propriedades e métodos de funções

---
### Prototype

---
### Array-like e editorconfig

---
### Debug

---
### Modularização de código

---
### Javascript inline

---
### Eventos inline

---
### Remover eventos

---
### Eventos como métodos

---
### DOM

---
### documentFragments

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
