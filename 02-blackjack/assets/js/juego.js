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
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const modalVictoria = document.querySelector('#modal-victoria');
const modalDerrota = document.querySelector('#modal-derrota');

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

// Turno de computadora
const turnoComputadora = (puntosMinimos) => {
  do{
    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);
  } while( (puntosComputadora < puntosJugador) && (puntosJugador <= 21));
  determinarGanador();
}

// Determinar ganador
const determinarGanador = () => {
  if(puntosJugador > 21){
    console.warn('Computadora gana');
    modalDerrota.showModal();
  } else if (puntosComputadora > 21){
    console.warn('Jugador gana');
    modalVictoria.showModal();
  } else if( puntosComputadora >= puntosJugador){
    console.warn('Computadora gana');
    modalDerrota.showModal();
  } else {
    console.warn('Jugador gana');
    modalVictoria.showModal();
  }
}


// Eventos
btnPedir.addEventListener('click', () => {

  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  divCartasJugador.append(imgCarta);

  if( puntosJugador > 21){
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21){
    console.warn('21, genial!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);
  }
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugador);

});

btnNuevo.addEventListener('click', () => {
  deck = [];
  puntosJugador = 0;
  puntosComputadora = 0;
  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;
  divCartasJugador.innerHTML = '';
  divCartasComputadora.innerHTML = '';
  btnPedir.disabled = false;
  btnDetener.disabled = false;
  crearDeck();
});



