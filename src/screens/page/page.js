import React from 'react';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import { works } from '../../static/data';
import { Link } from 'react-router-dom';
import laptopImg from '../../static/laptop.png';
import NextIcon from '../../static/proximo.svg';
import PrevIcon from '../../static/espalda.svg';
import GithubIcon from '../../static/github.svg';
import BlockIcon from '../../static/bloquear.svg';
import ViewIcon from '../../static/ojo.svg';
import NotFound from '../not-found';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import './style.scss';

export default function (props) {
    
    const name = props.match.params.name;
    
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
                                <div
                                    className="img--wraper"
                                >

                                <img
                                    key={index}
                                    className="img--content"
                                    src={ result.img[index] }
                                    />
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                    <button
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
                            <button>
                                CODIGO
                                <GithubIcon/>
                            </button>
                        </a>
                        )
                    }
                    <a href={result.url}>
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