import React from 'react';

const ProyectCard = ({ card }) => {
    return (
        <li>
            <a href={card.url} target="_blank" rel="noopener noreferrer">
                <div className="proyect_card">
                    <img className="proyect_card_img" src={card.img} alt={card.title} />
                    
                    <div className="proyect_card_info">
                        <h3 className="proyect_card_title">{card.title}</h3>
                        {
                            card.icons.map((icon, i) => (
                                <img src={icon} alt="icon skill" key={i + 1} />
                            ))
                        }
                        <p className="proyect_card_subtitle">{card.subtitle}</p>
                    </div>
                </div>
            </a> 
        </li>
    )
};

export default ProyectCard;
