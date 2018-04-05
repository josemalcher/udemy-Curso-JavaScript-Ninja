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