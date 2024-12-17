// Um objeto é uma estrutura de dados que possui uma chave seguida de um valor
// No caso do exemplo abaixo, a chave "id" possui o valor "1" e assim por diante
// O valor de uma chave pode ser tipos primitivos ou uma classe
const pessoa = {
  id: 1,
  nome: "Pedro",
  cpf: "123.456.789.10",
  dataNascimento: "11/06/2001",
  casado: false
};

// Pegando todas as chaves de um objeto
Object.keys(pessoa).forEach((key, index) => {
  console.log("key " + index + " = " + key);
});

// Pegando todos os valores de um objeto
Object.values(pessoa).forEach((value, index) => {
  console.log("value " + index + " = " + value);
});

// Pegando chaves e valores de um objeto
Object.entries(pessoa).forEach(([key, value], index) => {
  console.log("Posição " + index + " - key: " + key + ", value: " + value);
});
