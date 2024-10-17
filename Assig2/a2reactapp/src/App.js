import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <div className="App">
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
        </div>

    );
}

export default App;


