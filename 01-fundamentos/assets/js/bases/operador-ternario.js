/*
  Dias de la semana abrimos a las 11am y los fines de semana abrimos a las 9am
*/

let dia = 1; // 0: domingo, 1: lunes, 2: martes, 3: miércoles, 4: jueves, 5: viernes, 6: sábado
let horaActual = 10;

let horaApertura;
let mensaje;

// if(dia === 0 || dia === 6) {
// if([0,6].includes(dia)) {
//   console.log("Es fin de semana");
//   horaApertura = 9;
// } else {
//   console.log("Es día de semana");
//   horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

// if( horaActual >= horaApertura ) {
//   mensaje = `Estamos abiertos.`;
// } else {
//   mensaje = `Estamos cerrados. Hoy abrimos a las ${horaApertura}am`;
// }

mensaje = (horaActual >= horaApertura) ? `Estamos abiertos.` : `Estamos cerrados. Hoy abrimos a las ${horaApertura}am`;

console.log({horaApertura , mensaje})
