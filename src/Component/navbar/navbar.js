import React from 'react';
import IconMenu from '../../assets/svg/menu.svg';
import './style.scss';

export default function Navbar(props){

    const {goProject,goHi} = props;

    const[show,setShow] = React.useState(false);

    return (
        <>
        <div id="navbar-container">
            <div>
                <span id="nombre">Joaquin</span>
                <span id="apellido">Noguera</span>
            </div>
            <ul
                className="option"
            >
                <li
                    onClick={goHi}        
                >
                    Home
                </li>
                <li>sobre mi</li>
                <li
                    onClick={goProject}
                >
                    mis proyectos
                </li>
            </ul>
            <button
                onClick={()=>{setShow(!show)}}
            >
                <IconMenu/>
            </button>
        </div>
        <div className={(show) ? ("dropDown") : ("dropDown hide")}>
            <ul
                className="option"
            >
                <li
                     onClick={() => {
                        setShow(false);
                        goHi();
                        }
                }
                >
                    Home
                </li>
                <li>sobre mi</li>
                <li
                    onClick={()=>{
                        setShow(!show);
                        goProject()
                        }
                    }
                >
                    mis proyectos
                </li>
            </ul>
        </div>
        </>
    );
}