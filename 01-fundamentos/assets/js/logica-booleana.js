const regresaTrue = () => {
  console.log("Regresa True");
  return true;
}

const regresaFalse = () => {
  console.log("Regresa False");
  return false;
}

console.warn("Not o Negación");

console.log(true);
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

console.warn("And"); // resulta true si todos los valores son true
console.log( true && true ); // true
console.log( true && !false ); // true

console.log("======================");

console.log( regresaFalse() && regresaTrue() ); // false
console.log( regresaTrue() && regresaFalse() ); // false

console.log( "4 condiciones: ",true && true && true && false)

console.log("=========&&===========");

regresaFalse() && regresaTrue();

console.warn("Or"); // resulta false si todos los valores son false

console.log(true || false); // true
console.log(false || false); // false

console.log( regresaTrue() || regresaFalse() );

console.log( "4 condiciones: ",true || true || true || false)
