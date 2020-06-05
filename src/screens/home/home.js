import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import GithubIcon from '../../static/github.svg';
import ArrowIcon from '../../static/proximo.svg';
import img from '../../static/DSCN5169.JPG';
import CV from '../../static/CV.pdf';

import './style.scss';

export default function (){
    console.log(CV);
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
            >
                <div
                    className="arrow"
                >
                    <Link to="/porfolio">
                        <ArrowIcon/>
                    </Link>
                </div>
                <img src={img} />
            </div>
            <h1>
                Joaquín Noguera Velazquez
            </h1>
            
            <h2> 
                Desarrollador Web
            </h2>
            <a href={CV}>
            <button>
                DESCARGAR CV
            </button>
            </a>
        </Content>
        </div>
    );
}