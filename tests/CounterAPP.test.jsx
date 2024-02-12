import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


/*

    Tarea: Pruebas en el <CounterApp />

    test: Debe de hacer match con el snapshot
    test: Debe de mostrar el valor inicial de 100 <CounterApp value={100} />
*/

describe('Pruebas en <CounterApp />', () => {
    
    const initialValue = 1;

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render( <CounterApp value={initialValue} /> );
        expect( container ).toMatchSnapshot();

    });
    
    test('Debe de mostrar el valor inicial de 100 <CounterApp value={100} />', () => {

        render( <CounterApp value={ 100 } /> );
        expect( screen.getByText( 100 ) ).toBeTruthy();

        // expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain( '100' );

    });

    test('Debe de incrementar con el botón +1', () => {

        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText( 2 ) ).toBeTruthy();

    })
    
    test('Debe de decrementar con el botón -1', () => {

        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText( 0 ) ).toBeTruthy();

    })
    
    test('Debe de funionar el botón de reset', () => {

        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        
        // Otra manera de apuntar al boton
        // fireEvent.click( screen.getByText('Reset') );

        // Si no le colocamos el aria-label al boton del html por defecto el name va hacer igual al texto que este mostrando
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );

        expect( screen.getByText( initialValue ) ).toBeTruthy();

    })

})