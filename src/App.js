import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase';

import './App.css';

import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import { useEffect } from "react";
import { ActionTypes } from "./store/cartActions";

function App({isSignedIn}) {

  useEffect(()=> {
    auth.onAuthStateChanged( async userAuth => {
      console.log(userAuth);
    if(userAuth){
      const userRef = await  createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot=> {
        isSignedIn(snapShot);
      });
    }
    });
  });

  return (
      <Router>
        <div className="App">
          <Route  path='/' >
            <Home />
          </Route>
          {
            !isSignedIn?
            <Route exact path='/sign-in' >
              <SignIn isSignedIn={true} />
            </Route>:
            null
          }
        </div>
      </Router>
  );
}

const mapDispatchToProps = dispatch => {
  return {isSignedIn: authUser => dispatch({type: ActionTypes.SIGNED_IN, payload: authUser})}
};

export default connect(null, mapDispatchToProps)(App);
