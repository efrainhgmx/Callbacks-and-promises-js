import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css'; 

const heroeId1 = 'Capi',
      heroeId2 = 'Iron';


//Promise all recibe un array de objetos que nos permite correr varias promesas
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    //Recibe un arreglo en el then por lo tanto podemos hacer destructurin de arreglos
        .then(([heroe1, heroe2]) => {
            console.log(`Mandando a ${heroe1.nombre} y a ${heroe2.nombre} a una mision`)
        }).catch( err => {
            console.error(err)
        }).finally( () => {
            console.log("Promesas terminadas");
        });

/* buscarHeroe( heroeId ).then( heroe => {
    console.log(heroe.nombre);
});
 */

/* buscarHeroe( heroeId, ( err, heroe ) => {
    
    if( err ) {
        console.error( err );
    } else {
        console.log( heroe );
    }
    
}); */