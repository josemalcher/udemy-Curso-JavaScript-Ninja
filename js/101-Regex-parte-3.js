

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


