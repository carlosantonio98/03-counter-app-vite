import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp />', () => {

    // test('Debe de hace match con el snapshot', () => {

        // Esta prueba se asegura de que mi componente no valla a cambiar el dia de mañana de manera accidental o de que alguien lo manipulo, esto avalua todo(por ejemplo: si nosotros tenemos clases, atributos, propiedades, cualquier cosa en el html), estos es algo de lo que se va a encargar el snapshot de evaluar el producto de su componente

        // render = renderiza un componente en memoria

        // const title = 'Hola, soy carlos';
        // const { container } = render( <FirstApp title={ title } /> )

        // Una asercion que es de mucha utilidad debido a que con esta nos ahorramos hacer otras pruebas en ocaciones, la prueba a la que nos referimos es el snapshot


        /**
         * 
         * El render hace muchas cosas, actualiza el objeto screen que es propio de react testing library,
         * el render retorna un objeto que expone ciertas propiedades, una de ellas es el container
         * 
         */


        // Esta prueba crear un snapshot, si ya tenemos uno entonces lo que hace es ver si se modifico, practicamente tomamos una fotografia al html que retorna el componente
        // expect( container ).toMatchSnapshot();

        // Las fotografias se estarán almacenando en la carpeta de __snapshot__, estas se pueden borrar
    // })  se presiona u para eliminar el sanpsoot














    test('Debe de mostrar el titulo en un h1 1', () => {

        const title = 'Hola, soy carlos';
        const { container, getByText } = render( <FirstApp title={title} /> );


        expect( getByText( title ) ).toBeTruthy();



        // No es recomendable hacerlo así más sin embargo es bueno saber que se puede hacer de esta manera
        const h1 = container.querySelector('h1');
        expect( h1.innerHTML ).toContain( title );
        


        // Esto es una asersion expect()
        // ToBe busca que coincida tal cual esta escrito
        // ToContain bisca que coincida sin importar que tenga espacio en blanco de mas, no hace caso a los espacios en blanco solo a el contenido

    })

    test('Debe de mostrar el titulo en un h1 2', () => {

        const title = 'Hola, soy carlos';
        const { container, getByText, getByTestId } = render( <FirstApp title={title} /> );
        expect( getByText( title ) ).toBeTruthy();

        expect( getByTestId('test-title') ).toBeTruthy();  // verifica si existe
        expect( getByTestId('test-title').innerHTML ).toBe(title); // verifica si el contenido de es elemento es igual al title

        // Esto es una asersion expect()
        // ToBe se asegura de que sean identicos, mismo tipo, mismos espacios, mismos keysin todo igual
        // ToContain especifica que no le importa si hay letras antes o despues, tiene que contener esa palabra 

    })

    // Nota: No es necesario que las pruebas sean tan estricta, solo se debe de evaluar lo que es realmente importane



    test('Debe de mostrar el subtitulo enviado por props', () => {

        const title = 'Hola, soy carlos';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            /> 
        );
        expect( getAllByText( subTitle ) ).toBeTruthy();
        expect( getAllByText( subTitle ).length ).toBe(2);

    })

    
})