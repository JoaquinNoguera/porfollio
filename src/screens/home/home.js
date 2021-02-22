import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import GithubIcon from '../../static/github.svg'
import { Image } from 'cloudinary-react';
import CV from '../../static/CV.pdf';
import './style.scss';

export default function (){
    return(
        <div id="home">
        <Helmet>
                <link rel="canonical" href="https://www.joaquinoguera.com/" />
                <title>Joaquin Noguera - Página Personal </title>
                <meta name="description" content="Hola soy Joaquín Noguera y este es mi portfolio. Aquí podrás ver todos mis proyectos personales y trabajos, así como mis competencias en el desarrollo web." />
                <meta name="apple-mobile-web-app-title" content="Joaquin Noguera - Página Personal" />
        </Helmet>
        <Nav
            active="HOME"
        />
        <Content
            className="flex-column"
        >
          
            <div>
                <a
                    aria-label="página de github"
                    href="https://github.com/JoaquinNoguera"
                    className="social-icon"
                >
                    <GithubIcon/>
                </a>
            </div>
            
            <div 
                className="cover"
            >
                <Image 
                    cloudName="dbtp7mkgk" 
                    publicId="porfolio/DSCN5169_vnq1bv.jpg" 
                    width="320" 
                    height="352"  
                    crop="scale"
                    alt="Lugar de trabajo"
                    id="my-image"
                />
            </div>
            <h1>
                Joaquín Noguera Velazquez
            </h1>
            
            <h2> 
                Desarrollador Web
            </h2>
            <div
                className="cv__wrapper"
            >
                <a 
                    aria-label="curriculum"
                    href={CV}
                    >
                <button>
                    DESCARGAR CV
                </button>
                </a>
            </div>
        </Content>
        </div>
    );
}