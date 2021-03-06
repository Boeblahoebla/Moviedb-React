// Base dependencies
////////////////////

import React from 'react';
import { Link } from 'react-router-dom';


// Component
////////////

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">Like movies</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="nav-link">Overview</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">Features</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">About</div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
