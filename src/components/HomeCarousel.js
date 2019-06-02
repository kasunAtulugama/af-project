import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  img1  from "../images/img1.jpg"
import  img2  from "../images/img2.jpg"


class HomeCarousel extends Component{
    render() {
        return(
            <Carousel>
                <Carousel.Item  >
                    <h1>
                        Hello
                    </h1>
                </Carousel.Item>
            </Carousel>
            );

    }
}
export default HomeCarousel;

