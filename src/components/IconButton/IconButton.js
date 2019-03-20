import React from 'react';
import './style.scss'

const IconButton = ({icon,onClick,className}) => {
    return (
        <button onClick={onClick} className={`btn ${className}`}>
            <div className={`fas ${icon}`}/>
        </button>
    );
};

export default IconButton;
