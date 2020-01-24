import React from 'react';
import Carusel from '../../Carusel/components/Carusel';
import Company from '../../Company/components/Company';
import './About.sass'

const About = () => {
    return (
        <div className="d-flex--fullcenter flex-column">
            <div className="center">
                <Company />
            </div>
            
            <div className="slider demo-carousel">
                <Carusel />
            </div>
            
            
            <div className="center">
                <div className="bottom-callTo">
                    <a className="callTo" href="tel:+79991264417">
                        <img src="images/callto.png" alt="callTo" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;