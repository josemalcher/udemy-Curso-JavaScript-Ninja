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

