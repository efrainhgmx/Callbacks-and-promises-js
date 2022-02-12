import { promesaLenta, promesaMedia, promesaRapida, buscarHeroe, buscarHeroeAsync } from "./js/promesas";
import { heroeIfAwait, heroesCiclo, obtenerHeroeAwait, obtenerHeroesArr, obtenerHeroesArr2, obtenerHeroesArr3 } from "./js/await";
//promesaLenta.then( mensaje => console.log(mensaje));
promesaLenta.then( console.log );
promesaMedia.then( console.log );
promesaRapida.then( console.log );

//Promise.race all igual que all recibe un arreglo donde va a ejecutar varias promesas pero solo va a resolver la que se ejecute más rapido
Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then( console.log )
    .catch( console.error );

buscarHeroe('Capi')
    .then( console.log )
    .catch( console.error );

buscarHeroeAsync('Iron')
    .then( console.log )
    .catch( console.error );

//Using Async/Await   
console.time('Await');
obtenerHeroesArr().then( heroes => {
  console.table(heroes);
  console.timeEnd('Await');  
}  );


console.time("Dos");

obtenerHeroesArr2().then( heroes => {
    console.table(heroes);
    console.timeEnd("Dos");
})


console.time("Tres");

obtenerHeroesArr3().then( heroes => {
    console.table(heroes);
    console.timeEnd("Tres");
});

obtenerHeroeAwait('Capi')
    .then(console.log)
    .catch(console.error);

heroesCiclo();
heroeIfAwait('Capi');