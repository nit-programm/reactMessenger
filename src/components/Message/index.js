import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.css';

export const Message = ({text, author}) => {
    console.log(text);
    return (
        <div>
            <h3 className="header" >
                Message text: {text}
            </h3>
            <span>Author: {author}</span>
        </div>
    );
}

Message.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}
