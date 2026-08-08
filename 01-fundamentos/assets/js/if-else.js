let a = 10;

if( a >= 10) {
  console.log("A es mayor o igual que 10");
} else {
  console.log("A es menor de 10");
}

let hoy = new Date();
let dia = hoy.getDay();

console.log(hoy, `Hoy es el dia: nº ${dia}`);

if(dia === 0){
  console.log("Hoy es Domingo");
} else if(dia === 1) {
  console.log("Hoy es Lunes");
} else if(dia === 2){
  console.log("Hoy es Martes");
} else if(dia === 3){
  console.log("Hoy es Miercoles");
} else if(dia === 4){
  console.log("Hoy es Jueves");
} else if(dia === 5){
  console.log("Hoy es Viernes");
} else if(dia === 6){
  console.log("Hoy es Sabado");
}

dia = 3;
const Semana = {0:"Domingo",1:"Lunes",2:"Martes",3:"Miercoles",4:"Jueves",5:"Viernes",6:"Sabado"};
console.log(`Hoy es ${Semana[dia]}`);


console.log("fin del programas");
