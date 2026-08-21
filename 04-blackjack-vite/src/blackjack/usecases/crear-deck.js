import _ from 'underscore';

// export const nombre = 'Luis Gonzalo Morelli';

// Esta función crea un nuevo deck
/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  let deck = [];

  if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tipos de carta es obligatorio como un arreglo de string');
  if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tipos especiales es obligatorio como un arreglo de string');


    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

// export default crearDeck;
