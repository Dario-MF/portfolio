import React, { useEffect } from 'react';

const SocialBar = () => {

    useEffect(() => {
        const scrollElements = document.querySelectorAll(".social_bar_list");
        const scroll = () => {
            const elementTop = scrollElements[0].getBoundingClientRect().top;
            return (
                elementTop <=
                (window.innerHeight || document.documentElement.clientHeight) / 1
            );    
        };
        window.addEventListener("scroll", () => { 
            if (scroll()) {
                scrollElements[0].classList.add("social_bar_active");
            }
        });  
     }, []);


    return (
        <aside className="social_bar_box">
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
    )
};

export default SocialBar;
