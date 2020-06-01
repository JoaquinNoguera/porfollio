import React from 'react';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import { works } from '../../static/data';
import { Link } from 'react-router-dom';
import laptopImg from '../../static/laptop.png';
import NextIcon from '../../static/proximo.svg';
import PrevIcon from '../../static/espalda.svg';
import GithubIcon from '../../static/github.svg';
import ViewIcon from '../../static/ojo.svg';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import './style.scss';

export default function (props) {
    
    const name = props.match.params.name;
    
    const result = works.find( w => w.name === name);
    
    if(!result) return <div>Ups</div>
    else{

    const [index,setIndex] = React.useState(0);

    const handleProx = () => {
        if( index === (result.img.length - 1))
            setIndex(0);
        else
            setIndex( index + 1 );
    }

    const handlePrev = () => {
        if( index === 0)
            setIndex( result.img.length - 1 );
        else
            setIndex( index - 1 );
    }

    const tecList = result.tec.map(t => {
        
    const svg = t.icon(() => {<svg/>})    
        return <div key={t.id}> { svg } </div>

    }); 
    return(
        <div>
            <Nav
                active="WORK"
            />
            <Content
                className="flex-column"
            >   
                
                <div
                    className="goback"
                >   
                    <Link to="/porfolio">
                        <PrevIcon/>
                    </Link>
                </div>

                <h1
                    className="header-page"
                > 
                { name } 
                </h1>
                <div
                    className="carrusel"
                >
                    <button
                        onClick={ handlePrev }
                    >
                        <PrevIcon/>
                    </button>
                    <div
                        className="laptop--wrap"
                    >   
                        <img 
                            className="laptop" 
                            src={ laptopImg }
                        />
                        <TransitionGroup>
                            <CSSTransition 
                                key={ index }
                                timeout={ 450 }
                                classNames="img-transition" 
                            >  
                                <img
                                    key={index}
                                    className="img--content"
                                    src={ result.img[index] }
                                />
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                    <button
                        onClick={ handleProx }
                    >
                        <NextIcon/>
                    </button>
                </div>
                <p>
                Corona Info es una simple page aplication desarrolada en React.js, cuyo objetivo es mostrar la evolución del virus Covid-19 a nivel global.  En ella, mediante gráficos de torta se pueden apreciar las proporciones de los enfermos, curados y muertos en base a la cantidad de contagiados, pudiendo filtrar por días. Además, mediante gráficos de dispersión se puede ver su evolució a lo largo del tiempo.
                </p>
                <p>
                Para la persistencia de los datos se desarrollo un backend sencillo desarrollado en Express.js que recolecta los datos que provee una api  externa y los almacena en una base de datos MongoDB, alojada en MongoDB Atlas. 
                </p>
                
                <div
                    className="footer--page"
                >
                    <div
                        className="tec--wraper"
                    >
                        <h2> Tecnologías</h2>
                        <div className="icon--container">
                            {tecList}
                        </div>

                    </div>
                    <div
                    className="option--page">
                    <a href="https://github.com/JoaquinNoguera/CoronaInfo">
                        <button>
                            CODIGO
                            <GithubIcon/>
                        </button>
                    </a>
                    <a href="https://joaquinnoguera.github.io/CoronaInfo/">
                        <button>
                            VISITAR
                            <ViewIcon/>
                        </button>
                    </a>
                    </div>
                </div>
            </Content>
        </div>
    );
}}