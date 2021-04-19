/*
    hamburgueria
  
 1. Monte seu hambúrguer
  2. entrega (entregar ou buscar na loja)
 3. pergunta se molho deseja
  4. refrigerante
  5. valor total  
 deseja pão? - sim não
 tipo pão - normal, artesanal
 carne, frango, peixe, tofu
 deseja alface
 deseja bacon
 deseja queijo? 
    cheddar, mozarela, catupiry
deseja molho?
 cheddar, churrasco, ketchup, molho especial
deseja bebida?
 suco(laranja), coca, fanta, guaraná, água
tipo -" Como estamos em uma pandemia não é possivel comer na loja
 deseja 1- pegar na loja 2-entrega (adicional de 2 reais)"
 valor total "OBRIGADO POR COMPRAR CONOSCo"
*/

const prompt = require("prompt-sync" )();

console. log("====== DEV_BURGUES =====\n" )

console. log("MONTE SEU HAMBURGUER DO JEITO QUE QUER :p\n")

  var total = 0,00;
  var mensagem = "";

var pao = (prompt("Deseja seu hambúrguer com pão? 1-pão comum (R$3,00) // 2 pão artesanal (R$5,00)// 3- sem pão (R$1,00)"));
var valorPao;
var mensagemPao;
switch(pao){
  caso "1": valorPao = 3,00; mensagemPao = "Pão comum"; quebrar;
  caso "2": valorPao = 5,00; mensagemPao = "Pão artesanal"; quebrar;
  caso "3": valorPao = 1,00; mensagemPao = "Sem pão"; quebrar;
}
  total += valorPao;
  mensagem += mensagemPao

var carne = (prompt("Qual carne você deseja? 1- carne (R$7,00) // 2- frango (R$5,00)//3- tofu (R$8,00)"));
var valorCarne;
var mensagemCarne;
interruptor(carne){
  caso "1": 
    valorCarne = 7,00;
    mensagemCarne ="Carne"; quebrar;
  caso "2": 
    valorCarne = 5,00; 
    mensagemCarne ="Frango"; quebrar;
  caso "3": 
    valorCarne = 8.00; 
    mensagemCarne ="Tofu"; quebrar;
}
  total += valorCarne;
  mensagem += mensagemCarne;

var alface = prompt("salada Deseja?( R$2,00)");
var valorAlface;
var mensagemAlface;

se(alface =="sim"){
  valorAlface = 2,00;
  mensagemAlface ="Com salada"
}mais {
  valorAlface = 0,00
  mensagemAlface = "Sem salada"}
  
  total += valorAlface;
  mensagem += mensagemAlface;
  
var bacon = prompt("Bacon Deseja?( R$3,00)");
var valorBacon;
var mensagemBacon
se(bacon == "sim"){
  valorBacon = 3,00;
  var baconExtra = prompt("Estamos com uma promoção de: o dobro de bacon por R$1,00 a mais, você deseja?")
  se (baconExtra == "sim") {
  valorBacon += 1,00;
      mensagemBacon = "Com bacon";
    }
    else {valorBacon = 0,00
      mensagemBacon = "Sem bacon";}

  total += valorBacon;
  mensagem += mensagemBacon;
  
var quiejo= prompt('Queijo? 1-sem queijo // 2- cheddar (R$2,00)// 3- mozarela (R$1,50)// 4- catupry (R$1,50)')
var valorQueijo;
var mensagemQueijo;
switch(quiejo){
  caso "1": 
    valorQueijo = 0,00; 
    mensagemQueijo = "Sem queijo"; quebrar;
  caso "2": 
    valorQueijo = 2,00; 
    mensagemQueijo = "Cheddar"; quebrar;
  caso "3": 
    valorQueijo = 1,50;
    mensagemQueijo = "Mozarela"; quebrar;
  case "4": 
    valorQueijo = 1,50;
    mensagemQueijo = "Sem queijo"; quebrar;
}
  total += valorQueijo;
  mensagem += mensagemQueijo;
  
var molho = prompt('Escolha 1 tipo de molho:1- sem molho//2- churrasco (R$1,50)//3- ketchup (R$0,90)//4- molho especial (R$3,00)')
var valorMolho;
var mensagemMolho;
switch(molho){
  caso "1": 
    valorMolho = 0,00; 
    mensagemMolho = "Sem molho"; quebrar;
  caso "2": 
    valorMolho = 2,00; 
    mensagemMolho = "Churrasco"; quebrar;
  caso "3": 
    valorMolho = 1,50; 
    mensagemMolho = "Cheddar"; quebrar;
  case "4": 
    valorMolho = 0,90; 
    mensagemMolho = "Molho especial"; quebrar;
}
  total += valorMolho;
  mensagem += mensagemMolho;
  
var bebida = prompt('bebida Deseja? 1-não // 2- suco(laranja) (R$3,00)// 3- coca-cola (R$7,00)// 4- guaraná (R$5,00)')
var valorBebida;
var mensagemBebida;

interruptor(bebida){
  caso "1": 
    valorBebida = 0,00; 
    mensagemBebida = "Sem bebida"; quebrar;
  caso "2": 
    valorBebida = 3,00; 
    mensagemBebida = "Suco"; quebrar;
  caso "3": 
    valorBebida = 7,00; 
    mensagemBebida = "Coca-cola"; quebrar;
  case "4": 
    valorBebida = 5.00;
    mensagemBebida = "Guaraná"; quebrar;
}
 total += valorBebida;
 mensagem += mensagemBebida;
 
console. log("Devido ao vírus covid-19 não podemos permitir o consumo em loja")
var entrega = prompt("Deseja:  1-pegar no estabelecimento  ou  2- quer que entrguemos?")
var valorEntega; 
var mensagemEntrega;

se(entrega == "2"){
  valorEntrega = 2,00
  mensagemEntrega = "Entrega"
  } mais {
    valorEntrega = 0,00
    mensagemEntrega = "Pegar na loja";
  }
  total += valorEntrega
  mensagem += mensagemEntrega;
  
  console. log("O valor total da sua compra é R$", total. toFixed(2));
  console. log("Seu pedido: \n", mensagem)