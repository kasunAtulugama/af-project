import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img1 } from "../images/img1.jpg"
import { img2 } from "../images/img2.jpg"

function HomeCarousel() {
    return (
        <Carousel>
            <div>
                <img src={img1}/>
                <p className="legend">Img 1</p>
            </div>
            <div>
                <img src={img2}/>
                <p className="legend">Img 1</p>
            </div>
        </Carousel>
    )
}
