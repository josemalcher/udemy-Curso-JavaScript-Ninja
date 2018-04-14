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



