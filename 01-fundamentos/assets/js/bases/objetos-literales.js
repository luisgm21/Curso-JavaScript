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

console.log(personaje);

console.log("Nombre: ",personaje.nombre);
console.log("Nombre: ", personaje['nombre']);
console.log("Edad: ", personaje.edad);

console.log("Coords: ", personaje.coords);
console.log("Lat: ", personaje.coords.lat);

console.log("No. Trajes: ", personaje.trajes.length);
console.log("Último traje: ", personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log("Vivo: ", personaje[x]);

console.log("Última película: ", personaje['ultima-pelicula']);

// Detalles 
delete personaje.edad;
console.log(personaje);

const entriesPares = Object.entries(personaje)

console.log(entriesPares);

personaje.casado = true;


// Metodo para congelar el objeto, no se pueden agregar, eliminar o modificar propiedades, pero si se pueden modificar los objetos anidados
Object.freeze(personaje);


personaje.direccion.ubicacion = 'Argentina';
personaje.casado = false;

console.log(personaje)

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log({propiedades, valores});

