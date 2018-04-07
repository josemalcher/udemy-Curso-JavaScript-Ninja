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
