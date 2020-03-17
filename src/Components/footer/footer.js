import React from 'react';
import GithubIcon from '../../assets/svg/github.svg';
import './style.scss';

export default function Footer(){
    return(
        <div
            id="footer-container"
        >
            <h1>Gracias por pasarte</h1>
            <a
                href="https://github.com/JoaquinNoguera/porfolio"
            >
                <GithubIcon/>
                ver el codigo de la página
                </a>
        </div>
    );
}