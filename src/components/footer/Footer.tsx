import React from 'react';
import { EnvelopeSimple, FacebookLogo, InstagramLogo, LinkedinLogo,  } from '@phosphor-icons/react';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="footer-container">
            <div className="container mx-auto border-t border-opacity-30 border-sky-300 p-6">
                <div className="footer-content">
                    <p className="footer-text font-bold">IntiCare | Copyright: 2024</p>
                    <p className="footer-text">Acesse nossas redes sociais</p>
                    <div className="footer-icons">
                        <LinkedinLogo size={48} weight="bold" />
                        <InstagramLogo size={48} weight="bold" />
                        <FacebookLogo size={48} weight="bold" />
                        <EnvelopeSimple size={48} weight="bold"/>
                    </div>
                </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
