import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import Portrait from '/Users/margothuet/Documents/Dev/Portfolio/portfolio/src/composants/images/DSC_7733.jpg';



const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_35ozudb', 'template_0vwj2qh', form.current, 'yQyvRWDjwTZR_B8Bs')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };



    return (
        <div>
            <div className="container-contact" id="contact">
                <div className="contact-header">
                    <p>______________________________________________________________</p>
                    <img className="portrait" src={Portrait} alt="portrait" />
                    <p>______________________________________________________________</p>
                </div>
                <h1 className="title-contact">Contact</h1>
                <form ref={form} onSubmit={sendEmail} class="form">
                    <div className="small-inputs">
                    <input required={true} className="nom-input" type="text" name="from_name" id="nom-input" placeholder="Nom"/>
                    <input required={true} className="prenom-input" type="text" name="from_prenom" id="prenom-input" placeholder="Prénom"/>
                    <input required={true} className="email-input" type="email" name="from_email" id="email-input" placeholder="E-mail"/>
                    </div>
                    <input required={true} className="message-input" type="text" name="message" id="message-input" placeholder="Message..."/>
                    <input className="submit-btn" type="submit" value="Envoyer" minLength={10} maxLength="300" />
                </form>
                <div class="social-media-container">
                    <p className="title">Find me </p>
                    <div className="social-accounts">
                        <button className="social-media-btn">
                            <a href="https://www.linkedin.com/in/margot-huet" target="_blank" rel="noreferrer">
                                <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="linkedin-icon">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                </svg>
                            </a>
                        </button>
                        <button className="social-media-btn">
                            <a href="https://github.com/MargotHuet" target="_blank" rel="noreferrer">
                                <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github-icon">
                                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                                </svg>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;