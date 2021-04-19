/*
1- mostrar 3 destinos para o cliente
2- deixe o cliente escolher um dos lugares
3- apresente o (ou os) pacotes para a escolha do cliente
4- depois que ele escolher 
boa viagem (se incrementar mais como dito acima)
*/
const ler = require ("prompt-sync")();
var total = 0;
   console. log ("SEJA BEM VIDO A NOSSA PROMOÇÃO,\n AGORA MOSTRAREMOS OS LUGARES DISPONIVÉS: \n");

   var nome = ler("Qual o nome do Sr/Sra?")

   console. log ( nome, "SEJA BEM VIDO A NOSSA PROMOÇÃO,\n AGORA MOSTRAREMOS OS LUGARES DISPONIVÉS POR $300/cada:\n");

var destinos = "RIO DE JANEIRO, AMSTERDAM, CANADÁ";

var pacote = ler("Qual dessas opções você deseja você adquirir? " + destinos);
    var valorPacote = 300,0
console. log ("Ok, você escolheu o destino", pacote ,"vamos lá!");

var comida = ler("VOCÊ DESEJA ADICIONAR POR $50/DIARIA COMIDA LIBERADA. SIM OU NAO: ");
  se (comida == "SIM"){
      var valorComida = 50,0;
       console. log ("ADICIONAMOS ESSA VANTAGEM AO SEU PACOTE *-*");
   }mais se (comida == "NAO"){
       console. log ("OK, PRÓXIMA OPÇÃO");
   }

   var guia =  ler("DESEJARIA POR $10/DIARIA UM GUIA ESPECIALIZADO EM TURISMO? SIM OU NAO: ");
     se (guia == "SIM"){
         var valorGuia = 10,0;
         console. log ("VOCÊ ADQUIRIU O GUIA *-*");
     }mais se(guia == "NAO");{
         console. log ("OK, PRÓXIMA OPÇÃO");
     }
     var diaria = ler ("Quantos dias você gostaria de ficar em seu destino? ");
     
     total = (valorPacote + valorComida + valorGuia) * diaria;

var pagamento = ler("Qual será sua forma de pagamento? DINHEIRO OU CARTAO: ");
   se(pagamento == "DINHEIRO"){
   console. log("PAGAMENTO EM DINHEIRO");
  }mais se (pagamento == "CARTAO"){
  
     var opcao= ler("PAGAMENTO EM CARTÃO, PODE SER PARCELADO EM 5x, deseja parcelar: ");
 
  se (opcao == "SIM"){
      var quant = ler("EM QUANTAS VEZES?");
      var valorParcelado = total / quant;
      console. log ("\n" + nome, "SEU PACOTE FOI DIVIDIDO " + quant + "x O VALOR TOTAL FOI R$ " + valorParcelado. toFixed(2));
  }mais se (opcao == "NAO" ){
      console. log ("OK, VAMOS ENVIAR SEU RECIBO", nome);
  }
  }
   console. log ("SENHOR(a) " + nome + " O VALOR TOTAL DA SUA VIAGEM É DE: R$" + total. toFixed(2) + "TENHA UMA BOA VIAGEM!!");