const ler = require("prompt-sync")();

console.log("======= LEILAFLIX =======");
var genero = Number(ler("Escolha o genêro do filme: [1] Terror [2] Drama: "));

if (genero == 1){
let ult = Number(ler("Entre os filmes de terror [1] Invocação do Mal e [2] It, qual você prefere?: "));
switch(ult){
    case 1: mensagem = "(76%) Annabelle: este filme pode atender sua sede de terror!"; break
    case 2: mensagem = "(85%) It 2: este filme pode atender sua sede de terror!"; break
}
console.log(mensagem);}

if (genero == 2){
let ult2 = Number(ler("Entre os filmes de drama [1] O Homem Duplicado e [2] Dúvida, qual você prefere?: "));
switch(ult2){
    case 1: mensagem = "(88%) Sobre Meninos e Lobos: este filme pode atender sua sede de terror!"; break
    case 2: mensagem = "(89%) Fragmentado: este filme pode atender sua sede de terror!"; break
}
console.log(mensagem);}