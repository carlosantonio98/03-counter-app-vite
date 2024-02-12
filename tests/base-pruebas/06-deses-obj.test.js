import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe de retornar un objeto', () => {

        const contextTest = {
            'clave': 'ccac',
            'nombre': 'Carlos',
            'edad': 24
        };

        const context = usContext(contextTest);

        expect( context ).toEqual({
            nombreClave: contextTest.clave,
            anios: contextTest.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

        console.log(context);

    })
})