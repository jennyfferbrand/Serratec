const ler = require ("prompt-sync")();

console.log("== Banco de Sague ==");
console.log("[Digit sim ou não nas restrições a seguir]");

//Entrada

var idade = ler("Idade abaixo de 16 ou acima de 69 anos:")
var peso = ler("Pesa menos de 50kg: ");
var hepatite = ler("Portador de Hepatite: ");
var malaria = ler("Já teve Malária: ");
var recente = ler("Fez doação recente:");

//Processamento

var resultado =!(
idade == "Sim" ||
peso == "Sim" ||
hepatite == "Sim" ||
malaria == "Sim" ||
recente == "Sim"
);

//Saídas 

console.log("[Resultado da triagem]");
console.log("Pode doar sangue? " ,  resultado);

