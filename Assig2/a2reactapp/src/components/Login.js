import React, { useEffect, useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import { useNavigate, useOutletContext } from 'react-router-dom';
import "./Login.css"
import { FaLock, FaUser } from "react-icons/fa";



function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useOutletContext();
    function onSubmit(e) {
        e.preventDefault();

        //extract input values from Form
        const form = e.target;
        const formData = new FormData(form);
        const userName = formData.get("userName");
        const password = formData.get("password");

        //encrypt the password
        const passwordHash = SHA256(password).toString();

        /**Making post request to send credentials for a log in
         * Ref: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 
         * 
         */
        var request = new Request(`http://localhost:5147/api/Login?userName=${userName}&passwordHash=${passwordHash}`, {
            method: 'Post',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify({ userName, password: passwordHash }),
        });

        //checks validation of provided credentials
        fetch(request)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Check the response here
                if (data == true) {
                    setIsLoggedIn(true);
                    setUser(userName);
                   
                    //After successful Login redirects to the Home pagehttps://reactrouter.com/en/main/hooks/use-navigate 
                    navigate("/Home");
                } else {
                    alert("Login failed");
                }
            })
            .catch(error => console.error("Error" + error));

    }

    return (
        <div className="wrapper">   
            <form onSubmit={onSubmit}>
                <h1>Please Login</h1>

                <div className="input-box">
                    <input type="text" name="userName"
                        placeholder="Enter username" required />
                    <FaUser className="icon" />
                </div>

                <div className="input-box">
                    <input type="password" name="password"
                        placeholder="Enter password" required />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />Remember </label>
                    <a href="#">Forgot password</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login;
