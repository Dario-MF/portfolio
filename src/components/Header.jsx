import React from 'react';
import imgPerfil from "../assets/img/perfil.jpg";
import cvPdf from "../assets/downloads/curriculum_dario_mariño.pdf";

const Header = () => {

    return (
        <div className='header' id="header">
            <div className="header_box_img">
                <div className="box_yellow" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"></div>
                <img  className="box_img"data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-sine" src={imgPerfil} alt="perfil Dario MF" />
            </div>
            <div className="header_title">
                 <h1 className='title_name'>DARIO</h1>
                 <h1 className='title_surnames'>MARIÑO</h1>
                 <h2 className='title_position' data-aos="fade-left"  data-aos-duration="1500">FRONTEND DEVELOPER</h2>
                 <a href={cvPdf} download="Curriculum_Dario_Mariño">
                    <button className='btn_download_cv' >Download CV</button>
                 </a>
            </div>
        </div>
    )
};

export default Header;
