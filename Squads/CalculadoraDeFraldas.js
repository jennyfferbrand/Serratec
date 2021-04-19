/*Fraldas
O programa pergunta qual tamanho de fralda o(a) pequeno(a) eua, sua idade e fraldas eua em média, por dia.
O mesmo vai devolver, em média, quantas fraldas desse tamanho ele(a) vai usar, e quantas fraldas em média, vai usar até o desfralde.
*/
const ler = require("prompt-sync")();

console. Log("============== CALCULADORA DE FRALDAS =============" );

let tam = ler("Olá! Para começar, diga-me: Qual tamanho da fralda de seu(sua) pequeno(a)? ");

deixe idade = Número("Muitobom! E quantos meses ele(a) tem? "));

vamos fraldas = Número("Quantas fraldas, aproximadamente, ele(a) usa por dia? " ));

deixar resultado

se (tam = "RN") && (idade <= 2) && (fraldas <= 9)){
    fraldas = 8 * 31 - fraldas 
    console. log("Ele(a) ainda vai usar, média ", fraldas, "até trocar para tamanho P.");
    resultado = 4110 - fraldas 
    console. log("Ainda temos um looongo caminho! Ele(a) ainda usará, em média ", resultado, "fraldas até seu desfralde. Boa sorte! :)");
}
mais se ((tam = "P") && (idade <= 3) && (fraldas <= 9)){
    fraldas = 9 * 31 - fraldas 
    console. log("Ele(a) ainda vai usar, média ", fraldas, "até trocar para o tamanho M");
    resultado = 3630 - fraldas
    console. log("Ainda temos um looongo caminho! Ele(a) ainda usará, em média ", resultado, "fraldas até seu desfralde. Boa sorte! :)");
}
mais se (tam = "M") && (idade <= 6) && (fraldas <= 7)){
    fraldas = 7 * 31 - fraldas 
    console. log("Ele(a) ainda vai usar, média ", fraldas, "até trocar para o tamanho G".);
    resultado = 2550 - fraldas
    console. log("Ainda temos um looongo caminho! Ele(a) ainda usará, em média ", resultado, "fraldas até seu desfralde. Boa sorte! :)");
}
mais se ((tam = "G") && (idade <= 18) &amp; (fraldas <= 6)){
    fraldas = 6 * 31 - fraldas 
    console. log("Ele(a) ainda vai usar, média ", fraldas, "até trocar para o tamanho G".);
    resultado = 1050 - fraldas
    console. log("Ainda temos um looongo caminho! Ele(a) ainda usará, em média ", resultado, "fraldas até seu desfralde. Boa sorte! :)");
}
mais se ((tam = "EG") && (idade <= 24) && (fraldas <= 5)){
    console. log("Mas guenta o coração!! Já está acabando!!");
}