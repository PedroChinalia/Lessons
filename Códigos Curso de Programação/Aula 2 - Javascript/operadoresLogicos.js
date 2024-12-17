const num1 = 6;
const num2 = 9;

// O "&&" (E) verifica se duas condições são verdadeiras
if (num1 > 5 && num2 < 10) {
  console.log("num1 maior que 5 E num2 menor que 2");
}

// O "||" (OU) verifica se uma das condições é verdadeira
if (num1 > 5 || num2 < 10) {
  console.log("num1 maior que 5 OU num2 menor que 10");
}

const text = "6";

if (num1 == text) {
  console.log("num1 é igual a text");
}

if (num1 === text) {
  console.log("num1 é idêntico a text");
}

if (num1 != num2) {
  console.log("num1 é diferente de num2");
}

// O operador "!" verifica se uma variável é false ou undefined
let bool1 = true;

if (!bool1) {
  console.log("!bool1");
}

let bool2 = false;

if (!bool2) {
  console.log("!bool2");
}

let bool3;

if (!bool3) {
  console.log("!bool3");
}
