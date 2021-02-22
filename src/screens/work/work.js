import React from 'react';
import Nav from '../../Components/Nav';
import { Helmet } from 'react-helmet';
import Content from '../../Components/Content';
import WorkCard from '../../Components/work-card';
import GitIcon from '../../static/github.svg';
import { works } from '../../static/data';
import './style.scss';

export default function () {

    const worksList = works.map( w => {
        return  <WorkCard
                    key={w.id}
                    name={w.name}
                    img={w.img[0]}
                />;
    })

    return(
        <div
            id="work"
        >
            <Helmet>
            <link rel="canonical" href="https://www.joaquinoguera.com/portfolio" />
                <title> Portfolio </title>
    
                <meta name="description" content="Lista categorizadas de todos los proyectos más importantes que he desarrollado, utilizando diversas tecnologías y en diversos ecosistemas de trabajo.." />
                <meta name="apple-mobile-web-app-title" content="Portfolio" />
            </Helmet>
            <Nav
                active ="WORK"
            />
            <Content
                  className="flex-column"
            >
                <h1
                    className="header-work"
                >
                    PORTFOLIO
                </h1>
                
                <div
                    className="works-container"
                >
                    { worksList }
                </div>
                
                <div className="git-enlace">
                    <h3>Mas proyectos en github</h3>
                    <a
                        href="https://github.com/JoaquinNoguera"
                        aria-label="portfolio"
                    >
                    <GitIcon/>
                    </a>
                </div>
            
            </Content>
        </div>
    )
}