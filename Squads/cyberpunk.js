/*
Requisitos para rodar cyberpunk
Requisitos para rodar cyberpunk NO PC
Perguntar a memória ram do PC, sendo menor que 8Gb, o jogo não consegue rodar e acima de 16 ele roda em 4k
Perguntar o armazenamento, tem que ser maior de 70, se não, não roda
Verificar se o DIRECTX é o 12 ou não
Verificar se a placa de vídeo é equivalente ou superior a: Nvidia GeForce GTX 780 3GB ou AMD Radeon RX 470
** EM CASO DE RESPOSTAS NEGATIVAS, no final do programa apresentar os problemas para ele não rodar;
** EM CASO DE TODAS AS RESPOSTAS POSITIVAS, no final do programa apresentar mostrar que o PC roda o jogo.
*/
const ler = require("prompt-sync")();
console. log(" ===== REQUISITOS PARA CYBERPUNK 2077 ===== ")
var ram = Número(ler("Qual é a sua memória ram?"));
var armazenamento = Número(ler("Quanto de espaço no seu armazenamento?"));
var directx = (ler("DirectX 12? [S] ou [N]"))
var placa = (ler("Placa de vídeo superior ou equivalente a Nvidia GeForce GTX 780 3GB ou AMD Radeon RX 470 [S] ou [N]"))

se (ram >= 8)console. log("\nMemória ram compátivel.")
outro console. log("\nPouca memória, não é compátivel.");
se (ram >= 16)console. log("Obs, mémoria compátivel com 4k.")
se (armazenamento >= 70)console. log("Armazenamento suficiente".)
outro console. log("Armazenamento insuficiente".);
se (placa == "S")console. log("Placa de vídeo: Ok")
outro console. log("Placa de vídeo incompátivel");
se (directx == "S")console.  log("DirectX correto!")
outro console. log("DirectX inválido, favor baixar o 12.")
se (ram >=8 && armazenamento >= 70 && directx == "S")console. log("Apto para rodar cyberpunk 2077")
outro console. log("Devido a problemas descritos, não é possível rodar Cyberpunk.")