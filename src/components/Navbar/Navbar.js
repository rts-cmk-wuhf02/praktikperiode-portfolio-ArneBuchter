import React from 'react';
import './Navbar.modules.css'
import NavLink from './Nav-link';

export default () => (
    <nav className="nav">
        <a href="https://angry-banach-514b1a.netlify.app/" target="blank" className="nav__logo">arvi</a>
        <ul>
            <NavLink title="Prices" href="#prices" />
            <NavLink title="What we do" href="#services" />
            <NavLink title="Portfolio" href="https://blissful-almeida-9daaba.netlify.app/" target="blank" />
            <NavLink title="Support" href="#support" />
            <NavLink title="Marketing" href="#marketing" />
            <NavLink title="Contact" href="#contact" />
        </ul>
    </nav>
)