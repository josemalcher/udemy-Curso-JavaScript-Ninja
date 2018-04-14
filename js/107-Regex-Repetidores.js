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