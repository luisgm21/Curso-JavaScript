class Rectangulo {
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;
  }

  #duplicarArea(){
    return this.#area * 2;
  }

  mostrarArea(){
    console.log(`El area del rectangulo es: ${this.#area}`);
    console.log(`El area duplicado del rectangulo es: ${this.#duplicarArea()}`);
  }
}

const rectangulo = new Rectangulo(10, 15);

rectangulo.mostrarArea();

console.log(rectangulo)
