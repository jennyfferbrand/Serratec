const ler = require("prompt-sync")();


var nome = ler ("Olá, qual seu nome?");

    var idade = ler ("Prazer em te conhecer", +  nome +" qual o suaidade?");

    se (idade < 18){
     console. log ("Por falta de testes até o momento, a vacina não é recomendada para menores de 18 anos")

    } mais se ( idade >= 18 e e idade <=59) {
     var = gestante ler (nome + " você está gravida?");

            se (gestante  === "sim"){
                console. log("Por falta de testes até o momento, a vacina não é recomendada para gestantes!");
            }mais {
                console. log("Você será o ultimo da fila de vacinação, aguarde sua vez.");
            }
        }
        mais{
            console. log ("Você está no grupo prioritário a ser incluído ao fim da primeira fase de vacinação, verifique calendário de sua cidade.");
        }
