const newMessage = {
    message: 'Buenos dias, ',
    title: 'Carlos',
};

const saludo = ({ message, title }) => `${message} ${title}`;





export const FirstApp = () => {
    return(
        <>
            <h1>{ saludo( newMessage ) }</h1>
            {/*<code>{ JSON.stringify(newMessage) }</code>*/}
            <p>Soy un subtitulo</p>
        </>
    );
}
