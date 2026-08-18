const miModulo = (() =>{
  'use strict'
  let deck = [];
  const tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];

  // let puntosJugador = 0,
  //     puntosComputadora = 0;

  let puntosJugadores = [];

  // Referencias del HTML

  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo'),
        puntosHTML = document.querySelectorAll('small'),
        divsCartasJugador = document.querySelectorAll('.divCartas'),
        modalVictoria = document.querySelector('#modal-victoria'),
        modalDerrota = document.querySelector('#modal-derrota');

  // Esta función inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck =  crearDeck();
    for(let i = 0; i < numJugadores; i++){
      puntosJugadores[i] = 0;
      divsCartasJugador[i].innerHTML = '';
    }
    puntosHTML.forEach( elem => elem.innerText = 0 );
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  }

  const crearDeck = () => {
    deck = [];

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
    return _.shuffle(deck);
  }

  const pedirCarta = () => {

    if(deck.length === 0){
      throw 'No hay cartas en el deck';
    }

    return deck.pop();
  }

  const valorCarta = (carta)=>{
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
          (valor === 'A') ? 11 : 10
          : valor * 1;
  }

  // Turno: 0 = primer jugador, último será la computadora
  const acumularPuntos = (carta,turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  }

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divsCartasJugador[turno].append(imgCarta);
  }

  // Turno de computadora
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora;
    do{
      const carta = pedirCarta();
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);
    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador();
  }

  // Determinar ganador
  const determinarGanador = () => {
    const [puntosJugador,puntosComputadora] = puntosJugadores;

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
    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

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

    turnoComputadora(puntosJugadores[0]);

  });

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego
  };

})()




