import React from 'react';
import GithubIcon from '../../assets/svg/github.svg';
import CorreoIcon from '../../assets/svg/correo.svg';
import LinkedinIcon from '../../assets/svg/linkedin.svg';
import ArrowDownIcon from '../../assets/svg/arrowDown.svg';
import cv from '../../assets/data/cv.pdf';
import './style.scss';

export default function Hi(props){
    const {goProject} = props;
    return(
        <div id="hi-container">
            <div className="text-container">
                <h1>Hola,</h1>
                <h1>Soy Joaquín Noguera V.</h1>
                <h2>Junior developer</h2>
                <hr/>
                <p> Contactame </p>
                <div>
                    <a 
                        href="https://github.com/JoaquinNoguera/"
                        className="link-contact"
                    >
                        <GithubIcon/>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/joaqu%C3%ADn-noguera-velazquez-043234138/"
                        className="link-contact"
                    >
                        <LinkedinIcon/>
                    </a>
                    <a 
                        href="mailto:nvjoaquin@gmail.com"
                        className="link-contact"
                    >
                        <CorreoIcon/>
                    </a>
                </div>
                <div>
                    <a
                        href={cv}
                        className="get-cv"
                    >
                        Descarga mi CV
                    </a>
                </div>
            </div>
            
            <div
                 className="button-scroll"
            >
                <button
                onClick={goProject}
                >          <span>Ve mis proyectos</span>
                        <ArrowDownIcon/>
                </button>
            </div>
        </div>
    );
}