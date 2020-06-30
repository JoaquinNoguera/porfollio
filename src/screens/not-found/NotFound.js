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
                    <meta property="og:image" content="https://external.faep9-1.fna.fbcdn.net/safe_image.php?d=AQAZstNL2GKf8bXk&w=584&h=584&url=https%3A%2F%2Fres.cloudinary.com%2Fdbtp7mkgk%2Fimage%2Fupload%2Fv1%2Fporfolio%2FDSCN5169_vnq1bv.jpg&_nc_hash=AQCwYe-R5DiuKmF6" />
                    <meta property="og:description" content="Página de error" />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Página no encontrada" />
                    <meta name="twitter:description" content="Página de error" />
                    <meta name="twitter:creator" content="@nvjoaquin13" />
                    <meta name="twitter:image" content="https://external.faep9-1.fna.fbcdn.net/safe_image.php?d=AQAZstNL2GKf8bXk&w=584&h=584&url=https%3A%2F%2Fres.cloudinary.com%2Fdbtp7mkgk%2Fimage%2Fupload%2Fv1%2Fporfolio%2FDSCN5169_vnq1bv.jpg&_nc_hash=AQCwYe-R5DiuKmF6" />
                    <meta name="twitter:site" content="@nvjoaquin13" />

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