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
                        <NavLink to="/lessons">Lessons</NavLink>
                        <ul className={`dropdown ${hovered ? 'is-active' : ''}`}>
                            <li><NavLink to="/lessons/less">Lesson Info</NavLink></li>
                            <li><NavLink to="/lessons/lesson-registration">Lesson Registration</NavLink></li>
                            <li><NavLink to="/lessons/join-our-mailing-list">Join Our Mailing List</NavLink></li>
                        </ul>
                    </li>
                    <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <NavLink to="/club-info">Club Info</NavLink>
                    </li>
                    <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <NavLink to="/questions">Questions</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}