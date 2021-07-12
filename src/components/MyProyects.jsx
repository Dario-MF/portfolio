import React from 'react';
import { dataPortfolio } from '../data/dataPortfolio';
import ProyectCard from './ProyectCard';


const MyProyects = () => {
    return (
        <article className="my_proyects_box">
            <h2  className="my_proyects_title">MIS PROYECTOS</h2>
            <p className="my_proyects_subtitle">
                Estos son algunos de mis proyectos desarrollados, se pueden encontrar más en mi 
                <a href="https://github.com/Dario-MF" > GitHub.</a> 
            </p>
            <ul className="my_proyects_cards">
                {
                    dataPortfolio.map((card) => (
                        <ProyectCard 
                            key= {card.id}
                            card= {card}
                        />
                    ))
                }
            </ul>
        </article>
    )
};



export default MyProyects;
