const ler = require("prompt-sync")();

var dia = [];
do{
var diaCompromisso =  Number( ler("Que dia do mês deseja agendar um compromisso? "));
var jaTem = "";
 
    for (let index = 0; index < dia.length; index++) {
        if ( dia[index] == diaCompromisso ){
            jaTem = true;
        } 
    }
    if (jaTem == true){
        var condicao = ler("Esse dia já possui compromisso, deseja agendar outro dia?")
    }else{
        dia.push(diaCompromisso);
        let compromisso= ler("Qual compromisso deseja agendar no dia " + diaCompromisso +"?");
        console.log("Seu compromisso: " + compromisso + ", foi agendado com sucesso!");
        condicao =  ler("Se deseja agendar mais algum compromisso digite (sim): ");
    }

} while(condicao == "sim" )