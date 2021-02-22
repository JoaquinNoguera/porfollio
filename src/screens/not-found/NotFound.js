import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import Error from '../../static/error.svg';
import './style.scss';

export default function() {
    return  <div id="not--found">
                <Helmet>
                    <title> Página error </title>
                    <meta name="description" content="Página de error" />
                    <meta name="apple-mobile-web-app-title" content="Joaquin Noguera - Página no encontrada" />
                </Helmet>
                <Nav/>
                <Content className="wrap">
                    <Error/>
                    <h1>
                     Lo sentimos, la página que desea buscar no existe
                    </h1>
                </Content>
            </div>
}