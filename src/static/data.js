import NodeIcon from './Tecnologias/nodejs-icon.svg';
import ReactIcon from './Tecnologias/reactjs-icon.svg';
import MongoIcon from './Tecnologias/mongodb-icon.svg';
import PostgresqlIcon from './Tecnologias/postgresql-icon.svg';
import SpringIcon from './Tecnologias/springio-icon.svg';
import MustacheIcon from './Tecnologias/mustache-icon.svg';
import MySQLIcon from './Tecnologias/mysql-icon.svg';
import AllegroIcon from './Tecnologias/Allegro-icon.svg';
import FirebaseIcon from './Tecnologias/firebase-icon.svg';
import cplusIcon from './Tecnologias/c++-icon.svg';
import WarningIcon from './warning.svg';
import TeamIcon from './personas.svg';

import React from 'react';


export const works = [
    
    {
        id: 0,
        name: 'ticketer',
        img: [
                'porfolio/Ticketer/01_yqe57z.png',
                'porfolio/Ticketer/05_ammfan.png',
                'porfolio/Ticketer/03_shmpi8.png',
                'porfolio/Ticketer/02_tz7izp.png',
                'porfolio/Ticketer/06_owl5oa.png',
                'porfolio/Ticketer/04_wbo3il.png',
            ],
        tec: [
            {
                id: "t02",
                icon: ReactIcon,
            },
            {
                id: "t04",
                icon: PostgresqlIcon
            },
            {
                id: "t05",
                icon: SpringIcon
            }
        ],
        text:<> 
                <div
                    className="team"
                >
                    <TeamIcon/>
                    <p>
                        En equipo
                    </p>
                </div>
                <div
                    className="warn"
                >
                    <WarningIcon />
                    <p>
                    Esta aplicación está alojada en un dyno gratis de Heroku, por lo tanto los tiempos de carga pueden ser lentos inicialmente
                    </p>
                </div>
                <p>
                Ticketer es una aplicación desarrollada en React.js del lado del frontend. Java, más específicamente Srping framework, del lado del backend. Y PostgresQL junto a Hibernate para la persistencia de datos.
                </p>
                <p>
                La misma nació bajo la necesidad de tener un medio para la organización de las actividades de un proyecto (tickets), de uno o más programadores durante la fase de desarrollo.
                </p>
            </>,
        url: "https://codeticketer.herokuapp.com/",
        git: "https://github.com/JoaquinNoguera/Ticketer/"
    }
    ,
    {
        id: 1,
        name: 'tibimentis',
        img: [
                'porfolio/Tibimentis/05_q4cvvs.png',
                'porfolio/Tibimentis/01_rox6fu.png',
                'porfolio/Tibimentis/02_cz1qps.png',
                'porfolio/Tibimentis/03_mmix82.png',
                'porfolio/Tibimentis/04_bsdt0g.png',
            ],
        tec: [
            {
                id: "t02",
                icon: ReactIcon,
            },{
                id: "t10",
                icon: FirebaseIcon
            }
        ],
        text:<> 
                <div
                    className="warn"
                >
                    <WarningIcon />
                    <p>
                    Esta aplicación esta en desarrollo puede que no todas las funcionalidades esten disponibles
                    </p>
                </div>
                <p>
                Tibimentis es una aplicación desarrollada en React.js junto con Firebase
                </p>
                <p>
                La misma es una primera versión para asentar las bases para una futura página sobre tibimenits. Un pequeño proyecto nacido hace ya unos años sobre una página en la cual compartir pequeñas historias y relatos.  
                </p>
            </>,
        url: "https://tibimenits-blog.web.app/",
        git: "https://github.com/JoaquinNoguera/tibimentis"
    },
    {
        id: 2,
        name: "am-montajes",
        img: [ 
                'porfolio/AyM/01_jhoqhl.png',
                'porfolio/AyM/04_xfechp.png',
                'porfolio/AyM/07_mvehuh.png',
                'porfolio/AyM/03_furfvt.png',
                'porfolio/AyM/02_omkuk1.png',
                'porfolio/AyM/06_qgpc0g.png',
                'porfolio/AyM/05_u5jzsq.png',
            ],
        tec: [
            {
                id: "t01",
                icon: NodeIcon,
            },
            {
                id: "t06",
                icon: MustacheIcon
            },
            {
                id: "t07",
                icon: MySQLIcon
            }
        ],
        text:<>
                <div
                    className="team"
                >
                    <TeamIcon/>
                    <p>
                        En equipo
                    </p>
                </div>
                <div
                    className="warn"
                >
                    <WarningIcon />
                    <p>
                    Esta aplicación esta alojada en un servidor de pruebas hasta ser lanzada la versión final.   
                    </p>
                </div>
                <p>
                Pagina web para AyM, una empresa de montaje y mantenimiento de plantas de silo. El trabajo consistió en una pagina de presentación de la empresa y una sección de ventas, se montó un pequeño backend para tareas administrativas.
                </p>
            </>,
        url: "https://www.piola.ga/",
        git: null,
    },
    {
        id: 3,
        name: "corona-info",
        img: [ 
            'porfolio/CoronaInfo/01_gukxuw.png',
            'porfolio/CoronaInfo/03_nrk8xw.png',
            'porfolio/CoronaInfo/02_uidqlj.png',
            ],
        tec: [ {
                    id: "t01",
                    icon: NodeIcon,
                }, {
                    id: "t02",
                    icon: ReactIcon,
                }, {
                    id: "t03",
                    icon: MongoIcon,
                },],
        text:<>
                <div
                    className="warn"
                >
                    <WarningIcon />
                    <p>
                    Esta aplicación está alojada en un dyno gratis de Heroku, por lo tanto los tiempos de carga pueden ser lentos inicialmente
                    </p>
                </div>
                <p>
                Corona Info es una simple page aplication (SPA) desarrollada en React.js, cuyo objetivo es mostrar la evolución del virus Covid-19 a nivel global. En ella, mediante gráficos de torta, se pueden apreciar las proporciones de los enfermos, curados y muertos en base a la cantidad de contagiados total. Además, mediante gráficos de dispersión, se puede ver su evolución del mismo virus a lo largo del tiempo.
                 </p>
                 <p>
                 Para la persistencia de los datos se desarrolló un backend sencillo desarrollado en Express.js, que recolecta los datos que provee una api externa y los almacena en una base de datos MongoDB. </p>
             </>,
        url: "https://joaquinnoguera.github.io/CoronaInfo/",
        git: "https://github.com/JoaquinNoguera/CoronaInfo/"
    },
    {
        id: 4,
        name: "skyless",
        img: [
            "porfolio/Skyless/Skypess01_zdv5s9",
            "porfolio/Skyless/Skyless02_doc6fr",
            "porfolio/Skyless/Skyless03_cevhkn",
            "porfolio/Skyless/Skyless04_mjmzjl"
        ],
        tec: [
            {
                id: "t08",
                icon: AllegroIcon,
            }, {
                id: "t09",
                icon: cplusIcon,
            },

        ],
        text:   <>
                     <div
                        className="team"
                    >
                        <TeamIcon/>
                        <p>
                            En equipo
                        </p>
                    </div>
                    <p>
                        Skyless es una juego programado en c++ junto con la librería allegro. El mismo consta de un solo level del clásico juego de naves, donde hay que sobrevivir enfrentándose  a los diferentes obstáculos para posteriormente enfrentarse a un jefe final. 
                    </p>
                    <p>
                        El objetivo del proyecto era ser presentado como proyecto final para una catedra de la universidad, siendo una idea divertida y amena de programar.
                    </p>
                </>,
        url: "https://www.dropbox.com/sh/0o5mk5xwazhtu3c/AABLP5Ju94oN77vAxOJNI7Hta?dl=0",
        git: "https://www.dropbox.com/sh/80kxagz57ykftta/AABn1fauvt1PJD5xMtG7RyYTa?dl=0"
    },
    
]
    