import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <nav className="purple pink darken-2 px1">
            <div className="nav-wrapper">
            <div className="brand-logo">React JS & TS</div>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Todo List</NavLink></li>
                <li><NavLink to="/about">Information</NavLink></li>
            </ul>
            </div>
        </nav>
    );
};