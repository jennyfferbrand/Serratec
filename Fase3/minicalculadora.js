// Mini calculadora

const ler= require ("prompt-sync")();

var n1 =parseInt(ler("Digite um número:"));
var n2 =parseInt(ler("Digite outro número:"));

var soma= n1 + n2
var subtracao= n1 - n2
var multiplicacao= n1 * n2
var divisao= n1 / n2

console.log("Soma = " ,soma,);
console.log("Subtração = ",subtracao,);
console.log("Multiplicação = " ,multiplicacao,);
console.log("Divisão = " ,divisao,);