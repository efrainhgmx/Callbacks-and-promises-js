import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['Capi', 'Iron', 'Spider'];
const heroesPromesas = heroesIds.map( buscarHeroe );

export const obtenerHeroesArr2 = async() => {
    return Promise.all(heroesIds.map(heroe => buscarHeroe(heroe)));
}

export const obtenerHeroesArr3 = async() => {
    return Promise.all(heroesIds.map(buscarHeroe));
}

export const obtenerHeroesArr = async () => {

    const heroesArr  = [];

    /* for(const id of heroesIds) {
        const heroe = await buscarHeroeAsync(id)
        heroesArr.push(heroe);
    } */
    for(const id of heroesIds) {
        heroesArr.push( buscarHeroe(id) );
    }


    return await Promise.all( heroesArr );
}

export const obtenerHeroeAwait = async ( id ) => {

    try {
        const heroe  = await buscarHeroeAsync( id );
        return heroe;
        
    } catch (error) {
        console.log('Catch', error);
    }


};


export const heroesCiclo = () => {
    console.time('HeroesCiclo');

    for await( const heroe of heroesPromesas ) {
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclo');
};

export const heroeIfAwait = async(id) => {
    if( (await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos');
    } else {
        console.log('Naaaa');
    }
}