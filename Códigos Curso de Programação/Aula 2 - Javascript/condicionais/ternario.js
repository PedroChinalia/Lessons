/**
 * ATENÇÃO: para rodar o programa, abra a pasta "condicionais" em seu Visual Studio,
 * então, execute o seguinte comando no terminal: node ternario.js
 */

/* 
  O método Math.random serve para gerar um número aleatório.
  Já o método Math.floor serve para arredondar esse número.
  Esse métodos são nativos da liguagem javascript, não sendo necessário importá-los.
*/
let number = Math.floor(Math.random() * 10);
/* 
  Assim como as condicionais if e else, a verificação ternária também executa
  um trecho de código baseando-se na condição proposta antes do sinal de interrogação.
  Caso a condição seja verdadeira, ela retorna o valor entre a interrogação e os dois pontos.
  Caso contrário, retorna o valor depois dos dois pontos!
*/
const result = number == 5 ? "Número igual à 5" : "Número diferente de 5";
console.log("Primeiro exemplo: " + result);

/* 
  Também é possível fazer mais verificações em um único ternário.
  Ao invés de retornar um valor, retornamos outra verificação ternária.
  Lembre-se que não é uma boa prática usar muitas verificações em uma única verificação ternária!
 */
const newResult =
  number == 5 ? "Número igual à 5" : number < 5 ? "Número menor que 5" : "Número maior que 5";
console.log("Segundo exemplo: " + newResult);
