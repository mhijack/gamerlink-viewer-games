import React from 'react';

const Button = ({ text, onClick, type, disabled, className, style }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={className}
            style={style}
        >
            {text}
        </button>
    );
};

export default Button;
