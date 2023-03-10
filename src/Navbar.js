import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <nav>
                <div className="logo">
                    <>NEWS</>
                </div>
                <div className={`nav-links ${isOpen ? 'show' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="hamburger" onClick={toggleNav}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>

        </div>
    )
}
export default Navbar;