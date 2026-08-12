function saludar(nombre){
  // console.log({arguments})
  // console.log(`Hola ${nombre}`);
  
  return 10;
  // Esto nunca se va ejecutar
  console.log('Soy un codigo despues de un return');
}

const saludar2 = function(nombre) {
  console.log("Hola " + nombre);
}

const saludarFlecha = () => {
  console.log("Hola Flecha");
}

const saludarFlecha2 = (nombre) => {
  console.log(`Hola ${nombre}`);
}

let retornoDeSaludar = saludar("Luis",40,"Programador","Catamarca");
saludar2("Gonzalo");
console.log(retornoDeSaludar);

function sumar(a , b) {
  return a + b;
}

const sumar2 = ( a , b ) => a + b;

let suma1 = sumar(10, 20);
let suma2 = sumar2(10, 25);

console.log({suma1,suma2})

function getAleatorio() {
  return Math.random();
}

const getAleatorioFlecha = () => Math.random();

console.log(getAleatorioFlecha());