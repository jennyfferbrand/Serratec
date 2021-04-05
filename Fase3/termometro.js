/* O programa termometro lê uma temperatura em graus Celsius,
   e devolve sua equivalência na escala Fahrenheit. 
*/

  const prompt = require ("prompt-sync")();

  var celsius = prompt (" Digite uma temperatura em graus celsius:");
  var fahrenheit = (celsius * 9 / 5) + 32;

  console.log("A temperatura escolhida é em Celsius é : " +fahrenheit+ " graus fahrnheit.");

