import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {

        // Jest ejecuta todo el código en secuencia, por lo tanto cuando encuentra una promesa lo ejecuta en segundo plano mientras termina de ejecutar lo demas 
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {

                expect( hero ).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    }
                );

                done();

                /*
                    done es una función que se manda a llamar cuando terminamos, es decir cuando se termina de ejecutar mi código voy a mandar a llamar el done y esto le dice a jest "HEY ya termine", si nunca llamamos el done cuando estamos pasando la referencia jest se va a quedar esperando esa respuesta y a los 5ms, jest interpreta que ocurrio algun error y lo muestra.

                    el done le dice a jest que se espere hasta que ese codigoi termine, una mejor alternativa para tarabajar con funciones asincronas es utilizando el async await

                */
            });

    });
    
    

    test('getHeroeByIdAsync debe de retornar un error si el heroe no existe', (done) => {
 
        const id = 100;
        getHeroeByIdAsync( id )
            .catch( error => {

                expect( error ).toBe( `No se pudo encontrar el héroe ${ id }` );

                done();
            });

    });
});