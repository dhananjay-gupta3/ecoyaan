import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bit from './Image/bit.png';
import bitcoin from './Image/bitcoin.jpg';
import micro from './Image/micro.jpg';
import './ImageCarousel.css';

const ImageCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}>
            <div className="carousel-item">
                <img src={bit} alt="Image 1" />
                <div className="overlay">
                    <h2>    Buy Less, Buy Better!</h2>
                   
                    <button>About Us</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src={bitcoin} alt="Image 2" />
                <div className="overlay">
                    <h2>Are you a business that truly cares about sustainability?</h2>

                    <button>Get in Touch</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src={micro} alt="Image 3" />
                <div className="overlay">
                    <h2>Follow us on Instagram</h2>

                    <button>Follow us</button>
                </div>
            </div>
        </Carousel>
    );
}

export default ImageCarousel;
