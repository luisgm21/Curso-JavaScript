/**
 * Función que crea un elemento HTML de imagen para una carta de blackjack.
 * @param {String} carta carta a crear en formato de imagen (ejemplo: '2C', 'JD', etc.)
 * @returns {HTMLImageElement} imgCarta
 */

export const crearCartaHTML = (carta) => {

    if(!carta) throw new Error('La carta es un argumento obligatorio');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}
