import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';
import revenue from './Image/revenue.jpg'
import './Home.css'
const HomePage = () => {


    return (
        <>
            <div className="home-page">
                <ImageCarousel />
            </div>
            <div className="cont">
                <div className="info">
                    <h2> Join our community in creating a more sustainable future for everyone</h2>
                    <p>

                        At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.


                        Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can
                        adopt to reduce your impact on the environment.
                    </p>
                </div>
                <div className="image">
                    <img src={revenue} alt="Image" />
                </div>
            </div>


            <div className="cont">
                <div className="info">
                    <h2> Carefully curated Eco-friendly products</h2>
                    <p>


                        We believe that every purchase you make can have a positive impact on the planet and the future.


                        Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based
                        on their environmental and social benefits.
                    </p>
                </div>
                <div className="image">
                    <img src={revenue} alt="Image" />
                </div>
            </div>
        </>
    );
};

export default HomePage;
