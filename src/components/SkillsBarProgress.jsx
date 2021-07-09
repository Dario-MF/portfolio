import React from 'react';

const SkillsBarProgress = () => {
    return (
        <article className="progress_bar_box">
            <h2  className="progress_bar_title">MY SKILLS</h2>
            <ul className="progress_bar_list">
                <li>
                    <h3 className="progress_bar_name progress_bar_javascript">JavaScript</h3>
                    <span className="progress_bar"><span className="javascript"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_react">React</h3>
                    <span className="progress_bar"><span className="react"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_node">Node.js</h3>
                    <span className="progress_bar"><span className="node"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_mongo">MongoDB</h3>
                    <span className="progress_bar"><span className="mongo"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_html">HTML5</h3>
                    <span className="progress_bar"><span className="html"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_css">CSS</h3>
                    <span className="progress_bar"><span className="css"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_sass">SASS</h3>
                    <span className="progress_bar"><span className="sass"></span></span>
                </li>
                <li>
                    <h3 className="progress_bar_name progress_bar_rwd">RWD</h3>
                    <span className="progress_bar"><span className="rwd"></span></span>
                </li>

            </ul>
            
        </article>
    )
};

export default SkillsBarProgress;
