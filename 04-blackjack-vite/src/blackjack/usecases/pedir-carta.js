/**
 * Esta función me permite tomar una carta del deck
 * @param {Array<string>} deck El deck de cartas
 * @returns {string} La carta tomada del deck
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
