import React from 'react';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import { works } from '../../static/data';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import NextIcon from '../../static/proximo.svg';
import PrevIcon from '../../static/espalda.svg';
import GithubIcon from '../../static/github.svg';
import BlockIcon from '../../static/bloquear.svg';
import ViewIcon from '../../static/ojo.svg';
import NotFound from '../not-found';
import { Image } from 'cloudinary-react';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import './style.scss';

export default function (props) {
    
    const name = props.match.params.name;

    const imgWrapper = document.getElementById("img--wraper");
    const laptopWrapper = document.getElementById("laptop--wrap");

    const result = works.find( w => w.name === name);
    
    if(!result) return <NotFound/>
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

    if( imgWrapper ){
        console.log( imgWrapper.clientWidth )
    }
    return(
        <div>
            <Helmet>
                <link rel="canonical" href={`https://www.joaquinoguera.com/portfolio/${ name }`} />
                <meta property="og:title" content={ name.toUpperCase() } />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.joaquinoguera.com/portfolio/${ name }`} />
                <meta property="og:image" content="https://res.cloudinary.com/dbtp7mkgk/image/upload/v1593211598/porfolio/DSCN5169_vnq1bv.jpg" />
                <meta property="og:description" content={` Bienvenidos a ${ name } , enterate de qué se trata el proyecto y las tecnologías aplicadas en su desarrollo`} />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={ name.toUpperCase() } />
                <meta name="twitter:description" content={` Bienvenidos a ${ name } , enterate de qué se trata el proyecto y las tecnologías aplicadas en su desarrollo`} />
                <meta name="twitter:creator" content="@nvjoaquin13" />
                <meta name="twitter:image" content="https://res.cloudinary.com/dbtp7mkgk/image/upload/v1593211598/porfolio/DSCN5169_vnq1bv.jpg" />
                <meta name="twitter:site" content="@nvjoaquin13" />

                <title> { name.toUpperCase() } </title>
    
                <meta name="description" content={` Bienvenidos a ${ name } , enterate de qué se trata el proyecto y las tecnologías aplicadas en su desarrollo`} />
                <meta name="apple-mobile-web-app-title" content={ name.toUpperCase() } />
            </Helmet>
            <Nav
                active="WORK"
            />
            <Content
                className="flex-column"
            >   

                <h1
                    className="header-page"
                > 
                { name } 
                </h1>
                <div
                    className="carrusel"
                >
                    <button
                        aria-label="imagen anterior"
                        onClick={ handlePrev }
                    >
                        <PrevIcon/>
                    </button>
                    <div
                        id="laptop--wrap"
                    >   
                    {
                        laptopWrapper !== null
                        &&
                        <Image 
                            cloudName="dbtp7mkgk" 
                            publicId="porfolio/laptop_sg1qag.png"
                            width={ ( laptopWrapper.clientWidth + 1 ) }  
                            crop="scale"
                            alt="Laptop"
                            className="laptop"
                        />
                    }
                        
                        <TransitionGroup>
                            <CSSTransition 
                                key={ index }
                                timeout={ 450 }
                                classNames="img-transition" 
                            >  
                                <div
                                    id="img--wraper"
                                >
                                {
                                    (
                                        imgWrapper !== null 
                                        &&
                                        <Image 
                                            cloudName="dbtp7mkgk" 
                                            publicId={ result.img[index] } 
                                            width={ ( imgWrapper.clientWidth + 1 ) }
                                            crop="scale"
                                            alt="Imagen del sitio"
                                            className="img--content"
                                        />
                                    )
                                }
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                    <button
                        aria-label="imagen siguiente"
                        onClick={ handleProx }
                    >
                        <NextIcon/>
                    </button>
                </div>
                {result.text}
                
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
                    {
                        (!result.git) ? 
                        (                         
                        <button
                            className="block"
                        >
                            PRIVADO
                            <BlockIcon/>
                        </button>
                        ) : (
                        <a href={result.git}>                        
                            <button
                                aria-label="codigo"
                            >
                                CODIGO
                                <GithubIcon/>
                            </button>
                        </a>
                        )
                    }
                    <a href={result.url}>
                        <button
                            aria-label="visitar"
                        >
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