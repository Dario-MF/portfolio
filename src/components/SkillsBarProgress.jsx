import React, { useEffect } from 'react';
import animatedScroll from '../helpers/animatedScroll';

const SkillsBarProgress = () => {
    useEffect(() => {
       animatedScroll();
    }, [])

    return (
        <article className="progress_bar_box">
            <h2  className="progress_bar_title">CONOCIMIENTOS</h2>
            <ul className="progress_bar_list">
                <li>
                    <h3 className="progress_bar_name progress_bar_javascript" data-aos-offset="100">JavaScript</h3>
                    <span className="progress_bar"><span className="js_scroll javascript"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_react">React</h3>
                    <span className="progress_bar"><span className="js_scroll react"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_node">Node.js</h3>
                    <span className="progress_bar"><span className="js_scroll node"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_mongo">MongoDB</h3>
                    <span className="progress_bar"><span className="js_scroll mongo"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_html">HTML5</h3>
                    <span className="progress_bar"><span className="js_scroll html"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_css">CSS</h3>
                    <span className="progress_bar"><span className="js_scroll css"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_sass">SASS</h3>
                    <span className="progress_bar"><span className="js_scroll sass"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_rwd">RWD</h3>
                    <span className="progress_bar"><span className="js_scroll rwd"></span></span>
                </li>

            </ul>
            
        </article>
    )
};

export default SkillsBarProgress;
