import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        // console.log(event);
        setCounter( counter + 1 );
        // setCounter( ( c ) => c + 1 );
    }

    const handleRemove = () => {
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter( value );
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleRemove }>-1</button>
            <button aria-label='btn-reset' onClick={ handleReset }>Reset</button>
        </>
    );
}

// Definimos las reglas de validación
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}