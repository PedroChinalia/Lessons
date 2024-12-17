const ArrayNumeros = [1, 9, 4, 6, 10, 2];

// Acessando cada elemento do array com a função forEach e realizando uma ação
// Passamos como parâmetro para o forEach uma função com parâmetro
ArrayNumeros.forEach((num) => {
  console.log(num);
});

// Verificando se uma valor existe dentro de um array
const bool1 = ArrayNumeros.includes(8);
const bool2 = ArrayNumeros.includes(1);

console.log("bool1: " + bool1, "bool2: " + bool2);

// Encontrando o primeiro valor dentro de uma condição
const valor = ArrayNumeros.find((num) => num > 5);
console.log("Valor: " + valor);

// Filtrando valores de um array
const valoresFiltrados = ArrayNumeros.filter((num) => num > 5);
console.log("Valores filtrados: " + valoresFiltrados);
