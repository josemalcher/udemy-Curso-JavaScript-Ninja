/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var varArray = [1, 2, 3, 4, 5];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function varArrayFuncao(varArray) {
    return varArray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(varArrayFuncao(varArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function funcaoArray(arr, num) {
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrCinco = [false, {b: 1}, 3, true, 'cinco'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(funcaoArray(arrCinco, 0));
console.log(funcaoArray(arrCinco, 1));
console.log(funcaoArray(arrCinco, 2));
console.log(funcaoArray(arrCinco, 3));
console.log(funcaoArray(arrCinco, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeBook) {
    var todosLivros = {
        "Livro 01": {
            qntPaginas: 500,
            autor: 'Autor 01',
            editora: 'Ed. 01'
        },
        "Livro 02": {
            qntPaginas: 100,
            autor: 'Autor 02',
            editora: 'Ed. 02'
        },
        "Livro 03": {
            qntPaginas: 444,
            autor: 'Autor 03',
            editora: 'Ed. 02'
        }
    }
    /*if(!nomeBook){
        return todosLivros;
    }
    return todosLivros[nomeBook];*/
    return !nomeBook ? todosLivros : todosLivros[nomeBook];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var nomeLivro  = 'Livro 02';
console.log('O '+nomeLivro+' tem '+ book(nomeLivro).qntPaginas + '  páginas!')
console.log('O '+nomeLivro+' tem '+ book(nomeLivro)['qntPaginas'] + '  páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nomeLivro  = 'Livro 03';
console.log('O '+nomeLivro+' tem o '+ book(nomeLivro).autor + '  como Autor!')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nomeLivro  = 'Livro 01';
console.log('O '+nomeLivro+' tem a '+ book(nomeLivro).editora + '  como Editora!')

