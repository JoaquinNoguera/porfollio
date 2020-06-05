import imgCoro01 from './Corona/01.png';
import imgCoro02 from './Corona/02.png';
import imgCoro03 from './Corona/03.png';

import imgTicket01 from './Ticketer/01.png';
import imgTicket02 from './Ticketer/02.png';
import imgTicket03 from './Ticketer/03.png';
import imgTicket04 from './Ticketer/04.png';
import imgTicket05 from './Ticketer/05.png';
import imgTicket06 from './Ticketer/06.png';

import imgAyM01 from './AyM/01.png';
import imgAyM02 from './AyM/02.png';
import imgAyM03 from './AyM/03.png';
import imgAyM04 from './AyM/04.png';
import imgAyM05 from './AyM/05.png';
import imgAyM06 from './AyM/06.png';
import imgAyM07 from './AyM/07.png';

import NodeIcon from './Tecnologias/nodejs-icon.svg';
import ReactIcon from './Tecnologias/reactjs-icon.svg';
import MongoIcon from './Tecnologias/mongodb-icon.svg';
import PostgresqlIcon from './Tecnologias/postgresql-icon.svg';
import SpringIcon from './Tecnologias/springio-icon.svg';
import MustacheIcon from './Tecnologias/mustache-icon.svg';
import MySQLIcon from './Tecnologias/mysql-icon.svg';

import React from 'react';


export const works = [
    
    {
        id: 0,
        name: 'TICKETER',
        img: [ imgTicket01, imgTicket02, imgTicket03, imgTicket04, imgTicket05, imgTicket06 ],
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
                <p>
                Ticketer es una aplicación desarrollada en React.js en el frontend y  Java, mas especificamente Srping framework, del lado del backend, junto a un CRUD de PostgresQL para la persistencia de datos.
                </p>
                <p>
                La misma nació bajo la necesidad de tener un medio para la organización de  las actividades de un proyecto (tickets) de uno o mas programadores durante la fase de desarrollo. 
                </p>
                <p>
                Fue programada en conjunto con <a href="https://github.com/BarbaBlanca97"> Jeremías Chiosso </a>  en un modelo organizativo horizonatal.
                </p>
            </>,
        url: "https://codeticketer.herokuapp.com/",
        git: "https://github.com/JoaquinNoguera/Ticketer/"
    },
    {
        id: 1,
        name: "AyM",
        img: [ imgAyM01, imgAyM02, imgAyM03, imgAyM04, imgAyM05, imgAyM06, imgAyM07],
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
                <p>
                AyM es una página que consta de un server side render desarrollado en express.js junto con mustache (un motor de plantillas) para las vistas y MySQL para la persistencia de datos. 
                </p>
                <p>
                La misma fue desarrolada para una empresa de mantenimiento y montaje de plantas de silos. Tiene la función de presentar a la empresa ante la sociedad y difundir su catalogo de productos que se encuentran al a venta.
                </p>
                <p>
                Fue programada en conjunto con <a href="https://github.com/BarbaBlanca97">Jeremías Chiosso</a> y <a href="https://github.com/HernanLl">Hernan Llull</a> en un modelo organizativo horizonatal.
                </p>
            </>,
        url: "https://www.piola.ga/",
        git: null,
    }
    ,{
        id: 2,
        name: "CORONA INFO",
        img: [ imgCoro01, imgCoro02, imgCoro03 ],
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
                <p>
                 Corona Info es una simple page aplication desarrolada en React.js, cuyo objetivo es mostrar la evolución del virus Covid-19 a nivel global.  En ella, mediante gráficos de torta se pueden apreciar las proporciones de los enfermos, curados y muertos en base a la cantidad de contagiados, pudiendo filtrar por días. Además, mediante gráficos de dispersión se puede ver su evolució a lo largo del tiempo.
                 </p>
                 <p>
                 Para la persistencia de los datos se desarrollo un backend sencillo desarrollado en Express.js que recolecta los datos que provee una api  externa y los almacena en una base de datos MongoDB, alojada en MongoDB Atlas. 
                 </p>
             </>,
        url: "https://joaquinnoguera.github.io/CoronaInfo/",
        git: "https://github.com/JoaquinNoguera/CoronaInfo/"
    }
]
    