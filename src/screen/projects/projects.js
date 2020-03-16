import React from 'react';
import projectData from '../../assets/data/projects';
import CardProject from './cardProject';
import './style.scss';



export default function Projects() {
    const projectList = projectData.map((p) => {
        return <CardProject
            key={p.id}
            title={p.title}
            tec = {p.tec}
            site = {p.site}
            github = {p.github}
            image = {p.image}
        />
    })

    return(
        <div id="projects-container">
            <h1 className="title">
                Proyectos
            </h1>
            <div className="wrapper-cards">
                {projectList}
            </div>
        </div>
    );
}