import React from 'react';
import IconGithub from '../../../assets/svg/github.svg';
import IconView from '../../../assets/svg/ojo.svg';
import './style.scss';

export default function CardProject(props){

    const {title, tec, site, github, image} = props;

    const listTec = tec.map(t => {
    return <h2 key={t}>{t}</h2>;
    })

    return(
        <div 
            id="cardProject-container"
        >
            <div
                className="img"
                style={{backgroundImage: `url(${image})`}}
            />
            <div
                className="hover"
            >
                <h1>{title}</h1>
                <div
                    className="tec-wrapper"
                >
                    {listTec}
                </div>
                <hr/>
                <div
                    className="link-wrapper"
                >
                    <a
                        href={site}
                    >
                        <IconView/>
                        Pagina
                    </a>
                    <a
                        href={github}
                    >
                        <IconGithub/>
                        Codigo
                    </a>
                </div>
            </div>
        </div>
    );
}