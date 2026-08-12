// console.log("Hello World!")

/*  
Formas de declarar variables en JavaScript

  Todas en minúscula, sin espacios, sin caracteres especiales, no pueden iniciar con números, no pueden ser palabras reservadas. 

*/ 

// Forma 1 

// let a = 10 , b = 20 , c = 30 , d = 40 , x = a + b * c ;

// Forma 2 

let a = 10, 
    b = 20,
    c = 'Hola',
    d = 'Spiderman', 
    x = a + b;

const saludo = c + ' ' + d; // const es para declarar variables constantes, es decir, que no pueden cambiar su valor. Es una buena práctica usar const para variables que no van a cambiar su valor, ya que esto ayuda a evitar errores y hace el código más fácil de entender.

// console.log(x);
// console.info(x);
// console.warn(x);
// console.error(x);

/*  Las llaves son para mostrar variables como objetos, es decir, con su nombre y su valor. Es una forma de mostrar las variables de forma más clara y ordenada.
console.log("%c Mis variables son: ", "color: red; font-size: 20px; font-weight: bold;"); // %c es un formato de texto para aplicar estilos a la consola. Basicamente css para la consola.
console.log( { a });  
console.log( { b });
console.log( { c });
console.log( { d });
*/

c = 'Hola de nuevo'; // Las variables declaradas con let pueden cambiar su valor, mientras que las declaradas con const no pueden cambiar su valor.

console.table( {a, b, c, d, x} ); // console.table() es una función que muestra los datos en forma de tabla. Es muy útil para mostrar objetos y arrays.

let outerHeight = 100; // no es una buena práctica usar variables globales, ya que pueden causar conflictos con otras variables y funciones. Es mejor usar variables locales dentro de funciones o bloques de código para evitar estos problemas.
const outerWidth = 200;

let miNuevoNombre = "Juan"; // camelCase es una convención de nomenclatura para variables y funciones en JavaScript, donde la primera palabra está en minúscula y las siguientes palabras comienzan con mayúscula. Es una buena práctica usar camelCase para mejorar la legibilidad del código.
