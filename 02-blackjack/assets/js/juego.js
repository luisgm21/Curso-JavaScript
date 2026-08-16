//  2C = Two of Clubs
//  2D = Two of Diamonds
//  2H = Two of Hearts
//  2S = Two of Spades

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML

const btnPedir = document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small')

const crearDeck = () => {
  for(let i = 2; i <= 10; i++){
    for(let tipo of tipos){
      deck.push(i + tipo);
    }
  }
  for(let esp of especiales){
    for(let tipo of tipos){
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);

  return deck;
}

const pedirCarta = () => {

  if(deck.length === 0){
    throw 'No hay cartas en el deck';
  }

  let carta = deck.pop();

  return carta;
}

crearDeck();

const valorCarta = (carta)=>{
  const valor = carta.substring(0, carta.length - 1);
  // let puntos = 0;
  // if(isNaN(valor)){
  //   puntos = (valor === 'A') ? 11 : 10;
  // } else {
  //   puntos = valor * 1;
  // }
  return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}

// Eventos
btnPedir.addEventListener('click', () => {

  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

});




