import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './Image/image1.png'
import image2 from './Image/image2.png'
import image3 from './Image/image3.png'

import './ImageCarousel.css';
import { useNavigate } from 'react-router-dom';

const ImageCarousel = () => {
    const navigate = useNavigate();

    const AboutPage = () => {
        navigate('/about')
    }
    return (
        <div className="carousel-container">
            <Carousel autoPlay infiniteLoop dynamicHeight showThumbs={false} showIndicators={false} showStatus={false}>
                <div className='responsive'>
                    <img src={image1} alt="Image1" />
                    <div className="slide-text">
                        <h2>Buy Less, Buy Better!</h2>
                        <div>  Authentic source of truth for your sustainability needs.</div>
                        <button onClick={() => AboutPage()}>About Us</button>
                    </div>

                </div>
                <div>
                    <img src={image2} alt="Image2" />
                    <div className="slide-text">
                        <h2>Follow us on Instagram</h2>
                        <div> For Climate news ,lifestyle tips & updates</div>
                        <a href='https://www.instagram.com/dh________jay/'> <button>Follow Us</button> </a>
                    </div>
                </div>
                <div>
                    <img src={image3} alt="Imag3" />
                    <div className="slide-text">
                        <h2 className='image3'>Are you a business that truly cares about sustainability?
                        </h2>
                        <div>   We would love to work with you</div>
                        <button>Get In Touch</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default ImageCarousel;
