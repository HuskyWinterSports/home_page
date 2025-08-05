import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

import '../assets/Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <button className={`navbar-toggle ${isOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
                <span className="navbar-icon"></span>
            </button>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                <ul className="navbar-links">
                    <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <NavLink to="/" end>Home</NavLink>
                    </li>
                    <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <NavLink to="/lesson-info">Lessons</NavLink>
                        <ul className={`dropdown ${hovered ? 'is-active' : ''}`}>
                            <li><NavLink to="/lesson-info">Lesson Info</NavLink></li>
                            <li><NavLink to="/lesson-registration">Lesson Registration</NavLink></li>
                            <li><NavLink to="/join-our-mailing-list">Join Our Mailing List</NavLink></li>
                        </ul>
                    </li>
                    <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <NavLink to="/become-an-instructor">Club Info</NavLink>
                        <ul className={`dropdown ${hovered ? 'is-active' : ''}`}>
                            <li><NavLink to="/become-an-instructor">Become an Instructor</NavLink></li>
                            <li><NavLink to="/diversity-and-inclusion">Diversity and Inclusion</NavLink></li>
                        </ul>
                    </li>
                    <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <NavLink to="/faq">Questions</NavLink>
                        <ul className={`dropdown ${hovered ? 'is-active' : ''}`}>
                            <li><NavLink to="/faq">FAQ</NavLink></li>
                            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}