import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <div className="App container">
            <nav className="navbar navbar-expand-lg p-4">
                <div className="container-fluid">
                    <Link className="navbar-brand"  to="/">Expiations SA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" to="/Home">Home</Link>
                            <Link className="nav-link active" to="/About">About</Link>
                            <Link className="nav-link active" to="/Privacy">Privacy</Link>
                            <Link className="nav-link active" to="/Login">Login</Link>
                        </div>                       
                    </div>
                </div>
            </nav>
            <Outlet />
            <p id="test">
                Here's some test code for doing the SHA256 crypto stuff:
                <br />
                hunter2 =&nbsp;
                {
                    SHA256('hunter2').toString() //hash for hunter2 = f52fbd32b2b3b86ff88ef6c490628285f482af15ddcb29541f94bcf526a3f6c7
                }
            </p>
        </div>

    );
}

export default App;


