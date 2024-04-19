import React from 'react'
import police from './Image/police.jpg';

const About = () => {
    return (
        <div>
            <div className="cont">
                <div className="info">
                    <h2>    About Ecoyaan</h2>
                    <p>




                        At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.


                        We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:

                        Tips and tricks to adopt a more eco-friendly and low-waste lifestyle
                        Videos, posts, and quizzes on climate change and sustainability
                        Events and pledges that invite you to adopt a more sustainable lifestyle
                    </p>
                </div>
                <div className="image">
                    <img src={police} alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default About