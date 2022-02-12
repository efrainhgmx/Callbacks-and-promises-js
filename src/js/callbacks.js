const heroes = {
    Capi: {
        nombre: 'Capitan America',
        poder: 'Super soldado'
    }, 
    Iron: {
        nombre: 'Iron Man',
        poder: 'Demasiado dinero'
    }, 
    Spider: {
        nombre: 'Spider Man',
        poder: 'Super reflejos'
    }, 
}

export const buscarHeroe = ( id, callback ) => {
    const heroe = heroes[id];

    if( heroe ) {
        //null indica que no hubo error
        callback( null, heroe );
    } else {
        //El primer argumento de los callbacks es un error
        callback(`No existe el heroe con id ${id}`)
    }

    //callback( heroe );
}