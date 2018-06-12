/*
Crie uma função com as seguintes características:
    1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
    3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

/*
function tresArgs(a,b,c){
    if (a === undefined || b === undefined || c === undefined) {
        console.log('preencha todos os valores corretamente');
    }else{
        console.log( a * b ) + 2;
    }
}
tresArgs(2, 4);
tresArgs(4);
tresArgs(3, 4, 10);
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
 5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function tresArgs(a, b, c) {
    if (a !== undefined && b === undefined && c === undefined) {
        return a;
    }else if (a !== undefined && b !== undefined && c === undefined) {
        return  a + b;
    }else if(a !== undefined && b !== undefined && c !== undefined){
        return (a + b) / c;
    }else if(a === undefined && b === undefined && c === undefined){
        return false;
    }else{
        return null;
    }
}

tresArgs();
tresArgs(2);
tresArgs(2, 5);
tresArgs(2, 5);
tresArgs(2, 5, 2);
tresArgs(2, 5, 2, 2);



// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.