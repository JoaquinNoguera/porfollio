import imgCoro01 from './Corona/01.png';
import imgCoro02 from './Corona/02.png';
import imgCoro03 from './Corona/03.png';
import NodeIcon from './Tecnologias/nodejs-icon.svg';
import ReactIcon from './Tecnologias/reactjs-icon.svg';
import MongoIcon from './Tecnologias/mongodb-icon.svg';

export const works = [
    {
        id: 0,
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
        url: "https://joaquinnoguera.github.io/CoronaInfo/",
        git: "https://github.com/JoaquinNoguera/CoronaInfo"
    }
]
    