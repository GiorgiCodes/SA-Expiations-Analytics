import React, { useEffect, useState } from 'react';
import SHA256 from 'crypto-js/sha256';



function Login() {   

    return (
      
            <div className="row">
                <div className="col-3">
                    <input type="text" name="userName" className="form-control"
                        placeholder="Enter username" />
                </div>
                <div className="col-3">
                    <input type="password" name="password"
                        className="form-control" placeholder="Enter password" />
                </div>
                <div className="col-auto">
                    <button type="submit" className="form-control btn btn-primary">Login</button>
                </div>
            </div>
      
    )
}

export default Login;
