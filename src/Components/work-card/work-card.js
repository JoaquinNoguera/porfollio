import React from 'react';
import imgLaptop from '../../static/laptop.png';
import { Link } from 'react-router-dom';
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
                <div
                    className="img--wrap"
                >
                <img
                    className="img--content"
                    src={ img }
                    />
                </div>
            </div>

            <Link to={`/porfolio/${ name }`}>
                <button>
                    Ver más
                </button>
            </Link>           
        </div>
    );
}