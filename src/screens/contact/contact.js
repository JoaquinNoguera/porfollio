import React from 'react';
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
                    />
                    <input 
                        id="input-subject"
                        placeholder="Asunto"
                        required={true}
                        name="subject"
                    />
                      <input 
                        id="input-email"
                        placeholder="Correo"
                        required={true}
                        type="email"
                        name="email"
                    />
                    <textarea
                        id="textarea-message"
                        placeholder="Mensjae"
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