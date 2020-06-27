import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import Error from '../../static/error.svg';
import './style.scss';

export default function() {
    return  <div id="not--found">
                <Helmet>
                    <meta property="og:title" content="Página no encontrada" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content=" http://www.joaquinnoguera.com/" />
                    <meta property="og:image" content={ Error } />
                    <meta property="og:description" content="Página de error" />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Página no encontrada" />
                    <meta name="twitter:description" content="Página de error" />
                    <meta name="twitter:creator" content="@nvjoaquin13" />
                    <meta name="twitter:image" content="http://res.cloudinary.com/dbtp7mkgk/image/upload/c_scale,h_200,w_200/v1/porfolio/DSCN5169_vnq1bv.jpg" />


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