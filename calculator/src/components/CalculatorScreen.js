import React from 'react';
import PropTypes from 'prop-types';
const calculatorScreen = props => {
    const { prevVal, formula } = props;
    return (
        <>
            <div className="formulaScreen">{formula}</div>
            <div className="outputScreen" id="display">{prevVal}</div>
        </>
    );
};

calculatorScreen.propTypes = {
    prevVal: PropTypes.string,
    formula: PropTypes.string
};

calculatorScreen.defaultProps = {
    prevVal: '',
    formula: ''
}

export default calculatorScreen;