import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import './style.scss';

export default function ({ name, img }) {
    return(
        <div
            className="work--card"
        >
            <h2> {name} </h2>
            <div
            className="laptop--wrap"
            >
                <Image 
                        cloudName="dbtp7mkgk" 
                        publicId="porfolio/laptop_sg1qag.png"
                        width="320"
                        height="166"  
                        crop="scale"
                        alt="Laptop"
                        className="laptop"
                />
                <div
                    className="img--wrap"
                >
                    <Image 
                        cloudName="dbtp7mkgk" 
                        publicId={ img }
                        width="217"  
                        crop="scale"
                        alt="Página principal del proyecto"
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