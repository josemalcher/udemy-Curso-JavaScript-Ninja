/* 130 - Prototype */

(function () {
    'use strict';
    function MinhaFuncao(nome, sobrenone) {
        this.nome = nome;
        this.sobrenome = sobrenone;
        this.idade = 18; // valor padrão sempre 'fixo'
    }
    MinhaFuncao.prototype.NomeCompleto = function () {
        return this.nome + ' ' + this.sobrenome;
    }

    MinhaFuncao.prototype.idade = 33;

    var jose = new MinhaFuncao('José', 'Malcher jr.');

    MinhaFuncao.prototype.idade = 23;

    console.log(jose.NomeCompleto()); // José Malcher jr.
    console.log(jose.NomeCompleto()+ ' idade: '+ jose.idade); // José Malcher jr. idade: 18




})();

