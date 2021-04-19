/*Crie um jogo em que você vai ter que escolher entre 3 
armas para enfrentar o grande dragão malvado "Progradragão". Como armas são uma espada,
uma faca e um sapato. Só uma dessas opções que vai garantir a vitória contra o dragão Antes de começar o jogo, 
o mesmo vai pedir o nome do herói, acrescente o nome do herói nos textos do jogo.
*/

const ler = require("prompt-sync")();

console. log("Olá, bem vindo ao jogo PROGRADRAGÃO!");
console. log("➤➤➤➤➤,.████▀█".);
console. log("➤➤➤,█████████████████".);
console. log("█████..);
console. log("███████...,⁄,.);
console. log("████████████████████▀▀");
console. log("Aqui você vera um mundo completamente diferente!");
var nome= ler("Qual seu nome?");
console. log(nome + " está quase na final do jogo, só falta matar o dragão!");
console. log("Lembre-se só existe apenas uma resposta correta, você terá duas chances!");
console. log("Qual arma você escolhe para matar o dragão?");
var arma= ler("DGITE 1 = Espada, DIGITE 2 = Faca, DIGITE 3= Sapato");


se (arma == "1") {
    console. log("Você matou o PROGRADRAGÃO".);
    console. log("Parabéns", + nome +" ganhou ojogo!");
    
} mais {
    arma = ler ("Escolha errada", + nome + ", você tem mais uma chance tente novamente!");

    se (arma=="1") {
        console. log("Você matou o PROGRADRAGÃO".);
        console. log("Parabéns", + nome +" ganhou ojogo!")
    }
    mais  
    console. log("ESCOLHA ERRADA "+nome+ "\n GAME OVER");
}