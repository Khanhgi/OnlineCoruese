// import React, { useState,useEffect } from 'react';
import React from 'react';
import './LoginFormAdmin.scss';
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Logo from "../../../src/Assets/Image/Logo.png";
// import Video from "../../../src/Assets/Video/Login and register background.mp4";
// import axios from "axios";

function LoginFormAdmin () {

    // useEffect(() => {
    //     const fectchAdmin = async () => {
    //         try {
    //             const response = await axios  
    //                 .get('http://localhost:5240/api/StudentApi');
               
    //             console.log(response.data)
    //         } catch (error) {
    //             console.error("Error fetching student:", error);
    //         }
    //     };

    //     fectchAdmin();
    // }, []);

    return (
            <div className='wrapper'>
            <form action="">
                <div>
                    <img src={Logo} alt='Website Logo' />
                    <h1>Welcome Admin</h1>
                </div>
                <div className="input-box">
                    <input type='text' placeholder='Account' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type='password' placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <button type='submit'>Login</button>

            </form>
                    {/* <video autoPlay muted playsInline className="background-video">
                        <source src={Video} type="video/mp4" />
                </video>   */}
        </div>
        
    );
};

export default LoginFormAdmin;