import React, { useEffect, useState } from 'react'
import tree from './Image/tree.png'
import trust from './Image/Trust.png'
import authenticity from './Image/Authenticity.png'
import impact1 from './Image/Impact 1.png'
import fun from './Image/Fun.png'
import './About.css'
const About = () => {
    const [windowWidth, setWindowWith] = useState(window.innerWidth);
    const handleSize = () => {
        setWindowWith(window.innerWidth)
    }

    useEffect(() => {

        window.addEventListener('resize', handleSize)

        return () => {
            window.removeEventListener('resize', handleSize)
        }

    }, [])
    return (
        <>
            {
                windowWidth > 768 ? (
                    <div className="cont">
                        <div className="text-section">
                            <h1>About Ecoyaan</h1>
                            <div className='words'>At Ecoyaan, we
                                are more than just a platform. Our goal
                                is to build a community of eco-conscious
                                people who share a common vision
                                and passion for a more sustainable world.</div>

                            <div className='words'>
                                We recognize that sustainability is a
                                journey (as the Sanskrit word “yaan”
                                suggests). To keep you motivated on
                                this journey, on our platform and
                                our social media pages, you can find:
                            </div>
                            <div className='words'>
                                <p> Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</p>
                                <p> Videos, posts, and quizzes on climate change and sustainability</p>
                                <p> Events and pledges that invite you to adopt a more sustainable lifestyle</p>
                            </div>
                        </div>
                        <div className="image-section">
                            <img src={tree} alt="Home" />
                        </div>
                    </div>
                ) : (
                    <div>

                    </div>
                )
            }

            <h1>Our Values</h1>
            <div className="wrap">
                <div className="item">
                    <div className="image">
                        <img src={trust} alt="Image1" />
                    </div>
                    <div className="info">
                        <h2>Trust</h2>
                        <p>
                            We value the trust of our community.
                            We strive to be transparent and honest
                            in everything we do, from the content
                            we share today to
                            sourcing our products in the future.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={authenticity} alt="Image2" />
                    </div>
                    <div className="info">
                        <h2>Authenticity</h2>
                        <p>
                            We are genuine in our mission to
                            promote sustainability and environmental
                            awareness. An authentic community of
                            eco-conscious people can inspire each
                            other on
                            the journey towards sustainability.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={impact1} alt="Image2" />
                    </div>
                    <div className="info">
                        <h2>Impact</h2>
                        <p>
                            We measure our success by our impact on
                            the planet and our community. We aim
                            to empower our sellers and customers
                            to make responsible choices that
                            benefit their
                            well-being and the well-being of others.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={fun} alt="Image2" />
                    </div>
                    <div className="info">
                        <h2>Fun & Engaging</h2>
                        <p>Moving towards a sustainable
                            lifestyle and the constant news around
                            climate change can be stressful. We
                            aim to inject fun and creativity
                            into everything we do, from
                            designing
                            our products to providing services.</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default About