import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../context/LanguageContext';
import { RESUME_DATA, UI_TEXT } from '../../data/resume';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionWrapper from '../UI/SectionWrapper';
import './Contact.css';

const Contact = () => {
    const { language } = useLanguage();
    const data = RESUME_DATA[language];
    const ui = UI_TEXT[language];

    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH USER'S ACTUAL IDS
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

        // Mock success for now since we don't have keys
        setTimeout(() => {
            // To enable real sending, uncomment below and comment this mock block
            /*
            emailjs.sendForm('service_placeholder', 'template_placeholder', form.current, 'public_key_placeholder')
                .then((result) => {
                    setStatus('success');
                    form.current.reset();
                }, (error) => {
                    setStatus('error');
                });
            */
            console.log("EmailJS would send form here");
            setStatus('success');
            form.current.reset();
        }, 1500);
    };

    return (
        <SectionWrapper id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title gradient-text">{ui.sections.contact}</h2>

                <div className="contact-container">
                    <form ref={form} onSubmit={sendEmail} className="contact-form glass glow-hover">
                        <h3 className="form-title">{language === 'en' ? 'Get in Touch' : 'Envíame un mensaje'}</h3>

                        <div className="form-group">
                            <label htmlFor="user_name">{language === 'en' ? 'Name' : 'Nombre'}</label>
                            <input type="text" name="user_name" id="user_name" required className="form-input" placeholder={language === 'en' ? 'John Doe' : 'Juan Perez'} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_email">{language === 'en' ? 'Email' : 'Email'}</label>
                            <input type="email" name="user_email" id="user_email" required className="form-input" placeholder={language === 'en' ? 'john@example.com' : 'juan@ejemplo.com'} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{language === 'en' ? 'Message' : 'Mensaje'}</label>
                            <textarea name="message" id="message" rows="5" required className="form-input" placeholder={language === 'en' ? 'Your message here...' : 'Tu mensaje acá...'}></textarea>
                        </div>
                        <button type="submit" disabled={status === 'sending'} className="submit-btn">
                            {status === 'sending' ? (language === 'en' ? 'Sending...' : 'Enviando...') : (language === 'en' ? 'Send Message' : 'Enviar Mensaje')}
                        </button>
                        {status === 'success' && <p className="status-msg success">{language === 'en' ? 'Message sent!' : '¡Mensaje enviado!'}</p>}
                        {status === 'error' && <p className="status-msg error">{language === 'en' ? 'Failed to send.' : 'Error al enviar.'}</p>}
                    </form>

                    <div className="social-links-row">
                        {data.contact.social.map((social, i) => (
                            <a
                                key={i}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-pill glass"
                            >
                                {social.name === 'GitHub' ? <FaGithub /> : <FaLinkedin />}
                                <span>{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Contact;
