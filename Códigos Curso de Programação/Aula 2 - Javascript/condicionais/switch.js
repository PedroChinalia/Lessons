/**
 * ATENÇÃO: para rodar o programa, abra a pasta "condicionais" em seu Visual Studio,
 * então, execute o seguinte comando no terminal: node switch.js
 */

/* 
  O método Math.random serve para gerar um número aleatório.
  Já o método Math.floor serve para arredondar esse número.
  Esse métodos são nativos da liguagem javascript, não sendo necessário importá-los.
*/
let number = Math.floor(Math.random() * 3);

switch (number) {
  case 0:
    console.log("Número igual à 0");
    break;
  case 1:
    console.log("Número igual à 1");
    break;
  case 2:
    console.log("Número igual à 2");
    break;
  case 3:
    console.log("Número igual à 3");
    break;
  default:
    console.log("Erro!");
    break;
}

/*
  No exemplo acima, o número gerado aleatoriamente vai de 0 à 3.
  A condicional vai verificar em qual caso a variável number se encaixa.
  Se ela não se encaixar em nenhum dos casos, o trecho de código que será executado,
  será o que está na condição default.
*/
