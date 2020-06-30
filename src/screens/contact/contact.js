import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import emailjs from 'emailjs-com';
import SendIcon from '../../static/enviar.svg';
import './style.scss';

export default function(){

    let loading = false;

    function sendEmail(e) {
        e.preventDefault();

        if( loading ) return;
        else{
            loading = true;
    
            emailjs.sendForm('gmail', 'template_2eXUtmK3', e.target, 'user_t5UCNPVa95seCB8yS2ND0')
              .then(() => {
                    document.getElementById("input-name").value = "";
                    document.getElementById("input-subject").value = "";
                    document.getElementById("input-email").value = "";
                    document.getElementById("textarea-message").value = "";
                    loading = false;
                    alert("El mensaje ha sido enviado correctamente");
              }, () => {
                  loading = false;
                  alert("Ha ocurrido un error, pruebe nuevamente en unos minutos")
              });
        }
      }

    return(
        <div>
              <Helmet>
                <link rel="canonical" href="https://www.joaquinoguera.com/contacto" />
                <meta property="og:title" content="Contacto" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content=" http://www.joaquinnoguera.com/contacto" />
                <meta property="og:image" content=" https://external.faep9-1.fna.fbcdn.net/safe_image.php?d=AQAZstNL2GKf8bXk&w=584&h=584&url=https%3A%2F%2Fres.cloudinary.com%2Fdbtp7mkgk%2Fimage%2Fupload%2Fv1%2Fporfolio%2FDSCN5169_vnq1bv.jpg&_nc_hash=AQCwYe-R5DiuKmF6" />
                <meta property="og:description" content="Contactame conmigo, escríbeme tus dudas o preguntas que estaré disponible para responderlas" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Contacto" />
                <meta name="twitter:description" content="Contactame conmigo, escríbeme tus dudas o preguntas que estaré disponible para responderlas" />
                <meta name="twitter:creator" content="@nvjoaquin13" />
                <meta name="twitter:site" content="@nvjoaquin13" />
                <meta name="twitter:image" content="https://external.faep9-1.fna.fbcdn.net/safe_image.php?d=AQAZstNL2GKf8bXk&w=584&h=584&url=https%3A%2F%2Fres.cloudinary.com%2Fdbtp7mkgk%2Fimage%2Fupload%2Fv1%2Fporfolio%2FDSCN5169_vnq1bv.jpg&_nc_hash=AQCwYe-R5DiuKmF6" />


                <title>Contacto </title>
    
                <meta name="description" content="Contactame conmigo, escríbeme tus dudas o preguntas que estaré disponible para responderlas" />
                <meta name="apple-mobile-web-app-title" content="Contacto" />
            </Helmet>
            <Nav
                active ="CONTACT"
            />
            <Content
                className="flex-column"
            >
                <h1
                    id="header-contact"
                >
                    CONTACTAME
                </h1>
                <form id="contact-form" onSubmit={sendEmail}>
                    <input 
                        id="input-name"
                        placeholder="Nombre"
                        required={true}
                        name="name"
                        aria-label="nombre"
                    />
                    <input 
                        id="input-subject"
                        placeholder="Asunto"
                        required={true}
                        name="subject"
                        aria-label="asunto"
                    />
                      <input 
                        id="input-email"
                        placeholder="Correo"
                        required={true}
                        type="email"
                        name="email"
                        aria-label="email"
                    />
                    <textarea
                        id="textarea-message"
                        placeholder="Mensaje"
                        aria-label="mensaje"
                        required={true}
                        name="message"
                    />    
                    <button type="submit">
                        Enviar
                        <SendIcon/>
                    </button>
                </form>
            </Content>
        </div>
    )
}