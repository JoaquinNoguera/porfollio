import React from 'react';
import Nav from '../../Components/Nav';
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
                    >
                    <GitIcon/>
                    </a>
                </div>
            
            </Content>
        </div>
    )
}