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
                <meta property="og:title" content="Porfolio" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content=" http://www.joaquinnoguera.com/" />
                <meta property="og:image" content=" http://res.cloudinary.com/dbtp7mkgk/image/upload/c_scale,h_200,w_200/v1/porfolio/DSCN5169_vnq1bv.jpg" />
                <meta property="og:description" content="En esta página podras ver todos mis trabajos y proyectos." />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Porfolio" />
                <meta name="twitter:description" content="En esta página podras ver todos mis trabajos y proyectos." />
                <meta name="twitter:creator" content="@nvjoaquin13" />
                <meta name="twitter:image" content="http://res.cloudinary.com/dbtp7mkgk/image/upload/c_scale,h_200,w_200/v1/porfolio/DSCN5169_vnq1bv.jpg" />


                <title> Porfolio </title>
    
                <meta name="description" content="En esta página podras ver todos mis trabajos y proyectos." />
                <meta name="apple-mobile-web-app-title" content="Porfolio" />
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
                    PORFOLIO
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
                        aria-label="porfolio"
                    >
                    <GitIcon/>
                    </a>
                </div>
            
            </Content>
        </div>
    )
}