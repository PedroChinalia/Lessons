class Carro {
  // Construtor da classe
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = false;
  }

  // Métodos (funções) da classe
  ligar() {
    this.ligado = true;
    console.log(`${this.modelo} está agora ligado.`);
  }

  desligar() {
    this.ligado = false;
    console.log(`${this.modelo} está agora desligado.`);
  }

  exibirInfo() {
    console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
  }
}

export default Carro;

// Criando uma instância da classe Carro
const meuCarro = new Carro("Toyota", "Corolla", 2020);

// Usando os métodos da classe
meuCarro.exibirInfo();
meuCarro.ligar();
meuCarro.desligar();
