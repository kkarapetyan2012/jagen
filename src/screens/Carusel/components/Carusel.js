import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Carusel.sass'
 
export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className="position-rel">
                    <img src="images/slider.png" alt="slider" />
                    <img className="mini" src="images/fish_2.png" alt="slider" />
                    <img className="mini1" src="images/fish.png" alt="slider" />
                    <img className="mini2" src="images/fishT.png" alt="slider" />
                    <p className="legend">о компании</p>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                </div>
                <div className="position-rel">
                    <img src="images/slider.png" alt="slider" />
                    <img className="mini" src="images/fish_2.png" alt="slider" />
                    <img className="mini1" src="images/fish.png" alt="slider" />
                    <img className="mini2" src="images/fishT.png" alt="slider" />
                    <p className="legend">о компании</p>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                </div>
                <div className="position-rel">
                    <img src="images/slider.png" alt="slider" />
                    <img className="mini" src="images/fish_2.png" alt="slider" />
                    <img className="mini1" src="images/fish.png" alt="slider" />
                    <img className="mini2" src="images/fishT.png" alt="slider" />
                    <p className="legend">о компании</p>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                </div>
                <div className="position-rel">
                    <img src="images/slider.png" alt="slider" />
                    <img className="mini" src="images/fish_2.png" alt="slider" />
                    <img className="mini1" src="images/fish.png" alt="slider" />
                    <img className="mini2" src="images/fishT.png" alt="slider" />
                    <p className="legend">о компании</p>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                </div>
            </Carousel>
        );
    }
}