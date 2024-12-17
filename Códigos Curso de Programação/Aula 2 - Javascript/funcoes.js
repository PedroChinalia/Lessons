const num1 = 3;
const num2 = 4;

// Primeira maneira de declarar uma função
function soma(primeiroNum, segundoNum) {
  return primeiroNum + segundoNum;
}

// Segunda maneira de declarar uma função
const subtracao = (primeiroNum, segundoNum) => {
  return primeiroNum - segundoNum;
};

// Uma função não precisa necessariamente retornar um valor,
// ou ter parâmetros de entrada, tudo depende da sua necessidade
let num3 = 2;
let num4 = 6;

const funcAlteraValores = () => {
  num3 = num3 - num4;
  num4 = num3 + num4;
};

const mainFunc = () => {
  const resultadoSoma = soma(num1, num2);
  console.log("Resultado da soma: " + resultadoSoma);

  const resultadoSubtracao = subtracao(num1, num2);
  console.log("Resultado da subtração: " + resultadoSubtracao);

  const teste = funcAlteraValores();
  console.log("num3: " + num3);
  console.log("num4: " + num4);
};

mainFunc();

/* Funções assíncronas devem ser tratadas de maneira especial
 Considere que você está acessando dados de um banco de dados,
 utilizando async na declaração da função, informamos ao código
 que é uma função assíncrona e quando formos realizar uma ação
 que depende de um carregamento, usamos o await para que o código
 "espere" os valores serem carregados
 */

// Funções vazias para imitarem a função de banco de dados
const pegandoValores = () => {};
const enviaValores = () => {};

const consultaBanco = async () => {
  const valores = await pegandoValores();
  return valores;
};

async function adicionaAoBanco(valores) {
  await enviaValores(valores);
}
