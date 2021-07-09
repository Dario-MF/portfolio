import React from 'react';
import imgPerfil from "../assets/img/perfil.jpg"

const Header = () => {
    return (
        <div className='header'>
            <div className="header_box_img">
                <div className="box_yellow animate__animated animate__rotateInUpLeft"></div>
                <img  className="box_img animate__animated animate__fadeInLeft" src={imgPerfil} alt="perfil Dario MF" />
            </div>
            <div className="header_title">
                 <h1 className='title_name'>DARIO</h1>
                 <h1 className='title_surnames'>MARIÑO</h1>
                 <h2 className='title_position animate__animated animate__fadeInRight'>FRONTEND DEVELOPER</h2>
                 <button className='btn_download_cv'>Download CV</button>
            </div>
        </div>
    )
};

export default Header;
