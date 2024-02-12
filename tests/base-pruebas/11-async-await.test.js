import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await.js', () => {


    test('getImagen debe de retornar un url de la imagen', async() => {

        const url = await getImagen();
        // console.log(url);
        //expect( typeof url ).toBe('string');

    })
    
    test('getImagen debe de retornar un error si no tenemos una api key', async() => {

        const resp = await getImagen();

        expect( resp ).toBe('No se encontro la imagen');

    })
});
