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
