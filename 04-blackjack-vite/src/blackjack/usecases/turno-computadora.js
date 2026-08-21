import { pedirCarta , valorCarta , crearCartaHTML } from "./";

/**
 * Turno de la computadora en el juego de blackjack.
 * @param {Number} puntosMinimos puntos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML donde se mostrará los puntos de la computadora
 * @param {HTMLElement} divCartasComputadora contenedor HTML donde se mostrarán las cartas de la computadora
 * @param {Array<String>} deck arreglo de cartas disponibles en el juego
 * @returns {void}
 */

export const turnoComputadora = ( puntosMinimos ,puntosHTML , divCartasComputadora, deck = [] ) => {


    if ( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
        puntosComputadora = 0;
    }, 100 );
}
