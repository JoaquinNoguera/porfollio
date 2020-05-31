import React from 'react';
import imgLaptop from '../../static/laptop.png';
import './style.scss';

export default function ({ name, img }) {
    console.log( name, img );
    return(
        <div
            className="work--card"
        >
            <h2> {name} </h2>
            <div
            className="laptop--wrap"
            >
                <img 
                    className="laptop" 
                    src={ imgLaptop }
                />
                <img
                    className="img--content"
                    src={ img }
                />
            </div>
            
            <button>
                Ver más
            </button>
        </div>
    );
}