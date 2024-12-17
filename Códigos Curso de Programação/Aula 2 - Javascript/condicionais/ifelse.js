/**
 * ATENÇÃO: para rodar o programa, abra a pasta "condicionais" em seu Visual Studio,
 * então, execute o seguinte comando no terminal: node ifelse.js
 */

/* 
  O método Math.random serve para gerar um número aleatório.
  Já o método Math.floor serve para arredondar esse número.
  Esse métodos são nativos da liguagem javascript, não sendo necessário importá-los.
*/
let number = Math.floor(Math.random() * 10);

if (number < 5) {
  console.log("Número menor que 5");
} else if (number > 5) {
  console.log("Número maior que 5");
} else {
  console.log("Número igual à 5");
}

/*
  Podemos adicionar mais uma condicional através do else if.
  Porém não é uma boa pratica usar muitos else if em uma verificação.
  No exemplo acima, verificamos qual o valor no número gerado aleatóriamente.
  Essa condicional serve também para verificações envolvendo strings, booleans, arrays e objetos.
*/
