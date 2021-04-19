/*O teatro do monstro permite a entrada de até 5 pessoas;
A peça só começa após atingir a lotação máxima;
Nesta peça é proibida a entrada de menores de 16 anos;
O gerente quer saber quantos são homens e são mulheres antes da peça começar.
*/
const ler = require("prompt-sync")();
var LIMITE = 5;
var total = 0;
var H = 0;
var M = 0;

enquanto (total < LIMITE){
cliente = (ler("Antes de entrar no teatro, é homem ou mulher? [H] ou [M]"))
idade = Número("Qual é a sua idade:"));
se (idade < 16){
console. log("Não é autorizado a entrada para menores de 16");}
mais {

se(cliente == "H")
    H++
mais
    m++
    total++
}
}

console. log("Acabou os ingressos! Homens:", H, "e", "Mulheres:", M);