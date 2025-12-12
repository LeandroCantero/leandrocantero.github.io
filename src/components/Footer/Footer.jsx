import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { RESUME_DATA } from '../../data/resume';
import './Footer.css';

const Footer = () => {
    const { language } = useLanguage();
    const data = RESUME_DATA[language];

    return (
        <footer className="main-footer">
            <div className="container footer-content">
                <p className="copyright">
                    © 2025 {data.name}. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
                </p>
                <p className="made-with">
                    {language === 'en' ? 'Made with' : 'Hecho con'} <span className="highlight">React</span> & <span className="highlight">Framer Motion</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
