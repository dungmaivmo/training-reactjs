import React from 'react';
import PropTypes from 'prop-types';


const ButtonCalculator = props => {
    const { getValButton } = props;
    return (
        <>
            <button id="clear" className="width--max" onClick={getValButton} value='AC'>AC</button>
            <button onClick={getValButton} value='/'>/</button>
            <button onClick={getValButton} value='X'>X</button>
            <button onClick={getValButton} value='7'>7</button>
            <button onClick={getValButton} value='8'>8</button>
            <button onClick={getValButton} value='9'>9</button>
            <button onClick={getValButton} value='-'>-</button>
            <button onClick={getValButton} value='4'>4</button>
            <button onClick={getValButton} value='5'>5</button>
            <button onClick={getValButton} value='6'>6</button>
            <button onClick={getValButton} value='+'>+</button>
            <button onClick={getValButton} value='1'>1</button>
            <button onClick={getValButton} value='2'>2</button>
            <button onClick={getValButton} value='3'>3</button>
            <button onClick={getValButton} value='0' className="width--max">0</button>
            <button onClick={getValButton} value='.'>.</button>
            <button onClick={getValButton} value='=' id="equals" className="height--max">=</button>
        </>
    );
};

ButtonCalculator.propTypes = {
    getValButton: PropTypes.func,
};

ButtonCalculator.defaultProps = {
    getValButton: null,
}

export default ButtonCalculator;