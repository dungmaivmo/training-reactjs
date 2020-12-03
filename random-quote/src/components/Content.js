import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import PropTypes from 'prop-types';

export const Content = props => {
    const { quote, color, opacity } = props;
    return (
        <div className="quote-conten" style={{ color: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}>
            <div className="quote-text" style={{ opacity: `${opacity}` }}>
                <i><FaQuoteLeft /></i>
                <span >{quote.quote}</span>
            </div>
            <div className="quote-author" style={{ opacity: `${opacity}` }}>
                <span className="">-{quote.author}</span>
            </div>
        </div>
    );
};

Content.propTypes = {
    quote: PropTypes.object,
    color: PropTypes.array,
    opacity: PropTypes.number,
};

Content.defaultProps = {
    quote: {},
    color: [],
    opacity: 1,
}