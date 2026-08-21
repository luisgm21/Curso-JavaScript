
/**
 * Esta función recibe una carta y retorna su valor según las reglas del blackjack
 * @param {String} carta La carta a evaluar
 * @returns {Number} El valor de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
