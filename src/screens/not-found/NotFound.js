import React from 'react';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import './style.scss';

export default function() {
    return  <div id="not--found">
                <Nav/>
                <Content className="wrap">
                    <h1>
                            <span>404</span> <br/> Error. La página que desea buscar no existe
                    </h1>
                </Content>
            </div>
}