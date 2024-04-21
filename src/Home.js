import React from 'react';
import ImageCarousel from './ImageCarousel';
import oil from './Image/oil.jpg'
import impact from './Image/Impact.png'
import story from './Image/story.png'
import './Home.css'
const HomePage = () => {


    return (
        <>
            <div className="home-page">
                <ImageCarousel />
            </div>
            <div className="containers">
                <div className="text-section">
                    <h1>Join our community in creating a
                        more sustainable future for everyone</h1>
                    <div className='words'>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious
                        community for people and products.</div>

                    <div className='words'>
                        Consider us your partner for all things sustainable. To keep you motivated on the journey, we will
                        provide you with engaging information about climate change, the latest updates on climate policies
                        and lifestyle tips that you can adopt
                        to reduce your impact on the environment.
                    </div>
                </div>
                <div className="image-section">
                    <img src={impact} alt="Home" />
                </div>
            </div>

            <div className="containers">
                <div className="text-section">
                    <h1>Carefully curated Eco-friendly products</h1>
                    <div className='words'>We believe that every
                        purchase you make can have a positive
                        impact on the planet and the future.</div>

                    <div className='words'>
                        Soon, we will be connecting you with
                        eco-friendly and sustainable products
                        that are carefully selected based on
                        their environmental and social benefits.
                    </div>
                </div>
                <div className="image-section">
                    <img src={oil} alt="Home" />
                </div>
            </div>


            <div className="containers">
                <div className="text-section">
                    <h1>For businesses that care deeply about sustainability</h1>
                    <div className='words'>Do you run a business that is committed to
                        sustainability in every aspect of your work?</div>
                    <div className='words'>Do you want to
                        showcase your products to an incredible
                        audience
                        of eco-conscious consumers who care?</div>


                    <div className='words'>
                        If yes, then you are the perfect fit for our
                        platform. Our community appreciates and
                        supports businesses that are transparent,
                        ethical, and innovative in their approach
                        to sustainability. Contact us today:
                    </div>
                </div>
                <div className="image-section">
                    <img src={story} alt="Home" />
                </div>
            </div>
        </>
    );
};

export default HomePage;
