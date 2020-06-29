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
                <meta property="og:title" content="Joaquin Noguera - Página Personal" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content=" http://www.joaquinnoguera.com/" />
                <meta property="og:image" content=" http://res.cloudinary.com/dbtp7mkgk/image/upload/c_scale,h_200,w_200/v1/porfolio/DSCN5169_vnq1bv.jpg" />
                <meta property="og:description" content="En esta página podras ver todos mis trabajos y proyectos." />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Joaquin Noguera - Página Personal" />
                <meta name="twitter:description" content="En esta página podras ver todos mis trabajos y proyectos." />
                <meta name="twitter:creator" content="@nvjoaquin13" />
                <meta name="twitter:image" content="http://res.cloudinary.com/dbtp7mkgk/image/upload/c_scale,h_200,w_200/v1/porfolio/DSCN5169_vnq1bv.jpg" />


                <title>Joaquin Noguera - Página Personal </title>
    
                <meta name="description" content="En esta página podras ver todos mis trabajos y proyectos." />
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
            <a 
                aria-label="curriculum"
                href={CV}
            >
            <button>
                DESCARGAR CV
            </button>
            </a>
        </Content>
        </div>
    );
}