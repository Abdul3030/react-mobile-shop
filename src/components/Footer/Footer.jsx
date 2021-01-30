import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import './Footer.scss';


const Footer = () => {


    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-details">
                    <div className="left">

                    </div>
                    <div className="right">
                        <div className="newsletter-signup">
                            <h1 className="title">
                                newsletter signup
                            </h1>
                            <p className="descriptions">
                            Sign up for our e-mail and be the first who know our special offers! 
                            Furthermore, 
                            we will give a 15% discount on the next order after you sign up.
                            </p>
                            <form className="signup-form">
                                <div className="input-field">
                                    <input type="email" placeholder="Enter your email"/>
                                    <button className="btn-submit">
                                        GET!
                                    </button>
                                </div>
                            </form>
                            <div className="social-icons-wrapper">
                                <div className="social-icon">
                                    <FaFacebookF />
                                </div>
                                <div className="social-icon">
                                    <FaFacebookF />
                                </div>
                                <div className="social-icon">
                                    <FaFacebookF />
                                </div>
                                <div className="social-icon">
                                    <FaFacebookF />
                                </div>
                                <div className="social-icon">
                                    <FaFacebookF />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="copyright-text">
                        &copy; jifakir 2021 All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
};





export default Footer;