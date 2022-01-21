import React from "react";
import './navbar.css';

export default function navbar(){
    return(
        <nav className="navbar fixed-top navbar-expand-lg bg-*">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">4D</a>
            <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mt-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href= "/services">Services</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href= "/recruitment">Join Us</a>
                </li>
                </ul>
                </div>
                </div>
        </nav>
    )
}