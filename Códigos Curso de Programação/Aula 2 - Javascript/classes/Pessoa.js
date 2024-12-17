import Carro from "../classes/Carro.js";

class Pessoa {
  constructor(nome, idade, carro) {
    this.nome = nome;
    this.idade = idade;
    this.carro = carro; // Atributo do tipo Carro
  }

  exibirInfo() {
    console.log(`Pessoa: ${this.nome}, Idade: ${this.idade}`);
    if (this.carro) {
      console.log(`${this.nome} tem um carro:`);
      this.carro.exibirInfo();
    } else {
      console.log(`${this.nome} não possui carro.`);
    }
  }
}

// Criando uma instância de Carro
const carro1 = new Carro("Toyota", "Corolla", 2020);

// Criando uma instância de Pessoa, onde o atributo carro é um objeto da classe Carro
const pessoa1 = new Pessoa("João", 30, carro1);

// Exibindo as informações da pessoa e do carro
pessoa1.exibirInfo();

// Criando outra instância de Pessoa sem carro
const pessoa2 = new Pessoa("Maria", 25, null);

// Exibindo as informações da segunda pessoa
pessoa2.exibirInfo();
