import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from './routes/Privacy';
import About from './routes/About';
import Home from './routes/Home';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="Home" element={<Home />} />
                    <Route path="Privacy" element={<Privacy />} />
                    <Route path="About" element={<About />} />                      
                    <Route path="" element={<Home />} /> {/**route when URL is localhost: [port] */}
                    <Route path="*" element={<Home />} />{/**route matches anything */}
                    <Route path="/Login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
