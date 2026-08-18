const fher = {
  nombre: 'Fernando',
  edad: 30,
  imprimir() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
}

const pedro = {
  nombre: 'Pedro',
  edad: 25,
  imprimir() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
}

fher.imprimir();
pedro.imprimir();

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
}

const maria = new Persona('Maria', 28);
const juan = new Persona('Juan', 35);
maria.imprimir();
juan.imprimir();
