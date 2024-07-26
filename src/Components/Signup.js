// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/signup', {
                username,
                email,
                password
            });
            setMessage('');
        } catch (error) {
            setMessage('Signup failed. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="header">
                <img src="/instaText.png" alt="Instagram" className="instagram-logo" />
            </div>
            <form onSubmit={handleSignup}>
                <a href="https://www.facebook.com/" className="facebook-login">Continue with Facebook</a>
                <div className="divider">OR</div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Phone number, username, or email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <a href="https://www.instagram.com/accounts/password/reset/" className="forgot-password">Forgot password?</a>
                <button type="submit" className="login-button" disabled={!username || !password}>Log in</button>
                {message && <p>{message}</p>}
            </form>
            <div className="signup-link">
                Don't have an account? <a href="https://www.instagram.com/accounts/emailsignup/">Sign up</a>
            </div>
            <div className="footer">
                <p class ="fromText">from</p>
                <img src="/metaLogo.png" alt="Meta" className="meta-logo" />
            </div>
        </div>
    );
};

export default Signup;
