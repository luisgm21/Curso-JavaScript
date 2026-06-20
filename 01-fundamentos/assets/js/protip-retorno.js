// const crearPersona = function(nombre, apellido) {
//   return {
//     nombre,
//     apellido
//   }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona1 = crearPersona('Luis', 'Gomez');
console.log(persona1);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (edad,...args) => {
  console.log({ edad, args });
  return args;
}

imprimeArgumentos(10, true, 'Hola');
let argumentos = imprimeArgumentos2(10, true, false, 'Luis', 'Hola');

let [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Luis', 'Hola');

console.log({argumentos});
console.log({casado, vivo, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona('Luis', 'Morelli');
console.log({nuevoApellido});

let personaje = {
  nombre: 'Tony Stark',
  coderName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.70
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California'
  },
  'ultima-pelicula': 'Infinity War'
};

const imprimePropiedades = (personaje) => {
  console.log('nombre ',personaje.nombre);
  console.log('coderName ',personaje.coderName);
  console.log('edad ',personaje.edad);
  console.log('vivo ',personaje.vivo);
  console.log('trajes ',personaje.trajes);
}

const imprimePropiedades2 = ({nombre, coderName, edad = 15, vivo, trajes}) => {
  console.log('nombre ', nombre);
  console.log('coderName ', coderName);
  console.log('edad ', edad);
  console.log('vivo ', vivo);
  console.log('trajes ', trajes);
}