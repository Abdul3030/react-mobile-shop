import React from 'react';

import './SignUp.scss';


const SignIn = () => {
    const onSubmitHandler = (e) => {

        e.preventDefault();
    }
    return (
        <div className="signup-container">
            <div className="signup-wrapper">
                <h2 className="signup-title">Sign In</h2>
                <form onSubmit={onSubmitHandler} className="signup-form">
                    <div className="field-wrapper">
                        <input type="email" placeholder="Enter email.." className="input-field"/>
                    </div>
                    <div className="field-wrapper">
                        <input type="password" placeholder="Enter Password" className="input-field"/>
                    </div>
                    <button type='submit' className="submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
};



export default SignIn;