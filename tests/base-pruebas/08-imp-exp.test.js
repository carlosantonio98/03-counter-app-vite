import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe por id ', () => {

        const id = 1;
        const hero = getHeroeById( id );
        
        expect( hero ).toEqual( { id: id, name: 'Batman', owner: 'DC' } );

    });
    
    test('getHeroeById debe de retornar undefined si el heroe no existe ', () => {

        const id = 100;
        const hero = getHeroeById( id );
        
        expect( hero ).toBeFalsy();

        // Forma corta de definir si una función retorna null, ndefined o false "toBeFalsy"
    });












    // TAREA
    /*
        1. Debe de retornar un arreglo con los héroes de DC
        2. Length === 3
        3. toEqual al arreglo filtrado


        1.Debe de retornar un arreglo con los héroes de Marvel
        2. length === 2
    */

    test('getHeroesByOwner debe de retornar un array de 3 heroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );

        expect( heroes ).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },                   
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        );

        // Esta manera es mejor a la de arriba debido a que el dia de mañana el arreglo de heroes pueden aumentar, de esta manera ya no tendriamos que preocuparnos por agregar otros heroes al arreglo.
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner) ); 
    })
    
    test('getHeroesByOwner debe de retornar un array de 2 heroes de Marvel ', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        console.log(heroes);

        expect( heroes ).toEqual(
            [
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ]
        );

        expect( heroes.length ).toBe( 2 );
    })

})