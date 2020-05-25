import React from 'react';
import './style.scss';

export default function( {children, ...otherProps} ){
    return(
        <div 
            id="content"
            {...otherProps}
        >
            {children}
        </div>
    )
}