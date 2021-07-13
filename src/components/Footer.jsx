import React from 'react';

const Footer = () => {
    return (
        <footer className="footer_box">
            <div className="container"> 
                <aside className="social_links">
                    <ul className="social_bar_list">
                        <li className="social_bar_item">
                            <a href="https://github.com/Dario-MF" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                        </li>
                        <li className="social_bar_item">
                            <a href="https://www.linkedin.com/in/dario-mf/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                        </li>
                        <li className="social_bar_item">
                            <a href="https://twitter.com/dariju_mf" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                        </li>
                        <li className="social_bar_item">
                            <a href="#contactForm" rel="noopener noreferrer"><i className="bi bi-envelope"></i></a>
                        </li>
                        <li className="social_bar_item">
                            <a href="#header" rel="noopener noreferrer"><i className="bi bi-arrow-up-square"></i></a>
                        </li>
                    </ul> 
                </aside> 
                <p className="copyright">Programado con ❤️ y mucho ☕</p>
                <p className="copyright">© 2021 Todos los derechos reservados • Dario Mariño Ferrada</p>
            </div>
        </footer>
    )
};

export default Footer;
