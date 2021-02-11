import React, { useEffect } from 'react';
import BackDrop from '../BackDrop/BackDrop';
import { signInWithGoogle } from '../../firebase/firebase';
import { Link } from 'react-router-dom';

import './SignIn.scss';


const SignIn = ({isSignedIn}) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <BackDrop display={isSignedIn}>
            <div className="signin-container">
                <div className="signin-wrapper">
                    <h2 className="signin-title">Sign In</h2>
                    <form onSubmit={onSubmitHandler} className="signin-form">
                        <div className="field-wrapper">
                            <input type="email" placeholder="Enter email.." className="input-field"/>
                        </div>
                        <div className="field-wrapper">
                            <input type="password" placeholder="Enter Password" className="input-field"/>
                        </div>
                        <button type='submit' className="submit-btn">
                            Submit
                        </button>
                        <button onClick={signInWithGoogle} className="submit-btn">
                            Sign In with Google
                        </button>
                    </form>
                    <div className="redirect">
                        Don't have an account? <Link to='/sign-up'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </BackDrop>
    )
};

export default SignIn;