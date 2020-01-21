import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Carusel.sass'
 
export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="images/slider.png" alt="slider" />
                    <img className="mini" src="images/fish_2.png" alt="slider" />
                    <p className="legend">о компании</p>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                </div>
                <div>
                    <img src="images/slider.png" alt="slider" />
                    <img className="mini" src="images/fish_2.png" alt="slider" />
                    <p className="legend">о компании</p>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                </div>
                <div>
                    <img src="images/slider.png" alt="slider" />
                    <img className="mini" src="images/fish_2.png" alt="slider" />
                    <p className="legend">о компании</p>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                </div>
            </Carousel>
        );
    }
}