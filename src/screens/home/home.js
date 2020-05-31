import React from 'react';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import GithubIcon from '../../static/github.svg';
import img from '../../static/DSCN5169.JPG';
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
            </div>
            
            <div 
                className="cover"
                style={{    backgroundImage: `url(${img})`}}
            />
        
            <h1>
                Joaquín Noguera Velazquez
            </h1>
            
            <h2> 
                Desarrollador Web
            </h2>
            <button>
                DESCARGAR CV
            </button>
        </Content>
        </div>
    );
}