import React from 'react';
import './LoginFormClient.scss';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Logo from "../../../src/Assets/Image/Logo.png";
import Video from "../../../src/Assets/Video/Login and register background.mp4";

const LoginFormClient = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <div>
                    <img src = {Logo} alt = 'Website Logo' />
                    <h1>Login to Online Course</h1>
                </div>
                <div className="input-box">
                    <input type='text' placeholder='Email' required/>
                    <MdEmail  className='icon'/>
                </div>
                <div className="input-box">
                    <input type='password' placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>

                <div className='remember-forgot'>
                    <label><input type='checkbox'/> Remembe me</label>
                    <a href='#'>Forgot password ?</a>
                </div>

                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p>Don't have an account ?</p>
                    <a href='#'>Register</a>
                </div>
            </form>

            {/* <video autoPlay muted playsInline className="background-video">
                    <source src={Video} type="video/mp4" />
                </video> */}
        </div>
    );
};

export default LoginFormClient;