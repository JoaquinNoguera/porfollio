import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../static/casa.svg';
import WorkIcon from '../../static/carpeta.svg';
import ContactIcon from '../../static/correo.svg';
import './style.scss';


const option = {
    home: "HOME",
    work: "WORK",
    contact: "CONTACT"
}

export default function( { active } ) {
    return(
        <div id="nav">
            <div
                className="link"
            >
                <Link 
                    aria-label="sección home"
                    to="/"
                    className={ (option.home === active) ? "active" : ""}
                >
                    <HomeIcon/>
                </Link>
                <div className={ (option.home === active) ? ("triangulo active") : "triangulo"}/>
            </div>

            <div
                className="link"
            >
                <Link 
                    aria-label="sección porfolio"
                    to="/porfolio"
                    className={ (option.work === active) ? "active" : ""}
                >
                    <WorkIcon/>
                </Link>
                <div className={ (option.work === active) ? ("triangulo active") : "triangulo"}/>
            </div>

            <div
                className="link"
            >
                <Link 
                    aria-label="sección contacto"
                    to="/contacto"
                    className={ (option.contact === active) ? "active" : ""}
                >
                    <ContactIcon/>
                </Link>
                <div className={ (option.contact === active) ? ("triangulo active") : "triangulo"}/>
            </div>
        </div>
    )
}