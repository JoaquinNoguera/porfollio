import React from 'react';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import Error from '../../static/error.svg';
import './style.scss';

export default function() {
    return  <div id="not--found">
                <Nav/>
                <Content className="wrap">
                    <Error/>
                    <h1>
                     Lo sentimos, la página que desea buscar no existe
                    </h1>
                </Content>
            </div>
}