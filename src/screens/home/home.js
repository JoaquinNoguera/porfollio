import React from 'react';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import GithubIcon from '../../static/github.svg';
import LinkedinIcon from '../../static/linkedin.svg';
import './style.scss';

export default function (){
    return(
        <div id="home">
        <Nav
            active="HOME"
        />
        <Content
            className="flex-column"
        >
          
            <div>
                <a
                    href="https://github.com/JoaquinNoguera"
                    className="social-icon"
                >
                    <GithubIcon/>
                </a>
                <a
                    href="https://www.linkedin.com/in/joaqu%C3%ADn-noguera-velazquez-043234138/"
                    className="social-icon"
                >
                    <LinkedinIcon/>
                </a>
            </div>
            
            <div 
                className="cover"
            />
        
            <h1>
                Joaquin Noguera Velazquez
            </h1>
            
            <h2> 
                Web Developer
            </h2>
            <button>
                DESCARGAR CV
            </button>
        </Content>
        </div>
    );
}