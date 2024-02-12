import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-templates-string', () => { 
    test('getSaludo debe de retornar "Hola Carlos"', () => {

        const name = 'Carlos';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${name}`);

    })
})